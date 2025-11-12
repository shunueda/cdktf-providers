// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/transit_gateways
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAviatrixTransitGatewaysConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/transit_gateways#id DataAviatrixTransitGateways#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataAviatrixTransitGatewaysGatewayListBgpLanInterfaces {
}

export function dataAviatrixTransitGatewaysGatewayListBgpLanInterfacesToTerraform(struct?: DataAviatrixTransitGatewaysGatewayListBgpLanInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviatrixTransitGatewaysGatewayListBgpLanInterfacesToHclTerraform(struct?: DataAviatrixTransitGatewaysGatewayListBgpLanInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviatrixTransitGatewaysGatewayListBgpLanInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviatrixTransitGatewaysGatewayListBgpLanInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviatrixTransitGatewaysGatewayListBgpLanInterfaces | undefined) {
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

export class DataAviatrixTransitGatewaysGatewayListBgpLanInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviatrixTransitGatewaysGatewayListBgpLanInterfacesOutputReference {
    return new DataAviatrixTransitGatewaysGatewayListBgpLanInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviatrixTransitGatewaysGatewayListHaBgpLanInterfaces {
}

export function dataAviatrixTransitGatewaysGatewayListHaBgpLanInterfacesToTerraform(struct?: DataAviatrixTransitGatewaysGatewayListHaBgpLanInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviatrixTransitGatewaysGatewayListHaBgpLanInterfacesToHclTerraform(struct?: DataAviatrixTransitGatewaysGatewayListHaBgpLanInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviatrixTransitGatewaysGatewayListHaBgpLanInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviatrixTransitGatewaysGatewayListHaBgpLanInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviatrixTransitGatewaysGatewayListHaBgpLanInterfaces | undefined) {
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

export class DataAviatrixTransitGatewaysGatewayListHaBgpLanInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviatrixTransitGatewaysGatewayListHaBgpLanInterfacesOutputReference {
    return new DataAviatrixTransitGatewaysGatewayListHaBgpLanInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviatrixTransitGatewaysGatewayListStruct {
}

export function dataAviatrixTransitGatewaysGatewayListStructToTerraform(struct?: DataAviatrixTransitGatewaysGatewayListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviatrixTransitGatewaysGatewayListStructToHclTerraform(struct?: DataAviatrixTransitGatewaysGatewayListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviatrixTransitGatewaysGatewayListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviatrixTransitGatewaysGatewayListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviatrixTransitGatewaysGatewayListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // allocate_new_eip - computed: true, optional: false, required: false
  public get allocateNewEip() {
    return this.getBooleanAttribute('allocate_new_eip');
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
  private _bgpLanInterfaces = new DataAviatrixTransitGatewaysGatewayListBgpLanInterfacesList(this, "bgp_lan_interfaces", false);
  public get bgpLanInterfaces() {
    return this._bgpLanInterfaces;
  }

  // bgp_lan_ip_list - computed: true, optional: false, required: false
  public get bgpLanIpList() {
    return this.getListAttribute('bgp_lan_ip_list');
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

  // enable_active_standby - computed: true, optional: false, required: false
  public get enableActiveStandby() {
    return this.getBooleanAttribute('enable_active_standby');
  }

  // enable_active_standby_preemptive - computed: true, optional: false, required: false
  public get enableActiveStandbyPreemptive() {
    return this.getBooleanAttribute('enable_active_standby_preemptive');
  }

  // enable_bgp_over_lan - computed: true, optional: false, required: false
  public get enableBgpOverLan() {
    return this.getBooleanAttribute('enable_bgp_over_lan');
  }

  // enable_encrypt_volume - computed: true, optional: false, required: false
  public get enableEncryptVolume() {
    return this.getBooleanAttribute('enable_encrypt_volume');
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

  // gw_name - computed: true, optional: false, required: false
  public get gwName() {
    return this.getStringAttribute('gw_name');
  }

  // gw_size - computed: true, optional: false, required: false
  public get gwSize() {
    return this.getStringAttribute('gw_size');
  }

  // ha_bgp_lan_interfaces - computed: true, optional: false, required: false
  private _haBgpLanInterfaces = new DataAviatrixTransitGatewaysGatewayListHaBgpLanInterfacesList(this, "ha_bgp_lan_interfaces", false);
  public get haBgpLanInterfaces() {
    return this._haBgpLanInterfaces;
  }

  // ha_bgp_lan_ip_list - computed: true, optional: false, required: false
  public get haBgpLanIpList() {
    return this.getListAttribute('ha_bgp_lan_ip_list');
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
}

export class DataAviatrixTransitGatewaysGatewayListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataAviatrixTransitGatewaysGatewayListStructOutputReference {
    return new DataAviatrixTransitGatewaysGatewayListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/transit_gateways aviatrix_transit_gateways}
*/
export class DataAviatrixTransitGateways extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_transit_gateways";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAviatrixTransitGateways resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAviatrixTransitGateways to import
  * @param importFromId The id of the existing DataAviatrixTransitGateways that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/transit_gateways#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAviatrixTransitGateways to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_transit_gateways", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/transit_gateways aviatrix_transit_gateways} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAviatrixTransitGatewaysConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAviatrixTransitGatewaysConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_transit_gateways',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gateway_list - computed: true, optional: false, required: false
  private _gatewayList = new DataAviatrixTransitGatewaysGatewayListStructList(this, "gateway_list", false);
  public get gatewayList() {
    return this._gatewayList;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
