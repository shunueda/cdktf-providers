// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_collector_ip_customized_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SflowCollectorIpCustomizedSettingAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable counters for ACOS control blocks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_collector_ip_customized_setting#a10_proprietary_polling SflowCollectorIpCustomizedSettingA#a10_proprietary_polling}
  */
  readonly a10ProprietaryPolling?: number;
  /**
  * Addr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_collector_ip_customized_setting#addr SflowCollectorIpCustomizedSettingA#addr}
  */
  readonly addr: string;
  /**
  * Enable counter polling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_collector_ip_customized_setting#counter_polling SflowCollectorIpCustomizedSettingA#counter_polling}
  */
  readonly counterPolling?: number;
  /**
  * Enable event notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_collector_ip_customized_setting#event_notification SflowCollectorIpCustomizedSettingA#event_notification}
  */
  readonly eventNotification?: number;
  /**
  * 'export': Export settings;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_collector_ip_customized_setting#export_enable SflowCollectorIpCustomizedSettingA#export_enable}
  */
  readonly exportEnable: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_collector_ip_customized_setting#id SflowCollectorIpCustomizedSettingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable packet sampling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_collector_ip_customized_setting#packet_sampling SflowCollectorIpCustomizedSettingA#packet_sampling}
  */
  readonly packetSampling?: number;
  /**
  * Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_collector_ip_customized_setting#port SflowCollectorIpCustomizedSettingA#port}
  */
  readonly port: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_collector_ip_customized_setting#uuid SflowCollectorIpCustomizedSettingA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_collector_ip_customized_setting thunder_sflow_collector_ip_customized_setting}
*/
export class SflowCollectorIpCustomizedSettingA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_sflow_collector_ip_customized_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SflowCollectorIpCustomizedSettingA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SflowCollectorIpCustomizedSettingA to import
  * @param importFromId The id of the existing SflowCollectorIpCustomizedSettingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_collector_ip_customized_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SflowCollectorIpCustomizedSettingA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_sflow_collector_ip_customized_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_collector_ip_customized_setting thunder_sflow_collector_ip_customized_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SflowCollectorIpCustomizedSettingAConfig
  */
  public constructor(scope: Construct, id: string, config: SflowCollectorIpCustomizedSettingAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_sflow_collector_ip_customized_setting',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._a10ProprietaryPolling = config.a10ProprietaryPolling;
    this._addr = config.addr;
    this._counterPolling = config.counterPolling;
    this._eventNotification = config.eventNotification;
    this._exportEnable = config.exportEnable;
    this._id = config.id;
    this._packetSampling = config.packetSampling;
    this._port = config.port;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // a10_proprietary_polling - computed: false, optional: true, required: false
  private _a10ProprietaryPolling?: number; 
  public get a10ProprietaryPolling() {
    return this.getNumberAttribute('a10_proprietary_polling');
  }
  public set a10ProprietaryPolling(value: number) {
    this._a10ProprietaryPolling = value;
  }
  public resetA10ProprietaryPolling() {
    this._a10ProprietaryPolling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a10ProprietaryPollingInput() {
    return this._a10ProprietaryPolling;
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // counter_polling - computed: false, optional: true, required: false
  private _counterPolling?: number; 
  public get counterPolling() {
    return this.getNumberAttribute('counter_polling');
  }
  public set counterPolling(value: number) {
    this._counterPolling = value;
  }
  public resetCounterPolling() {
    this._counterPolling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counterPollingInput() {
    return this._counterPolling;
  }

  // event_notification - computed: false, optional: true, required: false
  private _eventNotification?: number; 
  public get eventNotification() {
    return this.getNumberAttribute('event_notification');
  }
  public set eventNotification(value: number) {
    this._eventNotification = value;
  }
  public resetEventNotification() {
    this._eventNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNotificationInput() {
    return this._eventNotification;
  }

  // export_enable - computed: false, optional: false, required: true
  private _exportEnable?: string; 
  public get exportEnable() {
    return this.getStringAttribute('export_enable');
  }
  public set exportEnable(value: string) {
    this._exportEnable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportEnableInput() {
    return this._exportEnable;
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

  // packet_sampling - computed: false, optional: true, required: false
  private _packetSampling?: number; 
  public get packetSampling() {
    return this.getNumberAttribute('packet_sampling');
  }
  public set packetSampling(value: number) {
    this._packetSampling = value;
  }
  public resetPacketSampling() {
    this._packetSampling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetSamplingInput() {
    return this._packetSampling;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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
      a10_proprietary_polling: cdktf.numberToTerraform(this._a10ProprietaryPolling),
      addr: cdktf.stringToTerraform(this._addr),
      counter_polling: cdktf.numberToTerraform(this._counterPolling),
      event_notification: cdktf.numberToTerraform(this._eventNotification),
      export_enable: cdktf.stringToTerraform(this._exportEnable),
      id: cdktf.stringToTerraform(this._id),
      packet_sampling: cdktf.numberToTerraform(this._packetSampling),
      port: cdktf.stringToTerraform(this._port),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      a10_proprietary_polling: {
        value: cdktf.numberToHclTerraform(this._a10ProprietaryPolling),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      addr: {
        value: cdktf.stringToHclTerraform(this._addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      counter_polling: {
        value: cdktf.numberToHclTerraform(this._counterPolling),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      event_notification: {
        value: cdktf.numberToHclTerraform(this._eventNotification),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      export_enable: {
        value: cdktf.stringToHclTerraform(this._exportEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_sampling: {
        value: cdktf.numberToHclTerraform(this._packetSampling),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
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
