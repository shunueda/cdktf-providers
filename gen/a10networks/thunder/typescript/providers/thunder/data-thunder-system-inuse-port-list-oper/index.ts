// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_inuse_port_list_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemInusePortListOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_inuse_port_list_oper#id DataThunderSystemInusePortListOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_inuse_port_list_oper#oper DataThunderSystemInusePortListOper#oper}
  */
  readonly oper?: DataThunderSystemInusePortListOperOper;
}
export interface DataThunderSystemInusePortListOperOperSystemInusePortListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_inuse_port_list_oper#mac_addr DataThunderSystemInusePortListOper#mac_addr}
  */
  readonly macAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_inuse_port_list_oper#node DataThunderSystemInusePortListOper#node}
  */
  readonly nodeAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_inuse_port_list_oper#pci_addr DataThunderSystemInusePortListOper#pci_addr}
  */
  readonly pciAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_inuse_port_list_oper#port_num DataThunderSystemInusePortListOper#port_num}
  */
  readonly portNum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_inuse_port_list_oper#speed DataThunderSystemInusePortListOper#speed}
  */
  readonly speed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_inuse_port_list_oper#status DataThunderSystemInusePortListOper#status}
  */
  readonly status?: string;
}

export function dataThunderSystemInusePortListOperOperSystemInusePortListStructToTerraform(struct?: DataThunderSystemInusePortListOperOperSystemInusePortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mac_addr: cdktf.stringToTerraform(struct!.macAddr),
    node: cdktf.stringToTerraform(struct!.nodeAttribute),
    pci_addr: cdktf.stringToTerraform(struct!.pciAddr),
    port_num: cdktf.stringToTerraform(struct!.portNum),
    speed: cdktf.stringToTerraform(struct!.speed),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataThunderSystemInusePortListOperOperSystemInusePortListStructToHclTerraform(struct?: DataThunderSystemInusePortListOperOperSystemInusePortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mac_addr: {
      value: cdktf.stringToHclTerraform(struct!.macAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node: {
      value: cdktf.stringToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pci_addr: {
      value: cdktf.stringToHclTerraform(struct!.pciAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_num: {
      value: cdktf.stringToHclTerraform(struct!.portNum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    speed: {
      value: cdktf.stringToHclTerraform(struct!.speed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemInusePortListOperOperSystemInusePortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSystemInusePortListOperOperSystemInusePortListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._macAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddr = this._macAddr;
    }
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    if (this._pciAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.pciAddr = this._pciAddr;
    }
    if (this._portNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNum = this._portNum;
    }
    if (this._speed !== undefined) {
      hasAnyValues = true;
      internalValueResult.speed = this._speed;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemInusePortListOperOperSystemInusePortListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._macAddr = undefined;
      this._node = undefined;
      this._pciAddr = undefined;
      this._portNum = undefined;
      this._speed = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._macAddr = value.macAddr;
      this._node = value.nodeAttribute;
      this._pciAddr = value.pciAddr;
      this._portNum = value.portNum;
      this._speed = value.speed;
      this._status = value.status;
    }
  }

  // mac_addr - computed: false, optional: true, required: false
  private _macAddr?: string; 
  public get macAddr() {
    return this.getStringAttribute('mac_addr');
  }
  public set macAddr(value: string) {
    this._macAddr = value;
  }
  public resetMacAddr() {
    this._macAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddrInput() {
    return this._macAddr;
  }

  // node - computed: false, optional: true, required: false
  private _node?: string; 
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }
  public set nodeAttribute(value: string) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // pci_addr - computed: false, optional: true, required: false
  private _pciAddr?: string; 
  public get pciAddr() {
    return this.getStringAttribute('pci_addr');
  }
  public set pciAddr(value: string) {
    this._pciAddr = value;
  }
  public resetPciAddr() {
    this._pciAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pciAddrInput() {
    return this._pciAddr;
  }

  // port_num - computed: false, optional: true, required: false
  private _portNum?: string; 
  public get portNum() {
    return this.getStringAttribute('port_num');
  }
  public set portNum(value: string) {
    this._portNum = value;
  }
  public resetPortNum() {
    this._portNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumInput() {
    return this._portNum;
  }

  // speed - computed: false, optional: true, required: false
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  public resetSpeed() {
    this._speed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class DataThunderSystemInusePortListOperOperSystemInusePortListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSystemInusePortListOperOperSystemInusePortListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSystemInusePortListOperOperSystemInusePortListStructOutputReference {
    return new DataThunderSystemInusePortListOperOperSystemInusePortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSystemInusePortListOperOper {
  /**
  * system_inuse_port_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_inuse_port_list_oper#system_inuse_port_list DataThunderSystemInusePortListOper#system_inuse_port_list}
  */
  readonly systemInusePortList?: DataThunderSystemInusePortListOperOperSystemInusePortListStruct[] | cdktf.IResolvable;
}

export function dataThunderSystemInusePortListOperOperToTerraform(struct?: DataThunderSystemInusePortListOperOperOutputReference | DataThunderSystemInusePortListOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    system_inuse_port_list: cdktf.listMapper(dataThunderSystemInusePortListOperOperSystemInusePortListStructToTerraform, true)(struct!.systemInusePortList),
  }
}


export function dataThunderSystemInusePortListOperOperToHclTerraform(struct?: DataThunderSystemInusePortListOperOperOutputReference | DataThunderSystemInusePortListOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    system_inuse_port_list: {
      value: cdktf.listMapperHcl(dataThunderSystemInusePortListOperOperSystemInusePortListStructToHclTerraform, true)(struct!.systemInusePortList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemInusePortListOperOperSystemInusePortListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemInusePortListOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemInusePortListOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._systemInusePortList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemInusePortList = this._systemInusePortList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemInusePortListOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._systemInusePortList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._systemInusePortList.internalValue = value.systemInusePortList;
    }
  }

  // system_inuse_port_list - computed: false, optional: true, required: false
  private _systemInusePortList = new DataThunderSystemInusePortListOperOperSystemInusePortListStructList(this, "system_inuse_port_list", false);
  public get systemInusePortList() {
    return this._systemInusePortList;
  }
  public putSystemInusePortList(value: DataThunderSystemInusePortListOperOperSystemInusePortListStruct[] | cdktf.IResolvable) {
    this._systemInusePortList.internalValue = value;
  }
  public resetSystemInusePortList() {
    this._systemInusePortList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemInusePortListInput() {
    return this._systemInusePortList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_inuse_port_list_oper thunder_system_inuse_port_list_oper}
*/
export class DataThunderSystemInusePortListOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_inuse_port_list_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemInusePortListOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemInusePortListOper to import
  * @param importFromId The id of the existing DataThunderSystemInusePortListOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_inuse_port_list_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemInusePortListOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_inuse_port_list_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_inuse_port_list_oper thunder_system_inuse_port_list_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemInusePortListOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemInusePortListOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_inuse_port_list_oper',
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
  private _oper = new DataThunderSystemInusePortListOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemInusePortListOperOper) {
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
      oper: dataThunderSystemInusePortListOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSystemInusePortListOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemInusePortListOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
