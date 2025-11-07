// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_stateful_firewall_alg_rtp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6StatefulFirewallAlgRtpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_stateful_firewall_alg_rtp#id Cgnv6StatefulFirewallAlgRtp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * RTP/RTCP STUN timeout (default: 5 minutes)}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_stateful_firewall_alg_rtp#rtp_stun_timeout Cgnv6StatefulFirewallAlgRtp#rtp_stun_timeout}
  */
  readonly rtpStunTimeout?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_stateful_firewall_alg_rtp#uuid Cgnv6StatefulFirewallAlgRtp#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_stateful_firewall_alg_rtp thunder_cgnv6_stateful_firewall_alg_rtp}
*/
export class Cgnv6StatefulFirewallAlgRtp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_stateful_firewall_alg_rtp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6StatefulFirewallAlgRtp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6StatefulFirewallAlgRtp to import
  * @param importFromId The id of the existing Cgnv6StatefulFirewallAlgRtp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_stateful_firewall_alg_rtp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6StatefulFirewallAlgRtp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_stateful_firewall_alg_rtp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_stateful_firewall_alg_rtp thunder_cgnv6_stateful_firewall_alg_rtp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6StatefulFirewallAlgRtpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Cgnv6StatefulFirewallAlgRtpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_stateful_firewall_alg_rtp',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._rtpStunTimeout = config.rtpStunTimeout;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // rtp_stun_timeout - computed: false, optional: true, required: false
  private _rtpStunTimeout?: number; 
  public get rtpStunTimeout() {
    return this.getNumberAttribute('rtp_stun_timeout');
  }
  public set rtpStunTimeout(value: number) {
    this._rtpStunTimeout = value;
  }
  public resetRtpStunTimeout() {
    this._rtpStunTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtpStunTimeoutInput() {
    return this._rtpStunTimeout;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      rtp_stun_timeout: cdktf.numberToTerraform(this._rtpStunTimeout),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      rtp_stun_timeout: {
        value: cdktf.numberToHclTerraform(this._rtpStunTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
