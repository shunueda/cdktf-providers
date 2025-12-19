// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template_indicators_to_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosNetworkObjectTemplateIndicatorsToMonitorAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template_indicators_to_monitor#enable DdosNetworkObjectTemplateIndicatorsToMonitorA#enable}
  */
  readonly enable: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template_indicators_to_monitor#id DdosNetworkObjectTemplateIndicatorsToMonitorA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Forward bit rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template_indicators_to_monitor#monitor_bit_rate DdosNetworkObjectTemplateIndicatorsToMonitorA#monitor_bit_rate}
  */
  readonly monitorBitRate?: number;
  /**
  * FIN packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template_indicators_to_monitor#monitor_fin_rate DdosNetworkObjectTemplateIndicatorsToMonitorA#monitor_fin_rate}
  */
  readonly monitorFinRate?: number;
  /**
  * Flow count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template_indicators_to_monitor#monitor_flow_count DdosNetworkObjectTemplateIndicatorsToMonitorA#monitor_flow_count}
  */
  readonly monitorFlowCount?: number;
  /**
  * ICMP packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template_indicators_to_monitor#monitor_icmp_pkt_rate DdosNetworkObjectTemplateIndicatorsToMonitorA#monitor_icmp_pkt_rate}
  */
  readonly monitorIcmpPktRate?: number;
  /**
  * Forward packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template_indicators_to_monitor#monitor_pkt_rate DdosNetworkObjectTemplateIndicatorsToMonitorA#monitor_pkt_rate}
  */
  readonly monitorPktRate?: number;
  /**
  * Reverse bit rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template_indicators_to_monitor#monitor_rev_bit_rate DdosNetworkObjectTemplateIndicatorsToMonitorA#monitor_rev_bit_rate}
  */
  readonly monitorRevBitRate?: number;
  /**
  * Reverse packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template_indicators_to_monitor#monitor_rev_pkt_rate DdosNetworkObjectTemplateIndicatorsToMonitorA#monitor_rev_pkt_rate}
  */
  readonly monitorRevPktRate?: number;
  /**
  * RST packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template_indicators_to_monitor#monitor_rst_rate DdosNetworkObjectTemplateIndicatorsToMonitorA#monitor_rst_rate}
  */
  readonly monitorRstRate?: number;
  /**
  * SYN packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template_indicators_to_monitor#monitor_syn_rate DdosNetworkObjectTemplateIndicatorsToMonitorA#monitor_syn_rate}
  */
  readonly monitorSynRate?: number;
  /**
  * TCP packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template_indicators_to_monitor#monitor_tcp_pkt_rate DdosNetworkObjectTemplateIndicatorsToMonitorA#monitor_tcp_pkt_rate}
  */
  readonly monitorTcpPktRate?: number;
  /**
  * UDP packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template_indicators_to_monitor#monitor_udp_pkt_rate DdosNetworkObjectTemplateIndicatorsToMonitorA#monitor_udp_pkt_rate}
  */
  readonly monitorUdpPktRate?: number;
  /**
  * Undiscovered forward packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template_indicators_to_monitor#monitor_undiscovered_pkt_rate DdosNetworkObjectTemplateIndicatorsToMonitorA#monitor_undiscovered_pkt_rate}
  */
  readonly monitorUndiscoveredPktRate?: number;
  /**
  * Network_object_template_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template_indicators_to_monitor#network_object_template_name DdosNetworkObjectTemplateIndicatorsToMonitorA#network_object_template_name}
  */
  readonly networkObjectTemplateName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template_indicators_to_monitor#uuid DdosNetworkObjectTemplateIndicatorsToMonitorA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template_indicators_to_monitor thunder_ddos_network_object_template_indicators_to_monitor}
