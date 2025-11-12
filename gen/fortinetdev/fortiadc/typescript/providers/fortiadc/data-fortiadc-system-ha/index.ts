// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_ha
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiadcSystemHaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_ha#id DataFortiadcSystemHa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_ha fortiadc_system_ha}
*/
export class DataFortiadcSystemHa extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_system_ha";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiadcSystemHa resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiadcSystemHa to import
  * @param importFromId The id of the existing DataFortiadcSystemHa that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_ha#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiadcSystemHa to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_system_ha", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_ha fortiadc_system_ha} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiadcSystemHaConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFortiadcSystemHaConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_system_ha',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arp_interval - computed: true, optional: false, required: false
  public get arpInterval() {
    return this.getStringAttribute('arp_interval');
  }

  // arp_num - computed: true, optional: false, required: false
  public get arpNum() {
    return this.getStringAttribute('arp_num');
  }

  // config_priority - computed: true, optional: false, required: false
  public get configPriority() {
    return this.getStringAttribute('config_priority');
  }

  // datadev - computed: true, optional: false, required: false
  public get datadev() {
    return this.getStringAttribute('datadev');
  }

  // failover_hold_time - computed: true, optional: false, required: false
  public get failoverHoldTime() {
    return this.getStringAttribute('failover_hold_time');
  }

  // failover_threshold - computed: true, optional: false, required: false
  public get failoverThreshold() {
    return this.getStringAttribute('failover_threshold');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // groupid - computed: true, optional: false, required: false
  public get groupid() {
    return this.getStringAttribute('groupid');
  }

  // hb_lost_threshold - computed: true, optional: false, required: false
  public get hbLostThreshold() {
    return this.getStringAttribute('hb_lost_threshold');
  }

  // hbdev - computed: true, optional: false, required: false
  public get hbdev() {
    return this.getStringAttribute('hbdev');
  }

  // hbtype - computed: true, optional: false, required: false
  public get hbtype() {
    return this.getStringAttribute('hbtype');
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

  // interface_list - computed: true, optional: false, required: false
  public get interfaceList() {
    return this.getStringAttribute('interface_list');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getStringAttribute('interval');
  }

  // local_address - computed: true, optional: false, required: false
  public get localAddress() {
    return this.getStringAttribute('local_address');
  }

  // local_node_id - computed: true, optional: false, required: false
  public get localNodeId() {
    return this.getStringAttribute('local_node_id');
  }

  // mgmt_interface - computed: true, optional: false, required: false
  public get mgmtInterface() {
    return this.getStringAttribute('mgmt_interface');
  }

  // mgmt_ip - computed: true, optional: false, required: false
  public get mgmtIp() {
    return this.getStringAttribute('mgmt_ip');
  }

  // mgmt_ip_allowaccess - computed: true, optional: false, required: false
  public get mgmtIpAllowaccess() {
    return this.getStringAttribute('mgmt_ip_allowaccess');
  }

  // mgmt_status - computed: true, optional: false, required: false
  public get mgmtStatus() {
    return this.getStringAttribute('mgmt_status');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // monitor_enable - computed: true, optional: false, required: false
  public get monitorEnable() {
    return this.getStringAttribute('monitor_enable');
  }

  // node_list - computed: true, optional: false, required: false
  public get nodeList() {
    return this.getStringAttribute('node_list');
  }

  // override - computed: true, optional: false, required: false
  public get override() {
    return this.getStringAttribute('override');
  }

  // peer_address - computed: true, optional: false, required: false
  public get peerAddress() {
    return this.getStringAttribute('peer_address');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }

  // sync_l4_connection - computed: true, optional: false, required: false
  public get syncL4Connection() {
    return this.getStringAttribute('sync_l4_connection');
  }

  // sync_l4_persistent - computed: true, optional: false, required: false
  public get syncL4Persistent() {
    return this.getStringAttribute('sync_l4_persistent');
  }

  // sync_l7_persistent - computed: true, optional: false, required: false
  public get syncL7Persistent() {
    return this.getStringAttribute('sync_l7_persistent');
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
