// https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElastigroupAwsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#auto_healing ElastigroupAws#auto_healing}
  */
  readonly autoHealing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#availability_zones ElastigroupAws#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#block_devices_mode ElastigroupAws#block_devices_mode}
  */
  readonly blockDevicesMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#capacity_unit ElastigroupAws#capacity_unit}
  */
  readonly capacityUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#consider_od_pricing ElastigroupAws#consider_od_pricing}
  */
  readonly considerOdPricing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#cpu_credits ElastigroupAws#cpu_credits}
  */
  readonly cpuCredits?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#description ElastigroupAws#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#desired_capacity ElastigroupAws#desired_capacity}
  */
  readonly desiredCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#draining_timeout ElastigroupAws#draining_timeout}
  */
  readonly drainingTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#ebs_optimized ElastigroupAws#ebs_optimized}
  */
  readonly ebsOptimized?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#elastic_ips ElastigroupAws#elastic_ips}
  */
  readonly elasticIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#elastic_load_balancers ElastigroupAws#elastic_load_balancers}
  */
  readonly elasticLoadBalancers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#enable_monitoring ElastigroupAws#enable_monitoring}
  */
  readonly enableMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#fallback_to_ondemand ElastigroupAws#fallback_to_ondemand}
  */
  readonly fallbackToOndemand: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#health_check_grace_period ElastigroupAws#health_check_grace_period}
  */
  readonly healthCheckGracePeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#health_check_type ElastigroupAws#health_check_type}
  */
  readonly healthCheckType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#health_check_unhealthy_duration_before_replacement ElastigroupAws#health_check_unhealthy_duration_before_replacement}
  */
  readonly healthCheckUnhealthyDurationBeforeReplacement?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#iam_instance_profile ElastigroupAws#iam_instance_profile}
  */
  readonly iamInstanceProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#id ElastigroupAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#image_id ElastigroupAws#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#immediate_od_recover_threshold ElastigroupAws#immediate_od_recover_threshold}
  */
  readonly immediateOdRecoverThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#instance_types_ondemand ElastigroupAws#instance_types_ondemand}
  */
  readonly instanceTypesOndemand?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#instance_types_preferred_spot ElastigroupAws#instance_types_preferred_spot}
  */
  readonly instanceTypesPreferredSpot?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#instance_types_spot ElastigroupAws#instance_types_spot}
  */
  readonly instanceTypesSpot?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#key_name ElastigroupAws#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#lifetime_period ElastigroupAws#lifetime_period}
  */
  readonly lifetimePeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#max_replacements_percentage ElastigroupAws#max_replacements_percentage}
  */
  readonly maxReplacementsPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#max_size ElastigroupAws#max_size}
  */
  readonly maxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#min_size ElastigroupAws#min_size}
  */
  readonly minSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#minimum_instance_lifetime ElastigroupAws#minimum_instance_lifetime}
  */
  readonly minimumInstanceLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#name ElastigroupAws#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#on_demand_types ElastigroupAws#on_demand_types}
  */
  readonly onDemandTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#ondemand_count ElastigroupAws#ondemand_count}
  */
  readonly ondemandCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#orientation ElastigroupAws#orientation}
  */
  readonly orientation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#persist_block_devices ElastigroupAws#persist_block_devices}
  */
  readonly persistBlockDevices?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#persist_private_ip ElastigroupAws#persist_private_ip}
  */
  readonly persistPrivateIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#persist_root_device ElastigroupAws#persist_root_device}
  */
  readonly persistRootDevice?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#placement_tenancy ElastigroupAws#placement_tenancy}
  */
  readonly placementTenancy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#preferred_availability_zones ElastigroupAws#preferred_availability_zones}
  */
  readonly preferredAvailabilityZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#private_ips ElastigroupAws#private_ips}
  */
  readonly privateIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#product ElastigroupAws#product}
  */
  readonly product: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#region ElastigroupAws#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#restrict_single_az ElastigroupAws#restrict_single_az}
  */
  readonly restrictSingleAz?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#security_groups ElastigroupAws#security_groups}
  */
  readonly securityGroups: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#shutdown_script ElastigroupAws#shutdown_script}
  */
  readonly shutdownScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#spot_percentage ElastigroupAws#spot_percentage}
  */
  readonly spotPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#subnet_ids ElastigroupAws#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#target_group_arns ElastigroupAws#target_group_arns}
  */
  readonly targetGroupArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#user_data ElastigroupAws#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#utilize_commitments ElastigroupAws#utilize_commitments}
  */
  readonly utilizeCommitments?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#utilize_reserved_instances ElastigroupAws#utilize_reserved_instances}
  */
  readonly utilizeReservedInstances?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#wait_for_capacity ElastigroupAws#wait_for_capacity}
  */
  readonly waitForCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#wait_for_capacity_timeout ElastigroupAws#wait_for_capacity_timeout}
  */
  readonly waitForCapacityTimeout?: number;
  /**
  * cpu_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#cpu_options ElastigroupAws#cpu_options}
  */
  readonly cpuOptions?: ElastigroupAwsCpuOptions;
  /**
  * ebs_block_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#ebs_block_device ElastigroupAws#ebs_block_device}
  */
  readonly ebsBlockDevice?: ElastigroupAwsEbsBlockDevice[] | cdktf.IResolvable;
  /**
  * ephemeral_block_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#ephemeral_block_device ElastigroupAws#ephemeral_block_device}
  */
  readonly ephemeralBlockDevice?: ElastigroupAwsEphemeralBlockDevice[] | cdktf.IResolvable;
  /**
  * images block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#images ElastigroupAws#images}
  */
  readonly images?: ElastigroupAwsImages[] | cdktf.IResolvable;
  /**
  * instance_types_weights block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#instance_types_weights ElastigroupAws#instance_types_weights}
  */
  readonly instanceTypesWeights?: ElastigroupAwsInstanceTypesWeights[] | cdktf.IResolvable;
  /**
  * integration_beanstalk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#integration_beanstalk ElastigroupAws#integration_beanstalk}
  */
  readonly integrationBeanstalk?: ElastigroupAwsIntegrationBeanstalk;
  /**
  * integration_codedeploy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#integration_codedeploy ElastigroupAws#integration_codedeploy}
  */
  readonly integrationCodedeploy?: ElastigroupAwsIntegrationCodedeploy;
  /**
  * integration_docker_swarm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#integration_docker_swarm ElastigroupAws#integration_docker_swarm}
  */
  readonly integrationDockerSwarm?: ElastigroupAwsIntegrationDockerSwarm;
  /**
  * integration_ecs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#integration_ecs ElastigroupAws#integration_ecs}
  */
  readonly integrationEcs?: ElastigroupAwsIntegrationEcs;
  /**
  * integration_gitlab block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#integration_gitlab ElastigroupAws#integration_gitlab}
  */
  readonly integrationGitlab?: ElastigroupAwsIntegrationGitlab;
  /**
  * integration_kubernetes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#integration_kubernetes ElastigroupAws#integration_kubernetes}
  */
  readonly integrationKubernetes?: ElastigroupAwsIntegrationKubernetes;
  /**
  * integration_mesosphere block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#integration_mesosphere ElastigroupAws#integration_mesosphere}
  */
  readonly integrationMesosphere?: ElastigroupAwsIntegrationMesosphere;
  /**
  * integration_nomad block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#integration_nomad ElastigroupAws#integration_nomad}
  */
  readonly integrationNomad?: ElastigroupAwsIntegrationNomad;
  /**
  * integration_rancher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#integration_rancher ElastigroupAws#integration_rancher}
  */
  readonly integrationRancher?: ElastigroupAwsIntegrationRancher;
  /**
  * integration_route53 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#integration_route53 ElastigroupAws#integration_route53}
  */
  readonly integrationRoute53?: ElastigroupAwsIntegrationRoute53;
  /**
  * itf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#itf ElastigroupAws#itf}
  */
  readonly itf?: ElastigroupAwsItf[] | cdktf.IResolvable;
  /**
  * logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#logging ElastigroupAws#logging}
  */
  readonly logging?: ElastigroupAwsLogging;
  /**
  * metadata_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#metadata_options ElastigroupAws#metadata_options}
  */
  readonly metadataOptions?: ElastigroupAwsMetadataOptions;
  /**
  * multiple_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#multiple_metrics ElastigroupAws#multiple_metrics}
  */
  readonly multipleMetrics?: ElastigroupAwsMultipleMetrics;
  /**
  * network_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#network_interface ElastigroupAws#network_interface}
  */
  readonly networkInterface?: ElastigroupAwsNetworkInterface[] | cdktf.IResolvable;
  /**
  * resource_requirements block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#resource_requirements ElastigroupAws#resource_requirements}
  */
  readonly resourceRequirements?: ElastigroupAwsResourceRequirements[] | cdktf.IResolvable;
  /**
  * resource_tag_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#resource_tag_specification ElastigroupAws#resource_tag_specification}
  */
  readonly resourceTagSpecification?: ElastigroupAwsResourceTagSpecification[] | cdktf.IResolvable;
  /**
  * revert_to_spot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#revert_to_spot ElastigroupAws#revert_to_spot}
  */
  readonly revertToSpot?: ElastigroupAwsRevertToSpot;
  /**
  * scaling_down_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#scaling_down_policy ElastigroupAws#scaling_down_policy}
  */
  readonly scalingDownPolicy?: ElastigroupAwsScalingDownPolicy[] | cdktf.IResolvable;
  /**
  * scaling_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#scaling_strategy ElastigroupAws#scaling_strategy}
  */
  readonly scalingStrategy?: ElastigroupAwsScalingStrategy[] | cdktf.IResolvable;
  /**
  * scaling_target_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#scaling_target_policy ElastigroupAws#scaling_target_policy}
  */
  readonly scalingTargetPolicy?: ElastigroupAwsScalingTargetPolicy[] | cdktf.IResolvable;
  /**
  * scaling_up_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#scaling_up_policy ElastigroupAws#scaling_up_policy}
  */
  readonly scalingUpPolicy?: ElastigroupAwsScalingUpPolicy[] | cdktf.IResolvable;
  /**
  * scheduled_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#scheduled_task ElastigroupAws#scheduled_task}
  */
  readonly scheduledTask?: ElastigroupAwsScheduledTask[] | cdktf.IResolvable;
  /**
  * signal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#signal ElastigroupAws#signal}
  */
  readonly signal?: ElastigroupAwsSignal[] | cdktf.IResolvable;
  /**
  * stateful_deallocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#stateful_deallocation ElastigroupAws#stateful_deallocation}
  */
  readonly statefulDeallocation?: ElastigroupAwsStatefulDeallocation;
  /**
  * stateful_instance_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#stateful_instance_action ElastigroupAws#stateful_instance_action}
  */
  readonly statefulInstanceAction?: ElastigroupAwsStatefulInstanceAction[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#tags ElastigroupAws#tags}
  */
  readonly tags?: ElastigroupAwsTags[] | cdktf.IResolvable;
  /**
  * update_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#update_policy ElastigroupAws#update_policy}
  */
  readonly updatePolicy?: ElastigroupAwsUpdatePolicy;
}
export interface ElastigroupAwsCpuOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#threads_per_core ElastigroupAws#threads_per_core}
  */
  readonly threadsPerCore: number;
}

export function elastigroupAwsCpuOptionsToTerraform(struct?: ElastigroupAwsCpuOptionsOutputReference | ElastigroupAwsCpuOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threads_per_core: cdktf.numberToTerraform(struct!.threadsPerCore),
  }
}


export function elastigroupAwsCpuOptionsToHclTerraform(struct?: ElastigroupAwsCpuOptionsOutputReference | ElastigroupAwsCpuOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threads_per_core: {
      value: cdktf.numberToHclTerraform(struct!.threadsPerCore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsCpuOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsCpuOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threadsPerCore !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadsPerCore = this._threadsPerCore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsCpuOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threadsPerCore = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threadsPerCore = value.threadsPerCore;
    }
  }

  // threads_per_core - computed: false, optional: false, required: true
  private _threadsPerCore?: number; 
  public get threadsPerCore() {
    return this.getNumberAttribute('threads_per_core');
  }
  public set threadsPerCore(value: number) {
    this._threadsPerCore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get threadsPerCoreInput() {
    return this._threadsPerCore;
  }
}
export interface ElastigroupAwsEbsBlockDeviceDynamicIops {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#base_size ElastigroupAws#base_size}
  */
  readonly baseSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#resource ElastigroupAws#resource}
  */
  readonly resource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#size_per_resource_unit ElastigroupAws#size_per_resource_unit}
  */
  readonly sizePerResourceUnit?: number;
}

export function elastigroupAwsEbsBlockDeviceDynamicIopsToTerraform(struct?: ElastigroupAwsEbsBlockDeviceDynamicIopsOutputReference | ElastigroupAwsEbsBlockDeviceDynamicIops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_size: cdktf.numberToTerraform(struct!.baseSize),
    resource: cdktf.stringToTerraform(struct!.resource),
    size_per_resource_unit: cdktf.numberToTerraform(struct!.sizePerResourceUnit),
  }
}


