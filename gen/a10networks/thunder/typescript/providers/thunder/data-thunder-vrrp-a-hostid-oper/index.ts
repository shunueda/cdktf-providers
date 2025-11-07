// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_hostid_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVrrpAHostidOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_hostid_oper#id DataThunderVrrpAHostidOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_hostid_oper#oper DataThunderVrrpAHostidOper#oper}
  */
  readonly oper?: DataThunderVrrpAHostidOperOper;
}
export interface DataThunderVrrpAHostidOperOperHostidListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_hostid_oper#device_id DataThunderVrrpAHostidOper#device_id}
  */
  readonly deviceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_hostid_oper#sn DataThunderVrrpAHostidOper#sn}
  */
  readonly sn?: string;
}

export function dataThunderVrrpAHostidOperOperHostidListStructToTerraform(struct?: DataThunderVrrpAHostidOperOperHostidListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_id: cdktf.numberToTerraform(struct!.deviceId),
    sn: cdktf.stringToTerraform(struct!.sn),
  }
}


export function dataThunderVrrpAHostidOperOperHostidListStructToHclTerraform(struct?: DataThunderVrrpAHostidOperOperHostidListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_id: {
      value: cdktf.numberToHclTerraform(struct!.deviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sn: {
      value: cdktf.stringToHclTerraform(struct!.sn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVrrpAHostidOperOperHostidListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVrrpAHostidOperOperHostidListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceId = this._deviceId;
    }
    if (this._sn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sn = this._sn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVrrpAHostidOperOperHostidListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceId = undefined;
      this._sn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceId = value.deviceId;
      this._sn = value.sn;
    }
  }

  // device_id - computed: false, optional: true, required: false
  private _deviceId?: number; 
  public get deviceId() {
    return this.getNumberAttribute('device_id');
  }
  public set deviceId(value: number) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // sn - computed: false, optional: true, required: false
  private _sn?: string; 
  public get sn() {
    return this.getStringAttribute('sn');
  }
  public set sn(value: string) {
    this._sn = value;
  }
  public resetSn() {
    this._sn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snInput() {
    return this._sn;
  }
}

export class DataThunderVrrpAHostidOperOperHostidListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVrrpAHostidOperOperHostidListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVrrpAHostidOperOperHostidListStructOutputReference {
    return new DataThunderVrrpAHostidOperOperHostidListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVrrpAHostidOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_hostid_oper#set_id DataThunderVrrpAHostidOper#set_id}
  */
  readonly setId?: number;
  /**
  * hostid_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_hostid_oper#hostid_list DataThunderVrrpAHostidOper#hostid_list}
  */
  readonly hostidList?: DataThunderVrrpAHostidOperOperHostidListStruct[] | cdktf.IResolvable;
}

export function dataThunderVrrpAHostidOperOperToTerraform(struct?: DataThunderVrrpAHostidOperOperOutputReference | DataThunderVrrpAHostidOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    set_id: cdktf.numberToTerraform(struct!.setId),
    hostid_list: cdktf.listMapper(dataThunderVrrpAHostidOperOperHostidListStructToTerraform, true)(struct!.hostidList),
  }
}


export function dataThunderVrrpAHostidOperOperToHclTerraform(struct?: DataThunderVrrpAHostidOperOperOutputReference | DataThunderVrrpAHostidOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    set_id: {
      value: cdktf.numberToHclTerraform(struct!.setId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hostid_list: {
      value: cdktf.listMapperHcl(dataThunderVrrpAHostidOperOperHostidListStructToHclTerraform, true)(struct!.hostidList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVrrpAHostidOperOperHostidListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVrrpAHostidOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVrrpAHostidOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._setId !== undefined) {
      hasAnyValues = true;
      internalValueResult.setId = this._setId;
    }
    if (this._hostidList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostidList = this._hostidList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVrrpAHostidOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._setId = undefined;
      this._hostidList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._setId = value.setId;
      this._hostidList.internalValue = value.hostidList;
    }
  }

  // set_id - computed: false, optional: true, required: false
  private _setId?: number; 
  public get setId() {
    return this.getNumberAttribute('set_id');
  }
  public set setId(value: number) {
    this._setId = value;
  }
  public resetSetId() {
    this._setId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIdInput() {
    return this._setId;
  }

  // hostid_list - computed: false, optional: true, required: false
  private _hostidList = new DataThunderVrrpAHostidOperOperHostidListStructList(this, "hostid_list", false);
  public get hostidList() {
    return this._hostidList;
  }
  public putHostidList(value: DataThunderVrrpAHostidOperOperHostidListStruct[] | cdktf.IResolvable) {
    this._hostidList.internalValue = value;
  }
  public resetHostidList() {
    this._hostidList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostidListInput() {
    return this._hostidList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_hostid_oper thunder_vrrp_a_hostid_oper}
*/
export class DataThunderVrrpAHostidOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vrrp_a_hostid_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVrrpAHostidOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVrrpAHostidOper to import
  * @param importFromId The id of the existing DataThunderVrrpAHostidOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_hostid_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVrrpAHostidOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vrrp_a_hostid_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_hostid_oper thunder_vrrp_a_hostid_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVrrpAHostidOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVrrpAHostidOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vrrp_a_hostid_oper',
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
  private _oper = new DataThunderVrrpAHostidOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVrrpAHostidOperOper) {
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
      oper: dataThunderVrrpAHostidOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderVrrpAHostidOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVrrpAHostidOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
