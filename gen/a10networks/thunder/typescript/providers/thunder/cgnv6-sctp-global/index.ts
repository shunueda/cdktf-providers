// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_sctp_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6SctpGlobalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set SCTP half-open timeout (SCTP half-open timeout in seconds (default 4))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_sctp_global#half_open_timeout Cgnv6SctpGlobal#half_open_timeout}
  */
  readonly halfOpenTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_sctp_global#id Cgnv6SctpGlobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * SCTP idle timeout in minutes (default 5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_sctp_global#idle_timeout Cgnv6SctpGlobal#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_sctp_global#uuid Cgnv6SctpGlobal#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_sctp_global thunder_cgnv6_sctp_global}
*/
export class Cgnv6SctpGlobal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_sctp_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6SctpGlobal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6SctpGlobal to import
  * @param importFromId The id of the existing Cgnv6SctpGlobal that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_sctp_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6SctpGlobal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_sctp_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_sctp_global thunder_cgnv6_sctp_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6SctpGlobalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Cgnv6SctpGlobalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_sctp_global',
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
    this._halfOpenTimeout = config.halfOpenTimeout;
    this._id = config.id;
    this._idleTimeout = config.idleTimeout;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // half_open_timeout - computed: false, optional: true, required: false
  private _halfOpenTimeout?: number; 
  public get halfOpenTimeout() {
    return this.getNumberAttribute('half_open_timeout');
  }
  public set halfOpenTimeout(value: number) {
    this._halfOpenTimeout = value;
  }
  public resetHalfOpenTimeout() {
    this._halfOpenTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get halfOpenTimeoutInput() {
    return this._halfOpenTimeout;
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

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
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
      half_open_timeout: cdktf.numberToTerraform(this._halfOpenTimeout),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      half_open_timeout: {
        value: cdktf.numberToHclTerraform(this._halfOpenTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idle_timeout: {
        value: cdktf.numberToHclTerraform(this._idleTimeout),
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
