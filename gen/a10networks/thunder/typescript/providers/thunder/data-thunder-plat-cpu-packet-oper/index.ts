// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/plat_cpu_packet_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderPlatCpuPacketOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/plat_cpu_packet_oper#id DataThunderPlatCpuPacketOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/plat_cpu_packet_oper#oper DataThunderPlatCpuPacketOper#oper}
  */
  readonly oper?: DataThunderPlatCpuPacketOperOper;
}
export interface DataThunderPlatCpuPacketOperOperPktStats {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/plat_cpu_packet_oper#cpu_num DataThunderPlatCpuPacketOper#cpu_num}
  */
  readonly cpuNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/plat_cpu_packet_oper#pkt_drop DataThunderPlatCpuPacketOper#pkt_drop}
  */
  readonly pktDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/plat_cpu_packet_oper#pkt_rcvd DataThunderPlatCpuPacketOper#pkt_rcvd}
  */
  readonly pktRcvd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/plat_cpu_packet_oper#pkt_sent DataThunderPlatCpuPacketOper#pkt_sent}
  */
  readonly pktSent?: number;
}

export function dataThunderPlatCpuPacketOperOperPktStatsToTerraform(struct?: DataThunderPlatCpuPacketOperOperPktStats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_num: cdktf.numberToTerraform(struct!.cpuNum),
    pkt_drop: cdktf.numberToTerraform(struct!.pktDrop),
    pkt_rcvd: cdktf.numberToTerraform(struct!.pktRcvd),
    pkt_sent: cdktf.numberToTerraform(struct!.pktSent),
  }
}


export function dataThunderPlatCpuPacketOperOperPktStatsToHclTerraform(struct?: DataThunderPlatCpuPacketOperOperPktStats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_num: {
      value: cdktf.numberToHclTerraform(struct!.cpuNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_drop: {
      value: cdktf.numberToHclTerraform(struct!.pktDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.pktRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_sent: {
      value: cdktf.numberToHclTerraform(struct!.pktSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderPlatCpuPacketOperOperPktStatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderPlatCpuPacketOperOperPktStats | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuNum = this._cpuNum;
    }
    if (this._pktDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktDrop = this._pktDrop;
    }
    if (this._pktRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktRcvd = this._pktRcvd;
    }
    if (this._pktSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktSent = this._pktSent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderPlatCpuPacketOperOperPktStats | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuNum = undefined;
      this._pktDrop = undefined;
      this._pktRcvd = undefined;
      this._pktSent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuNum = value.cpuNum;
      this._pktDrop = value.pktDrop;
      this._pktRcvd = value.pktRcvd;
      this._pktSent = value.pktSent;
    }
  }

  // cpu_num - computed: false, optional: true, required: false
  private _cpuNum?: number; 
  public get cpuNum() {
    return this.getNumberAttribute('cpu_num');
  }
  public set cpuNum(value: number) {
    this._cpuNum = value;
  }
  public resetCpuNum() {
    this._cpuNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuNumInput() {
    return this._cpuNum;
  }

  // pkt_drop - computed: false, optional: true, required: false
  private _pktDrop?: number; 
  public get pktDrop() {
    return this.getNumberAttribute('pkt_drop');
  }
  public set pktDrop(value: number) {
    this._pktDrop = value;
  }
  public resetPktDrop() {
    this._pktDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktDropInput() {
    return this._pktDrop;
  }

  // pkt_rcvd - computed: false, optional: true, required: false
  private _pktRcvd?: number; 
  public get pktRcvd() {
    return this.getNumberAttribute('pkt_rcvd');
  }
  public set pktRcvd(value: number) {
    this._pktRcvd = value;
  }
  public resetPktRcvd() {
    this._pktRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktRcvdInput() {
    return this._pktRcvd;
  }

  // pkt_sent - computed: false, optional: true, required: false
  private _pktSent?: number; 
  public get pktSent() {
    return this.getNumberAttribute('pkt_sent');
  }
  public set pktSent(value: number) {
    this._pktSent = value;
  }
  public resetPktSent() {
    this._pktSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktSentInput() {
    return this._pktSent;
  }
}

export class DataThunderPlatCpuPacketOperOperPktStatsList extends cdktf.ComplexList {
  public internalValue? : DataThunderPlatCpuPacketOperOperPktStats[] | cdktf.IResolvable

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
  public get(index: number): DataThunderPlatCpuPacketOperOperPktStatsOutputReference {
    return new DataThunderPlatCpuPacketOperOperPktStatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderPlatCpuPacketOperOper {
  /**
  * pkt_stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/plat_cpu_packet_oper#pkt_stats DataThunderPlatCpuPacketOper#pkt_stats}
  */
  readonly pktStats?: DataThunderPlatCpuPacketOperOperPktStats[] | cdktf.IResolvable;
}

export function dataThunderPlatCpuPacketOperOperToTerraform(struct?: DataThunderPlatCpuPacketOperOperOutputReference | DataThunderPlatCpuPacketOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pkt_stats: cdktf.listMapper(dataThunderPlatCpuPacketOperOperPktStatsToTerraform, true)(struct!.pktStats),
  }
}


export function dataThunderPlatCpuPacketOperOperToHclTerraform(struct?: DataThunderPlatCpuPacketOperOperOutputReference | DataThunderPlatCpuPacketOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pkt_stats: {
      value: cdktf.listMapperHcl(dataThunderPlatCpuPacketOperOperPktStatsToHclTerraform, true)(struct!.pktStats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderPlatCpuPacketOperOperPktStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderPlatCpuPacketOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderPlatCpuPacketOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pktStats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktStats = this._pktStats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderPlatCpuPacketOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pktStats.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pktStats.internalValue = value.pktStats;
    }
  }

  // pkt_stats - computed: false, optional: true, required: false
  private _pktStats = new DataThunderPlatCpuPacketOperOperPktStatsList(this, "pkt_stats", false);
  public get pktStats() {
    return this._pktStats;
  }
  public putPktStats(value: DataThunderPlatCpuPacketOperOperPktStats[] | cdktf.IResolvable) {
    this._pktStats.internalValue = value;
  }
  public resetPktStats() {
    this._pktStats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktStatsInput() {
    return this._pktStats.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/plat_cpu_packet_oper thunder_plat_cpu_packet_oper}
*/
export class DataThunderPlatCpuPacketOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_plat_cpu_packet_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderPlatCpuPacketOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderPlatCpuPacketOper to import
  * @param importFromId The id of the existing DataThunderPlatCpuPacketOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/plat_cpu_packet_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderPlatCpuPacketOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_plat_cpu_packet_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/plat_cpu_packet_oper thunder_plat_cpu_packet_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderPlatCpuPacketOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderPlatCpuPacketOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_plat_cpu_packet_oper',
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
  private _oper = new DataThunderPlatCpuPacketOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderPlatCpuPacketOperOper) {
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
      oper: dataThunderPlatCpuPacketOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderPlatCpuPacketOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderPlatCpuPacketOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
