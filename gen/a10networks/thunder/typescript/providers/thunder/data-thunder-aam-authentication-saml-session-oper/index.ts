// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_session_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamAuthenticationSamlSessionOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_session_oper#id DataThunderAamAuthenticationSamlSessionOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_session_oper#oper DataThunderAamAuthenticationSamlSessionOper#oper}
  */
  readonly oper?: DataThunderAamAuthenticationSamlSessionOperOper;
}
export interface DataThunderAamAuthenticationSamlSessionOperOperSpListSessionListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_session_oper#auth_instant DataThunderAamAuthenticationSamlSessionOper#auth_instant}
  */
  readonly authInstant?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_session_oper#client_addr DataThunderAamAuthenticationSamlSessionOper#client_addr}
  */
  readonly clientAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_session_oper#expire_time DataThunderAamAuthenticationSamlSessionOper#expire_time}
  */
  readonly expireTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_session_oper#id_provider DataThunderAamAuthenticationSamlSessionOper#id_provider}
  */
  readonly idProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_session_oper#nameid DataThunderAamAuthenticationSamlSessionOper#nameid}
  */
  readonly nameid?: string;
}

export function dataThunderAamAuthenticationSamlSessionOperOperSpListSessionListStructToTerraform(struct?: DataThunderAamAuthenticationSamlSessionOperOperSpListSessionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_instant: cdktf.stringToTerraform(struct!.authInstant),
    client_addr: cdktf.stringToTerraform(struct!.clientAddr),
    expire_time: cdktf.stringToTerraform(struct!.expireTime),
    id_provider: cdktf.stringToTerraform(struct!.idProvider),
    nameid: cdktf.stringToTerraform(struct!.nameid),
  }
}


