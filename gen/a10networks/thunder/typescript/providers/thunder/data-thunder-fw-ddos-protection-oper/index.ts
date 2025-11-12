// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_ddos_protection_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderFwDdosProtectionOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_ddos_protection_oper#id DataThunderFwDdosProtectionOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_ddos_protection_oper#oper DataThunderFwDdosProtectionOper#oper}
  */
  readonly oper?: DataThunderFwDdosProtectionOperOper;
}
export interface DataThunderFwDdosProtectionOperOperEntriesListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_ddos_protection_oper#expiration DataThunderFwDdosProtectionOper#expiration}
  */
  readonly expiration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_ddos_protection_oper#hash DataThunderFwDdosProtectionOper#hash}
  */
  readonly hash?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_ddos_protection_oper#hints DataThunderFwDdosProtectionOper#hints}
  */
  readonly hints?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_ddos_protection_oper#ip DataThunderFwDdosProtectionOper#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_ddos_protection_oper#lid DataThunderFwDdosProtectionOper#lid}
  */
  readonly lid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_ddos_protection_oper#pps DataThunderFwDdosProtectionOper#pps}
  */
  readonly pps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_ddos_protection_oper#prefix DataThunderFwDdosProtectionOper#prefix}
  */
  readonly prefix?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_ddos_protection_oper#rate DataThunderFwDdosProtectionOper#rate}
  */
  readonly rate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_ddos_protection_oper#rule_name DataThunderFwDdosProtectionOper#rule_name}
  */
  readonly ruleName?: string;
}

export function dataThunderFwDdosProtectionOperOperEntriesListStructToTerraform(struct?: DataThunderFwDdosProtectionOperOperEntriesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration: cdktf.numberToTerraform(struct!.expiration),
    hash: cdktf.numberToTerraform(struct!.hash),
    hints: cdktf.stringToTerraform(struct!.hints),
    ip: cdktf.stringToTerraform(struct!.ip),
    lid: cdktf.numberToTerraform(struct!.lid),
    pps: cdktf.numberToTerraform(struct!.pps),
    prefix: cdktf.numberToTerraform(struct!.prefix),
    rate: cdktf.numberToTerraform(struct!.rate),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
  }
}


