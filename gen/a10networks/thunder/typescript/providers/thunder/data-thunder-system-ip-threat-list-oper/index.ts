// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ip_threat_list_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemIpThreatListOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ip_threat_list_oper#id DataThunderSystemIpThreatListOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ip_threat_list_oper#oper DataThunderSystemIpThreatListOper#oper}
  */
  readonly oper?: DataThunderSystemIpThreatListOperOper;
}
export interface DataThunderSystemIpThreatListOperOperEntriesListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ip_threat_list_oper#age DataThunderSystemIpThreatListOper#age}
  */
  readonly age?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ip_threat_list_oper#in_spe DataThunderSystemIpThreatListOper#in_spe}
  */
  readonly inSpe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ip_threat_list_oper#ip DataThunderSystemIpThreatListOper#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ip_threat_list_oper#match_type DataThunderSystemIpThreatListOper#match_type}
  */
  readonly matchType?: string;
}

export function dataThunderSystemIpThreatListOperOperEntriesListStructToTerraform(struct?: DataThunderSystemIpThreatListOperOperEntriesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    age: cdktf.numberToTerraform(struct!.age),
    in_spe: cdktf.stringToTerraform(struct!.inSpe),
    ip: cdktf.stringToTerraform(struct!.ip),
    match_type: cdktf.stringToTerraform(struct!.matchType),
  }
}


