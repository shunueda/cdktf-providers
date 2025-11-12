// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_cpu_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVrrpAStateCpuOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_cpu_oper#id DataThunderVrrpAStateCpuOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_cpu_oper#oper DataThunderVrrpAStateCpuOper#oper}
  */
  readonly oper?: DataThunderVrrpAStateCpuOperOper;
}
export interface DataThunderVrrpAStateCpuOperOperCpuUsage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_cpu_oper#cpu_id DataThunderVrrpAStateCpuOper#cpu_id}
  */
  readonly cpuId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_cpu_oper#max_query_msg_per_packet DataThunderVrrpAStateCpuOper#max_query_msg_per_packet}
  */
  readonly maxQueryMsgPerPacket?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_cpu_oper#max_sync_msg_per_packet DataThunderVrrpAStateCpuOper#max_sync_msg_per_packet}
  */
  readonly maxSyncMsgPerPacket?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_cpu_oper#min_query_msg_per_packet DataThunderVrrpAStateCpuOper#min_query_msg_per_packet}
  */
  readonly minQueryMsgPerPacket?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_cpu_oper#min_sync_msg_per_packet DataThunderVrrpAStateCpuOper#min_sync_msg_per_packet}
  */
  readonly minSyncMsgPerPacket?: number;
}

export function dataThunderVrrpAStateCpuOperOperCpuUsageToTerraform(struct?: DataThunderVrrpAStateCpuOperOperCpuUsage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_id: cdktf.numberToTerraform(struct!.cpuId),
    max_query_msg_per_packet: cdktf.numberToTerraform(struct!.maxQueryMsgPerPacket),
    max_sync_msg_per_packet: cdktf.numberToTerraform(struct!.maxSyncMsgPerPacket),
    min_query_msg_per_packet: cdktf.numberToTerraform(struct!.minQueryMsgPerPacket),
    min_sync_msg_per_packet: cdktf.numberToTerraform(struct!.minSyncMsgPerPacket),
  }
}


