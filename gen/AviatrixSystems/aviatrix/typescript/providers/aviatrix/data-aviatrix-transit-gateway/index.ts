// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/transit_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAviatrixTransitGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Transit Gateway name. This can be used for getting gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/transit_gateway#gw_name DataAviatrixTransitGateway#gw_name}
  */
  readonly gwName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/transit_gateway#id DataAviatrixTransitGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataAviatrixTransitGatewayBgpLanInterfaces {
}

export function dataAviatrixTransitGatewayBgpLanInterfacesToTerraform(struct?: DataAviatrixTransitGatewayBgpLanInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviatrixTransitGatewayBgpLanInterfacesToHclTerraform(struct?: DataAviatrixTransitGatewayBgpLanInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviatrixTransitGatewayBgpLanInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviatrixTransitGatewayBgpLanInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviatrixTransitGatewayBgpLanInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class DataAviatrixTransitGatewayBgpLanInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviatrixTransitGatewayBgpLanInterfacesOutputReference {
    return new DataAviatrixTransitGatewayBgpLanInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviatrixTransitGatewayHaBgpLanInterfaces {
}

export function dataAviatrixTransitGatewayHaBgpLanInterfacesToTerraform(struct?: DataAviatrixTransitGatewayHaBgpLanInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviatrixTransitGatewayHaBgpLanInterfacesToHclTerraform(struct?: DataAviatrixTransitGatewayHaBgpLanInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviatrixTransitGatewayHaBgpLanInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviatrixTransitGatewayHaBgpLanInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviatrixTransitGatewayHaBgpLanInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class DataAviatrixTransitGatewayHaBgpLanInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviatrixTransitGatewayHaBgpLanInterfacesOutputReference {
    return new DataAviatrixTransitGatewayHaBgpLanInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/transit_gateway aviatrix_transit_gateway}
*/
export class DataAviatrixTransitGateway extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_transit_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAviatrixTransitGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAviatrixTransitGateway to import
  * @param importFromId The id of the existing DataAviatrixTransitGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/transit_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAviatrixTransitGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_transit_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/transit_gateway aviatrix_transit_gateway} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAviatrixTransitGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: DataAviatrixTransitGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_transit_gateway',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10',
        providerVersionConstraint: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gwName = config.gwName;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // allocate_new_eip - computed: true, optional: false, required: false
  public get allocateNewEip() {
    return this.getBooleanAttribute('allocate_new_eip');
  }

  // approved_learned_cidrs - computed: true, optional: false, required: false
  public get approvedLearnedCidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('approved_learned_cidrs'));
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // azure_eip_name_resource_group - computed: true, optional: false, required: false
  public get azureEipNameResourceGroup() {
    return this.getStringAttribute('azure_eip_name_resource_group');
  }

  // bgp_ecmp - computed: true, optional: false, required: false
  public get bgpEcmp() {
    return this.getBooleanAttribute('bgp_ecmp');
  }

  // bgp_hold_time - computed: true, optional: false, required: false
  public get bgpHoldTime() {
    return this.getNumberAttribute('bgp_hold_time');
  }

  // bgp_lan_interfaces - computed: true, optional: false, required: false
  private _bgpLanInterfaces = new DataAviatrixTransitGatewayBgpLanInterfacesList(this, "bgp_lan_interfaces", false);
  public get bgpLanInterfaces() {
    return this._bgpLanInterfaces;
  }

  // bgp_lan_ip_list - computed: true, optional: false, required: false
  public get bgpLanIpList() {
    return this.getListAttribute('bgp_lan_ip_list');
  }

  // bgp_manual_spoke_advertise_cidrs - computed: true, optional: false, required: false
  public get bgpManualSpokeAdvertiseCidrs() {
    return this.getStringAttribute('bgp_manual_spoke_advertise_cidrs');
  }

  // bgp_polling_time - computed: true, optional: false, required: false
  public get bgpPollingTime() {
    return this.getStringAttribute('bgp_polling_time');
  }

  // cloud_instance_id - computed: true, optional: false, required: false
  public get cloudInstanceId() {
    return this.getStringAttribute('cloud_instance_id');
  }

  // cloud_type - computed: true, optional: false, required: false
  public get cloudType() {
    return this.getNumberAttribute('cloud_type');
  }

  // connected_transit - computed: true, optional: false, required: false
  public get connectedTransit() {
    return this.getBooleanAttribute('connected_transit');
  }

  // customized_spoke_vpc_routes - computed: true, optional: false, required: false
  public get customizedSpokeVpcRoutes() {
    return this.getStringAttribute('customized_spoke_vpc_routes');
  }

  // customized_transit_vpc_routes - computed: true, optional: false, required: false
  public get customizedTransitVpcRoutes() {
    return cdktf.Fn.tolist(this.getListAttribute('customized_transit_vpc_routes'));
  }

  // eip - computed: true, optional: false, required: false
  public get eip() {
    return this.getStringAttribute('eip');
  }

  // enable_active_standby - computed: true, optional: false, required: false
  public get enableActiveStandby() {
    return this.getBooleanAttribute('enable_active_standby');
  }

  // enable_active_standby_preemptive - computed: true, optional: false, required: false
  public get enableActiveStandbyPreemptive() {
    return this.getBooleanAttribute('enable_active_standby_preemptive');
  }

  // enable_advertise_transit_cidr - computed: true, optional: false, required: false
  public get enableAdvertiseTransitCidr() {
    return this.getBooleanAttribute('enable_advertise_transit_cidr');
  }

  // enable_bgp_over_lan - computed: true, optional: false, required: false
  public get enableBgpOverLan() {
    return this.getBooleanAttribute('enable_bgp_over_lan');
  }

  // enable_egress_transit_firenet - computed: true, optional: false, required: false
  public get enableEgressTransitFirenet() {
    return this.getBooleanAttribute('enable_egress_transit_firenet');
  }

  // enable_encrypt_volume - computed: true, optional: false, required: false
  public get enableEncryptVolume() {
    return this.getBooleanAttribute('enable_encrypt_volume');
  }

  // enable_firenet - computed: true, optional: false, required: false
  public get enableFirenet() {
    return this.getBooleanAttribute('enable_firenet');
  }

  // enable_gateway_load_balancer - computed: true, optional: false, required: false
  public get enableGatewayLoadBalancer() {
    return this.getBooleanAttribute('enable_gateway_load_balancer');
  }

  // enable_hybrid_connection - computed: true, optional: false, required: false
  public get enableHybridConnection() {
    return this.getBooleanAttribute('enable_hybrid_connection');
  }

  // enable_jumbo_frame - computed: true, optional: false, required: false
  public get enableJumboFrame() {
    return this.getBooleanAttribute('enable_jumbo_frame');
  }

  // enable_learned_cidrs_approval - computed: true, optional: false, required: false
  public get enableLearnedCidrsApproval() {
    return this.getBooleanAttribute('enable_learned_cidrs_approval');
  }

  // enable_monitor_gateway_subnets - computed: true, optional: false, required: false
  public get enableMonitorGatewaySubnets() {
    return this.getBooleanAttribute('enable_monitor_gateway_subnets');
  }

  // enable_multi_tier_transit - computed: true, optional: false, required: false
  public get enableMultiTierTransit() {
    return this.getBooleanAttribute('enable_multi_tier_transit');
  }

  // enable_private_oob - computed: true, optional: false, required: false
  public get enablePrivateOob() {
    return this.getBooleanAttribute('enable_private_oob');
  }

  // enable_segmentation - computed: true, optional: false, required: false
  public get enableSegmentation() {
    return this.getBooleanAttribute('enable_segmentation');
  }

  // enable_spot_instance - computed: true, optional: false, required: false
  public get enableSpotInstance() {
    return this.getBooleanAttribute('enable_spot_instance');
  }

  // enable_transit_firenet - computed: true, optional: false, required: false
  public get enableTransitFirenet() {
    return this.getBooleanAttribute('enable_transit_firenet');
  }

  // enable_transit_summarize_cidr_to_tgw - computed: true, optional: false, required: false
  public get enableTransitSummarizeCidrToTgw() {
    return this.getBooleanAttribute('enable_transit_summarize_cidr_to_tgw');
  }

  // enable_vpc_dns_server - computed: true, optional: false, required: false
  public get enableVpcDnsServer() {
    return this.getBooleanAttribute('enable_vpc_dns_server');
  }

  // excluded_advertised_spoke_routes - computed: true, optional: false, required: false
  public get excludedAdvertisedSpokeRoutes() {
    return this.getStringAttribute('excluded_advertised_spoke_routes');
  }

  // fault_domain - computed: true, optional: false, required: false
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }

  // filtered_spoke_vpc_routes - computed: true, optional: false, required: false
  public get filteredSpokeVpcRoutes() {
    return this.getStringAttribute('filtered_spoke_vpc_routes');
  }

  // gw_name - computed: false, optional: false, required: true
  private _gwName?: string; 
  public get gwName() {
    return this.getStringAttribute('gw_name');
  }
  public set gwName(value: string) {
    this._gwName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gwNameInput() {
    return this._gwName;
  }

  // gw_size - computed: true, optional: false, required: false
  public get gwSize() {
    return this.getStringAttribute('gw_size');
  }

  // ha_availability_domain - computed: true, optional: false, required: false
  public get haAvailabilityDomain() {
    return this.getStringAttribute('ha_availability_domain');
  }

  // ha_azure_eip_name_resource_group - computed: true, optional: false, required: false
  public get haAzureEipNameResourceGroup() {
    return this.getStringAttribute('ha_azure_eip_name_resource_group');
  }

  // ha_bgp_lan_interfaces - computed: true, optional: false, required: false
  private _haBgpLanInterfaces = new DataAviatrixTransitGatewayHaBgpLanInterfacesList(this, "ha_bgp_lan_interfaces", false);
  public get haBgpLanInterfaces() {
    return this._haBgpLanInterfaces;
  }

  // ha_bgp_lan_ip_list - computed: true, optional: false, required: false
  public get haBgpLanIpList() {
    return this.getListAttribute('ha_bgp_lan_ip_list');
  }

  // ha_cloud_instance_id - computed: true, optional: false, required: false
  public get haCloudInstanceId() {
    return this.getStringAttribute('ha_cloud_instance_id');
  }

  // ha_eip - computed: true, optional: false, required: false
  public get haEip() {
    return this.getStringAttribute('ha_eip');
  }

  // ha_fault_domain - computed: true, optional: false, required: false
  public get haFaultDomain() {
    return this.getStringAttribute('ha_fault_domain');
  }

  // ha_gw_name - computed: true, optional: false, required: false
  public get haGwName() {
    return this.getStringAttribute('ha_gw_name');
  }

  // ha_gw_size - computed: true, optional: false, required: false
  public get haGwSize() {
    return this.getStringAttribute('ha_gw_size');
  }

  // ha_image_version - computed: true, optional: false, required: false
  public get haImageVersion() {
    return this.getStringAttribute('ha_image_version');
  }

  // ha_insane_mode_az - computed: true, optional: false, required: false
  public get haInsaneModeAz() {
    return this.getStringAttribute('ha_insane_mode_az');
  }

  // ha_lan_interface_cidr - computed: true, optional: false, required: false
  public get haLanInterfaceCidr() {
    return this.getStringAttribute('ha_lan_interface_cidr');
  }

  // ha_oob_availability_zone - computed: true, optional: false, required: false
  public get haOobAvailabilityZone() {
    return this.getStringAttribute('ha_oob_availability_zone');
  }

  // ha_oob_management_subnet - computed: true, optional: false, required: false
  public get haOobManagementSubnet() {
    return this.getStringAttribute('ha_oob_management_subnet');
  }

  // ha_private_ip - computed: true, optional: false, required: false
  public get haPrivateIp() {
    return this.getStringAttribute('ha_private_ip');
  }

  // ha_public_ip - computed: true, optional: false, required: false
  public get haPublicIp() {
    return this.getStringAttribute('ha_public_ip');
  }

  // ha_security_group_id - computed: true, optional: false, required: false
  public get haSecurityGroupId() {
    return this.getStringAttribute('ha_security_group_id');
  }

  // ha_software_version - computed: true, optional: false, required: false
  public get haSoftwareVersion() {
    return this.getStringAttribute('ha_software_version');
  }

  // ha_subnet - computed: true, optional: false, required: false
  public get haSubnet() {
    return this.getStringAttribute('ha_subnet');
  }

  // ha_zone - computed: true, optional: false, required: false
  public get haZone() {
    return this.getStringAttribute('ha_zone');
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

  // image_version - computed: true, optional: false, required: false
  public get imageVersion() {
    return this.getStringAttribute('image_version');
  }

  // insane_mode - computed: true, optional: false, required: false
  public get insaneMode() {
    return this.getBooleanAttribute('insane_mode');
  }

  // insane_mode_az - computed: true, optional: false, required: false
  public get insaneModeAz() {
    return this.getStringAttribute('insane_mode_az');
  }

  // lan_interface_cidr - computed: true, optional: false, required: false
  public get lanInterfaceCidr() {
    return this.getStringAttribute('lan_interface_cidr');
  }

  // lan_private_subnet - computed: true, optional: false, required: false
  public get lanPrivateSubnet() {
    return this.getStringAttribute('lan_private_subnet');
  }

  // lan_vpc_id - computed: true, optional: false, required: false
  public get lanVpcId() {
    return this.getStringAttribute('lan_vpc_id');
  }

  // learned_cidrs_approval_mode - computed: true, optional: false, required: false
  public get learnedCidrsApprovalMode() {
    return this.getStringAttribute('learned_cidrs_approval_mode');
  }

  // local_as_number - computed: true, optional: false, required: false
  public get localAsNumber() {
    return this.getStringAttribute('local_as_number');
  }

  // monitor_exclude_list - computed: true, optional: false, required: false
  public get monitorExcludeList() {
    return cdktf.Fn.tolist(this.getListAttribute('monitor_exclude_list'));
  }

  // oob_availability_zone - computed: true, optional: false, required: false
  public get oobAvailabilityZone() {
    return this.getStringAttribute('oob_availability_zone');
  }

  // oob_management_subnet - computed: true, optional: false, required: false
  public get oobManagementSubnet() {
    return this.getStringAttribute('oob_management_subnet');
  }

  // prepend_as_path - computed: true, optional: false, required: false
  public get prependAsPath() {
    return this.getListAttribute('prepend_as_path');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // security_group_id - computed: true, optional: false, required: false
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }

  // single_az_ha - computed: true, optional: false, required: false
  public get singleAzHa() {
    return this.getBooleanAttribute('single_az_ha');
  }

  // single_ip_snat - computed: true, optional: false, required: false
  public get singleIpSnat() {
    return this.getBooleanAttribute('single_ip_snat');
  }

  // software_version - computed: true, optional: false, required: false
  public get softwareVersion() {
    return this.getStringAttribute('software_version');
  }

  // spot_price - computed: true, optional: false, required: false
  public get spotPrice() {
    return this.getStringAttribute('spot_price');
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // tunnel_detection_time - computed: true, optional: false, required: false
  public get tunnelDetectionTime() {
    return this.getNumberAttribute('tunnel_detection_time');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vpc_reg - computed: true, optional: false, required: false
  public get vpcReg() {
    return this.getStringAttribute('vpc_reg');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gw_name: cdktf.stringToTerraform(this._gwName),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gw_name: {
        value: cdktf.stringToHclTerraform(this._gwName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
