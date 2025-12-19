// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderInterfaceEthernetStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_stats#id DataThunderInterfaceEthernetStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ethernet interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_stats#ifnum DataThunderInterfaceEthernetStats#ifnum}
  */
  readonly ifnum: number;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_stats#stats DataThunderInterfaceEthernetStats#stats}
  */
  readonly stats?: DataThunderInterfaceEthernetStatsStats;
}
export interface DataThunderInterfaceEthernetStatsStats {
  /**
  * Input bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_stats#bytes_input DataThunderInterfaceEthernetStats#bytes_input}
  */
  readonly bytesInput?: number;
  /**
  * Output bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_stats#bytes_output DataThunderInterfaceEthernetStats#bytes_output}
  */
  readonly bytesOutput?: number;
  /**
  * Collisions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_stats#collisions DataThunderInterfaceEthernetStats#collisions}
  */
  readonly collisions?: number;
  /**
  * CRC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_stats#crc DataThunderInterfaceEthernetStats#crc}
  */
  readonly crc?: number;
  /**
  * Frames
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_stats#frame DataThunderInterfaceEthernetStats#frame}
  */
  readonly frame?: number;
  /**
  * Giants
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_stats#giants DataThunderInterfaceEthernetStats#giants}
  */
  readonly giants?: number;
  /**
  * Output Giants
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_stats#giants_output DataThunderInterfaceEthernetStats#giants_output}
  */
  readonly giantsOutput?: number;
  /**
  * Input errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_stats#input_errors DataThunderInterfaceEthernetStats#input_errors}
  */
  readonly inputErrors?: number;
  /**
  * Input Utilization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_stats#input_utilization DataThunderInterfaceEthernetStats#input_utilization}
  */
  readonly inputUtilization?: number;
  /**
  * Load Interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_stats#load_interval DataThunderInterfaceEthernetStats#load_interval}
  */
  readonly loadInterval?: number;
  /**
  * Output errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_stats#output_errors DataThunderInterfaceEthernetStats#output_errors}
  */
  readonly outputErrors?: number;
  /**
  * Output Utilization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_stats#output_utilization DataThunderInterfaceEthernetStats#output_utilization}
  */
  readonly outputUtilization?: number;
  /**
  * Input packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_stats#packets_input DataThunderInterfaceEthernetStats#packets_input}
  */
  readonly packetsInput?: number;
  /**
  * Output packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_stats#packets_output DataThunderInterfaceEthernetStats#packets_output}
  */
  readonly packetsOutput?: number;
  /**
  * Byte received rate bits/sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_stats#rate_byte_rcvd DataThunderInterfaceEthernetStats#rate_byte_rcvd}
  */
  readonly rateByteRcvd?: number;
  /**
  * Byte sent rate bits/sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_stats#rate_byte_sent DataThunderInterfaceEthernetStats#rate_byte_sent}
  */
  readonly rateByteSent?: number;
  /**
  * Packet received rate packets/sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_stats#rate_pkt_rcvd DataThunderInterfaceEthernetStats#rate_pkt_rcvd}
  */
  readonly ratePktRcvd?: number;
  /**
  * Packet sent rate packets/sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_stats#rate_pkt_sent DataThunderInterfaceEthernetStats#rate_pkt_sent}
  */
  readonly ratePktSent?: number;
  /**
  * Receive Drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_stats#receive_drops DataThunderInterfaceEthernetStats#receive_drops}
  */
  readonly receiveDrops?: number;
  /**
  * Received broadcasts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_stats#received_broadcasts DataThunderInterfaceEthernetStats#received_broadcasts}
  */
  readonly receivedBroadcasts?: number;
  /**
  * Received multicasts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_stats#received_multicasts DataThunderInterfaceEthernetStats#received_multicasts}
  */
  readonly receivedMulticasts?: number;
  /**
  * Received unicasts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_stats#received_unicasts DataThunderInterfaceEthernetStats#received_unicasts}
  */
  readonly receivedUnicasts?: number;
  /**
  * Runts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_stats#runts DataThunderInterfaceEthernetStats#runts}
  */
  readonly runts?: number;
  /**
  * Transmit Drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_stats#transmit_drops DataThunderInterfaceEthernetStats#transmit_drops}
  */
  readonly transmitDrops?: number;
  /**
  * Transmitted broadcasts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_stats#transmitted_broadcasts DataThunderInterfaceEthernetStats#transmitted_broadcasts}
  */
  readonly transmittedBroadcasts?: number;
  /**
  * Transmitted multicasts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_stats#transmitted_multicasts DataThunderInterfaceEthernetStats#transmitted_multicasts}
  */
  readonly transmittedMulticasts?: number;
  /**
  * Transmitted unicasts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_stats#transmitted_unicasts DataThunderInterfaceEthernetStats#transmitted_unicasts}
  */
  readonly transmittedUnicasts?: number;
}

