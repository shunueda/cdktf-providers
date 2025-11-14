// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectCloudOrchestawstemplateAutoscaleexistingvpcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#adom ObjectCloudOrchestawstemplateAutoscaleexistingvpc#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#custom_asset_container ObjectCloudOrchestawstemplateAutoscaleexistingvpc#custom_asset_container}
  */
  readonly customAssetContainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#custom_asset_directory ObjectCloudOrchestawstemplateAutoscaleexistingvpc#custom_asset_directory}
  */
  readonly customAssetDirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#custom_identifier ObjectCloudOrchestawstemplateAutoscaleexistingvpc#custom_identifier}
  */
  readonly customIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#faz_autoscale_admin_password ObjectCloudOrchestawstemplateAutoscaleexistingvpc#faz_autoscale_admin_password}
  */
  readonly fazAutoscaleAdminPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#faz_autoscale_admin_username ObjectCloudOrchestawstemplateAutoscaleexistingvpc#faz_autoscale_admin_username}
  */
  readonly fazAutoscaleAdminUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#faz_custom_private_ipaddress ObjectCloudOrchestawstemplateAutoscaleexistingvpc#faz_custom_private_ipaddress}
  */
  readonly fazCustomPrivateIpaddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#faz_instance_type ObjectCloudOrchestawstemplateAutoscaleexistingvpc#faz_instance_type}
  */
  readonly fazInstanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#faz_integration_options ObjectCloudOrchestawstemplateAutoscaleexistingvpc#faz_integration_options}
  */
  readonly fazIntegrationOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#faz_version ObjectCloudOrchestawstemplateAutoscaleexistingvpc#faz_version}
  */
  readonly fazVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#fgt_admin_cidr ObjectCloudOrchestawstemplateAutoscaleexistingvpc#fgt_admin_cidr}
  */
  readonly fgtAdminCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#fgt_admin_port ObjectCloudOrchestawstemplateAutoscaleexistingvpc#fgt_admin_port}
  */
  readonly fgtAdminPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#fgt_instance_type ObjectCloudOrchestawstemplateAutoscaleexistingvpc#fgt_instance_type}
  */
  readonly fgtInstanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#fgt_psk_secret ObjectCloudOrchestawstemplateAutoscaleexistingvpc#fgt_psk_secret}
  */
  readonly fgtPskSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#fgtasg_cool_down ObjectCloudOrchestawstemplateAutoscaleexistingvpc#fgtasg_cool_down}
  */
  readonly fgtasgCoolDown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#fgtasg_desired_capacity_byol ObjectCloudOrchestawstemplateAutoscaleexistingvpc#fgtasg_desired_capacity_byol}
  */
  readonly fgtasgDesiredCapacityByol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#fgtasg_desired_capacity_payg ObjectCloudOrchestawstemplateAutoscaleexistingvpc#fgtasg_desired_capacity_payg}
  */
  readonly fgtasgDesiredCapacityPayg?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#fgtasg_health_check_grace_period ObjectCloudOrchestawstemplateAutoscaleexistingvpc#fgtasg_health_check_grace_period}
  */
  readonly fgtasgHealthCheckGracePeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#fgtasg_max_size_byol ObjectCloudOrchestawstemplateAutoscaleexistingvpc#fgtasg_max_size_byol}
  */
  readonly fgtasgMaxSizeByol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#fgtasg_max_size_payg ObjectCloudOrchestawstemplateAutoscaleexistingvpc#fgtasg_max_size_payg}
  */
  readonly fgtasgMaxSizePayg?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#fgtasg_min_size_byol ObjectCloudOrchestawstemplateAutoscaleexistingvpc#fgtasg_min_size_byol}
  */
  readonly fgtasgMinSizeByol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#fgtasg_min_size_payg ObjectCloudOrchestawstemplateAutoscaleexistingvpc#fgtasg_min_size_payg}
  */
  readonly fgtasgMinSizePayg?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#fgtasg_scale_in_threshold ObjectCloudOrchestawstemplateAutoscaleexistingvpc#fgtasg_scale_in_threshold}
  */
  readonly fgtasgScaleInThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#fgtasg_scale_out_threshold ObjectCloudOrchestawstemplateAutoscaleexistingvpc#fgtasg_scale_out_threshold}
  */
  readonly fgtasgScaleOutThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#fos_version ObjectCloudOrchestawstemplateAutoscaleexistingvpc#fos_version}
  */
  readonly fosVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#get_license_grace_period ObjectCloudOrchestawstemplateAutoscaleexistingvpc#get_license_grace_period}
  */
  readonly fetchLicenseGracePeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#heartbeat_delay_allowance ObjectCloudOrchestawstemplateAutoscaleexistingvpc#heartbeat_delay_allowance}
  */
  readonly heartbeatDelayAllowance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#heartbeat_interval ObjectCloudOrchestawstemplateAutoscaleexistingvpc#heartbeat_interval}
  */
  readonly heartbeatInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#heartbeat_loss_count ObjectCloudOrchestawstemplateAutoscaleexistingvpc#heartbeat_loss_count}
  */
  readonly heartbeatLossCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#id ObjectCloudOrchestawstemplateAutoscaleexistingvpc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#internal_balancer_dns_name ObjectCloudOrchestawstemplateAutoscaleexistingvpc#internal_balancer_dns_name}
  */
  readonly internalBalancerDnsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#internal_balancing_options ObjectCloudOrchestawstemplateAutoscaleexistingvpc#internal_balancing_options}
  */
  readonly internalBalancingOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#internal_target_group_health_check_path ObjectCloudOrchestawstemplateAutoscaleexistingvpc#internal_target_group_health_check_path}
  */
  readonly internalTargetGroupHealthCheckPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#key_pair_name ObjectCloudOrchestawstemplateAutoscaleexistingvpc#key_pair_name}
  */
  readonly keyPairName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#lifecycle_hook_timeout ObjectCloudOrchestawstemplateAutoscaleexistingvpc#lifecycle_hook_timeout}
  */
  readonly lifecycleHookTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#loadbalancing_health_check_threshold ObjectCloudOrchestawstemplateAutoscaleexistingvpc#loadbalancing_health_check_threshold}
  */
  readonly loadbalancingHealthCheckThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#loadbalancing_traffic_port ObjectCloudOrchestawstemplateAutoscaleexistingvpc#loadbalancing_traffic_port}
  */
  readonly loadbalancingTrafficPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#loadbalancing_traffic_protocol ObjectCloudOrchestawstemplateAutoscaleexistingvpc#loadbalancing_traffic_protocol}
  */
  readonly loadbalancingTrafficProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#name ObjectCloudOrchestawstemplateAutoscaleexistingvpc#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#notification_email ObjectCloudOrchestawstemplateAutoscaleexistingvpc#notification_email}
  */
  readonly notificationEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#primary_election_timeout ObjectCloudOrchestawstemplateAutoscaleexistingvpc#primary_election_timeout}
  */
  readonly primaryElectionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#private_subnet1 ObjectCloudOrchestawstemplateAutoscaleexistingvpc#private_subnet1}
  */
  readonly privateSubnet1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#private_subnet2 ObjectCloudOrchestawstemplateAutoscaleexistingvpc#private_subnet2}
  */
  readonly privateSubnet2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#private_subnet_route_table ObjectCloudOrchestawstemplateAutoscaleexistingvpc#private_subnet_route_table}
  */
  readonly privateSubnetRouteTable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#public_subnet1 ObjectCloudOrchestawstemplateAutoscaleexistingvpc#public_subnet1}
  */
  readonly publicSubnet1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#public_subnet2 ObjectCloudOrchestawstemplateAutoscaleexistingvpc#public_subnet2}
  */
  readonly publicSubnet2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#resource_tag_prefix ObjectCloudOrchestawstemplateAutoscaleexistingvpc#resource_tag_prefix}
  */
  readonly resourceTagPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#s3_bucket_name ObjectCloudOrchestawstemplateAutoscaleexistingvpc#s3_bucket_name}
  */
  readonly s3BucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#s3_key_prefix ObjectCloudOrchestawstemplateAutoscaleexistingvpc#s3_key_prefix}
  */
  readonly s3KeyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#scopetype ObjectCloudOrchestawstemplateAutoscaleexistingvpc#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#sync_recovery_count ObjectCloudOrchestawstemplateAutoscaleexistingvpc#sync_recovery_count}
  */
  readonly syncRecoveryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#terminate_unhealthy_vm ObjectCloudOrchestawstemplateAutoscaleexistingvpc#terminate_unhealthy_vm}
  */
  readonly terminateUnhealthyVm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#use_custom_asset_location ObjectCloudOrchestawstemplateAutoscaleexistingvpc#use_custom_asset_location}
  */
  readonly useCustomAssetLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#vpc_cidr ObjectCloudOrchestawstemplateAutoscaleexistingvpc#vpc_cidr}
  */
  readonly vpcCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#vpc_endpoint_id ObjectCloudOrchestawstemplateAutoscaleexistingvpc#vpc_endpoint_id}
  */
  readonly vpcEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#vpc_id ObjectCloudOrchestawstemplateAutoscaleexistingvpc#vpc_id}
  */
  readonly vpcId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc fortimanager_object_cloud_orchestawstemplate_autoscaleexistingvpc}