export function dataThunderSystemIpThreatListOperOperEntriesListStructToHclTerraform(struct?: DataThunderSystemIpThreatListOperOperEntriesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    age: {
      value: cdktf.numberToHclTerraform(struct!.age),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_spe: {
      value: cdktf.stringToHclTerraform(struct!.inSpe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemIpThreatListOperOperEntriesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSystemIpThreatListOperOperEntriesListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._age !== undefined) {
      hasAnyValues = true;
      internalValueResult.age = this._age;
    }
    if (this._inSpe !== undefined) {
      hasAnyValues = true;
      internalValueResult.inSpe = this._inSpe;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemIpThreatListOperOperEntriesListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._age = undefined;
      this._inSpe = undefined;
      this._ip = undefined;
      this._matchType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._age = value.age;
      this._inSpe = value.inSpe;
      this._ip = value.ip;
      this._matchType = value.matchType;
    }
  }

  // age - computed: false, optional: true, required: false
  private _age?: number; 
  public get age() {
    return this.getNumberAttribute('age');
  }
  public set age(value: number) {
    this._age = value;
  }
  public resetAge() {
    this._age = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageInput() {
    return this._age;
  }

  // in_spe - computed: false, optional: true, required: false
  private _inSpe?: string; 
  public get inSpe() {
    return this.getStringAttribute('in_spe');
  }
  public set inSpe(value: string) {
    this._inSpe = value;
  }
  public resetInSpe() {
    this._inSpe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inSpeInput() {
    return this._inSpe;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }
}

export class DataThunderSystemIpThreatListOperOperEntriesListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSystemIpThreatListOperOperEntriesListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSystemIpThreatListOperOperEntriesListStructOutputReference {
    return new DataThunderSystemIpThreatListOperOperEntriesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSystemIpThreatListOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ip_threat_list_oper#v4_address DataThunderSystemIpThreatListOper#v4_address}
  */
  readonly v4Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ip_threat_list_oper#v4_netmask DataThunderSystemIpThreatListOper#v4_netmask}
  */
  readonly v4Netmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ip_threat_list_oper#v6_prefix DataThunderSystemIpThreatListOper#v6_prefix}
  */
  readonly v6Prefix?: string;
  /**
  * entries_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ip_threat_list_oper#entries_list DataThunderSystemIpThreatListOper#entries_list}
  */
  readonly entriesList?: DataThunderSystemIpThreatListOperOperEntriesListStruct[] | cdktf.IResolvable;
}

export function dataThunderSystemIpThreatListOperOperToTerraform(struct?: DataThunderSystemIpThreatListOperOperOutputReference | DataThunderSystemIpThreatListOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    v4_address: cdktf.stringToTerraform(struct!.v4Address),
    v4_netmask: cdktf.stringToTerraform(struct!.v4Netmask),
    v6_prefix: cdktf.stringToTerraform(struct!.v6Prefix),
    entries_list: cdktf.listMapper(dataThunderSystemIpThreatListOperOperEntriesListStructToTerraform, true)(struct!.entriesList),
  }
}


export function dataThunderSystemIpThreatListOperOperToHclTerraform(struct?: DataThunderSystemIpThreatListOperOperOutputReference | DataThunderSystemIpThreatListOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    v4_address: {
      value: cdktf.stringToHclTerraform(struct!.v4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v4_netmask: {
      value: cdktf.stringToHclTerraform(struct!.v4Netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v6_prefix: {
      value: cdktf.stringToHclTerraform(struct!.v6Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entries_list: {
      value: cdktf.listMapperHcl(dataThunderSystemIpThreatListOperOperEntriesListStructToHclTerraform, true)(struct!.entriesList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemIpThreatListOperOperEntriesListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemIpThreatListOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemIpThreatListOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._v4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.v4Address = this._v4Address;
    }
    if (this._v4Netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.v4Netmask = this._v4Netmask;
    }
    if (this._v6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6Prefix = this._v6Prefix;
    }
    if (this._entriesList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entriesList = this._entriesList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemIpThreatListOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._v4Address = undefined;
      this._v4Netmask = undefined;
      this._v6Prefix = undefined;
      this._entriesList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._v4Address = value.v4Address;
      this._v4Netmask = value.v4Netmask;
      this._v6Prefix = value.v6Prefix;
      this._entriesList.internalValue = value.entriesList;
    }
  }

  // v4_address - computed: false, optional: true, required: false
  private _v4Address?: string; 
  public get v4Address() {
    return this.getStringAttribute('v4_address');
  }
  public set v4Address(value: string) {
    this._v4Address = value;
  }
  public resetV4Address() {
    this._v4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4AddressInput() {
    return this._v4Address;
  }

  // v4_netmask - computed: false, optional: true, required: false
  private _v4Netmask?: string; 
  public get v4Netmask() {
    return this.getStringAttribute('v4_netmask');
  }
  public set v4Netmask(value: string) {
    this._v4Netmask = value;
  }
  public resetV4Netmask() {
    this._v4Netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4NetmaskInput() {
    return this._v4Netmask;
  }

  // v6_prefix - computed: false, optional: true, required: false
  private _v6Prefix?: string; 
  public get v6Prefix() {
    return this.getStringAttribute('v6_prefix');
  }
  public set v6Prefix(value: string) {
    this._v6Prefix = value;
  }
  public resetV6Prefix() {
    this._v6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6PrefixInput() {
    return this._v6Prefix;
  }

  // entries_list - computed: false, optional: true, required: false
  private _entriesList = new DataThunderSystemIpThreatListOperOperEntriesListStructList(this, "entries_list", false);
  public get entriesList() {
    return this._entriesList;
  }
  public putEntriesList(value: DataThunderSystemIpThreatListOperOperEntriesListStruct[] | cdktf.IResolvable) {
    this._entriesList.internalValue = value;
  }
  public resetEntriesList() {
    this._entriesList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesListInput() {
    return this._entriesList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ip_threat_list_oper thunder_system_ip_threat_list_oper}
*/
export class DataThunderSystemIpThreatListOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_ip_threat_list_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemIpThreatListOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemIpThreatListOper to import
  * @param importFromId The id of the existing DataThunderSystemIpThreatListOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ip_threat_list_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemIpThreatListOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_ip_threat_list_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ip_threat_list_oper thunder_system_ip_threat_list_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemIpThreatListOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemIpThreatListOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_ip_threat_list_oper',
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
  private _oper = new DataThunderSystemIpThreatListOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemIpThreatListOperOper) {
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
      oper: dataThunderSystemIpThreatListOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSystemIpThreatListOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemIpThreatListOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
