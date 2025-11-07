// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_hash_table_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderScaleoutDebugHashTableOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_hash_table_oper#id DataThunderScaleoutDebugHashTableOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_hash_table_oper#oper DataThunderScaleoutDebugHashTableOper#oper}
  */
  readonly oper?: DataThunderScaleoutDebugHashTableOperOper;
}
export interface DataThunderScaleoutDebugHashTableOperOperHashListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_hash_table_oper#hash DataThunderScaleoutDebugHashTableOper#hash}
  */
  readonly hash?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_hash_table_oper#node DataThunderScaleoutDebugHashTableOper#node}
  */
  readonly nodeAttribute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_hash_table_oper#ref_count DataThunderScaleoutDebugHashTableOper#ref_count}
  */
  readonly refCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_hash_table_oper#so_ip DataThunderScaleoutDebugHashTableOper#so_ip}
  */
  readonly soIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_hash_table_oper#so_mac DataThunderScaleoutDebugHashTableOper#so_mac}
  */
  readonly soMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_hash_table_oper#so_vnp_id DataThunderScaleoutDebugHashTableOper#so_vnp_id}
  */
  readonly soVnpId?: number;
}

export function dataThunderScaleoutDebugHashTableOperOperHashListStructToTerraform(struct?: DataThunderScaleoutDebugHashTableOperOperHashListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash: cdktf.numberToTerraform(struct!.hash),
    node: cdktf.numberToTerraform(struct!.nodeAttribute),
    ref_count: cdktf.numberToTerraform(struct!.refCount),
    so_ip: cdktf.stringToTerraform(struct!.soIp),
    so_mac: cdktf.stringToTerraform(struct!.soMac),
    so_vnp_id: cdktf.numberToTerraform(struct!.soVnpId),
  }
}


