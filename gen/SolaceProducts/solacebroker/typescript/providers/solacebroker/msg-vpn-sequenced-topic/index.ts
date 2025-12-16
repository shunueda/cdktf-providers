// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_sequenced_topic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MsgVpnSequencedTopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". Deprecated since SEMP API version 2.42. Primarily used by SolCache-RS which has been replaced by the Replay feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_sequenced_topic#msg_vpn_name MsgVpnSequencedTopic#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * Topic for applying sequence numbers.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". Deprecated since SEMP API version 2.42. Primarily used by SolCache-RS which has been replaced by the Replay feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_sequenced_topic#sequenced_topic MsgVpnSequencedTopic#sequenced_topic}
  */
  readonly sequencedTopic: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_sequenced_topic solacebroker_msg_vpn_sequenced_topic}
*/
export class MsgVpnSequencedTopic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_sequenced_topic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MsgVpnSequencedTopic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MsgVpnSequencedTopic to import
  * @param importFromId The id of the existing MsgVpnSequencedTopic that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_sequenced_topic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MsgVpnSequencedTopic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_sequenced_topic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_sequenced_topic solacebroker_msg_vpn_sequenced_topic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MsgVpnSequencedTopicConfig
  */
  public constructor(scope: Construct, id: string, config: MsgVpnSequencedTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_sequenced_topic',
      terraformGeneratorMetadata: {
        providerName: 'solacebroker',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
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
    this._sequencedTopic = config.sequencedTopic;
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

  // sequenced_topic - computed: false, optional: false, required: true
  private _sequencedTopic?: string; 
  public get sequencedTopic() {
    return this.getStringAttribute('sequenced_topic');
  }
  public set sequencedTopic(value: string) {
    this._sequencedTopic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sequencedTopicInput() {
    return this._sequencedTopic;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      sequenced_topic: cdktf.stringToTerraform(this._sequencedTopic),
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
      sequenced_topic: {
        value: cdktf.stringToHclTerraform(this._sequencedTopic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