export function dataThunderInterfaceEthernetStatsStatsToTerraform(struct?: DataThunderInterfaceEthernetStatsStatsOutputReference | DataThunderInterfaceEthernetStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bytes_input: cdktf.numberToTerraform(struct!.bytesInput),
    bytes_output: cdktf.numberToTerraform(struct!.bytesOutput),
    collisions: cdktf.numberToTerraform(struct!.collisions),
    crc: cdktf.numberToTerraform(struct!.crc),
    frame: cdktf.numberToTerraform(struct!.frame),
    giants: cdktf.numberToTerraform(struct!.giants),
    giants_output: cdktf.numberToTerraform(struct!.giantsOutput),
    input_errors: cdktf.numberToTerraform(struct!.inputErrors),
    input_utilization: cdktf.numberToTerraform(struct!.inputUtilization),
    load_interval: cdktf.numberToTerraform(struct!.loadInterval),
    output_errors: cdktf.numberToTerraform(struct!.outputErrors),
    output_utilization: cdktf.numberToTerraform(struct!.outputUtilization),
    packets_input: cdktf.numberToTerraform(struct!.packetsInput),
    packets_output: cdktf.numberToTerraform(struct!.packetsOutput),
    rate_byte_rcvd: cdktf.numberToTerraform(struct!.rateByteRcvd),
    rate_byte_sent: cdktf.numberToTerraform(struct!.rateByteSent),
    rate_pkt_rcvd: cdktf.numberToTerraform(struct!.ratePktRcvd),
    rate_pkt_sent: cdktf.numberToTerraform(struct!.ratePktSent),
    receive_drops: cdktf.numberToTerraform(struct!.receiveDrops),
    received_broadcasts: cdktf.numberToTerraform(struct!.receivedBroadcasts),
    received_multicasts: cdktf.numberToTerraform(struct!.receivedMulticasts),
    received_unicasts: cdktf.numberToTerraform(struct!.receivedUnicasts),
    runts: cdktf.numberToTerraform(struct!.runts),
    transmit_drops: cdktf.numberToTerraform(struct!.transmitDrops),
    transmitted_broadcasts: cdktf.numberToTerraform(struct!.transmittedBroadcasts),
    transmitted_multicasts: cdktf.numberToTerraform(struct!.transmittedMulticasts),
    transmitted_unicasts: cdktf.numberToTerraform(struct!.transmittedUnicasts),
  }
}