export function dataThunderVrrpAStateCpuOperOperCpuUsageToHclTerraform(struct?: DataThunderVrrpAStateCpuOperOperCpuUsage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_id: {
      value: cdktf.numberToHclTerraform(struct!.cpuId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_query_msg_per_packet: {
      value: cdktf.numberToHclTerraform(struct!.maxQueryMsgPerPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_sync_msg_per_packet: {
      value: cdktf.numberToHclTerraform(struct!.maxSyncMsgPerPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_query_msg_per_packet: {
      value: cdktf.numberToHclTerraform(struct!.minQueryMsgPerPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_sync_msg_per_packet: {
      value: cdktf.numberToHclTerraform(struct!.minSyncMsgPerPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVrrpAStateCpuOperOperCpuUsageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVrrpAStateCpuOperOperCpuUsage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuId = this._cpuId;
    }
    if (this._maxQueryMsgPerPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxQueryMsgPerPacket = this._maxQueryMsgPerPacket;
    }
    if (this._maxSyncMsgPerPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSyncMsgPerPacket = this._maxSyncMsgPerPacket;
    }
    if (this._minQueryMsgPerPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.minQueryMsgPerPacket = this._minQueryMsgPerPacket;
    }
    if (this._minSyncMsgPerPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSyncMsgPerPacket = this._minSyncMsgPerPacket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVrrpAStateCpuOperOperCpuUsage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuId = undefined;
      this._maxQueryMsgPerPacket = undefined;
      this._maxSyncMsgPerPacket = undefined;
      this._minQueryMsgPerPacket = undefined;
      this._minSyncMsgPerPacket = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuId = value.cpuId;
      this._maxQueryMsgPerPacket = value.maxQueryMsgPerPacket;
      this._maxSyncMsgPerPacket = value.maxSyncMsgPerPacket;
      this._minQueryMsgPerPacket = value.minQueryMsgPerPacket;
      this._minSyncMsgPerPacket = value.minSyncMsgPerPacket;
    }
  }

  // cpu_id - computed: false, optional: true, required: false
  private _cpuId?: number; 
  public get cpuId() {
    return this.getNumberAttribute('cpu_id');
  }
  public set cpuId(value: number) {
    this._cpuId = value;
  }
  public resetCpuId() {
    this._cpuId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuIdInput() {
    return this._cpuId;
  }

  // max_query_msg_per_packet - computed: false, optional: true, required: false
  private _maxQueryMsgPerPacket?: number; 
  public get maxQueryMsgPerPacket() {
    return this.getNumberAttribute('max_query_msg_per_packet');
  }
  public set maxQueryMsgPerPacket(value: number) {
    this._maxQueryMsgPerPacket = value;
  }
  public resetMaxQueryMsgPerPacket() {
    this._maxQueryMsgPerPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxQueryMsgPerPacketInput() {
    return this._maxQueryMsgPerPacket;
  }

  // max_sync_msg_per_packet - computed: false, optional: true, required: false
  private _maxSyncMsgPerPacket?: number; 
  public get maxSyncMsgPerPacket() {
    return this.getNumberAttribute('max_sync_msg_per_packet');
  }
  public set maxSyncMsgPerPacket(value: number) {
    this._maxSyncMsgPerPacket = value;
  }
  public resetMaxSyncMsgPerPacket() {
    this._maxSyncMsgPerPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSyncMsgPerPacketInput() {
    return this._maxSyncMsgPerPacket;
  }

  // min_query_msg_per_packet - computed: false, optional: true, required: false
  private _minQueryMsgPerPacket?: number; 
  public get minQueryMsgPerPacket() {
    return this.getNumberAttribute('min_query_msg_per_packet');
  }
  public set minQueryMsgPerPacket(value: number) {
    this._minQueryMsgPerPacket = value;
  }
  public resetMinQueryMsgPerPacket() {
    this._minQueryMsgPerPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minQueryMsgPerPacketInput() {
    return this._minQueryMsgPerPacket;
  }

  // min_sync_msg_per_packet - computed: false, optional: true, required: false
  private _minSyncMsgPerPacket?: number; 
  public get minSyncMsgPerPacket() {
    return this.getNumberAttribute('min_sync_msg_per_packet');
  }
  public set minSyncMsgPerPacket(value: number) {
    this._minSyncMsgPerPacket = value;
  }
  public resetMinSyncMsgPerPacket() {
    this._minSyncMsgPerPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSyncMsgPerPacketInput() {
    return this._minSyncMsgPerPacket;
  }
}

export class DataThunderVrrpAStateCpuOperOperCpuUsageList extends cdktf.ComplexList {
  public internalValue? : DataThunderVrrpAStateCpuOperOperCpuUsage[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVrrpAStateCpuOperOperCpuUsageOutputReference {
    return new DataThunderVrrpAStateCpuOperOperCpuUsageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVrrpAStateCpuOperOper {
  /**
  * cpu_usage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_cpu_oper#cpu_usage DataThunderVrrpAStateCpuOper#cpu_usage}
  */
  readonly cpuUsage?: DataThunderVrrpAStateCpuOperOperCpuUsage[] | cdktf.IResolvable;
}

export function dataThunderVrrpAStateCpuOperOperToTerraform(struct?: DataThunderVrrpAStateCpuOperOperOutputReference | DataThunderVrrpAStateCpuOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_usage: cdktf.listMapper(dataThunderVrrpAStateCpuOperOperCpuUsageToTerraform, true)(struct!.cpuUsage),
  }
}


export function dataThunderVrrpAStateCpuOperOperToHclTerraform(struct?: DataThunderVrrpAStateCpuOperOperOutputReference | DataThunderVrrpAStateCpuOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_usage: {
      value: cdktf.listMapperHcl(dataThunderVrrpAStateCpuOperOperCpuUsageToHclTerraform, true)(struct!.cpuUsage),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVrrpAStateCpuOperOperCpuUsageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVrrpAStateCpuOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVrrpAStateCpuOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuUsage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuUsage = this._cpuUsage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVrrpAStateCpuOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuUsage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuUsage.internalValue = value.cpuUsage;
    }
  }

  // cpu_usage - computed: false, optional: true, required: false
  private _cpuUsage = new DataThunderVrrpAStateCpuOperOperCpuUsageList(this, "cpu_usage", false);
  public get cpuUsage() {
    return this._cpuUsage;
  }
  public putCpuUsage(value: DataThunderVrrpAStateCpuOperOperCpuUsage[] | cdktf.IResolvable) {
    this._cpuUsage.internalValue = value;
  }
  public resetCpuUsage() {
    this._cpuUsage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuUsageInput() {
    return this._cpuUsage.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_cpu_oper thunder_vrrp_a_state_cpu_oper}
*/
export class DataThunderVrrpAStateCpuOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vrrp_a_state_cpu_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVrrpAStateCpuOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVrrpAStateCpuOper to import
  * @param importFromId The id of the existing DataThunderVrrpAStateCpuOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_cpu_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVrrpAStateCpuOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vrrp_a_state_cpu_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_cpu_oper thunder_vrrp_a_state_cpu_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVrrpAStateCpuOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVrrpAStateCpuOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vrrp_a_state_cpu_oper',
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
  private _oper = new DataThunderVrrpAStateCpuOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVrrpAStateCpuOperOper) {
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
      oper: dataThunderVrrpAStateCpuOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderVrrpAStateCpuOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVrrpAStateCpuOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
