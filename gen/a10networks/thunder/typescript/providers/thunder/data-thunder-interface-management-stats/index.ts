// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_management_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderInterfaceManagementStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_management_stats#id DataThunderInterfaceManagementStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_management_stats#stats DataThunderInterfaceManagementStats#stats}
  */
  readonly stats?: DataThunderInterfaceManagementStatsStats;
}
export interface DataThunderInterfaceManagementStatsStats {
  /**
  * Input bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_management_stats#bytes_input DataThunderInterfaceManagementStats#bytes_input}
  */
  readonly bytesInput?: number;
  /**
  * Output bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_management_stats#bytes_output DataThunderInterfaceManagementStats#bytes_output}
  */
  readonly bytesOutput?: number;
  /**
  * Collisions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_management_stats#collisions DataThunderInterfaceManagementStats#collisions}
  */
  readonly collisions?: number;
  /**
  * CRC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_management_stats#crc DataThunderInterfaceManagementStats#crc}
  */
  readonly crc?: number;
  /**
  * Frames
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_management_stats#frame DataThunderInterfaceManagementStats#frame}
  */
  readonly frame?: number;
  /**
  * Giants
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_management_stats#input_err_long DataThunderInterfaceManagementStats#input_err_long}
  */
  readonly inputErrLong?: number;
  /**
  * Runts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_management_stats#input_err_short DataThunderInterfaceManagementStats#input_err_short}
  */
  readonly inputErrShort?: number;
  /**
  * Input errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_management_stats#input_errors DataThunderInterfaceManagementStats#input_errors}
  */
  readonly inputErrors?: number;
  /**
  * Output errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_management_stats#output_errors DataThunderInterfaceManagementStats#output_errors}
  */
  readonly outputErrors?: number;
  /**
  * Input packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_management_stats#packets_input DataThunderInterfaceManagementStats#packets_input}
  */
  readonly packetsInput?: number;
  /**
  * Output packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_management_stats#packets_output DataThunderInterfaceManagementStats#packets_output}
  */
  readonly packetsOutput?: number;
  /**
  * Received broadcasts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_management_stats#received_broadcasts DataThunderInterfaceManagementStats#received_broadcasts}
  */
  readonly receivedBroadcasts?: number;
  /**
  * Received multicasts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_management_stats#received_multicasts DataThunderInterfaceManagementStats#received_multicasts}
  */
  readonly receivedMulticasts?: number;
  /**
  * Received unicasts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_management_stats#received_unicasts DataThunderInterfaceManagementStats#received_unicasts}
  */
  readonly receivedUnicasts?: number;
  /**
  * Transmitted broadcasts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_management_stats#transmitted_broadcasts DataThunderInterfaceManagementStats#transmitted_broadcasts}
  */
  readonly transmittedBroadcasts?: number;
  /**
  * Transmitted multicasts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_management_stats#transmitted_multicasts DataThunderInterfaceManagementStats#transmitted_multicasts}
  */
  readonly transmittedMulticasts?: number;
  /**
  * Transmitted unicasts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_management_stats#transmitted_unicasts DataThunderInterfaceManagementStats#transmitted_unicasts}
  */
  readonly transmittedUnicasts?: number;
}

export function dataThunderInterfaceManagementStatsStatsToTerraform(struct?: DataThunderInterfaceManagementStatsStatsOutputReference | DataThunderInterfaceManagementStatsStats): any {
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
    input_err_long: cdktf.numberToTerraform(struct!.inputErrLong),
    input_err_short: cdktf.numberToTerraform(struct!.inputErrShort),
    input_errors: cdktf.numberToTerraform(struct!.inputErrors),
    output_errors: cdktf.numberToTerraform(struct!.outputErrors),
    packets_input: cdktf.numberToTerraform(struct!.packetsInput),
    packets_output: cdktf.numberToTerraform(struct!.packetsOutput),
    received_broadcasts: cdktf.numberToTerraform(struct!.receivedBroadcasts),
    received_multicasts: cdktf.numberToTerraform(struct!.receivedMulticasts),
    received_unicasts: cdktf.numberToTerraform(struct!.receivedUnicasts),
    transmitted_broadcasts: cdktf.numberToTerraform(struct!.transmittedBroadcasts),
    transmitted_multicasts: cdktf.numberToTerraform(struct!.transmittedMulticasts),
    transmitted_unicasts: cdktf.numberToTerraform(struct!.transmittedUnicasts),
  }
}


