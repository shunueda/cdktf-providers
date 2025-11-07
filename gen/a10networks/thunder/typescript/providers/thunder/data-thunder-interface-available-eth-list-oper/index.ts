// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_available_eth_list_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderInterfaceAvailableEthListOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_available_eth_list_oper#id DataThunderInterfaceAvailableEthListOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_available_eth_list_oper#oper DataThunderInterfaceAvailableEthListOper#oper}
  */
  readonly oper?: DataThunderInterfaceAvailableEthListOperOper;
}
export interface DataThunderInterfaceAvailableEthListOperOperIfListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_available_eth_list_oper#if_num DataThunderInterfaceAvailableEthListOper#if_num}
  */
  readonly ifNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_available_eth_list_oper#if_status DataThunderInterfaceAvailableEthListOper#if_status}
  */
  readonly ifStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_available_eth_list_oper#if_type DataThunderInterfaceAvailableEthListOper#if_type}
  */
  readonly ifType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_available_eth_list_oper#state DataThunderInterfaceAvailableEthListOper#state}
  */
  readonly state?: string;
}

export function dataThunderInterfaceAvailableEthListOperOperIfListStructToTerraform(struct?: DataThunderInterfaceAvailableEthListOperOperIfListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    if_num: cdktf.numberToTerraform(struct!.ifNum),
    if_status: cdktf.stringToTerraform(struct!.ifStatus),
    if_type: cdktf.stringToTerraform(struct!.ifType),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function dataThunderInterfaceAvailableEthListOperOperIfListStructToHclTerraform(struct?: DataThunderInterfaceAvailableEthListOperOperIfListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    if_num: {
      value: cdktf.numberToHclTerraform(struct!.ifNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    if_status: {
      value: cdktf.stringToHclTerraform(struct!.ifStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    if_type: {
      value: cdktf.stringToHclTerraform(struct!.ifType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderInterfaceAvailableEthListOperOperIfListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderInterfaceAvailableEthListOperOperIfListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ifNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifNum = this._ifNum;
    }
    if (this._ifStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifStatus = this._ifStatus;
    }
    if (this._ifType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifType = this._ifType;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderInterfaceAvailableEthListOperOperIfListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ifNum = undefined;
      this._ifStatus = undefined;
      this._ifType = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ifNum = value.ifNum;
      this._ifStatus = value.ifStatus;
      this._ifType = value.ifType;
      this._state = value.state;
    }
  }

  // if_num - computed: false, optional: true, required: false
  private _ifNum?: number; 
  public get ifNum() {
    return this.getNumberAttribute('if_num');
  }
  public set ifNum(value: number) {
    this._ifNum = value;
  }
  public resetIfNum() {
    this._ifNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifNumInput() {
    return this._ifNum;
  }

  // if_status - computed: false, optional: true, required: false
  private _ifStatus?: string; 
  public get ifStatus() {
    return this.getStringAttribute('if_status');
  }
  public set ifStatus(value: string) {
    this._ifStatus = value;
  }
  public resetIfStatus() {
    this._ifStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifStatusInput() {
    return this._ifStatus;
  }

  // if_type - computed: false, optional: true, required: false
  private _ifType?: string; 
  public get ifType() {
    return this.getStringAttribute('if_type');
  }
  public set ifType(value: string) {
    this._ifType = value;
  }
  public resetIfType() {
    this._ifType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifTypeInput() {
    return this._ifType;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class DataThunderInterfaceAvailableEthListOperOperIfListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderInterfaceAvailableEthListOperOperIfListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderInterfaceAvailableEthListOperOperIfListStructOutputReference {
    return new DataThunderInterfaceAvailableEthListOperOperIfListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderInterfaceAvailableEthListOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_available_eth_list_oper#tot_num_of_ports DataThunderInterfaceAvailableEthListOper#tot_num_of_ports}
  */
  readonly totNumOfPorts?: number;
  /**
  * if_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_available_eth_list_oper#if_list DataThunderInterfaceAvailableEthListOper#if_list}
  */
  readonly ifList?: DataThunderInterfaceAvailableEthListOperOperIfListStruct[] | cdktf.IResolvable;
}

export function dataThunderInterfaceAvailableEthListOperOperToTerraform(struct?: DataThunderInterfaceAvailableEthListOperOperOutputReference | DataThunderInterfaceAvailableEthListOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tot_num_of_ports: cdktf.numberToTerraform(struct!.totNumOfPorts),
    if_list: cdktf.listMapper(dataThunderInterfaceAvailableEthListOperOperIfListStructToTerraform, true)(struct!.ifList),
  }
}


export function dataThunderInterfaceAvailableEthListOperOperToHclTerraform(struct?: DataThunderInterfaceAvailableEthListOperOperOutputReference | DataThunderInterfaceAvailableEthListOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tot_num_of_ports: {
      value: cdktf.numberToHclTerraform(struct!.totNumOfPorts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    if_list: {
      value: cdktf.listMapperHcl(dataThunderInterfaceAvailableEthListOperOperIfListStructToHclTerraform, true)(struct!.ifList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderInterfaceAvailableEthListOperOperIfListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderInterfaceAvailableEthListOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderInterfaceAvailableEthListOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._totNumOfPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.totNumOfPorts = this._totNumOfPorts;
    }
    if (this._ifList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifList = this._ifList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderInterfaceAvailableEthListOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._totNumOfPorts = undefined;
      this._ifList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._totNumOfPorts = value.totNumOfPorts;
      this._ifList.internalValue = value.ifList;
    }
  }

  // tot_num_of_ports - computed: false, optional: true, required: false
  private _totNumOfPorts?: number; 
  public get totNumOfPorts() {
    return this.getNumberAttribute('tot_num_of_ports');
  }
  public set totNumOfPorts(value: number) {
    this._totNumOfPorts = value;
  }
  public resetTotNumOfPorts() {
    this._totNumOfPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totNumOfPortsInput() {
    return this._totNumOfPorts;
  }

  // if_list - computed: false, optional: true, required: false
  private _ifList = new DataThunderInterfaceAvailableEthListOperOperIfListStructList(this, "if_list", false);
  public get ifList() {
    return this._ifList;
  }
  public putIfList(value: DataThunderInterfaceAvailableEthListOperOperIfListStruct[] | cdktf.IResolvable) {
    this._ifList.internalValue = value;
  }
  public resetIfList() {
    this._ifList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifListInput() {
    return this._ifList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_available_eth_list_oper thunder_interface_available_eth_list_oper}
*/
export class DataThunderInterfaceAvailableEthListOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_interface_available_eth_list_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderInterfaceAvailableEthListOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderInterfaceAvailableEthListOper to import
  * @param importFromId The id of the existing DataThunderInterfaceAvailableEthListOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_available_eth_list_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderInterfaceAvailableEthListOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_interface_available_eth_list_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_available_eth_list_oper thunder_interface_available_eth_list_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderInterfaceAvailableEthListOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderInterfaceAvailableEthListOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_interface_available_eth_list_oper',
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
  private _oper = new DataThunderInterfaceAvailableEthListOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderInterfaceAvailableEthListOperOper) {
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
      oper: dataThunderInterfaceAvailableEthListOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderInterfaceAvailableEthListOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderInterfaceAvailableEthListOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
