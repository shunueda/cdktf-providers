// https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/port
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowermaxPortConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/port#timeouts DataPowermaxPort#timeouts}
  */
  readonly timeouts?: DataPowermaxPortTimeouts;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/port#filter DataPowermaxPort#filter}
  */
  readonly filter?: DataPowermaxPortFilter;
}
export interface DataPowermaxPortPortDetails {
}

export function dataPowermaxPortPortDetailsToTerraform(struct?: DataPowermaxPortPortDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowermaxPortPortDetailsToHclTerraform(struct?: DataPowermaxPortPortDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowermaxPortPortDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowermaxPortPortDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowermaxPortPortDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aclx - computed: true, optional: false, required: false
  public get aclx() {
    return this.getBooleanAttribute('aclx');
  }

  // avoid_reset_broadcast - computed: true, optional: false, required: false
  public get avoidResetBroadcast() {
    return this.getBooleanAttribute('avoid_reset_broadcast');
  }

  // capable_protocol - computed: true, optional: false, required: false
  public get capableProtocol() {
    return this.getListAttribute('capable_protocol');
  }

  // common_serial_number - computed: true, optional: false, required: false
  public get commonSerialNumber() {
    return this.getBooleanAttribute('common_serial_number');
  }

  // director_id - computed: true, optional: false, required: false
  public get directorId() {
    return this.getStringAttribute('director_id');
  }

  // director_status - computed: true, optional: false, required: false
  public get directorStatus() {
    return this.getStringAttribute('director_status');
  }

  // disable_q_reset_on_ua - computed: true, optional: false, required: false
  public get disableQResetOnUa() {
    return this.getBooleanAttribute('disable_q_reset_on_ua');
  }

  // enable_auto_negotiate - computed: true, optional: false, required: false
  public get enableAutoNegotiate() {
    return this.getBooleanAttribute('enable_auto_negotiate');
  }

  // enabled_protocol - computed: true, optional: false, required: false
  public get enabledProtocol() {
    return this.getListAttribute('enabled_protocol');
  }

  // environ_set - computed: true, optional: false, required: false
  public get environSet() {
    return this.getBooleanAttribute('environ_set');
  }

  // hp_3000_mode - computed: true, optional: false, required: false
  public get hp3000Mode() {
    return this.getBooleanAttribute('hp_3000_mode');
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // init_point_to_point - computed: true, optional: false, required: false
  public get initPointToPoint() {
    return this.getBooleanAttribute('init_point_to_point');
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_default_gateway - computed: true, optional: false, required: false
  public get ipv4DefaultGateway() {
    return this.getStringAttribute('ipv4_default_gateway');
  }

  // ipv4_domain_name - computed: true, optional: false, required: false
  public get ipv4DomainName() {
    return this.getStringAttribute('ipv4_domain_name');
  }

  // ipv4_netmask - computed: true, optional: false, required: false
  public get ipv4Netmask() {
    return this.getStringAttribute('ipv4_netmask');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // ipv6_prefix - computed: true, optional: false, required: false
  public get ipv6Prefix() {
    return this.getStringAttribute('ipv6_prefix');
  }

  // iscsi_endpoint - computed: true, optional: false, required: false
  public get iscsiEndpoint() {
    return this.getBooleanAttribute('iscsi_endpoint');
  }

  // iscsi_target - computed: true, optional: false, required: false
  public get iscsiTarget() {
    return this.getBooleanAttribute('iscsi_target');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // maskingview - computed: true, optional: false, required: false
  public get maskingview() {
    return this.getListAttribute('maskingview');
  }

  // max_speed - computed: true, optional: false, required: false
  public get maxSpeed() {
    return this.getStringAttribute('max_speed');
  }

  // negotiate_reset - computed: true, optional: false, required: false
  public get negotiateReset() {
    return this.getBooleanAttribute('negotiate_reset');
  }

  // negotiated_speed - computed: true, optional: false, required: false
  public get negotiatedSpeed() {
    return this.getStringAttribute('negotiated_speed');
  }

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getNumberAttribute('network_id');
  }

  // no_participating - computed: true, optional: false, required: false
  public get noParticipating() {
    return this.getBooleanAttribute('no_participating');
  }

  // num_of_cores - computed: true, optional: false, required: false
  public get numOfCores() {
    return this.getNumberAttribute('num_of_cores');
  }

  // num_of_hypers - computed: true, optional: false, required: false
  public get numOfHypers() {
    return this.getNumberAttribute('num_of_hypers');
  }

  // num_of_mapped_vols - computed: true, optional: false, required: false
  public get numOfMappedVols() {
    return this.getNumberAttribute('num_of_mapped_vols');
  }

  // num_of_masking_views - computed: true, optional: false, required: false
  public get numOfMaskingViews() {
    return this.getNumberAttribute('num_of_masking_views');
  }

  // num_of_port_groups - computed: true, optional: false, required: false
  public get numOfPortGroups() {
    return this.getNumberAttribute('num_of_port_groups');
  }

  // nvmetcp_endpoint - computed: true, optional: false, required: false
  public get nvmetcpEndpoint() {
    return this.getBooleanAttribute('nvmetcp_endpoint');
  }

  // port_id - computed: true, optional: false, required: false
  public get portId() {
    return this.getStringAttribute('port_id');
  }

  // port_interface - computed: true, optional: false, required: false
  public get portInterface() {
    return this.getStringAttribute('port_interface');
  }

  // port_status - computed: true, optional: false, required: false
  public get portStatus() {
    return this.getStringAttribute('port_status');
  }

  // portgroup - computed: true, optional: false, required: false
  public get portgroup() {
    return this.getListAttribute('portgroup');
  }

  // power_levels_last_sampled_date_milliseconds - computed: true, optional: false, required: false
  public get powerLevelsLastSampledDateMilliseconds() {
    return this.getNumberAttribute('power_levels_last_sampled_date_milliseconds');
  }

  // prevent_automatic_rdf_link_recovery - computed: true, optional: false, required: false
  public get preventAutomaticRdfLinkRecovery() {
    return this.getStringAttribute('prevent_automatic_rdf_link_recovery');
  }

  // prevent_ra_online_on_power_up - computed: true, optional: false, required: false
  public get preventRaOnlineOnPowerUp() {
    return this.getStringAttribute('prevent_ra_online_on_power_up');
  }

  // rdf_hardware_compression - computed: true, optional: false, required: false
  public get rdfHardwareCompression() {
    return this.getStringAttribute('rdf_hardware_compression');
  }

  // rdf_hardware_compression_supported - computed: true, optional: false, required: false
  public get rdfHardwareCompressionSupported() {
    return this.getStringAttribute('rdf_hardware_compression_supported');
  }

  // rdf_ra_group_attributes_farpoint - computed: true, optional: false, required: false
  public get rdfRaGroupAttributesFarpoint() {
    return this.getBooleanAttribute('rdf_ra_group_attributes_farpoint');
  }

  // rdf_software_compression - computed: true, optional: false, required: false
  public get rdfSoftwareCompression() {
    return this.getStringAttribute('rdf_software_compression');
  }

  // rdf_software_compression_supported - computed: true, optional: false, required: false
  public get rdfSoftwareCompressionSupported() {
    return this.getStringAttribute('rdf_software_compression_supported');
  }

  // rx_power_level_mw - computed: true, optional: false, required: false
  public get rxPowerLevelMw() {
    return this.getNumberAttribute('rx_power_level_mw');
  }

  // scsi_3 - computed: true, optional: false, required: false
  public get scsi3() {
    return this.getBooleanAttribute('scsi_3');
  }

  // scsi_support1 - computed: true, optional: false, required: false
  public get scsiSupport1() {
    return this.getBooleanAttribute('scsi_support1');
  }

  // siemens - computed: true, optional: false, required: false
  public get siemens() {
    return this.getBooleanAttribute('siemens');
  }

  // soft_reset - computed: true, optional: false, required: false
  public get softReset() {
    return this.getBooleanAttribute('soft_reset');
  }

  // spc2_protocol_version - computed: true, optional: false, required: false
  public get spc2ProtocolVersion() {
    return this.getBooleanAttribute('spc2_protocol_version');
  }

  // sunapee - computed: true, optional: false, required: false
  public get sunapee() {
    return this.getBooleanAttribute('sunapee');
  }

  // tcp_port - computed: true, optional: false, required: false
  public get tcpPort() {
    return this.getNumberAttribute('tcp_port');
  }

  // tx_power_level_mw - computed: true, optional: false, required: false
  public get txPowerLevelMw() {
    return this.getNumberAttribute('tx_power_level_mw');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unique_wwn - computed: true, optional: false, required: false
  public get uniqueWwn() {
    return this.getBooleanAttribute('unique_wwn');
  }

  // vcm_state - computed: true, optional: false, required: false
  public get vcmState() {
    return this.getStringAttribute('vcm_state');
  }

  // vnx_attached - computed: true, optional: false, required: false
  public get vnxAttached() {
    return this.getBooleanAttribute('vnx_attached');
  }

  // volume_set_addressing - computed: true, optional: false, required: false
  public get volumeSetAddressing() {
    return this.getBooleanAttribute('volume_set_addressing');
  }

  // wwn_node - computed: true, optional: false, required: false
  public get wwnNode() {
    return this.getStringAttribute('wwn_node');
  }

  // z_hyperlink_port - computed: true, optional: false, required: false
  public get zHyperlinkPort() {
    return this.getBooleanAttribute('z_hyperlink_port');
  }
}

export class DataPowermaxPortPortDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowermaxPortPortDetailsOutputReference {
    return new DataPowermaxPortPortDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowermaxPortTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/port#read DataPowermaxPort#read}
  */
  readonly read?: string;
}

export function dataPowermaxPortTimeoutsToTerraform(struct?: DataPowermaxPortTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataPowermaxPortTimeoutsToHclTerraform(struct?: DataPowermaxPortTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowermaxPortTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowermaxPortTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowermaxPortTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}
export interface DataPowermaxPortFilter {
  /**
  * A set of port ids to filter on, should be look like the following ['directorId:portId']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/port#port_ids DataPowermaxPort#port_ids}
  */
  readonly portIds?: string[];
}

export function dataPowermaxPortFilterToTerraform(struct?: DataPowermaxPortFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.portIds),
  }
}


export function dataPowermaxPortFilterToHclTerraform(struct?: DataPowermaxPortFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.portIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowermaxPortFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowermaxPortFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.portIds = this._portIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowermaxPortFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portIds = value.portIds;
    }
  }

  // port_ids - computed: false, optional: true, required: false
  private _portIds?: string[]; 
  public get portIds() {
    return cdktf.Fn.tolist(this.getListAttribute('port_ids'));
  }
  public set portIds(value: string[]) {
    this._portIds = value;
  }
  public resetPortIds() {
    this._portIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIdsInput() {
    return this._portIds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/port powermax_port}
*/
export class DataPowermaxPort extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powermax_port";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowermaxPort resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowermaxPort to import
  * @param importFromId The id of the existing DataPowermaxPort that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/port#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowermaxPort to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powermax_port", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/data-sources/port powermax_port} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowermaxPortConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowermaxPortConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powermax_port',
      terraformGeneratorMetadata: {
        providerName: 'powermax',
        providerVersion: '1.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._timeouts.internalValue = config.timeouts;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // port_details - computed: true, optional: false, required: false
  private _portDetails = new DataPowermaxPortPortDetailsList(this, "port_details", false);
  public get portDetails() {
    return this._portDetails;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataPowermaxPortTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataPowermaxPortTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowermaxPortFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowermaxPortFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      timeouts: dataPowermaxPortTimeoutsToTerraform(this._timeouts.internalValue),
      filter: dataPowermaxPortFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      timeouts: {
        value: dataPowermaxPortTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowermaxPortTimeouts",
      },
      filter: {
        value: dataPowermaxPortFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowermaxPortFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