export function elastigroupAwsEbsBlockDeviceDynamicIopsToHclTerraform(struct?: ElastigroupAwsEbsBlockDeviceDynamicIopsOutputReference | ElastigroupAwsEbsBlockDeviceDynamicIops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_size: {
      value: cdktf.numberToHclTerraform(struct!.baseSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_per_resource_unit: {
      value: cdktf.numberToHclTerraform(struct!.sizePerResourceUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsEbsBlockDeviceDynamicIopsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsEbsBlockDeviceDynamicIops | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseSize = this._baseSize;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._sizePerResourceUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizePerResourceUnit = this._sizePerResourceUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsEbsBlockDeviceDynamicIops | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseSize = undefined;
      this._resource = undefined;
      this._sizePerResourceUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseSize = value.baseSize;
      this._resource = value.resource;
      this._sizePerResourceUnit = value.sizePerResourceUnit;
    }
  }

  // base_size - computed: false, optional: true, required: false
  private _baseSize?: number; 
  public get baseSize() {
    return this.getNumberAttribute('base_size');
  }
  public set baseSize(value: number) {
    this._baseSize = value;
  }
  public resetBaseSize() {
    this._baseSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseSizeInput() {
    return this._baseSize;
  }

  // resource - computed: false, optional: true, required: false
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

  // size_per_resource_unit - computed: false, optional: true, required: false
  private _sizePerResourceUnit?: number; 
  public get sizePerResourceUnit() {
    return this.getNumberAttribute('size_per_resource_unit');
  }
  public set sizePerResourceUnit(value: number) {
    this._sizePerResourceUnit = value;
  }
  public resetSizePerResourceUnit() {
    this._sizePerResourceUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizePerResourceUnitInput() {
    return this._sizePerResourceUnit;
  }
}
export interface ElastigroupAwsEbsBlockDeviceDynamicVolumeSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#base_size ElastigroupAws#base_size}
  */
  readonly baseSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#resource ElastigroupAws#resource}
  */
  readonly resource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#size_per_resource_unit ElastigroupAws#size_per_resource_unit}
  */
  readonly sizePerResourceUnit?: number;
}

export function elastigroupAwsEbsBlockDeviceDynamicVolumeSizeToTerraform(struct?: ElastigroupAwsEbsBlockDeviceDynamicVolumeSizeOutputReference | ElastigroupAwsEbsBlockDeviceDynamicVolumeSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_size: cdktf.numberToTerraform(struct!.baseSize),
    resource: cdktf.stringToTerraform(struct!.resource),
    size_per_resource_unit: cdktf.numberToTerraform(struct!.sizePerResourceUnit),
  }
}


export function elastigroupAwsEbsBlockDeviceDynamicVolumeSizeToHclTerraform(struct?: ElastigroupAwsEbsBlockDeviceDynamicVolumeSizeOutputReference | ElastigroupAwsEbsBlockDeviceDynamicVolumeSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_size: {
      value: cdktf.numberToHclTerraform(struct!.baseSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_per_resource_unit: {
      value: cdktf.numberToHclTerraform(struct!.sizePerResourceUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsEbsBlockDeviceDynamicVolumeSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsEbsBlockDeviceDynamicVolumeSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseSize = this._baseSize;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._sizePerResourceUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizePerResourceUnit = this._sizePerResourceUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsEbsBlockDeviceDynamicVolumeSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseSize = undefined;
      this._resource = undefined;
      this._sizePerResourceUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseSize = value.baseSize;
      this._resource = value.resource;
      this._sizePerResourceUnit = value.sizePerResourceUnit;
    }
  }

  // base_size - computed: false, optional: true, required: false
  private _baseSize?: number; 
  public get baseSize() {
    return this.getNumberAttribute('base_size');
  }
  public set baseSize(value: number) {
    this._baseSize = value;
  }
  public resetBaseSize() {
    this._baseSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseSizeInput() {
    return this._baseSize;
  }

  // resource - computed: false, optional: true, required: false
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

  // size_per_resource_unit - computed: false, optional: true, required: false
  private _sizePerResourceUnit?: number; 
  public get sizePerResourceUnit() {
    return this.getNumberAttribute('size_per_resource_unit');
  }
  public set sizePerResourceUnit(value: number) {
    this._sizePerResourceUnit = value;
  }
  public resetSizePerResourceUnit() {
    this._sizePerResourceUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizePerResourceUnitInput() {
    return this._sizePerResourceUnit;
  }
}
export interface ElastigroupAwsEbsBlockDevice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#delete_on_termination ElastigroupAws#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#device_name ElastigroupAws#device_name}
  */
  readonly deviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#encrypted ElastigroupAws#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#iops ElastigroupAws#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#kms_key_id ElastigroupAws#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#snapshot_id ElastigroupAws#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#throughput ElastigroupAws#throughput}
  */
  readonly throughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#volume_size ElastigroupAws#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#volume_type ElastigroupAws#volume_type}
  */
  readonly volumeType?: string;
  /**
  * dynamic_iops block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#dynamic_iops ElastigroupAws#dynamic_iops}
  */
  readonly dynamicIops?: ElastigroupAwsEbsBlockDeviceDynamicIops;
  /**
  * dynamic_volume_size block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#dynamic_volume_size ElastigroupAws#dynamic_volume_size}
  */
  readonly dynamicVolumeSize?: ElastigroupAwsEbsBlockDeviceDynamicVolumeSize;
}

export function elastigroupAwsEbsBlockDeviceToTerraform(struct?: ElastigroupAwsEbsBlockDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    iops: cdktf.numberToTerraform(struct!.iops),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
    throughput: cdktf.numberToTerraform(struct!.throughput),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
    dynamic_iops: elastigroupAwsEbsBlockDeviceDynamicIopsToTerraform(struct!.dynamicIops),
    dynamic_volume_size: elastigroupAwsEbsBlockDeviceDynamicVolumeSizeToTerraform(struct!.dynamicVolumeSize),
  }
}


export function elastigroupAwsEbsBlockDeviceToHclTerraform(struct?: ElastigroupAwsEbsBlockDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_on_termination: {
      value: cdktf.booleanToHclTerraform(struct!.deleteOnTermination),
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
    encrypted: {
      value: cdktf.booleanToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iops: {
      value: cdktf.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
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
    throughput: {
      value: cdktf.numberToHclTerraform(struct!.throughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_size: {
      value: cdktf.numberToHclTerraform(struct!.volumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_type: {
      value: cdktf.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_iops: {
      value: elastigroupAwsEbsBlockDeviceDynamicIopsToHclTerraform(struct!.dynamicIops),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAwsEbsBlockDeviceDynamicIopsList",
    },
    dynamic_volume_size: {
      value: elastigroupAwsEbsBlockDeviceDynamicVolumeSizeToHclTerraform(struct!.dynamicVolumeSize),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAwsEbsBlockDeviceDynamicVolumeSizeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsEbsBlockDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsEbsBlockDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteOnTermination !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteOnTermination = this._deleteOnTermination;
    }
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    if (this._throughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughput = this._throughput;
    }
    if (this._volumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSize = this._volumeSize;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    if (this._dynamicIops?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicIops = this._dynamicIops?.internalValue;
    }
    if (this._dynamicVolumeSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicVolumeSize = this._dynamicVolumeSize?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsEbsBlockDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteOnTermination = undefined;
      this._deviceName = undefined;
      this._encrypted = undefined;
      this._iops = undefined;
      this._kmsKeyId = undefined;
      this._snapshotId = undefined;
      this._throughput = undefined;
      this._volumeSize = undefined;
      this._volumeType = undefined;
      this._dynamicIops.internalValue = undefined;
      this._dynamicVolumeSize.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteOnTermination = value.deleteOnTermination;
      this._deviceName = value.deviceName;
      this._encrypted = value.encrypted;
      this._iops = value.iops;
      this._kmsKeyId = value.kmsKeyId;
      this._snapshotId = value.snapshotId;
      this._throughput = value.throughput;
      this._volumeSize = value.volumeSize;
      this._volumeType = value.volumeType;
      this._dynamicIops.internalValue = value.dynamicIops;
      this._dynamicVolumeSize.internalValue = value.dynamicVolumeSize;
    }
  }

  // delete_on_termination - computed: true, optional: true, required: false
  private _deleteOnTermination?: boolean | cdktf.IResolvable; 
  public get deleteOnTermination() {
    return this.getBooleanAttribute('delete_on_termination');
  }
  public set deleteOnTermination(value: boolean | cdktf.IResolvable) {
    this._deleteOnTermination = value;
  }
  public resetDeleteOnTermination() {
    this._deleteOnTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOnTerminationInput() {
    return this._deleteOnTermination;
  }

  // device_name - computed: false, optional: false, required: true
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // encrypted - computed: true, optional: true, required: false
  private _encrypted?: boolean | cdktf.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktf.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // iops - computed: false, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
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

  // throughput - computed: false, optional: true, required: false
  private _throughput?: number; 
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }
  public set throughput(value: number) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
  }

  // volume_size - computed: false, optional: true, required: false
  private _volumeSize?: number; 
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
  public set volumeSize(value: number) {
    this._volumeSize = value;
  }
  public resetVolumeSize() {
    this._volumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize;
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

  // dynamic_iops - computed: false, optional: true, required: false
  private _dynamicIops = new ElastigroupAwsEbsBlockDeviceDynamicIopsOutputReference(this, "dynamic_iops");
  public get dynamicIops() {
    return this._dynamicIops;
  }
  public putDynamicIops(value: ElastigroupAwsEbsBlockDeviceDynamicIops) {
    this._dynamicIops.internalValue = value;
  }
  public resetDynamicIops() {
    this._dynamicIops.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicIopsInput() {
    return this._dynamicIops.internalValue;
  }

  // dynamic_volume_size - computed: false, optional: true, required: false
  private _dynamicVolumeSize = new ElastigroupAwsEbsBlockDeviceDynamicVolumeSizeOutputReference(this, "dynamic_volume_size");
  public get dynamicVolumeSize() {
    return this._dynamicVolumeSize;
  }
  public putDynamicVolumeSize(value: ElastigroupAwsEbsBlockDeviceDynamicVolumeSize) {
    this._dynamicVolumeSize.internalValue = value;
  }
  public resetDynamicVolumeSize() {
    this._dynamicVolumeSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicVolumeSizeInput() {
    return this._dynamicVolumeSize.internalValue;
  }
}

export class ElastigroupAwsEbsBlockDeviceList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsEbsBlockDevice[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsEbsBlockDeviceOutputReference {
    return new ElastigroupAwsEbsBlockDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsEphemeralBlockDevice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#device_name ElastigroupAws#device_name}
  */
  readonly deviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#virtual_name ElastigroupAws#virtual_name}
  */
  readonly virtualName: string;
}

export function elastigroupAwsEphemeralBlockDeviceToTerraform(struct?: ElastigroupAwsEphemeralBlockDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    virtual_name: cdktf.stringToTerraform(struct!.virtualName),
  }
}


export function elastigroupAwsEphemeralBlockDeviceToHclTerraform(struct?: ElastigroupAwsEphemeralBlockDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_name: {
      value: cdktf.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_name: {
      value: cdktf.stringToHclTerraform(struct!.virtualName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsEphemeralBlockDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsEphemeralBlockDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._virtualName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualName = this._virtualName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsEphemeralBlockDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceName = undefined;
      this._virtualName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceName = value.deviceName;
      this._virtualName = value.virtualName;
    }
  }

  // device_name - computed: false, optional: false, required: true
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // virtual_name - computed: false, optional: false, required: true
  private _virtualName?: string; 
  public get virtualName() {
    return this.getStringAttribute('virtual_name');
  }
  public set virtualName(value: string) {
    this._virtualName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNameInput() {
    return this._virtualName;
  }
}

export class ElastigroupAwsEphemeralBlockDeviceList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsEphemeralBlockDevice[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsEphemeralBlockDeviceOutputReference {
    return new ElastigroupAwsEphemeralBlockDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsImagesImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#id ElastigroupAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function elastigroupAwsImagesImageToTerraform(struct?: ElastigroupAwsImagesImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function elastigroupAwsImagesImageToHclTerraform(struct?: ElastigroupAwsImagesImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsImagesImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsImagesImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsImagesImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class ElastigroupAwsImagesImageList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsImagesImage[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsImagesImageOutputReference {
    return new ElastigroupAwsImagesImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsImages {
  /**
  * image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#image ElastigroupAws#image}
  */
  readonly image: ElastigroupAwsImagesImage[] | cdktf.IResolvable;
}

export function elastigroupAwsImagesToTerraform(struct?: ElastigroupAwsImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.listMapper(elastigroupAwsImagesImageToTerraform, true)(struct!.image),
  }
}


export function elastigroupAwsImagesToHclTerraform(struct?: ElastigroupAwsImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image: {
      value: cdktf.listMapperHcl(elastigroupAwsImagesImageToHclTerraform, true)(struct!.image),
      isBlock: true,
      type: "set",
      storageClassType: "ElastigroupAwsImagesImageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsImages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsImages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._image.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._image.internalValue = value.image;
    }
  }

  // image - computed: false, optional: false, required: true
  private _image = new ElastigroupAwsImagesImageList(this, "image", true);
  public get image() {
    return this._image;
  }
  public putImage(value: ElastigroupAwsImagesImage[] | cdktf.IResolvable) {
    this._image.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }
}

export class ElastigroupAwsImagesList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsImages[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsImagesOutputReference {
    return new ElastigroupAwsImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsInstanceTypesWeights {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#instance_type ElastigroupAws#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#weight ElastigroupAws#weight}
  */
  readonly weight: number;
}

export function elastigroupAwsInstanceTypesWeightsToTerraform(struct?: ElastigroupAwsInstanceTypesWeights | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function elastigroupAwsInstanceTypesWeightsToHclTerraform(struct?: ElastigroupAwsInstanceTypesWeights | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsInstanceTypesWeightsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsInstanceTypesWeights | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsInstanceTypesWeights | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceType = value.instanceType;
      this._weight = value.weight;
    }
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ElastigroupAwsInstanceTypesWeightsList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsInstanceTypesWeights[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsInstanceTypesWeightsOutputReference {
    return new ElastigroupAwsInstanceTypesWeightsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsIntegrationBeanstalkDeploymentPreferencesStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#action ElastigroupAws#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#should_drain_instances ElastigroupAws#should_drain_instances}
  */
  readonly shouldDrainInstances?: boolean | cdktf.IResolvable;
}

export function elastigroupAwsIntegrationBeanstalkDeploymentPreferencesStrategyToTerraform(struct?: ElastigroupAwsIntegrationBeanstalkDeploymentPreferencesStrategyOutputReference | ElastigroupAwsIntegrationBeanstalkDeploymentPreferencesStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    should_drain_instances: cdktf.booleanToTerraform(struct!.shouldDrainInstances),
  }
}


export function elastigroupAwsIntegrationBeanstalkDeploymentPreferencesStrategyToHclTerraform(struct?: ElastigroupAwsIntegrationBeanstalkDeploymentPreferencesStrategyOutputReference | ElastigroupAwsIntegrationBeanstalkDeploymentPreferencesStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_drain_instances: {
      value: cdktf.booleanToHclTerraform(struct!.shouldDrainInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsIntegrationBeanstalkDeploymentPreferencesStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationBeanstalkDeploymentPreferencesStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._shouldDrainInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldDrainInstances = this._shouldDrainInstances;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationBeanstalkDeploymentPreferencesStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._shouldDrainInstances = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._shouldDrainInstances = value.shouldDrainInstances;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // should_drain_instances - computed: false, optional: true, required: false
  private _shouldDrainInstances?: boolean | cdktf.IResolvable; 
  public get shouldDrainInstances() {
    return this.getBooleanAttribute('should_drain_instances');
  }
  public set shouldDrainInstances(value: boolean | cdktf.IResolvable) {
    this._shouldDrainInstances = value;
  }
  public resetShouldDrainInstances() {
    this._shouldDrainInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldDrainInstancesInput() {
    return this._shouldDrainInstances;
  }
}
export interface ElastigroupAwsIntegrationBeanstalkDeploymentPreferences {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#automatic_roll ElastigroupAws#automatic_roll}
  */
  readonly automaticRoll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#batch_size_percentage ElastigroupAws#batch_size_percentage}
  */
  readonly batchSizePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#grace_period ElastigroupAws#grace_period}
  */
  readonly gracePeriod?: number;
  /**
  * strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#strategy ElastigroupAws#strategy}
  */
  readonly strategy?: ElastigroupAwsIntegrationBeanstalkDeploymentPreferencesStrategy;
}

export function elastigroupAwsIntegrationBeanstalkDeploymentPreferencesToTerraform(struct?: ElastigroupAwsIntegrationBeanstalkDeploymentPreferencesOutputReference | ElastigroupAwsIntegrationBeanstalkDeploymentPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_roll: cdktf.booleanToTerraform(struct!.automaticRoll),
    batch_size_percentage: cdktf.numberToTerraform(struct!.batchSizePercentage),
    grace_period: cdktf.numberToTerraform(struct!.gracePeriod),
    strategy: elastigroupAwsIntegrationBeanstalkDeploymentPreferencesStrategyToTerraform(struct!.strategy),
  }
}


export function elastigroupAwsIntegrationBeanstalkDeploymentPreferencesToHclTerraform(struct?: ElastigroupAwsIntegrationBeanstalkDeploymentPreferencesOutputReference | ElastigroupAwsIntegrationBeanstalkDeploymentPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automatic_roll: {
      value: cdktf.booleanToHclTerraform(struct!.automaticRoll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    batch_size_percentage: {
      value: cdktf.numberToHclTerraform(struct!.batchSizePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grace_period: {
      value: cdktf.numberToHclTerraform(struct!.gracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strategy: {
      value: elastigroupAwsIntegrationBeanstalkDeploymentPreferencesStrategyToHclTerraform(struct!.strategy),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAwsIntegrationBeanstalkDeploymentPreferencesStrategyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsIntegrationBeanstalkDeploymentPreferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationBeanstalkDeploymentPreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticRoll !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticRoll = this._automaticRoll;
    }
    if (this._batchSizePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSizePercentage = this._batchSizePercentage;
    }
    if (this._gracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriod = this._gracePeriod;
    }
    if (this._strategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationBeanstalkDeploymentPreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticRoll = undefined;
      this._batchSizePercentage = undefined;
      this._gracePeriod = undefined;
      this._strategy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticRoll = value.automaticRoll;
      this._batchSizePercentage = value.batchSizePercentage;
      this._gracePeriod = value.gracePeriod;
      this._strategy.internalValue = value.strategy;
    }
  }

  // automatic_roll - computed: false, optional: true, required: false
  private _automaticRoll?: boolean | cdktf.IResolvable; 
  public get automaticRoll() {
    return this.getBooleanAttribute('automatic_roll');
  }
  public set automaticRoll(value: boolean | cdktf.IResolvable) {
    this._automaticRoll = value;
  }
  public resetAutomaticRoll() {
    this._automaticRoll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticRollInput() {
    return this._automaticRoll;
  }

  // batch_size_percentage - computed: false, optional: true, required: false
  private _batchSizePercentage?: number; 
  public get batchSizePercentage() {
    return this.getNumberAttribute('batch_size_percentage');
  }
  public set batchSizePercentage(value: number) {
    this._batchSizePercentage = value;
  }
  public resetBatchSizePercentage() {
    this._batchSizePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizePercentageInput() {
    return this._batchSizePercentage;
  }

  // grace_period - computed: false, optional: true, required: false
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

  // strategy - computed: false, optional: true, required: false
  private _strategy = new ElastigroupAwsIntegrationBeanstalkDeploymentPreferencesStrategyOutputReference(this, "strategy");
  public get strategy() {
    return this._strategy;
  }
  public putStrategy(value: ElastigroupAwsIntegrationBeanstalkDeploymentPreferencesStrategy) {
    this._strategy.internalValue = value;
  }
  public resetStrategy() {
    this._strategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy.internalValue;
  }
}
export interface ElastigroupAwsIntegrationBeanstalkManagedActionsPlatformUpdate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#perform_at ElastigroupAws#perform_at}
  */
  readonly performAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#time_window ElastigroupAws#time_window}
  */
  readonly timeWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#update_level ElastigroupAws#update_level}
  */
  readonly updateLevel?: string;
}

export function elastigroupAwsIntegrationBeanstalkManagedActionsPlatformUpdateToTerraform(struct?: ElastigroupAwsIntegrationBeanstalkManagedActionsPlatformUpdateOutputReference | ElastigroupAwsIntegrationBeanstalkManagedActionsPlatformUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    perform_at: cdktf.stringToTerraform(struct!.performAt),
    time_window: cdktf.stringToTerraform(struct!.timeWindow),
    update_level: cdktf.stringToTerraform(struct!.updateLevel),
  }
}


export function elastigroupAwsIntegrationBeanstalkManagedActionsPlatformUpdateToHclTerraform(struct?: ElastigroupAwsIntegrationBeanstalkManagedActionsPlatformUpdateOutputReference | ElastigroupAwsIntegrationBeanstalkManagedActionsPlatformUpdate): any {
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
    time_window: {
      value: cdktf.stringToHclTerraform(struct!.timeWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_level: {
      value: cdktf.stringToHclTerraform(struct!.updateLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsIntegrationBeanstalkManagedActionsPlatformUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationBeanstalkManagedActionsPlatformUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._performAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.performAt = this._performAt;
    }
    if (this._timeWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindow = this._timeWindow;
    }
    if (this._updateLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateLevel = this._updateLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationBeanstalkManagedActionsPlatformUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._performAt = undefined;
      this._timeWindow = undefined;
      this._updateLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._performAt = value.performAt;
      this._timeWindow = value.timeWindow;
      this._updateLevel = value.updateLevel;
    }
  }

  // perform_at - computed: false, optional: true, required: false
  private _performAt?: string; 
  public get performAt() {
    return this.getStringAttribute('perform_at');
  }
  public set performAt(value: string) {
    this._performAt = value;
  }
  public resetPerformAt() {
    this._performAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performAtInput() {
    return this._performAt;
  }

  // time_window - computed: false, optional: true, required: false
  private _timeWindow?: string; 
  public get timeWindow() {
    return this.getStringAttribute('time_window');
  }
  public set timeWindow(value: string) {
    this._timeWindow = value;
  }
  public resetTimeWindow() {
    this._timeWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow;
  }

  // update_level - computed: false, optional: true, required: false
  private _updateLevel?: string; 
  public get updateLevel() {
    return this.getStringAttribute('update_level');
  }
  public set updateLevel(value: string) {
    this._updateLevel = value;
  }
  public resetUpdateLevel() {
    this._updateLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateLevelInput() {
    return this._updateLevel;
  }
}
export interface ElastigroupAwsIntegrationBeanstalkManagedActions {
  /**
  * platform_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#platform_update ElastigroupAws#platform_update}
  */
  readonly platformUpdate?: ElastigroupAwsIntegrationBeanstalkManagedActionsPlatformUpdate;
}

export function elastigroupAwsIntegrationBeanstalkManagedActionsToTerraform(struct?: ElastigroupAwsIntegrationBeanstalkManagedActionsOutputReference | ElastigroupAwsIntegrationBeanstalkManagedActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    platform_update: elastigroupAwsIntegrationBeanstalkManagedActionsPlatformUpdateToTerraform(struct!.platformUpdate),
  }
}


export function elastigroupAwsIntegrationBeanstalkManagedActionsToHclTerraform(struct?: ElastigroupAwsIntegrationBeanstalkManagedActionsOutputReference | ElastigroupAwsIntegrationBeanstalkManagedActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    platform_update: {
      value: elastigroupAwsIntegrationBeanstalkManagedActionsPlatformUpdateToHclTerraform(struct!.platformUpdate),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAwsIntegrationBeanstalkManagedActionsPlatformUpdateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsIntegrationBeanstalkManagedActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationBeanstalkManagedActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._platformUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformUpdate = this._platformUpdate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationBeanstalkManagedActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._platformUpdate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._platformUpdate.internalValue = value.platformUpdate;
    }
  }

  // platform_update - computed: false, optional: true, required: false
  private _platformUpdate = new ElastigroupAwsIntegrationBeanstalkManagedActionsPlatformUpdateOutputReference(this, "platform_update");
  public get platformUpdate() {
    return this._platformUpdate;
  }
  public putPlatformUpdate(value: ElastigroupAwsIntegrationBeanstalkManagedActionsPlatformUpdate) {
    this._platformUpdate.internalValue = value;
  }
  public resetPlatformUpdate() {
    this._platformUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformUpdateInput() {
    return this._platformUpdate.internalValue;
  }
}
export interface ElastigroupAwsIntegrationBeanstalk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#environment_id ElastigroupAws#environment_id}
  */
  readonly environmentId?: string;
  /**
  * deployment_preferences block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#deployment_preferences ElastigroupAws#deployment_preferences}
  */
  readonly deploymentPreferences?: ElastigroupAwsIntegrationBeanstalkDeploymentPreferences;
  /**
  * managed_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#managed_actions ElastigroupAws#managed_actions}
  */
  readonly managedActions?: ElastigroupAwsIntegrationBeanstalkManagedActions;
}

export function elastigroupAwsIntegrationBeanstalkToTerraform(struct?: ElastigroupAwsIntegrationBeanstalkOutputReference | ElastigroupAwsIntegrationBeanstalk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment_id: cdktf.stringToTerraform(struct!.environmentId),
    deployment_preferences: elastigroupAwsIntegrationBeanstalkDeploymentPreferencesToTerraform(struct!.deploymentPreferences),
    managed_actions: elastigroupAwsIntegrationBeanstalkManagedActionsToTerraform(struct!.managedActions),
  }
}


export function elastigroupAwsIntegrationBeanstalkToHclTerraform(struct?: ElastigroupAwsIntegrationBeanstalkOutputReference | ElastigroupAwsIntegrationBeanstalk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment_id: {
      value: cdktf.stringToHclTerraform(struct!.environmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deployment_preferences: {
      value: elastigroupAwsIntegrationBeanstalkDeploymentPreferencesToHclTerraform(struct!.deploymentPreferences),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAwsIntegrationBeanstalkDeploymentPreferencesList",
    },
    managed_actions: {
      value: elastigroupAwsIntegrationBeanstalkManagedActionsToHclTerraform(struct!.managedActions),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAwsIntegrationBeanstalkManagedActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsIntegrationBeanstalkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationBeanstalk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentId = this._environmentId;
    }
    if (this._deploymentPreferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentPreferences = this._deploymentPreferences?.internalValue;
    }
    if (this._managedActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedActions = this._managedActions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationBeanstalk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._environmentId = undefined;
      this._deploymentPreferences.internalValue = undefined;
      this._managedActions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._environmentId = value.environmentId;
      this._deploymentPreferences.internalValue = value.deploymentPreferences;
      this._managedActions.internalValue = value.managedActions;
    }
  }

  // environment_id - computed: false, optional: true, required: false
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  public resetEnvironmentId() {
    this._environmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // deployment_preferences - computed: false, optional: true, required: false
  private _deploymentPreferences = new ElastigroupAwsIntegrationBeanstalkDeploymentPreferencesOutputReference(this, "deployment_preferences");
  public get deploymentPreferences() {
    return this._deploymentPreferences;
  }
  public putDeploymentPreferences(value: ElastigroupAwsIntegrationBeanstalkDeploymentPreferences) {
    this._deploymentPreferences.internalValue = value;
  }
  public resetDeploymentPreferences() {
    this._deploymentPreferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentPreferencesInput() {
    return this._deploymentPreferences.internalValue;
  }

  // managed_actions - computed: false, optional: true, required: false
  private _managedActions = new ElastigroupAwsIntegrationBeanstalkManagedActionsOutputReference(this, "managed_actions");
  public get managedActions() {
    return this._managedActions;
  }
  public putManagedActions(value: ElastigroupAwsIntegrationBeanstalkManagedActions) {
    this._managedActions.internalValue = value;
  }
  public resetManagedActions() {
    this._managedActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedActionsInput() {
    return this._managedActions.internalValue;
  }
}
export interface ElastigroupAwsIntegrationCodedeployDeploymentGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#application_name ElastigroupAws#application_name}
  */
  readonly applicationName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#deployment_group_name ElastigroupAws#deployment_group_name}
  */
  readonly deploymentGroupName: string;
}

export function elastigroupAwsIntegrationCodedeployDeploymentGroupsToTerraform(struct?: ElastigroupAwsIntegrationCodedeployDeploymentGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_name: cdktf.stringToTerraform(struct!.applicationName),
    deployment_group_name: cdktf.stringToTerraform(struct!.deploymentGroupName),
  }
}


export function elastigroupAwsIntegrationCodedeployDeploymentGroupsToHclTerraform(struct?: ElastigroupAwsIntegrationCodedeployDeploymentGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_name: {
      value: cdktf.stringToHclTerraform(struct!.applicationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deployment_group_name: {
      value: cdktf.stringToHclTerraform(struct!.deploymentGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsIntegrationCodedeployDeploymentGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsIntegrationCodedeployDeploymentGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationName = this._applicationName;
    }
    if (this._deploymentGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentGroupName = this._deploymentGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationCodedeployDeploymentGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationName = undefined;
      this._deploymentGroupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationName = value.applicationName;
      this._deploymentGroupName = value.deploymentGroupName;
    }
  }

  // application_name - computed: false, optional: false, required: true
  private _applicationName?: string; 
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }
  public set applicationName(value: string) {
    this._applicationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName;
  }

  // deployment_group_name - computed: false, optional: false, required: true
  private _deploymentGroupName?: string; 
  public get deploymentGroupName() {
    return this.getStringAttribute('deployment_group_name');
  }
  public set deploymentGroupName(value: string) {
    this._deploymentGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentGroupNameInput() {
    return this._deploymentGroupName;
  }
}

export class ElastigroupAwsIntegrationCodedeployDeploymentGroupsList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsIntegrationCodedeployDeploymentGroups[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsIntegrationCodedeployDeploymentGroupsOutputReference {
    return new ElastigroupAwsIntegrationCodedeployDeploymentGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsIntegrationCodedeploy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#cleanup_on_failure ElastigroupAws#cleanup_on_failure}
  */
  readonly cleanupOnFailure: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#terminate_instance_on_failure ElastigroupAws#terminate_instance_on_failure}
  */
  readonly terminateInstanceOnFailure: boolean | cdktf.IResolvable;
  /**
  * deployment_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#deployment_groups ElastigroupAws#deployment_groups}
  */
  readonly deploymentGroups: ElastigroupAwsIntegrationCodedeployDeploymentGroups[] | cdktf.IResolvable;
}

export function elastigroupAwsIntegrationCodedeployToTerraform(struct?: ElastigroupAwsIntegrationCodedeployOutputReference | ElastigroupAwsIntegrationCodedeploy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cleanup_on_failure: cdktf.booleanToTerraform(struct!.cleanupOnFailure),
    terminate_instance_on_failure: cdktf.booleanToTerraform(struct!.terminateInstanceOnFailure),
    deployment_groups: cdktf.listMapper(elastigroupAwsIntegrationCodedeployDeploymentGroupsToTerraform, true)(struct!.deploymentGroups),
  }
}


export function elastigroupAwsIntegrationCodedeployToHclTerraform(struct?: ElastigroupAwsIntegrationCodedeployOutputReference | ElastigroupAwsIntegrationCodedeploy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cleanup_on_failure: {
      value: cdktf.booleanToHclTerraform(struct!.cleanupOnFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    terminate_instance_on_failure: {
      value: cdktf.booleanToHclTerraform(struct!.terminateInstanceOnFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deployment_groups: {
      value: cdktf.listMapperHcl(elastigroupAwsIntegrationCodedeployDeploymentGroupsToHclTerraform, true)(struct!.deploymentGroups),
      isBlock: true,
      type: "set",
      storageClassType: "ElastigroupAwsIntegrationCodedeployDeploymentGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsIntegrationCodedeployOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationCodedeploy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleanupOnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanupOnFailure = this._cleanupOnFailure;
    }
    if (this._terminateInstanceOnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminateInstanceOnFailure = this._terminateInstanceOnFailure;
    }
    if (this._deploymentGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentGroups = this._deploymentGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationCodedeploy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cleanupOnFailure = undefined;
      this._terminateInstanceOnFailure = undefined;
      this._deploymentGroups.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cleanupOnFailure = value.cleanupOnFailure;
      this._terminateInstanceOnFailure = value.terminateInstanceOnFailure;
      this._deploymentGroups.internalValue = value.deploymentGroups;
    }
  }

  // cleanup_on_failure - computed: false, optional: false, required: true
  private _cleanupOnFailure?: boolean | cdktf.IResolvable; 
  public get cleanupOnFailure() {
    return this.getBooleanAttribute('cleanup_on_failure');
  }
  public set cleanupOnFailure(value: boolean | cdktf.IResolvable) {
    this._cleanupOnFailure = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupOnFailureInput() {
    return this._cleanupOnFailure;
  }

  // terminate_instance_on_failure - computed: false, optional: false, required: true
  private _terminateInstanceOnFailure?: boolean | cdktf.IResolvable; 
  public get terminateInstanceOnFailure() {
    return this.getBooleanAttribute('terminate_instance_on_failure');
  }
  public set terminateInstanceOnFailure(value: boolean | cdktf.IResolvable) {
    this._terminateInstanceOnFailure = value;
  }
  // Temporarily expose input value. Use with caution.
  public get terminateInstanceOnFailureInput() {
    return this._terminateInstanceOnFailure;
  }

  // deployment_groups - computed: false, optional: false, required: true
  private _deploymentGroups = new ElastigroupAwsIntegrationCodedeployDeploymentGroupsList(this, "deployment_groups", true);
  public get deploymentGroups() {
    return this._deploymentGroups;
  }
  public putDeploymentGroups(value: ElastigroupAwsIntegrationCodedeployDeploymentGroups[] | cdktf.IResolvable) {
    this._deploymentGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentGroupsInput() {
    return this._deploymentGroups.internalValue;
  }
}
export interface ElastigroupAwsIntegrationDockerSwarmAutoscaleDown {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#evaluation_periods ElastigroupAws#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#max_scale_down_percentage ElastigroupAws#max_scale_down_percentage}
  */
  readonly maxScaleDownPercentage?: number;
}

export function elastigroupAwsIntegrationDockerSwarmAutoscaleDownToTerraform(struct?: ElastigroupAwsIntegrationDockerSwarmAutoscaleDownOutputReference | ElastigroupAwsIntegrationDockerSwarmAutoscaleDown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
    max_scale_down_percentage: cdktf.numberToTerraform(struct!.maxScaleDownPercentage),
  }
}


export function elastigroupAwsIntegrationDockerSwarmAutoscaleDownToHclTerraform(struct?: ElastigroupAwsIntegrationDockerSwarmAutoscaleDownOutputReference | ElastigroupAwsIntegrationDockerSwarmAutoscaleDown): any {
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
    max_scale_down_percentage: {
      value: cdktf.numberToHclTerraform(struct!.maxScaleDownPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsIntegrationDockerSwarmAutoscaleDownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationDockerSwarmAutoscaleDown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluationPeriods !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationPeriods = this._evaluationPeriods;
    }
    if (this._maxScaleDownPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxScaleDownPercentage = this._maxScaleDownPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationDockerSwarmAutoscaleDown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._evaluationPeriods = undefined;
      this._maxScaleDownPercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._evaluationPeriods = value.evaluationPeriods;
      this._maxScaleDownPercentage = value.maxScaleDownPercentage;
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

  // max_scale_down_percentage - computed: false, optional: true, required: false
  private _maxScaleDownPercentage?: number; 
  public get maxScaleDownPercentage() {
    return this.getNumberAttribute('max_scale_down_percentage');
  }
  public set maxScaleDownPercentage(value: number) {
    this._maxScaleDownPercentage = value;
  }
  public resetMaxScaleDownPercentage() {
    this._maxScaleDownPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxScaleDownPercentageInput() {
    return this._maxScaleDownPercentage;
  }
}
export interface ElastigroupAwsIntegrationDockerSwarmAutoscaleHeadroom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#cpu_per_unit ElastigroupAws#cpu_per_unit}
  */
  readonly cpuPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#memory_per_unit ElastigroupAws#memory_per_unit}
  */
  readonly memoryPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#num_of_units ElastigroupAws#num_of_units}
  */
  readonly numOfUnits?: number;
}

export function elastigroupAwsIntegrationDockerSwarmAutoscaleHeadroomToTerraform(struct?: ElastigroupAwsIntegrationDockerSwarmAutoscaleHeadroomOutputReference | ElastigroupAwsIntegrationDockerSwarmAutoscaleHeadroom): any {
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


export function elastigroupAwsIntegrationDockerSwarmAutoscaleHeadroomToHclTerraform(struct?: ElastigroupAwsIntegrationDockerSwarmAutoscaleHeadroomOutputReference | ElastigroupAwsIntegrationDockerSwarmAutoscaleHeadroom): any {
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

export class ElastigroupAwsIntegrationDockerSwarmAutoscaleHeadroomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationDockerSwarmAutoscaleHeadroom | undefined {
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

  public set internalValue(value: ElastigroupAwsIntegrationDockerSwarmAutoscaleHeadroom | undefined) {
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
export interface ElastigroupAwsIntegrationDockerSwarm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#autoscale_cooldown ElastigroupAws#autoscale_cooldown}
  */
  readonly autoscaleCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#autoscale_is_enabled ElastigroupAws#autoscale_is_enabled}
  */
  readonly autoscaleIsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#master_host ElastigroupAws#master_host}
  */
  readonly masterHost: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#master_port ElastigroupAws#master_port}
  */
  readonly masterPort: number;
  /**
  * autoscale_down block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#autoscale_down ElastigroupAws#autoscale_down}
  */
  readonly autoscaleDown?: ElastigroupAwsIntegrationDockerSwarmAutoscaleDown;
  /**
  * autoscale_headroom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#autoscale_headroom ElastigroupAws#autoscale_headroom}
  */
  readonly autoscaleHeadroom?: ElastigroupAwsIntegrationDockerSwarmAutoscaleHeadroom;
}

export function elastigroupAwsIntegrationDockerSwarmToTerraform(struct?: ElastigroupAwsIntegrationDockerSwarmOutputReference | ElastigroupAwsIntegrationDockerSwarm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscale_cooldown: cdktf.numberToTerraform(struct!.autoscaleCooldown),
    autoscale_is_enabled: cdktf.booleanToTerraform(struct!.autoscaleIsEnabled),
    master_host: cdktf.stringToTerraform(struct!.masterHost),
    master_port: cdktf.numberToTerraform(struct!.masterPort),
    autoscale_down: elastigroupAwsIntegrationDockerSwarmAutoscaleDownToTerraform(struct!.autoscaleDown),
    autoscale_headroom: elastigroupAwsIntegrationDockerSwarmAutoscaleHeadroomToTerraform(struct!.autoscaleHeadroom),
  }
}


export function elastigroupAwsIntegrationDockerSwarmToHclTerraform(struct?: ElastigroupAwsIntegrationDockerSwarmOutputReference | ElastigroupAwsIntegrationDockerSwarm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscale_cooldown: {
      value: cdktf.numberToHclTerraform(struct!.autoscaleCooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    autoscale_is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.autoscaleIsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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
    autoscale_down: {
      value: elastigroupAwsIntegrationDockerSwarmAutoscaleDownToHclTerraform(struct!.autoscaleDown),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAwsIntegrationDockerSwarmAutoscaleDownList",
    },
    autoscale_headroom: {
      value: elastigroupAwsIntegrationDockerSwarmAutoscaleHeadroomToHclTerraform(struct!.autoscaleHeadroom),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAwsIntegrationDockerSwarmAutoscaleHeadroomList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsIntegrationDockerSwarmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationDockerSwarm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscaleCooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleCooldown = this._autoscaleCooldown;
    }
    if (this._autoscaleIsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleIsEnabled = this._autoscaleIsEnabled;
    }
    if (this._masterHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterHost = this._masterHost;
    }
    if (this._masterPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterPort = this._masterPort;
    }
    if (this._autoscaleDown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleDown = this._autoscaleDown?.internalValue;
    }
    if (this._autoscaleHeadroom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleHeadroom = this._autoscaleHeadroom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationDockerSwarm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoscaleCooldown = undefined;
      this._autoscaleIsEnabled = undefined;
      this._masterHost = undefined;
      this._masterPort = undefined;
      this._autoscaleDown.internalValue = undefined;
      this._autoscaleHeadroom.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoscaleCooldown = value.autoscaleCooldown;
      this._autoscaleIsEnabled = value.autoscaleIsEnabled;
      this._masterHost = value.masterHost;
      this._masterPort = value.masterPort;
      this._autoscaleDown.internalValue = value.autoscaleDown;
      this._autoscaleHeadroom.internalValue = value.autoscaleHeadroom;
    }
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

  // autoscale_down - computed: false, optional: true, required: false
  private _autoscaleDown = new ElastigroupAwsIntegrationDockerSwarmAutoscaleDownOutputReference(this, "autoscale_down");
  public get autoscaleDown() {
    return this._autoscaleDown;
  }
  public putAutoscaleDown(value: ElastigroupAwsIntegrationDockerSwarmAutoscaleDown) {
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
  private _autoscaleHeadroom = new ElastigroupAwsIntegrationDockerSwarmAutoscaleHeadroomOutputReference(this, "autoscale_headroom");
  public get autoscaleHeadroom() {
    return this._autoscaleHeadroom;
  }
  public putAutoscaleHeadroom(value: ElastigroupAwsIntegrationDockerSwarmAutoscaleHeadroom) {
    this._autoscaleHeadroom.internalValue = value;
  }
  public resetAutoscaleHeadroom() {
    this._autoscaleHeadroom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleHeadroomInput() {
    return this._autoscaleHeadroom.internalValue;
  }
}
export interface ElastigroupAwsIntegrationEcsAutoscaleAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#key ElastigroupAws#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#value ElastigroupAws#value}
  */
  readonly value: string;
}

export function elastigroupAwsIntegrationEcsAutoscaleAttributesToTerraform(struct?: ElastigroupAwsIntegrationEcsAutoscaleAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function elastigroupAwsIntegrationEcsAutoscaleAttributesToHclTerraform(struct?: ElastigroupAwsIntegrationEcsAutoscaleAttributes | cdktf.IResolvable): any {
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

export class ElastigroupAwsIntegrationEcsAutoscaleAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsIntegrationEcsAutoscaleAttributes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ElastigroupAwsIntegrationEcsAutoscaleAttributes | cdktf.IResolvable | undefined) {
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

export class ElastigroupAwsIntegrationEcsAutoscaleAttributesList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsIntegrationEcsAutoscaleAttributes[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsIntegrationEcsAutoscaleAttributesOutputReference {
    return new ElastigroupAwsIntegrationEcsAutoscaleAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsIntegrationEcsAutoscaleDown {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#evaluation_periods ElastigroupAws#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#max_scale_down_percentage ElastigroupAws#max_scale_down_percentage}
  */
  readonly maxScaleDownPercentage?: number;
}

export function elastigroupAwsIntegrationEcsAutoscaleDownToTerraform(struct?: ElastigroupAwsIntegrationEcsAutoscaleDownOutputReference | ElastigroupAwsIntegrationEcsAutoscaleDown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
    max_scale_down_percentage: cdktf.numberToTerraform(struct!.maxScaleDownPercentage),
  }
}


export function elastigroupAwsIntegrationEcsAutoscaleDownToHclTerraform(struct?: ElastigroupAwsIntegrationEcsAutoscaleDownOutputReference | ElastigroupAwsIntegrationEcsAutoscaleDown): any {
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
    max_scale_down_percentage: {
      value: cdktf.numberToHclTerraform(struct!.maxScaleDownPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsIntegrationEcsAutoscaleDownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationEcsAutoscaleDown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluationPeriods !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationPeriods = this._evaluationPeriods;
    }
    if (this._maxScaleDownPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxScaleDownPercentage = this._maxScaleDownPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationEcsAutoscaleDown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._evaluationPeriods = undefined;
      this._maxScaleDownPercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._evaluationPeriods = value.evaluationPeriods;
      this._maxScaleDownPercentage = value.maxScaleDownPercentage;
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

  // max_scale_down_percentage - computed: false, optional: true, required: false
  private _maxScaleDownPercentage?: number; 
  public get maxScaleDownPercentage() {
    return this.getNumberAttribute('max_scale_down_percentage');
  }
  public set maxScaleDownPercentage(value: number) {
    this._maxScaleDownPercentage = value;
  }
  public resetMaxScaleDownPercentage() {
    this._maxScaleDownPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxScaleDownPercentageInput() {
    return this._maxScaleDownPercentage;
  }
}
export interface ElastigroupAwsIntegrationEcsAutoscaleHeadroom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#cpu_per_unit ElastigroupAws#cpu_per_unit}
  */
  readonly cpuPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#memory_per_unit ElastigroupAws#memory_per_unit}
  */
  readonly memoryPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#num_of_units ElastigroupAws#num_of_units}
  */
  readonly numOfUnits?: number;
}

export function elastigroupAwsIntegrationEcsAutoscaleHeadroomToTerraform(struct?: ElastigroupAwsIntegrationEcsAutoscaleHeadroomOutputReference | ElastigroupAwsIntegrationEcsAutoscaleHeadroom): any {
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


export function elastigroupAwsIntegrationEcsAutoscaleHeadroomToHclTerraform(struct?: ElastigroupAwsIntegrationEcsAutoscaleHeadroomOutputReference | ElastigroupAwsIntegrationEcsAutoscaleHeadroom): any {
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

export class ElastigroupAwsIntegrationEcsAutoscaleHeadroomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationEcsAutoscaleHeadroom | undefined {
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

  public set internalValue(value: ElastigroupAwsIntegrationEcsAutoscaleHeadroom | undefined) {
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
export interface ElastigroupAwsIntegrationEcsBatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#job_queue_names ElastigroupAws#job_queue_names}
  */
  readonly jobQueueNames: string[];
}

export function elastigroupAwsIntegrationEcsBatchToTerraform(struct?: ElastigroupAwsIntegrationEcsBatchOutputReference | ElastigroupAwsIntegrationEcsBatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    job_queue_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jobQueueNames),
  }
}


export function elastigroupAwsIntegrationEcsBatchToHclTerraform(struct?: ElastigroupAwsIntegrationEcsBatchOutputReference | ElastigroupAwsIntegrationEcsBatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    job_queue_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jobQueueNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsIntegrationEcsBatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationEcsBatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobQueueNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobQueueNames = this._jobQueueNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationEcsBatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jobQueueNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jobQueueNames = value.jobQueueNames;
    }
  }

  // job_queue_names - computed: false, optional: false, required: true
  private _jobQueueNames?: string[]; 
  public get jobQueueNames() {
    return this.getListAttribute('job_queue_names');
  }
  public set jobQueueNames(value: string[]) {
    this._jobQueueNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobQueueNamesInput() {
    return this._jobQueueNames;
  }
}
export interface ElastigroupAwsIntegrationEcs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#autoscale_cooldown ElastigroupAws#autoscale_cooldown}
  */
  readonly autoscaleCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#autoscale_is_auto_config ElastigroupAws#autoscale_is_auto_config}
  */
  readonly autoscaleIsAutoConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#autoscale_is_enabled ElastigroupAws#autoscale_is_enabled}
  */
  readonly autoscaleIsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#autoscale_scale_down_non_service_tasks ElastigroupAws#autoscale_scale_down_non_service_tasks}
  */
  readonly autoscaleScaleDownNonServiceTasks?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#cluster_name ElastigroupAws#cluster_name}
  */
  readonly clusterName: string;
  /**
  * autoscale_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#autoscale_attributes ElastigroupAws#autoscale_attributes}
  */
  readonly autoscaleAttributes?: ElastigroupAwsIntegrationEcsAutoscaleAttributes[] | cdktf.IResolvable;
  /**
  * autoscale_down block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#autoscale_down ElastigroupAws#autoscale_down}
  */
  readonly autoscaleDown?: ElastigroupAwsIntegrationEcsAutoscaleDown;
  /**
  * autoscale_headroom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#autoscale_headroom ElastigroupAws#autoscale_headroom}
  */
  readonly autoscaleHeadroom?: ElastigroupAwsIntegrationEcsAutoscaleHeadroom;
  /**
  * batch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#batch ElastigroupAws#batch}
  */
  readonly batch?: ElastigroupAwsIntegrationEcsBatch;
}

export function elastigroupAwsIntegrationEcsToTerraform(struct?: ElastigroupAwsIntegrationEcsOutputReference | ElastigroupAwsIntegrationEcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscale_cooldown: cdktf.numberToTerraform(struct!.autoscaleCooldown),
    autoscale_is_auto_config: cdktf.booleanToTerraform(struct!.autoscaleIsAutoConfig),
    autoscale_is_enabled: cdktf.booleanToTerraform(struct!.autoscaleIsEnabled),
    autoscale_scale_down_non_service_tasks: cdktf.booleanToTerraform(struct!.autoscaleScaleDownNonServiceTasks),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    autoscale_attributes: cdktf.listMapper(elastigroupAwsIntegrationEcsAutoscaleAttributesToTerraform, true)(struct!.autoscaleAttributes),
    autoscale_down: elastigroupAwsIntegrationEcsAutoscaleDownToTerraform(struct!.autoscaleDown),
    autoscale_headroom: elastigroupAwsIntegrationEcsAutoscaleHeadroomToTerraform(struct!.autoscaleHeadroom),
    batch: elastigroupAwsIntegrationEcsBatchToTerraform(struct!.batch),
  }
}


export function elastigroupAwsIntegrationEcsToHclTerraform(struct?: ElastigroupAwsIntegrationEcsOutputReference | ElastigroupAwsIntegrationEcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    autoscale_scale_down_non_service_tasks: {
      value: cdktf.booleanToHclTerraform(struct!.autoscaleScaleDownNonServiceTasks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autoscale_attributes: {
      value: cdktf.listMapperHcl(elastigroupAwsIntegrationEcsAutoscaleAttributesToHclTerraform, true)(struct!.autoscaleAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "ElastigroupAwsIntegrationEcsAutoscaleAttributesList",
    },
    autoscale_down: {
      value: elastigroupAwsIntegrationEcsAutoscaleDownToHclTerraform(struct!.autoscaleDown),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAwsIntegrationEcsAutoscaleDownList",
    },
    autoscale_headroom: {
      value: elastigroupAwsIntegrationEcsAutoscaleHeadroomToHclTerraform(struct!.autoscaleHeadroom),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAwsIntegrationEcsAutoscaleHeadroomList",
    },
    batch: {
      value: elastigroupAwsIntegrationEcsBatchToHclTerraform(struct!.batch),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAwsIntegrationEcsBatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsIntegrationEcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationEcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._autoscaleScaleDownNonServiceTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleScaleDownNonServiceTasks = this._autoscaleScaleDownNonServiceTasks;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._autoscaleAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleAttributes = this._autoscaleAttributes?.internalValue;
    }
    if (this._autoscaleDown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleDown = this._autoscaleDown?.internalValue;
    }
    if (this._autoscaleHeadroom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleHeadroom = this._autoscaleHeadroom?.internalValue;
    }
    if (this._batch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.batch = this._batch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationEcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoscaleCooldown = undefined;
      this._autoscaleIsAutoConfig = undefined;
      this._autoscaleIsEnabled = undefined;
      this._autoscaleScaleDownNonServiceTasks = undefined;
      this._clusterName = undefined;
      this._autoscaleAttributes.internalValue = undefined;
      this._autoscaleDown.internalValue = undefined;
      this._autoscaleHeadroom.internalValue = undefined;
      this._batch.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoscaleCooldown = value.autoscaleCooldown;
      this._autoscaleIsAutoConfig = value.autoscaleIsAutoConfig;
      this._autoscaleIsEnabled = value.autoscaleIsEnabled;
      this._autoscaleScaleDownNonServiceTasks = value.autoscaleScaleDownNonServiceTasks;
      this._clusterName = value.clusterName;
      this._autoscaleAttributes.internalValue = value.autoscaleAttributes;
      this._autoscaleDown.internalValue = value.autoscaleDown;
      this._autoscaleHeadroom.internalValue = value.autoscaleHeadroom;
      this._batch.internalValue = value.batch;
    }
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

  // autoscale_scale_down_non_service_tasks - computed: false, optional: true, required: false
  private _autoscaleScaleDownNonServiceTasks?: boolean | cdktf.IResolvable; 
  public get autoscaleScaleDownNonServiceTasks() {
    return this.getBooleanAttribute('autoscale_scale_down_non_service_tasks');
  }
  public set autoscaleScaleDownNonServiceTasks(value: boolean | cdktf.IResolvable) {
    this._autoscaleScaleDownNonServiceTasks = value;
  }
  public resetAutoscaleScaleDownNonServiceTasks() {
    this._autoscaleScaleDownNonServiceTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleScaleDownNonServiceTasksInput() {
    return this._autoscaleScaleDownNonServiceTasks;
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

  // autoscale_attributes - computed: false, optional: true, required: false
  private _autoscaleAttributes = new ElastigroupAwsIntegrationEcsAutoscaleAttributesList(this, "autoscale_attributes", true);
  public get autoscaleAttributes() {
    return this._autoscaleAttributes;
  }
  public putAutoscaleAttributes(value: ElastigroupAwsIntegrationEcsAutoscaleAttributes[] | cdktf.IResolvable) {
    this._autoscaleAttributes.internalValue = value;
  }
  public resetAutoscaleAttributes() {
    this._autoscaleAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleAttributesInput() {
    return this._autoscaleAttributes.internalValue;
  }

  // autoscale_down - computed: false, optional: true, required: false
  private _autoscaleDown = new ElastigroupAwsIntegrationEcsAutoscaleDownOutputReference(this, "autoscale_down");
  public get autoscaleDown() {
    return this._autoscaleDown;
  }
  public putAutoscaleDown(value: ElastigroupAwsIntegrationEcsAutoscaleDown) {
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
  private _autoscaleHeadroom = new ElastigroupAwsIntegrationEcsAutoscaleHeadroomOutputReference(this, "autoscale_headroom");
  public get autoscaleHeadroom() {
    return this._autoscaleHeadroom;
  }
  public putAutoscaleHeadroom(value: ElastigroupAwsIntegrationEcsAutoscaleHeadroom) {
    this._autoscaleHeadroom.internalValue = value;
  }
  public resetAutoscaleHeadroom() {
    this._autoscaleHeadroom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleHeadroomInput() {
    return this._autoscaleHeadroom.internalValue;
  }

  // batch - computed: false, optional: true, required: false
  private _batch = new ElastigroupAwsIntegrationEcsBatchOutputReference(this, "batch");
  public get batch() {
    return this._batch;
  }
  public putBatch(value: ElastigroupAwsIntegrationEcsBatch) {
    this._batch.internalValue = value;
  }
  public resetBatch() {
    this._batch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchInput() {
    return this._batch.internalValue;
  }
}
export interface ElastigroupAwsIntegrationGitlabRunner {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#is_enabled ElastigroupAws#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
}

export function elastigroupAwsIntegrationGitlabRunnerToTerraform(struct?: ElastigroupAwsIntegrationGitlabRunnerOutputReference | ElastigroupAwsIntegrationGitlabRunner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
  }
}


export function elastigroupAwsIntegrationGitlabRunnerToHclTerraform(struct?: ElastigroupAwsIntegrationGitlabRunnerOutputReference | ElastigroupAwsIntegrationGitlabRunner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsIntegrationGitlabRunnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationGitlabRunner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationGitlabRunner | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }
}
export interface ElastigroupAwsIntegrationGitlab {
  /**
  * runner block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#runner ElastigroupAws#runner}
  */
  readonly runner?: ElastigroupAwsIntegrationGitlabRunner;
}

export function elastigroupAwsIntegrationGitlabToTerraform(struct?: ElastigroupAwsIntegrationGitlabOutputReference | ElastigroupAwsIntegrationGitlab): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    runner: elastigroupAwsIntegrationGitlabRunnerToTerraform(struct!.runner),
  }
}


export function elastigroupAwsIntegrationGitlabToHclTerraform(struct?: ElastigroupAwsIntegrationGitlabOutputReference | ElastigroupAwsIntegrationGitlab): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    runner: {
      value: elastigroupAwsIntegrationGitlabRunnerToHclTerraform(struct!.runner),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAwsIntegrationGitlabRunnerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsIntegrationGitlabOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationGitlab | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._runner?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runner = this._runner?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationGitlab | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._runner.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._runner.internalValue = value.runner;
    }
  }

  // runner - computed: false, optional: true, required: false
  private _runner = new ElastigroupAwsIntegrationGitlabRunnerOutputReference(this, "runner");
  public get runner() {
    return this._runner;
  }
  public putRunner(value: ElastigroupAwsIntegrationGitlabRunner) {
    this._runner.internalValue = value;
  }
  public resetRunner() {
    this._runner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runnerInput() {
    return this._runner.internalValue;
  }
}
export interface ElastigroupAwsIntegrationKubernetesAutoscaleDown {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#evaluation_periods ElastigroupAws#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#max_scale_down_percentage ElastigroupAws#max_scale_down_percentage}
  */
  readonly maxScaleDownPercentage?: number;
}

export function elastigroupAwsIntegrationKubernetesAutoscaleDownToTerraform(struct?: ElastigroupAwsIntegrationKubernetesAutoscaleDownOutputReference | ElastigroupAwsIntegrationKubernetesAutoscaleDown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
    max_scale_down_percentage: cdktf.numberToTerraform(struct!.maxScaleDownPercentage),
  }
}


export function elastigroupAwsIntegrationKubernetesAutoscaleDownToHclTerraform(struct?: ElastigroupAwsIntegrationKubernetesAutoscaleDownOutputReference | ElastigroupAwsIntegrationKubernetesAutoscaleDown): any {
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
    max_scale_down_percentage: {
      value: cdktf.numberToHclTerraform(struct!.maxScaleDownPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsIntegrationKubernetesAutoscaleDownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationKubernetesAutoscaleDown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluationPeriods !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationPeriods = this._evaluationPeriods;
    }
    if (this._maxScaleDownPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxScaleDownPercentage = this._maxScaleDownPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationKubernetesAutoscaleDown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._evaluationPeriods = undefined;
      this._maxScaleDownPercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._evaluationPeriods = value.evaluationPeriods;
      this._maxScaleDownPercentage = value.maxScaleDownPercentage;
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

  // max_scale_down_percentage - computed: false, optional: true, required: false
  private _maxScaleDownPercentage?: number; 
  public get maxScaleDownPercentage() {
    return this.getNumberAttribute('max_scale_down_percentage');
  }
  public set maxScaleDownPercentage(value: number) {
    this._maxScaleDownPercentage = value;
  }
  public resetMaxScaleDownPercentage() {
    this._maxScaleDownPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxScaleDownPercentageInput() {
    return this._maxScaleDownPercentage;
  }
}
export interface ElastigroupAwsIntegrationKubernetesAutoscaleHeadroom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#cpu_per_unit ElastigroupAws#cpu_per_unit}
  */
  readonly cpuPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#memory_per_unit ElastigroupAws#memory_per_unit}
  */
  readonly memoryPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#num_of_units ElastigroupAws#num_of_units}
  */
  readonly numOfUnits?: number;
}

export function elastigroupAwsIntegrationKubernetesAutoscaleHeadroomToTerraform(struct?: ElastigroupAwsIntegrationKubernetesAutoscaleHeadroomOutputReference | ElastigroupAwsIntegrationKubernetesAutoscaleHeadroom): any {
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


export function elastigroupAwsIntegrationKubernetesAutoscaleHeadroomToHclTerraform(struct?: ElastigroupAwsIntegrationKubernetesAutoscaleHeadroomOutputReference | ElastigroupAwsIntegrationKubernetesAutoscaleHeadroom): any {
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

export class ElastigroupAwsIntegrationKubernetesAutoscaleHeadroomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationKubernetesAutoscaleHeadroom | undefined {
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

  public set internalValue(value: ElastigroupAwsIntegrationKubernetesAutoscaleHeadroom | undefined) {
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
export interface ElastigroupAwsIntegrationKubernetesAutoscaleLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#key ElastigroupAws#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#value ElastigroupAws#value}
  */
  readonly value: string;
}

export function elastigroupAwsIntegrationKubernetesAutoscaleLabelsToTerraform(struct?: ElastigroupAwsIntegrationKubernetesAutoscaleLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function elastigroupAwsIntegrationKubernetesAutoscaleLabelsToHclTerraform(struct?: ElastigroupAwsIntegrationKubernetesAutoscaleLabels | cdktf.IResolvable): any {
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

export class ElastigroupAwsIntegrationKubernetesAutoscaleLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsIntegrationKubernetesAutoscaleLabels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ElastigroupAwsIntegrationKubernetesAutoscaleLabels | cdktf.IResolvable | undefined) {
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

export class ElastigroupAwsIntegrationKubernetesAutoscaleLabelsList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsIntegrationKubernetesAutoscaleLabels[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsIntegrationKubernetesAutoscaleLabelsOutputReference {
    return new ElastigroupAwsIntegrationKubernetesAutoscaleLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsIntegrationKubernetes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#api_server ElastigroupAws#api_server}
  */
  readonly apiServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#autoscale_cooldown ElastigroupAws#autoscale_cooldown}
  */
  readonly autoscaleCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#autoscale_is_auto_config ElastigroupAws#autoscale_is_auto_config}
  */
  readonly autoscaleIsAutoConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#autoscale_is_enabled ElastigroupAws#autoscale_is_enabled}
  */
  readonly autoscaleIsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#cluster_identifier ElastigroupAws#cluster_identifier}
  */
  readonly clusterIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#integration_mode ElastigroupAws#integration_mode}
  */
  readonly integrationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#token ElastigroupAws#token}
  */
  readonly token?: string;
  /**
  * autoscale_down block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#autoscale_down ElastigroupAws#autoscale_down}
  */
  readonly autoscaleDown?: ElastigroupAwsIntegrationKubernetesAutoscaleDown;
  /**
  * autoscale_headroom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#autoscale_headroom ElastigroupAws#autoscale_headroom}
  */
  readonly autoscaleHeadroom?: ElastigroupAwsIntegrationKubernetesAutoscaleHeadroom;
  /**
  * autoscale_labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#autoscale_labels ElastigroupAws#autoscale_labels}
  */
  readonly autoscaleLabels?: ElastigroupAwsIntegrationKubernetesAutoscaleLabels[] | cdktf.IResolvable;
}

export function elastigroupAwsIntegrationKubernetesToTerraform(struct?: ElastigroupAwsIntegrationKubernetesOutputReference | ElastigroupAwsIntegrationKubernetes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_server: cdktf.stringToTerraform(struct!.apiServer),
    autoscale_cooldown: cdktf.numberToTerraform(struct!.autoscaleCooldown),
    autoscale_is_auto_config: cdktf.booleanToTerraform(struct!.autoscaleIsAutoConfig),
    autoscale_is_enabled: cdktf.booleanToTerraform(struct!.autoscaleIsEnabled),
    cluster_identifier: cdktf.stringToTerraform(struct!.clusterIdentifier),
    integration_mode: cdktf.stringToTerraform(struct!.integrationMode),
    token: cdktf.stringToTerraform(struct!.token),
    autoscale_down: elastigroupAwsIntegrationKubernetesAutoscaleDownToTerraform(struct!.autoscaleDown),
    autoscale_headroom: elastigroupAwsIntegrationKubernetesAutoscaleHeadroomToTerraform(struct!.autoscaleHeadroom),
    autoscale_labels: cdktf.listMapper(elastigroupAwsIntegrationKubernetesAutoscaleLabelsToTerraform, true)(struct!.autoscaleLabels),
  }
}


export function elastigroupAwsIntegrationKubernetesToHclTerraform(struct?: ElastigroupAwsIntegrationKubernetesOutputReference | ElastigroupAwsIntegrationKubernetes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_server: {
      value: cdktf.stringToHclTerraform(struct!.apiServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    cluster_identifier: {
      value: cdktf.stringToHclTerraform(struct!.clusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration_mode: {
      value: cdktf.stringToHclTerraform(struct!.integrationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autoscale_down: {
      value: elastigroupAwsIntegrationKubernetesAutoscaleDownToHclTerraform(struct!.autoscaleDown),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAwsIntegrationKubernetesAutoscaleDownList",
    },
    autoscale_headroom: {
      value: elastigroupAwsIntegrationKubernetesAutoscaleHeadroomToHclTerraform(struct!.autoscaleHeadroom),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAwsIntegrationKubernetesAutoscaleHeadroomList",
    },
    autoscale_labels: {
      value: cdktf.listMapperHcl(elastigroupAwsIntegrationKubernetesAutoscaleLabelsToHclTerraform, true)(struct!.autoscaleLabels),
      isBlock: true,
      type: "set",
      storageClassType: "ElastigroupAwsIntegrationKubernetesAutoscaleLabelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsIntegrationKubernetesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationKubernetes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiServer = this._apiServer;
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
    if (this._clusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIdentifier = this._clusterIdentifier;
    }
    if (this._integrationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationMode = this._integrationMode;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
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

  public set internalValue(value: ElastigroupAwsIntegrationKubernetes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiServer = undefined;
      this._autoscaleCooldown = undefined;
      this._autoscaleIsAutoConfig = undefined;
      this._autoscaleIsEnabled = undefined;
      this._clusterIdentifier = undefined;
      this._integrationMode = undefined;
      this._token = undefined;
      this._autoscaleDown.internalValue = undefined;
      this._autoscaleHeadroom.internalValue = undefined;
      this._autoscaleLabels.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiServer = value.apiServer;
      this._autoscaleCooldown = value.autoscaleCooldown;
      this._autoscaleIsAutoConfig = value.autoscaleIsAutoConfig;
      this._autoscaleIsEnabled = value.autoscaleIsEnabled;
      this._clusterIdentifier = value.clusterIdentifier;
      this._integrationMode = value.integrationMode;
      this._token = value.token;
      this._autoscaleDown.internalValue = value.autoscaleDown;
      this._autoscaleHeadroom.internalValue = value.autoscaleHeadroom;
      this._autoscaleLabels.internalValue = value.autoscaleLabels;
    }
  }

  // api_server - computed: false, optional: true, required: false
  private _apiServer?: string; 
  public get apiServer() {
    return this.getStringAttribute('api_server');
  }
  public set apiServer(value: string) {
    this._apiServer = value;
  }
  public resetApiServer() {
    this._apiServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServerInput() {
    return this._apiServer;
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

  // cluster_identifier - computed: false, optional: true, required: false
  private _clusterIdentifier?: string; 
  public get clusterIdentifier() {
    return this.getStringAttribute('cluster_identifier');
  }
  public set clusterIdentifier(value: string) {
    this._clusterIdentifier = value;
  }
  public resetClusterIdentifier() {
    this._clusterIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdentifierInput() {
    return this._clusterIdentifier;
  }

  // integration_mode - computed: false, optional: true, required: false
  private _integrationMode?: string; 
  public get integrationMode() {
    return this.getStringAttribute('integration_mode');
  }
  public set integrationMode(value: string) {
    this._integrationMode = value;
  }
  public resetIntegrationMode() {
    this._integrationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationModeInput() {
    return this._integrationMode;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // autoscale_down - computed: false, optional: true, required: false
  private _autoscaleDown = new ElastigroupAwsIntegrationKubernetesAutoscaleDownOutputReference(this, "autoscale_down");
  public get autoscaleDown() {
    return this._autoscaleDown;
  }
  public putAutoscaleDown(value: ElastigroupAwsIntegrationKubernetesAutoscaleDown) {
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
  private _autoscaleHeadroom = new ElastigroupAwsIntegrationKubernetesAutoscaleHeadroomOutputReference(this, "autoscale_headroom");
  public get autoscaleHeadroom() {
    return this._autoscaleHeadroom;
  }
  public putAutoscaleHeadroom(value: ElastigroupAwsIntegrationKubernetesAutoscaleHeadroom) {
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
  private _autoscaleLabels = new ElastigroupAwsIntegrationKubernetesAutoscaleLabelsList(this, "autoscale_labels", true);
  public get autoscaleLabels() {
    return this._autoscaleLabels;
  }
  public putAutoscaleLabels(value: ElastigroupAwsIntegrationKubernetesAutoscaleLabels[] | cdktf.IResolvable) {
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
export interface ElastigroupAwsIntegrationMesosphere {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#api_server ElastigroupAws#api_server}
  */
  readonly apiServer: string;
}

export function elastigroupAwsIntegrationMesosphereToTerraform(struct?: ElastigroupAwsIntegrationMesosphereOutputReference | ElastigroupAwsIntegrationMesosphere): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_server: cdktf.stringToTerraform(struct!.apiServer),
  }
}


export function elastigroupAwsIntegrationMesosphereToHclTerraform(struct?: ElastigroupAwsIntegrationMesosphereOutputReference | ElastigroupAwsIntegrationMesosphere): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_server: {
      value: cdktf.stringToHclTerraform(struct!.apiServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsIntegrationMesosphereOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationMesosphere | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiServer = this._apiServer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationMesosphere | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiServer = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiServer = value.apiServer;
    }
  }

  // api_server - computed: false, optional: false, required: true
  private _apiServer?: string; 
  public get apiServer() {
    return this.getStringAttribute('api_server');
  }
  public set apiServer(value: string) {
    this._apiServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServerInput() {
    return this._apiServer;
  }
}
export interface ElastigroupAwsIntegrationNomadAutoscaleConstraints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#key ElastigroupAws#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#value ElastigroupAws#value}
  */
  readonly value: string;
}

export function elastigroupAwsIntegrationNomadAutoscaleConstraintsToTerraform(struct?: ElastigroupAwsIntegrationNomadAutoscaleConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function elastigroupAwsIntegrationNomadAutoscaleConstraintsToHclTerraform(struct?: ElastigroupAwsIntegrationNomadAutoscaleConstraints | cdktf.IResolvable): any {
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

export class ElastigroupAwsIntegrationNomadAutoscaleConstraintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsIntegrationNomadAutoscaleConstraints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ElastigroupAwsIntegrationNomadAutoscaleConstraints | cdktf.IResolvable | undefined) {
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

export class ElastigroupAwsIntegrationNomadAutoscaleConstraintsList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsIntegrationNomadAutoscaleConstraints[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsIntegrationNomadAutoscaleConstraintsOutputReference {
    return new ElastigroupAwsIntegrationNomadAutoscaleConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsIntegrationNomadAutoscaleDown {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#evaluation_periods ElastigroupAws#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
}

export function elastigroupAwsIntegrationNomadAutoscaleDownToTerraform(struct?: ElastigroupAwsIntegrationNomadAutoscaleDownOutputReference | ElastigroupAwsIntegrationNomadAutoscaleDown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
  }
}


export function elastigroupAwsIntegrationNomadAutoscaleDownToHclTerraform(struct?: ElastigroupAwsIntegrationNomadAutoscaleDownOutputReference | ElastigroupAwsIntegrationNomadAutoscaleDown): any {
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

export class ElastigroupAwsIntegrationNomadAutoscaleDownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationNomadAutoscaleDown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluationPeriods !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationPeriods = this._evaluationPeriods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationNomadAutoscaleDown | undefined) {
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
export interface ElastigroupAwsIntegrationNomadAutoscaleHeadroom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#cpu_per_unit ElastigroupAws#cpu_per_unit}
  */
  readonly cpuPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#memory_per_unit ElastigroupAws#memory_per_unit}
  */
  readonly memoryPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#num_of_units ElastigroupAws#num_of_units}
  */
  readonly numOfUnits?: number;
}

export function elastigroupAwsIntegrationNomadAutoscaleHeadroomToTerraform(struct?: ElastigroupAwsIntegrationNomadAutoscaleHeadroomOutputReference | ElastigroupAwsIntegrationNomadAutoscaleHeadroom): any {
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


export function elastigroupAwsIntegrationNomadAutoscaleHeadroomToHclTerraform(struct?: ElastigroupAwsIntegrationNomadAutoscaleHeadroomOutputReference | ElastigroupAwsIntegrationNomadAutoscaleHeadroom): any {
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

export class ElastigroupAwsIntegrationNomadAutoscaleHeadroomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationNomadAutoscaleHeadroom | undefined {
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

  public set internalValue(value: ElastigroupAwsIntegrationNomadAutoscaleHeadroom | undefined) {
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
export interface ElastigroupAwsIntegrationNomad {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#acl_token ElastigroupAws#acl_token}
  */
  readonly aclToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#autoscale_cooldown ElastigroupAws#autoscale_cooldown}
  */
  readonly autoscaleCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#autoscale_is_enabled ElastigroupAws#autoscale_is_enabled}
  */
  readonly autoscaleIsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#master_host ElastigroupAws#master_host}
  */
  readonly masterHost: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#master_port ElastigroupAws#master_port}
  */
  readonly masterPort: number;
  /**
  * autoscale_constraints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#autoscale_constraints ElastigroupAws#autoscale_constraints}
  */
  readonly autoscaleConstraints?: ElastigroupAwsIntegrationNomadAutoscaleConstraints[] | cdktf.IResolvable;
  /**
  * autoscale_down block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#autoscale_down ElastigroupAws#autoscale_down}
  */
  readonly autoscaleDown?: ElastigroupAwsIntegrationNomadAutoscaleDown;
  /**
  * autoscale_headroom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#autoscale_headroom ElastigroupAws#autoscale_headroom}
  */
  readonly autoscaleHeadroom?: ElastigroupAwsIntegrationNomadAutoscaleHeadroom;
}

export function elastigroupAwsIntegrationNomadToTerraform(struct?: ElastigroupAwsIntegrationNomadOutputReference | ElastigroupAwsIntegrationNomad): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_token: cdktf.stringToTerraform(struct!.aclToken),
    autoscale_cooldown: cdktf.numberToTerraform(struct!.autoscaleCooldown),
    autoscale_is_enabled: cdktf.booleanToTerraform(struct!.autoscaleIsEnabled),
    master_host: cdktf.stringToTerraform(struct!.masterHost),
    master_port: cdktf.numberToTerraform(struct!.masterPort),
    autoscale_constraints: cdktf.listMapper(elastigroupAwsIntegrationNomadAutoscaleConstraintsToTerraform, true)(struct!.autoscaleConstraints),
    autoscale_down: elastigroupAwsIntegrationNomadAutoscaleDownToTerraform(struct!.autoscaleDown),
    autoscale_headroom: elastigroupAwsIntegrationNomadAutoscaleHeadroomToTerraform(struct!.autoscaleHeadroom),
  }
}


export function elastigroupAwsIntegrationNomadToHclTerraform(struct?: ElastigroupAwsIntegrationNomadOutputReference | ElastigroupAwsIntegrationNomad): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl_token: {
      value: cdktf.stringToHclTerraform(struct!.aclToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autoscale_cooldown: {
      value: cdktf.numberToHclTerraform(struct!.autoscaleCooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    autoscale_is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.autoscaleIsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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
    autoscale_constraints: {
      value: cdktf.listMapperHcl(elastigroupAwsIntegrationNomadAutoscaleConstraintsToHclTerraform, true)(struct!.autoscaleConstraints),
      isBlock: true,
      type: "set",
      storageClassType: "ElastigroupAwsIntegrationNomadAutoscaleConstraintsList",
    },
    autoscale_down: {
      value: elastigroupAwsIntegrationNomadAutoscaleDownToHclTerraform(struct!.autoscaleDown),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAwsIntegrationNomadAutoscaleDownList",
    },
    autoscale_headroom: {
      value: elastigroupAwsIntegrationNomadAutoscaleHeadroomToHclTerraform(struct!.autoscaleHeadroom),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAwsIntegrationNomadAutoscaleHeadroomList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsIntegrationNomadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationNomad | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclToken = this._aclToken;
    }
    if (this._autoscaleCooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleCooldown = this._autoscaleCooldown;
    }
    if (this._autoscaleIsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleIsEnabled = this._autoscaleIsEnabled;
    }
    if (this._masterHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterHost = this._masterHost;
    }
    if (this._masterPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterPort = this._masterPort;
    }
    if (this._autoscaleConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleConstraints = this._autoscaleConstraints?.internalValue;
    }
    if (this._autoscaleDown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleDown = this._autoscaleDown?.internalValue;
    }
    if (this._autoscaleHeadroom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaleHeadroom = this._autoscaleHeadroom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationNomad | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aclToken = undefined;
      this._autoscaleCooldown = undefined;
      this._autoscaleIsEnabled = undefined;
      this._masterHost = undefined;
      this._masterPort = undefined;
      this._autoscaleConstraints.internalValue = undefined;
      this._autoscaleDown.internalValue = undefined;
      this._autoscaleHeadroom.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aclToken = value.aclToken;
      this._autoscaleCooldown = value.autoscaleCooldown;
      this._autoscaleIsEnabled = value.autoscaleIsEnabled;
      this._masterHost = value.masterHost;
      this._masterPort = value.masterPort;
      this._autoscaleConstraints.internalValue = value.autoscaleConstraints;
      this._autoscaleDown.internalValue = value.autoscaleDown;
      this._autoscaleHeadroom.internalValue = value.autoscaleHeadroom;
    }
  }

  // acl_token - computed: false, optional: true, required: false
  private _aclToken?: string; 
  public get aclToken() {
    return this.getStringAttribute('acl_token');
  }
  public set aclToken(value: string) {
    this._aclToken = value;
  }
  public resetAclToken() {
    this._aclToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclTokenInput() {
    return this._aclToken;
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

  // autoscale_constraints - computed: false, optional: true, required: false
  private _autoscaleConstraints = new ElastigroupAwsIntegrationNomadAutoscaleConstraintsList(this, "autoscale_constraints", true);
  public get autoscaleConstraints() {
    return this._autoscaleConstraints;
  }
  public putAutoscaleConstraints(value: ElastigroupAwsIntegrationNomadAutoscaleConstraints[] | cdktf.IResolvable) {
    this._autoscaleConstraints.internalValue = value;
  }
  public resetAutoscaleConstraints() {
    this._autoscaleConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleConstraintsInput() {
    return this._autoscaleConstraints.internalValue;
  }

  // autoscale_down - computed: false, optional: true, required: false
  private _autoscaleDown = new ElastigroupAwsIntegrationNomadAutoscaleDownOutputReference(this, "autoscale_down");
  public get autoscaleDown() {
    return this._autoscaleDown;
  }
  public putAutoscaleDown(value: ElastigroupAwsIntegrationNomadAutoscaleDown) {
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
  private _autoscaleHeadroom = new ElastigroupAwsIntegrationNomadAutoscaleHeadroomOutputReference(this, "autoscale_headroom");
  public get autoscaleHeadroom() {
    return this._autoscaleHeadroom;
  }
  public putAutoscaleHeadroom(value: ElastigroupAwsIntegrationNomadAutoscaleHeadroom) {
    this._autoscaleHeadroom.internalValue = value;
  }
  public resetAutoscaleHeadroom() {
    this._autoscaleHeadroom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleHeadroomInput() {
    return this._autoscaleHeadroom.internalValue;
  }
}
export interface ElastigroupAwsIntegrationRancher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#access_key ElastigroupAws#access_key}
  */
  readonly accessKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#master_host ElastigroupAws#master_host}
  */
  readonly masterHost: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#secret_key ElastigroupAws#secret_key}
  */
  readonly secretKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#version ElastigroupAws#version}
  */
  readonly version?: string;
}

export function elastigroupAwsIntegrationRancherToTerraform(struct?: ElastigroupAwsIntegrationRancherOutputReference | ElastigroupAwsIntegrationRancher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    master_host: cdktf.stringToTerraform(struct!.masterHost),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function elastigroupAwsIntegrationRancherToHclTerraform(struct?: ElastigroupAwsIntegrationRancherOutputReference | ElastigroupAwsIntegrationRancher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_host: {
      value: cdktf.stringToHclTerraform(struct!.masterHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
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

export class ElastigroupAwsIntegrationRancherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationRancher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._masterHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterHost = this._masterHost;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationRancher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._masterHost = undefined;
      this._secretKey = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._masterHost = value.masterHost;
      this._secretKey = value.secretKey;
      this._version = value.version;
    }
  }

  // access_key - computed: false, optional: false, required: true
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
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

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
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
export interface ElastigroupAwsIntegrationRoute53DomainsRecordSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#name ElastigroupAws#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#use_public_dns ElastigroupAws#use_public_dns}
  */
  readonly usePublicDns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#use_public_ip ElastigroupAws#use_public_ip}
  */
  readonly usePublicIp?: boolean | cdktf.IResolvable;
}

export function elastigroupAwsIntegrationRoute53DomainsRecordSetsToTerraform(struct?: ElastigroupAwsIntegrationRoute53DomainsRecordSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    use_public_dns: cdktf.booleanToTerraform(struct!.usePublicDns),
    use_public_ip: cdktf.booleanToTerraform(struct!.usePublicIp),
  }
}


export function elastigroupAwsIntegrationRoute53DomainsRecordSetsToHclTerraform(struct?: ElastigroupAwsIntegrationRoute53DomainsRecordSets | cdktf.IResolvable): any {
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
    use_public_dns: {
      value: cdktf.booleanToHclTerraform(struct!.usePublicDns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.usePublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsIntegrationRoute53DomainsRecordSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsIntegrationRoute53DomainsRecordSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._usePublicDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePublicDns = this._usePublicDns;
    }
    if (this._usePublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePublicIp = this._usePublicIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationRoute53DomainsRecordSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._usePublicDns = undefined;
      this._usePublicIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._usePublicDns = value.usePublicDns;
      this._usePublicIp = value.usePublicIp;
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

  // use_public_dns - computed: false, optional: true, required: false
  private _usePublicDns?: boolean | cdktf.IResolvable; 
  public get usePublicDns() {
    return this.getBooleanAttribute('use_public_dns');
  }
  public set usePublicDns(value: boolean | cdktf.IResolvable) {
    this._usePublicDns = value;
  }
  public resetUsePublicDns() {
    this._usePublicDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePublicDnsInput() {
    return this._usePublicDns;
  }

  // use_public_ip - computed: false, optional: true, required: false
  private _usePublicIp?: boolean | cdktf.IResolvable; 
  public get usePublicIp() {
    return this.getBooleanAttribute('use_public_ip');
  }
  public set usePublicIp(value: boolean | cdktf.IResolvable) {
    this._usePublicIp = value;
  }
  public resetUsePublicIp() {
    this._usePublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePublicIpInput() {
    return this._usePublicIp;
  }
}

export class ElastigroupAwsIntegrationRoute53DomainsRecordSetsList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsIntegrationRoute53DomainsRecordSets[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsIntegrationRoute53DomainsRecordSetsOutputReference {
    return new ElastigroupAwsIntegrationRoute53DomainsRecordSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsIntegrationRoute53Domains {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#hosted_zone_id ElastigroupAws#hosted_zone_id}
  */
  readonly hostedZoneId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#record_set_type ElastigroupAws#record_set_type}
  */
  readonly recordSetType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#spotinst_acct_id ElastigroupAws#spotinst_acct_id}
  */
  readonly spotinstAcctId?: string;
  /**
  * record_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#record_sets ElastigroupAws#record_sets}
  */
  readonly recordSets: ElastigroupAwsIntegrationRoute53DomainsRecordSets[] | cdktf.IResolvable;
}

export function elastigroupAwsIntegrationRoute53DomainsToTerraform(struct?: ElastigroupAwsIntegrationRoute53Domains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosted_zone_id: cdktf.stringToTerraform(struct!.hostedZoneId),
    record_set_type: cdktf.stringToTerraform(struct!.recordSetType),
    spotinst_acct_id: cdktf.stringToTerraform(struct!.spotinstAcctId),
    record_sets: cdktf.listMapper(elastigroupAwsIntegrationRoute53DomainsRecordSetsToTerraform, true)(struct!.recordSets),
  }
}


export function elastigroupAwsIntegrationRoute53DomainsToHclTerraform(struct?: ElastigroupAwsIntegrationRoute53Domains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hosted_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.hostedZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_set_type: {
      value: cdktf.stringToHclTerraform(struct!.recordSetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spotinst_acct_id: {
      value: cdktf.stringToHclTerraform(struct!.spotinstAcctId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_sets: {
      value: cdktf.listMapperHcl(elastigroupAwsIntegrationRoute53DomainsRecordSetsToHclTerraform, true)(struct!.recordSets),
      isBlock: true,
      type: "set",
      storageClassType: "ElastigroupAwsIntegrationRoute53DomainsRecordSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsIntegrationRoute53DomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsIntegrationRoute53Domains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostedZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostedZoneId = this._hostedZoneId;
    }
    if (this._recordSetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordSetType = this._recordSetType;
    }
    if (this._spotinstAcctId !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotinstAcctId = this._spotinstAcctId;
    }
    if (this._recordSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordSets = this._recordSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationRoute53Domains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostedZoneId = undefined;
      this._recordSetType = undefined;
      this._spotinstAcctId = undefined;
      this._recordSets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostedZoneId = value.hostedZoneId;
      this._recordSetType = value.recordSetType;
      this._spotinstAcctId = value.spotinstAcctId;
      this._recordSets.internalValue = value.recordSets;
    }
  }

  // hosted_zone_id - computed: false, optional: false, required: true
  private _hostedZoneId?: string; 
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }
  public set hostedZoneId(value: string) {
    this._hostedZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedZoneIdInput() {
    return this._hostedZoneId;
  }

  // record_set_type - computed: false, optional: true, required: false
  private _recordSetType?: string; 
  public get recordSetType() {
    return this.getStringAttribute('record_set_type');
  }
  public set recordSetType(value: string) {
    this._recordSetType = value;
  }
  public resetRecordSetType() {
    this._recordSetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordSetTypeInput() {
    return this._recordSetType;
  }

  // spotinst_acct_id - computed: false, optional: true, required: false
  private _spotinstAcctId?: string; 
  public get spotinstAcctId() {
    return this.getStringAttribute('spotinst_acct_id');
  }
  public set spotinstAcctId(value: string) {
    this._spotinstAcctId = value;
  }
  public resetSpotinstAcctId() {
    this._spotinstAcctId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotinstAcctIdInput() {
    return this._spotinstAcctId;
  }

  // record_sets - computed: false, optional: false, required: true
  private _recordSets = new ElastigroupAwsIntegrationRoute53DomainsRecordSetsList(this, "record_sets", true);
  public get recordSets() {
    return this._recordSets;
  }
  public putRecordSets(value: ElastigroupAwsIntegrationRoute53DomainsRecordSets[] | cdktf.IResolvable) {
    this._recordSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordSetsInput() {
    return this._recordSets.internalValue;
  }
}

export class ElastigroupAwsIntegrationRoute53DomainsList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsIntegrationRoute53Domains[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsIntegrationRoute53DomainsOutputReference {
    return new ElastigroupAwsIntegrationRoute53DomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsIntegrationRoute53 {
  /**
  * domains block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#domains ElastigroupAws#domains}
  */
  readonly domains: ElastigroupAwsIntegrationRoute53Domains[] | cdktf.IResolvable;
}

export function elastigroupAwsIntegrationRoute53ToTerraform(struct?: ElastigroupAwsIntegrationRoute53OutputReference | ElastigroupAwsIntegrationRoute53): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domains: cdktf.listMapper(elastigroupAwsIntegrationRoute53DomainsToTerraform, true)(struct!.domains),
  }
}


export function elastigroupAwsIntegrationRoute53ToHclTerraform(struct?: ElastigroupAwsIntegrationRoute53OutputReference | ElastigroupAwsIntegrationRoute53): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domains: {
      value: cdktf.listMapperHcl(elastigroupAwsIntegrationRoute53DomainsToHclTerraform, true)(struct!.domains),
      isBlock: true,
      type: "set",
      storageClassType: "ElastigroupAwsIntegrationRoute53DomainsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsIntegrationRoute53OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsIntegrationRoute53 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domains?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsIntegrationRoute53 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domains.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domains.internalValue = value.domains;
    }
  }

  // domains - computed: false, optional: false, required: true
  private _domains = new ElastigroupAwsIntegrationRoute53DomainsList(this, "domains", true);
  public get domains() {
    return this._domains;
  }
  public putDomains(value: ElastigroupAwsIntegrationRoute53Domains[] | cdktf.IResolvable) {
    this._domains.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains.internalValue;
  }
}
export interface ElastigroupAwsItfDefaultStaticTargetGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#arn ElastigroupAws#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#percentage ElastigroupAws#percentage}
  */
  readonly percentage: number;
}

export function elastigroupAwsItfDefaultStaticTargetGroupToTerraform(struct?: ElastigroupAwsItfDefaultStaticTargetGroupOutputReference | ElastigroupAwsItfDefaultStaticTargetGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}


export function elastigroupAwsItfDefaultStaticTargetGroupToHclTerraform(struct?: ElastigroupAwsItfDefaultStaticTargetGroupOutputReference | ElastigroupAwsItfDefaultStaticTargetGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percentage: {
      value: cdktf.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsItfDefaultStaticTargetGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsItfDefaultStaticTargetGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsItfDefaultStaticTargetGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
      this._percentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
      this._percentage = value.percentage;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // percentage - computed: false, optional: false, required: true
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}
export interface ElastigroupAwsItfLoadBalancerListenerRuleStaticTargetGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#arn ElastigroupAws#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#percentage ElastigroupAws#percentage}
  */
  readonly percentage: number;
}

export function elastigroupAwsItfLoadBalancerListenerRuleStaticTargetGroupToTerraform(struct?: ElastigroupAwsItfLoadBalancerListenerRuleStaticTargetGroupOutputReference | ElastigroupAwsItfLoadBalancerListenerRuleStaticTargetGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}


export function elastigroupAwsItfLoadBalancerListenerRuleStaticTargetGroupToHclTerraform(struct?: ElastigroupAwsItfLoadBalancerListenerRuleStaticTargetGroupOutputReference | ElastigroupAwsItfLoadBalancerListenerRuleStaticTargetGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percentage: {
      value: cdktf.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsItfLoadBalancerListenerRuleStaticTargetGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsItfLoadBalancerListenerRuleStaticTargetGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsItfLoadBalancerListenerRuleStaticTargetGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
      this._percentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
      this._percentage = value.percentage;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // percentage - computed: false, optional: false, required: true
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}
export interface ElastigroupAwsItfLoadBalancerListenerRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#rule_arn ElastigroupAws#rule_arn}
  */
  readonly ruleArn: string;
  /**
  * static_target_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#static_target_group ElastigroupAws#static_target_group}
  */
  readonly staticTargetGroup?: ElastigroupAwsItfLoadBalancerListenerRuleStaticTargetGroup;
}

export function elastigroupAwsItfLoadBalancerListenerRuleToTerraform(struct?: ElastigroupAwsItfLoadBalancerListenerRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_arn: cdktf.stringToTerraform(struct!.ruleArn),
    static_target_group: elastigroupAwsItfLoadBalancerListenerRuleStaticTargetGroupToTerraform(struct!.staticTargetGroup),
  }
}


export function elastigroupAwsItfLoadBalancerListenerRuleToHclTerraform(struct?: ElastigroupAwsItfLoadBalancerListenerRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule_arn: {
      value: cdktf.stringToHclTerraform(struct!.ruleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_target_group: {
      value: elastigroupAwsItfLoadBalancerListenerRuleStaticTargetGroupToHclTerraform(struct!.staticTargetGroup),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAwsItfLoadBalancerListenerRuleStaticTargetGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsItfLoadBalancerListenerRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsItfLoadBalancerListenerRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleArn = this._ruleArn;
    }
    if (this._staticTargetGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticTargetGroup = this._staticTargetGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsItfLoadBalancerListenerRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ruleArn = undefined;
      this._staticTargetGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ruleArn = value.ruleArn;
      this._staticTargetGroup.internalValue = value.staticTargetGroup;
    }
  }

  // rule_arn - computed: false, optional: false, required: true
  private _ruleArn?: string; 
  public get ruleArn() {
    return this.getStringAttribute('rule_arn');
  }
  public set ruleArn(value: string) {
    this._ruleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleArnInput() {
    return this._ruleArn;
  }

  // static_target_group - computed: false, optional: true, required: false
  private _staticTargetGroup = new ElastigroupAwsItfLoadBalancerListenerRuleStaticTargetGroupOutputReference(this, "static_target_group");
  public get staticTargetGroup() {
    return this._staticTargetGroup;
  }
  public putStaticTargetGroup(value: ElastigroupAwsItfLoadBalancerListenerRuleStaticTargetGroup) {
    this._staticTargetGroup.internalValue = value;
  }
  public resetStaticTargetGroup() {
    this._staticTargetGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticTargetGroupInput() {
    return this._staticTargetGroup.internalValue;
  }
}

export class ElastigroupAwsItfLoadBalancerListenerRuleList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsItfLoadBalancerListenerRule[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsItfLoadBalancerListenerRuleOutputReference {
    return new ElastigroupAwsItfLoadBalancerListenerRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsItfLoadBalancer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#load_balancer_arn ElastigroupAws#load_balancer_arn}
  */
  readonly loadBalancerArn: string;
  /**
  * listener_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#listener_rule ElastigroupAws#listener_rule}
  */
  readonly listenerRule: ElastigroupAwsItfLoadBalancerListenerRule[] | cdktf.IResolvable;
}

export function elastigroupAwsItfLoadBalancerToTerraform(struct?: ElastigroupAwsItfLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    load_balancer_arn: cdktf.stringToTerraform(struct!.loadBalancerArn),
    listener_rule: cdktf.listMapper(elastigroupAwsItfLoadBalancerListenerRuleToTerraform, true)(struct!.listenerRule),
  }
}


export function elastigroupAwsItfLoadBalancerToHclTerraform(struct?: ElastigroupAwsItfLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    load_balancer_arn: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listener_rule: {
      value: cdktf.listMapperHcl(elastigroupAwsItfLoadBalancerListenerRuleToHclTerraform, true)(struct!.listenerRule),
      isBlock: true,
      type: "set",
      storageClassType: "ElastigroupAwsItfLoadBalancerListenerRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsItfLoadBalancerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsItfLoadBalancer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loadBalancerArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerArn = this._loadBalancerArn;
    }
    if (this._listenerRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerRule = this._listenerRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsItfLoadBalancer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._loadBalancerArn = undefined;
      this._listenerRule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._loadBalancerArn = value.loadBalancerArn;
      this._listenerRule.internalValue = value.listenerRule;
    }
  }

  // load_balancer_arn - computed: false, optional: false, required: true
  private _loadBalancerArn?: string; 
  public get loadBalancerArn() {
    return this.getStringAttribute('load_balancer_arn');
  }
  public set loadBalancerArn(value: string) {
    this._loadBalancerArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerArnInput() {
    return this._loadBalancerArn;
  }

  // listener_rule - computed: false, optional: false, required: true
  private _listenerRule = new ElastigroupAwsItfLoadBalancerListenerRuleList(this, "listener_rule", true);
  public get listenerRule() {
    return this._listenerRule;
  }
  public putListenerRule(value: ElastigroupAwsItfLoadBalancerListenerRule[] | cdktf.IResolvable) {
    this._listenerRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerRuleInput() {
    return this._listenerRule.internalValue;
  }
}

export class ElastigroupAwsItfLoadBalancerList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsItfLoadBalancer[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsItfLoadBalancerOutputReference {
    return new ElastigroupAwsItfLoadBalancerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsItfTargetGroupConfigMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#grpc_code ElastigroupAws#grpc_code}
  */
  readonly grpcCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#http_code ElastigroupAws#http_code}
  */
  readonly httpCode?: string;
}

export function elastigroupAwsItfTargetGroupConfigMatcherToTerraform(struct?: ElastigroupAwsItfTargetGroupConfigMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grpc_code: cdktf.stringToTerraform(struct!.grpcCode),
    http_code: cdktf.stringToTerraform(struct!.httpCode),
  }
}


export function elastigroupAwsItfTargetGroupConfigMatcherToHclTerraform(struct?: ElastigroupAwsItfTargetGroupConfigMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grpc_code: {
      value: cdktf.stringToHclTerraform(struct!.grpcCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_code: {
      value: cdktf.stringToHclTerraform(struct!.httpCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsItfTargetGroupConfigMatcherOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsItfTargetGroupConfigMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grpcCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcCode = this._grpcCode;
    }
    if (this._httpCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCode = this._httpCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsItfTargetGroupConfigMatcher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._grpcCode = undefined;
      this._httpCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._grpcCode = value.grpcCode;
      this._httpCode = value.httpCode;
    }
  }

  // grpc_code - computed: false, optional: true, required: false
  private _grpcCode?: string; 
  public get grpcCode() {
    return this.getStringAttribute('grpc_code');
  }
  public set grpcCode(value: string) {
    this._grpcCode = value;
  }
  public resetGrpcCode() {
    this._grpcCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcCodeInput() {
    return this._grpcCode;
  }

  // http_code - computed: false, optional: true, required: false
  private _httpCode?: string; 
  public get httpCode() {
    return this.getStringAttribute('http_code');
  }
  public set httpCode(value: string) {
    this._httpCode = value;
  }
  public resetHttpCode() {
    this._httpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCodeInput() {
    return this._httpCode;
  }
}

export class ElastigroupAwsItfTargetGroupConfigMatcherList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsItfTargetGroupConfigMatcher[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsItfTargetGroupConfigMatcherOutputReference {
    return new ElastigroupAwsItfTargetGroupConfigMatcherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsItfTargetGroupConfigTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#tag_key ElastigroupAws#tag_key}
  */
  readonly tagKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#tag_value ElastigroupAws#tag_value}
  */
  readonly tagValue?: string;
}

export function elastigroupAwsItfTargetGroupConfigTagsToTerraform(struct?: ElastigroupAwsItfTargetGroupConfigTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function elastigroupAwsItfTargetGroupConfigTagsToHclTerraform(struct?: ElastigroupAwsItfTargetGroupConfigTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsItfTargetGroupConfigTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsItfTargetGroupConfigTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsItfTargetGroupConfigTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // tag_key - computed: false, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: true, required: false
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  public resetTagValue() {
    this._tagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}

export class ElastigroupAwsItfTargetGroupConfigTagsList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsItfTargetGroupConfigTags[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsItfTargetGroupConfigTagsOutputReference {
    return new ElastigroupAwsItfTargetGroupConfigTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsItfTargetGroupConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#health_check_interval_seconds ElastigroupAws#health_check_interval_seconds}
  */
  readonly healthCheckIntervalSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#health_check_path ElastigroupAws#health_check_path}
  */
  readonly healthCheckPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#health_check_port ElastigroupAws#health_check_port}
  */
  readonly healthCheckPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#health_check_protocol ElastigroupAws#health_check_protocol}
  */
  readonly healthCheckProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#health_check_timeout_seconds ElastigroupAws#health_check_timeout_seconds}
  */
  readonly healthCheckTimeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#healthy_threshold_count ElastigroupAws#healthy_threshold_count}
  */
  readonly healthyThresholdCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#port ElastigroupAws#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#protocol ElastigroupAws#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#protocol_version ElastigroupAws#protocol_version}
  */
  readonly protocolVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#unhealthy_threshold_count ElastigroupAws#unhealthy_threshold_count}
  */
  readonly unhealthyThresholdCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#vpc_id ElastigroupAws#vpc_id}
  */
  readonly vpcId: string;
  /**
  * matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#matcher ElastigroupAws#matcher}
  */
  readonly matcher?: ElastigroupAwsItfTargetGroupConfigMatcher[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#tags ElastigroupAws#tags}
  */
  readonly tags?: ElastigroupAwsItfTargetGroupConfigTags[] | cdktf.IResolvable;
}

export function elastigroupAwsItfTargetGroupConfigToTerraform(struct?: ElastigroupAwsItfTargetGroupConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check_interval_seconds: cdktf.numberToTerraform(struct!.healthCheckIntervalSeconds),
    health_check_path: cdktf.stringToTerraform(struct!.healthCheckPath),
    health_check_port: cdktf.stringToTerraform(struct!.healthCheckPort),
    health_check_protocol: cdktf.stringToTerraform(struct!.healthCheckProtocol),
    health_check_timeout_seconds: cdktf.numberToTerraform(struct!.healthCheckTimeoutSeconds),
    healthy_threshold_count: cdktf.numberToTerraform(struct!.healthyThresholdCount),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_version: cdktf.stringToTerraform(struct!.protocolVersion),
    unhealthy_threshold_count: cdktf.numberToTerraform(struct!.unhealthyThresholdCount),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    matcher: cdktf.listMapper(elastigroupAwsItfTargetGroupConfigMatcherToTerraform, true)(struct!.matcher),
    tags: cdktf.listMapper(elastigroupAwsItfTargetGroupConfigTagsToTerraform, true)(struct!.tags),
  }
}


export function elastigroupAwsItfTargetGroupConfigToHclTerraform(struct?: ElastigroupAwsItfTargetGroupConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_check_interval_seconds: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckIntervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_path: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_port: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_protocol: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    healthy_threshold_count: {
      value: cdktf.numberToHclTerraform(struct!.healthyThresholdCount),
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
    protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.protocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unhealthy_threshold_count: {
      value: cdktf.numberToHclTerraform(struct!.unhealthyThresholdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    matcher: {
      value: cdktf.listMapperHcl(elastigroupAwsItfTargetGroupConfigMatcherToHclTerraform, true)(struct!.matcher),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAwsItfTargetGroupConfigMatcherList",
    },
    tags: {
      value: cdktf.listMapperHcl(elastigroupAwsItfTargetGroupConfigTagsToHclTerraform, true)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "ElastigroupAwsItfTargetGroupConfigTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsItfTargetGroupConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsItfTargetGroupConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthCheckIntervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckIntervalSeconds = this._healthCheckIntervalSeconds;
    }
    if (this._healthCheckPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckPath = this._healthCheckPath;
    }
    if (this._healthCheckPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckPort = this._healthCheckPort;
    }
    if (this._healthCheckProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckProtocol = this._healthCheckProtocol;
    }
    if (this._healthCheckTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckTimeoutSeconds = this._healthCheckTimeoutSeconds;
    }
    if (this._healthyThresholdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthyThresholdCount = this._healthyThresholdCount;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolVersion = this._protocolVersion;
    }
    if (this._unhealthyThresholdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyThresholdCount = this._unhealthyThresholdCount;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    if (this._matcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matcher = this._matcher?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsItfTargetGroupConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthCheckIntervalSeconds = undefined;
      this._healthCheckPath = undefined;
      this._healthCheckPort = undefined;
      this._healthCheckProtocol = undefined;
      this._healthCheckTimeoutSeconds = undefined;
      this._healthyThresholdCount = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._protocolVersion = undefined;
      this._unhealthyThresholdCount = undefined;
      this._vpcId = undefined;
      this._matcher.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthCheckIntervalSeconds = value.healthCheckIntervalSeconds;
      this._healthCheckPath = value.healthCheckPath;
      this._healthCheckPort = value.healthCheckPort;
      this._healthCheckProtocol = value.healthCheckProtocol;
      this._healthCheckTimeoutSeconds = value.healthCheckTimeoutSeconds;
      this._healthyThresholdCount = value.healthyThresholdCount;
      this._port = value.port;
      this._protocol = value.protocol;
      this._protocolVersion = value.protocolVersion;
      this._unhealthyThresholdCount = value.unhealthyThresholdCount;
      this._vpcId = value.vpcId;
      this._matcher.internalValue = value.matcher;
      this._tags.internalValue = value.tags;
    }
  }

  // health_check_interval_seconds - computed: false, optional: true, required: false
  private _healthCheckIntervalSeconds?: number; 
  public get healthCheckIntervalSeconds() {
    return this.getNumberAttribute('health_check_interval_seconds');
  }
  public set healthCheckIntervalSeconds(value: number) {
    this._healthCheckIntervalSeconds = value;
  }
  public resetHealthCheckIntervalSeconds() {
    this._healthCheckIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckIntervalSecondsInput() {
    return this._healthCheckIntervalSeconds;
  }

  // health_check_path - computed: false, optional: false, required: true
  private _healthCheckPath?: string; 
  public get healthCheckPath() {
    return this.getStringAttribute('health_check_path');
  }
  public set healthCheckPath(value: string) {
    this._healthCheckPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPathInput() {
    return this._healthCheckPath;
  }

  // health_check_port - computed: false, optional: true, required: false
  private _healthCheckPort?: string; 
  public get healthCheckPort() {
    return this.getStringAttribute('health_check_port');
  }
  public set healthCheckPort(value: string) {
    this._healthCheckPort = value;
  }
  public resetHealthCheckPort() {
    this._healthCheckPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPortInput() {
    return this._healthCheckPort;
  }

  // health_check_protocol - computed: false, optional: true, required: false
  private _healthCheckProtocol?: string; 
  public get healthCheckProtocol() {
    return this.getStringAttribute('health_check_protocol');
  }
  public set healthCheckProtocol(value: string) {
    this._healthCheckProtocol = value;
  }
  public resetHealthCheckProtocol() {
    this._healthCheckProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckProtocolInput() {
    return this._healthCheckProtocol;
  }

  // health_check_timeout_seconds - computed: false, optional: true, required: false
  private _healthCheckTimeoutSeconds?: number; 
  public get healthCheckTimeoutSeconds() {
    return this.getNumberAttribute('health_check_timeout_seconds');
  }
  public set healthCheckTimeoutSeconds(value: number) {
    this._healthCheckTimeoutSeconds = value;
  }
  public resetHealthCheckTimeoutSeconds() {
    this._healthCheckTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTimeoutSecondsInput() {
    return this._healthCheckTimeoutSeconds;
  }

  // healthy_threshold_count - computed: false, optional: true, required: false
  private _healthyThresholdCount?: number; 
  public get healthyThresholdCount() {
    return this.getNumberAttribute('healthy_threshold_count');
  }
  public set healthyThresholdCount(value: number) {
    this._healthyThresholdCount = value;
  }
  public resetHealthyThresholdCount() {
    this._healthyThresholdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdCountInput() {
    return this._healthyThresholdCount;
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

  // protocol_version - computed: false, optional: true, required: false
  private _protocolVersion?: string; 
  public get protocolVersion() {
    return this.getStringAttribute('protocol_version');
  }
  public set protocolVersion(value: string) {
    this._protocolVersion = value;
  }
  public resetProtocolVersion() {
    this._protocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolVersionInput() {
    return this._protocolVersion;
  }

  // unhealthy_threshold_count - computed: false, optional: true, required: false
  private _unhealthyThresholdCount?: number; 
  public get unhealthyThresholdCount() {
    return this.getNumberAttribute('unhealthy_threshold_count');
  }
  public set unhealthyThresholdCount(value: number) {
    this._unhealthyThresholdCount = value;
  }
  public resetUnhealthyThresholdCount() {
    this._unhealthyThresholdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdCountInput() {
    return this._unhealthyThresholdCount;
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

  // matcher - computed: false, optional: true, required: false
  private _matcher = new ElastigroupAwsItfTargetGroupConfigMatcherList(this, "matcher", false);
  public get matcher() {
    return this._matcher;
  }
  public putMatcher(value: ElastigroupAwsItfTargetGroupConfigMatcher[] | cdktf.IResolvable) {
    this._matcher.internalValue = value;
  }
  public resetMatcher() {
    this._matcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matcherInput() {
    return this._matcher.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new ElastigroupAwsItfTargetGroupConfigTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ElastigroupAwsItfTargetGroupConfigTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class ElastigroupAwsItfTargetGroupConfigList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsItfTargetGroupConfig[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsItfTargetGroupConfigOutputReference {
    return new ElastigroupAwsItfTargetGroupConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsItf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#fixed_target_groups ElastigroupAws#fixed_target_groups}
  */
  readonly fixedTargetGroups: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#migration_healthiness_threshold ElastigroupAws#migration_healthiness_threshold}
  */
  readonly migrationHealthinessThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#weight_strategy ElastigroupAws#weight_strategy}
  */
  readonly weightStrategy: string;
  /**
  * default_static_target_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#default_static_target_group ElastigroupAws#default_static_target_group}
  */
  readonly defaultStaticTargetGroup?: ElastigroupAwsItfDefaultStaticTargetGroup;
  /**
  * load_balancer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#load_balancer ElastigroupAws#load_balancer}
  */
  readonly loadBalancer: ElastigroupAwsItfLoadBalancer[] | cdktf.IResolvable;
  /**
  * target_group_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#target_group_config ElastigroupAws#target_group_config}
  */
  readonly targetGroupConfig: ElastigroupAwsItfTargetGroupConfig[] | cdktf.IResolvable;
}

export function elastigroupAwsItfToTerraform(struct?: ElastigroupAwsItf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_target_groups: cdktf.booleanToTerraform(struct!.fixedTargetGroups),
    migration_healthiness_threshold: cdktf.numberToTerraform(struct!.migrationHealthinessThreshold),
    weight_strategy: cdktf.stringToTerraform(struct!.weightStrategy),
    default_static_target_group: elastigroupAwsItfDefaultStaticTargetGroupToTerraform(struct!.defaultStaticTargetGroup),
    load_balancer: cdktf.listMapper(elastigroupAwsItfLoadBalancerToTerraform, true)(struct!.loadBalancer),
    target_group_config: cdktf.listMapper(elastigroupAwsItfTargetGroupConfigToTerraform, true)(struct!.targetGroupConfig),
  }
}


export function elastigroupAwsItfToHclTerraform(struct?: ElastigroupAwsItf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_target_groups: {
      value: cdktf.booleanToHclTerraform(struct!.fixedTargetGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    migration_healthiness_threshold: {
      value: cdktf.numberToHclTerraform(struct!.migrationHealthinessThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight_strategy: {
      value: cdktf.stringToHclTerraform(struct!.weightStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_static_target_group: {
      value: elastigroupAwsItfDefaultStaticTargetGroupToHclTerraform(struct!.defaultStaticTargetGroup),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAwsItfDefaultStaticTargetGroupList",
    },
    load_balancer: {
      value: cdktf.listMapperHcl(elastigroupAwsItfLoadBalancerToHclTerraform, true)(struct!.loadBalancer),
      isBlock: true,
      type: "set",
      storageClassType: "ElastigroupAwsItfLoadBalancerList",
    },
    target_group_config: {
      value: cdktf.listMapperHcl(elastigroupAwsItfTargetGroupConfigToHclTerraform, true)(struct!.targetGroupConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAwsItfTargetGroupConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsItfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsItf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedTargetGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedTargetGroups = this._fixedTargetGroups;
    }
    if (this._migrationHealthinessThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.migrationHealthinessThreshold = this._migrationHealthinessThreshold;
    }
    if (this._weightStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightStrategy = this._weightStrategy;
    }
    if (this._defaultStaticTargetGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultStaticTargetGroup = this._defaultStaticTargetGroup?.internalValue;
    }
    if (this._loadBalancer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancer = this._loadBalancer?.internalValue;
    }
    if (this._targetGroupConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroupConfig = this._targetGroupConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsItf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fixedTargetGroups = undefined;
      this._migrationHealthinessThreshold = undefined;
      this._weightStrategy = undefined;
      this._defaultStaticTargetGroup.internalValue = undefined;
      this._loadBalancer.internalValue = undefined;
      this._targetGroupConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fixedTargetGroups = value.fixedTargetGroups;
      this._migrationHealthinessThreshold = value.migrationHealthinessThreshold;
      this._weightStrategy = value.weightStrategy;
      this._defaultStaticTargetGroup.internalValue = value.defaultStaticTargetGroup;
      this._loadBalancer.internalValue = value.loadBalancer;
      this._targetGroupConfig.internalValue = value.targetGroupConfig;
    }
  }

  // fixed_target_groups - computed: false, optional: false, required: true
  private _fixedTargetGroups?: boolean | cdktf.IResolvable; 
  public get fixedTargetGroups() {
    return this.getBooleanAttribute('fixed_target_groups');
  }
  public set fixedTargetGroups(value: boolean | cdktf.IResolvable) {
    this._fixedTargetGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedTargetGroupsInput() {
    return this._fixedTargetGroups;
  }

  // migration_healthiness_threshold - computed: false, optional: true, required: false
  private _migrationHealthinessThreshold?: number; 
  public get migrationHealthinessThreshold() {
    return this.getNumberAttribute('migration_healthiness_threshold');
  }
  public set migrationHealthinessThreshold(value: number) {
    this._migrationHealthinessThreshold = value;
  }
  public resetMigrationHealthinessThreshold() {
    this._migrationHealthinessThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationHealthinessThresholdInput() {
    return this._migrationHealthinessThreshold;
  }

  // weight_strategy - computed: false, optional: false, required: true
  private _weightStrategy?: string; 
  public get weightStrategy() {
    return this.getStringAttribute('weight_strategy');
  }
  public set weightStrategy(value: string) {
    this._weightStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightStrategyInput() {
    return this._weightStrategy;
  }

  // default_static_target_group - computed: false, optional: true, required: false
  private _defaultStaticTargetGroup = new ElastigroupAwsItfDefaultStaticTargetGroupOutputReference(this, "default_static_target_group");
  public get defaultStaticTargetGroup() {
    return this._defaultStaticTargetGroup;
  }
  public putDefaultStaticTargetGroup(value: ElastigroupAwsItfDefaultStaticTargetGroup) {
    this._defaultStaticTargetGroup.internalValue = value;
  }
  public resetDefaultStaticTargetGroup() {
    this._defaultStaticTargetGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultStaticTargetGroupInput() {
    return this._defaultStaticTargetGroup.internalValue;
  }

  // load_balancer - computed: false, optional: false, required: true
  private _loadBalancer = new ElastigroupAwsItfLoadBalancerList(this, "load_balancer", true);
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: ElastigroupAwsItfLoadBalancer[] | cdktf.IResolvable) {
    this._loadBalancer.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
  }

  // target_group_config - computed: false, optional: false, required: true
  private _targetGroupConfig = new ElastigroupAwsItfTargetGroupConfigList(this, "target_group_config", false);
  public get targetGroupConfig() {
    return this._targetGroupConfig;
  }
  public putTargetGroupConfig(value: ElastigroupAwsItfTargetGroupConfig[] | cdktf.IResolvable) {
    this._targetGroupConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupConfigInput() {
    return this._targetGroupConfig.internalValue;
  }
}

export class ElastigroupAwsItfList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsItf[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsItfOutputReference {
    return new ElastigroupAwsItfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsLoggingExportS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#id ElastigroupAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function elastigroupAwsLoggingExportS3ToTerraform(struct?: ElastigroupAwsLoggingExportS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function elastigroupAwsLoggingExportS3ToHclTerraform(struct?: ElastigroupAwsLoggingExportS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsLoggingExportS3OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsLoggingExportS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsLoggingExportS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class ElastigroupAwsLoggingExportS3List extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsLoggingExportS3[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsLoggingExportS3OutputReference {
    return new ElastigroupAwsLoggingExportS3OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsLoggingExport {
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#s3 ElastigroupAws#s3}
  */
  readonly s3?: ElastigroupAwsLoggingExportS3[] | cdktf.IResolvable;
}

export function elastigroupAwsLoggingExportToTerraform(struct?: ElastigroupAwsLoggingExportOutputReference | ElastigroupAwsLoggingExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3: cdktf.listMapper(elastigroupAwsLoggingExportS3ToTerraform, true)(struct!.s3),
  }
}


export function elastigroupAwsLoggingExportToHclTerraform(struct?: ElastigroupAwsLoggingExportOutputReference | ElastigroupAwsLoggingExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3: {
      value: cdktf.listMapperHcl(elastigroupAwsLoggingExportS3ToHclTerraform, true)(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAwsLoggingExportS3List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsLoggingExportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsLoggingExport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsLoggingExport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3.internalValue = value.s3;
    }
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new ElastigroupAwsLoggingExportS3List(this, "s3", false);
  public get s3() {
    return this._s3;
  }
  public putS3(value: ElastigroupAwsLoggingExportS3[] | cdktf.IResolvable) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}
export interface ElastigroupAwsLogging {
  /**
  * export block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#export ElastigroupAws#export}
  */
  readonly export?: ElastigroupAwsLoggingExport;
}

export function elastigroupAwsLoggingToTerraform(struct?: ElastigroupAwsLoggingOutputReference | ElastigroupAwsLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export: elastigroupAwsLoggingExportToTerraform(struct!.export),
  }
}


export function elastigroupAwsLoggingToHclTerraform(struct?: ElastigroupAwsLoggingOutputReference | ElastigroupAwsLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export: {
      value: elastigroupAwsLoggingExportToHclTerraform(struct!.export),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAwsLoggingExportList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._export?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.export = this._export?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._export.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._export.internalValue = value.export;
    }
  }

  // export - computed: false, optional: true, required: false
  private _export = new ElastigroupAwsLoggingExportOutputReference(this, "export");
  public get export() {
    return this._export;
  }
  public putExport(value: ElastigroupAwsLoggingExport) {
    this._export.internalValue = value;
  }
  public resetExport() {
    this._export.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportInput() {
    return this._export.internalValue;
  }
}
export interface ElastigroupAwsMetadataOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#http_put_response_hop_limit ElastigroupAws#http_put_response_hop_limit}
  */
  readonly httpPutResponseHopLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#http_tokens ElastigroupAws#http_tokens}
  */
  readonly httpTokens: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#instance_metadata_tags ElastigroupAws#instance_metadata_tags}
  */
  readonly instanceMetadataTags?: string;
}

export function elastigroupAwsMetadataOptionsToTerraform(struct?: ElastigroupAwsMetadataOptionsOutputReference | ElastigroupAwsMetadataOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_put_response_hop_limit: cdktf.numberToTerraform(struct!.httpPutResponseHopLimit),
    http_tokens: cdktf.stringToTerraform(struct!.httpTokens),
    instance_metadata_tags: cdktf.stringToTerraform(struct!.instanceMetadataTags),
  }
}


export function elastigroupAwsMetadataOptionsToHclTerraform(struct?: ElastigroupAwsMetadataOptionsOutputReference | ElastigroupAwsMetadataOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_put_response_hop_limit: {
      value: cdktf.numberToHclTerraform(struct!.httpPutResponseHopLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_tokens: {
      value: cdktf.stringToHclTerraform(struct!.httpTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_metadata_tags: {
      value: cdktf.stringToHclTerraform(struct!.instanceMetadataTags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsMetadataOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsMetadataOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpPutResponseHopLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPutResponseHopLimit = this._httpPutResponseHopLimit;
    }
    if (this._httpTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpTokens = this._httpTokens;
    }
    if (this._instanceMetadataTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceMetadataTags = this._instanceMetadataTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsMetadataOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpPutResponseHopLimit = undefined;
      this._httpTokens = undefined;
      this._instanceMetadataTags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpPutResponseHopLimit = value.httpPutResponseHopLimit;
      this._httpTokens = value.httpTokens;
      this._instanceMetadataTags = value.instanceMetadataTags;
    }
  }

  // http_put_response_hop_limit - computed: false, optional: true, required: false
  private _httpPutResponseHopLimit?: number; 
  public get httpPutResponseHopLimit() {
    return this.getNumberAttribute('http_put_response_hop_limit');
  }
  public set httpPutResponseHopLimit(value: number) {
    this._httpPutResponseHopLimit = value;
  }
  public resetHttpPutResponseHopLimit() {
    this._httpPutResponseHopLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPutResponseHopLimitInput() {
    return this._httpPutResponseHopLimit;
  }

  // http_tokens - computed: false, optional: false, required: true
  private _httpTokens?: string; 
  public get httpTokens() {
    return this.getStringAttribute('http_tokens');
  }
  public set httpTokens(value: string) {
    this._httpTokens = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTokensInput() {
    return this._httpTokens;
  }

  // instance_metadata_tags - computed: false, optional: true, required: false
  private _instanceMetadataTags?: string; 
  public get instanceMetadataTags() {
    return this.getStringAttribute('instance_metadata_tags');
  }
  public set instanceMetadataTags(value: string) {
    this._instanceMetadataTags = value;
  }
  public resetInstanceMetadataTags() {
    this._instanceMetadataTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceMetadataTagsInput() {
    return this._instanceMetadataTags;
  }
}
export interface ElastigroupAwsMultipleMetricsExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#expression ElastigroupAws#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#name ElastigroupAws#name}
  */
  readonly name: string;
}

export function elastigroupAwsMultipleMetricsExpressionsToTerraform(struct?: ElastigroupAwsMultipleMetricsExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function elastigroupAwsMultipleMetricsExpressionsToHclTerraform(struct?: ElastigroupAwsMultipleMetricsExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
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

export class ElastigroupAwsMultipleMetricsExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsMultipleMetricsExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsMultipleMetricsExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._name = value.name;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
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

export class ElastigroupAwsMultipleMetricsExpressionsList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsMultipleMetricsExpressions[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsMultipleMetricsExpressionsOutputReference {
    return new ElastigroupAwsMultipleMetricsExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsMultipleMetricsMetricsDimensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#name ElastigroupAws#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#value ElastigroupAws#value}
  */
  readonly value?: string;
}

export function elastigroupAwsMultipleMetricsMetricsDimensionsToTerraform(struct?: ElastigroupAwsMultipleMetricsMetricsDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function elastigroupAwsMultipleMetricsMetricsDimensionsToHclTerraform(struct?: ElastigroupAwsMultipleMetricsMetricsDimensions | cdktf.IResolvable): any {
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

export class ElastigroupAwsMultipleMetricsMetricsDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsMultipleMetricsMetricsDimensions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ElastigroupAwsMultipleMetricsMetricsDimensions | cdktf.IResolvable | undefined) {
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

export class ElastigroupAwsMultipleMetricsMetricsDimensionsList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsMultipleMetricsMetricsDimensions[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsMultipleMetricsMetricsDimensionsOutputReference {
    return new ElastigroupAwsMultipleMetricsMetricsDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsMultipleMetricsMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#extended_statistic ElastigroupAws#extended_statistic}
  */
  readonly extendedStatistic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#metric_name ElastigroupAws#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#name ElastigroupAws#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#namespace ElastigroupAws#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#statistic ElastigroupAws#statistic}
  */
  readonly statistic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#unit ElastigroupAws#unit}
  */
  readonly unit?: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#dimensions ElastigroupAws#dimensions}
  */
  readonly dimensions?: ElastigroupAwsMultipleMetricsMetricsDimensions[] | cdktf.IResolvable;
}

export function elastigroupAwsMultipleMetricsMetricsToTerraform(struct?: ElastigroupAwsMultipleMetricsMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extended_statistic: cdktf.stringToTerraform(struct!.extendedStatistic),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    unit: cdktf.stringToTerraform(struct!.unit),
    dimensions: cdktf.listMapper(elastigroupAwsMultipleMetricsMetricsDimensionsToTerraform, true)(struct!.dimensions),
  }
}


export function elastigroupAwsMultipleMetricsMetricsToHclTerraform(struct?: ElastigroupAwsMultipleMetricsMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extended_statistic: {
      value: cdktf.stringToHclTerraform(struct!.extendedStatistic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
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
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimensions: {
      value: cdktf.listMapperHcl(elastigroupAwsMultipleMetricsMetricsDimensionsToHclTerraform, true)(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAwsMultipleMetricsMetricsDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsMultipleMetricsMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsMultipleMetricsMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extendedStatistic !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedStatistic = this._extendedStatistic;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._statistic !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistic = this._statistic;
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

  public set internalValue(value: ElastigroupAwsMultipleMetricsMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extendedStatistic = undefined;
      this._metricName = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._statistic = undefined;
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
      this._extendedStatistic = value.extendedStatistic;
      this._metricName = value.metricName;
      this._name = value.name;
      this._namespace = value.namespace;
      this._statistic = value.statistic;
      this._unit = value.unit;
      this._dimensions.internalValue = value.dimensions;
    }
  }

  // extended_statistic - computed: false, optional: true, required: false
  private _extendedStatistic?: string; 
  public get extendedStatistic() {
    return this.getStringAttribute('extended_statistic');
  }
  public set extendedStatistic(value: string) {
    this._extendedStatistic = value;
  }
  public resetExtendedStatistic() {
    this._extendedStatistic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedStatisticInput() {
    return this._extendedStatistic;
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

  // statistic - computed: false, optional: true, required: false
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

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new ElastigroupAwsMultipleMetricsMetricsDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: ElastigroupAwsMultipleMetricsMetricsDimensions[] | cdktf.IResolvable) {
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

export class ElastigroupAwsMultipleMetricsMetricsList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsMultipleMetricsMetrics[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsMultipleMetricsMetricsOutputReference {
    return new ElastigroupAwsMultipleMetricsMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsMultipleMetrics {
  /**
  * expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#expressions ElastigroupAws#expressions}
  */
  readonly expressions?: ElastigroupAwsMultipleMetricsExpressions[] | cdktf.IResolvable;
  /**
  * metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#metrics ElastigroupAws#metrics}
  */
  readonly metrics?: ElastigroupAwsMultipleMetricsMetrics[] | cdktf.IResolvable;
}

export function elastigroupAwsMultipleMetricsToTerraform(struct?: ElastigroupAwsMultipleMetricsOutputReference | ElastigroupAwsMultipleMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(elastigroupAwsMultipleMetricsExpressionsToTerraform, true)(struct!.expressions),
    metrics: cdktf.listMapper(elastigroupAwsMultipleMetricsMetricsToTerraform, true)(struct!.metrics),
  }
}


export function elastigroupAwsMultipleMetricsToHclTerraform(struct?: ElastigroupAwsMultipleMetricsOutputReference | ElastigroupAwsMultipleMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expressions: {
      value: cdktf.listMapperHcl(elastigroupAwsMultipleMetricsExpressionsToHclTerraform, true)(struct!.expressions),
      isBlock: true,
      type: "set",
      storageClassType: "ElastigroupAwsMultipleMetricsExpressionsList",
    },
    metrics: {
      value: cdktf.listMapperHcl(elastigroupAwsMultipleMetricsMetricsToHclTerraform, true)(struct!.metrics),
      isBlock: true,
      type: "set",
      storageClassType: "ElastigroupAwsMultipleMetricsMetricsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsMultipleMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsMultipleMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions?.internalValue;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsMultipleMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expressions.internalValue = undefined;
      this._metrics.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expressions.internalValue = value.expressions;
      this._metrics.internalValue = value.metrics;
    }
  }

  // expressions - computed: false, optional: true, required: false
  private _expressions = new ElastigroupAwsMultipleMetricsExpressionsList(this, "expressions", true);
  public get expressions() {
    return this._expressions;
  }
  public putExpressions(value: ElastigroupAwsMultipleMetricsExpressions[] | cdktf.IResolvable) {
    this._expressions.internalValue = value;
  }
  public resetExpressions() {
    this._expressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions.internalValue;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new ElastigroupAwsMultipleMetricsMetricsList(this, "metrics", true);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: ElastigroupAwsMultipleMetricsMetrics[] | cdktf.IResolvable) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }
}
export interface ElastigroupAwsNetworkInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#associate_ipv6_address ElastigroupAws#associate_ipv6_address}
  */
  readonly associateIpv6Address?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#associate_public_ip_address ElastigroupAws#associate_public_ip_address}
  */
  readonly associatePublicIpAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#delete_on_termination ElastigroupAws#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#description ElastigroupAws#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#device_index ElastigroupAws#device_index}
  */
  readonly deviceIndex: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#network_interface_id ElastigroupAws#network_interface_id}
  */
  readonly networkInterfaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#private_ip_address ElastigroupAws#private_ip_address}
  */
  readonly privateIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#secondary_private_ip_address_count ElastigroupAws#secondary_private_ip_address_count}
  */
  readonly secondaryPrivateIpAddressCount?: string;
}

export function elastigroupAwsNetworkInterfaceToTerraform(struct?: ElastigroupAwsNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    associate_ipv6_address: cdktf.booleanToTerraform(struct!.associateIpv6Address),
    associate_public_ip_address: cdktf.booleanToTerraform(struct!.associatePublicIpAddress),
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    description: cdktf.stringToTerraform(struct!.description),
    device_index: cdktf.stringToTerraform(struct!.deviceIndex),
    network_interface_id: cdktf.stringToTerraform(struct!.networkInterfaceId),
    private_ip_address: cdktf.stringToTerraform(struct!.privateIpAddress),
    secondary_private_ip_address_count: cdktf.stringToTerraform(struct!.secondaryPrivateIpAddressCount),
  }
}


export function elastigroupAwsNetworkInterfaceToHclTerraform(struct?: ElastigroupAwsNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    associate_ipv6_address: {
      value: cdktf.booleanToHclTerraform(struct!.associateIpv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    associate_public_ip_address: {
      value: cdktf.booleanToHclTerraform(struct!.associatePublicIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delete_on_termination: {
      value: cdktf.booleanToHclTerraform(struct!.deleteOnTermination),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_index: {
      value: cdktf.stringToHclTerraform(struct!.deviceIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_interface_id: {
      value: cdktf.stringToHclTerraform(struct!.networkInterfaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.privateIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_private_ip_address_count: {
      value: cdktf.stringToHclTerraform(struct!.secondaryPrivateIpAddressCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsNetworkInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsNetworkInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._associateIpv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.associateIpv6Address = this._associateIpv6Address;
    }
    if (this._associatePublicIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.associatePublicIpAddress = this._associatePublicIpAddress;
    }
    if (this._deleteOnTermination !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteOnTermination = this._deleteOnTermination;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._deviceIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceIndex = this._deviceIndex;
    }
    if (this._networkInterfaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterfaceId = this._networkInterfaceId;
    }
    if (this._privateIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpAddress = this._privateIpAddress;
    }
    if (this._secondaryPrivateIpAddressCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryPrivateIpAddressCount = this._secondaryPrivateIpAddressCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsNetworkInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._associateIpv6Address = undefined;
      this._associatePublicIpAddress = undefined;
      this._deleteOnTermination = undefined;
      this._description = undefined;
      this._deviceIndex = undefined;
      this._networkInterfaceId = undefined;
      this._privateIpAddress = undefined;
      this._secondaryPrivateIpAddressCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._associateIpv6Address = value.associateIpv6Address;
      this._associatePublicIpAddress = value.associatePublicIpAddress;
      this._deleteOnTermination = value.deleteOnTermination;
      this._description = value.description;
      this._deviceIndex = value.deviceIndex;
      this._networkInterfaceId = value.networkInterfaceId;
      this._privateIpAddress = value.privateIpAddress;
      this._secondaryPrivateIpAddressCount = value.secondaryPrivateIpAddressCount;
    }
  }

  // associate_ipv6_address - computed: false, optional: true, required: false
  private _associateIpv6Address?: boolean | cdktf.IResolvable; 
  public get associateIpv6Address() {
    return this.getBooleanAttribute('associate_ipv6_address');
  }
  public set associateIpv6Address(value: boolean | cdktf.IResolvable) {
    this._associateIpv6Address = value;
  }
  public resetAssociateIpv6Address() {
    this._associateIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associateIpv6AddressInput() {
    return this._associateIpv6Address;
  }

  // associate_public_ip_address - computed: false, optional: true, required: false
  private _associatePublicIpAddress?: boolean | cdktf.IResolvable; 
  public get associatePublicIpAddress() {
    return this.getBooleanAttribute('associate_public_ip_address');
  }
  public set associatePublicIpAddress(value: boolean | cdktf.IResolvable) {
    this._associatePublicIpAddress = value;
  }
  public resetAssociatePublicIpAddress() {
    this._associatePublicIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatePublicIpAddressInput() {
    return this._associatePublicIpAddress;
  }

  // delete_on_termination - computed: true, optional: true, required: false
  private _deleteOnTermination?: boolean | cdktf.IResolvable; 
  public get deleteOnTermination() {
    return this.getBooleanAttribute('delete_on_termination');
  }
  public set deleteOnTermination(value: boolean | cdktf.IResolvable) {
    this._deleteOnTermination = value;
  }
  public resetDeleteOnTermination() {
    this._deleteOnTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOnTerminationInput() {
    return this._deleteOnTermination;
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

  // device_index - computed: false, optional: false, required: true
  private _deviceIndex?: string; 
  public get deviceIndex() {
    return this.getStringAttribute('device_index');
  }
  public set deviceIndex(value: string) {
    this._deviceIndex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIndexInput() {
    return this._deviceIndex;
  }

  // network_interface_id - computed: false, optional: true, required: false
  private _networkInterfaceId?: string; 
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }
  public resetNetworkInterfaceId() {
    this._networkInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceIdInput() {
    return this._networkInterfaceId;
  }

  // private_ip_address - computed: false, optional: true, required: false
  private _privateIpAddress?: string; 
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
  public set privateIpAddress(value: string) {
    this._privateIpAddress = value;
  }
  public resetPrivateIpAddress() {
    this._privateIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressInput() {
    return this._privateIpAddress;
  }

  // secondary_private_ip_address_count - computed: false, optional: true, required: false
  private _secondaryPrivateIpAddressCount?: string; 
  public get secondaryPrivateIpAddressCount() {
    return this.getStringAttribute('secondary_private_ip_address_count');
  }
  public set secondaryPrivateIpAddressCount(value: string) {
    this._secondaryPrivateIpAddressCount = value;
  }
  public resetSecondaryPrivateIpAddressCount() {
    this._secondaryPrivateIpAddressCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPrivateIpAddressCountInput() {
    return this._secondaryPrivateIpAddressCount;
  }
}

export class ElastigroupAwsNetworkInterfaceList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsNetworkInterface[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsNetworkInterfaceOutputReference {
    return new ElastigroupAwsNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsResourceRequirements {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#excluded_instance_families ElastigroupAws#excluded_instance_families}
  */
  readonly excludedInstanceFamilies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#excluded_instance_generations ElastigroupAws#excluded_instance_generations}
  */
  readonly excludedInstanceGenerations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#excluded_instance_types ElastigroupAws#excluded_instance_types}
  */
  readonly excludedInstanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#required_gpu_maximum ElastigroupAws#required_gpu_maximum}
  */
  readonly requiredGpuMaximum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#required_gpu_minimum ElastigroupAws#required_gpu_minimum}
  */
  readonly requiredGpuMinimum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#required_memory_maximum ElastigroupAws#required_memory_maximum}
  */
  readonly requiredMemoryMaximum: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#required_memory_minimum ElastigroupAws#required_memory_minimum}
  */
  readonly requiredMemoryMinimum: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#required_vcpu_maximum ElastigroupAws#required_vcpu_maximum}
  */
  readonly requiredVcpuMaximum: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#required_vcpu_minimum ElastigroupAws#required_vcpu_minimum}
  */
  readonly requiredVcpuMinimum: number;
}

export function elastigroupAwsResourceRequirementsToTerraform(struct?: ElastigroupAwsResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_instance_families: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedInstanceFamilies),
    excluded_instance_generations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedInstanceGenerations),
    excluded_instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedInstanceTypes),
    required_gpu_maximum: cdktf.numberToTerraform(struct!.requiredGpuMaximum),
    required_gpu_minimum: cdktf.numberToTerraform(struct!.requiredGpuMinimum),
    required_memory_maximum: cdktf.numberToTerraform(struct!.requiredMemoryMaximum),
    required_memory_minimum: cdktf.numberToTerraform(struct!.requiredMemoryMinimum),
    required_vcpu_maximum: cdktf.numberToTerraform(struct!.requiredVcpuMaximum),
    required_vcpu_minimum: cdktf.numberToTerraform(struct!.requiredVcpuMinimum),
  }
}


export function elastigroupAwsResourceRequirementsToHclTerraform(struct?: ElastigroupAwsResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_instance_families: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedInstanceFamilies),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    excluded_instance_generations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedInstanceGenerations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    excluded_instance_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedInstanceTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    required_gpu_maximum: {
      value: cdktf.numberToHclTerraform(struct!.requiredGpuMaximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    required_gpu_minimum: {
      value: cdktf.numberToHclTerraform(struct!.requiredGpuMinimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    required_memory_maximum: {
      value: cdktf.numberToHclTerraform(struct!.requiredMemoryMaximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    required_memory_minimum: {
      value: cdktf.numberToHclTerraform(struct!.requiredMemoryMinimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    required_vcpu_maximum: {
      value: cdktf.numberToHclTerraform(struct!.requiredVcpuMaximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    required_vcpu_minimum: {
      value: cdktf.numberToHclTerraform(struct!.requiredVcpuMinimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsResourceRequirementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsResourceRequirements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedInstanceFamilies !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedInstanceFamilies = this._excludedInstanceFamilies;
    }
    if (this._excludedInstanceGenerations !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedInstanceGenerations = this._excludedInstanceGenerations;
    }
    if (this._excludedInstanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedInstanceTypes = this._excludedInstanceTypes;
    }
    if (this._requiredGpuMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredGpuMaximum = this._requiredGpuMaximum;
    }
    if (this._requiredGpuMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredGpuMinimum = this._requiredGpuMinimum;
    }
    if (this._requiredMemoryMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredMemoryMaximum = this._requiredMemoryMaximum;
    }
    if (this._requiredMemoryMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredMemoryMinimum = this._requiredMemoryMinimum;
    }
    if (this._requiredVcpuMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredVcpuMaximum = this._requiredVcpuMaximum;
    }
    if (this._requiredVcpuMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredVcpuMinimum = this._requiredVcpuMinimum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsResourceRequirements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedInstanceFamilies = undefined;
      this._excludedInstanceGenerations = undefined;
      this._excludedInstanceTypes = undefined;
      this._requiredGpuMaximum = undefined;
      this._requiredGpuMinimum = undefined;
      this._requiredMemoryMaximum = undefined;
      this._requiredMemoryMinimum = undefined;
      this._requiredVcpuMaximum = undefined;
      this._requiredVcpuMinimum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedInstanceFamilies = value.excludedInstanceFamilies;
      this._excludedInstanceGenerations = value.excludedInstanceGenerations;
      this._excludedInstanceTypes = value.excludedInstanceTypes;
      this._requiredGpuMaximum = value.requiredGpuMaximum;
      this._requiredGpuMinimum = value.requiredGpuMinimum;
      this._requiredMemoryMaximum = value.requiredMemoryMaximum;
      this._requiredMemoryMinimum = value.requiredMemoryMinimum;
      this._requiredVcpuMaximum = value.requiredVcpuMaximum;
      this._requiredVcpuMinimum = value.requiredVcpuMinimum;
    }
  }

  // excluded_instance_families - computed: false, optional: true, required: false
  private _excludedInstanceFamilies?: string[]; 
  public get excludedInstanceFamilies() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_instance_families'));
  }
  public set excludedInstanceFamilies(value: string[]) {
    this._excludedInstanceFamilies = value;
  }
  public resetExcludedInstanceFamilies() {
    this._excludedInstanceFamilies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedInstanceFamiliesInput() {
    return this._excludedInstanceFamilies;
  }

  // excluded_instance_generations - computed: false, optional: true, required: false
  private _excludedInstanceGenerations?: string[]; 
  public get excludedInstanceGenerations() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_instance_generations'));
  }
  public set excludedInstanceGenerations(value: string[]) {
    this._excludedInstanceGenerations = value;
  }
  public resetExcludedInstanceGenerations() {
    this._excludedInstanceGenerations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedInstanceGenerationsInput() {
    return this._excludedInstanceGenerations;
  }

  // excluded_instance_types - computed: false, optional: true, required: false
  private _excludedInstanceTypes?: string[]; 
  public get excludedInstanceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_instance_types'));
  }
  public set excludedInstanceTypes(value: string[]) {
    this._excludedInstanceTypes = value;
  }
  public resetExcludedInstanceTypes() {
    this._excludedInstanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedInstanceTypesInput() {
    return this._excludedInstanceTypes;
  }

  // required_gpu_maximum - computed: false, optional: true, required: false
  private _requiredGpuMaximum?: number; 
  public get requiredGpuMaximum() {
    return this.getNumberAttribute('required_gpu_maximum');
  }
  public set requiredGpuMaximum(value: number) {
    this._requiredGpuMaximum = value;
  }
  public resetRequiredGpuMaximum() {
    this._requiredGpuMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredGpuMaximumInput() {
    return this._requiredGpuMaximum;
  }

  // required_gpu_minimum - computed: false, optional: true, required: false
  private _requiredGpuMinimum?: number; 
  public get requiredGpuMinimum() {
    return this.getNumberAttribute('required_gpu_minimum');
  }
  public set requiredGpuMinimum(value: number) {
    this._requiredGpuMinimum = value;
  }
  public resetRequiredGpuMinimum() {
    this._requiredGpuMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredGpuMinimumInput() {
    return this._requiredGpuMinimum;
  }

  // required_memory_maximum - computed: false, optional: false, required: true
  private _requiredMemoryMaximum?: number; 
  public get requiredMemoryMaximum() {
    return this.getNumberAttribute('required_memory_maximum');
  }
  public set requiredMemoryMaximum(value: number) {
    this._requiredMemoryMaximum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredMemoryMaximumInput() {
    return this._requiredMemoryMaximum;
  }

  // required_memory_minimum - computed: false, optional: false, required: true
  private _requiredMemoryMinimum?: number; 
  public get requiredMemoryMinimum() {
    return this.getNumberAttribute('required_memory_minimum');
  }
  public set requiredMemoryMinimum(value: number) {
    this._requiredMemoryMinimum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredMemoryMinimumInput() {
    return this._requiredMemoryMinimum;
  }

  // required_vcpu_maximum - computed: false, optional: false, required: true
  private _requiredVcpuMaximum?: number; 
  public get requiredVcpuMaximum() {
    return this.getNumberAttribute('required_vcpu_maximum');
  }
  public set requiredVcpuMaximum(value: number) {
    this._requiredVcpuMaximum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredVcpuMaximumInput() {
    return this._requiredVcpuMaximum;
  }

  // required_vcpu_minimum - computed: false, optional: false, required: true
  private _requiredVcpuMinimum?: number; 
  public get requiredVcpuMinimum() {
    return this.getNumberAttribute('required_vcpu_minimum');
  }
  public set requiredVcpuMinimum(value: number) {
    this._requiredVcpuMinimum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredVcpuMinimumInput() {
    return this._requiredVcpuMinimum;
  }
}

export class ElastigroupAwsResourceRequirementsList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsResourceRequirements[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsResourceRequirementsOutputReference {
    return new ElastigroupAwsResourceRequirementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsResourceTagSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#should_tag_amis ElastigroupAws#should_tag_amis}
  */
  readonly shouldTagAmis?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#should_tag_enis ElastigroupAws#should_tag_enis}
  */
  readonly shouldTagEnis?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#should_tag_snapshots ElastigroupAws#should_tag_snapshots}
  */
  readonly shouldTagSnapshots?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#should_tag_volumes ElastigroupAws#should_tag_volumes}
  */
  readonly shouldTagVolumes?: boolean | cdktf.IResolvable;
}

export function elastigroupAwsResourceTagSpecificationToTerraform(struct?: ElastigroupAwsResourceTagSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    should_tag_amis: cdktf.booleanToTerraform(struct!.shouldTagAmis),
    should_tag_enis: cdktf.booleanToTerraform(struct!.shouldTagEnis),
    should_tag_snapshots: cdktf.booleanToTerraform(struct!.shouldTagSnapshots),
    should_tag_volumes: cdktf.booleanToTerraform(struct!.shouldTagVolumes),
  }
}


export function elastigroupAwsResourceTagSpecificationToHclTerraform(struct?: ElastigroupAwsResourceTagSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    should_tag_amis: {
      value: cdktf.booleanToHclTerraform(struct!.shouldTagAmis),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    should_tag_enis: {
      value: cdktf.booleanToHclTerraform(struct!.shouldTagEnis),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    should_tag_snapshots: {
      value: cdktf.booleanToHclTerraform(struct!.shouldTagSnapshots),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    should_tag_volumes: {
      value: cdktf.booleanToHclTerraform(struct!.shouldTagVolumes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsResourceTagSpecificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsResourceTagSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shouldTagAmis !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldTagAmis = this._shouldTagAmis;
    }
    if (this._shouldTagEnis !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldTagEnis = this._shouldTagEnis;
    }
    if (this._shouldTagSnapshots !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldTagSnapshots = this._shouldTagSnapshots;
    }
    if (this._shouldTagVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldTagVolumes = this._shouldTagVolumes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsResourceTagSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._shouldTagAmis = undefined;
      this._shouldTagEnis = undefined;
      this._shouldTagSnapshots = undefined;
      this._shouldTagVolumes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._shouldTagAmis = value.shouldTagAmis;
      this._shouldTagEnis = value.shouldTagEnis;
      this._shouldTagSnapshots = value.shouldTagSnapshots;
      this._shouldTagVolumes = value.shouldTagVolumes;
    }
  }

  // should_tag_amis - computed: false, optional: true, required: false
  private _shouldTagAmis?: boolean | cdktf.IResolvable; 
  public get shouldTagAmis() {
    return this.getBooleanAttribute('should_tag_amis');
  }
  public set shouldTagAmis(value: boolean | cdktf.IResolvable) {
    this._shouldTagAmis = value;
  }
  public resetShouldTagAmis() {
    this._shouldTagAmis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldTagAmisInput() {
    return this._shouldTagAmis;
  }

  // should_tag_enis - computed: false, optional: true, required: false
  private _shouldTagEnis?: boolean | cdktf.IResolvable; 
  public get shouldTagEnis() {
    return this.getBooleanAttribute('should_tag_enis');
  }
  public set shouldTagEnis(value: boolean | cdktf.IResolvable) {
    this._shouldTagEnis = value;
  }
  public resetShouldTagEnis() {
    this._shouldTagEnis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldTagEnisInput() {
    return this._shouldTagEnis;
  }

  // should_tag_snapshots - computed: false, optional: true, required: false
  private _shouldTagSnapshots?: boolean | cdktf.IResolvable; 
  public get shouldTagSnapshots() {
    return this.getBooleanAttribute('should_tag_snapshots');
  }
  public set shouldTagSnapshots(value: boolean | cdktf.IResolvable) {
    this._shouldTagSnapshots = value;
  }
  public resetShouldTagSnapshots() {
    this._shouldTagSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldTagSnapshotsInput() {
    return this._shouldTagSnapshots;
  }

  // should_tag_volumes - computed: false, optional: true, required: false
  private _shouldTagVolumes?: boolean | cdktf.IResolvable; 
  public get shouldTagVolumes() {
    return this.getBooleanAttribute('should_tag_volumes');
  }
  public set shouldTagVolumes(value: boolean | cdktf.IResolvable) {
    this._shouldTagVolumes = value;
  }
  public resetShouldTagVolumes() {
    this._shouldTagVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldTagVolumesInput() {
    return this._shouldTagVolumes;
  }
}

export class ElastigroupAwsResourceTagSpecificationList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsResourceTagSpecification[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsResourceTagSpecificationOutputReference {
    return new ElastigroupAwsResourceTagSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsRevertToSpot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#perform_at ElastigroupAws#perform_at}
  */
  readonly performAt: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#time_windows ElastigroupAws#time_windows}
  */
  readonly timeWindows?: string[];
}

export function elastigroupAwsRevertToSpotToTerraform(struct?: ElastigroupAwsRevertToSpotOutputReference | ElastigroupAwsRevertToSpot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    perform_at: cdktf.stringToTerraform(struct!.performAt),
    time_windows: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.timeWindows),
  }
}


export function elastigroupAwsRevertToSpotToHclTerraform(struct?: ElastigroupAwsRevertToSpotOutputReference | ElastigroupAwsRevertToSpot): any {
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
    time_windows: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.timeWindows),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsRevertToSpotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsRevertToSpot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._performAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.performAt = this._performAt;
    }
    if (this._timeWindows !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindows = this._timeWindows;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsRevertToSpot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._performAt = undefined;
      this._timeWindows = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._performAt = value.performAt;
      this._timeWindows = value.timeWindows;
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

  // time_windows - computed: false, optional: true, required: false
  private _timeWindows?: string[]; 
  public get timeWindows() {
    return this.getListAttribute('time_windows');
  }
  public set timeWindows(value: string[]) {
    this._timeWindows = value;
  }
  public resetTimeWindows() {
    this._timeWindows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowsInput() {
    return this._timeWindows;
  }
}
export interface ElastigroupAwsScalingDownPolicyDimensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#name ElastigroupAws#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#value ElastigroupAws#value}
  */
  readonly value?: string;
}

export function elastigroupAwsScalingDownPolicyDimensionsToTerraform(struct?: ElastigroupAwsScalingDownPolicyDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function elastigroupAwsScalingDownPolicyDimensionsToHclTerraform(struct?: ElastigroupAwsScalingDownPolicyDimensions | cdktf.IResolvable): any {
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

export class ElastigroupAwsScalingDownPolicyDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsScalingDownPolicyDimensions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ElastigroupAwsScalingDownPolicyDimensions | cdktf.IResolvable | undefined) {
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

export class ElastigroupAwsScalingDownPolicyDimensionsList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsScalingDownPolicyDimensions[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsScalingDownPolicyDimensionsOutputReference {
    return new ElastigroupAwsScalingDownPolicyDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsScalingDownPolicyStepAdjustmentsAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#adjustment ElastigroupAws#adjustment}
  */
  readonly adjustment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#max_target_capacity ElastigroupAws#max_target_capacity}
  */
  readonly maxTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#maximum ElastigroupAws#maximum}
  */
  readonly maximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#min_target_capacity ElastigroupAws#min_target_capacity}
  */
  readonly minTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#minimum ElastigroupAws#minimum}
  */
  readonly minimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#target ElastigroupAws#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#type ElastigroupAws#type}
  */
  readonly type: string;
}

export function elastigroupAwsScalingDownPolicyStepAdjustmentsActionToTerraform(struct?: ElastigroupAwsScalingDownPolicyStepAdjustmentsActionOutputReference | ElastigroupAwsScalingDownPolicyStepAdjustmentsAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adjustment: cdktf.stringToTerraform(struct!.adjustment),
    max_target_capacity: cdktf.stringToTerraform(struct!.maxTargetCapacity),
    maximum: cdktf.stringToTerraform(struct!.maximum),
    min_target_capacity: cdktf.stringToTerraform(struct!.minTargetCapacity),
    minimum: cdktf.stringToTerraform(struct!.minimum),
    target: cdktf.stringToTerraform(struct!.target),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function elastigroupAwsScalingDownPolicyStepAdjustmentsActionToHclTerraform(struct?: ElastigroupAwsScalingDownPolicyStepAdjustmentsActionOutputReference | ElastigroupAwsScalingDownPolicyStepAdjustmentsAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adjustment: {
      value: cdktf.stringToHclTerraform(struct!.adjustment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_target_capacity: {
      value: cdktf.stringToHclTerraform(struct!.maxTargetCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum: {
      value: cdktf.stringToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_target_capacity: {
      value: cdktf.stringToHclTerraform(struct!.minTargetCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum: {
      value: cdktf.stringToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
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

export class ElastigroupAwsScalingDownPolicyStepAdjustmentsActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsScalingDownPolicyStepAdjustmentsAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adjustment !== undefined) {
      hasAnyValues = true;
      internalValueResult.adjustment = this._adjustment;
    }
    if (this._maxTargetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTargetCapacity = this._maxTargetCapacity;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minTargetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTargetCapacity = this._minTargetCapacity;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsScalingDownPolicyStepAdjustmentsAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adjustment = undefined;
      this._maxTargetCapacity = undefined;
      this._maximum = undefined;
      this._minTargetCapacity = undefined;
      this._minimum = undefined;
      this._target = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adjustment = value.adjustment;
      this._maxTargetCapacity = value.maxTargetCapacity;
      this._maximum = value.maximum;
      this._minTargetCapacity = value.minTargetCapacity;
      this._minimum = value.minimum;
      this._target = value.target;
      this._type = value.type;
    }
  }

  // adjustment - computed: false, optional: true, required: false
  private _adjustment?: string; 
  public get adjustment() {
    return this.getStringAttribute('adjustment');
  }
  public set adjustment(value: string) {
    this._adjustment = value;
  }
  public resetAdjustment() {
    this._adjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentInput() {
    return this._adjustment;
  }

  // max_target_capacity - computed: false, optional: true, required: false
  private _maxTargetCapacity?: string; 
  public get maxTargetCapacity() {
    return this.getStringAttribute('max_target_capacity');
  }
  public set maxTargetCapacity(value: string) {
    this._maxTargetCapacity = value;
  }
  public resetMaxTargetCapacity() {
    this._maxTargetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTargetCapacityInput() {
    return this._maxTargetCapacity;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: string; 
  public get maximum() {
    return this.getStringAttribute('maximum');
  }
  public set maximum(value: string) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // min_target_capacity - computed: false, optional: true, required: false
  private _minTargetCapacity?: string; 
  public get minTargetCapacity() {
    return this.getStringAttribute('min_target_capacity');
  }
  public set minTargetCapacity(value: string) {
    this._minTargetCapacity = value;
  }
  public resetMinTargetCapacity() {
    this._minTargetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTargetCapacityInput() {
    return this._minTargetCapacity;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: string; 
  public get minimum() {
    return this.getStringAttribute('minimum');
  }
  public set minimum(value: string) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
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
export interface ElastigroupAwsScalingDownPolicyStepAdjustments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#threshold ElastigroupAws#threshold}
  */
  readonly threshold: number;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#action ElastigroupAws#action}
  */
  readonly action: ElastigroupAwsScalingDownPolicyStepAdjustmentsAction;
}

export function elastigroupAwsScalingDownPolicyStepAdjustmentsToTerraform(struct?: ElastigroupAwsScalingDownPolicyStepAdjustments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
    action: elastigroupAwsScalingDownPolicyStepAdjustmentsActionToTerraform(struct!.action),
  }
}


export function elastigroupAwsScalingDownPolicyStepAdjustmentsToHclTerraform(struct?: ElastigroupAwsScalingDownPolicyStepAdjustments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    action: {
      value: elastigroupAwsScalingDownPolicyStepAdjustmentsActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "set",
      storageClassType: "ElastigroupAwsScalingDownPolicyStepAdjustmentsActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsScalingDownPolicyStepAdjustmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsScalingDownPolicyStepAdjustments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsScalingDownPolicyStepAdjustments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._threshold = undefined;
      this._action.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._threshold = value.threshold;
      this._action.internalValue = value.action;
    }
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

  // action - computed: false, optional: false, required: true
  private _action = new ElastigroupAwsScalingDownPolicyStepAdjustmentsActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: ElastigroupAwsScalingDownPolicyStepAdjustmentsAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }
}

export class ElastigroupAwsScalingDownPolicyStepAdjustmentsList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsScalingDownPolicyStepAdjustments[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsScalingDownPolicyStepAdjustmentsOutputReference {
    return new ElastigroupAwsScalingDownPolicyStepAdjustmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsScalingDownPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#action_type ElastigroupAws#action_type}
  */
  readonly actionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#adjustment ElastigroupAws#adjustment}
  */
  readonly adjustment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#cooldown ElastigroupAws#cooldown}
  */
  readonly cooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#evaluation_periods ElastigroupAws#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#is_enabled ElastigroupAws#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#max_target_capacity ElastigroupAws#max_target_capacity}
  */
  readonly maxTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#maximum ElastigroupAws#maximum}
  */
  readonly maximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#metric_name ElastigroupAws#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#min_target_capacity ElastigroupAws#min_target_capacity}
  */
  readonly minTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#minimum ElastigroupAws#minimum}
  */
  readonly minimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#namespace ElastigroupAws#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#operator ElastigroupAws#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#period ElastigroupAws#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#policy_name ElastigroupAws#policy_name}
  */
  readonly policyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#source ElastigroupAws#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#statistic ElastigroupAws#statistic}
  */
  readonly statistic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#target ElastigroupAws#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#threshold ElastigroupAws#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#unit ElastigroupAws#unit}
  */
  readonly unit?: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#dimensions ElastigroupAws#dimensions}
  */
  readonly dimensions?: ElastigroupAwsScalingDownPolicyDimensions[] | cdktf.IResolvable;
  /**
  * step_adjustments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#step_adjustments ElastigroupAws#step_adjustments}
  */
  readonly stepAdjustments?: ElastigroupAwsScalingDownPolicyStepAdjustments[] | cdktf.IResolvable;
}

export function elastigroupAwsScalingDownPolicyToTerraform(struct?: ElastigroupAwsScalingDownPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    adjustment: cdktf.stringToTerraform(struct!.adjustment),
    cooldown: cdktf.numberToTerraform(struct!.cooldown),
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    max_target_capacity: cdktf.stringToTerraform(struct!.maxTargetCapacity),
    maximum: cdktf.stringToTerraform(struct!.maximum),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    min_target_capacity: cdktf.stringToTerraform(struct!.minTargetCapacity),
    minimum: cdktf.stringToTerraform(struct!.minimum),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    operator: cdktf.stringToTerraform(struct!.operator),
    period: cdktf.numberToTerraform(struct!.period),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    source: cdktf.stringToTerraform(struct!.source),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    target: cdktf.stringToTerraform(struct!.target),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    unit: cdktf.stringToTerraform(struct!.unit),
    dimensions: cdktf.listMapper(elastigroupAwsScalingDownPolicyDimensionsToTerraform, true)(struct!.dimensions),
    step_adjustments: cdktf.listMapper(elastigroupAwsScalingDownPolicyStepAdjustmentsToTerraform, true)(struct!.stepAdjustments),
  }
}


export function elastigroupAwsScalingDownPolicyToHclTerraform(struct?: ElastigroupAwsScalingDownPolicy | cdktf.IResolvable): any {
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
      value: cdktf.stringToHclTerraform(struct!.adjustment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_target_capacity: {
      value: cdktf.stringToHclTerraform(struct!.maxTargetCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum: {
      value: cdktf.stringToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_target_capacity: {
      value: cdktf.stringToHclTerraform(struct!.minTargetCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum: {
      value: cdktf.stringToHclTerraform(struct!.minimum),
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
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
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
      value: cdktf.listMapperHcl(elastigroupAwsScalingDownPolicyDimensionsToHclTerraform, true)(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAwsScalingDownPolicyDimensionsList",
    },
    step_adjustments: {
      value: cdktf.listMapperHcl(elastigroupAwsScalingDownPolicyStepAdjustmentsToHclTerraform, true)(struct!.stepAdjustments),
      isBlock: true,
      type: "set",
      storageClassType: "ElastigroupAwsScalingDownPolicyStepAdjustmentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsScalingDownPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsScalingDownPolicy | cdktf.IResolvable | undefined {
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
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._maxTargetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTargetCapacity = this._maxTargetCapacity;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._minTargetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTargetCapacity = this._minTargetCapacity;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
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
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
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
    if (this._stepAdjustments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepAdjustments = this._stepAdjustments?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsScalingDownPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionType = undefined;
      this._adjustment = undefined;
      this._cooldown = undefined;
      this._evaluationPeriods = undefined;
      this._isEnabled = undefined;
      this._maxTargetCapacity = undefined;
      this._maximum = undefined;
      this._metricName = undefined;
      this._minTargetCapacity = undefined;
      this._minimum = undefined;
      this._namespace = undefined;
      this._operator = undefined;
      this._period = undefined;
      this._policyName = undefined;
      this._source = undefined;
      this._statistic = undefined;
      this._target = undefined;
      this._threshold = undefined;
      this._unit = undefined;
      this._dimensions.internalValue = undefined;
      this._stepAdjustments.internalValue = undefined;
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
      this._isEnabled = value.isEnabled;
      this._maxTargetCapacity = value.maxTargetCapacity;
      this._maximum = value.maximum;
      this._metricName = value.metricName;
      this._minTargetCapacity = value.minTargetCapacity;
      this._minimum = value.minimum;
      this._namespace = value.namespace;
      this._operator = value.operator;
      this._period = value.period;
      this._policyName = value.policyName;
      this._source = value.source;
      this._statistic = value.statistic;
      this._target = value.target;
      this._threshold = value.threshold;
      this._unit = value.unit;
      this._dimensions.internalValue = value.dimensions;
      this._stepAdjustments.internalValue = value.stepAdjustments;
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
  private _adjustment?: string; 
  public get adjustment() {
    return this.getStringAttribute('adjustment');
  }
  public set adjustment(value: string) {
    this._adjustment = value;
  }
  public resetAdjustment() {
    this._adjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentInput() {
    return this._adjustment;
  }

  // cooldown - computed: false, optional: true, required: false
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

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // max_target_capacity - computed: false, optional: true, required: false
  private _maxTargetCapacity?: string; 
  public get maxTargetCapacity() {
    return this.getStringAttribute('max_target_capacity');
  }
  public set maxTargetCapacity(value: string) {
    this._maxTargetCapacity = value;
  }
  public resetMaxTargetCapacity() {
    this._maxTargetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTargetCapacityInput() {
    return this._maxTargetCapacity;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: string; 
  public get maximum() {
    return this.getStringAttribute('maximum');
  }
  public set maximum(value: string) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
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

  // min_target_capacity - computed: false, optional: true, required: false
  private _minTargetCapacity?: string; 
  public get minTargetCapacity() {
    return this.getStringAttribute('min_target_capacity');
  }
  public set minTargetCapacity(value: string) {
    this._minTargetCapacity = value;
  }
  public resetMinTargetCapacity() {
    this._minTargetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTargetCapacityInput() {
    return this._minTargetCapacity;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: string; 
  public get minimum() {
    return this.getStringAttribute('minimum');
  }
  public set minimum(value: string) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
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

  // statistic - computed: false, optional: true, required: false
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

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new ElastigroupAwsScalingDownPolicyDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: ElastigroupAwsScalingDownPolicyDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // step_adjustments - computed: false, optional: true, required: false
  private _stepAdjustments = new ElastigroupAwsScalingDownPolicyStepAdjustmentsList(this, "step_adjustments", true);
  public get stepAdjustments() {
    return this._stepAdjustments;
  }
  public putStepAdjustments(value: ElastigroupAwsScalingDownPolicyStepAdjustments[] | cdktf.IResolvable) {
    this._stepAdjustments.internalValue = value;
  }
  public resetStepAdjustments() {
    this._stepAdjustments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepAdjustmentsInput() {
    return this._stepAdjustments.internalValue;
  }
}

export class ElastigroupAwsScalingDownPolicyList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsScalingDownPolicy[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsScalingDownPolicyOutputReference {
    return new ElastigroupAwsScalingDownPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsScalingStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#terminate_at_end_of_billing_hour ElastigroupAws#terminate_at_end_of_billing_hour}
  */
  readonly terminateAtEndOfBillingHour?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#termination_policy ElastigroupAws#termination_policy}
  */
  readonly terminationPolicy?: string;
}

export function elastigroupAwsScalingStrategyToTerraform(struct?: ElastigroupAwsScalingStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    terminate_at_end_of_billing_hour: cdktf.booleanToTerraform(struct!.terminateAtEndOfBillingHour),
    termination_policy: cdktf.stringToTerraform(struct!.terminationPolicy),
  }
}


export function elastigroupAwsScalingStrategyToHclTerraform(struct?: ElastigroupAwsScalingStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    terminate_at_end_of_billing_hour: {
      value: cdktf.booleanToHclTerraform(struct!.terminateAtEndOfBillingHour),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    termination_policy: {
      value: cdktf.stringToHclTerraform(struct!.terminationPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsScalingStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsScalingStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._terminateAtEndOfBillingHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminateAtEndOfBillingHour = this._terminateAtEndOfBillingHour;
    }
    if (this._terminationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationPolicy = this._terminationPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsScalingStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._terminateAtEndOfBillingHour = undefined;
      this._terminationPolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._terminateAtEndOfBillingHour = value.terminateAtEndOfBillingHour;
      this._terminationPolicy = value.terminationPolicy;
    }
  }

  // terminate_at_end_of_billing_hour - computed: false, optional: true, required: false
  private _terminateAtEndOfBillingHour?: boolean | cdktf.IResolvable; 
  public get terminateAtEndOfBillingHour() {
    return this.getBooleanAttribute('terminate_at_end_of_billing_hour');
  }
  public set terminateAtEndOfBillingHour(value: boolean | cdktf.IResolvable) {
    this._terminateAtEndOfBillingHour = value;
  }
  public resetTerminateAtEndOfBillingHour() {
    this._terminateAtEndOfBillingHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminateAtEndOfBillingHourInput() {
    return this._terminateAtEndOfBillingHour;
  }

  // termination_policy - computed: false, optional: true, required: false
  private _terminationPolicy?: string; 
  public get terminationPolicy() {
    return this.getStringAttribute('termination_policy');
  }
  public set terminationPolicy(value: string) {
    this._terminationPolicy = value;
  }
  public resetTerminationPolicy() {
    this._terminationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationPolicyInput() {
    return this._terminationPolicy;
  }
}

export class ElastigroupAwsScalingStrategyList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsScalingStrategy[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsScalingStrategyOutputReference {
    return new ElastigroupAwsScalingStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsScalingTargetPolicyDimensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#name ElastigroupAws#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#value ElastigroupAws#value}
  */
  readonly value?: string;
}

export function elastigroupAwsScalingTargetPolicyDimensionsToTerraform(struct?: ElastigroupAwsScalingTargetPolicyDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function elastigroupAwsScalingTargetPolicyDimensionsToHclTerraform(struct?: ElastigroupAwsScalingTargetPolicyDimensions | cdktf.IResolvable): any {
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

export class ElastigroupAwsScalingTargetPolicyDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsScalingTargetPolicyDimensions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ElastigroupAwsScalingTargetPolicyDimensions | cdktf.IResolvable | undefined) {
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

export class ElastigroupAwsScalingTargetPolicyDimensionsList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsScalingTargetPolicyDimensions[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsScalingTargetPolicyDimensionsOutputReference {
    return new ElastigroupAwsScalingTargetPolicyDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsScalingTargetPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#cooldown ElastigroupAws#cooldown}
  */
  readonly cooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#evaluation_periods ElastigroupAws#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#max_capacity_per_scale ElastigroupAws#max_capacity_per_scale}
  */
  readonly maxCapacityPerScale?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#metric_name ElastigroupAws#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#namespace ElastigroupAws#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#period ElastigroupAws#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#policy_name ElastigroupAws#policy_name}
  */
  readonly policyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#predictive_mode ElastigroupAws#predictive_mode}
  */
  readonly predictiveMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#source ElastigroupAws#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#statistic ElastigroupAws#statistic}
  */
  readonly statistic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#target ElastigroupAws#target}
  */
  readonly target: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#unit ElastigroupAws#unit}
  */
  readonly unit?: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#dimensions ElastigroupAws#dimensions}
  */
  readonly dimensions?: ElastigroupAwsScalingTargetPolicyDimensions[] | cdktf.IResolvable;
}

export function elastigroupAwsScalingTargetPolicyToTerraform(struct?: ElastigroupAwsScalingTargetPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cooldown: cdktf.numberToTerraform(struct!.cooldown),
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
    max_capacity_per_scale: cdktf.stringToTerraform(struct!.maxCapacityPerScale),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    period: cdktf.numberToTerraform(struct!.period),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    predictive_mode: cdktf.stringToTerraform(struct!.predictiveMode),
    source: cdktf.stringToTerraform(struct!.source),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    target: cdktf.numberToTerraform(struct!.target),
    unit: cdktf.stringToTerraform(struct!.unit),
    dimensions: cdktf.listMapper(elastigroupAwsScalingTargetPolicyDimensionsToTerraform, true)(struct!.dimensions),
  }
}


export function elastigroupAwsScalingTargetPolicyToHclTerraform(struct?: ElastigroupAwsScalingTargetPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    max_capacity_per_scale: {
      value: cdktf.stringToHclTerraform(struct!.maxCapacityPerScale),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    predictive_mode: {
      value: cdktf.stringToHclTerraform(struct!.predictiveMode),
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
    target: {
      value: cdktf.numberToHclTerraform(struct!.target),
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
      value: cdktf.listMapperHcl(elastigroupAwsScalingTargetPolicyDimensionsToHclTerraform, true)(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAwsScalingTargetPolicyDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsScalingTargetPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsScalingTargetPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.cooldown = this._cooldown;
    }
    if (this._evaluationPeriods !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationPeriods = this._evaluationPeriods;
    }
    if (this._maxCapacityPerScale !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCapacityPerScale = this._maxCapacityPerScale;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    if (this._predictiveMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.predictiveMode = this._predictiveMode;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._statistic !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistic = this._statistic;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
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

  public set internalValue(value: ElastigroupAwsScalingTargetPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cooldown = undefined;
      this._evaluationPeriods = undefined;
      this._maxCapacityPerScale = undefined;
      this._metricName = undefined;
      this._namespace = undefined;
      this._period = undefined;
      this._policyName = undefined;
      this._predictiveMode = undefined;
      this._source = undefined;
      this._statistic = undefined;
      this._target = undefined;
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
      this._cooldown = value.cooldown;
      this._evaluationPeriods = value.evaluationPeriods;
      this._maxCapacityPerScale = value.maxCapacityPerScale;
      this._metricName = value.metricName;
      this._namespace = value.namespace;
      this._period = value.period;
      this._policyName = value.policyName;
      this._predictiveMode = value.predictiveMode;
      this._source = value.source;
      this._statistic = value.statistic;
      this._target = value.target;
      this._unit = value.unit;
      this._dimensions.internalValue = value.dimensions;
    }
  }

  // cooldown - computed: false, optional: true, required: false
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

  // max_capacity_per_scale - computed: false, optional: true, required: false
  private _maxCapacityPerScale?: string; 
  public get maxCapacityPerScale() {
    return this.getStringAttribute('max_capacity_per_scale');
  }
  public set maxCapacityPerScale(value: string) {
    this._maxCapacityPerScale = value;
  }
  public resetMaxCapacityPerScale() {
    this._maxCapacityPerScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityPerScaleInput() {
    return this._maxCapacityPerScale;
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

  // predictive_mode - computed: false, optional: true, required: false
  private _predictiveMode?: string; 
  public get predictiveMode() {
    return this.getStringAttribute('predictive_mode');
  }
  public set predictiveMode(value: string) {
    this._predictiveMode = value;
  }
  public resetPredictiveMode() {
    this._predictiveMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictiveModeInput() {
    return this._predictiveMode;
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

  // statistic - computed: false, optional: true, required: false
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

  // target - computed: false, optional: false, required: true
  private _target?: number; 
  public get target() {
    return this.getNumberAttribute('target');
  }
  public set target(value: number) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new ElastigroupAwsScalingTargetPolicyDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: ElastigroupAwsScalingTargetPolicyDimensions[] | cdktf.IResolvable) {
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

export class ElastigroupAwsScalingTargetPolicyList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsScalingTargetPolicy[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsScalingTargetPolicyOutputReference {
    return new ElastigroupAwsScalingTargetPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsScalingUpPolicyDimensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#name ElastigroupAws#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#value ElastigroupAws#value}
  */
  readonly value?: string;
}

export function elastigroupAwsScalingUpPolicyDimensionsToTerraform(struct?: ElastigroupAwsScalingUpPolicyDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function elastigroupAwsScalingUpPolicyDimensionsToHclTerraform(struct?: ElastigroupAwsScalingUpPolicyDimensions | cdktf.IResolvable): any {
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

export class ElastigroupAwsScalingUpPolicyDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsScalingUpPolicyDimensions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ElastigroupAwsScalingUpPolicyDimensions | cdktf.IResolvable | undefined) {
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

export class ElastigroupAwsScalingUpPolicyDimensionsList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsScalingUpPolicyDimensions[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsScalingUpPolicyDimensionsOutputReference {
    return new ElastigroupAwsScalingUpPolicyDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsScalingUpPolicyStepAdjustmentsAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#adjustment ElastigroupAws#adjustment}
  */
  readonly adjustment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#max_target_capacity ElastigroupAws#max_target_capacity}
  */
  readonly maxTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#maximum ElastigroupAws#maximum}
  */
  readonly maximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#min_target_capacity ElastigroupAws#min_target_capacity}
  */
  readonly minTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#minimum ElastigroupAws#minimum}
  */
  readonly minimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#target ElastigroupAws#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#type ElastigroupAws#type}
  */
  readonly type: string;
}

export function elastigroupAwsScalingUpPolicyStepAdjustmentsActionToTerraform(struct?: ElastigroupAwsScalingUpPolicyStepAdjustmentsActionOutputReference | ElastigroupAwsScalingUpPolicyStepAdjustmentsAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adjustment: cdktf.stringToTerraform(struct!.adjustment),
    max_target_capacity: cdktf.stringToTerraform(struct!.maxTargetCapacity),
    maximum: cdktf.stringToTerraform(struct!.maximum),
    min_target_capacity: cdktf.stringToTerraform(struct!.minTargetCapacity),
    minimum: cdktf.stringToTerraform(struct!.minimum),
    target: cdktf.stringToTerraform(struct!.target),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function elastigroupAwsScalingUpPolicyStepAdjustmentsActionToHclTerraform(struct?: ElastigroupAwsScalingUpPolicyStepAdjustmentsActionOutputReference | ElastigroupAwsScalingUpPolicyStepAdjustmentsAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adjustment: {
      value: cdktf.stringToHclTerraform(struct!.adjustment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_target_capacity: {
      value: cdktf.stringToHclTerraform(struct!.maxTargetCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum: {
      value: cdktf.stringToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_target_capacity: {
      value: cdktf.stringToHclTerraform(struct!.minTargetCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum: {
      value: cdktf.stringToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
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

export class ElastigroupAwsScalingUpPolicyStepAdjustmentsActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsScalingUpPolicyStepAdjustmentsAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adjustment !== undefined) {
      hasAnyValues = true;
      internalValueResult.adjustment = this._adjustment;
    }
    if (this._maxTargetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTargetCapacity = this._maxTargetCapacity;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minTargetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTargetCapacity = this._minTargetCapacity;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsScalingUpPolicyStepAdjustmentsAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adjustment = undefined;
      this._maxTargetCapacity = undefined;
      this._maximum = undefined;
      this._minTargetCapacity = undefined;
      this._minimum = undefined;
      this._target = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adjustment = value.adjustment;
      this._maxTargetCapacity = value.maxTargetCapacity;
      this._maximum = value.maximum;
      this._minTargetCapacity = value.minTargetCapacity;
      this._minimum = value.minimum;
      this._target = value.target;
      this._type = value.type;
    }
  }

  // adjustment - computed: false, optional: true, required: false
  private _adjustment?: string; 
  public get adjustment() {
    return this.getStringAttribute('adjustment');
  }
  public set adjustment(value: string) {
    this._adjustment = value;
  }
  public resetAdjustment() {
    this._adjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentInput() {
    return this._adjustment;
  }

  // max_target_capacity - computed: false, optional: true, required: false
  private _maxTargetCapacity?: string; 
  public get maxTargetCapacity() {
    return this.getStringAttribute('max_target_capacity');
  }
  public set maxTargetCapacity(value: string) {
    this._maxTargetCapacity = value;
  }
  public resetMaxTargetCapacity() {
    this._maxTargetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTargetCapacityInput() {
    return this._maxTargetCapacity;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: string; 
  public get maximum() {
    return this.getStringAttribute('maximum');
  }
  public set maximum(value: string) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // min_target_capacity - computed: false, optional: true, required: false
  private _minTargetCapacity?: string; 
  public get minTargetCapacity() {
    return this.getStringAttribute('min_target_capacity');
  }
  public set minTargetCapacity(value: string) {
    this._minTargetCapacity = value;
  }
  public resetMinTargetCapacity() {
    this._minTargetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTargetCapacityInput() {
    return this._minTargetCapacity;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: string; 
  public get minimum() {
    return this.getStringAttribute('minimum');
  }
  public set minimum(value: string) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
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
export interface ElastigroupAwsScalingUpPolicyStepAdjustments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#threshold ElastigroupAws#threshold}
  */
  readonly threshold: number;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#action ElastigroupAws#action}
  */
  readonly action: ElastigroupAwsScalingUpPolicyStepAdjustmentsAction;
}

export function elastigroupAwsScalingUpPolicyStepAdjustmentsToTerraform(struct?: ElastigroupAwsScalingUpPolicyStepAdjustments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
    action: elastigroupAwsScalingUpPolicyStepAdjustmentsActionToTerraform(struct!.action),
  }
}


export function elastigroupAwsScalingUpPolicyStepAdjustmentsToHclTerraform(struct?: ElastigroupAwsScalingUpPolicyStepAdjustments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    action: {
      value: elastigroupAwsScalingUpPolicyStepAdjustmentsActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "set",
      storageClassType: "ElastigroupAwsScalingUpPolicyStepAdjustmentsActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsScalingUpPolicyStepAdjustmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsScalingUpPolicyStepAdjustments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsScalingUpPolicyStepAdjustments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._threshold = undefined;
      this._action.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._threshold = value.threshold;
      this._action.internalValue = value.action;
    }
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

  // action - computed: false, optional: false, required: true
  private _action = new ElastigroupAwsScalingUpPolicyStepAdjustmentsActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: ElastigroupAwsScalingUpPolicyStepAdjustmentsAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }
}

export class ElastigroupAwsScalingUpPolicyStepAdjustmentsList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsScalingUpPolicyStepAdjustments[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsScalingUpPolicyStepAdjustmentsOutputReference {
    return new ElastigroupAwsScalingUpPolicyStepAdjustmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsScalingUpPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#action_type ElastigroupAws#action_type}
  */
  readonly actionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#adjustment ElastigroupAws#adjustment}
  */
  readonly adjustment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#cooldown ElastigroupAws#cooldown}
  */
  readonly cooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#evaluation_periods ElastigroupAws#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#is_enabled ElastigroupAws#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#max_target_capacity ElastigroupAws#max_target_capacity}
  */
  readonly maxTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#maximum ElastigroupAws#maximum}
  */
  readonly maximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#metric_name ElastigroupAws#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#min_target_capacity ElastigroupAws#min_target_capacity}
  */
  readonly minTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#minimum ElastigroupAws#minimum}
  */
  readonly minimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#namespace ElastigroupAws#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#operator ElastigroupAws#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#period ElastigroupAws#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#policy_name ElastigroupAws#policy_name}
  */
  readonly policyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#source ElastigroupAws#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#statistic ElastigroupAws#statistic}
  */
  readonly statistic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#target ElastigroupAws#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#threshold ElastigroupAws#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#unit ElastigroupAws#unit}
  */
  readonly unit?: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#dimensions ElastigroupAws#dimensions}
  */
  readonly dimensions?: ElastigroupAwsScalingUpPolicyDimensions[] | cdktf.IResolvable;
  /**
  * step_adjustments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#step_adjustments ElastigroupAws#step_adjustments}
  */
  readonly stepAdjustments?: ElastigroupAwsScalingUpPolicyStepAdjustments[] | cdktf.IResolvable;
}

export function elastigroupAwsScalingUpPolicyToTerraform(struct?: ElastigroupAwsScalingUpPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    adjustment: cdktf.stringToTerraform(struct!.adjustment),
    cooldown: cdktf.numberToTerraform(struct!.cooldown),
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    max_target_capacity: cdktf.stringToTerraform(struct!.maxTargetCapacity),
    maximum: cdktf.stringToTerraform(struct!.maximum),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    min_target_capacity: cdktf.stringToTerraform(struct!.minTargetCapacity),
    minimum: cdktf.stringToTerraform(struct!.minimum),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    operator: cdktf.stringToTerraform(struct!.operator),
    period: cdktf.numberToTerraform(struct!.period),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    source: cdktf.stringToTerraform(struct!.source),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    target: cdktf.stringToTerraform(struct!.target),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    unit: cdktf.stringToTerraform(struct!.unit),
    dimensions: cdktf.listMapper(elastigroupAwsScalingUpPolicyDimensionsToTerraform, true)(struct!.dimensions),
    step_adjustments: cdktf.listMapper(elastigroupAwsScalingUpPolicyStepAdjustmentsToTerraform, true)(struct!.stepAdjustments),
  }
}


export function elastigroupAwsScalingUpPolicyToHclTerraform(struct?: ElastigroupAwsScalingUpPolicy | cdktf.IResolvable): any {
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
      value: cdktf.stringToHclTerraform(struct!.adjustment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_target_capacity: {
      value: cdktf.stringToHclTerraform(struct!.maxTargetCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum: {
      value: cdktf.stringToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_target_capacity: {
      value: cdktf.stringToHclTerraform(struct!.minTargetCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum: {
      value: cdktf.stringToHclTerraform(struct!.minimum),
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
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
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
      value: cdktf.listMapperHcl(elastigroupAwsScalingUpPolicyDimensionsToHclTerraform, true)(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAwsScalingUpPolicyDimensionsList",
    },
    step_adjustments: {
      value: cdktf.listMapperHcl(elastigroupAwsScalingUpPolicyStepAdjustmentsToHclTerraform, true)(struct!.stepAdjustments),
      isBlock: true,
      type: "set",
      storageClassType: "ElastigroupAwsScalingUpPolicyStepAdjustmentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsScalingUpPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsScalingUpPolicy | cdktf.IResolvable | undefined {
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
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._maxTargetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTargetCapacity = this._maxTargetCapacity;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._minTargetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTargetCapacity = this._minTargetCapacity;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
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
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
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
    if (this._stepAdjustments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepAdjustments = this._stepAdjustments?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsScalingUpPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionType = undefined;
      this._adjustment = undefined;
      this._cooldown = undefined;
      this._evaluationPeriods = undefined;
      this._isEnabled = undefined;
      this._maxTargetCapacity = undefined;
      this._maximum = undefined;
      this._metricName = undefined;
      this._minTargetCapacity = undefined;
      this._minimum = undefined;
      this._namespace = undefined;
      this._operator = undefined;
      this._period = undefined;
      this._policyName = undefined;
      this._source = undefined;
      this._statistic = undefined;
      this._target = undefined;
      this._threshold = undefined;
      this._unit = undefined;
      this._dimensions.internalValue = undefined;
      this._stepAdjustments.internalValue = undefined;
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
      this._isEnabled = value.isEnabled;
      this._maxTargetCapacity = value.maxTargetCapacity;
      this._maximum = value.maximum;
      this._metricName = value.metricName;
      this._minTargetCapacity = value.minTargetCapacity;
      this._minimum = value.minimum;
      this._namespace = value.namespace;
      this._operator = value.operator;
      this._period = value.period;
      this._policyName = value.policyName;
      this._source = value.source;
      this._statistic = value.statistic;
      this._target = value.target;
      this._threshold = value.threshold;
      this._unit = value.unit;
      this._dimensions.internalValue = value.dimensions;
      this._stepAdjustments.internalValue = value.stepAdjustments;
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
  private _adjustment?: string; 
  public get adjustment() {
    return this.getStringAttribute('adjustment');
  }
  public set adjustment(value: string) {
    this._adjustment = value;
  }
  public resetAdjustment() {
    this._adjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentInput() {
    return this._adjustment;
  }

  // cooldown - computed: false, optional: true, required: false
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

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // max_target_capacity - computed: false, optional: true, required: false
  private _maxTargetCapacity?: string; 
  public get maxTargetCapacity() {
    return this.getStringAttribute('max_target_capacity');
  }
  public set maxTargetCapacity(value: string) {
    this._maxTargetCapacity = value;
  }
  public resetMaxTargetCapacity() {
    this._maxTargetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTargetCapacityInput() {
    return this._maxTargetCapacity;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: string; 
  public get maximum() {
    return this.getStringAttribute('maximum');
  }
  public set maximum(value: string) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
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

  // min_target_capacity - computed: false, optional: true, required: false
  private _minTargetCapacity?: string; 
  public get minTargetCapacity() {
    return this.getStringAttribute('min_target_capacity');
  }
  public set minTargetCapacity(value: string) {
    this._minTargetCapacity = value;
  }
  public resetMinTargetCapacity() {
    this._minTargetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTargetCapacityInput() {
    return this._minTargetCapacity;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: string; 
  public get minimum() {
    return this.getStringAttribute('minimum');
  }
  public set minimum(value: string) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
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

  // statistic - computed: false, optional: true, required: false
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

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new ElastigroupAwsScalingUpPolicyDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: ElastigroupAwsScalingUpPolicyDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // step_adjustments - computed: false, optional: true, required: false
  private _stepAdjustments = new ElastigroupAwsScalingUpPolicyStepAdjustmentsList(this, "step_adjustments", true);
  public get stepAdjustments() {
    return this._stepAdjustments;
  }
  public putStepAdjustments(value: ElastigroupAwsScalingUpPolicyStepAdjustments[] | cdktf.IResolvable) {
    this._stepAdjustments.internalValue = value;
  }
  public resetStepAdjustments() {
    this._stepAdjustments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepAdjustmentsInput() {
    return this._stepAdjustments.internalValue;
  }
}

export class ElastigroupAwsScalingUpPolicyList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsScalingUpPolicy[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsScalingUpPolicyOutputReference {
    return new ElastigroupAwsScalingUpPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsScheduledTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#adjustment ElastigroupAws#adjustment}
  */
  readonly adjustment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#adjustment_percentage ElastigroupAws#adjustment_percentage}
  */
  readonly adjustmentPercentage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#batch_size_percentage ElastigroupAws#batch_size_percentage}
  */
  readonly batchSizePercentage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#cron_expression ElastigroupAws#cron_expression}
  */
  readonly cronExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#frequency ElastigroupAws#frequency}
  */
  readonly frequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#grace_period ElastigroupAws#grace_period}
  */
  readonly gracePeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#is_enabled ElastigroupAws#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#max_capacity ElastigroupAws#max_capacity}
  */
  readonly maxCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#min_capacity ElastigroupAws#min_capacity}
  */
  readonly minCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#scale_max_capacity ElastigroupAws#scale_max_capacity}
  */
  readonly scaleMaxCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#scale_min_capacity ElastigroupAws#scale_min_capacity}
  */
  readonly scaleMinCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#scale_target_capacity ElastigroupAws#scale_target_capacity}
  */
  readonly scaleTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#start_time ElastigroupAws#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#target_capacity ElastigroupAws#target_capacity}
  */
  readonly targetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#task_type ElastigroupAws#task_type}
  */
  readonly taskType: string;
}

export function elastigroupAwsScheduledTaskToTerraform(struct?: ElastigroupAwsScheduledTask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adjustment: cdktf.stringToTerraform(struct!.adjustment),
    adjustment_percentage: cdktf.stringToTerraform(struct!.adjustmentPercentage),
    batch_size_percentage: cdktf.stringToTerraform(struct!.batchSizePercentage),
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    grace_period: cdktf.stringToTerraform(struct!.gracePeriod),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    max_capacity: cdktf.stringToTerraform(struct!.maxCapacity),
    min_capacity: cdktf.stringToTerraform(struct!.minCapacity),
    scale_max_capacity: cdktf.stringToTerraform(struct!.scaleMaxCapacity),
    scale_min_capacity: cdktf.stringToTerraform(struct!.scaleMinCapacity),
    scale_target_capacity: cdktf.stringToTerraform(struct!.scaleTargetCapacity),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    target_capacity: cdktf.stringToTerraform(struct!.targetCapacity),
    task_type: cdktf.stringToTerraform(struct!.taskType),
  }
}


export function elastigroupAwsScheduledTaskToHclTerraform(struct?: ElastigroupAwsScheduledTask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adjustment: {
      value: cdktf.stringToHclTerraform(struct!.adjustment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    adjustment_percentage: {
      value: cdktf.stringToHclTerraform(struct!.adjustmentPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    batch_size_percentage: {
      value: cdktf.stringToHclTerraform(struct!.batchSizePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cron_expression: {
      value: cdktf.stringToHclTerraform(struct!.cronExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grace_period: {
      value: cdktf.stringToHclTerraform(struct!.gracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_capacity: {
      value: cdktf.stringToHclTerraform(struct!.maxCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_capacity: {
      value: cdktf.stringToHclTerraform(struct!.minCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_max_capacity: {
      value: cdktf.stringToHclTerraform(struct!.scaleMaxCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_min_capacity: {
      value: cdktf.stringToHclTerraform(struct!.scaleMinCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_target_capacity: {
      value: cdktf.stringToHclTerraform(struct!.scaleTargetCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_capacity: {
      value: cdktf.stringToHclTerraform(struct!.targetCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_type: {
      value: cdktf.stringToHclTerraform(struct!.taskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsScheduledTaskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsScheduledTask | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adjustment !== undefined) {
      hasAnyValues = true;
      internalValueResult.adjustment = this._adjustment;
    }
    if (this._adjustmentPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.adjustmentPercentage = this._adjustmentPercentage;
    }
    if (this._batchSizePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSizePercentage = this._batchSizePercentage;
    }
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._gracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriod = this._gracePeriod;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._maxCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCapacity = this._maxCapacity;
    }
    if (this._minCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCapacity = this._minCapacity;
    }
    if (this._scaleMaxCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleMaxCapacity = this._scaleMaxCapacity;
    }
    if (this._scaleMinCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleMinCapacity = this._scaleMinCapacity;
    }
    if (this._scaleTargetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleTargetCapacity = this._scaleTargetCapacity;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._targetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetCapacity = this._targetCapacity;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsScheduledTask | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adjustment = undefined;
      this._adjustmentPercentage = undefined;
      this._batchSizePercentage = undefined;
      this._cronExpression = undefined;
      this._frequency = undefined;
      this._gracePeriod = undefined;
      this._isEnabled = undefined;
      this._maxCapacity = undefined;
      this._minCapacity = undefined;
      this._scaleMaxCapacity = undefined;
      this._scaleMinCapacity = undefined;
      this._scaleTargetCapacity = undefined;
      this._startTime = undefined;
      this._targetCapacity = undefined;
      this._taskType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adjustment = value.adjustment;
      this._adjustmentPercentage = value.adjustmentPercentage;
      this._batchSizePercentage = value.batchSizePercentage;
      this._cronExpression = value.cronExpression;
      this._frequency = value.frequency;
      this._gracePeriod = value.gracePeriod;
      this._isEnabled = value.isEnabled;
      this._maxCapacity = value.maxCapacity;
      this._minCapacity = value.minCapacity;
      this._scaleMaxCapacity = value.scaleMaxCapacity;
      this._scaleMinCapacity = value.scaleMinCapacity;
      this._scaleTargetCapacity = value.scaleTargetCapacity;
      this._startTime = value.startTime;
      this._targetCapacity = value.targetCapacity;
      this._taskType = value.taskType;
    }
  }

  // adjustment - computed: false, optional: true, required: false
  private _adjustment?: string; 
  public get adjustment() {
    return this.getStringAttribute('adjustment');
  }
  public set adjustment(value: string) {
    this._adjustment = value;
  }
  public resetAdjustment() {
    this._adjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentInput() {
    return this._adjustment;
  }

  // adjustment_percentage - computed: false, optional: true, required: false
  private _adjustmentPercentage?: string; 
  public get adjustmentPercentage() {
    return this.getStringAttribute('adjustment_percentage');
  }
  public set adjustmentPercentage(value: string) {
    this._adjustmentPercentage = value;
  }
  public resetAdjustmentPercentage() {
    this._adjustmentPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentPercentageInput() {
    return this._adjustmentPercentage;
  }

  // batch_size_percentage - computed: false, optional: true, required: false
  private _batchSizePercentage?: string; 
  public get batchSizePercentage() {
    return this.getStringAttribute('batch_size_percentage');
  }
  public set batchSizePercentage(value: string) {
    this._batchSizePercentage = value;
  }
  public resetBatchSizePercentage() {
    this._batchSizePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizePercentageInput() {
    return this._batchSizePercentage;
  }

  // cron_expression - computed: false, optional: true, required: false
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  public resetCronExpression() {
    this._cronExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // grace_period - computed: false, optional: true, required: false
  private _gracePeriod?: string; 
  public get gracePeriod() {
    return this.getStringAttribute('grace_period');
  }
  public set gracePeriod(value: string) {
    this._gracePeriod = value;
  }
  public resetGracePeriod() {
    this._gracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInput() {
    return this._gracePeriod;
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // max_capacity - computed: false, optional: true, required: false
  private _maxCapacity?: string; 
  public get maxCapacity() {
    return this.getStringAttribute('max_capacity');
  }
  public set maxCapacity(value: string) {
    this._maxCapacity = value;
  }
  public resetMaxCapacity() {
    this._maxCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity;
  }

  // min_capacity - computed: false, optional: true, required: false
  private _minCapacity?: string; 
  public get minCapacity() {
    return this.getStringAttribute('min_capacity');
  }
  public set minCapacity(value: string) {
    this._minCapacity = value;
  }
  public resetMinCapacity() {
    this._minCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCapacityInput() {
    return this._minCapacity;
  }

  // scale_max_capacity - computed: false, optional: true, required: false
  private _scaleMaxCapacity?: string; 
  public get scaleMaxCapacity() {
    return this.getStringAttribute('scale_max_capacity');
  }
  public set scaleMaxCapacity(value: string) {
    this._scaleMaxCapacity = value;
  }
  public resetScaleMaxCapacity() {
    this._scaleMaxCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleMaxCapacityInput() {
    return this._scaleMaxCapacity;
  }

  // scale_min_capacity - computed: false, optional: true, required: false
  private _scaleMinCapacity?: string; 
  public get scaleMinCapacity() {
    return this.getStringAttribute('scale_min_capacity');
  }
  public set scaleMinCapacity(value: string) {
    this._scaleMinCapacity = value;
  }
  public resetScaleMinCapacity() {
    this._scaleMinCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleMinCapacityInput() {
    return this._scaleMinCapacity;
  }

  // scale_target_capacity - computed: false, optional: true, required: false
  private _scaleTargetCapacity?: string; 
  public get scaleTargetCapacity() {
    return this.getStringAttribute('scale_target_capacity');
  }
  public set scaleTargetCapacity(value: string) {
    this._scaleTargetCapacity = value;
  }
  public resetScaleTargetCapacity() {
    this._scaleTargetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleTargetCapacityInput() {
    return this._scaleTargetCapacity;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // target_capacity - computed: false, optional: true, required: false
  private _targetCapacity?: string; 
  public get targetCapacity() {
    return this.getStringAttribute('target_capacity');
  }
  public set targetCapacity(value: string) {
    this._targetCapacity = value;
  }
  public resetTargetCapacity() {
    this._targetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCapacityInput() {
    return this._targetCapacity;
  }

  // task_type - computed: false, optional: false, required: true
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }
}

export class ElastigroupAwsScheduledTaskList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsScheduledTask[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsScheduledTaskOutputReference {
    return new ElastigroupAwsScheduledTaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsSignal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#name ElastigroupAws#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#timeout ElastigroupAws#timeout}
  */
  readonly timeout?: number;
}

export function elastigroupAwsSignalToTerraform(struct?: ElastigroupAwsSignal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function elastigroupAwsSignalToHclTerraform(struct?: ElastigroupAwsSignal | cdktf.IResolvable): any {
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

export class ElastigroupAwsSignalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsSignal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsSignal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._timeout = value.timeout;
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

  // timeout - computed: false, optional: true, required: false
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

export class ElastigroupAwsSignalList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsSignal[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsSignalOutputReference {
    return new ElastigroupAwsSignalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsStatefulDeallocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#should_delete_images ElastigroupAws#should_delete_images}
  */
  readonly shouldDeleteImages?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#should_delete_network_interfaces ElastigroupAws#should_delete_network_interfaces}
  */
  readonly shouldDeleteNetworkInterfaces?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#should_delete_snapshots ElastigroupAws#should_delete_snapshots}
  */
  readonly shouldDeleteSnapshots?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#should_delete_volumes ElastigroupAws#should_delete_volumes}
  */
  readonly shouldDeleteVolumes?: boolean | cdktf.IResolvable;
}

export function elastigroupAwsStatefulDeallocationToTerraform(struct?: ElastigroupAwsStatefulDeallocationOutputReference | ElastigroupAwsStatefulDeallocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    should_delete_images: cdktf.booleanToTerraform(struct!.shouldDeleteImages),
    should_delete_network_interfaces: cdktf.booleanToTerraform(struct!.shouldDeleteNetworkInterfaces),
    should_delete_snapshots: cdktf.booleanToTerraform(struct!.shouldDeleteSnapshots),
    should_delete_volumes: cdktf.booleanToTerraform(struct!.shouldDeleteVolumes),
  }
}


export function elastigroupAwsStatefulDeallocationToHclTerraform(struct?: ElastigroupAwsStatefulDeallocationOutputReference | ElastigroupAwsStatefulDeallocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    should_delete_images: {
      value: cdktf.booleanToHclTerraform(struct!.shouldDeleteImages),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    should_delete_network_interfaces: {
      value: cdktf.booleanToHclTerraform(struct!.shouldDeleteNetworkInterfaces),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    should_delete_snapshots: {
      value: cdktf.booleanToHclTerraform(struct!.shouldDeleteSnapshots),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    should_delete_volumes: {
      value: cdktf.booleanToHclTerraform(struct!.shouldDeleteVolumes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsStatefulDeallocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsStatefulDeallocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shouldDeleteImages !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldDeleteImages = this._shouldDeleteImages;
    }
    if (this._shouldDeleteNetworkInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldDeleteNetworkInterfaces = this._shouldDeleteNetworkInterfaces;
    }
    if (this._shouldDeleteSnapshots !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldDeleteSnapshots = this._shouldDeleteSnapshots;
    }
    if (this._shouldDeleteVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldDeleteVolumes = this._shouldDeleteVolumes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsStatefulDeallocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._shouldDeleteImages = undefined;
      this._shouldDeleteNetworkInterfaces = undefined;
      this._shouldDeleteSnapshots = undefined;
      this._shouldDeleteVolumes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._shouldDeleteImages = value.shouldDeleteImages;
      this._shouldDeleteNetworkInterfaces = value.shouldDeleteNetworkInterfaces;
      this._shouldDeleteSnapshots = value.shouldDeleteSnapshots;
      this._shouldDeleteVolumes = value.shouldDeleteVolumes;
    }
  }

  // should_delete_images - computed: false, optional: true, required: false
  private _shouldDeleteImages?: boolean | cdktf.IResolvable; 
  public get shouldDeleteImages() {
    return this.getBooleanAttribute('should_delete_images');
  }
  public set shouldDeleteImages(value: boolean | cdktf.IResolvable) {
    this._shouldDeleteImages = value;
  }
  public resetShouldDeleteImages() {
    this._shouldDeleteImages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldDeleteImagesInput() {
    return this._shouldDeleteImages;
  }

  // should_delete_network_interfaces - computed: false, optional: true, required: false
  private _shouldDeleteNetworkInterfaces?: boolean | cdktf.IResolvable; 
  public get shouldDeleteNetworkInterfaces() {
    return this.getBooleanAttribute('should_delete_network_interfaces');
  }
  public set shouldDeleteNetworkInterfaces(value: boolean | cdktf.IResolvable) {
    this._shouldDeleteNetworkInterfaces = value;
  }
  public resetShouldDeleteNetworkInterfaces() {
    this._shouldDeleteNetworkInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldDeleteNetworkInterfacesInput() {
    return this._shouldDeleteNetworkInterfaces;
  }

  // should_delete_snapshots - computed: false, optional: true, required: false
  private _shouldDeleteSnapshots?: boolean | cdktf.IResolvable; 
  public get shouldDeleteSnapshots() {
    return this.getBooleanAttribute('should_delete_snapshots');
  }
  public set shouldDeleteSnapshots(value: boolean | cdktf.IResolvable) {
    this._shouldDeleteSnapshots = value;
  }
  public resetShouldDeleteSnapshots() {
    this._shouldDeleteSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldDeleteSnapshotsInput() {
    return this._shouldDeleteSnapshots;
  }

  // should_delete_volumes - computed: false, optional: true, required: false
  private _shouldDeleteVolumes?: boolean | cdktf.IResolvable; 
  public get shouldDeleteVolumes() {
    return this.getBooleanAttribute('should_delete_volumes');
  }
  public set shouldDeleteVolumes(value: boolean | cdktf.IResolvable) {
    this._shouldDeleteVolumes = value;
  }
  public resetShouldDeleteVolumes() {
    this._shouldDeleteVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldDeleteVolumesInput() {
    return this._shouldDeleteVolumes;
  }
}
export interface ElastigroupAwsStatefulInstanceAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#stateful_instance_id ElastigroupAws#stateful_instance_id}
  */
  readonly statefulInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#type ElastigroupAws#type}
  */
  readonly type: string;
}

export function elastigroupAwsStatefulInstanceActionToTerraform(struct?: ElastigroupAwsStatefulInstanceAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stateful_instance_id: cdktf.stringToTerraform(struct!.statefulInstanceId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function elastigroupAwsStatefulInstanceActionToHclTerraform(struct?: ElastigroupAwsStatefulInstanceAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stateful_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.statefulInstanceId),
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

export class ElastigroupAwsStatefulInstanceActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsStatefulInstanceAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statefulInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.statefulInstanceId = this._statefulInstanceId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsStatefulInstanceAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statefulInstanceId = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._statefulInstanceId = value.statefulInstanceId;
      this._type = value.type;
    }
  }

  // stateful_instance_id - computed: false, optional: false, required: true
  private _statefulInstanceId?: string; 
  public get statefulInstanceId() {
    return this.getStringAttribute('stateful_instance_id');
  }
  public set statefulInstanceId(value: string) {
    this._statefulInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulInstanceIdInput() {
    return this._statefulInstanceId;
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

export class ElastigroupAwsStatefulInstanceActionList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsStatefulInstanceAction[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsStatefulInstanceActionOutputReference {
    return new ElastigroupAwsStatefulInstanceActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#key ElastigroupAws#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#value ElastigroupAws#value}
  */
  readonly value?: string;
}

export function elastigroupAwsTagsToTerraform(struct?: ElastigroupAwsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function elastigroupAwsTagsToHclTerraform(struct?: ElastigroupAwsTags | cdktf.IResolvable): any {
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

export class ElastigroupAwsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElastigroupAwsTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ElastigroupAwsTags | cdktf.IResolvable | undefined) {
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

export class ElastigroupAwsTagsList extends cdktf.ComplexList {
  public internalValue? : ElastigroupAwsTags[] | cdktf.IResolvable

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
  public get(index: number): ElastigroupAwsTagsOutputReference {
    return new ElastigroupAwsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElastigroupAwsUpdatePolicyRollConfigStrategyOnFailure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#action_type ElastigroupAws#action_type}
  */
  readonly actionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#batch_num ElastigroupAws#batch_num}
  */
  readonly batchNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#draining_timeout ElastigroupAws#draining_timeout}
  */
  readonly drainingTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#should_decrement_target_capacity ElastigroupAws#should_decrement_target_capacity}
  */
  readonly shouldDecrementTargetCapacity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#should_handle_all_batches ElastigroupAws#should_handle_all_batches}
  */
  readonly shouldHandleAllBatches?: boolean | cdktf.IResolvable;
}

export function elastigroupAwsUpdatePolicyRollConfigStrategyOnFailureToTerraform(struct?: ElastigroupAwsUpdatePolicyRollConfigStrategyOnFailureOutputReference | ElastigroupAwsUpdatePolicyRollConfigStrategyOnFailure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    batch_num: cdktf.numberToTerraform(struct!.batchNum),
    draining_timeout: cdktf.numberToTerraform(struct!.drainingTimeout),
    should_decrement_target_capacity: cdktf.booleanToTerraform(struct!.shouldDecrementTargetCapacity),
    should_handle_all_batches: cdktf.booleanToTerraform(struct!.shouldHandleAllBatches),
  }
}


export function elastigroupAwsUpdatePolicyRollConfigStrategyOnFailureToHclTerraform(struct?: ElastigroupAwsUpdatePolicyRollConfigStrategyOnFailureOutputReference | ElastigroupAwsUpdatePolicyRollConfigStrategyOnFailure): any {
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
    batch_num: {
      value: cdktf.numberToHclTerraform(struct!.batchNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    draining_timeout: {
      value: cdktf.numberToHclTerraform(struct!.drainingTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    should_decrement_target_capacity: {
      value: cdktf.booleanToHclTerraform(struct!.shouldDecrementTargetCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    should_handle_all_batches: {
      value: cdktf.booleanToHclTerraform(struct!.shouldHandleAllBatches),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsUpdatePolicyRollConfigStrategyOnFailureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsUpdatePolicyRollConfigStrategyOnFailure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._batchNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchNum = this._batchNum;
    }
    if (this._drainingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainingTimeout = this._drainingTimeout;
    }
    if (this._shouldDecrementTargetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldDecrementTargetCapacity = this._shouldDecrementTargetCapacity;
    }
    if (this._shouldHandleAllBatches !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldHandleAllBatches = this._shouldHandleAllBatches;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsUpdatePolicyRollConfigStrategyOnFailure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionType = undefined;
      this._batchNum = undefined;
      this._drainingTimeout = undefined;
      this._shouldDecrementTargetCapacity = undefined;
      this._shouldHandleAllBatches = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionType = value.actionType;
      this._batchNum = value.batchNum;
      this._drainingTimeout = value.drainingTimeout;
      this._shouldDecrementTargetCapacity = value.shouldDecrementTargetCapacity;
      this._shouldHandleAllBatches = value.shouldHandleAllBatches;
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

  // batch_num - computed: false, optional: true, required: false
  private _batchNum?: number; 
  public get batchNum() {
    return this.getNumberAttribute('batch_num');
  }
  public set batchNum(value: number) {
    this._batchNum = value;
  }
  public resetBatchNum() {
    this._batchNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchNumInput() {
    return this._batchNum;
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

  // should_decrement_target_capacity - computed: false, optional: true, required: false
  private _shouldDecrementTargetCapacity?: boolean | cdktf.IResolvable; 
  public get shouldDecrementTargetCapacity() {
    return this.getBooleanAttribute('should_decrement_target_capacity');
  }
  public set shouldDecrementTargetCapacity(value: boolean | cdktf.IResolvable) {
    this._shouldDecrementTargetCapacity = value;
  }
  public resetShouldDecrementTargetCapacity() {
    this._shouldDecrementTargetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldDecrementTargetCapacityInput() {
    return this._shouldDecrementTargetCapacity;
  }

  // should_handle_all_batches - computed: false, optional: true, required: false
  private _shouldHandleAllBatches?: boolean | cdktf.IResolvable; 
  public get shouldHandleAllBatches() {
    return this.getBooleanAttribute('should_handle_all_batches');
  }
  public set shouldHandleAllBatches(value: boolean | cdktf.IResolvable) {
    this._shouldHandleAllBatches = value;
  }
  public resetShouldHandleAllBatches() {
    this._shouldHandleAllBatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldHandleAllBatchesInput() {
    return this._shouldHandleAllBatches;
  }
}
export interface ElastigroupAwsUpdatePolicyRollConfigStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#action ElastigroupAws#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#batch_min_healthy_percentage ElastigroupAws#batch_min_healthy_percentage}
  */
  readonly batchMinHealthyPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#should_drain_instances ElastigroupAws#should_drain_instances}
  */
  readonly shouldDrainInstances?: boolean | cdktf.IResolvable;
  /**
  * on_failure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#on_failure ElastigroupAws#on_failure}
  */
  readonly onFailure?: ElastigroupAwsUpdatePolicyRollConfigStrategyOnFailure;
}

export function elastigroupAwsUpdatePolicyRollConfigStrategyToTerraform(struct?: ElastigroupAwsUpdatePolicyRollConfigStrategyOutputReference | ElastigroupAwsUpdatePolicyRollConfigStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    batch_min_healthy_percentage: cdktf.numberToTerraform(struct!.batchMinHealthyPercentage),
    should_drain_instances: cdktf.booleanToTerraform(struct!.shouldDrainInstances),
    on_failure: elastigroupAwsUpdatePolicyRollConfigStrategyOnFailureToTerraform(struct!.onFailure),
  }
}


export function elastigroupAwsUpdatePolicyRollConfigStrategyToHclTerraform(struct?: ElastigroupAwsUpdatePolicyRollConfigStrategyOutputReference | ElastigroupAwsUpdatePolicyRollConfigStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    batch_min_healthy_percentage: {
      value: cdktf.numberToHclTerraform(struct!.batchMinHealthyPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    should_drain_instances: {
      value: cdktf.booleanToHclTerraform(struct!.shouldDrainInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    on_failure: {
      value: elastigroupAwsUpdatePolicyRollConfigStrategyOnFailureToHclTerraform(struct!.onFailure),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAwsUpdatePolicyRollConfigStrategyOnFailureList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsUpdatePolicyRollConfigStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsUpdatePolicyRollConfigStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._batchMinHealthyPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchMinHealthyPercentage = this._batchMinHealthyPercentage;
    }
    if (this._shouldDrainInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldDrainInstances = this._shouldDrainInstances;
    }
    if (this._onFailure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onFailure = this._onFailure?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsUpdatePolicyRollConfigStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._batchMinHealthyPercentage = undefined;
      this._shouldDrainInstances = undefined;
      this._onFailure.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._batchMinHealthyPercentage = value.batchMinHealthyPercentage;
      this._shouldDrainInstances = value.shouldDrainInstances;
      this._onFailure.internalValue = value.onFailure;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // batch_min_healthy_percentage - computed: false, optional: true, required: false
  private _batchMinHealthyPercentage?: number; 
  public get batchMinHealthyPercentage() {
    return this.getNumberAttribute('batch_min_healthy_percentage');
  }
  public set batchMinHealthyPercentage(value: number) {
    this._batchMinHealthyPercentage = value;
  }
  public resetBatchMinHealthyPercentage() {
    this._batchMinHealthyPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchMinHealthyPercentageInput() {
    return this._batchMinHealthyPercentage;
  }

  // should_drain_instances - computed: false, optional: true, required: false
  private _shouldDrainInstances?: boolean | cdktf.IResolvable; 
  public get shouldDrainInstances() {
    return this.getBooleanAttribute('should_drain_instances');
  }
  public set shouldDrainInstances(value: boolean | cdktf.IResolvable) {
    this._shouldDrainInstances = value;
  }
  public resetShouldDrainInstances() {
    this._shouldDrainInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldDrainInstancesInput() {
    return this._shouldDrainInstances;
  }

  // on_failure - computed: false, optional: true, required: false
  private _onFailure = new ElastigroupAwsUpdatePolicyRollConfigStrategyOnFailureOutputReference(this, "on_failure");
  public get onFailure() {
    return this._onFailure;
  }
  public putOnFailure(value: ElastigroupAwsUpdatePolicyRollConfigStrategyOnFailure) {
    this._onFailure.internalValue = value;
  }
  public resetOnFailure() {
    this._onFailure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailureInput() {
    return this._onFailure.internalValue;
  }
}
export interface ElastigroupAwsUpdatePolicyRollConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#batch_size_percentage ElastigroupAws#batch_size_percentage}
  */
  readonly batchSizePercentage: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#grace_period ElastigroupAws#grace_period}
  */
  readonly gracePeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#health_check_type ElastigroupAws#health_check_type}
  */
  readonly healthCheckType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#wait_for_roll_percentage ElastigroupAws#wait_for_roll_percentage}
  */
  readonly waitForRollPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#wait_for_roll_timeout ElastigroupAws#wait_for_roll_timeout}
  */
  readonly waitForRollTimeout?: number;
  /**
  * strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#strategy ElastigroupAws#strategy}
  */
  readonly strategy?: ElastigroupAwsUpdatePolicyRollConfigStrategy;
}

export function elastigroupAwsUpdatePolicyRollConfigToTerraform(struct?: ElastigroupAwsUpdatePolicyRollConfigOutputReference | ElastigroupAwsUpdatePolicyRollConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_size_percentage: cdktf.numberToTerraform(struct!.batchSizePercentage),
    grace_period: cdktf.numberToTerraform(struct!.gracePeriod),
    health_check_type: cdktf.stringToTerraform(struct!.healthCheckType),
    wait_for_roll_percentage: cdktf.numberToTerraform(struct!.waitForRollPercentage),
    wait_for_roll_timeout: cdktf.numberToTerraform(struct!.waitForRollTimeout),
    strategy: elastigroupAwsUpdatePolicyRollConfigStrategyToTerraform(struct!.strategy),
  }
}


export function elastigroupAwsUpdatePolicyRollConfigToHclTerraform(struct?: ElastigroupAwsUpdatePolicyRollConfigOutputReference | ElastigroupAwsUpdatePolicyRollConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_size_percentage: {
      value: cdktf.numberToHclTerraform(struct!.batchSizePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grace_period: {
      value: cdktf.numberToHclTerraform(struct!.gracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_type: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_for_roll_percentage: {
      value: cdktf.numberToHclTerraform(struct!.waitForRollPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wait_for_roll_timeout: {
      value: cdktf.numberToHclTerraform(struct!.waitForRollTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strategy: {
      value: elastigroupAwsUpdatePolicyRollConfigStrategyToHclTerraform(struct!.strategy),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAwsUpdatePolicyRollConfigStrategyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsUpdatePolicyRollConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsUpdatePolicyRollConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchSizePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSizePercentage = this._batchSizePercentage;
    }
    if (this._gracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriod = this._gracePeriod;
    }
    if (this._healthCheckType !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckType = this._healthCheckType;
    }
    if (this._waitForRollPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForRollPercentage = this._waitForRollPercentage;
    }
    if (this._waitForRollTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForRollTimeout = this._waitForRollTimeout;
    }
    if (this._strategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsUpdatePolicyRollConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchSizePercentage = undefined;
      this._gracePeriod = undefined;
      this._healthCheckType = undefined;
      this._waitForRollPercentage = undefined;
      this._waitForRollTimeout = undefined;
      this._strategy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchSizePercentage = value.batchSizePercentage;
      this._gracePeriod = value.gracePeriod;
      this._healthCheckType = value.healthCheckType;
      this._waitForRollPercentage = value.waitForRollPercentage;
      this._waitForRollTimeout = value.waitForRollTimeout;
      this._strategy.internalValue = value.strategy;
    }
  }

  // batch_size_percentage - computed: false, optional: false, required: true
  private _batchSizePercentage?: number; 
  public get batchSizePercentage() {
    return this.getNumberAttribute('batch_size_percentage');
  }
  public set batchSizePercentage(value: number) {
    this._batchSizePercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizePercentageInput() {
    return this._batchSizePercentage;
  }

  // grace_period - computed: false, optional: true, required: false
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

  // health_check_type - computed: false, optional: true, required: false
  private _healthCheckType?: string; 
  public get healthCheckType() {
    return this.getStringAttribute('health_check_type');
  }
  public set healthCheckType(value: string) {
    this._healthCheckType = value;
  }
  public resetHealthCheckType() {
    this._healthCheckType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTypeInput() {
    return this._healthCheckType;
  }

  // wait_for_roll_percentage - computed: false, optional: true, required: false
  private _waitForRollPercentage?: number; 
  public get waitForRollPercentage() {
    return this.getNumberAttribute('wait_for_roll_percentage');
  }
  public set waitForRollPercentage(value: number) {
    this._waitForRollPercentage = value;
  }
  public resetWaitForRollPercentage() {
    this._waitForRollPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForRollPercentageInput() {
    return this._waitForRollPercentage;
  }

  // wait_for_roll_timeout - computed: false, optional: true, required: false
  private _waitForRollTimeout?: number; 
  public get waitForRollTimeout() {
    return this.getNumberAttribute('wait_for_roll_timeout');
  }
  public set waitForRollTimeout(value: number) {
    this._waitForRollTimeout = value;
  }
  public resetWaitForRollTimeout() {
    this._waitForRollTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForRollTimeoutInput() {
    return this._waitForRollTimeout;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy = new ElastigroupAwsUpdatePolicyRollConfigStrategyOutputReference(this, "strategy");
  public get strategy() {
    return this._strategy;
  }
  public putStrategy(value: ElastigroupAwsUpdatePolicyRollConfigStrategy) {
    this._strategy.internalValue = value;
  }
  public resetStrategy() {
    this._strategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy.internalValue;
  }
}
export interface ElastigroupAwsUpdatePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#auto_apply_tags ElastigroupAws#auto_apply_tags}
  */
  readonly autoApplyTags?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#should_resume_stateful ElastigroupAws#should_resume_stateful}
  */
  readonly shouldResumeStateful: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#should_roll ElastigroupAws#should_roll}
  */
  readonly shouldRoll: boolean | cdktf.IResolvable;
  /**
  * roll_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#roll_config ElastigroupAws#roll_config}
  */
  readonly rollConfig?: ElastigroupAwsUpdatePolicyRollConfig;
}

export function elastigroupAwsUpdatePolicyToTerraform(struct?: ElastigroupAwsUpdatePolicyOutputReference | ElastigroupAwsUpdatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_apply_tags: cdktf.booleanToTerraform(struct!.autoApplyTags),
    should_resume_stateful: cdktf.booleanToTerraform(struct!.shouldResumeStateful),
    should_roll: cdktf.booleanToTerraform(struct!.shouldRoll),
    roll_config: elastigroupAwsUpdatePolicyRollConfigToTerraform(struct!.rollConfig),
  }
}


export function elastigroupAwsUpdatePolicyToHclTerraform(struct?: ElastigroupAwsUpdatePolicyOutputReference | ElastigroupAwsUpdatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_apply_tags: {
      value: cdktf.booleanToHclTerraform(struct!.autoApplyTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    should_resume_stateful: {
      value: cdktf.booleanToHclTerraform(struct!.shouldResumeStateful),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    should_roll: {
      value: cdktf.booleanToHclTerraform(struct!.shouldRoll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    roll_config: {
      value: elastigroupAwsUpdatePolicyRollConfigToHclTerraform(struct!.rollConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ElastigroupAwsUpdatePolicyRollConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElastigroupAwsUpdatePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsUpdatePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoApplyTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoApplyTags = this._autoApplyTags;
    }
    if (this._shouldResumeStateful !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldResumeStateful = this._shouldResumeStateful;
    }
    if (this._shouldRoll !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldRoll = this._shouldRoll;
    }
    if (this._rollConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollConfig = this._rollConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsUpdatePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoApplyTags = undefined;
      this._shouldResumeStateful = undefined;
      this._shouldRoll = undefined;
      this._rollConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoApplyTags = value.autoApplyTags;
      this._shouldResumeStateful = value.shouldResumeStateful;
      this._shouldRoll = value.shouldRoll;
      this._rollConfig.internalValue = value.rollConfig;
    }
  }

  // auto_apply_tags - computed: false, optional: true, required: false
  private _autoApplyTags?: boolean | cdktf.IResolvable; 
  public get autoApplyTags() {
    return this.getBooleanAttribute('auto_apply_tags');
  }
  public set autoApplyTags(value: boolean | cdktf.IResolvable) {
    this._autoApplyTags = value;
  }
  public resetAutoApplyTags() {
    this._autoApplyTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoApplyTagsInput() {
    return this._autoApplyTags;
  }

  // should_resume_stateful - computed: false, optional: false, required: true
  private _shouldResumeStateful?: boolean | cdktf.IResolvable; 
  public get shouldResumeStateful() {
    return this.getBooleanAttribute('should_resume_stateful');
  }
  public set shouldResumeStateful(value: boolean | cdktf.IResolvable) {
    this._shouldResumeStateful = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldResumeStatefulInput() {
    return this._shouldResumeStateful;
  }

  // should_roll - computed: false, optional: false, required: true
  private _shouldRoll?: boolean | cdktf.IResolvable; 
  public get shouldRoll() {
    return this.getBooleanAttribute('should_roll');
  }
  public set shouldRoll(value: boolean | cdktf.IResolvable) {
    this._shouldRoll = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldRollInput() {
    return this._shouldRoll;
  }

  // roll_config - computed: false, optional: true, required: false
  private _rollConfig = new ElastigroupAwsUpdatePolicyRollConfigOutputReference(this, "roll_config");
  public get rollConfig() {
    return this._rollConfig;
  }
  public putRollConfig(value: ElastigroupAwsUpdatePolicyRollConfig) {
    this._rollConfig.internalValue = value;
  }
  public resetRollConfig() {
    this._rollConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollConfigInput() {
    return this._rollConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws spotinst_elastigroup_aws}
*/
export class ElastigroupAws extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_elastigroup_aws";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElastigroupAws resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElastigroupAws to import
  * @param importFromId The id of the existing ElastigroupAws that should be imported. Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElastigroupAws to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spotinst_elastigroup_aws", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/elastigroup_aws spotinst_elastigroup_aws} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElastigroupAwsConfig
  */
  public constructor(scope: Construct, id: string, config: ElastigroupAwsConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_elastigroup_aws',
      terraformGeneratorMetadata: {
        providerName: 'spotinst',
        providerVersion: '1.231.0',
        providerVersionConstraint: '1.231.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoHealing = config.autoHealing;
    this._availabilityZones = config.availabilityZones;
    this._blockDevicesMode = config.blockDevicesMode;
    this._capacityUnit = config.capacityUnit;
    this._considerOdPricing = config.considerOdPricing;
    this._cpuCredits = config.cpuCredits;
    this._description = config.description;
    this._desiredCapacity = config.desiredCapacity;
    this._drainingTimeout = config.drainingTimeout;
    this._ebsOptimized = config.ebsOptimized;
    this._elasticIps = config.elasticIps;
    this._elasticLoadBalancers = config.elasticLoadBalancers;
    this._enableMonitoring = config.enableMonitoring;
    this._fallbackToOndemand = config.fallbackToOndemand;
    this._healthCheckGracePeriod = config.healthCheckGracePeriod;
    this._healthCheckType = config.healthCheckType;
    this._healthCheckUnhealthyDurationBeforeReplacement = config.healthCheckUnhealthyDurationBeforeReplacement;
    this._iamInstanceProfile = config.iamInstanceProfile;
    this._id = config.id;
    this._imageId = config.imageId;
    this._immediateOdRecoverThreshold = config.immediateOdRecoverThreshold;
    this._instanceTypesOndemand = config.instanceTypesOndemand;
    this._instanceTypesPreferredSpot = config.instanceTypesPreferredSpot;
    this._instanceTypesSpot = config.instanceTypesSpot;
    this._keyName = config.keyName;
    this._lifetimePeriod = config.lifetimePeriod;
    this._maxReplacementsPercentage = config.maxReplacementsPercentage;
    this._maxSize = config.maxSize;
    this._minSize = config.minSize;
    this._minimumInstanceLifetime = config.minimumInstanceLifetime;
    this._name = config.name;
    this._onDemandTypes = config.onDemandTypes;
    this._ondemandCount = config.ondemandCount;
    this._orientation = config.orientation;
    this._persistBlockDevices = config.persistBlockDevices;
    this._persistPrivateIp = config.persistPrivateIp;
    this._persistRootDevice = config.persistRootDevice;
    this._placementTenancy = config.placementTenancy;
    this._preferredAvailabilityZones = config.preferredAvailabilityZones;
    this._privateIps = config.privateIps;
    this._product = config.product;
    this._region = config.region;
    this._restrictSingleAz = config.restrictSingleAz;
    this._securityGroups = config.securityGroups;
    this._shutdownScript = config.shutdownScript;
    this._spotPercentage = config.spotPercentage;
    this._subnetIds = config.subnetIds;
    this._targetGroupArns = config.targetGroupArns;
    this._userData = config.userData;
    this._utilizeCommitments = config.utilizeCommitments;
    this._utilizeReservedInstances = config.utilizeReservedInstances;
    this._waitForCapacity = config.waitForCapacity;
    this._waitForCapacityTimeout = config.waitForCapacityTimeout;
    this._cpuOptions.internalValue = config.cpuOptions;
    this._ebsBlockDevice.internalValue = config.ebsBlockDevice;
    this._ephemeralBlockDevice.internalValue = config.ephemeralBlockDevice;
    this._images.internalValue = config.images;
    this._instanceTypesWeights.internalValue = config.instanceTypesWeights;
    this._integrationBeanstalk.internalValue = config.integrationBeanstalk;
    this._integrationCodedeploy.internalValue = config.integrationCodedeploy;
    this._integrationDockerSwarm.internalValue = config.integrationDockerSwarm;
    this._integrationEcs.internalValue = config.integrationEcs;
    this._integrationGitlab.internalValue = config.integrationGitlab;
    this._integrationKubernetes.internalValue = config.integrationKubernetes;
    this._integrationMesosphere.internalValue = config.integrationMesosphere;
    this._integrationNomad.internalValue = config.integrationNomad;
    this._integrationRancher.internalValue = config.integrationRancher;
    this._integrationRoute53.internalValue = config.integrationRoute53;
    this._itf.internalValue = config.itf;
    this._logging.internalValue = config.logging;
    this._metadataOptions.internalValue = config.metadataOptions;
    this._multipleMetrics.internalValue = config.multipleMetrics;
    this._networkInterface.internalValue = config.networkInterface;
    this._resourceRequirements.internalValue = config.resourceRequirements;
    this._resourceTagSpecification.internalValue = config.resourceTagSpecification;
    this._revertToSpot.internalValue = config.revertToSpot;
    this._scalingDownPolicy.internalValue = config.scalingDownPolicy;
    this._scalingStrategy.internalValue = config.scalingStrategy;
    this._scalingTargetPolicy.internalValue = config.scalingTargetPolicy;
    this._scalingUpPolicy.internalValue = config.scalingUpPolicy;
    this._scheduledTask.internalValue = config.scheduledTask;
    this._signal.internalValue = config.signal;
    this._statefulDeallocation.internalValue = config.statefulDeallocation;
    this._statefulInstanceAction.internalValue = config.statefulInstanceAction;
    this._tags.internalValue = config.tags;
    this._updatePolicy.internalValue = config.updatePolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_healing - computed: false, optional: true, required: false
  private _autoHealing?: boolean | cdktf.IResolvable; 
  public get autoHealing() {
    return this.getBooleanAttribute('auto_healing');
  }
  public set autoHealing(value: boolean | cdktf.IResolvable) {
    this._autoHealing = value;
  }
  public resetAutoHealing() {
    this._autoHealing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoHealingInput() {
    return this._autoHealing;
  }

  // availability_zones - computed: false, optional: true, required: false
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // block_devices_mode - computed: false, optional: true, required: false
  private _blockDevicesMode?: string; 
  public get blockDevicesMode() {
    return this.getStringAttribute('block_devices_mode');
  }
  public set blockDevicesMode(value: string) {
    this._blockDevicesMode = value;
  }
  public resetBlockDevicesMode() {
    this._blockDevicesMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDevicesModeInput() {
    return this._blockDevicesMode;
  }

  // capacity_unit - computed: true, optional: true, required: false
  private _capacityUnit?: string; 
  public get capacityUnit() {
    return this.getStringAttribute('capacity_unit');
  }
  public set capacityUnit(value: string) {
    this._capacityUnit = value;
  }
  public resetCapacityUnit() {
    this._capacityUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityUnitInput() {
    return this._capacityUnit;
  }

  // consider_od_pricing - computed: false, optional: true, required: false
  private _considerOdPricing?: boolean | cdktf.IResolvable; 
  public get considerOdPricing() {
    return this.getBooleanAttribute('consider_od_pricing');
  }
  public set considerOdPricing(value: boolean | cdktf.IResolvable) {
    this._considerOdPricing = value;
  }
  public resetConsiderOdPricing() {
    this._considerOdPricing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get considerOdPricingInput() {
    return this._considerOdPricing;
  }

  // cpu_credits - computed: false, optional: true, required: false
  private _cpuCredits?: string; 
  public get cpuCredits() {
    return this.getStringAttribute('cpu_credits');
  }
  public set cpuCredits(value: string) {
    this._cpuCredits = value;
  }
  public resetCpuCredits() {
    this._cpuCredits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCreditsInput() {
    return this._cpuCredits;
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

  // desired_capacity - computed: false, optional: true, required: false
  private _desiredCapacity?: number; 
  public get desiredCapacity() {
    return this.getNumberAttribute('desired_capacity');
  }
  public set desiredCapacity(value: number) {
    this._desiredCapacity = value;
  }
  public resetDesiredCapacity() {
    this._desiredCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredCapacityInput() {
    return this._desiredCapacity;
  }

  // draining_timeout - computed: true, optional: true, required: false
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

  // ebs_optimized - computed: true, optional: true, required: false
  private _ebsOptimized?: boolean | cdktf.IResolvable; 
  public get ebsOptimized() {
    return this.getBooleanAttribute('ebs_optimized');
  }
  public set ebsOptimized(value: boolean | cdktf.IResolvable) {
    this._ebsOptimized = value;
  }
  public resetEbsOptimized() {
    this._ebsOptimized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsOptimizedInput() {
    return this._ebsOptimized;
  }

  // elastic_ips - computed: false, optional: true, required: false
  private _elasticIps?: string[]; 
  public get elasticIps() {
    return this.getListAttribute('elastic_ips');
  }
  public set elasticIps(value: string[]) {
    this._elasticIps = value;
  }
  public resetElasticIps() {
    this._elasticIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticIpsInput() {
    return this._elasticIps;
  }

  // elastic_load_balancers - computed: false, optional: true, required: false
  private _elasticLoadBalancers?: string[]; 
  public get elasticLoadBalancers() {
    return this.getListAttribute('elastic_load_balancers');
  }
  public set elasticLoadBalancers(value: string[]) {
    this._elasticLoadBalancers = value;
  }
  public resetElasticLoadBalancers() {
    this._elasticLoadBalancers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticLoadBalancersInput() {
    return this._elasticLoadBalancers;
  }

  // enable_monitoring - computed: false, optional: true, required: false
  private _enableMonitoring?: boolean | cdktf.IResolvable; 
  public get enableMonitoring() {
    return this.getBooleanAttribute('enable_monitoring');
  }
  public set enableMonitoring(value: boolean | cdktf.IResolvable) {
    this._enableMonitoring = value;
  }
  public resetEnableMonitoring() {
    this._enableMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMonitoringInput() {
    return this._enableMonitoring;
  }

  // fallback_to_ondemand - computed: false, optional: false, required: true
  private _fallbackToOndemand?: boolean | cdktf.IResolvable; 
  public get fallbackToOndemand() {
    return this.getBooleanAttribute('fallback_to_ondemand');
  }
  public set fallbackToOndemand(value: boolean | cdktf.IResolvable) {
    this._fallbackToOndemand = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackToOndemandInput() {
    return this._fallbackToOndemand;
  }

  // health_check_grace_period - computed: false, optional: true, required: false
  private _healthCheckGracePeriod?: number; 
  public get healthCheckGracePeriod() {
    return this.getNumberAttribute('health_check_grace_period');
  }
  public set healthCheckGracePeriod(value: number) {
    this._healthCheckGracePeriod = value;
  }
  public resetHealthCheckGracePeriod() {
    this._healthCheckGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckGracePeriodInput() {
    return this._healthCheckGracePeriod;
  }

  // health_check_type - computed: false, optional: true, required: false
  private _healthCheckType?: string; 
  public get healthCheckType() {
    return this.getStringAttribute('health_check_type');
  }
  public set healthCheckType(value: string) {
    this._healthCheckType = value;
  }
  public resetHealthCheckType() {
    this._healthCheckType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTypeInput() {
    return this._healthCheckType;
  }

  // health_check_unhealthy_duration_before_replacement - computed: false, optional: true, required: false
  private _healthCheckUnhealthyDurationBeforeReplacement?: number; 
  public get healthCheckUnhealthyDurationBeforeReplacement() {
    return this.getNumberAttribute('health_check_unhealthy_duration_before_replacement');
  }
  public set healthCheckUnhealthyDurationBeforeReplacement(value: number) {
    this._healthCheckUnhealthyDurationBeforeReplacement = value;
  }
  public resetHealthCheckUnhealthyDurationBeforeReplacement() {
    this._healthCheckUnhealthyDurationBeforeReplacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckUnhealthyDurationBeforeReplacementInput() {
    return this._healthCheckUnhealthyDurationBeforeReplacement;
  }

  // iam_instance_profile - computed: false, optional: true, required: false
  private _iamInstanceProfile?: string; 
  public get iamInstanceProfile() {
    return this.getStringAttribute('iam_instance_profile');
  }
  public set iamInstanceProfile(value: string) {
    this._iamInstanceProfile = value;
  }
  public resetIamInstanceProfile() {
    this._iamInstanceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamInstanceProfileInput() {
    return this._iamInstanceProfile;
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

  // image_id - computed: false, optional: true, required: false
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

  // immediate_od_recover_threshold - computed: false, optional: true, required: false
  private _immediateOdRecoverThreshold?: number; 
  public get immediateOdRecoverThreshold() {
    return this.getNumberAttribute('immediate_od_recover_threshold');
  }
  public set immediateOdRecoverThreshold(value: number) {
    this._immediateOdRecoverThreshold = value;
  }
  public resetImmediateOdRecoverThreshold() {
    this._immediateOdRecoverThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immediateOdRecoverThresholdInput() {
    return this._immediateOdRecoverThreshold;
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

  // instance_types_preferred_spot - computed: false, optional: true, required: false
  private _instanceTypesPreferredSpot?: string[]; 
  public get instanceTypesPreferredSpot() {
    return this.getListAttribute('instance_types_preferred_spot');
  }
  public set instanceTypesPreferredSpot(value: string[]) {
    this._instanceTypesPreferredSpot = value;
  }
  public resetInstanceTypesPreferredSpot() {
    this._instanceTypesPreferredSpot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesPreferredSpotInput() {
    return this._instanceTypesPreferredSpot;
  }

  // instance_types_spot - computed: false, optional: true, required: false
  private _instanceTypesSpot?: string[]; 
  public get instanceTypesSpot() {
    return this.getListAttribute('instance_types_spot');
  }
  public set instanceTypesSpot(value: string[]) {
    this._instanceTypesSpot = value;
  }
  public resetInstanceTypesSpot() {
    this._instanceTypesSpot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesSpotInput() {
    return this._instanceTypesSpot;
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

  // lifetime_period - computed: false, optional: true, required: false
  private _lifetimePeriod?: string; 
  public get lifetimePeriod() {
    return this.getStringAttribute('lifetime_period');
  }
  public set lifetimePeriod(value: string) {
    this._lifetimePeriod = value;
  }
  public resetLifetimePeriod() {
    this._lifetimePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimePeriodInput() {
    return this._lifetimePeriod;
  }

  // max_replacements_percentage - computed: false, optional: true, required: false
  private _maxReplacementsPercentage?: number; 
  public get maxReplacementsPercentage() {
    return this.getNumberAttribute('max_replacements_percentage');
  }
  public set maxReplacementsPercentage(value: number) {
    this._maxReplacementsPercentage = value;
  }
  public resetMaxReplacementsPercentage() {
    this._maxReplacementsPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplacementsPercentageInput() {
    return this._maxReplacementsPercentage;
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

  // minimum_instance_lifetime - computed: false, optional: true, required: false
  private _minimumInstanceLifetime?: number; 
  public get minimumInstanceLifetime() {
    return this.getNumberAttribute('minimum_instance_lifetime');
  }
  public set minimumInstanceLifetime(value: number) {
    this._minimumInstanceLifetime = value;
  }
  public resetMinimumInstanceLifetime() {
    this._minimumInstanceLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInstanceLifetimeInput() {
    return this._minimumInstanceLifetime;
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

  // on_demand_types - computed: false, optional: true, required: false
  private _onDemandTypes?: string[]; 
  public get onDemandTypes() {
    return this.getListAttribute('on_demand_types');
  }
  public set onDemandTypes(value: string[]) {
    this._onDemandTypes = value;
  }
  public resetOnDemandTypes() {
    this._onDemandTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandTypesInput() {
    return this._onDemandTypes;
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

  // orientation - computed: false, optional: false, required: true
  private _orientation?: string; 
  public get orientation() {
    return this.getStringAttribute('orientation');
  }
  public set orientation(value: string) {
    this._orientation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orientationInput() {
    return this._orientation;
  }

  // persist_block_devices - computed: false, optional: true, required: false
  private _persistBlockDevices?: boolean | cdktf.IResolvable; 
  public get persistBlockDevices() {
    return this.getBooleanAttribute('persist_block_devices');
  }
  public set persistBlockDevices(value: boolean | cdktf.IResolvable) {
    this._persistBlockDevices = value;
  }
  public resetPersistBlockDevices() {
    this._persistBlockDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistBlockDevicesInput() {
    return this._persistBlockDevices;
  }

  // persist_private_ip - computed: false, optional: true, required: false
  private _persistPrivateIp?: boolean | cdktf.IResolvable; 
  public get persistPrivateIp() {
    return this.getBooleanAttribute('persist_private_ip');
  }
  public set persistPrivateIp(value: boolean | cdktf.IResolvable) {
    this._persistPrivateIp = value;
  }
  public resetPersistPrivateIp() {
    this._persistPrivateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistPrivateIpInput() {
    return this._persistPrivateIp;
  }

  // persist_root_device - computed: false, optional: true, required: false
  private _persistRootDevice?: boolean | cdktf.IResolvable; 
  public get persistRootDevice() {
    return this.getBooleanAttribute('persist_root_device');
  }
  public set persistRootDevice(value: boolean | cdktf.IResolvable) {
    this._persistRootDevice = value;
  }
  public resetPersistRootDevice() {
    this._persistRootDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistRootDeviceInput() {
    return this._persistRootDevice;
  }

  // placement_tenancy - computed: false, optional: true, required: false
  private _placementTenancy?: string; 
  public get placementTenancy() {
    return this.getStringAttribute('placement_tenancy');
  }
  public set placementTenancy(value: string) {
    this._placementTenancy = value;
  }
  public resetPlacementTenancy() {
    this._placementTenancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementTenancyInput() {
    return this._placementTenancy;
  }

  // preferred_availability_zones - computed: false, optional: true, required: false
  private _preferredAvailabilityZones?: string[]; 
  public get preferredAvailabilityZones() {
    return this.getListAttribute('preferred_availability_zones');
  }
  public set preferredAvailabilityZones(value: string[]) {
    this._preferredAvailabilityZones = value;
  }
  public resetPreferredAvailabilityZones() {
    this._preferredAvailabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredAvailabilityZonesInput() {
    return this._preferredAvailabilityZones;
  }

  // private_ips - computed: false, optional: true, required: false
  private _privateIps?: string[]; 
  public get privateIps() {
    return this.getListAttribute('private_ips');
  }
  public set privateIps(value: string[]) {
    this._privateIps = value;
  }
  public resetPrivateIps() {
    this._privateIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpsInput() {
    return this._privateIps;
  }

  // product - computed: false, optional: false, required: true
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
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

  // restrict_single_az - computed: false, optional: true, required: false
  private _restrictSingleAz?: boolean | cdktf.IResolvable; 
  public get restrictSingleAz() {
    return this.getBooleanAttribute('restrict_single_az');
  }
  public set restrictSingleAz(value: boolean | cdktf.IResolvable) {
    this._restrictSingleAz = value;
  }
  public resetRestrictSingleAz() {
    this._restrictSingleAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictSingleAzInput() {
    return this._restrictSingleAz;
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

  // spot_percentage - computed: false, optional: true, required: false
  private _spotPercentage?: number; 
  public get spotPercentage() {
    return this.getNumberAttribute('spot_percentage');
  }
  public set spotPercentage(value: number) {
    this._spotPercentage = value;
  }
  public resetSpotPercentage() {
    this._spotPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotPercentageInput() {
    return this._spotPercentage;
  }

  // subnet_ids - computed: false, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // target_group_arns - computed: false, optional: true, required: false
  private _targetGroupArns?: string[]; 
  public get targetGroupArns() {
    return this.getListAttribute('target_group_arns');
  }
  public set targetGroupArns(value: string[]) {
    this._targetGroupArns = value;
  }
  public resetTargetGroupArns() {
    this._targetGroupArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupArnsInput() {
    return this._targetGroupArns;
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

  // utilize_commitments - computed: false, optional: true, required: false
  private _utilizeCommitments?: boolean | cdktf.IResolvable; 
  public get utilizeCommitments() {
    return this.getBooleanAttribute('utilize_commitments');
  }
  public set utilizeCommitments(value: boolean | cdktf.IResolvable) {
    this._utilizeCommitments = value;
  }
  public resetUtilizeCommitments() {
    this._utilizeCommitments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utilizeCommitmentsInput() {
    return this._utilizeCommitments;
  }

  // utilize_reserved_instances - computed: false, optional: true, required: false
  private _utilizeReservedInstances?: boolean | cdktf.IResolvable; 
  public get utilizeReservedInstances() {
    return this.getBooleanAttribute('utilize_reserved_instances');
  }
  public set utilizeReservedInstances(value: boolean | cdktf.IResolvable) {
    this._utilizeReservedInstances = value;
  }
  public resetUtilizeReservedInstances() {
    this._utilizeReservedInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utilizeReservedInstancesInput() {
    return this._utilizeReservedInstances;
  }

  // wait_for_capacity - computed: false, optional: true, required: false
  private _waitForCapacity?: number; 
  public get waitForCapacity() {
    return this.getNumberAttribute('wait_for_capacity');
  }
  public set waitForCapacity(value: number) {
    this._waitForCapacity = value;
  }
  public resetWaitForCapacity() {
    this._waitForCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForCapacityInput() {
    return this._waitForCapacity;
  }

  // wait_for_capacity_timeout - computed: false, optional: true, required: false
  private _waitForCapacityTimeout?: number; 
  public get waitForCapacityTimeout() {
    return this.getNumberAttribute('wait_for_capacity_timeout');
  }
  public set waitForCapacityTimeout(value: number) {
    this._waitForCapacityTimeout = value;
  }
  public resetWaitForCapacityTimeout() {
    this._waitForCapacityTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForCapacityTimeoutInput() {
    return this._waitForCapacityTimeout;
  }

  // cpu_options - computed: false, optional: true, required: false
  private _cpuOptions = new ElastigroupAwsCpuOptionsOutputReference(this, "cpu_options");
  public get cpuOptions() {
    return this._cpuOptions;
  }
  public putCpuOptions(value: ElastigroupAwsCpuOptions) {
    this._cpuOptions.internalValue = value;
  }
  public resetCpuOptions() {
    this._cpuOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuOptionsInput() {
    return this._cpuOptions.internalValue;
  }

  // ebs_block_device - computed: false, optional: true, required: false
  private _ebsBlockDevice = new ElastigroupAwsEbsBlockDeviceList(this, "ebs_block_device", true);
  public get ebsBlockDevice() {
    return this._ebsBlockDevice;
  }
  public putEbsBlockDevice(value: ElastigroupAwsEbsBlockDevice[] | cdktf.IResolvable) {
    this._ebsBlockDevice.internalValue = value;
  }
  public resetEbsBlockDevice() {
    this._ebsBlockDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsBlockDeviceInput() {
    return this._ebsBlockDevice.internalValue;
  }

  // ephemeral_block_device - computed: false, optional: true, required: false
  private _ephemeralBlockDevice = new ElastigroupAwsEphemeralBlockDeviceList(this, "ephemeral_block_device", true);
  public get ephemeralBlockDevice() {
    return this._ephemeralBlockDevice;
  }
  public putEphemeralBlockDevice(value: ElastigroupAwsEphemeralBlockDevice[] | cdktf.IResolvable) {
    this._ephemeralBlockDevice.internalValue = value;
  }
  public resetEphemeralBlockDevice() {
    this._ephemeralBlockDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralBlockDeviceInput() {
    return this._ephemeralBlockDevice.internalValue;
  }

  // images - computed: false, optional: true, required: false
  private _images = new ElastigroupAwsImagesList(this, "images", false);
  public get images() {
    return this._images;
  }
  public putImages(value: ElastigroupAwsImages[] | cdktf.IResolvable) {
    this._images.internalValue = value;
  }
  public resetImages() {
    this._images.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images.internalValue;
  }

  // instance_types_weights - computed: false, optional: true, required: false
  private _instanceTypesWeights = new ElastigroupAwsInstanceTypesWeightsList(this, "instance_types_weights", true);
  public get instanceTypesWeights() {
    return this._instanceTypesWeights;
  }
  public putInstanceTypesWeights(value: ElastigroupAwsInstanceTypesWeights[] | cdktf.IResolvable) {
    this._instanceTypesWeights.internalValue = value;
  }
  public resetInstanceTypesWeights() {
    this._instanceTypesWeights.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesWeightsInput() {
    return this._instanceTypesWeights.internalValue;
  }

  // integration_beanstalk - computed: false, optional: true, required: false
  private _integrationBeanstalk = new ElastigroupAwsIntegrationBeanstalkOutputReference(this, "integration_beanstalk");
  public get integrationBeanstalk() {
    return this._integrationBeanstalk;
  }
  public putIntegrationBeanstalk(value: ElastigroupAwsIntegrationBeanstalk) {
    this._integrationBeanstalk.internalValue = value;
  }
  public resetIntegrationBeanstalk() {
    this._integrationBeanstalk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationBeanstalkInput() {
    return this._integrationBeanstalk.internalValue;
  }

  // integration_codedeploy - computed: false, optional: true, required: false
  private _integrationCodedeploy = new ElastigroupAwsIntegrationCodedeployOutputReference(this, "integration_codedeploy");
  public get integrationCodedeploy() {
    return this._integrationCodedeploy;
  }
  public putIntegrationCodedeploy(value: ElastigroupAwsIntegrationCodedeploy) {
    this._integrationCodedeploy.internalValue = value;
  }
  public resetIntegrationCodedeploy() {
    this._integrationCodedeploy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationCodedeployInput() {
    return this._integrationCodedeploy.internalValue;
  }

  // integration_docker_swarm - computed: false, optional: true, required: false
  private _integrationDockerSwarm = new ElastigroupAwsIntegrationDockerSwarmOutputReference(this, "integration_docker_swarm");
  public get integrationDockerSwarm() {
    return this._integrationDockerSwarm;
  }
  public putIntegrationDockerSwarm(value: ElastigroupAwsIntegrationDockerSwarm) {
    this._integrationDockerSwarm.internalValue = value;
  }
  public resetIntegrationDockerSwarm() {
    this._integrationDockerSwarm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationDockerSwarmInput() {
    return this._integrationDockerSwarm.internalValue;
  }

  // integration_ecs - computed: false, optional: true, required: false
  private _integrationEcs = new ElastigroupAwsIntegrationEcsOutputReference(this, "integration_ecs");
  public get integrationEcs() {
    return this._integrationEcs;
  }
  public putIntegrationEcs(value: ElastigroupAwsIntegrationEcs) {
    this._integrationEcs.internalValue = value;
  }
  public resetIntegrationEcs() {
    this._integrationEcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationEcsInput() {
    return this._integrationEcs.internalValue;
  }

  // integration_gitlab - computed: false, optional: true, required: false
  private _integrationGitlab = new ElastigroupAwsIntegrationGitlabOutputReference(this, "integration_gitlab");
  public get integrationGitlab() {
    return this._integrationGitlab;
  }
  public putIntegrationGitlab(value: ElastigroupAwsIntegrationGitlab) {
    this._integrationGitlab.internalValue = value;
  }
  public resetIntegrationGitlab() {
    this._integrationGitlab.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationGitlabInput() {
    return this._integrationGitlab.internalValue;
  }

  // integration_kubernetes - computed: false, optional: true, required: false
  private _integrationKubernetes = new ElastigroupAwsIntegrationKubernetesOutputReference(this, "integration_kubernetes");
  public get integrationKubernetes() {
    return this._integrationKubernetes;
  }
  public putIntegrationKubernetes(value: ElastigroupAwsIntegrationKubernetes) {
    this._integrationKubernetes.internalValue = value;
  }
  public resetIntegrationKubernetes() {
    this._integrationKubernetes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationKubernetesInput() {
    return this._integrationKubernetes.internalValue;
  }

  // integration_mesosphere - computed: false, optional: true, required: false
  private _integrationMesosphere = new ElastigroupAwsIntegrationMesosphereOutputReference(this, "integration_mesosphere");
  public get integrationMesosphere() {
    return this._integrationMesosphere;
  }
  public putIntegrationMesosphere(value: ElastigroupAwsIntegrationMesosphere) {
    this._integrationMesosphere.internalValue = value;
  }
  public resetIntegrationMesosphere() {
    this._integrationMesosphere.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationMesosphereInput() {
    return this._integrationMesosphere.internalValue;
  }

  // integration_nomad - computed: false, optional: true, required: false
  private _integrationNomad = new ElastigroupAwsIntegrationNomadOutputReference(this, "integration_nomad");
  public get integrationNomad() {
    return this._integrationNomad;
  }
  public putIntegrationNomad(value: ElastigroupAwsIntegrationNomad) {
    this._integrationNomad.internalValue = value;
  }
  public resetIntegrationNomad() {
    this._integrationNomad.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationNomadInput() {
    return this._integrationNomad.internalValue;
  }

  // integration_rancher - computed: false, optional: true, required: false
  private _integrationRancher = new ElastigroupAwsIntegrationRancherOutputReference(this, "integration_rancher");
  public get integrationRancher() {
    return this._integrationRancher;
  }
  public putIntegrationRancher(value: ElastigroupAwsIntegrationRancher) {
    this._integrationRancher.internalValue = value;
  }
  public resetIntegrationRancher() {
    this._integrationRancher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationRancherInput() {
    return this._integrationRancher.internalValue;
  }

  // integration_route53 - computed: false, optional: true, required: false
  private _integrationRoute53 = new ElastigroupAwsIntegrationRoute53OutputReference(this, "integration_route53");
  public get integrationRoute53() {
    return this._integrationRoute53;
  }
  public putIntegrationRoute53(value: ElastigroupAwsIntegrationRoute53) {
    this._integrationRoute53.internalValue = value;
  }
  public resetIntegrationRoute53() {
    this._integrationRoute53.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationRoute53Input() {
    return this._integrationRoute53.internalValue;
  }

  // itf - computed: false, optional: true, required: false
  private _itf = new ElastigroupAwsItfList(this, "itf", false);
  public get itf() {
    return this._itf;
  }
  public putItf(value: ElastigroupAwsItf[] | cdktf.IResolvable) {
    this._itf.internalValue = value;
  }
  public resetItf() {
    this._itf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itfInput() {
    return this._itf.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new ElastigroupAwsLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: ElastigroupAwsLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // metadata_options - computed: false, optional: true, required: false
  private _metadataOptions = new ElastigroupAwsMetadataOptionsOutputReference(this, "metadata_options");
  public get metadataOptions() {
    return this._metadataOptions;
  }
  public putMetadataOptions(value: ElastigroupAwsMetadataOptions) {
    this._metadataOptions.internalValue = value;
  }
  public resetMetadataOptions() {
    this._metadataOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataOptionsInput() {
    return this._metadataOptions.internalValue;
  }

  // multiple_metrics - computed: false, optional: true, required: false
  private _multipleMetrics = new ElastigroupAwsMultipleMetricsOutputReference(this, "multiple_metrics");
  public get multipleMetrics() {
    return this._multipleMetrics;
  }
  public putMultipleMetrics(value: ElastigroupAwsMultipleMetrics) {
    this._multipleMetrics.internalValue = value;
  }
  public resetMultipleMetrics() {
    this._multipleMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleMetricsInput() {
    return this._multipleMetrics.internalValue;
  }

  // network_interface - computed: false, optional: true, required: false
  private _networkInterface = new ElastigroupAwsNetworkInterfaceList(this, "network_interface", true);
  public get networkInterface() {
    return this._networkInterface;
  }
  public putNetworkInterface(value: ElastigroupAwsNetworkInterface[] | cdktf.IResolvable) {
    this._networkInterface.internalValue = value;
  }
  public resetNetworkInterface() {
    this._networkInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface.internalValue;
  }

  // resource_requirements - computed: false, optional: true, required: false
  private _resourceRequirements = new ElastigroupAwsResourceRequirementsList(this, "resource_requirements", false);
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
  public putResourceRequirements(value: ElastigroupAwsResourceRequirements[] | cdktf.IResolvable) {
    this._resourceRequirements.internalValue = value;
  }
  public resetResourceRequirements() {
    this._resourceRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRequirementsInput() {
    return this._resourceRequirements.internalValue;
  }

  // resource_tag_specification - computed: false, optional: true, required: false
  private _resourceTagSpecification = new ElastigroupAwsResourceTagSpecificationList(this, "resource_tag_specification", false);
  public get resourceTagSpecification() {
    return this._resourceTagSpecification;
  }
  public putResourceTagSpecification(value: ElastigroupAwsResourceTagSpecification[] | cdktf.IResolvable) {
    this._resourceTagSpecification.internalValue = value;
  }
  public resetResourceTagSpecification() {
    this._resourceTagSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagSpecificationInput() {
    return this._resourceTagSpecification.internalValue;
  }

  // revert_to_spot - computed: false, optional: true, required: false
  private _revertToSpot = new ElastigroupAwsRevertToSpotOutputReference(this, "revert_to_spot");
  public get revertToSpot() {
    return this._revertToSpot;
  }
  public putRevertToSpot(value: ElastigroupAwsRevertToSpot) {
    this._revertToSpot.internalValue = value;
  }
  public resetRevertToSpot() {
    this._revertToSpot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revertToSpotInput() {
    return this._revertToSpot.internalValue;
  }

  // scaling_down_policy - computed: false, optional: true, required: false
  private _scalingDownPolicy = new ElastigroupAwsScalingDownPolicyList(this, "scaling_down_policy", true);
  public get scalingDownPolicy() {
    return this._scalingDownPolicy;
  }
  public putScalingDownPolicy(value: ElastigroupAwsScalingDownPolicy[] | cdktf.IResolvable) {
    this._scalingDownPolicy.internalValue = value;
  }
  public resetScalingDownPolicy() {
    this._scalingDownPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingDownPolicyInput() {
    return this._scalingDownPolicy.internalValue;
  }

  // scaling_strategy - computed: false, optional: true, required: false
  private _scalingStrategy = new ElastigroupAwsScalingStrategyList(this, "scaling_strategy", false);
  public get scalingStrategy() {
    return this._scalingStrategy;
  }
  public putScalingStrategy(value: ElastigroupAwsScalingStrategy[] | cdktf.IResolvable) {
    this._scalingStrategy.internalValue = value;
  }
  public resetScalingStrategy() {
    this._scalingStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingStrategyInput() {
    return this._scalingStrategy.internalValue;
  }

  // scaling_target_policy - computed: false, optional: true, required: false
  private _scalingTargetPolicy = new ElastigroupAwsScalingTargetPolicyList(this, "scaling_target_policy", true);
  public get scalingTargetPolicy() {
    return this._scalingTargetPolicy;
  }
  public putScalingTargetPolicy(value: ElastigroupAwsScalingTargetPolicy[] | cdktf.IResolvable) {
    this._scalingTargetPolicy.internalValue = value;
  }
  public resetScalingTargetPolicy() {
    this._scalingTargetPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingTargetPolicyInput() {
    return this._scalingTargetPolicy.internalValue;
  }

  // scaling_up_policy - computed: false, optional: true, required: false
  private _scalingUpPolicy = new ElastigroupAwsScalingUpPolicyList(this, "scaling_up_policy", true);
  public get scalingUpPolicy() {
    return this._scalingUpPolicy;
  }
  public putScalingUpPolicy(value: ElastigroupAwsScalingUpPolicy[] | cdktf.IResolvable) {
    this._scalingUpPolicy.internalValue = value;
  }
  public resetScalingUpPolicy() {
    this._scalingUpPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingUpPolicyInput() {
    return this._scalingUpPolicy.internalValue;
  }

  // scheduled_task - computed: false, optional: true, required: false
  private _scheduledTask = new ElastigroupAwsScheduledTaskList(this, "scheduled_task", true);
  public get scheduledTask() {
    return this._scheduledTask;
  }
  public putScheduledTask(value: ElastigroupAwsScheduledTask[] | cdktf.IResolvable) {
    this._scheduledTask.internalValue = value;
  }
  public resetScheduledTask() {
    this._scheduledTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledTaskInput() {
    return this._scheduledTask.internalValue;
  }

  // signal - computed: false, optional: true, required: false
  private _signal = new ElastigroupAwsSignalList(this, "signal", true);
  public get signal() {
    return this._signal;
  }
  public putSignal(value: ElastigroupAwsSignal[] | cdktf.IResolvable) {
    this._signal.internalValue = value;
  }
  public resetSignal() {
    this._signal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalInput() {
    return this._signal.internalValue;
  }

  // stateful_deallocation - computed: false, optional: true, required: false
  private _statefulDeallocation = new ElastigroupAwsStatefulDeallocationOutputReference(this, "stateful_deallocation");
  public get statefulDeallocation() {
    return this._statefulDeallocation;
  }
  public putStatefulDeallocation(value: ElastigroupAwsStatefulDeallocation) {
    this._statefulDeallocation.internalValue = value;
  }
  public resetStatefulDeallocation() {
    this._statefulDeallocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulDeallocationInput() {
    return this._statefulDeallocation.internalValue;
  }

  // stateful_instance_action - computed: false, optional: true, required: false
  private _statefulInstanceAction = new ElastigroupAwsStatefulInstanceActionList(this, "stateful_instance_action", false);
  public get statefulInstanceAction() {
    return this._statefulInstanceAction;
  }
  public putStatefulInstanceAction(value: ElastigroupAwsStatefulInstanceAction[] | cdktf.IResolvable) {
    this._statefulInstanceAction.internalValue = value;
  }
  public resetStatefulInstanceAction() {
    this._statefulInstanceAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulInstanceActionInput() {
    return this._statefulInstanceAction.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new ElastigroupAwsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ElastigroupAwsTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // update_policy - computed: false, optional: true, required: false
  private _updatePolicy = new ElastigroupAwsUpdatePolicyOutputReference(this, "update_policy");
  public get updatePolicy() {
    return this._updatePolicy;
  }
  public putUpdatePolicy(value: ElastigroupAwsUpdatePolicy) {
    this._updatePolicy.internalValue = value;
  }
  public resetUpdatePolicy() {
    this._updatePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePolicyInput() {
    return this._updatePolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_healing: cdktf.booleanToTerraform(this._autoHealing),
      availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availabilityZones),
      block_devices_mode: cdktf.stringToTerraform(this._blockDevicesMode),
      capacity_unit: cdktf.stringToTerraform(this._capacityUnit),
      consider_od_pricing: cdktf.booleanToTerraform(this._considerOdPricing),
      cpu_credits: cdktf.stringToTerraform(this._cpuCredits),
      description: cdktf.stringToTerraform(this._description),
      desired_capacity: cdktf.numberToTerraform(this._desiredCapacity),
      draining_timeout: cdktf.numberToTerraform(this._drainingTimeout),
      ebs_optimized: cdktf.booleanToTerraform(this._ebsOptimized),
      elastic_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._elasticIps),
      elastic_load_balancers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._elasticLoadBalancers),
      enable_monitoring: cdktf.booleanToTerraform(this._enableMonitoring),
      fallback_to_ondemand: cdktf.booleanToTerraform(this._fallbackToOndemand),
      health_check_grace_period: cdktf.numberToTerraform(this._healthCheckGracePeriod),
      health_check_type: cdktf.stringToTerraform(this._healthCheckType),
      health_check_unhealthy_duration_before_replacement: cdktf.numberToTerraform(this._healthCheckUnhealthyDurationBeforeReplacement),
      iam_instance_profile: cdktf.stringToTerraform(this._iamInstanceProfile),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      immediate_od_recover_threshold: cdktf.numberToTerraform(this._immediateOdRecoverThreshold),
      instance_types_ondemand: cdktf.stringToTerraform(this._instanceTypesOndemand),
      instance_types_preferred_spot: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceTypesPreferredSpot),
      instance_types_spot: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceTypesSpot),
      key_name: cdktf.stringToTerraform(this._keyName),
      lifetime_period: cdktf.stringToTerraform(this._lifetimePeriod),
      max_replacements_percentage: cdktf.numberToTerraform(this._maxReplacementsPercentage),
      max_size: cdktf.numberToTerraform(this._maxSize),
      min_size: cdktf.numberToTerraform(this._minSize),
      minimum_instance_lifetime: cdktf.numberToTerraform(this._minimumInstanceLifetime),
      name: cdktf.stringToTerraform(this._name),
      on_demand_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._onDemandTypes),
      ondemand_count: cdktf.numberToTerraform(this._ondemandCount),
      orientation: cdktf.stringToTerraform(this._orientation),
      persist_block_devices: cdktf.booleanToTerraform(this._persistBlockDevices),
      persist_private_ip: cdktf.booleanToTerraform(this._persistPrivateIp),
      persist_root_device: cdktf.booleanToTerraform(this._persistRootDevice),
      placement_tenancy: cdktf.stringToTerraform(this._placementTenancy),
      preferred_availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preferredAvailabilityZones),
      private_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._privateIps),
      product: cdktf.stringToTerraform(this._product),
      region: cdktf.stringToTerraform(this._region),
      restrict_single_az: cdktf.booleanToTerraform(this._restrictSingleAz),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroups),
      shutdown_script: cdktf.stringToTerraform(this._shutdownScript),
      spot_percentage: cdktf.numberToTerraform(this._spotPercentage),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetIds),
      target_group_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetGroupArns),
      user_data: cdktf.stringToTerraform(this._userData),
      utilize_commitments: cdktf.booleanToTerraform(this._utilizeCommitments),
      utilize_reserved_instances: cdktf.booleanToTerraform(this._utilizeReservedInstances),
      wait_for_capacity: cdktf.numberToTerraform(this._waitForCapacity),
      wait_for_capacity_timeout: cdktf.numberToTerraform(this._waitForCapacityTimeout),
      cpu_options: elastigroupAwsCpuOptionsToTerraform(this._cpuOptions.internalValue),
      ebs_block_device: cdktf.listMapper(elastigroupAwsEbsBlockDeviceToTerraform, true)(this._ebsBlockDevice.internalValue),
      ephemeral_block_device: cdktf.listMapper(elastigroupAwsEphemeralBlockDeviceToTerraform, true)(this._ephemeralBlockDevice.internalValue),
      images: cdktf.listMapper(elastigroupAwsImagesToTerraform, true)(this._images.internalValue),
      instance_types_weights: cdktf.listMapper(elastigroupAwsInstanceTypesWeightsToTerraform, true)(this._instanceTypesWeights.internalValue),
      integration_beanstalk: elastigroupAwsIntegrationBeanstalkToTerraform(this._integrationBeanstalk.internalValue),
      integration_codedeploy: elastigroupAwsIntegrationCodedeployToTerraform(this._integrationCodedeploy.internalValue),
      integration_docker_swarm: elastigroupAwsIntegrationDockerSwarmToTerraform(this._integrationDockerSwarm.internalValue),
      integration_ecs: elastigroupAwsIntegrationEcsToTerraform(this._integrationEcs.internalValue),
      integration_gitlab: elastigroupAwsIntegrationGitlabToTerraform(this._integrationGitlab.internalValue),
      integration_kubernetes: elastigroupAwsIntegrationKubernetesToTerraform(this._integrationKubernetes.internalValue),
      integration_mesosphere: elastigroupAwsIntegrationMesosphereToTerraform(this._integrationMesosphere.internalValue),
      integration_nomad: elastigroupAwsIntegrationNomadToTerraform(this._integrationNomad.internalValue),
      integration_rancher: elastigroupAwsIntegrationRancherToTerraform(this._integrationRancher.internalValue),
      integration_route53: elastigroupAwsIntegrationRoute53ToTerraform(this._integrationRoute53.internalValue),
      itf: cdktf.listMapper(elastigroupAwsItfToTerraform, true)(this._itf.internalValue),
      logging: elastigroupAwsLoggingToTerraform(this._logging.internalValue),
      metadata_options: elastigroupAwsMetadataOptionsToTerraform(this._metadataOptions.internalValue),
      multiple_metrics: elastigroupAwsMultipleMetricsToTerraform(this._multipleMetrics.internalValue),
      network_interface: cdktf.listMapper(elastigroupAwsNetworkInterfaceToTerraform, true)(this._networkInterface.internalValue),
      resource_requirements: cdktf.listMapper(elastigroupAwsResourceRequirementsToTerraform, true)(this._resourceRequirements.internalValue),
      resource_tag_specification: cdktf.listMapper(elastigroupAwsResourceTagSpecificationToTerraform, true)(this._resourceTagSpecification.internalValue),
      revert_to_spot: elastigroupAwsRevertToSpotToTerraform(this._revertToSpot.internalValue),
      scaling_down_policy: cdktf.listMapper(elastigroupAwsScalingDownPolicyToTerraform, true)(this._scalingDownPolicy.internalValue),
      scaling_strategy: cdktf.listMapper(elastigroupAwsScalingStrategyToTerraform, true)(this._scalingStrategy.internalValue),
      scaling_target_policy: cdktf.listMapper(elastigroupAwsScalingTargetPolicyToTerraform, true)(this._scalingTargetPolicy.internalValue),
      scaling_up_policy: cdktf.listMapper(elastigroupAwsScalingUpPolicyToTerraform, true)(this._scalingUpPolicy.internalValue),
      scheduled_task: cdktf.listMapper(elastigroupAwsScheduledTaskToTerraform, true)(this._scheduledTask.internalValue),
      signal: cdktf.listMapper(elastigroupAwsSignalToTerraform, true)(this._signal.internalValue),
      stateful_deallocation: elastigroupAwsStatefulDeallocationToTerraform(this._statefulDeallocation.internalValue),
      stateful_instance_action: cdktf.listMapper(elastigroupAwsStatefulInstanceActionToTerraform, true)(this._statefulInstanceAction.internalValue),
      tags: cdktf.listMapper(elastigroupAwsTagsToTerraform, true)(this._tags.internalValue),
      update_policy: elastigroupAwsUpdatePolicyToTerraform(this._updatePolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_healing: {
        value: cdktf.booleanToHclTerraform(this._autoHealing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      availability_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._availabilityZones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      block_devices_mode: {
        value: cdktf.stringToHclTerraform(this._blockDevicesMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capacity_unit: {
        value: cdktf.stringToHclTerraform(this._capacityUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consider_od_pricing: {
        value: cdktf.booleanToHclTerraform(this._considerOdPricing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cpu_credits: {
        value: cdktf.stringToHclTerraform(this._cpuCredits),
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
      ebs_optimized: {
        value: cdktf.booleanToHclTerraform(this._ebsOptimized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      elastic_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._elasticIps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      elastic_load_balancers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._elasticLoadBalancers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      enable_monitoring: {
        value: cdktf.booleanToHclTerraform(this._enableMonitoring),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fallback_to_ondemand: {
        value: cdktf.booleanToHclTerraform(this._fallbackToOndemand),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      health_check_grace_period: {
        value: cdktf.numberToHclTerraform(this._healthCheckGracePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_type: {
        value: cdktf.stringToHclTerraform(this._healthCheckType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_unhealthy_duration_before_replacement: {
        value: cdktf.numberToHclTerraform(this._healthCheckUnhealthyDurationBeforeReplacement),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      iam_instance_profile: {
        value: cdktf.stringToHclTerraform(this._iamInstanceProfile),
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
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      immediate_od_recover_threshold: {
        value: cdktf.numberToHclTerraform(this._immediateOdRecoverThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_types_ondemand: {
        value: cdktf.stringToHclTerraform(this._instanceTypesOndemand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_types_preferred_spot: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceTypesPreferredSpot),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      instance_types_spot: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceTypesSpot),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      key_name: {
        value: cdktf.stringToHclTerraform(this._keyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lifetime_period: {
        value: cdktf.stringToHclTerraform(this._lifetimePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_replacements_percentage: {
        value: cdktf.numberToHclTerraform(this._maxReplacementsPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_size: {
        value: cdktf.numberToHclTerraform(this._maxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_size: {
        value: cdktf.numberToHclTerraform(this._minSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minimum_instance_lifetime: {
        value: cdktf.numberToHclTerraform(this._minimumInstanceLifetime),
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
      on_demand_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._onDemandTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ondemand_count: {
        value: cdktf.numberToHclTerraform(this._ondemandCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      orientation: {
        value: cdktf.stringToHclTerraform(this._orientation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persist_block_devices: {
        value: cdktf.booleanToHclTerraform(this._persistBlockDevices),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      persist_private_ip: {
        value: cdktf.booleanToHclTerraform(this._persistPrivateIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      persist_root_device: {
        value: cdktf.booleanToHclTerraform(this._persistRootDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      placement_tenancy: {
        value: cdktf.stringToHclTerraform(this._placementTenancy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_availability_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preferredAvailabilityZones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      private_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._privateIps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      product: {
        value: cdktf.stringToHclTerraform(this._product),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restrict_single_az: {
        value: cdktf.booleanToHclTerraform(this._restrictSingleAz),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      security_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      shutdown_script: {
        value: cdktf.stringToHclTerraform(this._shutdownScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spot_percentage: {
        value: cdktf.numberToHclTerraform(this._spotPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subnet_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnetIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      target_group_arns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetGroupArns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      utilize_commitments: {
        value: cdktf.booleanToHclTerraform(this._utilizeCommitments),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      utilize_reserved_instances: {
        value: cdktf.booleanToHclTerraform(this._utilizeReservedInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wait_for_capacity: {
        value: cdktf.numberToHclTerraform(this._waitForCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wait_for_capacity_timeout: {
        value: cdktf.numberToHclTerraform(this._waitForCapacityTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_options: {
        value: elastigroupAwsCpuOptionsToHclTerraform(this._cpuOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAwsCpuOptionsList",
      },
      ebs_block_device: {
        value: cdktf.listMapperHcl(elastigroupAwsEbsBlockDeviceToHclTerraform, true)(this._ebsBlockDevice.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ElastigroupAwsEbsBlockDeviceList",
      },
      ephemeral_block_device: {
        value: cdktf.listMapperHcl(elastigroupAwsEphemeralBlockDeviceToHclTerraform, true)(this._ephemeralBlockDevice.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ElastigroupAwsEphemeralBlockDeviceList",
      },
      images: {
        value: cdktf.listMapperHcl(elastigroupAwsImagesToHclTerraform, true)(this._images.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAwsImagesList",
      },
      instance_types_weights: {
        value: cdktf.listMapperHcl(elastigroupAwsInstanceTypesWeightsToHclTerraform, true)(this._instanceTypesWeights.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ElastigroupAwsInstanceTypesWeightsList",
      },
      integration_beanstalk: {
        value: elastigroupAwsIntegrationBeanstalkToHclTerraform(this._integrationBeanstalk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAwsIntegrationBeanstalkList",
      },
      integration_codedeploy: {
        value: elastigroupAwsIntegrationCodedeployToHclTerraform(this._integrationCodedeploy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAwsIntegrationCodedeployList",
      },
      integration_docker_swarm: {
        value: elastigroupAwsIntegrationDockerSwarmToHclTerraform(this._integrationDockerSwarm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAwsIntegrationDockerSwarmList",
      },
      integration_ecs: {
        value: elastigroupAwsIntegrationEcsToHclTerraform(this._integrationEcs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAwsIntegrationEcsList",
      },
      integration_gitlab: {
        value: elastigroupAwsIntegrationGitlabToHclTerraform(this._integrationGitlab.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAwsIntegrationGitlabList",
      },
      integration_kubernetes: {
        value: elastigroupAwsIntegrationKubernetesToHclTerraform(this._integrationKubernetes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAwsIntegrationKubernetesList",
      },
      integration_mesosphere: {
        value: elastigroupAwsIntegrationMesosphereToHclTerraform(this._integrationMesosphere.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAwsIntegrationMesosphereList",
      },
      integration_nomad: {
        value: elastigroupAwsIntegrationNomadToHclTerraform(this._integrationNomad.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAwsIntegrationNomadList",
      },
      integration_rancher: {
        value: elastigroupAwsIntegrationRancherToHclTerraform(this._integrationRancher.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAwsIntegrationRancherList",
      },
      integration_route53: {
        value: elastigroupAwsIntegrationRoute53ToHclTerraform(this._integrationRoute53.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAwsIntegrationRoute53List",
      },
      itf: {
        value: cdktf.listMapperHcl(elastigroupAwsItfToHclTerraform, true)(this._itf.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAwsItfList",
      },
      logging: {
        value: elastigroupAwsLoggingToHclTerraform(this._logging.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAwsLoggingList",
      },
      metadata_options: {
        value: elastigroupAwsMetadataOptionsToHclTerraform(this._metadataOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAwsMetadataOptionsList",
      },
      multiple_metrics: {
        value: elastigroupAwsMultipleMetricsToHclTerraform(this._multipleMetrics.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ElastigroupAwsMultipleMetricsList",
      },
      network_interface: {
        value: cdktf.listMapperHcl(elastigroupAwsNetworkInterfaceToHclTerraform, true)(this._networkInterface.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ElastigroupAwsNetworkInterfaceList",
      },
      resource_requirements: {
        value: cdktf.listMapperHcl(elastigroupAwsResourceRequirementsToHclTerraform, true)(this._resourceRequirements.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAwsResourceRequirementsList",
      },
      resource_tag_specification: {
        value: cdktf.listMapperHcl(elastigroupAwsResourceTagSpecificationToHclTerraform, true)(this._resourceTagSpecification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAwsResourceTagSpecificationList",
      },
      revert_to_spot: {
        value: elastigroupAwsRevertToSpotToHclTerraform(this._revertToSpot.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAwsRevertToSpotList",
      },
      scaling_down_policy: {
        value: cdktf.listMapperHcl(elastigroupAwsScalingDownPolicyToHclTerraform, true)(this._scalingDownPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ElastigroupAwsScalingDownPolicyList",
      },
      scaling_strategy: {
        value: cdktf.listMapperHcl(elastigroupAwsScalingStrategyToHclTerraform, true)(this._scalingStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAwsScalingStrategyList",
      },
      scaling_target_policy: {
        value: cdktf.listMapperHcl(elastigroupAwsScalingTargetPolicyToHclTerraform, true)(this._scalingTargetPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ElastigroupAwsScalingTargetPolicyList",
      },
      scaling_up_policy: {
        value: cdktf.listMapperHcl(elastigroupAwsScalingUpPolicyToHclTerraform, true)(this._scalingUpPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ElastigroupAwsScalingUpPolicyList",
      },
      scheduled_task: {
        value: cdktf.listMapperHcl(elastigroupAwsScheduledTaskToHclTerraform, true)(this._scheduledTask.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ElastigroupAwsScheduledTaskList",
      },
      signal: {
        value: cdktf.listMapperHcl(elastigroupAwsSignalToHclTerraform, true)(this._signal.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ElastigroupAwsSignalList",
      },
      stateful_deallocation: {
        value: elastigroupAwsStatefulDeallocationToHclTerraform(this._statefulDeallocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAwsStatefulDeallocationList",
      },
      stateful_instance_action: {
        value: cdktf.listMapperHcl(elastigroupAwsStatefulInstanceActionToHclTerraform, true)(this._statefulInstanceAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAwsStatefulInstanceActionList",
      },
      tags: {
        value: cdktf.listMapperHcl(elastigroupAwsTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ElastigroupAwsTagsList",
      },
      update_policy: {
        value: elastigroupAwsUpdatePolicyToHclTerraform(this._updatePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElastigroupAwsUpdatePolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
