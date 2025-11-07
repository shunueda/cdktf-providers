// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_password_retry_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamAuthenticationPasswordRetryOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_password_retry_oper#id DataThunderAamAuthenticationPasswordRetryOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_password_retry_oper#oper DataThunderAamAuthenticationPasswordRetryOper#oper}
  */
  readonly oper?: DataThunderAamAuthenticationPasswordRetryOperOper;
}
export interface DataThunderAamAuthenticationPasswordRetryOperOperEntryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_password_retry_oper#account DataThunderAamAuthenticationPasswordRetryOper#account}
  */
  readonly account?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_password_retry_oper#locked_out DataThunderAamAuthenticationPasswordRetryOper#locked_out}
  */
  readonly lockedOut?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_password_retry_oper#logon DataThunderAamAuthenticationPasswordRetryOper#logon}
  */
  readonly logon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_password_retry_oper#pw_failure DataThunderAamAuthenticationPasswordRetryOper#pw_failure}
  */
  readonly pwFailure?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_password_retry_oper#ttl DataThunderAamAuthenticationPasswordRetryOper#ttl}
  */
  readonly ttl?: number;
}

export function dataThunderAamAuthenticationPasswordRetryOperOperEntryListStructToTerraform(struct?: DataThunderAamAuthenticationPasswordRetryOperOperEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.stringToTerraform(struct!.account),
    locked_out: cdktf.stringToTerraform(struct!.lockedOut),
    logon: cdktf.stringToTerraform(struct!.logon),
    pw_failure: cdktf.numberToTerraform(struct!.pwFailure),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function dataThunderAamAuthenticationPasswordRetryOperOperEntryListStructToHclTerraform(struct?: DataThunderAamAuthenticationPasswordRetryOperOperEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locked_out: {
      value: cdktf.stringToHclTerraform(struct!.lockedOut),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logon: {
      value: cdktf.stringToHclTerraform(struct!.logon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pw_failure: {
      value: cdktf.numberToHclTerraform(struct!.pwFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationPasswordRetryOperOperEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderAamAuthenticationPasswordRetryOperOperEntryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._lockedOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockedOut = this._lockedOut;
    }
    if (this._logon !== undefined) {
      hasAnyValues = true;
      internalValueResult.logon = this._logon;
    }
    if (this._pwFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.pwFailure = this._pwFailure;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationPasswordRetryOperOperEntryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._account = undefined;
      this._lockedOut = undefined;
      this._logon = undefined;
      this._pwFailure = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._account = value.account;
      this._lockedOut = value.lockedOut;
      this._logon = value.logon;
      this._pwFailure = value.pwFailure;
      this._ttl = value.ttl;
    }
  }

  // account - computed: false, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // locked_out - computed: false, optional: true, required: false
  private _lockedOut?: string; 
  public get lockedOut() {
    return this.getStringAttribute('locked_out');
  }
  public set lockedOut(value: string) {
    this._lockedOut = value;
  }
  public resetLockedOut() {
    this._lockedOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedOutInput() {
    return this._lockedOut;
  }

  // logon - computed: false, optional: true, required: false
  private _logon?: string; 
  public get logon() {
    return this.getStringAttribute('logon');
  }
  public set logon(value: string) {
    this._logon = value;
  }
  public resetLogon() {
    this._logon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logonInput() {
    return this._logon;
  }

  // pw_failure - computed: false, optional: true, required: false
  private _pwFailure?: number; 
  public get pwFailure() {
    return this.getNumberAttribute('pw_failure');
  }
  public set pwFailure(value: number) {
    this._pwFailure = value;
  }
  public resetPwFailure() {
    this._pwFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pwFailureInput() {
    return this._pwFailure;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}

export class DataThunderAamAuthenticationPasswordRetryOperOperEntryListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderAamAuthenticationPasswordRetryOperOperEntryListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderAamAuthenticationPasswordRetryOperOperEntryListStructOutputReference {
    return new DataThunderAamAuthenticationPasswordRetryOperOperEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderAamAuthenticationPasswordRetryOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_password_retry_oper#logon_name DataThunderAamAuthenticationPasswordRetryOper#logon_name}
  */
  readonly logonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_password_retry_oper#name DataThunderAamAuthenticationPasswordRetryOper#name}
  */
  readonly name?: string;
  /**
  * entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_password_retry_oper#entry_list DataThunderAamAuthenticationPasswordRetryOper#entry_list}
  */
  readonly entryList?: DataThunderAamAuthenticationPasswordRetryOperOperEntryListStruct[] | cdktf.IResolvable;
}

export function dataThunderAamAuthenticationPasswordRetryOperOperToTerraform(struct?: DataThunderAamAuthenticationPasswordRetryOperOperOutputReference | DataThunderAamAuthenticationPasswordRetryOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logon_name: cdktf.stringToTerraform(struct!.logonName),
    name: cdktf.stringToTerraform(struct!.name),
    entry_list: cdktf.listMapper(dataThunderAamAuthenticationPasswordRetryOperOperEntryListStructToTerraform, true)(struct!.entryList),
  }
}


export function dataThunderAamAuthenticationPasswordRetryOperOperToHclTerraform(struct?: DataThunderAamAuthenticationPasswordRetryOperOperOutputReference | DataThunderAamAuthenticationPasswordRetryOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logon_name: {
      value: cdktf.stringToHclTerraform(struct!.logonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entry_list: {
      value: cdktf.listMapperHcl(dataThunderAamAuthenticationPasswordRetryOperOperEntryListStructToHclTerraform, true)(struct!.entryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAamAuthenticationPasswordRetryOperOperEntryListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationPasswordRetryOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationPasswordRetryOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logonName = this._logonName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._entryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryList = this._entryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationPasswordRetryOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logonName = undefined;
      this._name = undefined;
      this._entryList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logonName = value.logonName;
      this._name = value.name;
      this._entryList.internalValue = value.entryList;
    }
  }

  // logon_name - computed: false, optional: true, required: false
  private _logonName?: string; 
  public get logonName() {
    return this.getStringAttribute('logon_name');
  }
  public set logonName(value: string) {
    this._logonName = value;
  }
  public resetLogonName() {
    this._logonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logonNameInput() {
    return this._logonName;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // entry_list - computed: false, optional: true, required: false
  private _entryList = new DataThunderAamAuthenticationPasswordRetryOperOperEntryListStructList(this, "entry_list", false);
  public get entryList() {
    return this._entryList;
  }
  public putEntryList(value: DataThunderAamAuthenticationPasswordRetryOperOperEntryListStruct[] | cdktf.IResolvable) {
    this._entryList.internalValue = value;
  }
  public resetEntryList() {
    this._entryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryListInput() {
    return this._entryList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_password_retry_oper thunder_aam_authentication_password_retry_oper}
*/
export class DataThunderAamAuthenticationPasswordRetryOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_password_retry_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamAuthenticationPasswordRetryOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamAuthenticationPasswordRetryOper to import
  * @param importFromId The id of the existing DataThunderAamAuthenticationPasswordRetryOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_password_retry_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamAuthenticationPasswordRetryOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_password_retry_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_password_retry_oper thunder_aam_authentication_password_retry_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamAuthenticationPasswordRetryOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamAuthenticationPasswordRetryOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_password_retry_oper',
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
  private _oper = new DataThunderAamAuthenticationPasswordRetryOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderAamAuthenticationPasswordRetryOperOper) {
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
      oper: dataThunderAamAuthenticationPasswordRetryOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderAamAuthenticationPasswordRetryOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationPasswordRetryOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
