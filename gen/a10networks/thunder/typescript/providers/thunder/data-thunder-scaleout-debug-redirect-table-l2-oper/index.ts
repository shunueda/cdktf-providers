// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l2_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderScaleoutDebugRedirectTableL2OperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l2_oper#id DataThunderScaleoutDebugRedirectTableL2Oper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l2_oper#oper DataThunderScaleoutDebugRedirectTableL2Oper#oper}
  */
  readonly oper?: DataThunderScaleoutDebugRedirectTableL2OperOper;
}
export interface DataThunderScaleoutDebugRedirectTableL2OperOperRedirectInfoListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l2_oper#intf_num DataThunderScaleoutDebugRedirectTableL2Oper#intf_num}
  */
  readonly intfNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l2_oper#ip_addr_str DataThunderScaleoutDebugRedirectTableL2Oper#ip_addr_str}
  */
  readonly ipAddrStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l2_oper#mac_str DataThunderScaleoutDebugRedirectTableL2Oper#mac_str}
  */
  readonly macStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l2_oper#node DataThunderScaleoutDebugRedirectTableL2Oper#node}
  */
  readonly nodeAttribute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l2_oper#reachable DataThunderScaleoutDebugRedirectTableL2Oper#reachable}
  */
  readonly reachable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l2_oper#valid DataThunderScaleoutDebugRedirectTableL2Oper#valid}
  */
  readonly valid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l2_oper#vlan DataThunderScaleoutDebugRedirectTableL2Oper#vlan}
  */
  readonly vlan?: number;
}

export function dataThunderScaleoutDebugRedirectTableL2OperOperRedirectInfoListStructToTerraform(struct?: DataThunderScaleoutDebugRedirectTableL2OperOperRedirectInfoListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    intf_num: cdktf.numberToTerraform(struct!.intfNum),
    ip_addr_str: cdktf.stringToTerraform(struct!.ipAddrStr),
    mac_str: cdktf.stringToTerraform(struct!.macStr),
    node: cdktf.numberToTerraform(struct!.nodeAttribute),
    reachable: cdktf.numberToTerraform(struct!.reachable),
    valid: cdktf.numberToTerraform(struct!.valid),
    vlan: cdktf.numberToTerraform(struct!.vlan),
  }
}


