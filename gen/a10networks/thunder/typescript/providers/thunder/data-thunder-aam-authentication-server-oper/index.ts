// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamAuthenticationServerOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#id DataThunderAamAuthenticationServerOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ldap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#ldap DataThunderAamAuthenticationServerOper#ldap}
  */
  readonly ldap?: DataThunderAamAuthenticationServerOperLdap;
  /**
  * ocsp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#ocsp DataThunderAamAuthenticationServerOper#ocsp}
  */
  readonly ocsp?: DataThunderAamAuthenticationServerOperOcsp;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#oper DataThunderAamAuthenticationServerOper#oper}
  */
  readonly oper?: DataThunderAamAuthenticationServerOperOper;
  /**
  * windows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#windows DataThunderAamAuthenticationServerOper#windows}
  */
  readonly windows?: DataThunderAamAuthenticationServerOperWindows;
}
export interface DataThunderAamAuthenticationServerOperLdapOperLdapsServerListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#ldap_uri DataThunderAamAuthenticationServerOper#ldap_uri}
  */
  readonly ldapUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#ldaps_idle_conn_fd_list DataThunderAamAuthenticationServerOper#ldaps_idle_conn_fd_list}
  */
  readonly ldapsIdleConnFdList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#ldaps_idle_conn_num DataThunderAamAuthenticationServerOper#ldaps_idle_conn_num}
  */
  readonly ldapsIdleConnNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#ldaps_inuse_conn_fd_list DataThunderAamAuthenticationServerOper#ldaps_inuse_conn_fd_list}
  */
  readonly ldapsInuseConnFdList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#ldaps_inuse_conn_num DataThunderAamAuthenticationServerOper#ldaps_inuse_conn_num}
  */
  readonly ldapsInuseConnNum?: number;
}

