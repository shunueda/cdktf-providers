// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_ethernet_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderRrdEthernetOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_ethernet_oper#id DataThunderRrdEthernetOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_ethernet_oper#oper DataThunderRrdEthernetOper#oper}
  */
  readonly oper?: DataThunderRrdEthernetOperOper;
}
export interface DataThunderRrdEthernetOperOperEthernetStatistics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_ethernet_oper#rx_bits DataThunderRrdEthernetOper#rx_bits}
  */
  readonly rxBits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_ethernet_oper#rx_drop DataThunderRrdEthernetOper#rx_drop}
  */
  readonly rxDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_ethernet_oper#rx_error DataThunderRrdEthernetOper#rx_error}
  */
  readonly rxError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_ethernet_oper#rx_packets DataThunderRrdEthernetOper#rx_packets}
  */
  readonly rxPackets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_ethernet_oper#time DataThunderRrdEthernetOper#time}
  */
  readonly time?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_ethernet_oper#tx_bits DataThunderRrdEthernetOper#tx_bits}
  */
  readonly txBits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_ethernet_oper#tx_drop DataThunderRrdEthernetOper#tx_drop}
  */
  readonly txDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_ethernet_oper#tx_error DataThunderRrdEthernetOper#tx_error}
  */
  readonly txError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_ethernet_oper#tx_packets DataThunderRrdEthernetOper#tx_packets}
  */
  readonly txPackets?: number;
}

export function dataThunderRrdEthernetOperOperEthernetStatisticsToTerraform(struct?: DataThunderRrdEthernetOperOperEthernetStatistics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rx_bits: cdktf.numberToTerraform(struct!.rxBits),
    rx_drop: cdktf.numberToTerraform(struct!.rxDrop),
    rx_error: cdktf.numberToTerraform(struct!.rxError),
    rx_packets: cdktf.numberToTerraform(struct!.rxPackets),
    time: cdktf.numberToTerraform(struct!.time),
    tx_bits: cdktf.numberToTerraform(struct!.txBits),
    tx_drop: cdktf.numberToTerraform(struct!.txDrop),
    tx_error: cdktf.numberToTerraform(struct!.txError),
    tx_packets: cdktf.numberToTerraform(struct!.txPackets),
  }
}


