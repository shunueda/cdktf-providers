// https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationAwsResourcesConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the AWS account the AWS resources belong to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources#account_id ApplicationAwsResources#account_id}
  */
  readonly accountId: string;
  /**
  * ID of the CloudSecure application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources#application_id ApplicationAwsResources#application_id}
  */
  readonly applicationId: string;
  /**
  * ARNs of AWS resources to associate with the CloudSecure application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources#arns ApplicationAwsResources#arns}
  */
  readonly arns?: string[];
  /**
  * IDs of AWS customer gateways to associate with the CloudSecure Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources#aws_customer_gateway_ids ApplicationAwsResources#aws_customer_gateway_ids}
  */
  readonly awsCustomerGatewayIds?: string[];
  /**
  * IDs of AWS Direct Connect connections to associate with the CloudSecure Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources#aws_dx_connection_ids ApplicationAwsResources#aws_dx_connection_ids}
  */
  readonly awsDxConnectionIds?: string[];
  /**
  * IDs of AWS Direct Connect virtual interfaces (public/private/hosted/transit) to associate with the CloudSecure Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources#aws_dx_virtual_interface_ids ApplicationAwsResources#aws_dx_virtual_interface_ids}
  */
  readonly awsDxVirtualInterfaceIds?: string[];
  /**
  * IDs of AWS EBS volumes to associate with the CloudSecure Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources#aws_ebs_volume_ids ApplicationAwsResources#aws_ebs_volume_ids}
  */
  readonly awsEbsVolumeIds?: string[];
  /**
  * IDs of AWS EC2 Instance connect endpoints to associate with the CloudSecure Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources#aws_ec2_instance_connect_endpoint_ids ApplicationAwsResources#aws_ec2_instance_connect_endpoint_ids}
  */
  readonly awsEc2InstanceConnectEndpointIds?: string[];
  /**
  * IDs of AWS EC2 transit gateway attachments (peering/vpc) to associate with the CloudSecure Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources#aws_ec2_transit_gateway_attachment_ids ApplicationAwsResources#aws_ec2_transit_gateway_attachment_ids}
  */
  readonly awsEc2TransitGatewayAttachmentIds?: string[];
  /**
  * IDs of AWS EC2 transit gateways to associate with the CloudSecure Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources#aws_ec2_transit_gateway_ids ApplicationAwsResources#aws_ec2_transit_gateway_ids}
  */
  readonly awsEc2TransitGatewayIds?: string[];
  /**
  * IDs of AWS EC2 transit gateway multicast domains to associate with the CloudSecure Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources#aws_ec2_transit_gateway_multicast_domain_ids ApplicationAwsResources#aws_ec2_transit_gateway_multicast_domain_ids}
  */
  readonly awsEc2TransitGatewayMulticastDomainIds?: string[];
  /**
  * IDs of AWS EC2 transit gateway route tables to associate with the CloudSecure Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources#aws_ec2_transit_gateway_route_table_ids ApplicationAwsResources#aws_ec2_transit_gateway_route_table_ids}
  */
  readonly awsEc2TransitGatewayRouteTableIds?: string[];
  /**
  * IDs of AWS egress-only Internet gateways to associate with the CloudSecure Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources#aws_egress_only_internet_gateway_ids ApplicationAwsResources#aws_egress_only_internet_gateway_ids}
  */
  readonly awsEgressOnlyInternetGatewayIds?: string[];
  /**
  * IDs of AWS Elastic IPs to associate with the CloudSecure Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources#aws_eip_ids ApplicationAwsResources#aws_eip_ids}
  */
  readonly awsEipIds?: string[];
  /**
  * IDs of AWS Flow Logs to associate with the CloudSecure Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources#aws_flow_log_ids ApplicationAwsResources#aws_flow_log_ids}
  */
  readonly awsFlowLogIds?: string[];
  /**
  * IDs of AWS EC2 instances to associate with the CloudSecure Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources#aws_instances_ids ApplicationAwsResources#aws_instances_ids}
  */
  readonly awsInstancesIds?: string[];
  /**
  * IDs of AWS Internet Gateways to associate with the CloudSecure Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources#aws_internet_gateway_ids ApplicationAwsResources#aws_internet_gateway_ids}
  */
  readonly awsInternetGatewayIds?: string[];
  /**
  * IDs of AWS NAT Gateways to associate with the CloudSecure Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources#aws_nat_gateway_ids ApplicationAwsResources#aws_nat_gateway_ids}
  */
  readonly awsNatGatewayIds?: string[];
  /**
  * IDs of AWS network ACLs to associate with the CloudSecure Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources#aws_network_acl_ids ApplicationAwsResources#aws_network_acl_ids}
  */
  readonly awsNetworkAclIds?: string[];
  /**
  * IDs of AWS Elastic Network Interfaces (ENI) to associate with the CloudSecure Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources#aws_network_interface_ids ApplicationAwsResources#aws_network_interface_ids}
  */
  readonly awsNetworkInterfaceIds?: string[];
  /**
  * IDs of AWS RDS database clusters to associate with the CloudSecure Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources#aws_rds_cluster_ids ApplicationAwsResources#aws_rds_cluster_ids}
  */
  readonly awsRdsClusterIds?: string[];
  /**
  * IDs of AWS VPC routing tables to associate with the CloudSecure Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources#aws_route_table_ids ApplicationAwsResources#aws_route_table_ids}
  */
  readonly awsRouteTableIds?: string[];
  /**
  * IDs of AWS security groups to associate with the CloudSecure Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources#aws_security_group_ids ApplicationAwsResources#aws_security_group_ids}
  */
  readonly awsSecurityGroupIds?: string[];
  /**
  * IDs of AWS security group rules to associate with the CloudSecure Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources#aws_security_group_rule_ids ApplicationAwsResources#aws_security_group_rule_ids}
  */
  readonly awsSecurityGroupRuleIds?: string[];
  /**
  * IDs of AWS spot fleet requests to associate with the CloudSecure Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources#aws_spot_fleet_request_ids ApplicationAwsResources#aws_spot_fleet_request_ids}
  */
  readonly awsSpotFleetRequestIds?: string[];
  /**
  * IDs of AWS spot instance requests to associate with the CloudSecure Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources#aws_spot_instance_request_ids ApplicationAwsResources#aws_spot_instance_request_ids}
  */
  readonly awsSpotInstanceRequestIds?: string[];
  /**
  * IDs of AWS subnets to associate with the CloudSecure Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources#aws_subnet_ids ApplicationAwsResources#aws_subnet_ids}
  */
  readonly awsSubnetIds?: string[];
  /**
  * IDs of AWS VPC endpoints to associate with the CloudSecure Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources#aws_vpc_endpoint_ids ApplicationAwsResources#aws_vpc_endpoint_ids}
  */
  readonly awsVpcEndpointIds?: string[];
  /**
  * IDs of AWS VPC endpoint services to associate with the CloudSecure Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources#aws_vpc_endpoint_service_ids ApplicationAwsResources#aws_vpc_endpoint_service_ids}
  */
  readonly awsVpcEndpointServiceIds?: string[];
  /**
  * IDs of AWS VPCs to associate with the CloudSecure Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources#aws_vpc_ids ApplicationAwsResources#aws_vpc_ids}
  */
  readonly awsVpcIds?: string[];
  /**
  * IDs of AWS VPC peering connections to associate with the CloudSecure Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources#aws_vpc_peering_connection_ids ApplicationAwsResources#aws_vpc_peering_connection_ids}
  */
  readonly awsVpcPeeringConnectionIds?: string[];
  /**
  * IDs of AWS VPN connections to associate with the CloudSecure Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources#aws_vpn_connection_ids ApplicationAwsResources#aws_vpn_connection_ids}
  */
  readonly awsVpnConnectionIds?: string[];
  /**
  * IDs of AWS VPN gateways to associate with the CloudSecure Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources#aws_vpn_gateway_ids ApplicationAwsResources#aws_vpn_gateway_ids}
  */
  readonly awsVpnGatewayIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources illumio-cloudsecure_application_aws_resources}
