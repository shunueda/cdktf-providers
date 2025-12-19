// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_session_reclaim_limit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSessionReclaimLimitAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_session_reclaim_limit#id SystemSessionReclaimLimitA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * smp session scan limit (number of smp sessions per scan)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_session_reclaim_limit#nscan_limit SystemSessionReclaimLimitA#nscan_limit}
  */
  readonly nscanLimit?: number;
  /**
  * smp session scan frequency (scan per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_session_reclaim_limit#scan_freq SystemSessionReclaimLimitA#scan_freq}
  */
  readonly scanFreq?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_session_reclaim_limit#uuid SystemSessionReclaimLimitA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_session_reclaim_limit thunder_system_session_reclaim_limit}
*/
export class SystemSessionReclaimLimitA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_session_reclaim_limit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSessionReclaimLimitA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSessionReclaimLimitA to import
  * @param importFromId The id of the existing SystemSessionReclaimLimitA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_session_reclaim_limit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSessionReclaimLimitA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_session_reclaim_limit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_session_reclaim_limit thunder_system_session_reclaim_limit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSessionReclaimLimitAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemSessionReclaimLimitAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_session_reclaim_limit',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._nscanLimit = config.nscanLimit;
    this._scanFreq = config.scanFreq;
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

  // nscan_limit - computed: false, optional: true, required: false
  private _nscanLimit?: number; 
  public get nscanLimit() {
    return this.getNumberAttribute('nscan_limit');
  }
  public set nscanLimit(value: number) {
    this._nscanLimit = value;
  }
  public resetNscanLimit() {
    this._nscanLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nscanLimitInput() {
    return this._nscanLimit;
  }

  // scan_freq - computed: false, optional: true, required: false
  private _scanFreq?: number; 
  public get scanFreq() {
    return this.getNumberAttribute('scan_freq');
  }
  public set scanFreq(value: number) {
    this._scanFreq = value;
  }
  public resetScanFreq() {
    this._scanFreq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanFreqInput() {
    return this._scanFreq;
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
      nscan_limit: cdktf.numberToTerraform(this._nscanLimit),
      scan_freq: cdktf.numberToTerraform(this._scanFreq),
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
      nscan_limit: {
        value: cdktf.numberToHclTerraform(this._nscanLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scan_freq: {
        value: cdktf.numberToHclTerraform(this._scanFreq),
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
