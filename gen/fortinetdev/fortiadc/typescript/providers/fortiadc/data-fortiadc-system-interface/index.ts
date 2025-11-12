// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiadcSystemInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_interface#id DataFortiadcSystemInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_interface#mkey DataFortiadcSystemInterface#mkey}
  */
  readonly mkey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_interface fortiadc_system_interface}
*/
export class DataFortiadcSystemInterface extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_system_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiadcSystemInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiadcSystemInterface to import
  * @param importFromId The id of the existing DataFortiadcSystemInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiadcSystemInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_system_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_interface fortiadc_system_interface} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiadcSystemInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiadcSystemInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_system_interface',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1',
        providerVersionConstraint: '1.3.1'
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
    this._mkey = config.mkey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregate_algorithm - computed: true, optional: false, required: false
  public get aggregateAlgorithm() {
    return this.getStringAttribute('aggregate_algorithm');
  }

  // aggregate_mode - computed: true, optional: false, required: false
  public get aggregateMode() {
    return this.getStringAttribute('aggregate_mode');
  }

  // allowaccess - computed: true, optional: false, required: false
  public get allowaccess() {
    return this.getStringAttribute('allowaccess');
  }

  // dedicate_to_management - computed: true, optional: false, required: false
  public get dedicateToManagement() {
    return this.getStringAttribute('dedicate_to_management');
  }

  // default_gw - computed: true, optional: false, required: false
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }

  // dhcp_gateway - computed: true, optional: false, required: false
  public get dhcpGateway() {
    return this.getStringAttribute('dhcp_gateway');
  }

  // dhcp_gw_distance - computed: true, optional: false, required: false
  public get dhcpGwDistance() {
    return this.getStringAttribute('dhcp_gw_distance');
  }

  // dhcp_gw_override - computed: true, optional: false, required: false
  public get dhcpGwOverride() {
    return this.getStringAttribute('dhcp_gw_override');
  }

  // dhcp_ip_overlap - computed: true, optional: false, required: false
  public get dhcpIpOverlap() {
    return this.getStringAttribute('dhcp_ip_overlap');
  }

  // disc_retry_timeout - computed: true, optional: false, required: false
  public get discRetryTimeout() {
    return this.getStringAttribute('disc_retry_timeout');
  }

  // dns_server_override - computed: true, optional: false, required: false
  public get dnsServerOverride() {
    return this.getStringAttribute('dns_server_override');
  }

  // floating - computed: true, optional: false, required: false
  public get floating() {
    return this.getStringAttribute('floating');
  }

  // floating_ip - computed: true, optional: false, required: false
  public get floatingIp() {
    return this.getStringAttribute('floating_ip');
  }

  // floating_ip6 - computed: true, optional: false, required: false
  public get floatingIp6() {
    return this.getStringAttribute('floating_ip6');
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

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // ip6 - computed: true, optional: false, required: false
  public get ip6() {
    return this.getStringAttribute('ip6');
  }

  // mkey - computed: false, optional: false, required: true
  private _mkey?: string; 
  public get mkey() {
    return this.getStringAttribute('mkey');
  }
  public set mkey(value: string) {
    this._mkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mkeyInput() {
    return this._mkey;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getStringAttribute('mtu');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // redundant_member - computed: true, optional: false, required: false
  public get redundantMember() {
    return this.getStringAttribute('redundant_member');
  }

  // secondary_ip - computed: true, optional: false, required: false
  public get secondaryIp() {
    return this.getStringAttribute('secondary_ip');
  }

  // speed - computed: true, optional: false, required: false
  public get speed() {
    return this.getStringAttribute('speed');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // traffic_group - computed: true, optional: false, required: false
  public get trafficGroup() {
    return this.getStringAttribute('traffic_group');
  }

  // trust_ip - computed: true, optional: false, required: false
  public get trustIp() {
    return this.getStringAttribute('trust_ip');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // vdom - computed: true, optional: false, required: false
  public get vdom() {
    return this.getStringAttribute('vdom');
  }

  // vlanid - computed: true, optional: false, required: false
  public get vlanid() {
    return this.getStringAttribute('vlanid');
  }

  // wccp - computed: true, optional: false, required: false
  public get wccp() {
    return this.getStringAttribute('wccp');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      mkey: cdktf.stringToTerraform(this._mkey),
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
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
