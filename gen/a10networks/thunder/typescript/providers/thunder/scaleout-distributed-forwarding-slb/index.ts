// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_distributed_forwarding_slb
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScaleoutDistributedForwardingSlbConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_distributed_forwarding_slb#id ScaleoutDistributedForwardingSlb#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'enable': Enable SLB; 'disable': Disable SLB;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_distributed_forwarding_slb#slb_value ScaleoutDistributedForwardingSlb#slb_value}
  */
  readonly slbValue?: string;
  /**
  * configure packet threshold value to offload TCP sessions(default 5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_distributed_forwarding_slb#tcp_threshold ScaleoutDistributedForwardingSlb#tcp_threshold}
  */
  readonly tcpThreshold?: number;
  /**
  * configure packet threshold value to offload UDP sessions(default 5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_distributed_forwarding_slb#udp_threshold ScaleoutDistributedForwardingSlb#udp_threshold}
  */
  readonly udpThreshold?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_distributed_forwarding_slb#uuid ScaleoutDistributedForwardingSlb#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_distributed_forwarding_slb thunder_scaleout_distributed_forwarding_slb}
*/
export class ScaleoutDistributedForwardingSlb extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_scaleout_distributed_forwarding_slb";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScaleoutDistributedForwardingSlb resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScaleoutDistributedForwardingSlb to import
  * @param importFromId The id of the existing ScaleoutDistributedForwardingSlb that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_distributed_forwarding_slb#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScaleoutDistributedForwardingSlb to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_scaleout_distributed_forwarding_slb", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_distributed_forwarding_slb thunder_scaleout_distributed_forwarding_slb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScaleoutDistributedForwardingSlbConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ScaleoutDistributedForwardingSlbConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_scaleout_distributed_forwarding_slb',
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
    this._slbValue = config.slbValue;
    this._tcpThreshold = config.tcpThreshold;
    this._udpThreshold = config.udpThreshold;
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

  // slb_value - computed: false, optional: true, required: false
  private _slbValue?: string; 
  public get slbValue() {
    return this.getStringAttribute('slb_value');
  }
  public set slbValue(value: string) {
    this._slbValue = value;
  }
  public resetSlbValue() {
    this._slbValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbValueInput() {
    return this._slbValue;
  }

  // tcp_threshold - computed: false, optional: true, required: false
  private _tcpThreshold?: number; 
  public get tcpThreshold() {
    return this.getNumberAttribute('tcp_threshold');
  }
  public set tcpThreshold(value: number) {
    this._tcpThreshold = value;
  }
  public resetTcpThreshold() {
    this._tcpThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpThresholdInput() {
    return this._tcpThreshold;
  }

  // udp_threshold - computed: false, optional: true, required: false
  private _udpThreshold?: number; 
  public get udpThreshold() {
    return this.getNumberAttribute('udp_threshold');
  }
  public set udpThreshold(value: number) {
    this._udpThreshold = value;
  }
  public resetUdpThreshold() {
    this._udpThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpThresholdInput() {
    return this._udpThreshold;
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
      slb_value: cdktf.stringToTerraform(this._slbValue),
      tcp_threshold: cdktf.numberToTerraform(this._tcpThreshold),
      udp_threshold: cdktf.numberToTerraform(this._udpThreshold),
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
      slb_value: {
        value: cdktf.stringToHclTerraform(this._slbValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_threshold: {
        value: cdktf.numberToHclTerraform(this._tcpThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udp_threshold: {
        value: cdktf.numberToHclTerraform(this._udpThreshold),
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
