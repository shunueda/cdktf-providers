// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_bgp_ax
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpServerEnableTrapsRoutingBgpAxAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable bgpBackwardTransNotification traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_bgp_ax#bgpbackwardtransnotification SnmpServerEnableTrapsRoutingBgpAxA#bgpbackwardtransnotification}
  */
  readonly bgpbackwardtransnotification?: number;
  /**
  * Enable bgpEstablishedNotification traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_bgp_ax#bgpestablishednotification SnmpServerEnableTrapsRoutingBgpAxA#bgpestablishednotification}
  */
  readonly bgpestablishednotification?: number;
  /**
  * Enable bgpPrefixThresholdClearNotification traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_bgp_ax#bgpprefixthresholdclearnotification SnmpServerEnableTrapsRoutingBgpAxA#bgpprefixthresholdclearnotification}
  */
  readonly bgpprefixthresholdclearnotification?: number;
  /**
  * Enable bgpPrefixThresholdExceededNotification traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_bgp_ax#bgpprefixthresholdexceedednotification SnmpServerEnableTrapsRoutingBgpAxA#bgpprefixthresholdexceedednotification}
  */
  readonly bgpprefixthresholdexceedednotification?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_bgp_ax#id SnmpServerEnableTrapsRoutingBgpAxA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_bgp_ax#uuid SnmpServerEnableTrapsRoutingBgpAxA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_bgp_ax thunder_snmp_server_enable_traps_routing_bgp_ax}
*/
export class SnmpServerEnableTrapsRoutingBgpAxA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_snmp_server_enable_traps_routing_bgp_ax";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmpServerEnableTrapsRoutingBgpAxA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmpServerEnableTrapsRoutingBgpAxA to import
  * @param importFromId The id of the existing SnmpServerEnableTrapsRoutingBgpAxA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_bgp_ax#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmpServerEnableTrapsRoutingBgpAxA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_snmp_server_enable_traps_routing_bgp_ax", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_routing_bgp_ax thunder_snmp_server_enable_traps_routing_bgp_ax} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpServerEnableTrapsRoutingBgpAxAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SnmpServerEnableTrapsRoutingBgpAxAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_snmp_server_enable_traps_routing_bgp_ax',
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
    this._bgpbackwardtransnotification = config.bgpbackwardtransnotification;
    this._bgpestablishednotification = config.bgpestablishednotification;
    this._bgpprefixthresholdclearnotification = config.bgpprefixthresholdclearnotification;
    this._bgpprefixthresholdexceedednotification = config.bgpprefixthresholdexceedednotification;
    this._id = config.id;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bgpbackwardtransnotification - computed: false, optional: true, required: false
  private _bgpbackwardtransnotification?: number; 
  public get bgpbackwardtransnotification() {
    return this.getNumberAttribute('bgpbackwardtransnotification');
  }
  public set bgpbackwardtransnotification(value: number) {
    this._bgpbackwardtransnotification = value;
  }
  public resetBgpbackwardtransnotification() {
    this._bgpbackwardtransnotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpbackwardtransnotificationInput() {
    return this._bgpbackwardtransnotification;
  }

  // bgpestablishednotification - computed: false, optional: true, required: false
  private _bgpestablishednotification?: number; 
  public get bgpestablishednotification() {
    return this.getNumberAttribute('bgpestablishednotification');
  }
  public set bgpestablishednotification(value: number) {
    this._bgpestablishednotification = value;
  }
  public resetBgpestablishednotification() {
    this._bgpestablishednotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpestablishednotificationInput() {
    return this._bgpestablishednotification;
  }

  // bgpprefixthresholdclearnotification - computed: false, optional: true, required: false
  private _bgpprefixthresholdclearnotification?: number; 
  public get bgpprefixthresholdclearnotification() {
    return this.getNumberAttribute('bgpprefixthresholdclearnotification');
  }
  public set bgpprefixthresholdclearnotification(value: number) {
    this._bgpprefixthresholdclearnotification = value;
  }
  public resetBgpprefixthresholdclearnotification() {
    this._bgpprefixthresholdclearnotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpprefixthresholdclearnotificationInput() {
    return this._bgpprefixthresholdclearnotification;
  }

  // bgpprefixthresholdexceedednotification - computed: false, optional: true, required: false
  private _bgpprefixthresholdexceedednotification?: number; 
  public get bgpprefixthresholdexceedednotification() {
    return this.getNumberAttribute('bgpprefixthresholdexceedednotification');
  }
  public set bgpprefixthresholdexceedednotification(value: number) {
    this._bgpprefixthresholdexceedednotification = value;
  }
  public resetBgpprefixthresholdexceedednotification() {
    this._bgpprefixthresholdexceedednotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpprefixthresholdexceedednotificationInput() {
    return this._bgpprefixthresholdexceedednotification;
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
      bgpbackwardtransnotification: cdktf.numberToTerraform(this._bgpbackwardtransnotification),
      bgpestablishednotification: cdktf.numberToTerraform(this._bgpestablishednotification),
      bgpprefixthresholdclearnotification: cdktf.numberToTerraform(this._bgpprefixthresholdclearnotification),
      bgpprefixthresholdexceedednotification: cdktf.numberToTerraform(this._bgpprefixthresholdexceedednotification),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bgpbackwardtransnotification: {
        value: cdktf.numberToHclTerraform(this._bgpbackwardtransnotification),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bgpestablishednotification: {
        value: cdktf.numberToHclTerraform(this._bgpestablishednotification),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bgpprefixthresholdclearnotification: {
        value: cdktf.numberToHclTerraform(this._bgpprefixthresholdclearnotification),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bgpprefixthresholdexceedednotification: {
        value: cdktf.numberToHclTerraform(this._bgpprefixthresholdexceedednotification),
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
