// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_port_reservation_entries_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6DsLitePortReservationEntriesOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_port_reservation_entries_oper#id DataThunderCgnv6DsLitePortReservationEntriesOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_port_reservation_entries_oper#oper DataThunderCgnv6DsLitePortReservationEntriesOper#oper}
  */
  readonly oper?: DataThunderCgnv6DsLitePortReservationEntriesOperOper;
}
export interface DataThunderCgnv6DsLitePortReservationEntriesOperOperEntryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_port_reservation_entries_oper#inside_address DataThunderCgnv6DsLitePortReservationEntriesOper#inside_address}
  */
  readonly insideAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_port_reservation_entries_oper#inside_end_port DataThunderCgnv6DsLitePortReservationEntriesOper#inside_end_port}
  */
  readonly insideEndPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_port_reservation_entries_oper#inside_start_port DataThunderCgnv6DsLitePortReservationEntriesOper#inside_start_port}
  */
  readonly insideStartPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_port_reservation_entries_oper#nat_address DataThunderCgnv6DsLitePortReservationEntriesOper#nat_address}
  */
  readonly natAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_port_reservation_entries_oper#nat_end_port DataThunderCgnv6DsLitePortReservationEntriesOper#nat_end_port}
  */
  readonly natEndPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_port_reservation_entries_oper#nat_start_port DataThunderCgnv6DsLitePortReservationEntriesOper#nat_start_port}
  */
  readonly natStartPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_port_reservation_entries_oper#tunnel_dest_address DataThunderCgnv6DsLitePortReservationEntriesOper#tunnel_dest_address}
  */
  readonly tunnelDestAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_port_reservation_entries_oper#tunnel_src_address DataThunderCgnv6DsLitePortReservationEntriesOper#tunnel_src_address}
  */
  readonly tunnelSrcAddress?: string;
}

export function dataThunderCgnv6DsLitePortReservationEntriesOperOperEntryListStructToTerraform(struct?: DataThunderCgnv6DsLitePortReservationEntriesOperOperEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside_address: cdktf.stringToTerraform(struct!.insideAddress),
    inside_end_port: cdktf.numberToTerraform(struct!.insideEndPort),
    inside_start_port: cdktf.numberToTerraform(struct!.insideStartPort),
    nat_address: cdktf.stringToTerraform(struct!.natAddress),
    nat_end_port: cdktf.numberToTerraform(struct!.natEndPort),
    nat_start_port: cdktf.numberToTerraform(struct!.natStartPort),
    tunnel_dest_address: cdktf.stringToTerraform(struct!.tunnelDestAddress),
    tunnel_src_address: cdktf.stringToTerraform(struct!.tunnelSrcAddress),
  }
}


