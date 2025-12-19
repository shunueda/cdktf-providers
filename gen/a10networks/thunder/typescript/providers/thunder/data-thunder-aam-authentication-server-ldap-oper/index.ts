// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamAuthenticationServerLdapOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_oper#id DataThunderAamAuthenticationServerLdapOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_oper#oper DataThunderAamAuthenticationServerLdapOper#oper}
  */
  readonly oper?: DataThunderAamAuthenticationServerLdapOperOper;
}
export interface DataThunderAamAuthenticationServerLdapOperOperLdapsServerListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_oper#ldap_uri DataThunderAamAuthenticationServerLdapOper#ldap_uri}
  */
  readonly ldapUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_oper#ldaps_idle_conn_fd_list DataThunderAamAuthenticationServerLdapOper#ldaps_idle_conn_fd_list}
  */
  readonly ldapsIdleConnFdList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_oper#ldaps_idle_conn_num DataThunderAamAuthenticationServerLdapOper#ldaps_idle_conn_num}
  */
  readonly ldapsIdleConnNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_oper#ldaps_inuse_conn_fd_list DataThunderAamAuthenticationServerLdapOper#ldaps_inuse_conn_fd_list}
  */
  readonly ldapsInuseConnFdList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_oper#ldaps_inuse_conn_num DataThunderAamAuthenticationServerLdapOper#ldaps_inuse_conn_num}
  */
  readonly ldapsInuseConnNum?: number;
}

export function dataThunderAamAuthenticationServerLdapOperOperLdapsServerListStructToTerraform(struct?: DataThunderAamAuthenticationServerLdapOperOperLdapsServerListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ldap_uri: cdktf.stringToTerraform(struct!.ldapUri),
    ldaps_idle_conn_fd_list: cdktf.stringToTerraform(struct!.ldapsIdleConnFdList),
    ldaps_idle_conn_num: cdktf.numberToTerraform(struct!.ldapsIdleConnNum),
    ldaps_inuse_conn_fd_list: cdktf.stringToTerraform(struct!.ldapsInuseConnFdList),
    ldaps_inuse_conn_num: cdktf.numberToTerraform(struct!.ldapsInuseConnNum),
  }
}


