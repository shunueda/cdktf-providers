// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_stun_timeout_udp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6LsnStunTimeoutUdpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_stun_timeout_udp#id Cgnv6LsnStunTimeoutUdp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Port Range (Port Range End)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_stun_timeout_udp#port_end Cgnv6LsnStunTimeoutUdp#port_end}
  */
  readonly portEnd: number;
  /**
  * Port Range (Port Range Start)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_stun_timeout_udp#port_start Cgnv6LsnStunTimeoutUdp#port_start}
  */
  readonly portStart: number;
  /**
  * STUN timeout in minutes (default: 2 minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_stun_timeout_udp#timeout Cgnv6LsnStunTimeoutUdp#timeout}
  */
  readonly timeout?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_stun_timeout_udp#uuid Cgnv6LsnStunTimeoutUdp#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_stun_timeout_udp thunder_cgnv6_lsn_stun_timeout_udp}
*/
export class Cgnv6LsnStunTimeoutUdp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_lsn_stun_timeout_udp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6LsnStunTimeoutUdp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6LsnStunTimeoutUdp to import
  * @param importFromId The id of the existing Cgnv6LsnStunTimeoutUdp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_stun_timeout_udp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6LsnStunTimeoutUdp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_lsn_stun_timeout_udp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_stun_timeout_udp thunder_cgnv6_lsn_stun_timeout_udp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6LsnStunTimeoutUdpConfig
  */
  public constructor(scope: Construct, id: string, config: Cgnv6LsnStunTimeoutUdpConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_lsn_stun_timeout_udp',
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
    this._portEnd = config.portEnd;
    this._portStart = config.portStart;
    this._timeout = config.timeout;
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

  // port_end - computed: false, optional: false, required: true
  private _portEnd?: number; 
  public get portEnd() {
    return this.getNumberAttribute('port_end');
  }
  public set portEnd(value: number) {
    this._portEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portEndInput() {
    return this._portEnd;
  }

  // port_start - computed: false, optional: false, required: true
  private _portStart?: number; 
  public get portStart() {
    return this.getNumberAttribute('port_start');
  }
  public set portStart(value: number) {
    this._portStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portStartInput() {
    return this._portStart;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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
      port_end: cdktf.numberToTerraform(this._portEnd),
      port_start: cdktf.numberToTerraform(this._portStart),
      timeout: cdktf.numberToTerraform(this._timeout),
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
      port_end: {
        value: cdktf.numberToHclTerraform(this._portEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_start: {
        value: cdktf.numberToHclTerraform(this._portStart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
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