export function dataThunderCgnv6DsLitePortReservationEntriesOperOperEntryListStructToHclTerraform(struct?: DataThunderCgnv6DsLitePortReservationEntriesOperOperEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inside_address: {
      value: cdktf.stringToHclTerraform(struct!.insideAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside_end_port: {
      value: cdktf.numberToHclTerraform(struct!.insideEndPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inside_start_port: {
      value: cdktf.numberToHclTerraform(struct!.insideStartPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_address: {
      value: cdktf.stringToHclTerraform(struct!.natAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_end_port: {
      value: cdktf.numberToHclTerraform(struct!.natEndPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_start_port: {
      value: cdktf.numberToHclTerraform(struct!.natStartPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tunnel_dest_address: {
      value: cdktf.stringToHclTerraform(struct!.tunnelDestAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_src_address: {
      value: cdktf.stringToHclTerraform(struct!.tunnelSrcAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6DsLitePortReservationEntriesOperOperEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6DsLitePortReservationEntriesOperOperEntryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insideAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideAddress = this._insideAddress;
    }
    if (this._insideEndPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideEndPort = this._insideEndPort;
    }
    if (this._insideStartPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideStartPort = this._insideStartPort;
    }
    if (this._natAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.natAddress = this._natAddress;
    }
    if (this._natEndPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.natEndPort = this._natEndPort;
    }
    if (this._natStartPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.natStartPort = this._natStartPort;
    }
    if (this._tunnelDestAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelDestAddress = this._tunnelDestAddress;
    }
    if (this._tunnelSrcAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelSrcAddress = this._tunnelSrcAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6DsLitePortReservationEntriesOperOperEntryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insideAddress = undefined;
      this._insideEndPort = undefined;
      this._insideStartPort = undefined;
      this._natAddress = undefined;
      this._natEndPort = undefined;
      this._natStartPort = undefined;
      this._tunnelDestAddress = undefined;
      this._tunnelSrcAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insideAddress = value.insideAddress;
      this._insideEndPort = value.insideEndPort;
      this._insideStartPort = value.insideStartPort;
      this._natAddress = value.natAddress;
      this._natEndPort = value.natEndPort;
      this._natStartPort = value.natStartPort;
      this._tunnelDestAddress = value.tunnelDestAddress;
      this._tunnelSrcAddress = value.tunnelSrcAddress;
    }
  }

  // inside_address - computed: false, optional: true, required: false
  private _insideAddress?: string; 
  public get insideAddress() {
    return this.getStringAttribute('inside_address');
  }
  public set insideAddress(value: string) {
    this._insideAddress = value;
  }
  public resetInsideAddress() {
    this._insideAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideAddressInput() {
    return this._insideAddress;
  }

  // inside_end_port - computed: false, optional: true, required: false
  private _insideEndPort?: number; 
  public get insideEndPort() {
    return this.getNumberAttribute('inside_end_port');
  }
  public set insideEndPort(value: number) {
    this._insideEndPort = value;
  }
  public resetInsideEndPort() {
    this._insideEndPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideEndPortInput() {
    return this._insideEndPort;
  }

  // inside_start_port - computed: false, optional: true, required: false
  private _insideStartPort?: number; 
  public get insideStartPort() {
    return this.getNumberAttribute('inside_start_port');
  }
  public set insideStartPort(value: number) {
    this._insideStartPort = value;
  }
  public resetInsideStartPort() {
    this._insideStartPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideStartPortInput() {
    return this._insideStartPort;
  }

  // nat_address - computed: false, optional: true, required: false
  private _natAddress?: string; 
  public get natAddress() {
    return this.getStringAttribute('nat_address');
  }
  public set natAddress(value: string) {
    this._natAddress = value;
  }
  public resetNatAddress() {
    this._natAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natAddressInput() {
    return this._natAddress;
  }

  // nat_end_port - computed: false, optional: true, required: false
  private _natEndPort?: number; 
  public get natEndPort() {
    return this.getNumberAttribute('nat_end_port');
  }
  public set natEndPort(value: number) {
    this._natEndPort = value;
  }
  public resetNatEndPort() {
    this._natEndPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natEndPortInput() {
    return this._natEndPort;
  }

  // nat_start_port - computed: false, optional: true, required: false
  private _natStartPort?: number; 
  public get natStartPort() {
    return this.getNumberAttribute('nat_start_port');
  }
  public set natStartPort(value: number) {
    this._natStartPort = value;
  }
  public resetNatStartPort() {
    this._natStartPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natStartPortInput() {
    return this._natStartPort;
  }

  // tunnel_dest_address - computed: false, optional: true, required: false
  private _tunnelDestAddress?: string; 
  public get tunnelDestAddress() {
    return this.getStringAttribute('tunnel_dest_address');
  }
  public set tunnelDestAddress(value: string) {
    this._tunnelDestAddress = value;
  }
  public resetTunnelDestAddress() {
    this._tunnelDestAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelDestAddressInput() {
    return this._tunnelDestAddress;
  }

  // tunnel_src_address - computed: false, optional: true, required: false
  private _tunnelSrcAddress?: string; 
  public get tunnelSrcAddress() {
    return this.getStringAttribute('tunnel_src_address');
  }
  public set tunnelSrcAddress(value: string) {
    this._tunnelSrcAddress = value;
  }
  public resetTunnelSrcAddress() {
    this._tunnelSrcAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelSrcAddressInput() {
    return this._tunnelSrcAddress;
  }
}

export class DataThunderCgnv6DsLitePortReservationEntriesOperOperEntryListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6DsLitePortReservationEntriesOperOperEntryListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6DsLitePortReservationEntriesOperOperEntryListStructOutputReference {
    return new DataThunderCgnv6DsLitePortReservationEntriesOperOperEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6DsLitePortReservationEntriesOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_port_reservation_entries_oper#entry_count DataThunderCgnv6DsLitePortReservationEntriesOper#entry_count}
  */
  readonly entryCount?: number;
  /**
  * entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_port_reservation_entries_oper#entry_list DataThunderCgnv6DsLitePortReservationEntriesOper#entry_list}
  */
  readonly entryList?: DataThunderCgnv6DsLitePortReservationEntriesOperOperEntryListStruct[] | cdktf.IResolvable;
}

export function dataThunderCgnv6DsLitePortReservationEntriesOperOperToTerraform(struct?: DataThunderCgnv6DsLitePortReservationEntriesOperOperOutputReference | DataThunderCgnv6DsLitePortReservationEntriesOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_count: cdktf.numberToTerraform(struct!.entryCount),
    entry_list: cdktf.listMapper(dataThunderCgnv6DsLitePortReservationEntriesOperOperEntryListStructToTerraform, true)(struct!.entryList),
  }
}


export function dataThunderCgnv6DsLitePortReservationEntriesOperOperToHclTerraform(struct?: DataThunderCgnv6DsLitePortReservationEntriesOperOperOutputReference | DataThunderCgnv6DsLitePortReservationEntriesOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry_count: {
      value: cdktf.numberToHclTerraform(struct!.entryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_list: {
      value: cdktf.listMapperHcl(dataThunderCgnv6DsLitePortReservationEntriesOperOperEntryListStructToHclTerraform, true)(struct!.entryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6DsLitePortReservationEntriesOperOperEntryListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6DsLitePortReservationEntriesOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6DsLitePortReservationEntriesOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryCount = this._entryCount;
    }
    if (this._entryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryList = this._entryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6DsLitePortReservationEntriesOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entryCount = undefined;
      this._entryList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entryCount = value.entryCount;
      this._entryList.internalValue = value.entryList;
    }
  }

  // entry_count - computed: false, optional: true, required: false
  private _entryCount?: number; 
  public get entryCount() {
    return this.getNumberAttribute('entry_count');
  }
  public set entryCount(value: number) {
    this._entryCount = value;
  }
  public resetEntryCount() {
    this._entryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryCountInput() {
    return this._entryCount;
  }

  // entry_list - computed: false, optional: true, required: false
  private _entryList = new DataThunderCgnv6DsLitePortReservationEntriesOperOperEntryListStructList(this, "entry_list", false);
  public get entryList() {
    return this._entryList;
  }
  public putEntryList(value: DataThunderCgnv6DsLitePortReservationEntriesOperOperEntryListStruct[] | cdktf.IResolvable) {
    this._entryList.internalValue = value;
  }
  public resetEntryList() {
    this._entryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryListInput() {
    return this._entryList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_port_reservation_entries_oper thunder_cgnv6_ds_lite_port_reservation_entries_oper}
*/
export class DataThunderCgnv6DsLitePortReservationEntriesOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_ds_lite_port_reservation_entries_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6DsLitePortReservationEntriesOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6DsLitePortReservationEntriesOper to import
  * @param importFromId The id of the existing DataThunderCgnv6DsLitePortReservationEntriesOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_port_reservation_entries_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6DsLitePortReservationEntriesOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_ds_lite_port_reservation_entries_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_port_reservation_entries_oper thunder_cgnv6_ds_lite_port_reservation_entries_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6DsLitePortReservationEntriesOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6DsLitePortReservationEntriesOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_ds_lite_port_reservation_entries_oper',
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
  private _oper = new DataThunderCgnv6DsLitePortReservationEntriesOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6DsLitePortReservationEntriesOperOper) {
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
      oper: dataThunderCgnv6DsLitePortReservationEntriesOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderCgnv6DsLitePortReservationEntriesOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6DsLitePortReservationEntriesOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
