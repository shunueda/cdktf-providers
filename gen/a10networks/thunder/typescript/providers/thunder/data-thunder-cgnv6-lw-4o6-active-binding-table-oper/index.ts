// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lw_4o6_active_binding_table_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6Lw4O6ActiveBindingTableOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lw_4o6_active_binding_table_oper#id DataThunderCgnv6Lw4O6ActiveBindingTableOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lw_4o6_active_binding_table_oper#oper DataThunderCgnv6Lw4O6ActiveBindingTableOper#oper}
  */
  readonly oper?: DataThunderCgnv6Lw4O6ActiveBindingTableOperOper;
}
export interface DataThunderCgnv6Lw4O6ActiveBindingTableOperOperEntryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lw_4o6_active_binding_table_oper#aftr_tunnel_address DataThunderCgnv6Lw4O6ActiveBindingTableOper#aftr_tunnel_address}
  */
  readonly aftrTunnelAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lw_4o6_active_binding_table_oper#fwd_match_count DataThunderCgnv6Lw4O6ActiveBindingTableOper#fwd_match_count}
  */
  readonly fwdMatchCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lw_4o6_active_binding_table_oper#nat_address DataThunderCgnv6Lw4O6ActiveBindingTableOper#nat_address}
  */
  readonly natAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lw_4o6_active_binding_table_oper#port_end DataThunderCgnv6Lw4O6ActiveBindingTableOper#port_end}
  */
  readonly portEnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lw_4o6_active_binding_table_oper#port_start DataThunderCgnv6Lw4O6ActiveBindingTableOper#port_start}
  */
  readonly portStart?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lw_4o6_active_binding_table_oper#rev_match_count DataThunderCgnv6Lw4O6ActiveBindingTableOper#rev_match_count}
  */
  readonly revMatchCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lw_4o6_active_binding_table_oper#tunnel_address DataThunderCgnv6Lw4O6ActiveBindingTableOper#tunnel_address}
  */
  readonly tunnelAddress?: string;
}

export function dataThunderCgnv6Lw4O6ActiveBindingTableOperOperEntryListStructToTerraform(struct?: DataThunderCgnv6Lw4O6ActiveBindingTableOperOperEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aftr_tunnel_address: cdktf.stringToTerraform(struct!.aftrTunnelAddress),
    fwd_match_count: cdktf.numberToTerraform(struct!.fwdMatchCount),
    nat_address: cdktf.stringToTerraform(struct!.natAddress),
    port_end: cdktf.numberToTerraform(struct!.portEnd),
    port_start: cdktf.numberToTerraform(struct!.portStart),
    rev_match_count: cdktf.numberToTerraform(struct!.revMatchCount),
    tunnel_address: cdktf.stringToTerraform(struct!.tunnelAddress),
  }
}


