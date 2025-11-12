// https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/data-sources/vrfs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNdfcVrfsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the fabric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/data-sources/vrfs#fabric_name DataNdfcVrfs#fabric_name}
  */
  readonly fabricName: string;
}
export interface DataNdfcVrfsVrfsAttachListStruct {
}

export function dataNdfcVrfsVrfsAttachListStructToTerraform(struct?: DataNdfcVrfsVrfsAttachListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNdfcVrfsVrfsAttachListStructToHclTerraform(struct?: DataNdfcVrfsVrfsAttachListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNdfcVrfsVrfsAttachListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNdfcVrfsVrfsAttachListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNdfcVrfsVrfsAttachListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attach_state - computed: true, optional: false, required: false
  public get attachState() {
    return this.getStringAttribute('attach_state');
  }

  // attached - computed: true, optional: false, required: false
  public get attached() {
    return this.getBooleanAttribute('attached');
  }

  // freeform_config - computed: true, optional: false, required: false
  public get freeformConfig() {
    return this.getStringAttribute('freeform_config');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // loopback_id - computed: true, optional: false, required: false
  public get loopbackId() {
    return this.getNumberAttribute('loopback_id');
  }

  // loopback_ipv4 - computed: true, optional: false, required: false
  public get loopbackIpv4() {
    return this.getStringAttribute('loopback_ipv4');
  }

  // loopback_ipv6 - computed: true, optional: false, required: false
  public get loopbackIpv6() {
    return this.getStringAttribute('loopback_ipv6');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // switch_name - computed: true, optional: false, required: false
  public get switchName() {
    return this.getStringAttribute('switch_name');
  }

  // vlan - computed: true, optional: false, required: false
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
}

export class DataNdfcVrfsVrfsAttachListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNdfcVrfsVrfsAttachListStructOutputReference {
    return new DataNdfcVrfsVrfsAttachListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNdfcVrfsVrfs {
}

export function dataNdfcVrfsVrfsToTerraform(struct?: DataNdfcVrfsVrfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNdfcVrfsVrfsToHclTerraform(struct?: DataNdfcVrfsVrfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNdfcVrfsVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNdfcVrfsVrfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNdfcVrfsVrfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise_default_route - computed: true, optional: false, required: false
  public get advertiseDefaultRoute() {
    return this.getBooleanAttribute('advertise_default_route');
  }

  // advertise_host_routes - computed: true, optional: false, required: false
  public get advertiseHostRoutes() {
    return this.getBooleanAttribute('advertise_host_routes');
  }

  // attach_list - computed: true, optional: false, required: false
  private _attachList = new DataNdfcVrfsVrfsAttachListStructList(this, "attach_list", false);
  public get attachList() {
    return this._attachList;
  }

  // bgp_password - computed: true, optional: false, required: false
  public get bgpPassword() {
    return this.getStringAttribute('bgp_password');
  }

  // bgp_password_type - computed: true, optional: false, required: false
  public get bgpPasswordType() {
    return this.getStringAttribute('bgp_password_type');
  }

  // configure_static_default_route - computed: true, optional: false, required: false
  public get configureStaticDefaultRoute() {
    return this.getBooleanAttribute('configure_static_default_route');
  }

  // disable_rt_auto - computed: true, optional: false, required: false
  public get disableRtAuto() {
    return this.getBooleanAttribute('disable_rt_auto');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // interface_description - computed: true, optional: false, required: false
  public get interfaceDescription() {
    return this.getStringAttribute('interface_description');
  }

  // ipv6_link_local - computed: true, optional: false, required: false
  public get ipv6LinkLocal() {
    return this.getBooleanAttribute('ipv6_link_local');
  }

  // loopback_routing_tag - computed: true, optional: false, required: false
  public get loopbackRoutingTag() {
    return this.getNumberAttribute('loopback_routing_tag');
  }

  // max_bgp_paths - computed: true, optional: false, required: false
  public get maxBgpPaths() {
    return this.getNumberAttribute('max_bgp_paths');
  }

  // max_ibgp_paths - computed: true, optional: false, required: false
  public get maxIbgpPaths() {
    return this.getNumberAttribute('max_ibgp_paths');
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // mvpn_inter_as - computed: true, optional: false, required: false
  public get mvpnInterAs() {
    return this.getBooleanAttribute('mvpn_inter_as');
  }

  // netflow - computed: true, optional: false, required: false
  public get netflow() {
    return this.getBooleanAttribute('netflow');
  }

  // netflow_monitor - computed: true, optional: false, required: false
  public get netflowMonitor() {
    return this.getStringAttribute('netflow_monitor');
  }

  // no_rp - computed: true, optional: false, required: false
  public get noRp() {
    return this.getBooleanAttribute('no_rp');
  }

  // overlay_multicast_groups - computed: true, optional: false, required: false
  public get overlayMulticastGroups() {
    return this.getStringAttribute('overlay_multicast_groups');
  }

  // redistribute_direct_route_map - computed: true, optional: false, required: false
  public get redistributeDirectRouteMap() {
    return this.getStringAttribute('redistribute_direct_route_map');
  }

  // route_target_export - computed: true, optional: false, required: false
  public get routeTargetExport() {
    return this.getStringAttribute('route_target_export');
  }

  // route_target_export_cloud_evpn - computed: true, optional: false, required: false
  public get routeTargetExportCloudEvpn() {
    return this.getStringAttribute('route_target_export_cloud_evpn');
  }

  // route_target_export_evpn - computed: true, optional: false, required: false
  public get routeTargetExportEvpn() {
    return this.getStringAttribute('route_target_export_evpn');
  }

  // route_target_export_mvpn - computed: true, optional: false, required: false
  public get routeTargetExportMvpn() {
    return this.getStringAttribute('route_target_export_mvpn');
  }

  // route_target_import - computed: true, optional: false, required: false
  public get routeTargetImport() {
    return this.getStringAttribute('route_target_import');
  }

  // route_target_import_cloud_evpn - computed: true, optional: false, required: false
  public get routeTargetImportCloudEvpn() {
    return this.getStringAttribute('route_target_import_cloud_evpn');
  }

  // route_target_import_evpn - computed: true, optional: false, required: false
  public get routeTargetImportEvpn() {
    return this.getStringAttribute('route_target_import_evpn');
  }

  // route_target_import_mvpn - computed: true, optional: false, required: false
  public get routeTargetImportMvpn() {
    return this.getStringAttribute('route_target_import_mvpn');
  }

  // rp_address - computed: true, optional: false, required: false
  public get rpAddress() {
    return this.getStringAttribute('rp_address');
  }

  // rp_external - computed: true, optional: false, required: false
  public get rpExternal() {
    return this.getBooleanAttribute('rp_external');
  }

  // rp_loopback_id - computed: true, optional: false, required: false
  public get rpLoopbackId() {
    return this.getNumberAttribute('rp_loopback_id');
  }

  // trm - computed: true, optional: false, required: false
  public get trm() {
    return this.getBooleanAttribute('trm');
  }

  // trm_bgw_msite - computed: true, optional: false, required: false
  public get trmBgwMsite() {
    return this.getBooleanAttribute('trm_bgw_msite');
  }

  // underlay_multicast_address - computed: true, optional: false, required: false
  public get underlayMulticastAddress() {
    return this.getStringAttribute('underlay_multicast_address');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }

  // vlan_name - computed: true, optional: false, required: false
  public get vlanName() {
    return this.getStringAttribute('vlan_name');
  }

  // vrf_description - computed: true, optional: false, required: false
  public get vrfDescription() {
    return this.getStringAttribute('vrf_description');
  }

  // vrf_extension_template - computed: true, optional: false, required: false
  public get vrfExtensionTemplate() {
    return this.getStringAttribute('vrf_extension_template');
  }

  // vrf_id - computed: true, optional: false, required: false
  public get vrfId() {
    return this.getNumberAttribute('vrf_id');
  }

  // vrf_name - computed: true, optional: false, required: false
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }

  // vrf_status - computed: true, optional: false, required: false
  public get vrfStatus() {
    return this.getStringAttribute('vrf_status');
  }

  // vrf_template - computed: true, optional: false, required: false
  public get vrfTemplate() {
    return this.getStringAttribute('vrf_template');
  }
}

export class DataNdfcVrfsVrfsList extends cdktf.ComplexList {

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
  public get(index: number): DataNdfcVrfsVrfsOutputReference {
    return new DataNdfcVrfsVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/data-sources/vrfs ndfc_vrfs}
*/
export class DataNdfcVrfs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ndfc_vrfs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNdfcVrfs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNdfcVrfs to import
  * @param importFromId The id of the existing DataNdfcVrfs that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/data-sources/vrfs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNdfcVrfs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ndfc_vrfs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/data-sources/vrfs ndfc_vrfs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNdfcVrfsConfig
  */
  public constructor(scope: Construct, id: string, config: DataNdfcVrfsConfig) {
    super(scope, id, {
      terraformResourceType: 'ndfc_vrfs',
      terraformGeneratorMetadata: {
        providerName: 'ndfc',
        providerVersion: '0.2.0',
        providerVersionConstraint: '0.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fabricName = config.fabricName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fabric_name - computed: false, optional: false, required: true
  private _fabricName?: string; 
  public get fabricName() {
    return this.getStringAttribute('fabric_name');
  }
  public set fabricName(value: string) {
    this._fabricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricNameInput() {
    return this._fabricName;
  }

  // vrfs - computed: true, optional: false, required: false
  private _vrfs = new DataNdfcVrfsVrfsList(this, "vrfs", false);
  public get vrfs() {
    return this._vrfs;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fabric_name: cdktf.stringToTerraform(this._fabricName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fabric_name: {
        value: cdktf.stringToHclTerraform(this._fabricName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
