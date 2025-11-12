// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_logging_source_address_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6LoggingSourceAddressOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_logging_source_address_oper#id DataThunderCgnv6LoggingSourceAddressOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_logging_source_address_oper#oper DataThunderCgnv6LoggingSourceAddressOper#oper}
  */
  readonly oper?: DataThunderCgnv6LoggingSourceAddressOperOper;
}
export interface DataThunderCgnv6LoggingSourceAddressOperOperSourceAddressListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_logging_source_address_oper#ref_count DataThunderCgnv6LoggingSourceAddressOper#ref_count}
  */
  readonly refCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_logging_source_address_oper#source_address DataThunderCgnv6LoggingSourceAddressOper#source_address}
  */
  readonly sourceAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_logging_source_address_oper#tcp_allocated DataThunderCgnv6LoggingSourceAddressOper#tcp_allocated}
  */
  readonly tcpAllocated?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_logging_source_address_oper#tcp_failed DataThunderCgnv6LoggingSourceAddressOper#tcp_failed}
  */
  readonly tcpFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_logging_source_address_oper#tcp_freed DataThunderCgnv6LoggingSourceAddressOper#tcp_freed}
  */
  readonly tcpFreed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_logging_source_address_oper#tcp_total DataThunderCgnv6LoggingSourceAddressOper#tcp_total}
  */
  readonly tcpTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_logging_source_address_oper#udp_allocated DataThunderCgnv6LoggingSourceAddressOper#udp_allocated}
  */
  readonly udpAllocated?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_logging_source_address_oper#udp_failed DataThunderCgnv6LoggingSourceAddressOper#udp_failed}
  */
  readonly udpFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_logging_source_address_oper#udp_freed DataThunderCgnv6LoggingSourceAddressOper#udp_freed}
  */
  readonly udpFreed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_logging_source_address_oper#udp_total DataThunderCgnv6LoggingSourceAddressOper#udp_total}
  */
  readonly udpTotal?: number;
}

export function dataThunderCgnv6LoggingSourceAddressOperOperSourceAddressListStructToTerraform(struct?: DataThunderCgnv6LoggingSourceAddressOperOperSourceAddressListStructOutputReference | DataThunderCgnv6LoggingSourceAddressOperOperSourceAddressListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref_count: cdktf.numberToTerraform(struct!.refCount),
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
    tcp_allocated: cdktf.numberToTerraform(struct!.tcpAllocated),
    tcp_failed: cdktf.numberToTerraform(struct!.tcpFailed),
    tcp_freed: cdktf.numberToTerraform(struct!.tcpFreed),
    tcp_total: cdktf.numberToTerraform(struct!.tcpTotal),
    udp_allocated: cdktf.numberToTerraform(struct!.udpAllocated),
    udp_failed: cdktf.numberToTerraform(struct!.udpFailed),
    udp_freed: cdktf.numberToTerraform(struct!.udpFreed),
    udp_total: cdktf.numberToTerraform(struct!.udpTotal),
  }
}