export function dataThunderInterfaceEthernetStatsStatsToHclTerraform(struct?: DataThunderInterfaceEthernetStatsStatsOutputReference | DataThunderInterfaceEthernetStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bytes_input: {
      value: cdktf.numberToHclTerraform(struct!.bytesInput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bytes_output: {
      value: cdktf.numberToHclTerraform(struct!.bytesOutput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    collisions: {
      value: cdktf.numberToHclTerraform(struct!.collisions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crc: {
      value: cdktf.numberToHclTerraform(struct!.crc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frame: {
      value: cdktf.numberToHclTerraform(struct!.frame),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    giants: {
      value: cdktf.numberToHclTerraform(struct!.giants),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    giants_output: {
      value: cdktf.numberToHclTerraform(struct!.giantsOutput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    input_errors: {
      value: cdktf.numberToHclTerraform(struct!.inputErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    input_utilization: {
      value: cdktf.numberToHclTerraform(struct!.inputUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    load_interval: {
      value: cdktf.numberToHclTerraform(struct!.loadInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    output_errors: {
      value: cdktf.numberToHclTerraform(struct!.outputErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    output_utilization: {
      value: cdktf.numberToHclTerraform(struct!.outputUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_input: {
      value: cdktf.numberToHclTerraform(struct!.packetsInput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_output: {
      value: cdktf.numberToHclTerraform(struct!.packetsOutput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_byte_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.rateByteRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_byte_sent: {
      value: cdktf.numberToHclTerraform(struct!.rateByteSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_pkt_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.ratePktRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_pkt_sent: {
      value: cdktf.numberToHclTerraform(struct!.ratePktSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    receive_drops: {
      value: cdktf.numberToHclTerraform(struct!.receiveDrops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    received_broadcasts: {
      value: cdktf.numberToHclTerraform(struct!.receivedBroadcasts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    received_multicasts: {
      value: cdktf.numberToHclTerraform(struct!.receivedMulticasts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    received_unicasts: {
      value: cdktf.numberToHclTerraform(struct!.receivedUnicasts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    runts: {
      value: cdktf.numberToHclTerraform(struct!.runts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transmit_drops: {
      value: cdktf.numberToHclTerraform(struct!.transmitDrops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transmitted_broadcasts: {
      value: cdktf.numberToHclTerraform(struct!.transmittedBroadcasts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transmitted_multicasts: {
      value: cdktf.numberToHclTerraform(struct!.transmittedMulticasts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transmitted_unicasts: {
      value: cdktf.numberToHclTerraform(struct!.transmittedUnicasts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderInterfaceEthernetStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderInterfaceEthernetStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bytesInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytesInput = this._bytesInput;
    }
    if (this._bytesOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytesOutput = this._bytesOutput;
    }
    if (this._collisions !== undefined) {
      hasAnyValues = true;
      internalValueResult.collisions = this._collisions;
    }
    if (this._crc !== undefined) {
      hasAnyValues = true;
      internalValueResult.crc = this._crc;
    }
    if (this._frame !== undefined) {
      hasAnyValues = true;
      internalValueResult.frame = this._frame;
    }
    if (this._giants !== undefined) {
      hasAnyValues = true;
      internalValueResult.giants = this._giants;
    }
    if (this._giantsOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.giantsOutput = this._giantsOutput;
    }
    if (this._inputErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputErrors = this._inputErrors;
    }
    if (this._inputUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputUtilization = this._inputUtilization;
    }
    if (this._loadInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadInterval = this._loadInterval;
    }
    if (this._outputErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputErrors = this._outputErrors;
    }
    if (this._outputUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputUtilization = this._outputUtilization;
    }
    if (this._packetsInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsInput = this._packetsInput;
    }
    if (this._packetsOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsOutput = this._packetsOutput;
    }
    if (this._rateByteRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateByteRcvd = this._rateByteRcvd;
    }
    if (this._rateByteSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateByteSent = this._rateByteSent;
    }
    if (this._ratePktRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratePktRcvd = this._ratePktRcvd;
    }
    if (this._ratePktSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratePktSent = this._ratePktSent;
    }
    if (this._receiveDrops !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiveDrops = this._receiveDrops;
    }
    if (this._receivedBroadcasts !== undefined) {
      hasAnyValues = true;
      internalValueResult.receivedBroadcasts = this._receivedBroadcasts;
    }
    if (this._receivedMulticasts !== undefined) {
      hasAnyValues = true;
      internalValueResult.receivedMulticasts = this._receivedMulticasts;
    }
    if (this._receivedUnicasts !== undefined) {
      hasAnyValues = true;
      internalValueResult.receivedUnicasts = this._receivedUnicasts;
    }
    if (this._runts !== undefined) {
      hasAnyValues = true;
      internalValueResult.runts = this._runts;
    }
    if (this._transmitDrops !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitDrops = this._transmitDrops;
    }
    if (this._transmittedBroadcasts !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmittedBroadcasts = this._transmittedBroadcasts;
    }
    if (this._transmittedMulticasts !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmittedMulticasts = this._transmittedMulticasts;
    }
    if (this._transmittedUnicasts !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmittedUnicasts = this._transmittedUnicasts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderInterfaceEthernetStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bytesInput = undefined;
      this._bytesOutput = undefined;
      this._collisions = undefined;
      this._crc = undefined;
      this._frame = undefined;
      this._giants = undefined;
      this._giantsOutput = undefined;
      this._inputErrors = undefined;
      this._inputUtilization = undefined;
      this._loadInterval = undefined;
      this._outputErrors = undefined;
      this._outputUtilization = undefined;
      this._packetsInput = undefined;
      this._packetsOutput = undefined;
      this._rateByteRcvd = undefined;
      this._rateByteSent = undefined;
      this._ratePktRcvd = undefined;
      this._ratePktSent = undefined;
      this._receiveDrops = undefined;
      this._receivedBroadcasts = undefined;
      this._receivedMulticasts = undefined;
      this._receivedUnicasts = undefined;
      this._runts = undefined;
      this._transmitDrops = undefined;
      this._transmittedBroadcasts = undefined;
      this._transmittedMulticasts = undefined;
      this._transmittedUnicasts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bytesInput = value.bytesInput;
      this._bytesOutput = value.bytesOutput;
      this._collisions = value.collisions;
      this._crc = value.crc;
      this._frame = value.frame;
      this._giants = value.giants;
      this._giantsOutput = value.giantsOutput;
      this._inputErrors = value.inputErrors;
      this._inputUtilization = value.inputUtilization;
      this._loadInterval = value.loadInterval;
      this._outputErrors = value.outputErrors;
      this._outputUtilization = value.outputUtilization;
      this._packetsInput = value.packetsInput;
      this._packetsOutput = value.packetsOutput;
      this._rateByteRcvd = value.rateByteRcvd;
      this._rateByteSent = value.rateByteSent;
      this._ratePktRcvd = value.ratePktRcvd;
      this._ratePktSent = value.ratePktSent;
      this._receiveDrops = value.receiveDrops;
      this._receivedBroadcasts = value.receivedBroadcasts;
      this._receivedMulticasts = value.receivedMulticasts;
      this._receivedUnicasts = value.receivedUnicasts;
      this._runts = value.runts;
      this._transmitDrops = value.transmitDrops;
      this._transmittedBroadcasts = value.transmittedBroadcasts;
      this._transmittedMulticasts = value.transmittedMulticasts;
      this._transmittedUnicasts = value.transmittedUnicasts;
    }
  }

  // bytes_input - computed: false, optional: true, required: false
  private _bytesInput?: number; 
  public get bytesInput() {
    return this.getNumberAttribute('bytes_input');
  }
  public set bytesInput(value: number) {
    this._bytesInput = value;
  }
  public resetBytesInput() {
    this._bytesInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesInputInput() {
    return this._bytesInput;
  }

  // bytes_output - computed: false, optional: true, required: false
  private _bytesOutput?: number; 
  public get bytesOutput() {
    return this.getNumberAttribute('bytes_output');
  }
  public set bytesOutput(value: number) {
    this._bytesOutput = value;
  }
  public resetBytesOutput() {
    this._bytesOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesOutputInput() {
    return this._bytesOutput;
  }

  // collisions - computed: false, optional: true, required: false
  private _collisions?: number; 
  public get collisions() {
    return this.getNumberAttribute('collisions');
  }
  public set collisions(value: number) {
    this._collisions = value;
  }
  public resetCollisions() {
    this._collisions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collisionsInput() {
    return this._collisions;
  }

  // crc - computed: false, optional: true, required: false
  private _crc?: number; 
  public get crc() {
    return this.getNumberAttribute('crc');
  }
  public set crc(value: number) {
    this._crc = value;
  }
  public resetCrc() {
    this._crc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crcInput() {
    return this._crc;
  }

  // frame - computed: false, optional: true, required: false
  private _frame?: number; 
  public get frame() {
    return this.getNumberAttribute('frame');
  }
  public set frame(value: number) {
    this._frame = value;
  }
  public resetFrame() {
    this._frame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameInput() {
    return this._frame;
  }

  // giants - computed: false, optional: true, required: false
  private _giants?: number; 
  public get giants() {
    return this.getNumberAttribute('giants');
  }
  public set giants(value: number) {
    this._giants = value;
  }
  public resetGiants() {
    this._giants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get giantsInput() {
    return this._giants;
  }

  // giants_output - computed: false, optional: true, required: false
  private _giantsOutput?: number; 
  public get giantsOutput() {
    return this.getNumberAttribute('giants_output');
  }
  public set giantsOutput(value: number) {
    this._giantsOutput = value;
  }
  public resetGiantsOutput() {
    this._giantsOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get giantsOutputInput() {
    return this._giantsOutput;
  }

  // input_errors - computed: false, optional: true, required: false
  private _inputErrors?: number; 
  public get inputErrors() {
    return this.getNumberAttribute('input_errors');
  }
  public set inputErrors(value: number) {
    this._inputErrors = value;
  }
  public resetInputErrors() {
    this._inputErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputErrorsInput() {
    return this._inputErrors;
  }

  // input_utilization - computed: false, optional: true, required: false
  private _inputUtilization?: number; 
  public get inputUtilization() {
    return this.getNumberAttribute('input_utilization');
  }
  public set inputUtilization(value: number) {
    this._inputUtilization = value;
  }
  public resetInputUtilization() {
    this._inputUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputUtilizationInput() {
    return this._inputUtilization;
  }

  // load_interval - computed: false, optional: true, required: false
  private _loadInterval?: number; 
  public get loadInterval() {
    return this.getNumberAttribute('load_interval');
  }
  public set loadInterval(value: number) {
    this._loadInterval = value;
  }
  public resetLoadInterval() {
    this._loadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadIntervalInput() {
    return this._loadInterval;
  }

  // output_errors - computed: false, optional: true, required: false
  private _outputErrors?: number; 
  public get outputErrors() {
    return this.getNumberAttribute('output_errors');
  }
  public set outputErrors(value: number) {
    this._outputErrors = value;
  }
  public resetOutputErrors() {
    this._outputErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputErrorsInput() {
    return this._outputErrors;
  }

  // output_utilization - computed: false, optional: true, required: false
  private _outputUtilization?: number; 
  public get outputUtilization() {
    return this.getNumberAttribute('output_utilization');
  }
  public set outputUtilization(value: number) {
    this._outputUtilization = value;
  }
  public resetOutputUtilization() {
    this._outputUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputUtilizationInput() {
    return this._outputUtilization;
  }

  // packets_input - computed: false, optional: true, required: false
  private _packetsInput?: number; 
  public get packetsInput() {
    return this.getNumberAttribute('packets_input');
  }
  public set packetsInput(value: number) {
    this._packetsInput = value;
  }
  public resetPacketsInput() {
    this._packetsInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsInputInput() {
    return this._packetsInput;
  }

  // packets_output - computed: false, optional: true, required: false
  private _packetsOutput?: number; 
  public get packetsOutput() {
    return this.getNumberAttribute('packets_output');
  }
  public set packetsOutput(value: number) {
    this._packetsOutput = value;
  }
  public resetPacketsOutput() {
    this._packetsOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsOutputInput() {
    return this._packetsOutput;
  }

  // rate_byte_rcvd - computed: false, optional: true, required: false
  private _rateByteRcvd?: number; 
  public get rateByteRcvd() {
    return this.getNumberAttribute('rate_byte_rcvd');
  }
  public set rateByteRcvd(value: number) {
    this._rateByteRcvd = value;
  }
  public resetRateByteRcvd() {
    this._rateByteRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateByteRcvdInput() {
    return this._rateByteRcvd;
  }

  // rate_byte_sent - computed: false, optional: true, required: false
  private _rateByteSent?: number; 
  public get rateByteSent() {
    return this.getNumberAttribute('rate_byte_sent');
  }
  public set rateByteSent(value: number) {
    this._rateByteSent = value;
  }
  public resetRateByteSent() {
    this._rateByteSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateByteSentInput() {
    return this._rateByteSent;
  }

  // rate_pkt_rcvd - computed: false, optional: true, required: false
  private _ratePktRcvd?: number; 
  public get ratePktRcvd() {
    return this.getNumberAttribute('rate_pkt_rcvd');
  }
  public set ratePktRcvd(value: number) {
    this._ratePktRcvd = value;
  }
  public resetRatePktRcvd() {
    this._ratePktRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratePktRcvdInput() {
    return this._ratePktRcvd;
  }

  // rate_pkt_sent - computed: false, optional: true, required: false
  private _ratePktSent?: number; 
  public get ratePktSent() {
    return this.getNumberAttribute('rate_pkt_sent');
  }
  public set ratePktSent(value: number) {
    this._ratePktSent = value;
  }
  public resetRatePktSent() {
    this._ratePktSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratePktSentInput() {
    return this._ratePktSent;
  }

  // receive_drops - computed: false, optional: true, required: false
  private _receiveDrops?: number; 
  public get receiveDrops() {
    return this.getNumberAttribute('receive_drops');
  }
  public set receiveDrops(value: number) {
    this._receiveDrops = value;
  }
  public resetReceiveDrops() {
    this._receiveDrops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveDropsInput() {
    return this._receiveDrops;
  }

  // received_broadcasts - computed: false, optional: true, required: false
  private _receivedBroadcasts?: number; 
  public get receivedBroadcasts() {
    return this.getNumberAttribute('received_broadcasts');
  }
  public set receivedBroadcasts(value: number) {
    this._receivedBroadcasts = value;
  }
  public resetReceivedBroadcasts() {
    this._receivedBroadcasts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receivedBroadcastsInput() {
    return this._receivedBroadcasts;
  }

  // received_multicasts - computed: false, optional: true, required: false
  private _receivedMulticasts?: number; 
  public get receivedMulticasts() {
    return this.getNumberAttribute('received_multicasts');
  }
  public set receivedMulticasts(value: number) {
    this._receivedMulticasts = value;
  }
  public resetReceivedMulticasts() {
    this._receivedMulticasts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receivedMulticastsInput() {
    return this._receivedMulticasts;
  }

  // received_unicasts - computed: false, optional: true, required: false
  private _receivedUnicasts?: number; 
  public get receivedUnicasts() {
    return this.getNumberAttribute('received_unicasts');
  }
  public set receivedUnicasts(value: number) {
    this._receivedUnicasts = value;
  }
  public resetReceivedUnicasts() {
    this._receivedUnicasts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receivedUnicastsInput() {
    return this._receivedUnicasts;
  }

  // runts - computed: false, optional: true, required: false
  private _runts?: number; 
  public get runts() {
    return this.getNumberAttribute('runts');
  }
  public set runts(value: number) {
    this._runts = value;
  }
  public resetRunts() {
    this._runts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtsInput() {
    return this._runts;
  }

  // transmit_drops - computed: false, optional: true, required: false
  private _transmitDrops?: number; 
  public get transmitDrops() {
    return this.getNumberAttribute('transmit_drops');
  }
  public set transmitDrops(value: number) {
    this._transmitDrops = value;
  }
  public resetTransmitDrops() {
    this._transmitDrops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitDropsInput() {
    return this._transmitDrops;
  }

  // transmitted_broadcasts - computed: false, optional: true, required: false
  private _transmittedBroadcasts?: number; 
  public get transmittedBroadcasts() {
    return this.getNumberAttribute('transmitted_broadcasts');
  }
  public set transmittedBroadcasts(value: number) {
    this._transmittedBroadcasts = value;
  }
  public resetTransmittedBroadcasts() {
    this._transmittedBroadcasts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmittedBroadcastsInput() {
    return this._transmittedBroadcasts;
  }

  // transmitted_multicasts - computed: false, optional: true, required: false
  private _transmittedMulticasts?: number; 
  public get transmittedMulticasts() {
    return this.getNumberAttribute('transmitted_multicasts');
  }
  public set transmittedMulticasts(value: number) {
    this._transmittedMulticasts = value;
  }
  public resetTransmittedMulticasts() {
    this._transmittedMulticasts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmittedMulticastsInput() {
    return this._transmittedMulticasts;
  }

  // transmitted_unicasts - computed: false, optional: true, required: false
  private _transmittedUnicasts?: number; 
  public get transmittedUnicasts() {
    return this.getNumberAttribute('transmitted_unicasts');
  }
  public set transmittedUnicasts(value: number) {
    this._transmittedUnicasts = value;
  }
  public resetTransmittedUnicasts() {
    this._transmittedUnicasts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmittedUnicastsInput() {
    return this._transmittedUnicasts;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_stats thunder_interface_ethernet_stats}
*/
export class DataThunderInterfaceEthernetStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_interface_ethernet_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderInterfaceEthernetStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderInterfaceEthernetStats to import
  * @param importFromId The id of the existing DataThunderInterfaceEthernetStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderInterfaceEthernetStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_interface_ethernet_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/interface_ethernet_stats thunder_interface_ethernet_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderInterfaceEthernetStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderInterfaceEthernetStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_interface_ethernet_stats',
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
    this._ifnum = config.ifnum;
    this._stats.internalValue = config.stats;
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

  // ifnum - computed: false, optional: false, required: true
  private _ifnum?: number; 
  public get ifnum() {
    return this.getNumberAttribute('ifnum');
  }
  public set ifnum(value: number) {
    this._ifnum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ifnumInput() {
    return this._ifnum;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderInterfaceEthernetStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderInterfaceEthernetStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ifnum: cdktf.numberToTerraform(this._ifnum),
      stats: dataThunderInterfaceEthernetStatsStatsToTerraform(this._stats.internalValue),
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
      ifnum: {
        value: cdktf.numberToHclTerraform(this._ifnum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stats: {
        value: dataThunderInterfaceEthernetStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderInterfaceEthernetStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
