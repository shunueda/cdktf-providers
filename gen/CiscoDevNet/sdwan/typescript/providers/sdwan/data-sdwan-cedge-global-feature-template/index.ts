// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cedge_global_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanCedgeGlobalFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cedge_global_feature_template#id DataSdwanCedgeGlobalFeatureTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cedge_global_feature_template#name DataSdwanCedgeGlobalFeatureTemplate#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cedge_global_feature_template sdwan_cedge_global_feature_template}
*/
export class DataSdwanCedgeGlobalFeatureTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cedge_global_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanCedgeGlobalFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanCedgeGlobalFeatureTemplate to import
  * @param importFromId The id of the existing DataSdwanCedgeGlobalFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cedge_global_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanCedgeGlobalFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cedge_global_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cedge_global_feature_template sdwan_cedge_global_feature_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanCedgeGlobalFeatureTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSdwanCedgeGlobalFeatureTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cedge_global_feature_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arp_proxy - computed: true, optional: false, required: false
  public get arpProxy() {
    return this.getBooleanAttribute('arp_proxy');
  }

  // arp_proxy_variable - computed: true, optional: false, required: false
  public get arpProxyVariable() {
    return this.getStringAttribute('arp_proxy_variable');
  }

  // bootp - computed: true, optional: false, required: false
  public get bootp() {
    return this.getBooleanAttribute('bootp');
  }

  // bootp_variable - computed: true, optional: false, required: false
  public get bootpVariable() {
    return this.getStringAttribute('bootp_variable');
  }

  // cdp - computed: true, optional: false, required: false
  public get cdp() {
    return this.getBooleanAttribute('cdp');
  }

  // cdp_variable - computed: true, optional: false, required: false
  public get cdpVariable() {
    return this.getStringAttribute('cdp_variable');
  }

  // console_logging - computed: true, optional: false, required: false
  public get consoleLogging() {
    return this.getBooleanAttribute('console_logging');
  }

  // console_logging_variable - computed: true, optional: false, required: false
  public get consoleLoggingVariable() {
    return this.getStringAttribute('console_logging_variable');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_types - computed: true, optional: false, required: false
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }

  // domain_lookup - computed: true, optional: false, required: false
  public get domainLookup() {
    return this.getBooleanAttribute('domain_lookup');
  }

  // domain_lookup_variable - computed: true, optional: false, required: false
  public get domainLookupVariable() {
    return this.getStringAttribute('domain_lookup_variable');
  }

  // ftp_passive - computed: true, optional: false, required: false
  public get ftpPassive() {
    return this.getBooleanAttribute('ftp_passive');
  }

  // ftp_passive_variable - computed: true, optional: false, required: false
  public get ftpPassiveVariable() {
    return this.getStringAttribute('ftp_passive_variable');
  }

  // http_authentication - computed: true, optional: false, required: false
  public get httpAuthentication() {
    return this.getStringAttribute('http_authentication');
  }

  // http_authentication_variable - computed: true, optional: false, required: false
  public get httpAuthenticationVariable() {
    return this.getStringAttribute('http_authentication_variable');
  }

  // http_server - computed: true, optional: false, required: false
  public get httpServer() {
    return this.getBooleanAttribute('http_server');
  }

  // http_server_variable - computed: true, optional: false, required: false
  public get httpServerVariable() {
    return this.getStringAttribute('http_server_variable');
  }

  // https_server - computed: true, optional: false, required: false
  public get httpsServer() {
    return this.getBooleanAttribute('https_server');
  }

  // https_server_variable - computed: true, optional: false, required: false
  public get httpsServerVariable() {
    return this.getStringAttribute('https_server_variable');
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

  // ip_source_routing - computed: true, optional: false, required: false
  public get ipSourceRouting() {
    return this.getBooleanAttribute('ip_source_routing');
  }

  // ip_source_routing_variable - computed: true, optional: false, required: false
  public get ipSourceRoutingVariable() {
    return this.getStringAttribute('ip_source_routing_variable');
  }

  // line_vty - computed: true, optional: false, required: false
  public get lineVty() {
    return this.getBooleanAttribute('line_vty');
  }

  // line_vty_variable - computed: true, optional: false, required: false
  public get lineVtyVariable() {
    return this.getStringAttribute('line_vty_variable');
  }

  // lldp - computed: true, optional: false, required: false
  public get lldp() {
    return this.getBooleanAttribute('lldp');
  }

  // lldp_variable - computed: true, optional: false, required: false
  public get lldpVariable() {
    return this.getStringAttribute('lldp_variable');
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

  // nat64_tcp_timeout - computed: true, optional: false, required: false
  public get nat64TcpTimeout() {
    return this.getNumberAttribute('nat64_tcp_timeout');
  }

  // nat64_tcp_timeout_variable - computed: true, optional: false, required: false
  public get nat64TcpTimeoutVariable() {
    return this.getStringAttribute('nat64_tcp_timeout_variable');
  }

  // nat64_udp_timeout - computed: true, optional: false, required: false
  public get nat64UdpTimeout() {
    return this.getNumberAttribute('nat64_udp_timeout');
  }

  // nat64_udp_timeout_variable - computed: true, optional: false, required: false
  public get nat64UdpTimeoutVariable() {
    return this.getStringAttribute('nat64_udp_timeout_variable');
  }

  // rsh_rcp - computed: true, optional: false, required: false
  public get rshRcp() {
    return this.getBooleanAttribute('rsh_rcp');
  }

  // rsh_rcp_variable - computed: true, optional: false, required: false
  public get rshRcpVariable() {
    return this.getStringAttribute('rsh_rcp_variable');
  }

  // snmp_ifindex_persist - computed: true, optional: false, required: false
  public get snmpIfindexPersist() {
    return this.getBooleanAttribute('snmp_ifindex_persist');
  }

  // snmp_ifindex_persist_variable - computed: true, optional: false, required: false
  public get snmpIfindexPersistVariable() {
    return this.getStringAttribute('snmp_ifindex_persist_variable');
  }

  // source_interface - computed: true, optional: false, required: false
  public get sourceInterface() {
    return this.getStringAttribute('source_interface');
  }

  // source_interface_variable - computed: true, optional: false, required: false
  public get sourceInterfaceVariable() {
    return this.getStringAttribute('source_interface_variable');
  }

  // ssh_version - computed: true, optional: false, required: false
  public get sshVersion() {
    return this.getNumberAttribute('ssh_version');
  }

  // ssh_version_variable - computed: true, optional: false, required: false
  public get sshVersionVariable() {
    return this.getStringAttribute('ssh_version_variable');
  }

  // tcp_keepalives_in - computed: true, optional: false, required: false
  public get tcpKeepalivesIn() {
    return this.getBooleanAttribute('tcp_keepalives_in');
  }

  // tcp_keepalives_in_variable - computed: true, optional: false, required: false
  public get tcpKeepalivesInVariable() {
    return this.getStringAttribute('tcp_keepalives_in_variable');
  }

  // tcp_keepalives_out - computed: true, optional: false, required: false
  public get tcpKeepalivesOut() {
    return this.getBooleanAttribute('tcp_keepalives_out');
  }

  // tcp_keepalives_out_variable - computed: true, optional: false, required: false
  public get tcpKeepalivesOutVariable() {
    return this.getStringAttribute('tcp_keepalives_out_variable');
  }

  // tcp_small_servers - computed: true, optional: false, required: false
  public get tcpSmallServers() {
    return this.getBooleanAttribute('tcp_small_servers');
  }

  // tcp_small_servers_variable - computed: true, optional: false, required: false
  public get tcpSmallServersVariable() {
    return this.getStringAttribute('tcp_small_servers_variable');
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // udp_small_servers - computed: true, optional: false, required: false
  public get udpSmallServers() {
    return this.getBooleanAttribute('udp_small_servers');
  }

  // udp_small_servers_variable - computed: true, optional: false, required: false
  public get udpSmallServersVariable() {
    return this.getStringAttribute('udp_small_servers_variable');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // vty_logging - computed: true, optional: false, required: false
  public get vtyLogging() {
    return this.getBooleanAttribute('vty_logging');
  }

  // vty_logging_variable - computed: true, optional: false, required: false
  public get vtyLoggingVariable() {
    return this.getStringAttribute('vty_logging_variable');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
