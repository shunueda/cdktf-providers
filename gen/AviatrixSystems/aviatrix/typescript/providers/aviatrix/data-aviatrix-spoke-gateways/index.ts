// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/data-sources/spoke_gateways
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAviatrixSpokeGatewaysConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/data-sources/spoke_gateways#id DataAviatrixSpokeGateways#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataAviatrixSpokeGatewaysGatewayListStruct {
}

export function dataAviatrixSpokeGatewaysGatewayListStructToTerraform(struct?: DataAviatrixSpokeGatewaysGatewayListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviatrixSpokeGatewaysGatewayListStructToHclTerraform(struct?: DataAviatrixSpokeGatewaysGatewayListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviatrixSpokeGatewaysGatewayListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviatrixSpokeGatewaysGatewayListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviatrixSpokeGatewaysGatewayListStruct | undefined) {
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

  // bgp_polling_time - computed: true, optional: false, required: false
  public get bgpPollingTime() {
    return this.getNumberAttribute('bgp_polling_time');
  }

  // cloud_instance_id - computed: true, optional: false, required: false
  public get cloudInstanceId() {
    return this.getStringAttribute('cloud_instance_id');
  }

  // cloud_type - computed: true, optional: false, required: false
  public get cloudType() {
    return this.getNumberAttribute('cloud_type');
  }

  // customized_spoke_vpc_routes - computed: true, optional: false, required: false
  public get customizedSpokeVpcRoutes() {
    return this.getStringAttribute('customized_spoke_vpc_routes');
  }

  // disable_route_propagation - computed: true, optional: false, required: false
  public get disableRoutePropagation() {
    return this.getBooleanAttribute('disable_route_propagation');
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

  // enable_auto_advertise_s2c_cidrs - computed: true, optional: false, required: false
  public get enableAutoAdvertiseS2CCidrs() {
    return this.getBooleanAttribute('enable_auto_advertise_s2c_cidrs');
  }

  // enable_bgp - computed: true, optional: false, required: false
  public get enableBgp() {
    return this.getBooleanAttribute('enable_bgp');
  }

  // enable_encrypt_volume - computed: true, optional: false, required: false
  public get enableEncryptVolume() {
    return this.getBooleanAttribute('enable_encrypt_volume');
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

  // enable_private_oob - computed: true, optional: false, required: false
  public get enablePrivateOob() {
    return this.getBooleanAttribute('enable_private_oob');
  }

  // enable_private_vpc_default_route - computed: true, optional: false, required: false
  public get enablePrivateVpcDefaultRoute() {
    return this.getBooleanAttribute('enable_private_vpc_default_route');
  }

  // enable_skip_public_route_table_update - computed: true, optional: false, required: false
  public get enableSkipPublicRouteTableUpdate() {
    return this.getBooleanAttribute('enable_skip_public_route_table_update');
  }

  // enable_spot_instance - computed: true, optional: false, required: false
  public get enableSpotInstance() {
    return this.getBooleanAttribute('enable_spot_instance');
  }

  // enable_vpc_dns_server - computed: true, optional: false, required: false
  public get enableVpcDnsServer() {
    return this.getBooleanAttribute('enable_vpc_dns_server');
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

  // image_version - computed: true, optional: false, required: false
  public get imageVersion() {
    return this.getStringAttribute('image_version');
  }

  // included_advertised_spoke_routes - computed: true, optional: false, required: false
  public get includedAdvertisedSpokeRoutes() {
    return this.getStringAttribute('included_advertised_spoke_routes');
  }

  // insane_mode - computed: true, optional: false, required: false
  public get insaneMode() {
    return this.getBooleanAttribute('insane_mode');
  }

  // insane_mode_az - computed: true, optional: false, required: false
  public get insaneModeAz() {
    return this.getStringAttribute('insane_mode_az');
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

  // spoke_bgp_manual_advertise_cidrs - computed: true, optional: false, required: false
  public get spokeBgpManualAdvertiseCidrs() {
    return this.getListAttribute('spoke_bgp_manual_advertise_cidrs');
  }

  // spot_price - computed: true, optional: false, required: false
  public get spotPrice() {
    return this.getStringAttribute('spot_price');
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
  }

  // transit_gw - computed: true, optional: false, required: false
  public get transitGw() {
    return this.getStringAttribute('transit_gw');
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

export class DataAviatrixSpokeGatewaysGatewayListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataAviatrixSpokeGatewaysGatewayListStructOutputReference {
    return new DataAviatrixSpokeGatewaysGatewayListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/data-sources/spoke_gateways aviatrix_spoke_gateways}
*/
export class DataAviatrixSpokeGateways extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_spoke_gateways";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAviatrixSpokeGateways resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAviatrixSpokeGateways to import
  * @param importFromId The id of the existing DataAviatrixSpokeGateways that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/data-sources/spoke_gateways#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAviatrixSpokeGateways to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_spoke_gateways", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/data-sources/spoke_gateways aviatrix_spoke_gateways} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAviatrixSpokeGatewaysConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAviatrixSpokeGatewaysConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_spoke_gateways',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.2.0',
        providerVersionConstraint: '8.2.0'
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
  private _gatewayList = new DataAviatrixSpokeGatewaysGatewayListStructList(this, "gateway_list", false);
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
