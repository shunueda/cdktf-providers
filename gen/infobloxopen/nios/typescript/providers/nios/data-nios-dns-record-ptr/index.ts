// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_record_ptr
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNiosDnsRecordPtrConfig extends cdktf.TerraformMetaArguments {
  /**
  * External Attribute Filters are used to return a more specific list of results by filtering on external attributes. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_record_ptr#extattrfilters DataNiosDnsRecordPtr#extattrfilters}
  */
  readonly extattrfilters?: { [key: string]: string };
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_record_ptr#filters DataNiosDnsRecordPtr#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Maximum number of objects to be returned. Defaults to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_record_ptr#max_results DataNiosDnsRecordPtr#max_results}
  */
  readonly maxResults?: number;
  /**
  * Enable (1) or disable (0) paging for the data source query. When enabled, the system retrieves results in pages, allowing efficient handling of large result sets. Paging is enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_record_ptr#paging DataNiosDnsRecordPtr#paging}
  */
  readonly paging?: number;
}
export interface DataNiosDnsRecordPtrResultAwsRte53RecordInfo {
}

export function dataNiosDnsRecordPtrResultAwsRte53RecordInfoToTerraform(struct?: DataNiosDnsRecordPtrResultAwsRte53RecordInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNiosDnsRecordPtrResultAwsRte53RecordInfoToHclTerraform(struct?: DataNiosDnsRecordPtrResultAwsRte53RecordInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNiosDnsRecordPtrResultAwsRte53RecordInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDnsRecordPtrResultAwsRte53RecordInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsRecordPtrResultAwsRte53RecordInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alias_target_dns_name - computed: true, optional: false, required: false
  public get aliasTargetDnsName() {
    return this.getStringAttribute('alias_target_dns_name');
  }

  // alias_target_evaluate_target_health - computed: true, optional: false, required: false
  public get aliasTargetEvaluateTargetHealth() {
    return this.getBooleanAttribute('alias_target_evaluate_target_health');
  }

  // alias_target_hosted_zone_id - computed: true, optional: false, required: false
  public get aliasTargetHostedZoneId() {
    return this.getStringAttribute('alias_target_hosted_zone_id');
  }

  // failover - computed: true, optional: false, required: false
  public get failover() {
    return this.getStringAttribute('failover');
  }

  // geolocation_continent_code - computed: true, optional: false, required: false
  public get geolocationContinentCode() {
    return this.getStringAttribute('geolocation_continent_code');
  }

  // geolocation_country_code - computed: true, optional: false, required: false
  public get geolocationCountryCode() {
    return this.getStringAttribute('geolocation_country_code');
  }

  // geolocation_subdivision_code - computed: true, optional: false, required: false
  public get geolocationSubdivisionCode() {
    return this.getStringAttribute('geolocation_subdivision_code');
  }

  // health_check_id - computed: true, optional: false, required: false
  public get healthCheckId() {
    return this.getStringAttribute('health_check_id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // set_identifier - computed: true, optional: false, required: false
  public get setIdentifier() {
    return this.getStringAttribute('set_identifier');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}
export interface DataNiosDnsRecordPtrResultCloudInfoDelegatedMember {
}

export function dataNiosDnsRecordPtrResultCloudInfoDelegatedMemberToTerraform(struct?: DataNiosDnsRecordPtrResultCloudInfoDelegatedMember): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNiosDnsRecordPtrResultCloudInfoDelegatedMemberToHclTerraform(struct?: DataNiosDnsRecordPtrResultCloudInfoDelegatedMember): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNiosDnsRecordPtrResultCloudInfoDelegatedMemberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDnsRecordPtrResultCloudInfoDelegatedMember | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsRecordPtrResultCloudInfoDelegatedMember | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4addr - computed: true, optional: false, required: false
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4addr');
  }

  // ipv6addr - computed: true, optional: false, required: false
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6addr');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataNiosDnsRecordPtrResultCloudInfo {
}

export function dataNiosDnsRecordPtrResultCloudInfoToTerraform(struct?: DataNiosDnsRecordPtrResultCloudInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNiosDnsRecordPtrResultCloudInfoToHclTerraform(struct?: DataNiosDnsRecordPtrResultCloudInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNiosDnsRecordPtrResultCloudInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDnsRecordPtrResultCloudInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsRecordPtrResultCloudInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authority_type - computed: true, optional: false, required: false
  public get authorityType() {
    return this.getStringAttribute('authority_type');
  }

  // delegated_member - computed: true, optional: false, required: false
  private _delegatedMember = new DataNiosDnsRecordPtrResultCloudInfoDelegatedMemberOutputReference(this, "delegated_member");
  public get delegatedMember() {
    return this._delegatedMember;
  }

  // delegated_root - computed: true, optional: false, required: false
  public get delegatedRoot() {
    return this.getStringAttribute('delegated_root');
  }

  // delegated_scope - computed: true, optional: false, required: false
  public get delegatedScope() {
    return this.getStringAttribute('delegated_scope');
  }

  // mgmt_platform - computed: true, optional: false, required: false
  public get mgmtPlatform() {
    return this.getStringAttribute('mgmt_platform');
  }

  // owned_by_adaptor - computed: true, optional: false, required: false
  public get ownedByAdaptor() {
    return this.getBooleanAttribute('owned_by_adaptor');
  }

  // tenant - computed: true, optional: false, required: false
  public get tenant() {
    return this.getStringAttribute('tenant');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getStringAttribute('usage');
  }
}
export interface DataNiosDnsRecordPtrResultDiscoveredData {
}

export function dataNiosDnsRecordPtrResultDiscoveredDataToTerraform(struct?: DataNiosDnsRecordPtrResultDiscoveredData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNiosDnsRecordPtrResultDiscoveredDataToHclTerraform(struct?: DataNiosDnsRecordPtrResultDiscoveredData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNiosDnsRecordPtrResultDiscoveredDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDnsRecordPtrResultDiscoveredData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsRecordPtrResultDiscoveredData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ap_ip_address - computed: true, optional: false, required: false
  public get apIpAddress() {
    return this.getStringAttribute('ap_ip_address');
  }

  // ap_name - computed: true, optional: false, required: false
  public get apName() {
    return this.getStringAttribute('ap_name');
  }

  // ap_ssid - computed: true, optional: false, required: false
  public get apSsid() {
    return this.getStringAttribute('ap_ssid');
  }

  // bgp_as - computed: true, optional: false, required: false
  public get bgpAs() {
    return this.getNumberAttribute('bgp_as');
  }

  // bridge_domain - computed: true, optional: false, required: false
  public get bridgeDomain() {
    return this.getStringAttribute('bridge_domain');
  }

  // cisco_ise_endpoint_profile - computed: true, optional: false, required: false
  public get ciscoIseEndpointProfile() {
    return this.getStringAttribute('cisco_ise_endpoint_profile');
  }

  // cisco_ise_security_group - computed: true, optional: false, required: false
  public get ciscoIseSecurityGroup() {
    return this.getStringAttribute('cisco_ise_security_group');
  }

  // cisco_ise_session_state - computed: true, optional: false, required: false
  public get ciscoIseSessionState() {
    return this.getStringAttribute('cisco_ise_session_state');
  }

  // cisco_ise_ssid - computed: true, optional: false, required: false
  public get ciscoIseSsid() {
    return this.getStringAttribute('cisco_ise_ssid');
  }

  // cmp_type - computed: true, optional: false, required: false
  public get cmpType() {
    return this.getStringAttribute('cmp_type');
  }

  // device_contact - computed: true, optional: false, required: false
  public get deviceContact() {
    return this.getStringAttribute('device_contact');
  }

  // device_location - computed: true, optional: false, required: false
  public get deviceLocation() {
    return this.getStringAttribute('device_location');
  }

  // device_model - computed: true, optional: false, required: false
  public get deviceModel() {
    return this.getStringAttribute('device_model');
  }

  // device_port_name - computed: true, optional: false, required: false
  public get devicePortName() {
    return this.getStringAttribute('device_port_name');
  }

  // device_port_type - computed: true, optional: false, required: false
  public get devicePortType() {
    return this.getStringAttribute('device_port_type');
  }

  // device_type - computed: true, optional: false, required: false
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }

  // device_vendor - computed: true, optional: false, required: false
  public get deviceVendor() {
    return this.getStringAttribute('device_vendor');
  }

  // discovered_name - computed: true, optional: false, required: false
  public get discoveredName() {
    return this.getStringAttribute('discovered_name');
  }

  // discoverer - computed: true, optional: false, required: false
  public get discoverer() {
    return this.getStringAttribute('discoverer');
  }

  // duid - computed: true, optional: false, required: false
  public get duid() {
    return this.getStringAttribute('duid');
  }

  // endpoint_groups - computed: true, optional: false, required: false
  public get endpointGroups() {
    return this.getStringAttribute('endpoint_groups');
  }

  // first_discovered - computed: true, optional: false, required: false
  public get firstDiscovered() {
    return this.getNumberAttribute('first_discovered');
  }

  // iprg_no - computed: true, optional: false, required: false
  public get iprgNo() {
    return this.getNumberAttribute('iprg_no');
  }

  // iprg_state - computed: true, optional: false, required: false
  public get iprgState() {
    return this.getStringAttribute('iprg_state');
  }

  // iprg_type - computed: true, optional: false, required: false
  public get iprgType() {
    return this.getStringAttribute('iprg_type');
  }

  // last_discovered - computed: true, optional: false, required: false
  public get lastDiscovered() {
    return this.getNumberAttribute('last_discovered');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // mgmt_ip_address - computed: true, optional: false, required: false
  public get mgmtIpAddress() {
    return this.getStringAttribute('mgmt_ip_address');
  }

  // netbios_name - computed: true, optional: false, required: false
  public get netbiosName() {
    return this.getStringAttribute('netbios_name');
  }

  // network_component_contact - computed: true, optional: false, required: false
  public get networkComponentContact() {
    return this.getStringAttribute('network_component_contact');
  }

  // network_component_description - computed: true, optional: false, required: false
  public get networkComponentDescription() {
    return this.getStringAttribute('network_component_description');
  }

  // network_component_ip - computed: true, optional: false, required: false
  public get networkComponentIp() {
    return this.getStringAttribute('network_component_ip');
  }

  // network_component_location - computed: true, optional: false, required: false
  public get networkComponentLocation() {
    return this.getStringAttribute('network_component_location');
  }

  // network_component_model - computed: true, optional: false, required: false
  public get networkComponentModel() {
    return this.getStringAttribute('network_component_model');
  }

  // network_component_name - computed: true, optional: false, required: false
  public get networkComponentName() {
    return this.getStringAttribute('network_component_name');
  }

  // network_component_port_description - computed: true, optional: false, required: false
  public get networkComponentPortDescription() {
    return this.getStringAttribute('network_component_port_description');
  }

  // network_component_port_name - computed: true, optional: false, required: false
  public get networkComponentPortName() {
    return this.getStringAttribute('network_component_port_name');
  }

  // network_component_port_number - computed: true, optional: false, required: false
  public get networkComponentPortNumber() {
    return this.getStringAttribute('network_component_port_number');
  }

  // network_component_type - computed: true, optional: false, required: false
  public get networkComponentType() {
    return this.getStringAttribute('network_component_type');
  }

  // network_component_vendor - computed: true, optional: false, required: false
  public get networkComponentVendor() {
    return this.getStringAttribute('network_component_vendor');
  }

  // open_ports - computed: true, optional: false, required: false
  public get openPorts() {
    return this.getStringAttribute('open_ports');
  }

  // os - computed: true, optional: false, required: false
  public get os() {
    return this.getStringAttribute('os');
  }

  // port_duplex - computed: true, optional: false, required: false
  public get portDuplex() {
    return this.getStringAttribute('port_duplex');
  }

  // port_link_status - computed: true, optional: false, required: false
  public get portLinkStatus() {
    return this.getStringAttribute('port_link_status');
  }

  // port_speed - computed: true, optional: false, required: false
  public get portSpeed() {
    return this.getStringAttribute('port_speed');
  }

  // port_status - computed: true, optional: false, required: false
  public get portStatus() {
    return this.getStringAttribute('port_status');
  }

  // port_type - computed: true, optional: false, required: false
  public get portType() {
    return this.getStringAttribute('port_type');
  }

  // port_vlan_description - computed: true, optional: false, required: false
  public get portVlanDescription() {
    return this.getStringAttribute('port_vlan_description');
  }

  // port_vlan_name - computed: true, optional: false, required: false
  public get portVlanName() {
    return this.getStringAttribute('port_vlan_name');
  }

  // port_vlan_number - computed: true, optional: false, required: false
  public get portVlanNumber() {
    return this.getStringAttribute('port_vlan_number');
  }

  // task_name - computed: true, optional: false, required: false
  public get taskName() {
    return this.getStringAttribute('task_name');
  }

  // tenant - computed: true, optional: false, required: false
  public get tenant() {
    return this.getStringAttribute('tenant');
  }

  // v_adapter - computed: true, optional: false, required: false
  public get vAdapter() {
    return this.getStringAttribute('v_adapter');
  }

  // v_cluster - computed: true, optional: false, required: false
  public get vCluster() {
    return this.getStringAttribute('v_cluster');
  }

  // v_datacenter - computed: true, optional: false, required: false
  public get vDatacenter() {
    return this.getStringAttribute('v_datacenter');
  }

  // v_entity_name - computed: true, optional: false, required: false
  public get vEntityName() {
    return this.getStringAttribute('v_entity_name');
  }

  // v_entity_type - computed: true, optional: false, required: false
  public get vEntityType() {
    return this.getStringAttribute('v_entity_type');
  }

  // v_host - computed: true, optional: false, required: false
  public get vHost() {
    return this.getStringAttribute('v_host');
  }

  // v_switch - computed: true, optional: false, required: false
  public get vSwitch() {
    return this.getStringAttribute('v_switch');
  }

  // vlan_port_group - computed: true, optional: false, required: false
  public get vlanPortGroup() {
    return this.getStringAttribute('vlan_port_group');
  }

  // vmhost_ip_address - computed: true, optional: false, required: false
  public get vmhostIpAddress() {
    return this.getStringAttribute('vmhost_ip_address');
  }

  // vmhost_mac_address - computed: true, optional: false, required: false
  public get vmhostMacAddress() {
    return this.getStringAttribute('vmhost_mac_address');
  }

  // vmhost_name - computed: true, optional: false, required: false
  public get vmhostName() {
    return this.getStringAttribute('vmhost_name');
  }

  // vmhost_nic_names - computed: true, optional: false, required: false
  public get vmhostNicNames() {
    return this.getStringAttribute('vmhost_nic_names');
  }

  // vmhost_subnet_cidr - computed: true, optional: false, required: false
  public get vmhostSubnetCidr() {
    return this.getNumberAttribute('vmhost_subnet_cidr');
  }

  // vmi_id - computed: true, optional: false, required: false
  public get vmiId() {
    return this.getStringAttribute('vmi_id');
  }

  // vmi_ip_type - computed: true, optional: false, required: false
  public get vmiIpType() {
    return this.getStringAttribute('vmi_ip_type');
  }

  // vmi_is_public_address - computed: true, optional: false, required: false
  public get vmiIsPublicAddress() {
    return this.getBooleanAttribute('vmi_is_public_address');
  }

  // vmi_name - computed: true, optional: false, required: false
  public get vmiName() {
    return this.getStringAttribute('vmi_name');
  }

  // vmi_private_address - computed: true, optional: false, required: false
  public get vmiPrivateAddress() {
    return this.getStringAttribute('vmi_private_address');
  }

  // vmi_tenant_id - computed: true, optional: false, required: false
  public get vmiTenantId() {
    return this.getStringAttribute('vmi_tenant_id');
  }

  // vport_conf_mode - computed: true, optional: false, required: false
  public get vportConfMode() {
    return this.getStringAttribute('vport_conf_mode');
  }

  // vport_conf_speed - computed: true, optional: false, required: false
  public get vportConfSpeed() {
    return this.getStringAttribute('vport_conf_speed');
  }

  // vport_link_status - computed: true, optional: false, required: false
  public get vportLinkStatus() {
    return this.getStringAttribute('vport_link_status');
  }

  // vport_mac_address - computed: true, optional: false, required: false
  public get vportMacAddress() {
    return this.getStringAttribute('vport_mac_address');
  }

  // vport_mode - computed: true, optional: false, required: false
  public get vportMode() {
    return this.getStringAttribute('vport_mode');
  }

  // vport_name - computed: true, optional: false, required: false
  public get vportName() {
    return this.getStringAttribute('vport_name');
  }

  // vport_speed - computed: true, optional: false, required: false
  public get vportSpeed() {
    return this.getStringAttribute('vport_speed');
  }

  // vrf_description - computed: true, optional: false, required: false
  public get vrfDescription() {
    return this.getStringAttribute('vrf_description');
  }

  // vrf_name - computed: true, optional: false, required: false
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }

  // vrf_rd - computed: true, optional: false, required: false
  public get vrfRd() {
    return this.getStringAttribute('vrf_rd');
  }

  // vswitch_available_ports_count - computed: true, optional: false, required: false
  public get vswitchAvailablePortsCount() {
    return this.getNumberAttribute('vswitch_available_ports_count');
  }

  // vswitch_id - computed: true, optional: false, required: false
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }

  // vswitch_ipv6_enabled - computed: true, optional: false, required: false
  public get vswitchIpv6Enabled() {
    return this.getBooleanAttribute('vswitch_ipv6_enabled');
  }

  // vswitch_name - computed: true, optional: false, required: false
  public get vswitchName() {
    return this.getStringAttribute('vswitch_name');
  }

  // vswitch_segment_id - computed: true, optional: false, required: false
  public get vswitchSegmentId() {
    return this.getStringAttribute('vswitch_segment_id');
  }

  // vswitch_segment_name - computed: true, optional: false, required: false
  public get vswitchSegmentName() {
    return this.getStringAttribute('vswitch_segment_name');
  }

  // vswitch_segment_port_group - computed: true, optional: false, required: false
  public get vswitchSegmentPortGroup() {
    return this.getStringAttribute('vswitch_segment_port_group');
  }

  // vswitch_segment_type - computed: true, optional: false, required: false
  public get vswitchSegmentType() {
    return this.getStringAttribute('vswitch_segment_type');
  }

  // vswitch_tep_dhcp_server - computed: true, optional: false, required: false
  public get vswitchTepDhcpServer() {
    return this.getStringAttribute('vswitch_tep_dhcp_server');
  }

  // vswitch_tep_ip - computed: true, optional: false, required: false
  public get vswitchTepIp() {
    return this.getStringAttribute('vswitch_tep_ip');
  }

  // vswitch_tep_multicast - computed: true, optional: false, required: false
  public get vswitchTepMulticast() {
    return this.getStringAttribute('vswitch_tep_multicast');
  }

  // vswitch_tep_port_group - computed: true, optional: false, required: false
  public get vswitchTepPortGroup() {
    return this.getStringAttribute('vswitch_tep_port_group');
  }

  // vswitch_tep_type - computed: true, optional: false, required: false
  public get vswitchTepType() {
    return this.getStringAttribute('vswitch_tep_type');
  }

  // vswitch_tep_vlan - computed: true, optional: false, required: false
  public get vswitchTepVlan() {
    return this.getStringAttribute('vswitch_tep_vlan');
  }

  // vswitch_type - computed: true, optional: false, required: false
  public get vswitchType() {
    return this.getStringAttribute('vswitch_type');
  }
}
export interface DataNiosDnsRecordPtrResultFuncCall {
  /**
  * The attribute to be called.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_record_ptr#attribute_name DataNiosDnsRecordPtr#attribute_name}
  */
  readonly attributeName: string;
  /**
  * The object to be called.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_record_ptr#object DataNiosDnsRecordPtr#object}
  */
  readonly object?: string;
  /**
  * The function to be called.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_record_ptr#object_function DataNiosDnsRecordPtr#object_function}
  */
  readonly objectFunction?: string;
  /**
  * The parameters for the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_record_ptr#object_parameters DataNiosDnsRecordPtr#object_parameters}
  */
  readonly objectParameters?: { [key: string]: string };
  /**
  * The parameters for the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_record_ptr#parameters DataNiosDnsRecordPtr#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * The result field of the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_record_ptr#result_field DataNiosDnsRecordPtr#result_field}
  */
  readonly resultField?: string;
}

export function dataNiosDnsRecordPtrResultFuncCallToTerraform(struct?: DataNiosDnsRecordPtrResultFuncCall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    object: cdktf.stringToTerraform(struct!.object),
    object_function: cdktf.stringToTerraform(struct!.objectFunction),
    object_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.objectParameters),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    result_field: cdktf.stringToTerraform(struct!.resultField),
  }
}


