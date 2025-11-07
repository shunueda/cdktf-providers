// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_global_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderNetworkVlanGlobalOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_global_oper#id DataThunderNetworkVlanGlobalOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_global_oper#oper DataThunderNetworkVlanGlobalOper#oper}
  */
  readonly oper?: DataThunderNetworkVlanGlobalOperOper;
}
export interface DataThunderNetworkVlanGlobalOperOperVlanTransListStruct {
  /**
  * VLAN id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_global_oper#vlan DataThunderNetworkVlanGlobalOper#vlan}
  */
  readonly vlan?: number;
}

export function dataThunderNetworkVlanGlobalOperOperVlanTransListStructToTerraform(struct?: DataThunderNetworkVlanGlobalOperOperVlanTransListStructOutputReference | DataThunderNetworkVlanGlobalOperOperVlanTransListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vlan: cdktf.numberToTerraform(struct!.vlan),
  }
}


export function dataThunderNetworkVlanGlobalOperOperVlanTransListStructToHclTerraform(struct?: DataThunderNetworkVlanGlobalOperOperVlanTransListStructOutputReference | DataThunderNetworkVlanGlobalOperOperVlanTransListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataThunderNetworkVlanGlobalOperOperVlanTransListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderNetworkVlanGlobalOperOperVlanTransListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNetworkVlanGlobalOperOperVlanTransListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vlan = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vlan = value.vlan;
    }
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
export interface DataThunderNetworkVlanGlobalOperOper {
  /**
  * vlan_trans_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_global_oper#vlan_trans_list DataThunderNetworkVlanGlobalOper#vlan_trans_list}
  */
  readonly vlanTransList?: DataThunderNetworkVlanGlobalOperOperVlanTransListStruct;
}

export function dataThunderNetworkVlanGlobalOperOperToTerraform(struct?: DataThunderNetworkVlanGlobalOperOperOutputReference | DataThunderNetworkVlanGlobalOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vlan_trans_list: dataThunderNetworkVlanGlobalOperOperVlanTransListStructToTerraform(struct!.vlanTransList),
  }
}


export function dataThunderNetworkVlanGlobalOperOperToHclTerraform(struct?: DataThunderNetworkVlanGlobalOperOperOutputReference | DataThunderNetworkVlanGlobalOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vlan_trans_list: {
      value: dataThunderNetworkVlanGlobalOperOperVlanTransListStructToHclTerraform(struct!.vlanTransList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderNetworkVlanGlobalOperOperVlanTransListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNetworkVlanGlobalOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderNetworkVlanGlobalOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vlanTransList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanTransList = this._vlanTransList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNetworkVlanGlobalOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vlanTransList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vlanTransList.internalValue = value.vlanTransList;
    }
  }

  // vlan_trans_list - computed: false, optional: true, required: false
  private _vlanTransList = new DataThunderNetworkVlanGlobalOperOperVlanTransListStructOutputReference(this, "vlan_trans_list");
  public get vlanTransList() {
    return this._vlanTransList;
  }
  public putVlanTransList(value: DataThunderNetworkVlanGlobalOperOperVlanTransListStruct) {
    this._vlanTransList.internalValue = value;
  }
  public resetVlanTransList() {
    this._vlanTransList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanTransListInput() {
    return this._vlanTransList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_global_oper thunder_network_vlan_global_oper}
*/
export class DataThunderNetworkVlanGlobalOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_network_vlan_global_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderNetworkVlanGlobalOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderNetworkVlanGlobalOper to import
  * @param importFromId The id of the existing DataThunderNetworkVlanGlobalOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_global_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderNetworkVlanGlobalOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_network_vlan_global_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_vlan_global_oper thunder_network_vlan_global_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderNetworkVlanGlobalOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderNetworkVlanGlobalOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_network_vlan_global_oper',
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
  private _oper = new DataThunderNetworkVlanGlobalOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderNetworkVlanGlobalOperOper) {
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
      oper: dataThunderNetworkVlanGlobalOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderNetworkVlanGlobalOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderNetworkVlanGlobalOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