export function dataThunderCgnv6LoggingSourceAddressOperOperSourceAddressListStructToHclTerraform(struct?: DataThunderCgnv6LoggingSourceAddressOperOperSourceAddressListStructOutputReference | DataThunderCgnv6LoggingSourceAddressOperOperSourceAddressListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref_count: {
      value: cdktf.numberToHclTerraform(struct!.refCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_address: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_allocated: {
      value: cdktf.numberToHclTerraform(struct!.tcpAllocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_failed: {
      value: cdktf.numberToHclTerraform(struct!.tcpFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_freed: {
      value: cdktf.numberToHclTerraform(struct!.tcpFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_total: {
      value: cdktf.numberToHclTerraform(struct!.tcpTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_allocated: {
      value: cdktf.numberToHclTerraform(struct!.udpAllocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_failed: {
      value: cdktf.numberToHclTerraform(struct!.udpFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_freed: {
      value: cdktf.numberToHclTerraform(struct!.udpFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_total: {
      value: cdktf.numberToHclTerraform(struct!.udpTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6LoggingSourceAddressOperOperSourceAddressListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6LoggingSourceAddressOperOperSourceAddressListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._refCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.refCount = this._refCount;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    if (this._tcpAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAllocated = this._tcpAllocated;
    }
    if (this._tcpFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFailed = this._tcpFailed;
    }
    if (this._tcpFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFreed = this._tcpFreed;
    }
    if (this._tcpTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpTotal = this._tcpTotal;
    }
    if (this._udpAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpAllocated = this._udpAllocated;
    }
    if (this._udpFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFailed = this._udpFailed;
    }
    if (this._udpFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFreed = this._udpFreed;
    }
    if (this._udpTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpTotal = this._udpTotal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6LoggingSourceAddressOperOperSourceAddressListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._refCount = undefined;
      this._sourceAddress = undefined;
      this._tcpAllocated = undefined;
      this._tcpFailed = undefined;
      this._tcpFreed = undefined;
      this._tcpTotal = undefined;
      this._udpAllocated = undefined;
      this._udpFailed = undefined;
      this._udpFreed = undefined;
      this._udpTotal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._refCount = value.refCount;
      this._sourceAddress = value.sourceAddress;
      this._tcpAllocated = value.tcpAllocated;
      this._tcpFailed = value.tcpFailed;
      this._tcpFreed = value.tcpFreed;
      this._tcpTotal = value.tcpTotal;
      this._udpAllocated = value.udpAllocated;
      this._udpFailed = value.udpFailed;
      this._udpFreed = value.udpFreed;
      this._udpTotal = value.udpTotal;
    }
  }

  // ref_count - computed: false, optional: true, required: false
  private _refCount?: number; 
  public get refCount() {
    return this.getNumberAttribute('ref_count');
  }
  public set refCount(value: number) {
    this._refCount = value;
  }
  public resetRefCount() {
    this._refCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refCountInput() {
    return this._refCount;
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }

  // tcp_allocated - computed: false, optional: true, required: false
  private _tcpAllocated?: number; 
  public get tcpAllocated() {
    return this.getNumberAttribute('tcp_allocated');
  }
  public set tcpAllocated(value: number) {
    this._tcpAllocated = value;
  }
  public resetTcpAllocated() {
    this._tcpAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAllocatedInput() {
    return this._tcpAllocated;
  }

  // tcp_failed - computed: false, optional: true, required: false
  private _tcpFailed?: number; 
  public get tcpFailed() {
    return this.getNumberAttribute('tcp_failed');
  }
  public set tcpFailed(value: number) {
    this._tcpFailed = value;
  }
  public resetTcpFailed() {
    this._tcpFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFailedInput() {
    return this._tcpFailed;
  }

  // tcp_freed - computed: false, optional: true, required: false
  private _tcpFreed?: number; 
  public get tcpFreed() {
    return this.getNumberAttribute('tcp_freed');
  }
  public set tcpFreed(value: number) {
    this._tcpFreed = value;
  }
  public resetTcpFreed() {
    this._tcpFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFreedInput() {
    return this._tcpFreed;
  }

  // tcp_total - computed: false, optional: true, required: false
  private _tcpTotal?: number; 
  public get tcpTotal() {
    return this.getNumberAttribute('tcp_total');
  }
  public set tcpTotal(value: number) {
    this._tcpTotal = value;
  }
  public resetTcpTotal() {
    this._tcpTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpTotalInput() {
    return this._tcpTotal;
  }

  // udp_allocated - computed: false, optional: true, required: false
  private _udpAllocated?: number; 
  public get udpAllocated() {
    return this.getNumberAttribute('udp_allocated');
  }
  public set udpAllocated(value: number) {
    this._udpAllocated = value;
  }
  public resetUdpAllocated() {
    this._udpAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpAllocatedInput() {
    return this._udpAllocated;
  }

  // udp_failed - computed: false, optional: true, required: false
  private _udpFailed?: number; 
  public get udpFailed() {
    return this.getNumberAttribute('udp_failed');
  }
  public set udpFailed(value: number) {
    this._udpFailed = value;
  }
  public resetUdpFailed() {
    this._udpFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpFailedInput() {
    return this._udpFailed;
  }

  // udp_freed - computed: false, optional: true, required: false
  private _udpFreed?: number; 
  public get udpFreed() {
    return this.getNumberAttribute('udp_freed');
  }
  public set udpFreed(value: number) {
    this._udpFreed = value;
  }
  public resetUdpFreed() {
    this._udpFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpFreedInput() {
    return this._udpFreed;
  }

  // udp_total - computed: false, optional: true, required: false
  private _udpTotal?: number; 
  public get udpTotal() {
    return this.getNumberAttribute('udp_total');
  }
  public set udpTotal(value: number) {
    this._udpTotal = value;
  }
  public resetUdpTotal() {
    this._udpTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpTotalInput() {
    return this._udpTotal;
  }
}
export interface DataThunderCgnv6LoggingSourceAddressOperOper {
  /**
  * source_address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_logging_source_address_oper#source_address_list DataThunderCgnv6LoggingSourceAddressOper#source_address_list}
  */
  readonly sourceAddressList?: DataThunderCgnv6LoggingSourceAddressOperOperSourceAddressListStruct;
}

export function dataThunderCgnv6LoggingSourceAddressOperOperToTerraform(struct?: DataThunderCgnv6LoggingSourceAddressOperOperOutputReference | DataThunderCgnv6LoggingSourceAddressOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_address_list: dataThunderCgnv6LoggingSourceAddressOperOperSourceAddressListStructToTerraform(struct!.sourceAddressList),
  }
}


export function dataThunderCgnv6LoggingSourceAddressOperOperToHclTerraform(struct?: DataThunderCgnv6LoggingSourceAddressOperOperOutputReference | DataThunderCgnv6LoggingSourceAddressOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_address_list: {
      value: dataThunderCgnv6LoggingSourceAddressOperOperSourceAddressListStructToHclTerraform(struct!.sourceAddressList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6LoggingSourceAddressOperOperSourceAddressListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6LoggingSourceAddressOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6LoggingSourceAddressOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceAddressList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddressList = this._sourceAddressList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6LoggingSourceAddressOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceAddressList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceAddressList.internalValue = value.sourceAddressList;
    }
  }

  // source_address_list - computed: false, optional: true, required: false
  private _sourceAddressList = new DataThunderCgnv6LoggingSourceAddressOperOperSourceAddressListStructOutputReference(this, "source_address_list");
  public get sourceAddressList() {
    return this._sourceAddressList;
  }
  public putSourceAddressList(value: DataThunderCgnv6LoggingSourceAddressOperOperSourceAddressListStruct) {
    this._sourceAddressList.internalValue = value;
  }
  public resetSourceAddressList() {
    this._sourceAddressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressListInput() {
    return this._sourceAddressList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_logging_source_address_oper thunder_cgnv6_logging_source_address_oper}
*/
export class DataThunderCgnv6LoggingSourceAddressOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_logging_source_address_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6LoggingSourceAddressOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6LoggingSourceAddressOper to import
  * @param importFromId The id of the existing DataThunderCgnv6LoggingSourceAddressOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_logging_source_address_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6LoggingSourceAddressOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_logging_source_address_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_logging_source_address_oper thunder_cgnv6_logging_source_address_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6LoggingSourceAddressOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6LoggingSourceAddressOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_logging_source_address_oper',
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
  private _oper = new DataThunderCgnv6LoggingSourceAddressOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6LoggingSourceAddressOperOper) {
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
      oper: dataThunderCgnv6LoggingSourceAddressOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderCgnv6LoggingSourceAddressOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6LoggingSourceAddressOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
