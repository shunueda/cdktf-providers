// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_jndi_queue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MsgVpnJndiQueueConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_jndi_queue#msg_vpn_name MsgVpnJndiQueue#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The physical name of the JMS Queue.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_jndi_queue#physical_name MsgVpnJndiQueue#physical_name}
  */
  readonly physicalName?: string;
  /**
  * The JNDI name of the JMS Queue.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_jndi_queue#queue_name MsgVpnJndiQueue#queue_name}
  */
  readonly queueName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_jndi_queue solacebroker_msg_vpn_jndi_queue}
*/
export class MsgVpnJndiQueue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_jndi_queue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MsgVpnJndiQueue resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MsgVpnJndiQueue to import
  * @param importFromId The id of the existing MsgVpnJndiQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_jndi_queue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MsgVpnJndiQueue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_jndi_queue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_jndi_queue solacebroker_msg_vpn_jndi_queue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MsgVpnJndiQueueConfig
  */
  public constructor(scope: Construct, id: string, config: MsgVpnJndiQueueConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_jndi_queue',
      terraformGeneratorMetadata: {
        providerName: 'solacebroker',
        providerVersion: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._msgVpnName = config.msgVpnName;
    this._physicalName = config.physicalName;
    this._queueName = config.queueName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // msg_vpn_name - computed: false, optional: false, required: true
  private _msgVpnName?: string; 
  public get msgVpnName() {
    return this.getStringAttribute('msg_vpn_name');
  }
  public set msgVpnName(value: string) {
    this._msgVpnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get msgVpnNameInput() {
    return this._msgVpnName;
  }

  // physical_name - computed: false, optional: true, required: false
  private _physicalName?: string; 
  public get physicalName() {
    return this.getStringAttribute('physical_name');
  }
  public set physicalName(value: string) {
    this._physicalName = value;
  }
  public resetPhysicalName() {
    this._physicalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalNameInput() {
    return this._physicalName;
  }

  // queue_name - computed: false, optional: false, required: true
  private _queueName?: string; 
  public get queueName() {
    return this.getStringAttribute('queue_name');
  }
  public set queueName(value: string) {
    this._queueName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueNameInput() {
    return this._queueName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      physical_name: cdktf.stringToTerraform(this._physicalName),
      queue_name: cdktf.stringToTerraform(this._queueName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      msg_vpn_name: {
        value: cdktf.stringToHclTerraform(this._msgVpnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      physical_name: {
        value: cdktf.stringToHclTerraform(this._physicalName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queue_name: {
        value: cdktf.stringToHclTerraform(this._queueName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