export function dataThunderAamAuthenticationServerLdapOperOperLdapsServerListStructToHclTerraform(struct?: DataThunderAamAuthenticationServerLdapOperOperLdapsServerListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ldap_uri: {
      value: cdktf.stringToHclTerraform(struct!.ldapUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ldaps_idle_conn_fd_list: {
      value: cdktf.stringToHclTerraform(struct!.ldapsIdleConnFdList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ldaps_idle_conn_num: {
      value: cdktf.numberToHclTerraform(struct!.ldapsIdleConnNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ldaps_inuse_conn_fd_list: {
      value: cdktf.stringToHclTerraform(struct!.ldapsInuseConnFdList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ldaps_inuse_conn_num: {
      value: cdktf.numberToHclTerraform(struct!.ldapsInuseConnNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationServerLdapOperOperLdapsServerListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderAamAuthenticationServerLdapOperOperLdapsServerListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ldapUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapUri = this._ldapUri;
    }
    if (this._ldapsIdleConnFdList !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapsIdleConnFdList = this._ldapsIdleConnFdList;
    }
    if (this._ldapsIdleConnNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapsIdleConnNum = this._ldapsIdleConnNum;
    }
    if (this._ldapsInuseConnFdList !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapsInuseConnFdList = this._ldapsInuseConnFdList;
    }
    if (this._ldapsInuseConnNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapsInuseConnNum = this._ldapsInuseConnNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationServerLdapOperOperLdapsServerListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ldapUri = undefined;
      this._ldapsIdleConnFdList = undefined;
      this._ldapsIdleConnNum = undefined;
      this._ldapsInuseConnFdList = undefined;
      this._ldapsInuseConnNum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ldapUri = value.ldapUri;
      this._ldapsIdleConnFdList = value.ldapsIdleConnFdList;
      this._ldapsIdleConnNum = value.ldapsIdleConnNum;
      this._ldapsInuseConnFdList = value.ldapsInuseConnFdList;
      this._ldapsInuseConnNum = value.ldapsInuseConnNum;
    }
  }

  // ldap_uri - computed: false, optional: true, required: false
  private _ldapUri?: string; 
  public get ldapUri() {
    return this.getStringAttribute('ldap_uri');
  }
  public set ldapUri(value: string) {
    this._ldapUri = value;
  }
  public resetLdapUri() {
    this._ldapUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapUriInput() {
    return this._ldapUri;
  }

  // ldaps_idle_conn_fd_list - computed: false, optional: true, required: false
  private _ldapsIdleConnFdList?: string; 
  public get ldapsIdleConnFdList() {
    return this.getStringAttribute('ldaps_idle_conn_fd_list');
  }
  public set ldapsIdleConnFdList(value: string) {
    this._ldapsIdleConnFdList = value;
  }
  public resetLdapsIdleConnFdList() {
    this._ldapsIdleConnFdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapsIdleConnFdListInput() {
    return this._ldapsIdleConnFdList;
  }

  // ldaps_idle_conn_num - computed: false, optional: true, required: false
  private _ldapsIdleConnNum?: number; 
  public get ldapsIdleConnNum() {
    return this.getNumberAttribute('ldaps_idle_conn_num');
  }
  public set ldapsIdleConnNum(value: number) {
    this._ldapsIdleConnNum = value;
  }
  public resetLdapsIdleConnNum() {
    this._ldapsIdleConnNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapsIdleConnNumInput() {
    return this._ldapsIdleConnNum;
  }

  // ldaps_inuse_conn_fd_list - computed: false, optional: true, required: false
  private _ldapsInuseConnFdList?: string; 
  public get ldapsInuseConnFdList() {
    return this.getStringAttribute('ldaps_inuse_conn_fd_list');
  }
  public set ldapsInuseConnFdList(value: string) {
    this._ldapsInuseConnFdList = value;
  }
  public resetLdapsInuseConnFdList() {
    this._ldapsInuseConnFdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapsInuseConnFdListInput() {
    return this._ldapsInuseConnFdList;
  }

  // ldaps_inuse_conn_num - computed: false, optional: true, required: false
  private _ldapsInuseConnNum?: number; 
  public get ldapsInuseConnNum() {
    return this.getNumberAttribute('ldaps_inuse_conn_num');
  }
  public set ldapsInuseConnNum(value: number) {
    this._ldapsInuseConnNum = value;
  }
  public resetLdapsInuseConnNum() {
    this._ldapsInuseConnNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapsInuseConnNumInput() {
    return this._ldapsInuseConnNum;
  }
}

export class DataThunderAamAuthenticationServerLdapOperOperLdapsServerListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderAamAuthenticationServerLdapOperOperLdapsServerListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderAamAuthenticationServerLdapOperOperLdapsServerListStructOutputReference {
    return new DataThunderAamAuthenticationServerLdapOperOperLdapsServerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderAamAuthenticationServerLdapOperOper {
  /**
  * ldaps_server_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_oper#ldaps_server_list DataThunderAamAuthenticationServerLdapOper#ldaps_server_list}
  */
  readonly ldapsServerList?: DataThunderAamAuthenticationServerLdapOperOperLdapsServerListStruct[] | cdktf.IResolvable;
}

export function dataThunderAamAuthenticationServerLdapOperOperToTerraform(struct?: DataThunderAamAuthenticationServerLdapOperOperOutputReference | DataThunderAamAuthenticationServerLdapOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ldaps_server_list: cdktf.listMapper(dataThunderAamAuthenticationServerLdapOperOperLdapsServerListStructToTerraform, true)(struct!.ldapsServerList),
  }
}


export function dataThunderAamAuthenticationServerLdapOperOperToHclTerraform(struct?: DataThunderAamAuthenticationServerLdapOperOperOutputReference | DataThunderAamAuthenticationServerLdapOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ldaps_server_list: {
      value: cdktf.listMapperHcl(dataThunderAamAuthenticationServerLdapOperOperLdapsServerListStructToHclTerraform, true)(struct!.ldapsServerList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAamAuthenticationServerLdapOperOperLdapsServerListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationServerLdapOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationServerLdapOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ldapsServerList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapsServerList = this._ldapsServerList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationServerLdapOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ldapsServerList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ldapsServerList.internalValue = value.ldapsServerList;
    }
  }

  // ldaps_server_list - computed: false, optional: true, required: false
  private _ldapsServerList = new DataThunderAamAuthenticationServerLdapOperOperLdapsServerListStructList(this, "ldaps_server_list", false);
  public get ldapsServerList() {
    return this._ldapsServerList;
  }
  public putLdapsServerList(value: DataThunderAamAuthenticationServerLdapOperOperLdapsServerListStruct[] | cdktf.IResolvable) {
    this._ldapsServerList.internalValue = value;
  }
  public resetLdapsServerList() {
    this._ldapsServerList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapsServerListInput() {
    return this._ldapsServerList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_oper thunder_aam_authentication_server_ldap_oper}
*/
export class DataThunderAamAuthenticationServerLdapOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_server_ldap_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamAuthenticationServerLdapOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamAuthenticationServerLdapOper to import
  * @param importFromId The id of the existing DataThunderAamAuthenticationServerLdapOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamAuthenticationServerLdapOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_server_ldap_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_oper thunder_aam_authentication_server_ldap_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamAuthenticationServerLdapOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamAuthenticationServerLdapOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_server_ldap_oper',
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
  private _oper = new DataThunderAamAuthenticationServerLdapOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderAamAuthenticationServerLdapOperOper) {
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
      oper: dataThunderAamAuthenticationServerLdapOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderAamAuthenticationServerLdapOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationServerLdapOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