export function dataThunderRrdEthernetOperOperEthernetStatisticsToHclTerraform(struct?: DataThunderRrdEthernetOperOperEthernetStatistics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rx_bits: {
      value: cdktf.numberToHclTerraform(struct!.rxBits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rx_drop: {
      value: cdktf.numberToHclTerraform(struct!.rxDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rx_error: {
      value: cdktf.numberToHclTerraform(struct!.rxError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rx_packets: {
      value: cdktf.numberToHclTerraform(struct!.rxPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktf.numberToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx_bits: {
      value: cdktf.numberToHclTerraform(struct!.txBits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx_drop: {
      value: cdktf.numberToHclTerraform(struct!.txDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx_error: {
      value: cdktf.numberToHclTerraform(struct!.txError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx_packets: {
      value: cdktf.numberToHclTerraform(struct!.txPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRrdEthernetOperOperEthernetStatisticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataThunderRrdEthernetOperOperEthernetStatistics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rxBits !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxBits = this._rxBits;
    }
    if (this._rxDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxDrop = this._rxDrop;
    }
    if (this._rxError !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxError = this._rxError;
    }
    if (this._rxPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxPackets = this._rxPackets;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    if (this._txBits !== undefined) {
      hasAnyValues = true;
      internalValueResult.txBits = this._txBits;
    }
    if (this._txDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.txDrop = this._txDrop;
    }
    if (this._txError !== undefined) {
      hasAnyValues = true;
      internalValueResult.txError = this._txError;
    }
    if (this._txPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.txPackets = this._txPackets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRrdEthernetOperOperEthernetStatistics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rxBits = undefined;
      this._rxDrop = undefined;
      this._rxError = undefined;
      this._rxPackets = undefined;
      this._time = undefined;
      this._txBits = undefined;
      this._txDrop = undefined;
      this._txError = undefined;
      this._txPackets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rxBits = value.rxBits;
      this._rxDrop = value.rxDrop;
      this._rxError = value.rxError;
      this._rxPackets = value.rxPackets;
      this._time = value.time;
      this._txBits = value.txBits;
      this._txDrop = value.txDrop;
      this._txError = value.txError;
      this._txPackets = value.txPackets;
    }
  }

  // rx_bits - computed: false, optional: true, required: false
  private _rxBits?: number; 
  public get rxBits() {
    return this.getNumberAttribute('rx_bits');
  }
  public set rxBits(value: number) {
    this._rxBits = value;
  }
  public resetRxBits() {
    this._rxBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxBitsInput() {
    return this._rxBits;
  }

  // rx_drop - computed: false, optional: true, required: false
  private _rxDrop?: number; 
  public get rxDrop() {
    return this.getNumberAttribute('rx_drop');
  }
  public set rxDrop(value: number) {
    this._rxDrop = value;
  }
  public resetRxDrop() {
    this._rxDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxDropInput() {
    return this._rxDrop;
  }

  // rx_error - computed: false, optional: true, required: false
  private _rxError?: number; 
  public get rxError() {
    return this.getNumberAttribute('rx_error');
  }
  public set rxError(value: number) {
    this._rxError = value;
  }
  public resetRxError() {
    this._rxError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxErrorInput() {
    return this._rxError;
  }

  // rx_packets - computed: false, optional: true, required: false
  private _rxPackets?: number; 
  public get rxPackets() {
    return this.getNumberAttribute('rx_packets');
  }
  public set rxPackets(value: number) {
    this._rxPackets = value;
  }
  public resetRxPackets() {
    this._rxPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxPacketsInput() {
    return this._rxPackets;
  }

  // time - computed: false, optional: true, required: false
  private _time?: number; 
  public get time() {
    return this.getNumberAttribute('time');
  }
  public set time(value: number) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }

  // tx_bits - computed: false, optional: true, required: false
  private _txBits?: number; 
  public get txBits() {
    return this.getNumberAttribute('tx_bits');
  }
  public set txBits(value: number) {
    this._txBits = value;
  }
  public resetTxBits() {
    this._txBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txBitsInput() {
    return this._txBits;
  }

  // tx_drop - computed: false, optional: true, required: false
  private _txDrop?: number; 
  public get txDrop() {
    return this.getNumberAttribute('tx_drop');
  }
  public set txDrop(value: number) {
    this._txDrop = value;
  }
  public resetTxDrop() {
    this._txDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txDropInput() {
    return this._txDrop;
  }

  // tx_error - computed: false, optional: true, required: false
  private _txError?: number; 
  public get txError() {
    return this.getNumberAttribute('tx_error');
  }
  public set txError(value: number) {
    this._txError = value;
  }
  public resetTxError() {
    this._txError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txErrorInput() {
    return this._txError;
  }

  // tx_packets - computed: false, optional: true, required: false
  private _txPackets?: number; 
  public get txPackets() {
    return this.getNumberAttribute('tx_packets');
  }
  public set txPackets(value: number) {
    this._txPackets = value;
  }
  public resetTxPackets() {
    this._txPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txPacketsInput() {
    return this._txPackets;
  }
}

export class DataThunderRrdEthernetOperOperEthernetStatisticsList extends cdktf.ComplexList {
  public internalValue? : DataThunderRrdEthernetOperOperEthernetStatistics[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataThunderRrdEthernetOperOperEthernetStatisticsOutputReference {
    return new DataThunderRrdEthernetOperOperEthernetStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderRrdEthernetOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_ethernet_oper#end_time DataThunderRrdEthernetOper#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_ethernet_oper#ethernet_index DataThunderRrdEthernetOper#ethernet_index}
  */
  readonly ethernetIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_ethernet_oper#start_time DataThunderRrdEthernetOper#start_time}
  */
  readonly startTime?: number;
  /**
  * ethernet_statistics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_ethernet_oper#ethernet_statistics DataThunderRrdEthernetOper#ethernet_statistics}
  */
  readonly ethernetStatistics?: DataThunderRrdEthernetOperOperEthernetStatistics[] | cdktf.IResolvable;
}

export function dataThunderRrdEthernetOperOperToTerraform(struct?: DataThunderRrdEthernetOperOperOutputReference | DataThunderRrdEthernetOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.numberToTerraform(struct!.endTime),
    ethernet_index: cdktf.numberToTerraform(struct!.ethernetIndex),
    start_time: cdktf.numberToTerraform(struct!.startTime),
    ethernet_statistics: cdktf.listMapper(dataThunderRrdEthernetOperOperEthernetStatisticsToTerraform, true)(struct!.ethernetStatistics),
  }
}


export function dataThunderRrdEthernetOperOperToHclTerraform(struct?: DataThunderRrdEthernetOperOperOutputReference | DataThunderRrdEthernetOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktf.numberToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ethernet_index: {
      value: cdktf.numberToHclTerraform(struct!.ethernetIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.numberToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ethernet_statistics: {
      value: cdktf.listMapperHcl(dataThunderRrdEthernetOperOperEthernetStatisticsToHclTerraform, true)(struct!.ethernetStatistics),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderRrdEthernetOperOperEthernetStatisticsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRrdEthernetOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderRrdEthernetOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._ethernetIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetIndex = this._ethernetIndex;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._ethernetStatistics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetStatistics = this._ethernetStatistics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRrdEthernetOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endTime = undefined;
      this._ethernetIndex = undefined;
      this._startTime = undefined;
      this._ethernetStatistics.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endTime = value.endTime;
      this._ethernetIndex = value.ethernetIndex;
      this._startTime = value.startTime;
      this._ethernetStatistics.internalValue = value.ethernetStatistics;
    }
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // ethernet_index - computed: false, optional: true, required: false
  private _ethernetIndex?: number; 
  public get ethernetIndex() {
    return this.getNumberAttribute('ethernet_index');
  }
  public set ethernetIndex(value: number) {
    this._ethernetIndex = value;
  }
  public resetEthernetIndex() {
    this._ethernetIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetIndexInput() {
    return this._ethernetIndex;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // ethernet_statistics - computed: false, optional: true, required: false
  private _ethernetStatistics = new DataThunderRrdEthernetOperOperEthernetStatisticsList(this, "ethernet_statistics", false);
  public get ethernetStatistics() {
    return this._ethernetStatistics;
  }
  public putEthernetStatistics(value: DataThunderRrdEthernetOperOperEthernetStatistics[] | cdktf.IResolvable) {
    this._ethernetStatistics.internalValue = value;
  }
  public resetEthernetStatistics() {
    this._ethernetStatistics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetStatisticsInput() {
    return this._ethernetStatistics.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_ethernet_oper thunder_rrd_ethernet_oper}
*/
export class DataThunderRrdEthernetOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_rrd_ethernet_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderRrdEthernetOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderRrdEthernetOper to import
  * @param importFromId The id of the existing DataThunderRrdEthernetOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_ethernet_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderRrdEthernetOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_rrd_ethernet_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_ethernet_oper thunder_rrd_ethernet_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderRrdEthernetOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderRrdEthernetOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_rrd_ethernet_oper',
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
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderRrdEthernetOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderRrdEthernetOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderRrdEthernetOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderRrdEthernetOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderRrdEthernetOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