export function dataThunderFwDdosProtectionOperOperEntriesListStructToHclTerraform(struct?: DataThunderFwDdosProtectionOperOperEntriesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration: {
      value: cdktf.numberToHclTerraform(struct!.expiration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hash: {
      value: cdktf.numberToHclTerraform(struct!.hash),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hints: {
      value: cdktf.stringToHclTerraform(struct!.hints),
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
    lid: {
      value: cdktf.numberToHclTerraform(struct!.lid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pps: {
      value: cdktf.numberToHclTerraform(struct!.pps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.numberToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate: {
      value: cdktf.numberToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwDdosProtectionOperOperEntriesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderFwDdosProtectionOperOperEntriesListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiration = this._expiration;
    }
    if (this._hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash;
    }
    if (this._hints !== undefined) {
      hasAnyValues = true;
      internalValueResult.hints = this._hints;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._lid !== undefined) {
      hasAnyValues = true;
      internalValueResult.lid = this._lid;
    }
    if (this._pps !== undefined) {
      hasAnyValues = true;
      internalValueResult.pps = this._pps;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwDdosProtectionOperOperEntriesListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expiration = undefined;
      this._hash = undefined;
      this._hints = undefined;
      this._ip = undefined;
      this._lid = undefined;
      this._pps = undefined;
      this._prefix = undefined;
      this._rate = undefined;
      this._ruleName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expiration = value.expiration;
      this._hash = value.hash;
      this._hints = value.hints;
      this._ip = value.ip;
      this._lid = value.lid;
      this._pps = value.pps;
      this._prefix = value.prefix;
      this._rate = value.rate;
      this._ruleName = value.ruleName;
    }
  }

  // expiration - computed: false, optional: true, required: false
  private _expiration?: number; 
  public get expiration() {
    return this.getNumberAttribute('expiration');
  }
  public set expiration(value: number) {
    this._expiration = value;
  }
  public resetExpiration() {
    this._expiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
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

  // hints - computed: false, optional: true, required: false
  private _hints?: string; 
  public get hints() {
    return this.getStringAttribute('hints');
  }
  public set hints(value: string) {
    this._hints = value;
  }
  public resetHints() {
    this._hints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hintsInput() {
    return this._hints;
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

  // lid - computed: false, optional: true, required: false
  private _lid?: number; 
  public get lid() {
    return this.getNumberAttribute('lid');
  }
  public set lid(value: number) {
    this._lid = value;
  }
  public resetLid() {
    this._lid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidInput() {
    return this._lid;
  }

  // pps - computed: false, optional: true, required: false
  private _pps?: number; 
  public get pps() {
    return this.getNumberAttribute('pps');
  }
  public set pps(value: number) {
    this._pps = value;
  }
  public resetPps() {
    this._pps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ppsInput() {
    return this._pps;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: number; 
  public get prefix() {
    return this.getNumberAttribute('prefix');
  }
  public set prefix(value: number) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // rate - computed: false, optional: true, required: false
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }

  // rule_name - computed: false, optional: true, required: false
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }
}

export class DataThunderFwDdosProtectionOperOperEntriesListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderFwDdosProtectionOperOperEntriesListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderFwDdosProtectionOperOperEntriesListStructOutputReference {
    return new DataThunderFwDdosProtectionOperOperEntriesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderFwDdosProtectionOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_ddos_protection_oper#details DataThunderFwDdosProtectionOper#details}
  */
  readonly details?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_ddos_protection_oper#v4_address DataThunderFwDdosProtectionOper#v4_address}
  */
  readonly v4Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_ddos_protection_oper#v4_netmask DataThunderFwDdosProtectionOper#v4_netmask}
  */
  readonly v4Netmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_ddos_protection_oper#v6_prefix DataThunderFwDdosProtectionOper#v6_prefix}
  */
  readonly v6Prefix?: string;
  /**
  * entries_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_ddos_protection_oper#entries_list DataThunderFwDdosProtectionOper#entries_list}
  */
  readonly entriesList?: DataThunderFwDdosProtectionOperOperEntriesListStruct[] | cdktf.IResolvable;
}

export function dataThunderFwDdosProtectionOperOperToTerraform(struct?: DataThunderFwDdosProtectionOperOperOutputReference | DataThunderFwDdosProtectionOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    details: cdktf.numberToTerraform(struct!.details),
    v4_address: cdktf.stringToTerraform(struct!.v4Address),
    v4_netmask: cdktf.stringToTerraform(struct!.v4Netmask),
    v6_prefix: cdktf.stringToTerraform(struct!.v6Prefix),
    entries_list: cdktf.listMapper(dataThunderFwDdosProtectionOperOperEntriesListStructToTerraform, true)(struct!.entriesList),
  }
}


export function dataThunderFwDdosProtectionOperOperToHclTerraform(struct?: DataThunderFwDdosProtectionOperOperOutputReference | DataThunderFwDdosProtectionOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    details: {
      value: cdktf.numberToHclTerraform(struct!.details),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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
      value: cdktf.listMapperHcl(dataThunderFwDdosProtectionOperOperEntriesListStructToHclTerraform, true)(struct!.entriesList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderFwDdosProtectionOperOperEntriesListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwDdosProtectionOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFwDdosProtectionOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._details !== undefined) {
      hasAnyValues = true;
      internalValueResult.details = this._details;
    }
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

  public set internalValue(value: DataThunderFwDdosProtectionOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._details = undefined;
      this._v4Address = undefined;
      this._v4Netmask = undefined;
      this._v6Prefix = undefined;
      this._entriesList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._details = value.details;
      this._v4Address = value.v4Address;
      this._v4Netmask = value.v4Netmask;
      this._v6Prefix = value.v6Prefix;
      this._entriesList.internalValue = value.entriesList;
    }
  }

  // details - computed: false, optional: true, required: false
  private _details?: number; 
  public get details() {
    return this.getNumberAttribute('details');
  }
  public set details(value: number) {
    this._details = value;
  }
  public resetDetails() {
    this._details = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details;
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
  private _entriesList = new DataThunderFwDdosProtectionOperOperEntriesListStructList(this, "entries_list", false);
  public get entriesList() {
    return this._entriesList;
  }
  public putEntriesList(value: DataThunderFwDdosProtectionOperOperEntriesListStruct[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_ddos_protection_oper thunder_fw_ddos_protection_oper}
*/
export class DataThunderFwDdosProtectionOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_ddos_protection_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderFwDdosProtectionOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderFwDdosProtectionOper to import
  * @param importFromId The id of the existing DataThunderFwDdosProtectionOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_ddos_protection_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderFwDdosProtectionOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_ddos_protection_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_ddos_protection_oper thunder_fw_ddos_protection_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderFwDdosProtectionOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderFwDdosProtectionOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_ddos_protection_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
  private _oper = new DataThunderFwDdosProtectionOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderFwDdosProtectionOperOper) {
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
      oper: dataThunderFwDdosProtectionOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderFwDdosProtectionOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderFwDdosProtectionOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
