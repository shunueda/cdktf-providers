// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/data-sources/discovery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalystcenterDiscoveryConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/data-sources/discovery#id DataCatalystcenterDiscovery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/data-sources/discovery catalystcenter_discovery}
*/
export class DataCatalystcenterDiscovery extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_discovery";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCatalystcenterDiscovery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCatalystcenterDiscovery to import
  * @param importFromId The id of the existing DataCatalystcenterDiscovery that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/data-sources/discovery#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCatalystcenterDiscovery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_discovery", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/data-sources/discovery catalystcenter_discovery} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCatalystcenterDiscoveryConfig
  */
  public constructor(scope: Construct, id: string, config: DataCatalystcenterDiscoveryConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_discovery',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.4',
        providerVersionConstraint: '0.4.4'
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

  // cdp_level - computed: true, optional: false, required: false
  public get cdpLevel() {
    return this.getNumberAttribute('cdp_level');
  }

  // discovery_type - computed: true, optional: false, required: false
  public get discoveryType() {
    return this.getStringAttribute('discovery_type');
  }

  // enable_password_list - computed: true, optional: false, required: false
  public get enablePasswordList() {
    return cdktf.Fn.tolist(this.getListAttribute('enable_password_list'));
  }

  // global_credential_id_list - computed: true, optional: false, required: false
  public get globalCredentialIdList() {
    return cdktf.Fn.tolist(this.getListAttribute('global_credential_id_list'));
  }

  // http_read_credential - computed: true, optional: false, required: false
  public get httpReadCredential() {
    return this.getStringAttribute('http_read_credential');
  }

  // http_write_credential - computed: true, optional: false, required: false
  public get httpWriteCredential() {
    return this.getStringAttribute('http_write_credential');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip_address_list - computed: true, optional: false, required: false
  public get ipAddressList() {
    return this.getStringAttribute('ip_address_list');
  }

  // ip_filter_list - computed: true, optional: false, required: false
  public get ipFilterList() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_filter_list'));
  }

  // lldp_level - computed: true, optional: false, required: false
  public get lldpLevel() {
    return this.getNumberAttribute('lldp_level');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // netconf_port - computed: true, optional: false, required: false
  public get netconfPort() {
    return this.getStringAttribute('netconf_port');
  }

  // password_list - computed: true, optional: false, required: false
  public get passwordList() {
    return cdktf.Fn.tolist(this.getListAttribute('password_list'));
  }

  // preferred_mgmt_ip_method - computed: true, optional: false, required: false
  public get preferredMgmtIpMethod() {
    return this.getStringAttribute('preferred_mgmt_ip_method');
  }

  // protocol_order - computed: true, optional: false, required: false
  public get protocolOrder() {
    return this.getStringAttribute('protocol_order');
  }

  // retry - computed: true, optional: false, required: false
  public get retry() {
    return this.getNumberAttribute('retry');
  }

  // snmp_auth_passphrase - computed: true, optional: false, required: false
  public get snmpAuthPassphrase() {
    return this.getStringAttribute('snmp_auth_passphrase');
  }

  // snmp_auth_protocol - computed: true, optional: false, required: false
  public get snmpAuthProtocol() {
    return this.getStringAttribute('snmp_auth_protocol');
  }

  // snmp_mode - computed: true, optional: false, required: false
  public get snmpMode() {
    return this.getStringAttribute('snmp_mode');
  }

  // snmp_priv_passphrase - computed: true, optional: false, required: false
  public get snmpPrivPassphrase() {
    return this.getStringAttribute('snmp_priv_passphrase');
  }

  // snmp_priv_protocol - computed: true, optional: false, required: false
  public get snmpPrivProtocol() {
    return this.getStringAttribute('snmp_priv_protocol');
  }

  // snmp_ro_community - computed: true, optional: false, required: false
  public get snmpRoCommunity() {
    return this.getStringAttribute('snmp_ro_community');
  }

  // snmp_ro_community_desc - computed: true, optional: false, required: false
  public get snmpRoCommunityDesc() {
    return this.getStringAttribute('snmp_ro_community_desc');
  }

  // snmp_rw_community - computed: true, optional: false, required: false
  public get snmpRwCommunity() {
    return this.getStringAttribute('snmp_rw_community');
  }

  // snmp_rw_community_desc - computed: true, optional: false, required: false
  public get snmpRwCommunityDesc() {
    return this.getStringAttribute('snmp_rw_community_desc');
  }

  // snmp_user_name - computed: true, optional: false, required: false
  public get snmpUserName() {
    return this.getStringAttribute('snmp_user_name');
  }

  // snmp_version - computed: true, optional: false, required: false
  public get snmpVersion() {
    return this.getStringAttribute('snmp_version');
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }

  // user_name_list - computed: true, optional: false, required: false
  public get userNameList() {
    return cdktf.Fn.tolist(this.getListAttribute('user_name_list'));
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