export function dataThunderCgnv6Lw4O6ActiveBindingTableOperOperEntryListStructToHclTerraform(struct?: DataThunderCgnv6Lw4O6ActiveBindingTableOperOperEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aftr_tunnel_address: {
      value: cdktf.stringToHclTerraform(struct!.aftrTunnelAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fwd_match_count: {
      value: cdktf.numberToHclTerraform(struct!.fwdMatchCount),
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
    port_end: {
      value: cdktf.numberToHclTerraform(struct!.portEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_start: {
      value: cdktf.numberToHclTerraform(struct!.portStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rev_match_count: {
      value: cdktf.numberToHclTerraform(struct!.revMatchCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tunnel_address: {
      value: cdktf.stringToHclTerraform(struct!.tunnelAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6Lw4O6ActiveBindingTableOperOperEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6Lw4O6ActiveBindingTableOperOperEntryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aftrTunnelAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.aftrTunnelAddress = this._aftrTunnelAddress;
    }
    if (this._fwdMatchCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdMatchCount = this._fwdMatchCount;
    }
    if (this._natAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.natAddress = this._natAddress;
    }
    if (this._portEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.portEnd = this._portEnd;
    }
    if (this._portStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.portStart = this._portStart;
    }
    if (this._revMatchCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.revMatchCount = this._revMatchCount;
    }
    if (this._tunnelAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelAddress = this._tunnelAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6Lw4O6ActiveBindingTableOperOperEntryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aftrTunnelAddress = undefined;
      this._fwdMatchCount = undefined;
      this._natAddress = undefined;
      this._portEnd = undefined;
      this._portStart = undefined;
      this._revMatchCount = undefined;
      this._tunnelAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aftrTunnelAddress = value.aftrTunnelAddress;
      this._fwdMatchCount = value.fwdMatchCount;
      this._natAddress = value.natAddress;
      this._portEnd = value.portEnd;
      this._portStart = value.portStart;
      this._revMatchCount = value.revMatchCount;
      this._tunnelAddress = value.tunnelAddress;
    }
  }

  // aftr_tunnel_address - computed: false, optional: true, required: false
  private _aftrTunnelAddress?: string; 
  public get aftrTunnelAddress() {
    return this.getStringAttribute('aftr_tunnel_address');
  }
  public set aftrTunnelAddress(value: string) {
    this._aftrTunnelAddress = value;
  }
  public resetAftrTunnelAddress() {
    this._aftrTunnelAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aftrTunnelAddressInput() {
    return this._aftrTunnelAddress;
  }

  // fwd_match_count - computed: false, optional: true, required: false
  private _fwdMatchCount?: number; 
  public get fwdMatchCount() {
    return this.getNumberAttribute('fwd_match_count');
  }
  public set fwdMatchCount(value: number) {
    this._fwdMatchCount = value;
  }
  public resetFwdMatchCount() {
    this._fwdMatchCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdMatchCountInput() {
    return this._fwdMatchCount;
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

  // port_end - computed: false, optional: true, required: false
  private _portEnd?: number; 
  public get portEnd() {
    return this.getNumberAttribute('port_end');
  }
  public set portEnd(value: number) {
    this._portEnd = value;
  }
  public resetPortEnd() {
    this._portEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portEndInput() {
    return this._portEnd;
  }

  // port_start - computed: false, optional: true, required: false
  private _portStart?: number; 
  public get portStart() {
    return this.getNumberAttribute('port_start');
  }
  public set portStart(value: number) {
    this._portStart = value;
  }
  public resetPortStart() {
    this._portStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portStartInput() {
    return this._portStart;
  }

  // rev_match_count - computed: false, optional: true, required: false
  private _revMatchCount?: number; 
  public get revMatchCount() {
    return this.getNumberAttribute('rev_match_count');
  }
  public set revMatchCount(value: number) {
    this._revMatchCount = value;
  }
  public resetRevMatchCount() {
    this._revMatchCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revMatchCountInput() {
    return this._revMatchCount;
  }

  // tunnel_address - computed: false, optional: true, required: false
  private _tunnelAddress?: string; 
  public get tunnelAddress() {
    return this.getStringAttribute('tunnel_address');
  }
  public set tunnelAddress(value: string) {
    this._tunnelAddress = value;
  }
  public resetTunnelAddress() {
    this._tunnelAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelAddressInput() {
    return this._tunnelAddress;
  }
}

export class DataThunderCgnv6Lw4O6ActiveBindingTableOperOperEntryListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6Lw4O6ActiveBindingTableOperOperEntryListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6Lw4O6ActiveBindingTableOperOperEntryListStructOutputReference {
    return new DataThunderCgnv6Lw4O6ActiveBindingTableOperOperEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6Lw4O6ActiveBindingTableOperOper {
  /**
  * entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lw_4o6_active_binding_table_oper#entry_list DataThunderCgnv6Lw4O6ActiveBindingTableOper#entry_list}
  */
  readonly entryList?: DataThunderCgnv6Lw4O6ActiveBindingTableOperOperEntryListStruct[] | cdktf.IResolvable;
}

export function dataThunderCgnv6Lw4O6ActiveBindingTableOperOperToTerraform(struct?: DataThunderCgnv6Lw4O6ActiveBindingTableOperOperOutputReference | DataThunderCgnv6Lw4O6ActiveBindingTableOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_list: cdktf.listMapper(dataThunderCgnv6Lw4O6ActiveBindingTableOperOperEntryListStructToTerraform, true)(struct!.entryList),
  }
}


export function dataThunderCgnv6Lw4O6ActiveBindingTableOperOperToHclTerraform(struct?: DataThunderCgnv6Lw4O6ActiveBindingTableOperOperOutputReference | DataThunderCgnv6Lw4O6ActiveBindingTableOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry_list: {
      value: cdktf.listMapperHcl(dataThunderCgnv6Lw4O6ActiveBindingTableOperOperEntryListStructToHclTerraform, true)(struct!.entryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6Lw4O6ActiveBindingTableOperOperEntryListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6Lw4O6ActiveBindingTableOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6Lw4O6ActiveBindingTableOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryList = this._entryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6Lw4O6ActiveBindingTableOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entryList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entryList.internalValue = value.entryList;
    }
  }

  // entry_list - computed: false, optional: true, required: false
  private _entryList = new DataThunderCgnv6Lw4O6ActiveBindingTableOperOperEntryListStructList(this, "entry_list", false);
  public get entryList() {
    return this._entryList;
  }
  public putEntryList(value: DataThunderCgnv6Lw4O6ActiveBindingTableOperOperEntryListStruct[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lw_4o6_active_binding_table_oper thunder_cgnv6_lw_4o6_active_binding_table_oper}
*/
export class DataThunderCgnv6Lw4O6ActiveBindingTableOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_lw_4o6_active_binding_table_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6Lw4O6ActiveBindingTableOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6Lw4O6ActiveBindingTableOper to import
  * @param importFromId The id of the existing DataThunderCgnv6Lw4O6ActiveBindingTableOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lw_4o6_active_binding_table_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6Lw4O6ActiveBindingTableOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_lw_4o6_active_binding_table_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lw_4o6_active_binding_table_oper thunder_cgnv6_lw_4o6_active_binding_table_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6Lw4O6ActiveBindingTableOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6Lw4O6ActiveBindingTableOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_lw_4o6_active_binding_table_oper',
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
  private _oper = new DataThunderCgnv6Lw4O6ActiveBindingTableOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6Lw4O6ActiveBindingTableOperOper) {
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
      oper: dataThunderCgnv6Lw4O6ActiveBindingTableOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderCgnv6Lw4O6ActiveBindingTableOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6Lw4O6ActiveBindingTableOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