*/
export class ObjectCloudOrchestawstemplateAutoscaleexistingvpc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_cloud_orchestawstemplate_autoscaleexistingvpc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectCloudOrchestawstemplateAutoscaleexistingvpc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectCloudOrchestawstemplateAutoscaleexistingvpc to import
  * @param importFromId The id of the existing ObjectCloudOrchestawstemplateAutoscaleexistingvpc that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectCloudOrchestawstemplateAutoscaleexistingvpc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_cloud_orchestawstemplate_autoscaleexistingvpc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawstemplate_autoscaleexistingvpc fortimanager_object_cloud_orchestawstemplate_autoscaleexistingvpc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectCloudOrchestawstemplateAutoscaleexistingvpcConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectCloudOrchestawstemplateAutoscaleexistingvpcConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_cloud_orchestawstemplate_autoscaleexistingvpc',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._customAssetContainer = config.customAssetContainer;
    this._customAssetDirectory = config.customAssetDirectory;
    this._customIdentifier = config.customIdentifier;
    this._fazAutoscaleAdminPassword = config.fazAutoscaleAdminPassword;
    this._fazAutoscaleAdminUsername = config.fazAutoscaleAdminUsername;
    this._fazCustomPrivateIpaddress = config.fazCustomPrivateIpaddress;
    this._fazInstanceType = config.fazInstanceType;
    this._fazIntegrationOptions = config.fazIntegrationOptions;
    this._fazVersion = config.fazVersion;
    this._fgtAdminCidr = config.fgtAdminCidr;
    this._fgtAdminPort = config.fgtAdminPort;
    this._fgtInstanceType = config.fgtInstanceType;
    this._fgtPskSecret = config.fgtPskSecret;
    this._fgtasgCoolDown = config.fgtasgCoolDown;
    this._fgtasgDesiredCapacityByol = config.fgtasgDesiredCapacityByol;
    this._fgtasgDesiredCapacityPayg = config.fgtasgDesiredCapacityPayg;
    this._fgtasgHealthCheckGracePeriod = config.fgtasgHealthCheckGracePeriod;
    this._fgtasgMaxSizeByol = config.fgtasgMaxSizeByol;
    this._fgtasgMaxSizePayg = config.fgtasgMaxSizePayg;
    this._fgtasgMinSizeByol = config.fgtasgMinSizeByol;
    this._fgtasgMinSizePayg = config.fgtasgMinSizePayg;
    this._fgtasgScaleInThreshold = config.fgtasgScaleInThreshold;
    this._fgtasgScaleOutThreshold = config.fgtasgScaleOutThreshold;
    this._fosVersion = config.fosVersion;
    this._getLicenseGracePeriod = config.fetchLicenseGracePeriod;
    this._heartbeatDelayAllowance = config.heartbeatDelayAllowance;
    this._heartbeatInterval = config.heartbeatInterval;
    this._heartbeatLossCount = config.heartbeatLossCount;
    this._id = config.id;
    this._internalBalancerDnsName = config.internalBalancerDnsName;
    this._internalBalancingOptions = config.internalBalancingOptions;
    this._internalTargetGroupHealthCheckPath = config.internalTargetGroupHealthCheckPath;
    this._keyPairName = config.keyPairName;
    this._lifecycleHookTimeout = config.lifecycleHookTimeout;
    this._loadbalancingHealthCheckThreshold = config.loadbalancingHealthCheckThreshold;
    this._loadbalancingTrafficPort = config.loadbalancingTrafficPort;
    this._loadbalancingTrafficProtocol = config.loadbalancingTrafficProtocol;
    this._name = config.name;
    this._notificationEmail = config.notificationEmail;
    this._primaryElectionTimeout = config.primaryElectionTimeout;
    this._privateSubnet1 = config.privateSubnet1;
    this._privateSubnet2 = config.privateSubnet2;
    this._privateSubnetRouteTable = config.privateSubnetRouteTable;
    this._publicSubnet1 = config.publicSubnet1;
    this._publicSubnet2 = config.publicSubnet2;
    this._resourceTagPrefix = config.resourceTagPrefix;
    this._s3BucketName = config.s3BucketName;
    this._s3KeyPrefix = config.s3KeyPrefix;
    this._scopetype = config.scopetype;
    this._syncRecoveryCount = config.syncRecoveryCount;
    this._terminateUnhealthyVm = config.terminateUnhealthyVm;
    this._useCustomAssetLocation = config.useCustomAssetLocation;
    this._vpcCidr = config.vpcCidr;
    this._vpcEndpointId = config.vpcEndpointId;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // custom_asset_container - computed: false, optional: true, required: false
  private _customAssetContainer?: string; 
  public get customAssetContainer() {
    return this.getStringAttribute('custom_asset_container');
  }
  public set customAssetContainer(value: string) {
    this._customAssetContainer = value;
  }
  public resetCustomAssetContainer() {
    this._customAssetContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAssetContainerInput() {
    return this._customAssetContainer;
  }

  // custom_asset_directory - computed: false, optional: true, required: false
  private _customAssetDirectory?: string; 
  public get customAssetDirectory() {
    return this.getStringAttribute('custom_asset_directory');
  }
  public set customAssetDirectory(value: string) {
    this._customAssetDirectory = value;
  }
  public resetCustomAssetDirectory() {
    this._customAssetDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAssetDirectoryInput() {
    return this._customAssetDirectory;
  }

  // custom_identifier - computed: true, optional: true, required: false
  private _customIdentifier?: string; 
  public get customIdentifier() {
    return this.getStringAttribute('custom_identifier');
  }
  public set customIdentifier(value: string) {
    this._customIdentifier = value;
  }
  public resetCustomIdentifier() {
    this._customIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customIdentifierInput() {
    return this._customIdentifier;
  }

  // faz_autoscale_admin_password - computed: true, optional: true, required: false
  private _fazAutoscaleAdminPassword?: string[]; 
  public get fazAutoscaleAdminPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('faz_autoscale_admin_password'));
  }
  public set fazAutoscaleAdminPassword(value: string[]) {
    this._fazAutoscaleAdminPassword = value;
  }
  public resetFazAutoscaleAdminPassword() {
    this._fazAutoscaleAdminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fazAutoscaleAdminPasswordInput() {
    return this._fazAutoscaleAdminPassword;
  }

  // faz_autoscale_admin_username - computed: false, optional: true, required: false
  private _fazAutoscaleAdminUsername?: string; 
  public get fazAutoscaleAdminUsername() {
    return this.getStringAttribute('faz_autoscale_admin_username');
  }
  public set fazAutoscaleAdminUsername(value: string) {
    this._fazAutoscaleAdminUsername = value;
  }
  public resetFazAutoscaleAdminUsername() {
    this._fazAutoscaleAdminUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fazAutoscaleAdminUsernameInput() {
    return this._fazAutoscaleAdminUsername;
  }

  // faz_custom_private_ipaddress - computed: false, optional: true, required: false
  private _fazCustomPrivateIpaddress?: string; 
  public get fazCustomPrivateIpaddress() {
    return this.getStringAttribute('faz_custom_private_ipaddress');
  }
  public set fazCustomPrivateIpaddress(value: string) {
    this._fazCustomPrivateIpaddress = value;
  }
  public resetFazCustomPrivateIpaddress() {
    this._fazCustomPrivateIpaddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fazCustomPrivateIpaddressInput() {
    return this._fazCustomPrivateIpaddress;
  }

  // faz_instance_type - computed: true, optional: true, required: false
  private _fazInstanceType?: string; 
  public get fazInstanceType() {
    return this.getStringAttribute('faz_instance_type');
  }
  public set fazInstanceType(value: string) {
    this._fazInstanceType = value;
  }
  public resetFazInstanceType() {
    this._fazInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fazInstanceTypeInput() {
    return this._fazInstanceType;
  }

  // faz_integration_options - computed: true, optional: true, required: false
  private _fazIntegrationOptions?: string; 
  public get fazIntegrationOptions() {
    return this.getStringAttribute('faz_integration_options');
  }
  public set fazIntegrationOptions(value: string) {
    this._fazIntegrationOptions = value;
  }
  public resetFazIntegrationOptions() {
    this._fazIntegrationOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fazIntegrationOptionsInput() {
    return this._fazIntegrationOptions;
  }

  // faz_version - computed: true, optional: true, required: false
  private _fazVersion?: string; 
  public get fazVersion() {
    return this.getStringAttribute('faz_version');
  }
  public set fazVersion(value: string) {
    this._fazVersion = value;
  }
  public resetFazVersion() {
    this._fazVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fazVersionInput() {
    return this._fazVersion;
  }

  // fgt_admin_cidr - computed: true, optional: true, required: false
  private _fgtAdminCidr?: string; 
  public get fgtAdminCidr() {
    return this.getStringAttribute('fgt_admin_cidr');
  }
  public set fgtAdminCidr(value: string) {
    this._fgtAdminCidr = value;
  }
  public resetFgtAdminCidr() {
    this._fgtAdminCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgtAdminCidrInput() {
    return this._fgtAdminCidr;
  }

  // fgt_admin_port - computed: true, optional: true, required: false
  private _fgtAdminPort?: number; 
  public get fgtAdminPort() {
    return this.getNumberAttribute('fgt_admin_port');
  }
  public set fgtAdminPort(value: number) {
    this._fgtAdminPort = value;
  }
  public resetFgtAdminPort() {
    this._fgtAdminPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgtAdminPortInput() {
    return this._fgtAdminPort;
  }

  // fgt_instance_type - computed: true, optional: true, required: false
  private _fgtInstanceType?: string; 
  public get fgtInstanceType() {
    return this.getStringAttribute('fgt_instance_type');
  }
  public set fgtInstanceType(value: string) {
    this._fgtInstanceType = value;
  }
  public resetFgtInstanceType() {
    this._fgtInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgtInstanceTypeInput() {
    return this._fgtInstanceType;
  }

  // fgt_psk_secret - computed: true, optional: true, required: false
  private _fgtPskSecret?: string; 
  public get fgtPskSecret() {
    return this.getStringAttribute('fgt_psk_secret');
  }
  public set fgtPskSecret(value: string) {
    this._fgtPskSecret = value;
  }
  public resetFgtPskSecret() {
    this._fgtPskSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgtPskSecretInput() {
    return this._fgtPskSecret;
  }

  // fgtasg_cool_down - computed: true, optional: true, required: false
  private _fgtasgCoolDown?: number; 
  public get fgtasgCoolDown() {
    return this.getNumberAttribute('fgtasg_cool_down');
  }
  public set fgtasgCoolDown(value: number) {
    this._fgtasgCoolDown = value;
  }
  public resetFgtasgCoolDown() {
    this._fgtasgCoolDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgtasgCoolDownInput() {
    return this._fgtasgCoolDown;
  }

  // fgtasg_desired_capacity_byol - computed: true, optional: true, required: false
  private _fgtasgDesiredCapacityByol?: number; 
  public get fgtasgDesiredCapacityByol() {
    return this.getNumberAttribute('fgtasg_desired_capacity_byol');
  }
  public set fgtasgDesiredCapacityByol(value: number) {
    this._fgtasgDesiredCapacityByol = value;
  }
  public resetFgtasgDesiredCapacityByol() {
    this._fgtasgDesiredCapacityByol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgtasgDesiredCapacityByolInput() {
    return this._fgtasgDesiredCapacityByol;
  }

  // fgtasg_desired_capacity_payg - computed: false, optional: true, required: false
  private _fgtasgDesiredCapacityPayg?: number; 
  public get fgtasgDesiredCapacityPayg() {
    return this.getNumberAttribute('fgtasg_desired_capacity_payg');
  }
  public set fgtasgDesiredCapacityPayg(value: number) {
    this._fgtasgDesiredCapacityPayg = value;
  }
  public resetFgtasgDesiredCapacityPayg() {
    this._fgtasgDesiredCapacityPayg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgtasgDesiredCapacityPaygInput() {
    return this._fgtasgDesiredCapacityPayg;
  }

  // fgtasg_health_check_grace_period - computed: true, optional: true, required: false
  private _fgtasgHealthCheckGracePeriod?: number; 
  public get fgtasgHealthCheckGracePeriod() {
    return this.getNumberAttribute('fgtasg_health_check_grace_period');
  }
  public set fgtasgHealthCheckGracePeriod(value: number) {
    this._fgtasgHealthCheckGracePeriod = value;
  }
  public resetFgtasgHealthCheckGracePeriod() {
    this._fgtasgHealthCheckGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgtasgHealthCheckGracePeriodInput() {
    return this._fgtasgHealthCheckGracePeriod;
  }

  // fgtasg_max_size_byol - computed: true, optional: true, required: false
  private _fgtasgMaxSizeByol?: number; 
  public get fgtasgMaxSizeByol() {
    return this.getNumberAttribute('fgtasg_max_size_byol');
  }
  public set fgtasgMaxSizeByol(value: number) {
    this._fgtasgMaxSizeByol = value;
  }
  public resetFgtasgMaxSizeByol() {
    this._fgtasgMaxSizeByol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgtasgMaxSizeByolInput() {
    return this._fgtasgMaxSizeByol;
  }

  // fgtasg_max_size_payg - computed: true, optional: true, required: false
  private _fgtasgMaxSizePayg?: number; 
  public get fgtasgMaxSizePayg() {
    return this.getNumberAttribute('fgtasg_max_size_payg');
  }
  public set fgtasgMaxSizePayg(value: number) {
    this._fgtasgMaxSizePayg = value;
  }
  public resetFgtasgMaxSizePayg() {
    this._fgtasgMaxSizePayg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgtasgMaxSizePaygInput() {
    return this._fgtasgMaxSizePayg;
  }

  // fgtasg_min_size_byol - computed: true, optional: true, required: false
  private _fgtasgMinSizeByol?: number; 
  public get fgtasgMinSizeByol() {
    return this.getNumberAttribute('fgtasg_min_size_byol');
  }
  public set fgtasgMinSizeByol(value: number) {
    this._fgtasgMinSizeByol = value;
  }
  public resetFgtasgMinSizeByol() {
    this._fgtasgMinSizeByol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgtasgMinSizeByolInput() {
    return this._fgtasgMinSizeByol;
  }

  // fgtasg_min_size_payg - computed: false, optional: true, required: false
  private _fgtasgMinSizePayg?: number; 
  public get fgtasgMinSizePayg() {
    return this.getNumberAttribute('fgtasg_min_size_payg');
  }
  public set fgtasgMinSizePayg(value: number) {
    this._fgtasgMinSizePayg = value;
  }
  public resetFgtasgMinSizePayg() {
    this._fgtasgMinSizePayg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgtasgMinSizePaygInput() {
    return this._fgtasgMinSizePayg;
  }

  // fgtasg_scale_in_threshold - computed: true, optional: true, required: false
  private _fgtasgScaleInThreshold?: number; 
  public get fgtasgScaleInThreshold() {
    return this.getNumberAttribute('fgtasg_scale_in_threshold');
  }
  public set fgtasgScaleInThreshold(value: number) {
    this._fgtasgScaleInThreshold = value;
  }
  public resetFgtasgScaleInThreshold() {
    this._fgtasgScaleInThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgtasgScaleInThresholdInput() {
    return this._fgtasgScaleInThreshold;
  }

  // fgtasg_scale_out_threshold - computed: true, optional: true, required: false
  private _fgtasgScaleOutThreshold?: number; 
  public get fgtasgScaleOutThreshold() {
    return this.getNumberAttribute('fgtasg_scale_out_threshold');
  }
  public set fgtasgScaleOutThreshold(value: number) {
    this._fgtasgScaleOutThreshold = value;
  }
  public resetFgtasgScaleOutThreshold() {
    this._fgtasgScaleOutThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgtasgScaleOutThresholdInput() {
    return this._fgtasgScaleOutThreshold;
  }

  // fos_version - computed: true, optional: true, required: false
  private _fosVersion?: string; 
  public get fosVersion() {
    return this.getStringAttribute('fos_version');
  }
  public set fosVersion(value: string) {
    this._fosVersion = value;
  }
  public resetFosVersion() {
    this._fosVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosVersionInput() {
    return this._fosVersion;
  }

  // get_license_grace_period - computed: true, optional: true, required: false
  private _getLicenseGracePeriod?: number; 
  public get fetchLicenseGracePeriod() {
    return this.getNumberAttribute('get_license_grace_period');
  }
  public set fetchLicenseGracePeriod(value: number) {
    this._getLicenseGracePeriod = value;
  }
  public resetFetchLicenseGracePeriod() {
    this._getLicenseGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchLicenseGracePeriodInput() {
    return this._getLicenseGracePeriod;
  }

  // heartbeat_delay_allowance - computed: true, optional: true, required: false
  private _heartbeatDelayAllowance?: number; 
  public get heartbeatDelayAllowance() {
    return this.getNumberAttribute('heartbeat_delay_allowance');
  }
  public set heartbeatDelayAllowance(value: number) {
    this._heartbeatDelayAllowance = value;
  }
  public resetHeartbeatDelayAllowance() {
    this._heartbeatDelayAllowance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heartbeatDelayAllowanceInput() {
    return this._heartbeatDelayAllowance;
  }

  // heartbeat_interval - computed: true, optional: true, required: false
  private _heartbeatInterval?: number; 
  public get heartbeatInterval() {
    return this.getNumberAttribute('heartbeat_interval');
  }
  public set heartbeatInterval(value: number) {
    this._heartbeatInterval = value;
  }
  public resetHeartbeatInterval() {
    this._heartbeatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heartbeatIntervalInput() {
    return this._heartbeatInterval;
  }

  // heartbeat_loss_count - computed: true, optional: true, required: false
  private _heartbeatLossCount?: number; 
  public get heartbeatLossCount() {
    return this.getNumberAttribute('heartbeat_loss_count');
  }
  public set heartbeatLossCount(value: number) {
    this._heartbeatLossCount = value;
  }
  public resetHeartbeatLossCount() {
    this._heartbeatLossCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heartbeatLossCountInput() {
    return this._heartbeatLossCount;
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

  // internal_balancer_dns_name - computed: false, optional: true, required: false
  private _internalBalancerDnsName?: string; 
  public get internalBalancerDnsName() {
    return this.getStringAttribute('internal_balancer_dns_name');
  }
  public set internalBalancerDnsName(value: string) {
    this._internalBalancerDnsName = value;
  }
  public resetInternalBalancerDnsName() {
    this._internalBalancerDnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalBalancerDnsNameInput() {
    return this._internalBalancerDnsName;
  }

  // internal_balancing_options - computed: true, optional: true, required: false
  private _internalBalancingOptions?: string; 
  public get internalBalancingOptions() {
    return this.getStringAttribute('internal_balancing_options');
  }
  public set internalBalancingOptions(value: string) {
    this._internalBalancingOptions = value;
  }
  public resetInternalBalancingOptions() {
    this._internalBalancingOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalBalancingOptionsInput() {
    return this._internalBalancingOptions;
  }

  // internal_target_group_health_check_path - computed: true, optional: true, required: false
  private _internalTargetGroupHealthCheckPath?: string; 
  public get internalTargetGroupHealthCheckPath() {
    return this.getStringAttribute('internal_target_group_health_check_path');
  }
  public set internalTargetGroupHealthCheckPath(value: string) {
    this._internalTargetGroupHealthCheckPath = value;
  }
  public resetInternalTargetGroupHealthCheckPath() {
    this._internalTargetGroupHealthCheckPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalTargetGroupHealthCheckPathInput() {
    return this._internalTargetGroupHealthCheckPath;
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

  // lifecycle_hook_timeout - computed: true, optional: true, required: false
  private _lifecycleHookTimeout?: number; 
  public get lifecycleHookTimeout() {
    return this.getNumberAttribute('lifecycle_hook_timeout');
  }
  public set lifecycleHookTimeout(value: number) {
    this._lifecycleHookTimeout = value;
  }
  public resetLifecycleHookTimeout() {
    this._lifecycleHookTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleHookTimeoutInput() {
    return this._lifecycleHookTimeout;
  }

  // loadbalancing_health_check_threshold - computed: true, optional: true, required: false
  private _loadbalancingHealthCheckThreshold?: number; 
  public get loadbalancingHealthCheckThreshold() {
    return this.getNumberAttribute('loadbalancing_health_check_threshold');
  }
  public set loadbalancingHealthCheckThreshold(value: number) {
    this._loadbalancingHealthCheckThreshold = value;
  }
  public resetLoadbalancingHealthCheckThreshold() {
    this._loadbalancingHealthCheckThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancingHealthCheckThresholdInput() {
    return this._loadbalancingHealthCheckThreshold;
  }

  // loadbalancing_traffic_port - computed: true, optional: true, required: false
  private _loadbalancingTrafficPort?: number; 
  public get loadbalancingTrafficPort() {
    return this.getNumberAttribute('loadbalancing_traffic_port');
  }
  public set loadbalancingTrafficPort(value: number) {
    this._loadbalancingTrafficPort = value;
  }
  public resetLoadbalancingTrafficPort() {
    this._loadbalancingTrafficPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancingTrafficPortInput() {
    return this._loadbalancingTrafficPort;
  }

  // loadbalancing_traffic_protocol - computed: true, optional: true, required: false
  private _loadbalancingTrafficProtocol?: string; 
  public get loadbalancingTrafficProtocol() {
    return this.getStringAttribute('loadbalancing_traffic_protocol');
  }
  public set loadbalancingTrafficProtocol(value: string) {
    this._loadbalancingTrafficProtocol = value;
  }
  public resetLoadbalancingTrafficProtocol() {
    this._loadbalancingTrafficProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancingTrafficProtocolInput() {
    return this._loadbalancingTrafficProtocol;
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

  // notification_email - computed: false, optional: true, required: false
  private _notificationEmail?: string; 
  public get notificationEmail() {
    return this.getStringAttribute('notification_email');
  }
  public set notificationEmail(value: string) {
    this._notificationEmail = value;
  }
  public resetNotificationEmail() {
    this._notificationEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationEmailInput() {
    return this._notificationEmail;
  }

  // primary_election_timeout - computed: true, optional: true, required: false
  private _primaryElectionTimeout?: number; 
  public get primaryElectionTimeout() {
    return this.getNumberAttribute('primary_election_timeout');
  }
  public set primaryElectionTimeout(value: number) {
    this._primaryElectionTimeout = value;
  }
  public resetPrimaryElectionTimeout() {
    this._primaryElectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryElectionTimeoutInput() {
    return this._primaryElectionTimeout;
  }

  // private_subnet1 - computed: false, optional: true, required: false
  private _privateSubnet1?: string; 
  public get privateSubnet1() {
    return this.getStringAttribute('private_subnet1');
  }
  public set privateSubnet1(value: string) {
    this._privateSubnet1 = value;
  }
  public resetPrivateSubnet1() {
    this._privateSubnet1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateSubnet1Input() {
    return this._privateSubnet1;
  }

  // private_subnet2 - computed: false, optional: true, required: false
  private _privateSubnet2?: string; 
  public get privateSubnet2() {
    return this.getStringAttribute('private_subnet2');
  }
  public set privateSubnet2(value: string) {
    this._privateSubnet2 = value;
  }
  public resetPrivateSubnet2() {
    this._privateSubnet2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateSubnet2Input() {
    return this._privateSubnet2;
  }

  // private_subnet_route_table - computed: false, optional: true, required: false
  private _privateSubnetRouteTable?: string; 
  public get privateSubnetRouteTable() {
    return this.getStringAttribute('private_subnet_route_table');
  }
  public set privateSubnetRouteTable(value: string) {
    this._privateSubnetRouteTable = value;
  }
  public resetPrivateSubnetRouteTable() {
    this._privateSubnetRouteTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateSubnetRouteTableInput() {
    return this._privateSubnetRouteTable;
  }

  // public_subnet1 - computed: false, optional: true, required: false
  private _publicSubnet1?: string; 
  public get publicSubnet1() {
    return this.getStringAttribute('public_subnet1');
  }
  public set publicSubnet1(value: string) {
    this._publicSubnet1 = value;
  }
  public resetPublicSubnet1() {
    this._publicSubnet1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicSubnet1Input() {
    return this._publicSubnet1;
  }

  // public_subnet2 - computed: false, optional: true, required: false
  private _publicSubnet2?: string; 
  public get publicSubnet2() {
    return this.getStringAttribute('public_subnet2');
  }
  public set publicSubnet2(value: string) {
    this._publicSubnet2 = value;
  }
  public resetPublicSubnet2() {
    this._publicSubnet2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicSubnet2Input() {
    return this._publicSubnet2;
  }

  // resource_tag_prefix - computed: false, optional: true, required: false
  private _resourceTagPrefix?: string; 
  public get resourceTagPrefix() {
    return this.getStringAttribute('resource_tag_prefix');
  }
  public set resourceTagPrefix(value: string) {
    this._resourceTagPrefix = value;
  }
  public resetResourceTagPrefix() {
    this._resourceTagPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagPrefixInput() {
    return this._resourceTagPrefix;
  }

  // s3_bucket_name - computed: false, optional: true, required: false
  private _s3BucketName?: string; 
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  public resetS3BucketName() {
    this._s3BucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName;
  }

  // s3_key_prefix - computed: false, optional: true, required: false
  private _s3KeyPrefix?: string; 
  public get s3KeyPrefix() {
    return this.getStringAttribute('s3_key_prefix');
  }
  public set s3KeyPrefix(value: string) {
    this._s3KeyPrefix = value;
  }
  public resetS3KeyPrefix() {
    this._s3KeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyPrefixInput() {
    return this._s3KeyPrefix;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // sync_recovery_count - computed: true, optional: true, required: false
  private _syncRecoveryCount?: number; 
  public get syncRecoveryCount() {
    return this.getNumberAttribute('sync_recovery_count');
  }
  public set syncRecoveryCount(value: number) {
    this._syncRecoveryCount = value;
  }
  public resetSyncRecoveryCount() {
    this._syncRecoveryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRecoveryCountInput() {
    return this._syncRecoveryCount;
  }

  // terminate_unhealthy_vm - computed: true, optional: true, required: false
  private _terminateUnhealthyVm?: string; 
  public get terminateUnhealthyVm() {
    return this.getStringAttribute('terminate_unhealthy_vm');
  }
  public set terminateUnhealthyVm(value: string) {
    this._terminateUnhealthyVm = value;
  }
  public resetTerminateUnhealthyVm() {
    this._terminateUnhealthyVm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminateUnhealthyVmInput() {
    return this._terminateUnhealthyVm;
  }

  // use_custom_asset_location - computed: true, optional: true, required: false
  private _useCustomAssetLocation?: string; 
  public get useCustomAssetLocation() {
    return this.getStringAttribute('use_custom_asset_location');
  }
  public set useCustomAssetLocation(value: string) {
    this._useCustomAssetLocation = value;
  }
  public resetUseCustomAssetLocation() {
    this._useCustomAssetLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCustomAssetLocationInput() {
    return this._useCustomAssetLocation;
  }

  // vpc_cidr - computed: false, optional: true, required: false
  private _vpcCidr?: string; 
  public get vpcCidr() {
    return this.getStringAttribute('vpc_cidr');
  }
  public set vpcCidr(value: string) {
    this._vpcCidr = value;
  }
  public resetVpcCidr() {
    this._vpcCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcCidrInput() {
    return this._vpcCidr;
  }

  // vpc_endpoint_id - computed: false, optional: true, required: false
  private _vpcEndpointId?: string; 
  public get vpcEndpointId() {
    return this.getStringAttribute('vpc_endpoint_id');
  }
  public set vpcEndpointId(value: string) {
    this._vpcEndpointId = value;
  }
  public resetVpcEndpointId() {
    this._vpcEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointIdInput() {
    return this._vpcEndpointId;
  }

  // vpc_id - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      custom_asset_container: cdktf.stringToTerraform(this._customAssetContainer),
      custom_asset_directory: cdktf.stringToTerraform(this._customAssetDirectory),
      custom_identifier: cdktf.stringToTerraform(this._customIdentifier),
      faz_autoscale_admin_password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fazAutoscaleAdminPassword),
      faz_autoscale_admin_username: cdktf.stringToTerraform(this._fazAutoscaleAdminUsername),
      faz_custom_private_ipaddress: cdktf.stringToTerraform(this._fazCustomPrivateIpaddress),
      faz_instance_type: cdktf.stringToTerraform(this._fazInstanceType),
      faz_integration_options: cdktf.stringToTerraform(this._fazIntegrationOptions),
      faz_version: cdktf.stringToTerraform(this._fazVersion),
      fgt_admin_cidr: cdktf.stringToTerraform(this._fgtAdminCidr),
      fgt_admin_port: cdktf.numberToTerraform(this._fgtAdminPort),
      fgt_instance_type: cdktf.stringToTerraform(this._fgtInstanceType),
      fgt_psk_secret: cdktf.stringToTerraform(this._fgtPskSecret),
      fgtasg_cool_down: cdktf.numberToTerraform(this._fgtasgCoolDown),
      fgtasg_desired_capacity_byol: cdktf.numberToTerraform(this._fgtasgDesiredCapacityByol),
      fgtasg_desired_capacity_payg: cdktf.numberToTerraform(this._fgtasgDesiredCapacityPayg),
      fgtasg_health_check_grace_period: cdktf.numberToTerraform(this._fgtasgHealthCheckGracePeriod),
      fgtasg_max_size_byol: cdktf.numberToTerraform(this._fgtasgMaxSizeByol),
      fgtasg_max_size_payg: cdktf.numberToTerraform(this._fgtasgMaxSizePayg),
      fgtasg_min_size_byol: cdktf.numberToTerraform(this._fgtasgMinSizeByol),
      fgtasg_min_size_payg: cdktf.numberToTerraform(this._fgtasgMinSizePayg),
      fgtasg_scale_in_threshold: cdktf.numberToTerraform(this._fgtasgScaleInThreshold),
      fgtasg_scale_out_threshold: cdktf.numberToTerraform(this._fgtasgScaleOutThreshold),
      fos_version: cdktf.stringToTerraform(this._fosVersion),
      get_license_grace_period: cdktf.numberToTerraform(this._getLicenseGracePeriod),
      heartbeat_delay_allowance: cdktf.numberToTerraform(this._heartbeatDelayAllowance),
      heartbeat_interval: cdktf.numberToTerraform(this._heartbeatInterval),
      heartbeat_loss_count: cdktf.numberToTerraform(this._heartbeatLossCount),
      id: cdktf.stringToTerraform(this._id),
      internal_balancer_dns_name: cdktf.stringToTerraform(this._internalBalancerDnsName),
      internal_balancing_options: cdktf.stringToTerraform(this._internalBalancingOptions),
      internal_target_group_health_check_path: cdktf.stringToTerraform(this._internalTargetGroupHealthCheckPath),
      key_pair_name: cdktf.stringToTerraform(this._keyPairName),
      lifecycle_hook_timeout: cdktf.numberToTerraform(this._lifecycleHookTimeout),
      loadbalancing_health_check_threshold: cdktf.numberToTerraform(this._loadbalancingHealthCheckThreshold),
      loadbalancing_traffic_port: cdktf.numberToTerraform(this._loadbalancingTrafficPort),
      loadbalancing_traffic_protocol: cdktf.stringToTerraform(this._loadbalancingTrafficProtocol),
      name: cdktf.stringToTerraform(this._name),
      notification_email: cdktf.stringToTerraform(this._notificationEmail),
      primary_election_timeout: cdktf.numberToTerraform(this._primaryElectionTimeout),
      private_subnet1: cdktf.stringToTerraform(this._privateSubnet1),
      private_subnet2: cdktf.stringToTerraform(this._privateSubnet2),
      private_subnet_route_table: cdktf.stringToTerraform(this._privateSubnetRouteTable),
      public_subnet1: cdktf.stringToTerraform(this._publicSubnet1),
      public_subnet2: cdktf.stringToTerraform(this._publicSubnet2),
      resource_tag_prefix: cdktf.stringToTerraform(this._resourceTagPrefix),
      s3_bucket_name: cdktf.stringToTerraform(this._s3BucketName),
      s3_key_prefix: cdktf.stringToTerraform(this._s3KeyPrefix),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      sync_recovery_count: cdktf.numberToTerraform(this._syncRecoveryCount),
      terminate_unhealthy_vm: cdktf.stringToTerraform(this._terminateUnhealthyVm),
      use_custom_asset_location: cdktf.stringToTerraform(this._useCustomAssetLocation),
      vpc_cidr: cdktf.stringToTerraform(this._vpcCidr),
      vpc_endpoint_id: cdktf.stringToTerraform(this._vpcEndpointId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_asset_container: {
        value: cdktf.stringToHclTerraform(this._customAssetContainer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_asset_directory: {
        value: cdktf.stringToHclTerraform(this._customAssetDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_identifier: {
        value: cdktf.stringToHclTerraform(this._customIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      faz_autoscale_admin_password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fazAutoscaleAdminPassword),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      faz_autoscale_admin_username: {
        value: cdktf.stringToHclTerraform(this._fazAutoscaleAdminUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      faz_custom_private_ipaddress: {
        value: cdktf.stringToHclTerraform(this._fazCustomPrivateIpaddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      faz_instance_type: {
        value: cdktf.stringToHclTerraform(this._fazInstanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      faz_integration_options: {
        value: cdktf.stringToHclTerraform(this._fazIntegrationOptions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      faz_version: {
        value: cdktf.stringToHclTerraform(this._fazVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fgt_admin_cidr: {
        value: cdktf.stringToHclTerraform(this._fgtAdminCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fgt_admin_port: {
        value: cdktf.numberToHclTerraform(this._fgtAdminPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fgt_instance_type: {
        value: cdktf.stringToHclTerraform(this._fgtInstanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fgt_psk_secret: {
        value: cdktf.stringToHclTerraform(this._fgtPskSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fgtasg_cool_down: {
        value: cdktf.numberToHclTerraform(this._fgtasgCoolDown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fgtasg_desired_capacity_byol: {
        value: cdktf.numberToHclTerraform(this._fgtasgDesiredCapacityByol),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fgtasg_desired_capacity_payg: {
        value: cdktf.numberToHclTerraform(this._fgtasgDesiredCapacityPayg),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fgtasg_health_check_grace_period: {
        value: cdktf.numberToHclTerraform(this._fgtasgHealthCheckGracePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fgtasg_max_size_byol: {
        value: cdktf.numberToHclTerraform(this._fgtasgMaxSizeByol),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fgtasg_max_size_payg: {
        value: cdktf.numberToHclTerraform(this._fgtasgMaxSizePayg),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fgtasg_min_size_byol: {
        value: cdktf.numberToHclTerraform(this._fgtasgMinSizeByol),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fgtasg_min_size_payg: {
        value: cdktf.numberToHclTerraform(this._fgtasgMinSizePayg),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fgtasg_scale_in_threshold: {
        value: cdktf.numberToHclTerraform(this._fgtasgScaleInThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fgtasg_scale_out_threshold: {
        value: cdktf.numberToHclTerraform(this._fgtasgScaleOutThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fos_version: {
        value: cdktf.stringToHclTerraform(this._fosVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_license_grace_period: {
        value: cdktf.numberToHclTerraform(this._getLicenseGracePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      heartbeat_delay_allowance: {
        value: cdktf.numberToHclTerraform(this._heartbeatDelayAllowance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      heartbeat_interval: {
        value: cdktf.numberToHclTerraform(this._heartbeatInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      heartbeat_loss_count: {
        value: cdktf.numberToHclTerraform(this._heartbeatLossCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internal_balancer_dns_name: {
        value: cdktf.stringToHclTerraform(this._internalBalancerDnsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internal_balancing_options: {
        value: cdktf.stringToHclTerraform(this._internalBalancingOptions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internal_target_group_health_check_path: {
        value: cdktf.stringToHclTerraform(this._internalTargetGroupHealthCheckPath),
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
      lifecycle_hook_timeout: {
        value: cdktf.numberToHclTerraform(this._lifecycleHookTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      loadbalancing_health_check_threshold: {
        value: cdktf.numberToHclTerraform(this._loadbalancingHealthCheckThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      loadbalancing_traffic_port: {
        value: cdktf.numberToHclTerraform(this._loadbalancingTrafficPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      loadbalancing_traffic_protocol: {
        value: cdktf.stringToHclTerraform(this._loadbalancingTrafficProtocol),
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
      notification_email: {
        value: cdktf.stringToHclTerraform(this._notificationEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_election_timeout: {
        value: cdktf.numberToHclTerraform(this._primaryElectionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      private_subnet1: {
        value: cdktf.stringToHclTerraform(this._privateSubnet1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_subnet2: {
        value: cdktf.stringToHclTerraform(this._privateSubnet2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_subnet_route_table: {
        value: cdktf.stringToHclTerraform(this._privateSubnetRouteTable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_subnet1: {
        value: cdktf.stringToHclTerraform(this._publicSubnet1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_subnet2: {
        value: cdktf.stringToHclTerraform(this._publicSubnet2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_tag_prefix: {
        value: cdktf.stringToHclTerraform(this._resourceTagPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_bucket_name: {
        value: cdktf.stringToHclTerraform(this._s3BucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_key_prefix: {
        value: cdktf.stringToHclTerraform(this._s3KeyPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_recovery_count: {
        value: cdktf.numberToHclTerraform(this._syncRecoveryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      terminate_unhealthy_vm: {
        value: cdktf.stringToHclTerraform(this._terminateUnhealthyVm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_custom_asset_location: {
        value: cdktf.stringToHclTerraform(this._useCustomAssetLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_cidr: {
        value: cdktf.stringToHclTerraform(this._vpcCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._vpcEndpointId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