*/
export class DdosNetworkObjectTemplateIndicatorsToMonitorA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_network_object_template_indicators_to_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosNetworkObjectTemplateIndicatorsToMonitorA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosNetworkObjectTemplateIndicatorsToMonitorA to import
  * @param importFromId The id of the existing DdosNetworkObjectTemplateIndicatorsToMonitorA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template_indicators_to_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosNetworkObjectTemplateIndicatorsToMonitorA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_network_object_template_indicators_to_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template_indicators_to_monitor thunder_ddos_network_object_template_indicators_to_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosNetworkObjectTemplateIndicatorsToMonitorAConfig
  */
  public constructor(scope: Construct, id: string, config: DdosNetworkObjectTemplateIndicatorsToMonitorAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_network_object_template_indicators_to_monitor',
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
    this._enable = config.enable;
    this._id = config.id;
    this._monitorBitRate = config.monitorBitRate;
    this._monitorFinRate = config.monitorFinRate;
    this._monitorFlowCount = config.monitorFlowCount;
    this._monitorIcmpPktRate = config.monitorIcmpPktRate;
    this._monitorPktRate = config.monitorPktRate;
    this._monitorRevBitRate = config.monitorRevBitRate;
    this._monitorRevPktRate = config.monitorRevPktRate;
    this._monitorRstRate = config.monitorRstRate;
    this._monitorSynRate = config.monitorSynRate;
    this._monitorTcpPktRate = config.monitorTcpPktRate;
    this._monitorUdpPktRate = config.monitorUdpPktRate;
    this._monitorUndiscoveredPktRate = config.monitorUndiscoveredPktRate;
    this._networkObjectTemplateName = config.networkObjectTemplateName;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable - computed: false, optional: false, required: true
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // monitor_bit_rate - computed: false, optional: true, required: false
  private _monitorBitRate?: number; 
  public get monitorBitRate() {
    return this.getNumberAttribute('monitor_bit_rate');
  }
  public set monitorBitRate(value: number) {
    this._monitorBitRate = value;
  }
  public resetMonitorBitRate() {
    this._monitorBitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorBitRateInput() {
    return this._monitorBitRate;
  }

  // monitor_fin_rate - computed: false, optional: true, required: false
  private _monitorFinRate?: number; 
  public get monitorFinRate() {
    return this.getNumberAttribute('monitor_fin_rate');
  }
  public set monitorFinRate(value: number) {
    this._monitorFinRate = value;
  }
  public resetMonitorFinRate() {
    this._monitorFinRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorFinRateInput() {
    return this._monitorFinRate;
  }

  // monitor_flow_count - computed: false, optional: true, required: false
  private _monitorFlowCount?: number; 
  public get monitorFlowCount() {
    return this.getNumberAttribute('monitor_flow_count');
  }
  public set monitorFlowCount(value: number) {
    this._monitorFlowCount = value;
  }
  public resetMonitorFlowCount() {
    this._monitorFlowCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorFlowCountInput() {
    return this._monitorFlowCount;
  }

  // monitor_icmp_pkt_rate - computed: false, optional: true, required: false
  private _monitorIcmpPktRate?: number; 
  public get monitorIcmpPktRate() {
    return this.getNumberAttribute('monitor_icmp_pkt_rate');
  }
  public set monitorIcmpPktRate(value: number) {
    this._monitorIcmpPktRate = value;
  }
  public resetMonitorIcmpPktRate() {
    this._monitorIcmpPktRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorIcmpPktRateInput() {
    return this._monitorIcmpPktRate;
  }

  // monitor_pkt_rate - computed: false, optional: true, required: false
  private _monitorPktRate?: number; 
  public get monitorPktRate() {
    return this.getNumberAttribute('monitor_pkt_rate');
  }
  public set monitorPktRate(value: number) {
    this._monitorPktRate = value;
  }
  public resetMonitorPktRate() {
    this._monitorPktRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorPktRateInput() {
    return this._monitorPktRate;
  }

  // monitor_rev_bit_rate - computed: false, optional: true, required: false
  private _monitorRevBitRate?: number; 
  public get monitorRevBitRate() {
    return this.getNumberAttribute('monitor_rev_bit_rate');
  }
  public set monitorRevBitRate(value: number) {
    this._monitorRevBitRate = value;
  }
  public resetMonitorRevBitRate() {
    this._monitorRevBitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorRevBitRateInput() {
    return this._monitorRevBitRate;
  }

  // monitor_rev_pkt_rate - computed: false, optional: true, required: false
  private _monitorRevPktRate?: number; 
  public get monitorRevPktRate() {
    return this.getNumberAttribute('monitor_rev_pkt_rate');
  }
  public set monitorRevPktRate(value: number) {
    this._monitorRevPktRate = value;
  }
  public resetMonitorRevPktRate() {
    this._monitorRevPktRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorRevPktRateInput() {
    return this._monitorRevPktRate;
  }

  // monitor_rst_rate - computed: false, optional: true, required: false
  private _monitorRstRate?: number; 
  public get monitorRstRate() {
    return this.getNumberAttribute('monitor_rst_rate');
  }
  public set monitorRstRate(value: number) {
    this._monitorRstRate = value;
  }
  public resetMonitorRstRate() {
    this._monitorRstRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorRstRateInput() {
    return this._monitorRstRate;
  }

  // monitor_syn_rate - computed: false, optional: true, required: false
  private _monitorSynRate?: number; 
  public get monitorSynRate() {
    return this.getNumberAttribute('monitor_syn_rate');
  }
  public set monitorSynRate(value: number) {
    this._monitorSynRate = value;
  }
  public resetMonitorSynRate() {
    this._monitorSynRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorSynRateInput() {
    return this._monitorSynRate;
  }

  // monitor_tcp_pkt_rate - computed: false, optional: true, required: false
  private _monitorTcpPktRate?: number; 
  public get monitorTcpPktRate() {
    return this.getNumberAttribute('monitor_tcp_pkt_rate');
  }
  public set monitorTcpPktRate(value: number) {
    this._monitorTcpPktRate = value;
  }
  public resetMonitorTcpPktRate() {
    this._monitorTcpPktRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorTcpPktRateInput() {
    return this._monitorTcpPktRate;
  }

  // monitor_udp_pkt_rate - computed: false, optional: true, required: false
  private _monitorUdpPktRate?: number; 
  public get monitorUdpPktRate() {
    return this.getNumberAttribute('monitor_udp_pkt_rate');
  }
  public set monitorUdpPktRate(value: number) {
    this._monitorUdpPktRate = value;
  }
  public resetMonitorUdpPktRate() {
    this._monitorUdpPktRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorUdpPktRateInput() {
    return this._monitorUdpPktRate;
  }

  // monitor_undiscovered_pkt_rate - computed: false, optional: true, required: false
  private _monitorUndiscoveredPktRate?: number; 
  public get monitorUndiscoveredPktRate() {
    return this.getNumberAttribute('monitor_undiscovered_pkt_rate');
  }
  public set monitorUndiscoveredPktRate(value: number) {
    this._monitorUndiscoveredPktRate = value;
  }
  public resetMonitorUndiscoveredPktRate() {
    this._monitorUndiscoveredPktRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorUndiscoveredPktRateInput() {
    return this._monitorUndiscoveredPktRate;
  }

  // network_object_template_name - computed: false, optional: false, required: true
  private _networkObjectTemplateName?: string; 
  public get networkObjectTemplateName() {
    return this.getStringAttribute('network_object_template_name');
  }
  public set networkObjectTemplateName(value: string) {
    this._networkObjectTemplateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkObjectTemplateNameInput() {
    return this._networkObjectTemplateName;
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
      enable: cdktf.numberToTerraform(this._enable),
      id: cdktf.stringToTerraform(this._id),
      monitor_bit_rate: cdktf.numberToTerraform(this._monitorBitRate),
      monitor_fin_rate: cdktf.numberToTerraform(this._monitorFinRate),
      monitor_flow_count: cdktf.numberToTerraform(this._monitorFlowCount),
      monitor_icmp_pkt_rate: cdktf.numberToTerraform(this._monitorIcmpPktRate),
      monitor_pkt_rate: cdktf.numberToTerraform(this._monitorPktRate),
      monitor_rev_bit_rate: cdktf.numberToTerraform(this._monitorRevBitRate),
      monitor_rev_pkt_rate: cdktf.numberToTerraform(this._monitorRevPktRate),
      monitor_rst_rate: cdktf.numberToTerraform(this._monitorRstRate),
      monitor_syn_rate: cdktf.numberToTerraform(this._monitorSynRate),
      monitor_tcp_pkt_rate: cdktf.numberToTerraform(this._monitorTcpPktRate),
      monitor_udp_pkt_rate: cdktf.numberToTerraform(this._monitorUdpPktRate),
      monitor_undiscovered_pkt_rate: cdktf.numberToTerraform(this._monitorUndiscoveredPktRate),
      network_object_template_name: cdktf.stringToTerraform(this._networkObjectTemplateName),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable: {
        value: cdktf.numberToHclTerraform(this._enable),
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
      monitor_bit_rate: {
        value: cdktf.numberToHclTerraform(this._monitorBitRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_fin_rate: {
        value: cdktf.numberToHclTerraform(this._monitorFinRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_flow_count: {
        value: cdktf.numberToHclTerraform(this._monitorFlowCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_icmp_pkt_rate: {
        value: cdktf.numberToHclTerraform(this._monitorIcmpPktRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_pkt_rate: {
        value: cdktf.numberToHclTerraform(this._monitorPktRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_rev_bit_rate: {
        value: cdktf.numberToHclTerraform(this._monitorRevBitRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_rev_pkt_rate: {
        value: cdktf.numberToHclTerraform(this._monitorRevPktRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_rst_rate: {
        value: cdktf.numberToHclTerraform(this._monitorRstRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_syn_rate: {
        value: cdktf.numberToHclTerraform(this._monitorSynRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_tcp_pkt_rate: {
        value: cdktf.numberToHclTerraform(this._monitorTcpPktRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_udp_pkt_rate: {
        value: cdktf.numberToHclTerraform(this._monitorUdpPktRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_undiscovered_pkt_rate: {
        value: cdktf.numberToHclTerraform(this._monitorUndiscoveredPktRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      network_object_template_name: {
        value: cdktf.stringToHclTerraform(this._networkObjectTemplateName),
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