export function dataThunderScaleoutDebugRedirectTableL2OperOperRedirectInfoListStructToHclTerraform(struct?: DataThunderScaleoutDebugRedirectTableL2OperOperRedirectInfoListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    intf_num: {
      value: cdktf.numberToHclTerraform(struct!.intfNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_addr_str: {
      value: cdktf.stringToHclTerraform(struct!.ipAddrStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_str: {
      value: cdktf.stringToHclTerraform(struct!.macStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node: {
      value: cdktf.numberToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reachable: {
      value: cdktf.numberToHclTerraform(struct!.reachable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    valid: {
      value: cdktf.numberToHclTerraform(struct!.valid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutDebugRedirectTableL2OperOperRedirectInfoListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScaleoutDebugRedirectTableL2OperOperRedirectInfoListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intfNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.intfNum = this._intfNum;
    }
    if (this._ipAddrStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddrStr = this._ipAddrStr;
    }
    if (this._macStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.macStr = this._macStr;
    }
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    if (this._reachable !== undefined) {
      hasAnyValues = true;
      internalValueResult.reachable = this._reachable;
    }
    if (this._valid !== undefined) {
      hasAnyValues = true;
      internalValueResult.valid = this._valid;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutDebugRedirectTableL2OperOperRedirectInfoListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._intfNum = undefined;
      this._ipAddrStr = undefined;
      this._macStr = undefined;
      this._node = undefined;
      this._reachable = undefined;
      this._valid = undefined;
      this._vlan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._intfNum = value.intfNum;
      this._ipAddrStr = value.ipAddrStr;
      this._macStr = value.macStr;
      this._node = value.nodeAttribute;
      this._reachable = value.reachable;
      this._valid = value.valid;
      this._vlan = value.vlan;
    }
  }

  // intf_num - computed: false, optional: true, required: false
  private _intfNum?: number; 
  public get intfNum() {
    return this.getNumberAttribute('intf_num');
  }
  public set intfNum(value: number) {
    this._intfNum = value;
  }
  public resetIntfNum() {
    this._intfNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfNumInput() {
    return this._intfNum;
  }

  // ip_addr_str - computed: false, optional: true, required: false
  private _ipAddrStr?: string; 
  public get ipAddrStr() {
    return this.getStringAttribute('ip_addr_str');
  }
  public set ipAddrStr(value: string) {
    this._ipAddrStr = value;
  }
  public resetIpAddrStr() {
    this._ipAddrStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrStrInput() {
    return this._ipAddrStr;
  }

  // mac_str - computed: false, optional: true, required: false
  private _macStr?: string; 
  public get macStr() {
    return this.getStringAttribute('mac_str');
  }
  public set macStr(value: string) {
    this._macStr = value;
  }
  public resetMacStr() {
    this._macStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macStrInput() {
    return this._macStr;
  }

  // node - computed: false, optional: true, required: false
  private _node?: number; 
  public get nodeAttribute() {
    return this.getNumberAttribute('node');
  }
  public set nodeAttribute(value: number) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // reachable - computed: false, optional: true, required: false
  private _reachable?: number; 
  public get reachable() {
    return this.getNumberAttribute('reachable');
  }
  public set reachable(value: number) {
    this._reachable = value;
  }
  public resetReachable() {
    this._reachable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachableInput() {
    return this._reachable;
  }

  // valid - computed: false, optional: true, required: false
  private _valid?: number; 
  public get valid() {
    return this.getNumberAttribute('valid');
  }
  public set valid(value: number) {
    this._valid = value;
  }
  public resetValid() {
    this._valid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validInput() {
    return this._valid;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }
}

export class DataThunderScaleoutDebugRedirectTableL2OperOperRedirectInfoListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScaleoutDebugRedirectTableL2OperOperRedirectInfoListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScaleoutDebugRedirectTableL2OperOperRedirectInfoListStructOutputReference {
    return new DataThunderScaleoutDebugRedirectTableL2OperOperRedirectInfoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScaleoutDebugRedirectTableL2OperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l2_oper#ethernet DataThunderScaleoutDebugRedirectTableL2Oper#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l2_oper#link_status DataThunderScaleoutDebugRedirectTableL2Oper#link_status}
  */
  readonly linkStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l2_oper#trunk DataThunderScaleoutDebugRedirectTableL2Oper#trunk}
  */
  readonly trunk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l2_oper#ve DataThunderScaleoutDebugRedirectTableL2Oper#ve}
  */
  readonly ve?: number;
  /**
  * redirect_info_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l2_oper#redirect_info_list DataThunderScaleoutDebugRedirectTableL2Oper#redirect_info_list}
  */
  readonly redirectInfoList?: DataThunderScaleoutDebugRedirectTableL2OperOperRedirectInfoListStruct[] | cdktf.IResolvable;
}

export function dataThunderScaleoutDebugRedirectTableL2OperOperToTerraform(struct?: DataThunderScaleoutDebugRedirectTableL2OperOperOutputReference | DataThunderScaleoutDebugRedirectTableL2OperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
    link_status: cdktf.numberToTerraform(struct!.linkStatus),
    trunk: cdktf.numberToTerraform(struct!.trunk),
    ve: cdktf.numberToTerraform(struct!.ve),
    redirect_info_list: cdktf.listMapper(dataThunderScaleoutDebugRedirectTableL2OperOperRedirectInfoListStructToTerraform, true)(struct!.redirectInfoList),
  }
}


export function dataThunderScaleoutDebugRedirectTableL2OperOperToHclTerraform(struct?: DataThunderScaleoutDebugRedirectTableL2OperOperOutputReference | DataThunderScaleoutDebugRedirectTableL2OperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ethernet: {
      value: cdktf.numberToHclTerraform(struct!.ethernet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_status: {
      value: cdktf.numberToHclTerraform(struct!.linkStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trunk: {
      value: cdktf.numberToHclTerraform(struct!.trunk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ve: {
      value: cdktf.numberToHclTerraform(struct!.ve),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    redirect_info_list: {
      value: cdktf.listMapperHcl(dataThunderScaleoutDebugRedirectTableL2OperOperRedirectInfoListStructToHclTerraform, true)(struct!.redirectInfoList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScaleoutDebugRedirectTableL2OperOperRedirectInfoListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutDebugRedirectTableL2OperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderScaleoutDebugRedirectTableL2OperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernet = this._ethernet;
    }
    if (this._linkStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkStatus = this._linkStatus;
    }
    if (this._trunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunk = this._trunk;
    }
    if (this._ve !== undefined) {
      hasAnyValues = true;
      internalValueResult.ve = this._ve;
    }
    if (this._redirectInfoList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectInfoList = this._redirectInfoList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutDebugRedirectTableL2OperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ethernet = undefined;
      this._linkStatus = undefined;
      this._trunk = undefined;
      this._ve = undefined;
      this._redirectInfoList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ethernet = value.ethernet;
      this._linkStatus = value.linkStatus;
      this._trunk = value.trunk;
      this._ve = value.ve;
      this._redirectInfoList.internalValue = value.redirectInfoList;
    }
  }

  // ethernet - computed: false, optional: true, required: false
  private _ethernet?: number; 
  public get ethernet() {
    return this.getNumberAttribute('ethernet');
  }
  public set ethernet(value: number) {
    this._ethernet = value;
  }
  public resetEthernet() {
    this._ethernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInput() {
    return this._ethernet;
  }

  // link_status - computed: false, optional: true, required: false
  private _linkStatus?: number; 
  public get linkStatus() {
    return this.getNumberAttribute('link_status');
  }
  public set linkStatus(value: number) {
    this._linkStatus = value;
  }
  public resetLinkStatus() {
    this._linkStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkStatusInput() {
    return this._linkStatus;
  }

  // trunk - computed: false, optional: true, required: false
  private _trunk?: number; 
  public get trunk() {
    return this.getNumberAttribute('trunk');
  }
  public set trunk(value: number) {
    this._trunk = value;
  }
  public resetTrunk() {
    this._trunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkInput() {
    return this._trunk;
  }

  // ve - computed: false, optional: true, required: false
  private _ve?: number; 
  public get ve() {
    return this.getNumberAttribute('ve');
  }
  public set ve(value: number) {
    this._ve = value;
  }
  public resetVe() {
    this._ve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veInput() {
    return this._ve;
  }

  // redirect_info_list - computed: false, optional: true, required: false
  private _redirectInfoList = new DataThunderScaleoutDebugRedirectTableL2OperOperRedirectInfoListStructList(this, "redirect_info_list", false);
  public get redirectInfoList() {
    return this._redirectInfoList;
  }
  public putRedirectInfoList(value: DataThunderScaleoutDebugRedirectTableL2OperOperRedirectInfoListStruct[] | cdktf.IResolvable) {
    this._redirectInfoList.internalValue = value;
  }
  public resetRedirectInfoList() {
    this._redirectInfoList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInfoListInput() {
    return this._redirectInfoList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l2_oper thunder_scaleout_debug_redirect_table_l2_oper}
*/
export class DataThunderScaleoutDebugRedirectTableL2Oper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_scaleout_debug_redirect_table_l2_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderScaleoutDebugRedirectTableL2Oper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderScaleoutDebugRedirectTableL2Oper to import
  * @param importFromId The id of the existing DataThunderScaleoutDebugRedirectTableL2Oper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l2_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderScaleoutDebugRedirectTableL2Oper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_scaleout_debug_redirect_table_l2_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_redirect_table_l2_oper thunder_scaleout_debug_redirect_table_l2_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderScaleoutDebugRedirectTableL2OperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderScaleoutDebugRedirectTableL2OperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_scaleout_debug_redirect_table_l2_oper',
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
  private _oper = new DataThunderScaleoutDebugRedirectTableL2OperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderScaleoutDebugRedirectTableL2OperOper) {
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
      oper: dataThunderScaleoutDebugRedirectTableL2OperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderScaleoutDebugRedirectTableL2OperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderScaleoutDebugRedirectTableL2OperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