export function dataThunderAamAuthenticationSamlSessionOperOperSpListSessionListStructToHclTerraform(struct?: DataThunderAamAuthenticationSamlSessionOperOperSpListSessionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_instant: {
      value: cdktf.stringToHclTerraform(struct!.authInstant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_addr: {
      value: cdktf.stringToHclTerraform(struct!.clientAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expire_time: {
      value: cdktf.stringToHclTerraform(struct!.expireTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id_provider: {
      value: cdktf.stringToHclTerraform(struct!.idProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nameid: {
      value: cdktf.stringToHclTerraform(struct!.nameid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationSamlSessionOperOperSpListSessionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderAamAuthenticationSamlSessionOperOperSpListSessionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authInstant !== undefined) {
      hasAnyValues = true;
      internalValueResult.authInstant = this._authInstant;
    }
    if (this._clientAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAddr = this._clientAddr;
    }
    if (this._expireTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.expireTime = this._expireTime;
    }
    if (this._idProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.idProvider = this._idProvider;
    }
    if (this._nameid !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameid = this._nameid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationSamlSessionOperOperSpListSessionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authInstant = undefined;
      this._clientAddr = undefined;
      this._expireTime = undefined;
      this._idProvider = undefined;
      this._nameid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authInstant = value.authInstant;
      this._clientAddr = value.clientAddr;
      this._expireTime = value.expireTime;
      this._idProvider = value.idProvider;
      this._nameid = value.nameid;
    }
  }

  // auth_instant - computed: false, optional: true, required: false
  private _authInstant?: string; 
  public get authInstant() {
    return this.getStringAttribute('auth_instant');
  }
  public set authInstant(value: string) {
    this._authInstant = value;
  }
  public resetAuthInstant() {
    this._authInstant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInstantInput() {
    return this._authInstant;
  }

  // client_addr - computed: false, optional: true, required: false
  private _clientAddr?: string; 
  public get clientAddr() {
    return this.getStringAttribute('client_addr');
  }
  public set clientAddr(value: string) {
    this._clientAddr = value;
  }
  public resetClientAddr() {
    this._clientAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAddrInput() {
    return this._clientAddr;
  }

  // expire_time - computed: false, optional: true, required: false
  private _expireTime?: string; 
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }
  public set expireTime(value: string) {
    this._expireTime = value;
  }
  public resetExpireTime() {
    this._expireTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireTimeInput() {
    return this._expireTime;
  }

  // id_provider - computed: false, optional: true, required: false
  private _idProvider?: string; 
  public get idProvider() {
    return this.getStringAttribute('id_provider');
  }
  public set idProvider(value: string) {
    this._idProvider = value;
  }
  public resetIdProvider() {
    this._idProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idProviderInput() {
    return this._idProvider;
  }

  // nameid - computed: false, optional: true, required: false
  private _nameid?: string; 
  public get nameid() {
    return this.getStringAttribute('nameid');
  }
  public set nameid(value: string) {
    this._nameid = value;
  }
  public resetNameid() {
    this._nameid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameidInput() {
    return this._nameid;
  }
}

export class DataThunderAamAuthenticationSamlSessionOperOperSpListSessionListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderAamAuthenticationSamlSessionOperOperSpListSessionListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderAamAuthenticationSamlSessionOperOperSpListSessionListStructOutputReference {
    return new DataThunderAamAuthenticationSamlSessionOperOperSpListSessionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderAamAuthenticationSamlSessionOperOperSpListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_session_oper#session_count DataThunderAamAuthenticationSamlSessionOper#session_count}
  */
  readonly sessionCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_session_oper#sp_id DataThunderAamAuthenticationSamlSessionOper#sp_id}
  */
  readonly spId?: string;
  /**
  * session_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_session_oper#session_list DataThunderAamAuthenticationSamlSessionOper#session_list}
  */
  readonly sessionList?: DataThunderAamAuthenticationSamlSessionOperOperSpListSessionListStruct[] | cdktf.IResolvable;
}

export function dataThunderAamAuthenticationSamlSessionOperOperSpListStructToTerraform(struct?: DataThunderAamAuthenticationSamlSessionOperOperSpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    session_count: cdktf.numberToTerraform(struct!.sessionCount),
    sp_id: cdktf.stringToTerraform(struct!.spId),
    session_list: cdktf.listMapper(dataThunderAamAuthenticationSamlSessionOperOperSpListSessionListStructToTerraform, true)(struct!.sessionList),
  }
}


export function dataThunderAamAuthenticationSamlSessionOperOperSpListStructToHclTerraform(struct?: DataThunderAamAuthenticationSamlSessionOperOperSpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    session_count: {
      value: cdktf.numberToHclTerraform(struct!.sessionCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sp_id: {
      value: cdktf.stringToHclTerraform(struct!.spId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_list: {
      value: cdktf.listMapperHcl(dataThunderAamAuthenticationSamlSessionOperOperSpListSessionListStructToHclTerraform, true)(struct!.sessionList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAamAuthenticationSamlSessionOperOperSpListSessionListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationSamlSessionOperOperSpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderAamAuthenticationSamlSessionOperOperSpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sessionCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCount = this._sessionCount;
    }
    if (this._spId !== undefined) {
      hasAnyValues = true;
      internalValueResult.spId = this._spId;
    }
    if (this._sessionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionList = this._sessionList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationSamlSessionOperOperSpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sessionCount = undefined;
      this._spId = undefined;
      this._sessionList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sessionCount = value.sessionCount;
      this._spId = value.spId;
      this._sessionList.internalValue = value.sessionList;
    }
  }

  // session_count - computed: false, optional: true, required: false
  private _sessionCount?: number; 
  public get sessionCount() {
    return this.getNumberAttribute('session_count');
  }
  public set sessionCount(value: number) {
    this._sessionCount = value;
  }
  public resetSessionCount() {
    this._sessionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCountInput() {
    return this._sessionCount;
  }

  // sp_id - computed: false, optional: true, required: false
  private _spId?: string; 
  public get spId() {
    return this.getStringAttribute('sp_id');
  }
  public set spId(value: string) {
    this._spId = value;
  }
  public resetSpId() {
    this._spId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spIdInput() {
    return this._spId;
  }

  // session_list - computed: false, optional: true, required: false
  private _sessionList = new DataThunderAamAuthenticationSamlSessionOperOperSpListSessionListStructList(this, "session_list", false);
  public get sessionList() {
    return this._sessionList;
  }
  public putSessionList(value: DataThunderAamAuthenticationSamlSessionOperOperSpListSessionListStruct[] | cdktf.IResolvable) {
    this._sessionList.internalValue = value;
  }
  public resetSessionList() {
    this._sessionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionListInput() {
    return this._sessionList.internalValue;
  }
}

export class DataThunderAamAuthenticationSamlSessionOperOperSpListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderAamAuthenticationSamlSessionOperOperSpListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderAamAuthenticationSamlSessionOperOperSpListStructOutputReference {
    return new DataThunderAamAuthenticationSamlSessionOperOperSpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderAamAuthenticationSamlSessionOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_session_oper#name DataThunderAamAuthenticationSamlSessionOper#name}
  */
  readonly name?: string;
  /**
  * sp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_session_oper#sp_list DataThunderAamAuthenticationSamlSessionOper#sp_list}
  */
  readonly spList?: DataThunderAamAuthenticationSamlSessionOperOperSpListStruct[] | cdktf.IResolvable;
}

export function dataThunderAamAuthenticationSamlSessionOperOperToTerraform(struct?: DataThunderAamAuthenticationSamlSessionOperOperOutputReference | DataThunderAamAuthenticationSamlSessionOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    sp_list: cdktf.listMapper(dataThunderAamAuthenticationSamlSessionOperOperSpListStructToTerraform, true)(struct!.spList),
  }
}


export function dataThunderAamAuthenticationSamlSessionOperOperToHclTerraform(struct?: DataThunderAamAuthenticationSamlSessionOperOperOutputReference | DataThunderAamAuthenticationSamlSessionOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sp_list: {
      value: cdktf.listMapperHcl(dataThunderAamAuthenticationSamlSessionOperOperSpListStructToHclTerraform, true)(struct!.spList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAamAuthenticationSamlSessionOperOperSpListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationSamlSessionOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationSamlSessionOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._spList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spList = this._spList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationSamlSessionOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._spList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._spList.internalValue = value.spList;
    }
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

  // sp_list - computed: false, optional: true, required: false
  private _spList = new DataThunderAamAuthenticationSamlSessionOperOperSpListStructList(this, "sp_list", false);
  public get spList() {
    return this._spList;
  }
  public putSpList(value: DataThunderAamAuthenticationSamlSessionOperOperSpListStruct[] | cdktf.IResolvable) {
    this._spList.internalValue = value;
  }
  public resetSpList() {
    this._spList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spListInput() {
    return this._spList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_session_oper thunder_aam_authentication_saml_session_oper}
*/
export class DataThunderAamAuthenticationSamlSessionOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_saml_session_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamAuthenticationSamlSessionOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamAuthenticationSamlSessionOper to import
  * @param importFromId The id of the existing DataThunderAamAuthenticationSamlSessionOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_session_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamAuthenticationSamlSessionOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_saml_session_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_session_oper thunder_aam_authentication_saml_session_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamAuthenticationSamlSessionOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamAuthenticationSamlSessionOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_saml_session_oper',
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
  private _oper = new DataThunderAamAuthenticationSamlSessionOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderAamAuthenticationSamlSessionOperOper) {
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
      oper: dataThunderAamAuthenticationSamlSessionOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderAamAuthenticationSamlSessionOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationSamlSessionOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
