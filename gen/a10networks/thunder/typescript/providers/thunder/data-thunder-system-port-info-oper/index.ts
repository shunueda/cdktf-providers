// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_port_info_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemPortInfoOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_port_info_oper#id DataThunderSystemPortInfoOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_port_info_oper#oper DataThunderSystemPortInfoOper#oper}
  */
  readonly oper?: DataThunderSystemPortInfoOperOper;
}
export interface DataThunderSystemPortInfoOperOperSystemPortInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_port_info_oper#dev DataThunderSystemPortInfoOper#dev}
  */
  readonly dev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_port_info_oper#info DataThunderSystemPortInfoOper#info}
  */
  readonly info?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_port_info_oper#pci_addr DataThunderSystemPortInfoOper#pci_addr}
  */
  readonly pciAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_port_info_oper#port_num DataThunderSystemPortInfoOper#port_num}
  */
  readonly portNum?: string;
}

export function dataThunderSystemPortInfoOperOperSystemPortInfoToTerraform(struct?: DataThunderSystemPortInfoOperOperSystemPortInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dev: cdktf.stringToTerraform(struct!.dev),
    info: cdktf.stringToTerraform(struct!.info),
    pci_addr: cdktf.stringToTerraform(struct!.pciAddr),
    port_num: cdktf.stringToTerraform(struct!.portNum),
  }
}


export function dataThunderSystemPortInfoOperOperSystemPortInfoToHclTerraform(struct?: DataThunderSystemPortInfoOperOperSystemPortInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dev: {
      value: cdktf.stringToHclTerraform(struct!.dev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    info: {
      value: cdktf.stringToHclTerraform(struct!.info),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemPortInfoOperOperSystemPortInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSystemPortInfoOperOperSystemPortInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dev !== undefined) {
      hasAnyValues = true;
      internalValueResult.dev = this._dev;
    }
    if (this._info !== undefined) {
      hasAnyValues = true;
      internalValueResult.info = this._info;
    }
    if (this._pciAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.pciAddr = this._pciAddr;
    }
    if (this._portNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNum = this._portNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemPortInfoOperOperSystemPortInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dev = undefined;
      this._info = undefined;
      this._pciAddr = undefined;
      this._portNum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dev = value.dev;
      this._info = value.info;
      this._pciAddr = value.pciAddr;
      this._portNum = value.portNum;
    }
  }

  // dev - computed: false, optional: true, required: false
  private _dev?: string; 
  public get dev() {
    return this.getStringAttribute('dev');
  }
  public set dev(value: string) {
    this._dev = value;
  }
  public resetDev() {
    this._dev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devInput() {
    return this._dev;
  }

  // info - computed: false, optional: true, required: false
  private _info?: string; 
  public get info() {
    return this.getStringAttribute('info');
  }
  public set info(value: string) {
    this._info = value;
  }
  public resetInfo() {
    this._info = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info;
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
}

export class DataThunderSystemPortInfoOperOperSystemPortInfoList extends cdktf.ComplexList {
  public internalValue? : DataThunderSystemPortInfoOperOperSystemPortInfo[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSystemPortInfoOperOperSystemPortInfoOutputReference {
    return new DataThunderSystemPortInfoOperOperSystemPortInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSystemPortInfoOperOper {
  /**
  * system_port_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_port_info_oper#system_port_info DataThunderSystemPortInfoOper#system_port_info}
  */
  readonly systemPortInfo?: DataThunderSystemPortInfoOperOperSystemPortInfo[] | cdktf.IResolvable;
}

export function dataThunderSystemPortInfoOperOperToTerraform(struct?: DataThunderSystemPortInfoOperOperOutputReference | DataThunderSystemPortInfoOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    system_port_info: cdktf.listMapper(dataThunderSystemPortInfoOperOperSystemPortInfoToTerraform, true)(struct!.systemPortInfo),
  }
}


export function dataThunderSystemPortInfoOperOperToHclTerraform(struct?: DataThunderSystemPortInfoOperOperOutputReference | DataThunderSystemPortInfoOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    system_port_info: {
      value: cdktf.listMapperHcl(dataThunderSystemPortInfoOperOperSystemPortInfoToHclTerraform, true)(struct!.systemPortInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemPortInfoOperOperSystemPortInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemPortInfoOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemPortInfoOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._systemPortInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemPortInfo = this._systemPortInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemPortInfoOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._systemPortInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._systemPortInfo.internalValue = value.systemPortInfo;
    }
  }

  // system_port_info - computed: false, optional: true, required: false
  private _systemPortInfo = new DataThunderSystemPortInfoOperOperSystemPortInfoList(this, "system_port_info", false);
  public get systemPortInfo() {
    return this._systemPortInfo;
  }
  public putSystemPortInfo(value: DataThunderSystemPortInfoOperOperSystemPortInfo[] | cdktf.IResolvable) {
    this._systemPortInfo.internalValue = value;
  }
  public resetSystemPortInfo() {
    this._systemPortInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemPortInfoInput() {
    return this._systemPortInfo.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_port_info_oper thunder_system_port_info_oper}
*/
export class DataThunderSystemPortInfoOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_port_info_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemPortInfoOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemPortInfoOper to import
  * @param importFromId The id of the existing DataThunderSystemPortInfoOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_port_info_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemPortInfoOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_port_info_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_port_info_oper thunder_system_port_info_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemPortInfoOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemPortInfoOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_port_info_oper',
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
  private _oper = new DataThunderSystemPortInfoOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemPortInfoOperOper) {
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
      oper: dataThunderSystemPortInfoOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSystemPortInfoOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemPortInfoOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