export function dataThunderAamAuthenticationServerOperLdapOperLdapsServerListStructToTerraform(struct?: DataThunderAamAuthenticationServerOperLdapOperLdapsServerListStruct | cdktf.IResolvable): any {
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


export function dataThunderAamAuthenticationServerOperLdapOperLdapsServerListStructToHclTerraform(struct?: DataThunderAamAuthenticationServerOperLdapOperLdapsServerListStruct | cdktf.IResolvable): any {
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

export class DataThunderAamAuthenticationServerOperLdapOperLdapsServerListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderAamAuthenticationServerOperLdapOperLdapsServerListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderAamAuthenticationServerOperLdapOperLdapsServerListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderAamAuthenticationServerOperLdapOperLdapsServerListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderAamAuthenticationServerOperLdapOperLdapsServerListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderAamAuthenticationServerOperLdapOperLdapsServerListStructOutputReference {
    return new DataThunderAamAuthenticationServerOperLdapOperLdapsServerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderAamAuthenticationServerOperLdapOper {
  /**
  * ldaps_server_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#ldaps_server_list DataThunderAamAuthenticationServerOper#ldaps_server_list}
  */
  readonly ldapsServerList?: DataThunderAamAuthenticationServerOperLdapOperLdapsServerListStruct[] | cdktf.IResolvable;
}

export function dataThunderAamAuthenticationServerOperLdapOperToTerraform(struct?: DataThunderAamAuthenticationServerOperLdapOperOutputReference | DataThunderAamAuthenticationServerOperLdapOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ldaps_server_list: cdktf.listMapper(dataThunderAamAuthenticationServerOperLdapOperLdapsServerListStructToTerraform, true)(struct!.ldapsServerList),
  }
}


export function dataThunderAamAuthenticationServerOperLdapOperToHclTerraform(struct?: DataThunderAamAuthenticationServerOperLdapOperOutputReference | DataThunderAamAuthenticationServerOperLdapOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ldaps_server_list: {
      value: cdktf.listMapperHcl(dataThunderAamAuthenticationServerOperLdapOperLdapsServerListStructToHclTerraform, true)(struct!.ldapsServerList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAamAuthenticationServerOperLdapOperLdapsServerListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationServerOperLdapOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationServerOperLdapOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ldapsServerList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapsServerList = this._ldapsServerList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationServerOperLdapOper | undefined) {
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
  private _ldapsServerList = new DataThunderAamAuthenticationServerOperLdapOperLdapsServerListStructList(this, "ldaps_server_list", false);
  public get ldapsServerList() {
    return this._ldapsServerList;
  }
  public putLdapsServerList(value: DataThunderAamAuthenticationServerOperLdapOperLdapsServerListStruct[] | cdktf.IResolvable) {
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
export interface DataThunderAamAuthenticationServerOperLdap {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#oper DataThunderAamAuthenticationServerOper#oper}
  */
  readonly oper?: DataThunderAamAuthenticationServerOperLdapOper;
}

export function dataThunderAamAuthenticationServerOperLdapToTerraform(struct?: DataThunderAamAuthenticationServerOperLdapOutputReference | DataThunderAamAuthenticationServerOperLdap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderAamAuthenticationServerOperLdapOperToTerraform(struct!.oper),
  }
}


export function dataThunderAamAuthenticationServerOperLdapToHclTerraform(struct?: DataThunderAamAuthenticationServerOperLdapOutputReference | DataThunderAamAuthenticationServerOperLdap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderAamAuthenticationServerOperLdapOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAamAuthenticationServerOperLdapOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationServerOperLdapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationServerOperLdap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationServerOperLdap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderAamAuthenticationServerOperLdapOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderAamAuthenticationServerOperLdapOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}
export interface DataThunderAamAuthenticationServerOperOcspOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#name DataThunderAamAuthenticationServerOper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#stats_clear_type DataThunderAamAuthenticationServerOper#stats_clear_type}
  */
  readonly statsClearType?: string;
}

export function dataThunderAamAuthenticationServerOperOcspOperToTerraform(struct?: DataThunderAamAuthenticationServerOperOcspOperOutputReference | DataThunderAamAuthenticationServerOperOcspOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    stats_clear_type: cdktf.stringToTerraform(struct!.statsClearType),
  }
}


export function dataThunderAamAuthenticationServerOperOcspOperToHclTerraform(struct?: DataThunderAamAuthenticationServerOperOcspOperOutputReference | DataThunderAamAuthenticationServerOperOcspOper): any {
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
    stats_clear_type: {
      value: cdktf.stringToHclTerraform(struct!.statsClearType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationServerOperOcspOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationServerOperOcspOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._statsClearType !== undefined) {
      hasAnyValues = true;
      internalValueResult.statsClearType = this._statsClearType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationServerOperOcspOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._statsClearType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._statsClearType = value.statsClearType;
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

  // stats_clear_type - computed: false, optional: true, required: false
  private _statsClearType?: string; 
  public get statsClearType() {
    return this.getStringAttribute('stats_clear_type');
  }
  public set statsClearType(value: string) {
    this._statsClearType = value;
  }
  public resetStatsClearType() {
    this._statsClearType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsClearTypeInput() {
    return this._statsClearType;
  }
}
export interface DataThunderAamAuthenticationServerOperOcsp {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#oper DataThunderAamAuthenticationServerOper#oper}
  */
  readonly oper?: DataThunderAamAuthenticationServerOperOcspOper;
}

export function dataThunderAamAuthenticationServerOperOcspToTerraform(struct?: DataThunderAamAuthenticationServerOperOcspOutputReference | DataThunderAamAuthenticationServerOperOcsp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderAamAuthenticationServerOperOcspOperToTerraform(struct!.oper),
  }
}


export function dataThunderAamAuthenticationServerOperOcspToHclTerraform(struct?: DataThunderAamAuthenticationServerOperOcspOutputReference | DataThunderAamAuthenticationServerOperOcsp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderAamAuthenticationServerOperOcspOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAamAuthenticationServerOperOcspOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationServerOperOcspOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationServerOperOcsp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationServerOperOcsp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderAamAuthenticationServerOperOcspOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderAamAuthenticationServerOperOcspOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}
export interface DataThunderAamAuthenticationServerOperOperRserverListRportListSgListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#sg_name DataThunderAamAuthenticationServerOper#sg_name}
  */
  readonly sgName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#sg_state DataThunderAamAuthenticationServerOper#sg_state}
  */
  readonly sgState?: string;
}

export function dataThunderAamAuthenticationServerOperOperRserverListRportListSgListStructToTerraform(struct?: DataThunderAamAuthenticationServerOperOperRserverListRportListSgListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sg_name: cdktf.stringToTerraform(struct!.sgName),
    sg_state: cdktf.stringToTerraform(struct!.sgState),
  }
}


export function dataThunderAamAuthenticationServerOperOperRserverListRportListSgListStructToHclTerraform(struct?: DataThunderAamAuthenticationServerOperOperRserverListRportListSgListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sg_name: {
      value: cdktf.stringToHclTerraform(struct!.sgName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sg_state: {
      value: cdktf.stringToHclTerraform(struct!.sgState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationServerOperOperRserverListRportListSgListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderAamAuthenticationServerOperOperRserverListRportListSgListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sgName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sgName = this._sgName;
    }
    if (this._sgState !== undefined) {
      hasAnyValues = true;
      internalValueResult.sgState = this._sgState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationServerOperOperRserverListRportListSgListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sgName = undefined;
      this._sgState = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sgName = value.sgName;
      this._sgState = value.sgState;
    }
  }

  // sg_name - computed: false, optional: true, required: false
  private _sgName?: string; 
  public get sgName() {
    return this.getStringAttribute('sg_name');
  }
  public set sgName(value: string) {
    this._sgName = value;
  }
  public resetSgName() {
    this._sgName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgNameInput() {
    return this._sgName;
  }

  // sg_state - computed: false, optional: true, required: false
  private _sgState?: string; 
  public get sgState() {
    return this.getStringAttribute('sg_state');
  }
  public set sgState(value: string) {
    this._sgState = value;
  }
  public resetSgState() {
    this._sgState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgStateInput() {
    return this._sgState;
  }
}

export class DataThunderAamAuthenticationServerOperOperRserverListRportListSgListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderAamAuthenticationServerOperOperRserverListRportListSgListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderAamAuthenticationServerOperOperRserverListRportListSgListStructOutputReference {
    return new DataThunderAamAuthenticationServerOperOperRserverListRportListSgListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderAamAuthenticationServerOperOperRserverListRportListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#port DataThunderAamAuthenticationServerOper#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#port_hm DataThunderAamAuthenticationServerOper#port_hm}
  */
  readonly portHm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#port_max_conn DataThunderAamAuthenticationServerOper#port_max_conn}
  */
  readonly portMaxConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#port_state DataThunderAamAuthenticationServerOper#port_state}
  */
  readonly portState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#port_status DataThunderAamAuthenticationServerOper#port_status}
  */
  readonly portStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#port_weight DataThunderAamAuthenticationServerOper#port_weight}
  */
  readonly portWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#protocol DataThunderAamAuthenticationServerOper#protocol}
  */
  readonly protocol?: string;
  /**
  * sg_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#sg_list DataThunderAamAuthenticationServerOper#sg_list}
  */
  readonly sgList?: DataThunderAamAuthenticationServerOperOperRserverListRportListSgListStruct[] | cdktf.IResolvable;
}

export function dataThunderAamAuthenticationServerOperOperRserverListRportListStructToTerraform(struct?: DataThunderAamAuthenticationServerOperOperRserverListRportListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    port_hm: cdktf.stringToTerraform(struct!.portHm),
    port_max_conn: cdktf.numberToTerraform(struct!.portMaxConn),
    port_state: cdktf.stringToTerraform(struct!.portState),
    port_status: cdktf.stringToTerraform(struct!.portStatus),
    port_weight: cdktf.numberToTerraform(struct!.portWeight),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    sg_list: cdktf.listMapper(dataThunderAamAuthenticationServerOperOperRserverListRportListSgListStructToTerraform, true)(struct!.sgList),
  }
}


export function dataThunderAamAuthenticationServerOperOperRserverListRportListStructToHclTerraform(struct?: DataThunderAamAuthenticationServerOperOperRserverListRportListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_hm: {
      value: cdktf.stringToHclTerraform(struct!.portHm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_max_conn: {
      value: cdktf.numberToHclTerraform(struct!.portMaxConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_state: {
      value: cdktf.stringToHclTerraform(struct!.portState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_status: {
      value: cdktf.stringToHclTerraform(struct!.portStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_weight: {
      value: cdktf.numberToHclTerraform(struct!.portWeight),
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
    sg_list: {
      value: cdktf.listMapperHcl(dataThunderAamAuthenticationServerOperOperRserverListRportListSgListStructToHclTerraform, true)(struct!.sgList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAamAuthenticationServerOperOperRserverListRportListSgListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationServerOperOperRserverListRportListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderAamAuthenticationServerOperOperRserverListRportListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portHm !== undefined) {
      hasAnyValues = true;
      internalValueResult.portHm = this._portHm;
    }
    if (this._portMaxConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.portMaxConn = this._portMaxConn;
    }
    if (this._portState !== undefined) {
      hasAnyValues = true;
      internalValueResult.portState = this._portState;
    }
    if (this._portStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.portStatus = this._portStatus;
    }
    if (this._portWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.portWeight = this._portWeight;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sgList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sgList = this._sgList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationServerOperOperRserverListRportListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._portHm = undefined;
      this._portMaxConn = undefined;
      this._portState = undefined;
      this._portStatus = undefined;
      this._portWeight = undefined;
      this._protocol = undefined;
      this._sgList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._portHm = value.portHm;
      this._portMaxConn = value.portMaxConn;
      this._portState = value.portState;
      this._portStatus = value.portStatus;
      this._portWeight = value.portWeight;
      this._protocol = value.protocol;
      this._sgList.internalValue = value.sgList;
    }
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

  // port_hm - computed: false, optional: true, required: false
  private _portHm?: string; 
  public get portHm() {
    return this.getStringAttribute('port_hm');
  }
  public set portHm(value: string) {
    this._portHm = value;
  }
  public resetPortHm() {
    this._portHm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portHmInput() {
    return this._portHm;
  }

  // port_max_conn - computed: false, optional: true, required: false
  private _portMaxConn?: number; 
  public get portMaxConn() {
    return this.getNumberAttribute('port_max_conn');
  }
  public set portMaxConn(value: number) {
    this._portMaxConn = value;
  }
  public resetPortMaxConn() {
    this._portMaxConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portMaxConnInput() {
    return this._portMaxConn;
  }

  // port_state - computed: false, optional: true, required: false
  private _portState?: string; 
  public get portState() {
    return this.getStringAttribute('port_state');
  }
  public set portState(value: string) {
    this._portState = value;
  }
  public resetPortState() {
    this._portState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portStateInput() {
    return this._portState;
  }

  // port_status - computed: false, optional: true, required: false
  private _portStatus?: string; 
  public get portStatus() {
    return this.getStringAttribute('port_status');
  }
  public set portStatus(value: string) {
    this._portStatus = value;
  }
  public resetPortStatus() {
    this._portStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portStatusInput() {
    return this._portStatus;
  }

  // port_weight - computed: false, optional: true, required: false
  private _portWeight?: number; 
  public get portWeight() {
    return this.getNumberAttribute('port_weight');
  }
  public set portWeight(value: number) {
    this._portWeight = value;
  }
  public resetPortWeight() {
    this._portWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portWeightInput() {
    return this._portWeight;
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

  // sg_list - computed: false, optional: true, required: false
  private _sgList = new DataThunderAamAuthenticationServerOperOperRserverListRportListSgListStructList(this, "sg_list", false);
  public get sgList() {
    return this._sgList;
  }
  public putSgList(value: DataThunderAamAuthenticationServerOperOperRserverListRportListSgListStruct[] | cdktf.IResolvable) {
    this._sgList.internalValue = value;
  }
  public resetSgList() {
    this._sgList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgListInput() {
    return this._sgList.internalValue;
  }
}

export class DataThunderAamAuthenticationServerOperOperRserverListRportListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderAamAuthenticationServerOperOperRserverListRportListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderAamAuthenticationServerOperOperRserverListRportListStructOutputReference {
    return new DataThunderAamAuthenticationServerOperOperRserverListRportListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderAamAuthenticationServerOperOperRserverListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#hm DataThunderAamAuthenticationServerOper#hm}
  */
  readonly hm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#host DataThunderAamAuthenticationServerOper#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#ip DataThunderAamAuthenticationServerOper#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#max_conn DataThunderAamAuthenticationServerOper#max_conn}
  */
  readonly maxConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#server_name DataThunderAamAuthenticationServerOper#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#status DataThunderAamAuthenticationServerOper#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#weight DataThunderAamAuthenticationServerOper#weight}
  */
  readonly weight?: number;
  /**
  * rport_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#rport_list DataThunderAamAuthenticationServerOper#rport_list}
  */
  readonly rportList?: DataThunderAamAuthenticationServerOperOperRserverListRportListStruct[] | cdktf.IResolvable;
}

export function dataThunderAamAuthenticationServerOperOperRserverListStructToTerraform(struct?: DataThunderAamAuthenticationServerOperOperRserverListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hm: cdktf.stringToTerraform(struct!.hm),
    host: cdktf.stringToTerraform(struct!.host),
    ip: cdktf.stringToTerraform(struct!.ip),
    max_conn: cdktf.numberToTerraform(struct!.maxConn),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    status: cdktf.stringToTerraform(struct!.status),
    weight: cdktf.numberToTerraform(struct!.weight),
    rport_list: cdktf.listMapper(dataThunderAamAuthenticationServerOperOperRserverListRportListStructToTerraform, true)(struct!.rportList),
  }
}


export function dataThunderAamAuthenticationServerOperOperRserverListStructToHclTerraform(struct?: DataThunderAamAuthenticationServerOperOperRserverListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hm: {
      value: cdktf.stringToHclTerraform(struct!.hm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
    max_conn: {
      value: cdktf.numberToHclTerraform(struct!.maxConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
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
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rport_list: {
      value: cdktf.listMapperHcl(dataThunderAamAuthenticationServerOperOperRserverListRportListStructToHclTerraform, true)(struct!.rportList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAamAuthenticationServerOperOperRserverListRportListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationServerOperOperRserverListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderAamAuthenticationServerOperOperRserverListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hm !== undefined) {
      hasAnyValues = true;
      internalValueResult.hm = this._hm;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._maxConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConn = this._maxConn;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._rportList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rportList = this._rportList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationServerOperOperRserverListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hm = undefined;
      this._host = undefined;
      this._ip = undefined;
      this._maxConn = undefined;
      this._serverName = undefined;
      this._status = undefined;
      this._weight = undefined;
      this._rportList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hm = value.hm;
      this._host = value.host;
      this._ip = value.ip;
      this._maxConn = value.maxConn;
      this._serverName = value.serverName;
      this._status = value.status;
      this._weight = value.weight;
      this._rportList.internalValue = value.rportList;
    }
  }

  // hm - computed: false, optional: true, required: false
  private _hm?: string; 
  public get hm() {
    return this.getStringAttribute('hm');
  }
  public set hm(value: string) {
    this._hm = value;
  }
  public resetHm() {
    this._hm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmInput() {
    return this._hm;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // max_conn - computed: false, optional: true, required: false
  private _maxConn?: number; 
  public get maxConn() {
    return this.getNumberAttribute('max_conn');
  }
  public set maxConn(value: number) {
    this._maxConn = value;
  }
  public resetMaxConn() {
    this._maxConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnInput() {
    return this._maxConn;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
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

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // rport_list - computed: false, optional: true, required: false
  private _rportList = new DataThunderAamAuthenticationServerOperOperRserverListRportListStructList(this, "rport_list", false);
  public get rportList() {
    return this._rportList;
  }
  public putRportList(value: DataThunderAamAuthenticationServerOperOperRserverListRportListStruct[] | cdktf.IResolvable) {
    this._rportList.internalValue = value;
  }
  public resetRportList() {
    this._rportList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rportListInput() {
    return this._rportList.internalValue;
  }
}

export class DataThunderAamAuthenticationServerOperOperRserverListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderAamAuthenticationServerOperOperRserverListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderAamAuthenticationServerOperOperRserverListStructOutputReference {
    return new DataThunderAamAuthenticationServerOperOperRserverListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderAamAuthenticationServerOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#get_count DataThunderAamAuthenticationServerOper#get_count}
  */
  readonly fetchCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#name DataThunderAamAuthenticationServerOper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#part_id DataThunderAamAuthenticationServerOper#part_id}
  */
  readonly partId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#rport_count DataThunderAamAuthenticationServerOper#rport_count}
  */
  readonly rportCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#rserver_count DataThunderAamAuthenticationServerOper#rserver_count}
  */
  readonly rserverCount?: number;
  /**
  * rserver_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#rserver_list DataThunderAamAuthenticationServerOper#rserver_list}
  */
  readonly rserverList?: DataThunderAamAuthenticationServerOperOperRserverListStruct[] | cdktf.IResolvable;
}

export function dataThunderAamAuthenticationServerOperOperToTerraform(struct?: DataThunderAamAuthenticationServerOperOperOutputReference | DataThunderAamAuthenticationServerOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    get_count: cdktf.stringToTerraform(struct!.fetchCount),
    name: cdktf.stringToTerraform(struct!.name),
    part_id: cdktf.numberToTerraform(struct!.partId),
    rport_count: cdktf.numberToTerraform(struct!.rportCount),
    rserver_count: cdktf.numberToTerraform(struct!.rserverCount),
    rserver_list: cdktf.listMapper(dataThunderAamAuthenticationServerOperOperRserverListStructToTerraform, true)(struct!.rserverList),
  }
}


export function dataThunderAamAuthenticationServerOperOperToHclTerraform(struct?: DataThunderAamAuthenticationServerOperOperOutputReference | DataThunderAamAuthenticationServerOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    get_count: {
      value: cdktf.stringToHclTerraform(struct!.fetchCount),
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
    part_id: {
      value: cdktf.numberToHclTerraform(struct!.partId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rport_count: {
      value: cdktf.numberToHclTerraform(struct!.rportCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rserver_count: {
      value: cdktf.numberToHclTerraform(struct!.rserverCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rserver_list: {
      value: cdktf.listMapperHcl(dataThunderAamAuthenticationServerOperOperRserverListStructToHclTerraform, true)(struct!.rserverList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAamAuthenticationServerOperOperRserverListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationServerOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationServerOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._getCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchCount = this._getCount;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._partId !== undefined) {
      hasAnyValues = true;
      internalValueResult.partId = this._partId;
    }
    if (this._rportCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.rportCount = this._rportCount;
    }
    if (this._rserverCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.rserverCount = this._rserverCount;
    }
    if (this._rserverList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rserverList = this._rserverList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationServerOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._getCount = undefined;
      this._name = undefined;
      this._partId = undefined;
      this._rportCount = undefined;
      this._rserverCount = undefined;
      this._rserverList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._getCount = value.fetchCount;
      this._name = value.name;
      this._partId = value.partId;
      this._rportCount = value.rportCount;
      this._rserverCount = value.rserverCount;
      this._rserverList.internalValue = value.rserverList;
    }
  }

  // get_count - computed: false, optional: true, required: false
  private _getCount?: string; 
  public get fetchCount() {
    return this.getStringAttribute('get_count');
  }
  public set fetchCount(value: string) {
    this._getCount = value;
  }
  public resetFetchCount() {
    this._getCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchCountInput() {
    return this._getCount;
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

  // part_id - computed: false, optional: true, required: false
  private _partId?: number; 
  public get partId() {
    return this.getNumberAttribute('part_id');
  }
  public set partId(value: number) {
    this._partId = value;
  }
  public resetPartId() {
    this._partId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partIdInput() {
    return this._partId;
  }

  // rport_count - computed: false, optional: true, required: false
  private _rportCount?: number; 
  public get rportCount() {
    return this.getNumberAttribute('rport_count');
  }
  public set rportCount(value: number) {
    this._rportCount = value;
  }
  public resetRportCount() {
    this._rportCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rportCountInput() {
    return this._rportCount;
  }

  // rserver_count - computed: false, optional: true, required: false
  private _rserverCount?: number; 
  public get rserverCount() {
    return this.getNumberAttribute('rserver_count');
  }
  public set rserverCount(value: number) {
    this._rserverCount = value;
  }
  public resetRserverCount() {
    this._rserverCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rserverCountInput() {
    return this._rserverCount;
  }

  // rserver_list - computed: false, optional: true, required: false
  private _rserverList = new DataThunderAamAuthenticationServerOperOperRserverListStructList(this, "rserver_list", false);
  public get rserverList() {
    return this._rserverList;
  }
  public putRserverList(value: DataThunderAamAuthenticationServerOperOperRserverListStruct[] | cdktf.IResolvable) {
    this._rserverList.internalValue = value;
  }
  public resetRserverList() {
    this._rserverList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rserverListInput() {
    return this._rserverList.internalValue;
  }
}
export interface DataThunderAamAuthenticationServerOperWindowsOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#name DataThunderAamAuthenticationServerOper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#stats_clear_type DataThunderAamAuthenticationServerOper#stats_clear_type}
  */
  readonly statsClearType?: string;
}

export function dataThunderAamAuthenticationServerOperWindowsOperToTerraform(struct?: DataThunderAamAuthenticationServerOperWindowsOperOutputReference | DataThunderAamAuthenticationServerOperWindowsOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    stats_clear_type: cdktf.stringToTerraform(struct!.statsClearType),
  }
}


export function dataThunderAamAuthenticationServerOperWindowsOperToHclTerraform(struct?: DataThunderAamAuthenticationServerOperWindowsOperOutputReference | DataThunderAamAuthenticationServerOperWindowsOper): any {
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
    stats_clear_type: {
      value: cdktf.stringToHclTerraform(struct!.statsClearType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationServerOperWindowsOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationServerOperWindowsOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._statsClearType !== undefined) {
      hasAnyValues = true;
      internalValueResult.statsClearType = this._statsClearType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationServerOperWindowsOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._statsClearType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._statsClearType = value.statsClearType;
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

  // stats_clear_type - computed: false, optional: true, required: false
  private _statsClearType?: string; 
  public get statsClearType() {
    return this.getStringAttribute('stats_clear_type');
  }
  public set statsClearType(value: string) {
    this._statsClearType = value;
  }
  public resetStatsClearType() {
    this._statsClearType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsClearTypeInput() {
    return this._statsClearType;
  }
}
export interface DataThunderAamAuthenticationServerOperWindows {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#oper DataThunderAamAuthenticationServerOper#oper}
  */
  readonly oper?: DataThunderAamAuthenticationServerOperWindowsOper;
}

export function dataThunderAamAuthenticationServerOperWindowsToTerraform(struct?: DataThunderAamAuthenticationServerOperWindowsOutputReference | DataThunderAamAuthenticationServerOperWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderAamAuthenticationServerOperWindowsOperToTerraform(struct!.oper),
  }
}


export function dataThunderAamAuthenticationServerOperWindowsToHclTerraform(struct?: DataThunderAamAuthenticationServerOperWindowsOutputReference | DataThunderAamAuthenticationServerOperWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderAamAuthenticationServerOperWindowsOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAamAuthenticationServerOperWindowsOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationServerOperWindowsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationServerOperWindows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationServerOperWindows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderAamAuthenticationServerOperWindowsOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderAamAuthenticationServerOperWindowsOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper thunder_aam_authentication_server_oper}
*/
export class DataThunderAamAuthenticationServerOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_server_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamAuthenticationServerOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamAuthenticationServerOper to import
  * @param importFromId The id of the existing DataThunderAamAuthenticationServerOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamAuthenticationServerOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_server_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_oper thunder_aam_authentication_server_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamAuthenticationServerOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamAuthenticationServerOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_server_oper',
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
    this._ldap.internalValue = config.ldap;
    this._ocsp.internalValue = config.ocsp;
    this._oper.internalValue = config.oper;
    this._windows.internalValue = config.windows;
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

  // ldap - computed: false, optional: true, required: false
  private _ldap = new DataThunderAamAuthenticationServerOperLdapOutputReference(this, "ldap");
  public get ldap() {
    return this._ldap;
  }
  public putLdap(value: DataThunderAamAuthenticationServerOperLdap) {
    this._ldap.internalValue = value;
  }
  public resetLdap() {
    this._ldap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapInput() {
    return this._ldap.internalValue;
  }

  // ocsp - computed: false, optional: true, required: false
  private _ocsp = new DataThunderAamAuthenticationServerOperOcspOutputReference(this, "ocsp");
  public get ocsp() {
    return this._ocsp;
  }
  public putOcsp(value: DataThunderAamAuthenticationServerOperOcsp) {
    this._ocsp.internalValue = value;
  }
  public resetOcsp() {
    this._ocsp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspInput() {
    return this._ocsp.internalValue;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderAamAuthenticationServerOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderAamAuthenticationServerOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // windows - computed: false, optional: true, required: false
  private _windows = new DataThunderAamAuthenticationServerOperWindowsOutputReference(this, "windows");
  public get windows() {
    return this._windows;
  }
  public putWindows(value: DataThunderAamAuthenticationServerOperWindows) {
    this._windows.internalValue = value;
  }
  public resetWindows() {
    this._windows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsInput() {
    return this._windows.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ldap: dataThunderAamAuthenticationServerOperLdapToTerraform(this._ldap.internalValue),
      ocsp: dataThunderAamAuthenticationServerOperOcspToTerraform(this._ocsp.internalValue),
      oper: dataThunderAamAuthenticationServerOperOperToTerraform(this._oper.internalValue),
      windows: dataThunderAamAuthenticationServerOperWindowsToTerraform(this._windows.internalValue),
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
      ldap: {
        value: dataThunderAamAuthenticationServerOperLdapToHclTerraform(this._ldap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationServerOperLdapList",
      },
      ocsp: {
        value: dataThunderAamAuthenticationServerOperOcspToHclTerraform(this._ocsp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationServerOperOcspList",
      },
      oper: {
        value: dataThunderAamAuthenticationServerOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationServerOperOperList",
      },
      windows: {
        value: dataThunderAamAuthenticationServerOperWindowsToHclTerraform(this._windows.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationServerOperWindowsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
