// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAviatrixGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Gateway name. This can be used for getting gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/gateway#gw_name DataAviatrixGateway#gw_name}
  */
  readonly gwName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/gateway#id DataAviatrixGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/gateway aviatrix_gateway}
*/
export class DataAviatrixGateway extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAviatrixGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAviatrixGateway to import
  * @param importFromId The id of the existing DataAviatrixGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAviatrixGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/gateway aviatrix_gateway} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAviatrixGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: DataAviatrixGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_gateway',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10'
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

  // additional_cidrs - computed: true, optional: false, required: false
  public get additionalCidrs() {
    return this.getStringAttribute('additional_cidrs');
  }

  // additional_cidrs_designated_gateway - computed: true, optional: false, required: false
  public get additionalCidrsDesignatedGateway() {
    return this.getStringAttribute('additional_cidrs_designated_gateway');
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

  // cloud_instance_id - computed: true, optional: false, required: false
  public get cloudInstanceId() {
    return this.getStringAttribute('cloud_instance_id');
  }

  // cloud_type - computed: true, optional: false, required: false
  public get cloudType() {
    return this.getNumberAttribute('cloud_type');
  }

  // duo_api_hostname - computed: true, optional: false, required: false
  public get duoApiHostname() {
    return this.getStringAttribute('duo_api_hostname');
  }

  // duo_integration_key - computed: true, optional: false, required: false
  public get duoIntegrationKey() {
    return this.getStringAttribute('duo_integration_key');
  }

  // duo_push_mode - computed: true, optional: false, required: false
  public get duoPushMode() {
    return this.getStringAttribute('duo_push_mode');
  }

  // elb_dns_name - computed: true, optional: false, required: false
  public get elbDnsName() {
    return this.getStringAttribute('elb_dns_name');
  }

  // elb_name - computed: true, optional: false, required: false
  public get elbName() {
    return this.getStringAttribute('elb_name');
  }

  // enable_designated_gateway - computed: true, optional: false, required: false
  public get enableDesignatedGateway() {
    return this.getBooleanAttribute('enable_designated_gateway');
  }

  // enable_elb - computed: true, optional: false, required: false
  public get enableElb() {
    return this.getBooleanAttribute('enable_elb');
  }

  // enable_encrypt_volume - computed: true, optional: false, required: false
  public get enableEncryptVolume() {
    return this.getBooleanAttribute('enable_encrypt_volume');
  }

  // enable_jumbo_frame - computed: true, optional: false, required: false
  public get enableJumboFrame() {
    return this.getBooleanAttribute('enable_jumbo_frame');
  }

  // enable_ldap - computed: true, optional: false, required: false
  public get enableLdap() {
    return this.getBooleanAttribute('enable_ldap');
  }

  // enable_monitor_gateway_subnets - computed: true, optional: false, required: false
  public get enableMonitorGatewaySubnets() {
    return this.getBooleanAttribute('enable_monitor_gateway_subnets');
  }

  // enable_public_subnet_filtering - computed: true, optional: false, required: false
  public get enablePublicSubnetFiltering() {
    return this.getBooleanAttribute('enable_public_subnet_filtering');
  }

  // enable_spot_instance - computed: true, optional: false, required: false
  public get enableSpotInstance() {
    return this.getBooleanAttribute('enable_spot_instance');
  }

  // enable_vpc_dns_server - computed: true, optional: false, required: false
  public get enableVpcDnsServer() {
    return this.getBooleanAttribute('enable_vpc_dns_server');
  }

  // enable_vpn_nat - computed: true, optional: false, required: false
  public get enableVpnNat() {
    return this.getBooleanAttribute('enable_vpn_nat');
  }

  // fault_domain - computed: true, optional: false, required: false
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }

  // fqdn_lan_cidr - computed: true, optional: false, required: false
  public get fqdnLanCidr() {
    return this.getStringAttribute('fqdn_lan_cidr');
  }

  // fqdn_lan_interface - computed: true, optional: false, required: false
  public get fqdnLanInterface() {
    return this.getStringAttribute('fqdn_lan_interface');
  }

  // fqdn_lan_vpc_id - computed: true, optional: false, required: false
  public get fqdnLanVpcId() {
    return this.getStringAttribute('fqdn_lan_vpc_id');
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

  // idle_timeout - computed: true, optional: false, required: false
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
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

  // ldap_base_dn - computed: true, optional: false, required: false
  public get ldapBaseDn() {
    return this.getStringAttribute('ldap_base_dn');
  }

  // ldap_bind_dn - computed: true, optional: false, required: false
  public get ldapBindDn() {
    return this.getStringAttribute('ldap_bind_dn');
  }

  // ldap_server - computed: true, optional: false, required: false
  public get ldapServer() {
    return this.getStringAttribute('ldap_server');
  }

  // ldap_username_attribute - computed: true, optional: false, required: false
  public get ldapUsernameAttribute() {
    return this.getStringAttribute('ldap_username_attribute');
  }

  // max_vpn_conn - computed: true, optional: false, required: false
  public get maxVpnConn() {
    return this.getStringAttribute('max_vpn_conn');
  }

  // monitor_exclude_list - computed: true, optional: false, required: false
  public get monitorExcludeList() {
    return cdktf.Fn.tolist(this.getListAttribute('monitor_exclude_list'));
  }

  // name_servers - computed: true, optional: false, required: false
  public get nameServers() {
    return this.getStringAttribute('name_servers');
  }

  // okta_url - computed: true, optional: false, required: false
  public get oktaUrl() {
    return this.getStringAttribute('okta_url');
  }

  // okta_username_suffix - computed: true, optional: false, required: false
  public get oktaUsernameSuffix() {
    return this.getStringAttribute('okta_username_suffix');
  }

  // otp_mode - computed: true, optional: false, required: false
  public get otpMode() {
    return this.getStringAttribute('otp_mode');
  }

  // peering_ha_availability_domain - computed: true, optional: false, required: false
  public get peeringHaAvailabilityDomain() {
    return this.getStringAttribute('peering_ha_availability_domain');
  }

  // peering_ha_azure_eip_name_resource_group - computed: true, optional: false, required: false
  public get peeringHaAzureEipNameResourceGroup() {
    return this.getStringAttribute('peering_ha_azure_eip_name_resource_group');
  }

  // peering_ha_cloud_instance_id - computed: true, optional: false, required: false
  public get peeringHaCloudInstanceId() {
    return this.getStringAttribute('peering_ha_cloud_instance_id');
  }

  // peering_ha_fault_domain - computed: true, optional: false, required: false
  public get peeringHaFaultDomain() {
    return this.getStringAttribute('peering_ha_fault_domain');
  }

  // peering_ha_gw_name - computed: true, optional: false, required: false
  public get peeringHaGwName() {
    return this.getStringAttribute('peering_ha_gw_name');
  }

  // peering_ha_gw_size - computed: true, optional: false, required: false
  public get peeringHaGwSize() {
    return this.getStringAttribute('peering_ha_gw_size');
  }

  // peering_ha_image_version - computed: true, optional: false, required: false
  public get peeringHaImageVersion() {
    return this.getStringAttribute('peering_ha_image_version');
  }

  // peering_ha_insane_mode_az - computed: true, optional: false, required: false
  public get peeringHaInsaneModeAz() {
    return this.getStringAttribute('peering_ha_insane_mode_az');
  }

  // peering_ha_private_ip - computed: true, optional: false, required: false
  public get peeringHaPrivateIp() {
    return this.getStringAttribute('peering_ha_private_ip');
  }

  // peering_ha_public_ip - computed: true, optional: false, required: false
  public get peeringHaPublicIp() {
    return this.getStringAttribute('peering_ha_public_ip');
  }

  // peering_ha_security_group_id - computed: true, optional: false, required: false
  public get peeringHaSecurityGroupId() {
    return this.getStringAttribute('peering_ha_security_group_id');
  }

  // peering_ha_software_version - computed: true, optional: false, required: false
  public get peeringHaSoftwareVersion() {
    return this.getStringAttribute('peering_ha_software_version');
  }

  // peering_ha_subnet - computed: true, optional: false, required: false
  public get peeringHaSubnet() {
    return this.getStringAttribute('peering_ha_subnet');
  }

  // peering_ha_zone - computed: true, optional: false, required: false
  public get peeringHaZone() {
    return this.getStringAttribute('peering_ha_zone');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // public_dns_server - computed: true, optional: false, required: false
  public get publicDnsServer() {
    return this.getStringAttribute('public_dns_server');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // public_subnet_filtering_guard_duty_enforced - computed: true, optional: false, required: false
  public get publicSubnetFilteringGuardDutyEnforced() {
    return this.getBooleanAttribute('public_subnet_filtering_guard_duty_enforced');
  }

  // public_subnet_filtering_ha_route_tables - computed: true, optional: false, required: false
  public get publicSubnetFilteringHaRouteTables() {
    return cdktf.Fn.tolist(this.getListAttribute('public_subnet_filtering_ha_route_tables'));
  }

  // public_subnet_filtering_route_tables - computed: true, optional: false, required: false
  public get publicSubnetFilteringRouteTables() {
    return cdktf.Fn.tolist(this.getListAttribute('public_subnet_filtering_route_tables'));
  }

  // renegotiation_interval - computed: true, optional: false, required: false
  public get renegotiationInterval() {
    return this.getNumberAttribute('renegotiation_interval');
  }

  // saml_enabled - computed: true, optional: false, required: false
  public get samlEnabled() {
    return this.getBooleanAttribute('saml_enabled');
  }

  // search_domains - computed: true, optional: false, required: false
  public get searchDomains() {
    return this.getStringAttribute('search_domains');
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

  // split_tunnel - computed: true, optional: false, required: false
  public get splitTunnel() {
    return this.getBooleanAttribute('split_tunnel');
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

  // vpn_access - computed: true, optional: false, required: false
  public get vpnAccess() {
    return this.getBooleanAttribute('vpn_access');
  }

  // vpn_cidr - computed: true, optional: false, required: false
  public get vpnCidr() {
    return this.getStringAttribute('vpn_cidr');
  }

  // vpn_protocol - computed: true, optional: false, required: false
  public get vpnProtocol() {
    return this.getStringAttribute('vpn_protocol');
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