export function dataThunderInterfaceManagementStatsStatsToHclTerraform(struct?: DataThunderInterfaceManagementStatsStatsOutputReference | DataThunderInterfaceManagementStatsStats): any {
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
    input_err_long: {
      value: cdktf.numberToHclTerraform(struct!.inputErrLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    input_err_short: {
      value: cdktf.numberToHclTerraform(struct!.inputErrShort),
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
    output_errors: {
      value: cdktf.numberToHclTerraform(struct!.outputErrors),
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

export class DataThunderInterfaceManagementStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderInterfaceManagementStatsStats | undefined {
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
    if (this._inputErrLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputErrLong = this._inputErrLong;
    }
    if (this._inputErrShort !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputErrShort = this._inputErrShort;
    }
    if (this._inputErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputErrors = this._inputErrors;
    }
    if (this._outputErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputErrors = this._outputErrors;
    }
    if (this._packetsInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsInput = this._packetsInput;
    }
    if (this._packetsOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsOutput = this._packetsOutput;
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

  public set internalValue(value: DataThunderInterfaceManagementStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bytesInput = undefined;
      this._bytesOutput = undefined;
      this._collisions = undefined;
      this._crc = undefined;
      this._frame = undefined;
      this._inputErrLong = undefined;
      this._inputErrShort = undefined;
      this._inputErrors = undefined;
      this._outputErrors = undefined;
      this._packetsInput = undefined;
      this._packetsOutput = undefined;
      this._receivedBroadcasts = undefined;
      this._receivedMulticasts = undefined;
      this._receivedUnicasts = undefined;
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
      this._inputErrLong = value.inputErrLong;
      this._inputErrShort = value.inputErrShort;
      this._inputErrors = value.inputErrors;
      this._outputErrors = value.outputErrors;
      this._packetsInput = value.packetsInput;
      this._packetsOutput = value.packetsOutput;
      this._receivedBroadcasts = value.receivedBroadcasts;
      this._receivedMulticasts = value.receivedMulticasts;
      this._receivedUnicasts = value.receivedUnicasts;
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

  // input_err_long - computed: false, optional: true, required: false
  private _inputErrLong?: number; 
  public get inputErrLong() {
    return this.getNumberAttribute('input_err_long');
  }
  public set inputErrLong(value: number) {
    this._inputErrLong = value;
  }
  public resetInputErrLong() {
    this._inputErrLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputErrLongInput() {
    return this._inputErrLong;
  }

  // input_err_short - computed: false, optional: true, required: false
  private _inputErrShort?: number; 
  public get inputErrShort() {
    return this.getNumberAttribute('input_err_short');
  }
  public set inputErrShort(value: number) {
    this._inputErrShort = value;
  }
  public resetInputErrShort() {
    this._inputErrShort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputErrShortInput() {
    return this._inputErrShort;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_management_stats thunder_interface_management_stats}
*/
export class DataThunderInterfaceManagementStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_interface_management_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderInterfaceManagementStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderInterfaceManagementStats to import
  * @param importFromId The id of the existing DataThunderInterfaceManagementStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_management_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderInterfaceManagementStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_interface_management_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_management_stats thunder_interface_management_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderInterfaceManagementStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderInterfaceManagementStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_interface_management_stats',
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderInterfaceManagementStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderInterfaceManagementStatsStats) {
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
      stats: dataThunderInterfaceManagementStatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderInterfaceManagementStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderInterfaceManagementStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