*/
export class ApplicationAwsResources extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-cloudsecure_application_aws_resources";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationAwsResources resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationAwsResources to import
  * @param importFromId The id of the existing ApplicationAwsResources that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationAwsResources to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-cloudsecure_application_aws_resources", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs/resources/application_aws_resources illumio-cloudsecure_application_aws_resources} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationAwsResourcesConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationAwsResourcesConfig) {
    super(scope, id, {
      terraformResourceType: 'illumio-cloudsecure_application_aws_resources',
      terraformGeneratorMetadata: {
        providerName: 'illumio-cloudsecure',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._applicationId = config.applicationId;
    this._arns = config.arns;
    this._awsCustomerGatewayIds = config.awsCustomerGatewayIds;
    this._awsDxConnectionIds = config.awsDxConnectionIds;
    this._awsDxVirtualInterfaceIds = config.awsDxVirtualInterfaceIds;
    this._awsEbsVolumeIds = config.awsEbsVolumeIds;
    this._awsEc2InstanceConnectEndpointIds = config.awsEc2InstanceConnectEndpointIds;
    this._awsEc2TransitGatewayAttachmentIds = config.awsEc2TransitGatewayAttachmentIds;
    this._awsEc2TransitGatewayIds = config.awsEc2TransitGatewayIds;
    this._awsEc2TransitGatewayMulticastDomainIds = config.awsEc2TransitGatewayMulticastDomainIds;
    this._awsEc2TransitGatewayRouteTableIds = config.awsEc2TransitGatewayRouteTableIds;
    this._awsEgressOnlyInternetGatewayIds = config.awsEgressOnlyInternetGatewayIds;
    this._awsEipIds = config.awsEipIds;
    this._awsFlowLogIds = config.awsFlowLogIds;
    this._awsInstancesIds = config.awsInstancesIds;
    this._awsInternetGatewayIds = config.awsInternetGatewayIds;
    this._awsNatGatewayIds = config.awsNatGatewayIds;
    this._awsNetworkAclIds = config.awsNetworkAclIds;
    this._awsNetworkInterfaceIds = config.awsNetworkInterfaceIds;
    this._awsRdsClusterIds = config.awsRdsClusterIds;
    this._awsRouteTableIds = config.awsRouteTableIds;
    this._awsSecurityGroupIds = config.awsSecurityGroupIds;
    this._awsSecurityGroupRuleIds = config.awsSecurityGroupRuleIds;
    this._awsSpotFleetRequestIds = config.awsSpotFleetRequestIds;
    this._awsSpotInstanceRequestIds = config.awsSpotInstanceRequestIds;
    this._awsSubnetIds = config.awsSubnetIds;
    this._awsVpcEndpointIds = config.awsVpcEndpointIds;
    this._awsVpcEndpointServiceIds = config.awsVpcEndpointServiceIds;
    this._awsVpcIds = config.awsVpcIds;
    this._awsVpcPeeringConnectionIds = config.awsVpcPeeringConnectionIds;
    this._awsVpnConnectionIds = config.awsVpnConnectionIds;
    this._awsVpnGatewayIds = config.awsVpnGatewayIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // application_resource_ids - computed: true, optional: false, required: false
  public get applicationResourceIds() {
    return this.getListAttribute('application_resource_ids');
  }

  // arns - computed: false, optional: true, required: false
  private _arns?: string[]; 
  public get arns() {
    return this.getListAttribute('arns');
  }
  public set arns(value: string[]) {
    this._arns = value;
  }
  public resetArns() {
    this._arns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnsInput() {
    return this._arns;
  }

  // aws_customer_gateway_ids - computed: false, optional: true, required: false
  private _awsCustomerGatewayIds?: string[]; 
  public get awsCustomerGatewayIds() {
    return this.getListAttribute('aws_customer_gateway_ids');
  }
  public set awsCustomerGatewayIds(value: string[]) {
    this._awsCustomerGatewayIds = value;
  }
  public resetAwsCustomerGatewayIds() {
    this._awsCustomerGatewayIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsCustomerGatewayIdsInput() {
    return this._awsCustomerGatewayIds;
  }

  // aws_dx_connection_ids - computed: false, optional: true, required: false
  private _awsDxConnectionIds?: string[]; 
  public get awsDxConnectionIds() {
    return this.getListAttribute('aws_dx_connection_ids');
  }
  public set awsDxConnectionIds(value: string[]) {
    this._awsDxConnectionIds = value;
  }
  public resetAwsDxConnectionIds() {
    this._awsDxConnectionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsDxConnectionIdsInput() {
    return this._awsDxConnectionIds;
  }

  // aws_dx_virtual_interface_ids - computed: false, optional: true, required: false
  private _awsDxVirtualInterfaceIds?: string[]; 
  public get awsDxVirtualInterfaceIds() {
    return this.getListAttribute('aws_dx_virtual_interface_ids');
  }
  public set awsDxVirtualInterfaceIds(value: string[]) {
    this._awsDxVirtualInterfaceIds = value;
  }
  public resetAwsDxVirtualInterfaceIds() {
    this._awsDxVirtualInterfaceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsDxVirtualInterfaceIdsInput() {
    return this._awsDxVirtualInterfaceIds;
  }

  // aws_ebs_volume_ids - computed: false, optional: true, required: false
  private _awsEbsVolumeIds?: string[]; 
  public get awsEbsVolumeIds() {
    return this.getListAttribute('aws_ebs_volume_ids');
  }
  public set awsEbsVolumeIds(value: string[]) {
    this._awsEbsVolumeIds = value;
  }
  public resetAwsEbsVolumeIds() {
    this._awsEbsVolumeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEbsVolumeIdsInput() {
    return this._awsEbsVolumeIds;
  }

  // aws_ec2_instance_connect_endpoint_ids - computed: false, optional: true, required: false
  private _awsEc2InstanceConnectEndpointIds?: string[]; 
  public get awsEc2InstanceConnectEndpointIds() {
    return this.getListAttribute('aws_ec2_instance_connect_endpoint_ids');
  }
  public set awsEc2InstanceConnectEndpointIds(value: string[]) {
    this._awsEc2InstanceConnectEndpointIds = value;
  }
  public resetAwsEc2InstanceConnectEndpointIds() {
    this._awsEc2InstanceConnectEndpointIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEc2InstanceConnectEndpointIdsInput() {
    return this._awsEc2InstanceConnectEndpointIds;
  }

  // aws_ec2_transit_gateway_attachment_ids - computed: false, optional: true, required: false
  private _awsEc2TransitGatewayAttachmentIds?: string[]; 
  public get awsEc2TransitGatewayAttachmentIds() {
    return this.getListAttribute('aws_ec2_transit_gateway_attachment_ids');
  }
  public set awsEc2TransitGatewayAttachmentIds(value: string[]) {
    this._awsEc2TransitGatewayAttachmentIds = value;
  }
  public resetAwsEc2TransitGatewayAttachmentIds() {
    this._awsEc2TransitGatewayAttachmentIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEc2TransitGatewayAttachmentIdsInput() {
    return this._awsEc2TransitGatewayAttachmentIds;
  }

  // aws_ec2_transit_gateway_ids - computed: false, optional: true, required: false
  private _awsEc2TransitGatewayIds?: string[]; 
  public get awsEc2TransitGatewayIds() {
    return this.getListAttribute('aws_ec2_transit_gateway_ids');
  }
  public set awsEc2TransitGatewayIds(value: string[]) {
    this._awsEc2TransitGatewayIds = value;
  }
  public resetAwsEc2TransitGatewayIds() {
    this._awsEc2TransitGatewayIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEc2TransitGatewayIdsInput() {
    return this._awsEc2TransitGatewayIds;
  }

  // aws_ec2_transit_gateway_multicast_domain_ids - computed: false, optional: true, required: false
  private _awsEc2TransitGatewayMulticastDomainIds?: string[]; 
  public get awsEc2TransitGatewayMulticastDomainIds() {
    return this.getListAttribute('aws_ec2_transit_gateway_multicast_domain_ids');
  }
  public set awsEc2TransitGatewayMulticastDomainIds(value: string[]) {
    this._awsEc2TransitGatewayMulticastDomainIds = value;
  }
  public resetAwsEc2TransitGatewayMulticastDomainIds() {
    this._awsEc2TransitGatewayMulticastDomainIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEc2TransitGatewayMulticastDomainIdsInput() {
    return this._awsEc2TransitGatewayMulticastDomainIds;
  }

  // aws_ec2_transit_gateway_route_table_ids - computed: false, optional: true, required: false
  private _awsEc2TransitGatewayRouteTableIds?: string[]; 
  public get awsEc2TransitGatewayRouteTableIds() {
    return this.getListAttribute('aws_ec2_transit_gateway_route_table_ids');
  }
  public set awsEc2TransitGatewayRouteTableIds(value: string[]) {
    this._awsEc2TransitGatewayRouteTableIds = value;
  }
  public resetAwsEc2TransitGatewayRouteTableIds() {
    this._awsEc2TransitGatewayRouteTableIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEc2TransitGatewayRouteTableIdsInput() {
    return this._awsEc2TransitGatewayRouteTableIds;
  }

  // aws_egress_only_internet_gateway_ids - computed: false, optional: true, required: false
  private _awsEgressOnlyInternetGatewayIds?: string[]; 
  public get awsEgressOnlyInternetGatewayIds() {
    return this.getListAttribute('aws_egress_only_internet_gateway_ids');
  }
  public set awsEgressOnlyInternetGatewayIds(value: string[]) {
    this._awsEgressOnlyInternetGatewayIds = value;
  }
  public resetAwsEgressOnlyInternetGatewayIds() {
    this._awsEgressOnlyInternetGatewayIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEgressOnlyInternetGatewayIdsInput() {
    return this._awsEgressOnlyInternetGatewayIds;
  }

  // aws_eip_ids - computed: false, optional: true, required: false
  private _awsEipIds?: string[]; 
  public get awsEipIds() {
    return this.getListAttribute('aws_eip_ids');
  }
  public set awsEipIds(value: string[]) {
    this._awsEipIds = value;
  }
  public resetAwsEipIds() {
    this._awsEipIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEipIdsInput() {
    return this._awsEipIds;
  }

  // aws_flow_log_ids - computed: false, optional: true, required: false
  private _awsFlowLogIds?: string[]; 
  public get awsFlowLogIds() {
    return this.getListAttribute('aws_flow_log_ids');
  }
  public set awsFlowLogIds(value: string[]) {
    this._awsFlowLogIds = value;
  }
  public resetAwsFlowLogIds() {
    this._awsFlowLogIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsFlowLogIdsInput() {
    return this._awsFlowLogIds;
  }

  // aws_instances_ids - computed: false, optional: true, required: false
  private _awsInstancesIds?: string[]; 
  public get awsInstancesIds() {
    return this.getListAttribute('aws_instances_ids');
  }
  public set awsInstancesIds(value: string[]) {
    this._awsInstancesIds = value;
  }
  public resetAwsInstancesIds() {
    this._awsInstancesIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInstancesIdsInput() {
    return this._awsInstancesIds;
  }

  // aws_internet_gateway_ids - computed: false, optional: true, required: false
  private _awsInternetGatewayIds?: string[]; 
  public get awsInternetGatewayIds() {
    return this.getListAttribute('aws_internet_gateway_ids');
  }
  public set awsInternetGatewayIds(value: string[]) {
    this._awsInternetGatewayIds = value;
  }
  public resetAwsInternetGatewayIds() {
    this._awsInternetGatewayIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInternetGatewayIdsInput() {
    return this._awsInternetGatewayIds;
  }

  // aws_nat_gateway_ids - computed: false, optional: true, required: false
  private _awsNatGatewayIds?: string[]; 
  public get awsNatGatewayIds() {
    return this.getListAttribute('aws_nat_gateway_ids');
  }
  public set awsNatGatewayIds(value: string[]) {
    this._awsNatGatewayIds = value;
  }
  public resetAwsNatGatewayIds() {
    this._awsNatGatewayIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsNatGatewayIdsInput() {
    return this._awsNatGatewayIds;
  }

  // aws_network_acl_ids - computed: false, optional: true, required: false
  private _awsNetworkAclIds?: string[]; 
  public get awsNetworkAclIds() {
    return this.getListAttribute('aws_network_acl_ids');
  }
  public set awsNetworkAclIds(value: string[]) {
    this._awsNetworkAclIds = value;
  }
  public resetAwsNetworkAclIds() {
    this._awsNetworkAclIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsNetworkAclIdsInput() {
    return this._awsNetworkAclIds;
  }

  // aws_network_interface_ids - computed: false, optional: true, required: false
  private _awsNetworkInterfaceIds?: string[]; 
  public get awsNetworkInterfaceIds() {
    return this.getListAttribute('aws_network_interface_ids');
  }
  public set awsNetworkInterfaceIds(value: string[]) {
    this._awsNetworkInterfaceIds = value;
  }
  public resetAwsNetworkInterfaceIds() {
    this._awsNetworkInterfaceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsNetworkInterfaceIdsInput() {
    return this._awsNetworkInterfaceIds;
  }

  // aws_rds_cluster_ids - computed: false, optional: true, required: false
  private _awsRdsClusterIds?: string[]; 
  public get awsRdsClusterIds() {
    return this.getListAttribute('aws_rds_cluster_ids');
  }
  public set awsRdsClusterIds(value: string[]) {
    this._awsRdsClusterIds = value;
  }
  public resetAwsRdsClusterIds() {
    this._awsRdsClusterIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRdsClusterIdsInput() {
    return this._awsRdsClusterIds;
  }

  // aws_route_table_ids - computed: false, optional: true, required: false
  private _awsRouteTableIds?: string[]; 
  public get awsRouteTableIds() {
    return this.getListAttribute('aws_route_table_ids');
  }
  public set awsRouteTableIds(value: string[]) {
    this._awsRouteTableIds = value;
  }
  public resetAwsRouteTableIds() {
    this._awsRouteTableIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRouteTableIdsInput() {
    return this._awsRouteTableIds;
  }

  // aws_security_group_ids - computed: false, optional: true, required: false
  private _awsSecurityGroupIds?: string[]; 
  public get awsSecurityGroupIds() {
    return this.getListAttribute('aws_security_group_ids');
  }
  public set awsSecurityGroupIds(value: string[]) {
    this._awsSecurityGroupIds = value;
  }
  public resetAwsSecurityGroupIds() {
    this._awsSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecurityGroupIdsInput() {
    return this._awsSecurityGroupIds;
  }

  // aws_security_group_rule_ids - computed: false, optional: true, required: false
  private _awsSecurityGroupRuleIds?: string[]; 
  public get awsSecurityGroupRuleIds() {
    return this.getListAttribute('aws_security_group_rule_ids');
  }
  public set awsSecurityGroupRuleIds(value: string[]) {
    this._awsSecurityGroupRuleIds = value;
  }
  public resetAwsSecurityGroupRuleIds() {
    this._awsSecurityGroupRuleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecurityGroupRuleIdsInput() {
    return this._awsSecurityGroupRuleIds;
  }

  // aws_spot_fleet_request_ids - computed: false, optional: true, required: false
  private _awsSpotFleetRequestIds?: string[]; 
  public get awsSpotFleetRequestIds() {
    return this.getListAttribute('aws_spot_fleet_request_ids');
  }
  public set awsSpotFleetRequestIds(value: string[]) {
    this._awsSpotFleetRequestIds = value;
  }
  public resetAwsSpotFleetRequestIds() {
    this._awsSpotFleetRequestIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSpotFleetRequestIdsInput() {
    return this._awsSpotFleetRequestIds;
  }

  // aws_spot_instance_request_ids - computed: false, optional: true, required: false
  private _awsSpotInstanceRequestIds?: string[]; 
  public get awsSpotInstanceRequestIds() {
    return this.getListAttribute('aws_spot_instance_request_ids');
  }
  public set awsSpotInstanceRequestIds(value: string[]) {
    this._awsSpotInstanceRequestIds = value;
  }
  public resetAwsSpotInstanceRequestIds() {
    this._awsSpotInstanceRequestIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSpotInstanceRequestIdsInput() {
    return this._awsSpotInstanceRequestIds;
  }

  // aws_subnet_ids - computed: false, optional: true, required: false
  private _awsSubnetIds?: string[]; 
  public get awsSubnetIds() {
    return this.getListAttribute('aws_subnet_ids');
  }
  public set awsSubnetIds(value: string[]) {
    this._awsSubnetIds = value;
  }
  public resetAwsSubnetIds() {
    this._awsSubnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSubnetIdsInput() {
    return this._awsSubnetIds;
  }

  // aws_vpc_endpoint_ids - computed: false, optional: true, required: false
  private _awsVpcEndpointIds?: string[]; 
  public get awsVpcEndpointIds() {
    return this.getListAttribute('aws_vpc_endpoint_ids');
  }
  public set awsVpcEndpointIds(value: string[]) {
    this._awsVpcEndpointIds = value;
  }
  public resetAwsVpcEndpointIds() {
    this._awsVpcEndpointIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsVpcEndpointIdsInput() {
    return this._awsVpcEndpointIds;
  }

  // aws_vpc_endpoint_service_ids - computed: false, optional: true, required: false
  private _awsVpcEndpointServiceIds?: string[]; 
  public get awsVpcEndpointServiceIds() {
    return this.getListAttribute('aws_vpc_endpoint_service_ids');
  }
  public set awsVpcEndpointServiceIds(value: string[]) {
    this._awsVpcEndpointServiceIds = value;
  }
  public resetAwsVpcEndpointServiceIds() {
    this._awsVpcEndpointServiceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsVpcEndpointServiceIdsInput() {
    return this._awsVpcEndpointServiceIds;
  }

  // aws_vpc_ids - computed: false, optional: true, required: false
  private _awsVpcIds?: string[]; 
  public get awsVpcIds() {
    return this.getListAttribute('aws_vpc_ids');
  }
  public set awsVpcIds(value: string[]) {
    this._awsVpcIds = value;
  }
  public resetAwsVpcIds() {
    this._awsVpcIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsVpcIdsInput() {
    return this._awsVpcIds;
  }

  // aws_vpc_peering_connection_ids - computed: false, optional: true, required: false
  private _awsVpcPeeringConnectionIds?: string[]; 
  public get awsVpcPeeringConnectionIds() {
    return this.getListAttribute('aws_vpc_peering_connection_ids');
  }
  public set awsVpcPeeringConnectionIds(value: string[]) {
    this._awsVpcPeeringConnectionIds = value;
  }
  public resetAwsVpcPeeringConnectionIds() {
    this._awsVpcPeeringConnectionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsVpcPeeringConnectionIdsInput() {
    return this._awsVpcPeeringConnectionIds;
  }

  // aws_vpn_connection_ids - computed: false, optional: true, required: false
  private _awsVpnConnectionIds?: string[]; 
  public get awsVpnConnectionIds() {
    return this.getListAttribute('aws_vpn_connection_ids');
  }
  public set awsVpnConnectionIds(value: string[]) {
    this._awsVpnConnectionIds = value;
  }
  public resetAwsVpnConnectionIds() {
    this._awsVpnConnectionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsVpnConnectionIdsInput() {
    return this._awsVpnConnectionIds;
  }

  // aws_vpn_gateway_ids - computed: false, optional: true, required: false
  private _awsVpnGatewayIds?: string[]; 
  public get awsVpnGatewayIds() {
    return this.getListAttribute('aws_vpn_gateway_ids');
  }
  public set awsVpnGatewayIds(value: string[]) {
    this._awsVpnGatewayIds = value;
  }
  public resetAwsVpnGatewayIds() {
    this._awsVpnGatewayIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsVpnGatewayIdsInput() {
    return this._awsVpnGatewayIds;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      application_id: cdktf.stringToTerraform(this._applicationId),
      arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._arns),
      aws_customer_gateway_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsCustomerGatewayIds),
      aws_dx_connection_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsDxConnectionIds),
      aws_dx_virtual_interface_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsDxVirtualInterfaceIds),
      aws_ebs_volume_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsEbsVolumeIds),
      aws_ec2_instance_connect_endpoint_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsEc2InstanceConnectEndpointIds),
      aws_ec2_transit_gateway_attachment_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsEc2TransitGatewayAttachmentIds),
      aws_ec2_transit_gateway_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsEc2TransitGatewayIds),
      aws_ec2_transit_gateway_multicast_domain_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsEc2TransitGatewayMulticastDomainIds),
      aws_ec2_transit_gateway_route_table_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsEc2TransitGatewayRouteTableIds),
      aws_egress_only_internet_gateway_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsEgressOnlyInternetGatewayIds),
      aws_eip_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsEipIds),
      aws_flow_log_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsFlowLogIds),
      aws_instances_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsInstancesIds),
      aws_internet_gateway_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsInternetGatewayIds),
      aws_nat_gateway_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsNatGatewayIds),
      aws_network_acl_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsNetworkAclIds),
      aws_network_interface_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsNetworkInterfaceIds),
      aws_rds_cluster_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsRdsClusterIds),
      aws_route_table_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsRouteTableIds),
      aws_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsSecurityGroupIds),
      aws_security_group_rule_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsSecurityGroupRuleIds),
      aws_spot_fleet_request_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsSpotFleetRequestIds),
      aws_spot_instance_request_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsSpotInstanceRequestIds),
      aws_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsSubnetIds),
      aws_vpc_endpoint_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsVpcEndpointIds),
      aws_vpc_endpoint_service_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsVpcEndpointServiceIds),
      aws_vpc_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsVpcIds),
      aws_vpc_peering_connection_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsVpcPeeringConnectionIds),
      aws_vpn_connection_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsVpnConnectionIds),
      aws_vpn_gateway_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsVpnGatewayIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._arns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_customer_gateway_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsCustomerGatewayIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_dx_connection_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsDxConnectionIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_dx_virtual_interface_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsDxVirtualInterfaceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_ebs_volume_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsEbsVolumeIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_ec2_instance_connect_endpoint_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsEc2InstanceConnectEndpointIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_ec2_transit_gateway_attachment_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsEc2TransitGatewayAttachmentIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_ec2_transit_gateway_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsEc2TransitGatewayIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_ec2_transit_gateway_multicast_domain_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsEc2TransitGatewayMulticastDomainIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_ec2_transit_gateway_route_table_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsEc2TransitGatewayRouteTableIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_egress_only_internet_gateway_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsEgressOnlyInternetGatewayIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_eip_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsEipIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_flow_log_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsFlowLogIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_instances_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsInstancesIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_internet_gateway_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsInternetGatewayIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_nat_gateway_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsNatGatewayIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_network_acl_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsNetworkAclIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_network_interface_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsNetworkInterfaceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_rds_cluster_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsRdsClusterIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_route_table_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsRouteTableIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsSecurityGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_security_group_rule_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsSecurityGroupRuleIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_spot_fleet_request_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsSpotFleetRequestIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_spot_instance_request_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsSpotInstanceRequestIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_subnet_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsSubnetIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_vpc_endpoint_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsVpcEndpointIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_vpc_endpoint_service_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsVpcEndpointServiceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_vpc_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsVpcIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_vpc_peering_connection_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsVpcPeeringConnectionIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_vpn_connection_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsVpnConnectionIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_vpn_gateway_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsVpnGatewayIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