export function dataThunderScaleoutDebugHashTableOperOperHashListStructToHclTerraform(struct?: DataThunderScaleoutDebugHashTableOperOperHashListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash: {
      value: cdktf.numberToHclTerraform(struct!.hash),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node: {
      value: cdktf.numberToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ref_count: {
      value: cdktf.numberToHclTerraform(struct!.refCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    so_ip: {
      value: cdktf.stringToHclTerraform(struct!.soIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    so_mac: {
      value: cdktf.stringToHclTerraform(struct!.soMac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    so_vnp_id: {
      value: cdktf.numberToHclTerraform(struct!.soVnpId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutDebugHashTableOperOperHashListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScaleoutDebugHashTableOperOperHashListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash;
    }
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    if (this._refCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.refCount = this._refCount;
    }
    if (this._soIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.soIp = this._soIp;
    }
    if (this._soMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.soMac = this._soMac;
    }
    if (this._soVnpId !== undefined) {
      hasAnyValues = true;
      internalValueResult.soVnpId = this._soVnpId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutDebugHashTableOperOperHashListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hash = undefined;
      this._node = undefined;
      this._refCount = undefined;
      this._soIp = undefined;
      this._soMac = undefined;
      this._soVnpId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hash = value.hash;
      this._node = value.nodeAttribute;
      this._refCount = value.refCount;
      this._soIp = value.soIp;
      this._soMac = value.soMac;
      this._soVnpId = value.soVnpId;
    }
  }

  // hash - computed: false, optional: true, required: false
  private _hash?: number; 
  public get hash() {
    return this.getNumberAttribute('hash');
  }
  public set hash(value: number) {
    this._hash = value;
  }
  public resetHash() {
    this._hash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash;
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

  // so_ip - computed: false, optional: true, required: false
  private _soIp?: string; 
  public get soIp() {
    return this.getStringAttribute('so_ip');
  }
  public set soIp(value: string) {
    this._soIp = value;
  }
  public resetSoIp() {
    this._soIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soIpInput() {
    return this._soIp;
  }

  // so_mac - computed: false, optional: true, required: false
  private _soMac?: string; 
  public get soMac() {
    return this.getStringAttribute('so_mac');
  }
  public set soMac(value: string) {
    this._soMac = value;
  }
  public resetSoMac() {
    this._soMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soMacInput() {
    return this._soMac;
  }

  // so_vnp_id - computed: false, optional: true, required: false
  private _soVnpId?: number; 
  public get soVnpId() {
    return this.getNumberAttribute('so_vnp_id');
  }
  public set soVnpId(value: number) {
    this._soVnpId = value;
  }
  public resetSoVnpId() {
    this._soVnpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soVnpIdInput() {
    return this._soVnpId;
  }
}

export class DataThunderScaleoutDebugHashTableOperOperHashListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScaleoutDebugHashTableOperOperHashListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScaleoutDebugHashTableOperOperHashListStructOutputReference {
    return new DataThunderScaleoutDebugHashTableOperOperHashListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScaleoutDebugHashTableOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_hash_table_oper#ip DataThunderScaleoutDebugHashTableOper#ip}
  */
  readonly ip?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_hash_table_oper#mac DataThunderScaleoutDebugHashTableOper#mac}
  */
  readonly mac?: number;
  /**
  * hash_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_hash_table_oper#hash_list DataThunderScaleoutDebugHashTableOper#hash_list}
  */
  readonly hashList?: DataThunderScaleoutDebugHashTableOperOperHashListStruct[] | cdktf.IResolvable;
}

export function dataThunderScaleoutDebugHashTableOperOperToTerraform(struct?: DataThunderScaleoutDebugHashTableOperOperOutputReference | DataThunderScaleoutDebugHashTableOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.numberToTerraform(struct!.ip),
    mac: cdktf.numberToTerraform(struct!.mac),
    hash_list: cdktf.listMapper(dataThunderScaleoutDebugHashTableOperOperHashListStructToTerraform, true)(struct!.hashList),
  }
}


export function dataThunderScaleoutDebugHashTableOperOperToHclTerraform(struct?: DataThunderScaleoutDebugHashTableOperOperOutputReference | DataThunderScaleoutDebugHashTableOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.numberToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac: {
      value: cdktf.numberToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hash_list: {
      value: cdktf.listMapperHcl(dataThunderScaleoutDebugHashTableOperOperHashListStructToHclTerraform, true)(struct!.hashList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScaleoutDebugHashTableOperOperHashListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutDebugHashTableOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderScaleoutDebugHashTableOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._hashList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashList = this._hashList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutDebugHashTableOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._mac = undefined;
      this._hashList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._mac = value.mac;
      this._hashList.internalValue = value.hashList;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: number; 
  public get ip() {
    return this.getNumberAttribute('ip');
  }
  public set ip(value: number) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // mac - computed: false, optional: true, required: false
  private _mac?: number; 
  public get mac() {
    return this.getNumberAttribute('mac');
  }
  public set mac(value: number) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // hash_list - computed: false, optional: true, required: false
  private _hashList = new DataThunderScaleoutDebugHashTableOperOperHashListStructList(this, "hash_list", false);
  public get hashList() {
    return this._hashList;
  }
  public putHashList(value: DataThunderScaleoutDebugHashTableOperOperHashListStruct[] | cdktf.IResolvable) {
    this._hashList.internalValue = value;
  }
  public resetHashList() {
    this._hashList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashListInput() {
    return this._hashList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_hash_table_oper thunder_scaleout_debug_hash_table_oper}
*/
export class DataThunderScaleoutDebugHashTableOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_scaleout_debug_hash_table_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderScaleoutDebugHashTableOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderScaleoutDebugHashTableOper to import
  * @param importFromId The id of the existing DataThunderScaleoutDebugHashTableOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_hash_table_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderScaleoutDebugHashTableOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_scaleout_debug_hash_table_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_hash_table_oper thunder_scaleout_debug_hash_table_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderScaleoutDebugHashTableOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderScaleoutDebugHashTableOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_scaleout_debug_hash_table_oper',
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
  private _oper = new DataThunderScaleoutDebugHashTableOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderScaleoutDebugHashTableOperOper) {
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
      oper: dataThunderScaleoutDebugHashTableOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderScaleoutDebugHashTableOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderScaleoutDebugHashTableOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