export function dataNiosDnsRecordPtrResultFuncCallToHclTerraform(struct?: DataNiosDnsRecordPtrResultFuncCall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_function: {
      value: cdktf.stringToHclTerraform(struct!.objectFunction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.objectParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    result_field: {
      value: cdktf.stringToHclTerraform(struct!.resultField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsRecordPtrResultFuncCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDnsRecordPtrResultFuncCall | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._objectFunction !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectFunction = this._objectFunction;
    }
    if (this._objectParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectParameters = this._objectParameters;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._resultField !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultField = this._resultField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsRecordPtrResultFuncCall | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._object = undefined;
      this._objectFunction = undefined;
      this._objectParameters = undefined;
      this._parameters = undefined;
      this._resultField = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
      this._object = value.object;
      this._objectFunction = value.objectFunction;
      this._objectParameters = value.objectParameters;
      this._parameters = value.parameters;
      this._resultField = value.resultField;
    }
  }

  // attribute_name - computed: true, optional: false, required: true
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // object - computed: true, optional: true, required: false
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // object_function - computed: true, optional: true, required: false
  private _objectFunction?: string; 
  public get objectFunction() {
    return this.getStringAttribute('object_function');
  }
  public set objectFunction(value: string) {
    this._objectFunction = value;
  }
  public resetObjectFunction() {
    this._objectFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectFunctionInput() {
    return this._objectFunction;
  }

  // object_parameters - computed: true, optional: true, required: false
  private _objectParameters?: { [key: string]: string }; 
  public get objectParameters() {
    return this.getStringMapAttribute('object_parameters');
  }
  public set objectParameters(value: { [key: string]: string }) {
    this._objectParameters = value;
  }
  public resetObjectParameters() {
    this._objectParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectParametersInput() {
    return this._objectParameters;
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // result_field - computed: true, optional: true, required: false
  private _resultField?: string; 
  public get resultField() {
    return this.getStringAttribute('result_field');
  }
  public set resultField(value: string) {
    this._resultField = value;
  }
  public resetResultField() {
    this._resultField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultFieldInput() {
    return this._resultField;
  }
}
export interface DataNiosDnsRecordPtrResultMsAdUserData {
}

export function dataNiosDnsRecordPtrResultMsAdUserDataToTerraform(struct?: DataNiosDnsRecordPtrResultMsAdUserData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNiosDnsRecordPtrResultMsAdUserDataToHclTerraform(struct?: DataNiosDnsRecordPtrResultMsAdUserData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNiosDnsRecordPtrResultMsAdUserDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDnsRecordPtrResultMsAdUserData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsRecordPtrResultMsAdUserData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_users_count - computed: true, optional: false, required: false
  public get activeUsersCount() {
    return this.getNumberAttribute('active_users_count');
  }
}
export interface DataNiosDnsRecordPtrResult {
  /**
  * Comment for the record; maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_record_ptr#comment DataNiosDnsRecordPtr#comment}
  */
  readonly comment?: string;
  /**
  * The record creator. Note that changing creator from or to 'SYSTEM' value is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_record_ptr#creator DataNiosDnsRecordPtr#creator}
  */
  readonly creator?: string;
  /**
  * The GSS-TSIG principal that owns this record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_record_ptr#ddns_principal DataNiosDnsRecordPtr#ddns_principal}
  */
  readonly ddnsPrincipal?: string;
  /**
  * Determines if the DDNS updates for this record are allowed or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_record_ptr#ddns_protected DataNiosDnsRecordPtr#ddns_protected}
  */
  readonly ddnsProtected?: boolean | cdktf.IResolvable;
  /**
  * Determines if the record is disabled or not. False means that the record is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_record_ptr#disable DataNiosDnsRecordPtr#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Extensible attributes associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_record_ptr#extattrs DataNiosDnsRecordPtr#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * Determines if the reclamation is allowed for the record or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_record_ptr#forbid_reclamation DataNiosDnsRecordPtr#forbid_reclamation}
  */
  readonly forbidReclamation?: boolean | cdktf.IResolvable;
  /**
  * Specifies the function call to execute. The `next_available_ip` function is supported for Record PTR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_record_ptr#func_call DataNiosDnsRecordPtr#func_call}
  */
  readonly funcCall?: DataNiosDnsRecordPtrResultFuncCall;
  /**
  * The IPv4 Address of the record. Either of `ipv4addr`,`ipv6addr`, `name` or `func_call` to invoke `next_available_ip` is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_record_ptr#ipv4addr DataNiosDnsRecordPtr#ipv4addr}
  */
  readonly ipv4Addr?: string;
  /**
  * The IPv6 Address of the record. Either of `ipv4addr`,`ipv6addr`, `name` or `func_call` to invoke `next_available_ip` is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_record_ptr#ipv6addr DataNiosDnsRecordPtr#ipv6addr}
  */
  readonly ipv6Addr?: string;
  /**
  * The name of the DNS PTR record in FQDN format. Either of `ipv4addr`,`ipv6addr`, `name` or `func_call` to invoke `next_available_ip` is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_record_ptr#name DataNiosDnsRecordPtr#name}
  */
  readonly name?: string;
  /**
  * The domain name of the DNS PTR record in FQDN format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_record_ptr#ptrdname DataNiosDnsRecordPtr#ptrdname}
  */
  readonly ptrdname: string;
  /**
  * Time To Live (TTL) value for the record. A 32-bit unsigned integer that represents the duration, in seconds, that the record is valid (cached). Zero indicates that the record should not be cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_record_ptr#ttl DataNiosDnsRecordPtr#ttl}
  */
  readonly ttl?: number;
  /**
  * Flag to indicate whether the TTL value should be used for the A record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_record_ptr#use_ttl DataNiosDnsRecordPtr#use_ttl}
  */
  readonly useTtl?: boolean | cdktf.IResolvable;
  /**
  * Name of the DNS View in which the record resides, for example "external".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_record_ptr#view DataNiosDnsRecordPtr#view}
  */
  readonly view?: string;
}

export function dataNiosDnsRecordPtrResultToTerraform(struct?: DataNiosDnsRecordPtrResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    creator: cdktf.stringToTerraform(struct!.creator),
    ddns_principal: cdktf.stringToTerraform(struct!.ddnsPrincipal),
    ddns_protected: cdktf.booleanToTerraform(struct!.ddnsProtected),
    disable: cdktf.booleanToTerraform(struct!.disable),
    extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extattrs),
    forbid_reclamation: cdktf.booleanToTerraform(struct!.forbidReclamation),
    func_call: dataNiosDnsRecordPtrResultFuncCallToTerraform(struct!.funcCall),
    ipv4addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv6addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    name: cdktf.stringToTerraform(struct!.name),
    ptrdname: cdktf.stringToTerraform(struct!.ptrdname),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    use_ttl: cdktf.booleanToTerraform(struct!.useTtl),
    view: cdktf.stringToTerraform(struct!.view),
  }
}


export function dataNiosDnsRecordPtrResultToHclTerraform(struct?: DataNiosDnsRecordPtrResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    creator: {
      value: cdktf.stringToHclTerraform(struct!.creator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_principal: {
      value: cdktf.stringToHclTerraform(struct!.ddnsPrincipal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_protected: {
      value: cdktf.booleanToHclTerraform(struct!.ddnsProtected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extattrs: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extattrs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    forbid_reclamation: {
      value: cdktf.booleanToHclTerraform(struct!.forbidReclamation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    func_call: {
      value: dataNiosDnsRecordPtrResultFuncCallToHclTerraform(struct!.funcCall),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosDnsRecordPtrResultFuncCall",
    },
    ipv4addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
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
    ptrdname: {
      value: cdktf.stringToHclTerraform(struct!.ptrdname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_ttl: {
      value: cdktf.booleanToHclTerraform(struct!.useTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    view: {
      value: cdktf.stringToHclTerraform(struct!.view),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsRecordPtrResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsRecordPtrResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._creator !== undefined) {
      hasAnyValues = true;
      internalValueResult.creator = this._creator;
    }
    if (this._ddnsPrincipal !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsPrincipal = this._ddnsPrincipal;
    }
    if (this._ddnsProtected !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsProtected = this._ddnsProtected;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._extattrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extattrs = this._extattrs;
    }
    if (this._forbidReclamation !== undefined) {
      hasAnyValues = true;
      internalValueResult.forbidReclamation = this._forbidReclamation;
    }
    if (this._funcCall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.funcCall = this._funcCall?.internalValue;
    }
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ptrdname !== undefined) {
      hasAnyValues = true;
      internalValueResult.ptrdname = this._ptrdname;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._useTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTtl = this._useTtl;
    }
    if (this._view !== undefined) {
      hasAnyValues = true;
      internalValueResult.view = this._view;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsRecordPtrResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comment = undefined;
      this._creator = undefined;
      this._ddnsPrincipal = undefined;
      this._ddnsProtected = undefined;
      this._disable = undefined;
      this._extattrs = undefined;
      this._forbidReclamation = undefined;
      this._funcCall.internalValue = undefined;
      this._ipv4Addr = undefined;
      this._ipv6Addr = undefined;
      this._name = undefined;
      this._ptrdname = undefined;
      this._ttl = undefined;
      this._useTtl = undefined;
      this._view = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comment = value.comment;
      this._creator = value.creator;
      this._ddnsPrincipal = value.ddnsPrincipal;
      this._ddnsProtected = value.ddnsProtected;
      this._disable = value.disable;
      this._extattrs = value.extattrs;
      this._forbidReclamation = value.forbidReclamation;
      this._funcCall.internalValue = value.funcCall;
      this._ipv4Addr = value.ipv4Addr;
      this._ipv6Addr = value.ipv6Addr;
      this._name = value.name;
      this._ptrdname = value.ptrdname;
      this._ttl = value.ttl;
      this._useTtl = value.useTtl;
      this._view = value.view;
    }
  }

  // aws_rte53_record_info - computed: true, optional: false, required: false
  private _awsRte53RecordInfo = new DataNiosDnsRecordPtrResultAwsRte53RecordInfoOutputReference(this, "aws_rte53_record_info");
  public get awsRte53RecordInfo() {
    return this._awsRte53RecordInfo;
  }

  // cloud_info - computed: true, optional: false, required: false
  private _cloudInfo = new DataNiosDnsRecordPtrResultCloudInfoOutputReference(this, "cloud_info");
  public get cloudInfo() {
    return this._cloudInfo;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
  }

  // creator - computed: true, optional: true, required: false
  private _creator?: string; 
  public get creator() {
    return this.getStringAttribute('creator');
  }
  public set creator(value: string) {
    this._creator = value;
  }
  public resetCreator() {
    this._creator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creatorInput() {
    return this._creator;
  }

  // ddns_principal - computed: true, optional: true, required: false
  private _ddnsPrincipal?: string; 
  public get ddnsPrincipal() {
    return this.getStringAttribute('ddns_principal');
  }
  public set ddnsPrincipal(value: string) {
    this._ddnsPrincipal = value;
  }
  public resetDdnsPrincipal() {
    this._ddnsPrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsPrincipalInput() {
    return this._ddnsPrincipal;
  }

  // ddns_protected - computed: true, optional: true, required: false
  private _ddnsProtected?: boolean | cdktf.IResolvable; 
  public get ddnsProtected() {
    return this.getBooleanAttribute('ddns_protected');
  }
  public set ddnsProtected(value: boolean | cdktf.IResolvable) {
    this._ddnsProtected = value;
  }
  public resetDdnsProtected() {
    this._ddnsProtected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsProtectedInput() {
    return this._ddnsProtected;
  }

  // disable - computed: true, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // discovered_data - computed: true, optional: false, required: false
  private _discoveredData = new DataNiosDnsRecordPtrResultDiscoveredDataOutputReference(this, "discovered_data");
  public get discoveredData() {
    return this._discoveredData;
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // dns_ptrdname - computed: true, optional: false, required: false
  public get dnsPtrdname() {
    return this.getStringAttribute('dns_ptrdname');
  }

  // extattrs - computed: true, optional: true, required: false
  private _extattrs?: { [key: string]: string }; 
  public get extattrs() {
    return this.getStringMapAttribute('extattrs');
  }
  public set extattrs(value: { [key: string]: string }) {
    this._extattrs = value;
  }
  public resetExtattrs() {
    this._extattrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extattrsInput() {
    return this._extattrs;
  }

  // extattrs_all - computed: true, optional: false, required: false
  private _extattrsAll = new cdktf.StringMap(this, "extattrs_all");
  public get extattrsAll() {
    return this._extattrsAll;
  }

  // forbid_reclamation - computed: true, optional: true, required: false
  private _forbidReclamation?: boolean | cdktf.IResolvable; 
  public get forbidReclamation() {
    return this.getBooleanAttribute('forbid_reclamation');
  }
  public set forbidReclamation(value: boolean | cdktf.IResolvable) {
    this._forbidReclamation = value;
  }
  public resetForbidReclamation() {
    this._forbidReclamation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forbidReclamationInput() {
    return this._forbidReclamation;
  }

  // func_call - computed: true, optional: true, required: false
  private _funcCall = new DataNiosDnsRecordPtrResultFuncCallOutputReference(this, "func_call");
  public get funcCall() {
    return this._funcCall;
  }
  public putFuncCall(value: DataNiosDnsRecordPtrResultFuncCall) {
    this._funcCall.internalValue = value;
  }
  public resetFuncCall() {
    this._funcCall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get funcCallInput() {
    return this._funcCall.internalValue;
  }

  // ipv4addr - computed: true, optional: true, required: false
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  public resetIpv4Addr() {
    this._ipv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }

  // ipv6addr - computed: true, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  public resetIpv6Addr() {
    this._ipv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
  }

  // last_queried - computed: true, optional: false, required: false
  public get lastQueried() {
    return this.getNumberAttribute('last_queried');
  }

  // ms_ad_user_data - computed: true, optional: false, required: false
  private _msAdUserData = new DataNiosDnsRecordPtrResultMsAdUserDataOutputReference(this, "ms_ad_user_data");
  public get msAdUserData() {
    return this._msAdUserData;
  }

  // name - computed: true, optional: true, required: false
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

  // ptrdname - computed: true, optional: false, required: true
  private _ptrdname?: string; 
  public get ptrdname() {
    return this.getStringAttribute('ptrdname');
  }
  public set ptrdname(value: string) {
    this._ptrdname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ptrdnameInput() {
    return this._ptrdname;
  }

  // reclaimable - computed: true, optional: false, required: false
  public get reclaimable() {
    return this.getBooleanAttribute('reclaimable');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // shared_record_group - computed: true, optional: false, required: false
  public get sharedRecordGroup() {
    return this.getStringAttribute('shared_record_group');
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // use_ttl - computed: true, optional: true, required: false
  private _useTtl?: boolean | cdktf.IResolvable; 
  public get useTtl() {
    return this.getBooleanAttribute('use_ttl');
  }
  public set useTtl(value: boolean | cdktf.IResolvable) {
    this._useTtl = value;
  }
  public resetUseTtl() {
    this._useTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTtlInput() {
    return this._useTtl;
  }

  // view - computed: true, optional: true, required: false
  private _view?: string; 
  public get view() {
    return this.getStringAttribute('view');
  }
  public set view(value: string) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataNiosDnsRecordPtrResultList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsRecordPtrResult[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsRecordPtrResultOutputReference {
    return new DataNiosDnsRecordPtrResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_record_ptr nios_dns_record_ptr}
*/
export class DataNiosDnsRecordPtr extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_dns_record_ptr";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNiosDnsRecordPtr resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNiosDnsRecordPtr to import
  * @param importFromId The id of the existing DataNiosDnsRecordPtr that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_record_ptr#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNiosDnsRecordPtr to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_dns_record_ptr", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_record_ptr nios_dns_record_ptr} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNiosDnsRecordPtrConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNiosDnsRecordPtrConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nios_dns_record_ptr',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._extattrfilters = config.extattrfilters;
    this._filters = config.filters;
    this._maxResults = config.maxResults;
    this._paging = config.paging;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // extattrfilters - computed: false, optional: true, required: false
  private _extattrfilters?: { [key: string]: string }; 
  public get extattrfilters() {
    return this.getStringMapAttribute('extattrfilters');
  }
  public set extattrfilters(value: { [key: string]: string }) {
    this._extattrfilters = value;
  }
  public resetExtattrfilters() {
    this._extattrfilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extattrfiltersInput() {
    return this._extattrfilters;
  }

  // filters - computed: false, optional: true, required: false
  private _filters?: { [key: string]: string }; 
  public get filters() {
    return this.getStringMapAttribute('filters');
  }
  public set filters(value: { [key: string]: string }) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // max_results - computed: false, optional: true, required: false
  private _maxResults?: number; 
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // paging - computed: false, optional: true, required: false
  private _paging?: number; 
  public get paging() {
    return this.getNumberAttribute('paging');
  }
  public set paging(value: number) {
    this._paging = value;
  }
  public resetPaging() {
    this._paging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagingInput() {
    return this._paging;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataNiosDnsRecordPtrResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      extattrfilters: cdktf.hashMapper(cdktf.stringToTerraform)(this._extattrfilters),
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      max_results: cdktf.numberToTerraform(this._maxResults),
      paging: cdktf.numberToTerraform(this._paging),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      extattrfilters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extattrfilters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      max_results: {
        value: cdktf.numberToHclTerraform(this._maxResults),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      paging: {
        value: cdktf.numberToHclTerraform(this._paging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
