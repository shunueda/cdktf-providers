// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_debug_files_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVisibilityDebugFilesOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_debug_files_oper#id DataThunderVisibilityDebugFilesOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_debug_files_oper#oper DataThunderVisibilityDebugFilesOper#oper}
  */
  readonly oper?: DataThunderVisibilityDebugFilesOperOper;
}
export interface DataThunderVisibilityDebugFilesOperOperDebugFileNameListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_debug_files_oper#debug_file_name DataThunderVisibilityDebugFilesOper#debug_file_name}
  */
  readonly debugFileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_debug_files_oper#entity_key DataThunderVisibilityDebugFilesOper#entity_key}
  */
  readonly entityKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_debug_files_oper#flat_oid DataThunderVisibilityDebugFilesOper#flat_oid}
  */
  readonly flatOid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_debug_files_oper#ipv4_addr DataThunderVisibilityDebugFilesOper#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_debug_files_oper#ipv6_addr DataThunderVisibilityDebugFilesOper#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_debug_files_oper#port DataThunderVisibilityDebugFilesOper#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_debug_files_oper#protocol DataThunderVisibilityDebugFilesOper#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_debug_files_oper#uuid DataThunderVisibilityDebugFilesOper#uuid}
  */
  readonly uuid?: string;
}

export function dataThunderVisibilityDebugFilesOperOperDebugFileNameListStructToTerraform(struct?: DataThunderVisibilityDebugFilesOperOperDebugFileNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    debug_file_name: cdktf.stringToTerraform(struct!.debugFileName),
    entity_key: cdktf.stringToTerraform(struct!.entityKey),
    flat_oid: cdktf.numberToTerraform(struct!.flatOid),
    ipv4_addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function dataThunderVisibilityDebugFilesOperOperDebugFileNameListStructToHclTerraform(struct?: DataThunderVisibilityDebugFilesOperOperDebugFileNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    debug_file_name: {
      value: cdktf.stringToHclTerraform(struct!.debugFileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_key: {
      value: cdktf.stringToHclTerraform(struct!.entityKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flat_oid: {
      value: cdktf.numberToHclTerraform(struct!.flatOid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityDebugFilesOperOperDebugFileNameListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityDebugFilesOperOperDebugFileNameListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debugFileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugFileName = this._debugFileName;
    }
    if (this._entityKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityKey = this._entityKey;
    }
    if (this._flatOid !== undefined) {
      hasAnyValues = true;
      internalValueResult.flatOid = this._flatOid;
    }
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityDebugFilesOperOperDebugFileNameListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._debugFileName = undefined;
      this._entityKey = undefined;
      this._flatOid = undefined;
      this._ipv4Addr = undefined;
      this._ipv6Addr = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._debugFileName = value.debugFileName;
      this._entityKey = value.entityKey;
      this._flatOid = value.flatOid;
      this._ipv4Addr = value.ipv4Addr;
      this._ipv6Addr = value.ipv6Addr;
      this._port = value.port;
      this._protocol = value.protocol;
      this._uuid = value.uuid;
    }
  }

  // debug_file_name - computed: false, optional: true, required: false
  private _debugFileName?: string; 
  public get debugFileName() {
    return this.getStringAttribute('debug_file_name');
  }
  public set debugFileName(value: string) {
    this._debugFileName = value;
  }
  public resetDebugFileName() {
    this._debugFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugFileNameInput() {
    return this._debugFileName;
  }

  // entity_key - computed: false, optional: true, required: false
  private _entityKey?: string; 
  public get entityKey() {
    return this.getStringAttribute('entity_key');
  }
  public set entityKey(value: string) {
    this._entityKey = value;
  }
  public resetEntityKey() {
    this._entityKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityKeyInput() {
    return this._entityKey;
  }

  // flat_oid - computed: false, optional: true, required: false
  private _flatOid?: number; 
  public get flatOid() {
    return this.getNumberAttribute('flat_oid');
  }
  public set flatOid(value: number) {
    this._flatOid = value;
  }
  public resetFlatOid() {
    this._flatOid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flatOidInput() {
    return this._flatOid;
  }

  // ipv4_addr - computed: false, optional: true, required: false
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4_addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  public resetIpv4Addr() {
    this._ipv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }

  // ipv6_addr - computed: false, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6_addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  public resetIpv6Addr() {
    this._ipv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class DataThunderVisibilityDebugFilesOperOperDebugFileNameListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityDebugFilesOperOperDebugFileNameListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityDebugFilesOperOperDebugFileNameListStructOutputReference {
    return new DataThunderVisibilityDebugFilesOperOperDebugFileNameListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityDebugFilesOperOper {
  /**
  * debug_file_name_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_debug_files_oper#debug_file_name_list DataThunderVisibilityDebugFilesOper#debug_file_name_list}
  */
  readonly debugFileNameList?: DataThunderVisibilityDebugFilesOperOperDebugFileNameListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityDebugFilesOperOperToTerraform(struct?: DataThunderVisibilityDebugFilesOperOperOutputReference | DataThunderVisibilityDebugFilesOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    debug_file_name_list: cdktf.listMapper(dataThunderVisibilityDebugFilesOperOperDebugFileNameListStructToTerraform, true)(struct!.debugFileNameList),
  }
}


export function dataThunderVisibilityDebugFilesOperOperToHclTerraform(struct?: DataThunderVisibilityDebugFilesOperOperOutputReference | DataThunderVisibilityDebugFilesOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    debug_file_name_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityDebugFilesOperOperDebugFileNameListStructToHclTerraform, true)(struct!.debugFileNameList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityDebugFilesOperOperDebugFileNameListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityDebugFilesOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityDebugFilesOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debugFileNameList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugFileNameList = this._debugFileNameList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityDebugFilesOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._debugFileNameList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._debugFileNameList.internalValue = value.debugFileNameList;
    }
  }

  // debug_file_name_list - computed: false, optional: true, required: false
  private _debugFileNameList = new DataThunderVisibilityDebugFilesOperOperDebugFileNameListStructList(this, "debug_file_name_list", false);
  public get debugFileNameList() {
    return this._debugFileNameList;
  }
  public putDebugFileNameList(value: DataThunderVisibilityDebugFilesOperOperDebugFileNameListStruct[] | cdktf.IResolvable) {
    this._debugFileNameList.internalValue = value;
  }
  public resetDebugFileNameList() {
    this._debugFileNameList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugFileNameListInput() {
    return this._debugFileNameList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_debug_files_oper thunder_visibility_debug_files_oper}
*/
export class DataThunderVisibilityDebugFilesOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_debug_files_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVisibilityDebugFilesOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVisibilityDebugFilesOper to import
  * @param importFromId The id of the existing DataThunderVisibilityDebugFilesOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_debug_files_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVisibilityDebugFilesOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_debug_files_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_debug_files_oper thunder_visibility_debug_files_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVisibilityDebugFilesOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVisibilityDebugFilesOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_debug_files_oper',
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
  private _oper = new DataThunderVisibilityDebugFilesOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVisibilityDebugFilesOperOper) {
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
      oper: dataThunderVisibilityDebugFilesOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderVisibilityDebugFilesOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityDebugFilesOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
