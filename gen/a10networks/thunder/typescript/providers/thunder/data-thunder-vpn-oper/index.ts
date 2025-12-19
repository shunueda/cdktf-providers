// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVpnOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#id DataThunderVpnOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * crl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#crl DataThunderVpnOper#crl}
  */
  readonly crl?: DataThunderVpnOperCrl;
  /**
  * default block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#default DataThunderVpnOper#default}
  */
  readonly default?: DataThunderVpnOperDefault;
  /**
  * errordump block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#errordump DataThunderVpnOper#errordump}
  */
  readonly errordump?: DataThunderVpnOperErrordump;
  /**
  * group_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#group_list DataThunderVpnOper#group_list}
  */
  readonly groupList?: DataThunderVpnOperGroupListStruct;
  /**
  * ike_gateway_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_gateway_list DataThunderVpnOper#ike_gateway_list}
  */
  readonly ikeGatewayList?: DataThunderVpnOperIkeGatewayListStruct[] | cdktf.IResolvable;
  /**
  * ike_sa block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_sa DataThunderVpnOper#ike_sa}
  */
  readonly ikeSa?: DataThunderVpnOperIkeSa;
  /**
  * ike_sa_brief block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_sa_brief DataThunderVpnOper#ike_sa_brief}
  */
  readonly ikeSaBrief?: DataThunderVpnOperIkeSaBrief;
  /**
  * ike_sa_clients block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_sa_clients DataThunderVpnOper#ike_sa_clients}
  */
  readonly ikeSaClients?: DataThunderVpnOperIkeSaClients;
  /**
  * ike_stats_by_gw block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_stats_by_gw DataThunderVpnOper#ike_stats_by_gw}
  */
  readonly ikeStatsByGw?: DataThunderVpnOperIkeStatsByGw;
  /**
  * ipsec_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ipsec_list DataThunderVpnOper#ipsec_list}
  */
  readonly ipsecList?: DataThunderVpnOperIpsecListStruct[] | cdktf.IResolvable;
  /**
  * ipsec_sa block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ipsec_sa DataThunderVpnOper#ipsec_sa}
  */
  readonly ipsecSa?: DataThunderVpnOperIpsecSa;
  /**
  * ipsec_sa_by_gw block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ipsec_sa_by_gw DataThunderVpnOper#ipsec_sa_by_gw}
  */
  readonly ipsecSaByGw?: DataThunderVpnOperIpsecSaByGw;
  /**
  * ipsec_sa_clients block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ipsec_sa_clients DataThunderVpnOper#ipsec_sa_clients}
  */
  readonly ipsecSaClients?: DataThunderVpnOperIpsecSaClients;
  /**
  * log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#log DataThunderVpnOper#log}
  */
  readonly log?: DataThunderVpnOperLog;
  /**
  * ocsp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ocsp DataThunderVpnOper#ocsp}
  */
  readonly ocsp?: DataThunderVpnOperOcsp;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#oper DataThunderVpnOper#oper}
  */
  readonly oper?: DataThunderVpnOperOper;
}
export interface DataThunderVpnOperCrlOperCrlListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#issuer DataThunderVpnOper#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#revoked DataThunderVpnOper#revoked}
  */
  readonly revoked?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#serial DataThunderVpnOper#serial}
  */
  readonly serial?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#storage_type DataThunderVpnOper#storage_type}
  */
  readonly storageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#subject DataThunderVpnOper#subject}
  */
  readonly subject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#updates DataThunderVpnOper#updates}
  */
  readonly updates?: string;
}

export function dataThunderVpnOperCrlOperCrlListStructToTerraform(struct?: DataThunderVpnOperCrlOperCrlListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issuer: cdktf.stringToTerraform(struct!.issuer),
    revoked: cdktf.stringToTerraform(struct!.revoked),
    serial: cdktf.stringToTerraform(struct!.serial),
    storage_type: cdktf.stringToTerraform(struct!.storageType),
    subject: cdktf.stringToTerraform(struct!.subject),
    updates: cdktf.stringToTerraform(struct!.updates),
  }
}


export function dataThunderVpnOperCrlOperCrlListStructToHclTerraform(struct?: DataThunderVpnOperCrlOperCrlListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revoked: {
      value: cdktf.stringToHclTerraform(struct!.revoked),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial: {
      value: cdktf.stringToHclTerraform(struct!.serial),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_type: {
      value: cdktf.stringToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    updates: {
      value: cdktf.stringToHclTerraform(struct!.updates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperCrlOperCrlListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVpnOperCrlOperCrlListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._revoked !== undefined) {
      hasAnyValues = true;
      internalValueResult.revoked = this._revoked;
    }
    if (this._serial !== undefined) {
      hasAnyValues = true;
      internalValueResult.serial = this._serial;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._updates !== undefined) {
      hasAnyValues = true;
      internalValueResult.updates = this._updates;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperCrlOperCrlListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._issuer = undefined;
      this._revoked = undefined;
      this._serial = undefined;
      this._storageType = undefined;
      this._subject = undefined;
      this._updates = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._issuer = value.issuer;
      this._revoked = value.revoked;
      this._serial = value.serial;
      this._storageType = value.storageType;
      this._subject = value.subject;
      this._updates = value.updates;
    }
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // revoked - computed: false, optional: true, required: false
  private _revoked?: string; 
  public get revoked() {
    return this.getStringAttribute('revoked');
  }
  public set revoked(value: string) {
    this._revoked = value;
  }
  public resetRevoked() {
    this._revoked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokedInput() {
    return this._revoked;
  }

  // serial - computed: false, optional: true, required: false
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  public resetSerial() {
    this._serial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // storage_type - computed: false, optional: true, required: false
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // updates - computed: false, optional: true, required: false
  private _updates?: string; 
  public get updates() {
    return this.getStringAttribute('updates');
  }
  public set updates(value: string) {
    this._updates = value;
  }
  public resetUpdates() {
    this._updates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatesInput() {
    return this._updates;
  }
}

export class DataThunderVpnOperCrlOperCrlListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVpnOperCrlOperCrlListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVpnOperCrlOperCrlListStructOutputReference {
    return new DataThunderVpnOperCrlOperCrlListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVpnOperCrlOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#total_crls DataThunderVpnOper#total_crls}
  */
  readonly totalCrls?: number;
  /**
  * crl_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#crl_list DataThunderVpnOper#crl_list}
  */
  readonly crlList?: DataThunderVpnOperCrlOperCrlListStruct[] | cdktf.IResolvable;
}

export function dataThunderVpnOperCrlOperToTerraform(struct?: DataThunderVpnOperCrlOperOutputReference | DataThunderVpnOperCrlOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    total_crls: cdktf.numberToTerraform(struct!.totalCrls),
    crl_list: cdktf.listMapper(dataThunderVpnOperCrlOperCrlListStructToTerraform, true)(struct!.crlList),
  }
}


export function dataThunderVpnOperCrlOperToHclTerraform(struct?: DataThunderVpnOperCrlOperOutputReference | DataThunderVpnOperCrlOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    total_crls: {
      value: cdktf.numberToHclTerraform(struct!.totalCrls),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crl_list: {
      value: cdktf.listMapperHcl(dataThunderVpnOperCrlOperCrlListStructToHclTerraform, true)(struct!.crlList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnOperCrlOperCrlListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperCrlOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnOperCrlOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._totalCrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalCrls = this._totalCrls;
    }
    if (this._crlList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlList = this._crlList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperCrlOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._totalCrls = undefined;
      this._crlList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._totalCrls = value.totalCrls;
      this._crlList.internalValue = value.crlList;
    }
  }

  // total_crls - computed: false, optional: true, required: false
  private _totalCrls?: number; 
  public get totalCrls() {
    return this.getNumberAttribute('total_crls');
  }
  public set totalCrls(value: number) {
    this._totalCrls = value;
  }
  public resetTotalCrls() {
    this._totalCrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalCrlsInput() {
    return this._totalCrls;
  }

  // crl_list - computed: false, optional: true, required: false
  private _crlList = new DataThunderVpnOperCrlOperCrlListStructList(this, "crl_list", false);
  public get crlList() {
    return this._crlList;
  }
  public putCrlList(value: DataThunderVpnOperCrlOperCrlListStruct[] | cdktf.IResolvable) {
    this._crlList.internalValue = value;
  }
  public resetCrlList() {
    this._crlList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlListInput() {
    return this._crlList.internalValue;
  }
}
export interface DataThunderVpnOperCrl {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#oper DataThunderVpnOper#oper}
  */
  readonly oper?: DataThunderVpnOperCrlOper;
}

export function dataThunderVpnOperCrlToTerraform(struct?: DataThunderVpnOperCrlOutputReference | DataThunderVpnOperCrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderVpnOperCrlOperToTerraform(struct!.oper),
  }
}


export function dataThunderVpnOperCrlToHclTerraform(struct?: DataThunderVpnOperCrlOutputReference | DataThunderVpnOperCrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderVpnOperCrlOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnOperCrlOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperCrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnOperCrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperCrl | undefined) {
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
  private _oper = new DataThunderVpnOperCrlOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVpnOperCrlOper) {
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
export interface DataThunderVpnOperDefaultOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_auth_method DataThunderVpnOper#ike_auth_method}
  */
  readonly ikeAuthMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_dh_group DataThunderVpnOper#ike_dh_group}
  */
  readonly ikeDhGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_dpd_interval DataThunderVpnOper#ike_dpd_interval}
  */
  readonly ikeDpdInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_encryption DataThunderVpnOper#ike_encryption}
  */
  readonly ikeEncryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_hash DataThunderVpnOper#ike_hash}
  */
  readonly ikeHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_lifetime DataThunderVpnOper#ike_lifetime}
  */
  readonly ikeLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_local_address DataThunderVpnOper#ike_local_address}
  */
  readonly ikeLocalAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_mode DataThunderVpnOper#ike_mode}
  */
  readonly ikeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_nat_traversal DataThunderVpnOper#ike_nat_traversal}
  */
  readonly ikeNatTraversal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_priority DataThunderVpnOper#ike_priority}
  */
  readonly ikePriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_remote_address DataThunderVpnOper#ike_remote_address}
  */
  readonly ikeRemoteAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_version DataThunderVpnOper#ike_version}
  */
  readonly ikeVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ipsec_anti_replay_window DataThunderVpnOper#ipsec_anti_replay_window}
  */
  readonly ipsecAntiReplayWindow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ipsec_dh_group DataThunderVpnOper#ipsec_dh_group}
  */
  readonly ipsecDhGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ipsec_encryption DataThunderVpnOper#ipsec_encryption}
  */
  readonly ipsecEncryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ipsec_hash DataThunderVpnOper#ipsec_hash}
  */
  readonly ipsecHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ipsec_lifebytes DataThunderVpnOper#ipsec_lifebytes}
  */
  readonly ipsecLifebytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ipsec_lifetime DataThunderVpnOper#ipsec_lifetime}
  */
  readonly ipsecLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ipsec_local_port DataThunderVpnOper#ipsec_local_port}
  */
  readonly ipsecLocalPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ipsec_local_protocol DataThunderVpnOper#ipsec_local_protocol}
  */
  readonly ipsecLocalProtocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ipsec_local_subnet DataThunderVpnOper#ipsec_local_subnet}
  */
  readonly ipsecLocalSubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ipsec_mode DataThunderVpnOper#ipsec_mode}
  */
  readonly ipsecMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ipsec_priority DataThunderVpnOper#ipsec_priority}
  */
  readonly ipsecPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ipsec_protocol DataThunderVpnOper#ipsec_protocol}
  */
  readonly ipsecProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ipsec_remote_port DataThunderVpnOper#ipsec_remote_port}
  */
  readonly ipsecRemotePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ipsec_remote_protocol DataThunderVpnOper#ipsec_remote_protocol}
  */
  readonly ipsecRemoteProtocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ipsec_remote_subnet DataThunderVpnOper#ipsec_remote_subnet}
  */
  readonly ipsecRemoteSubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ipsec_traffic_selector DataThunderVpnOper#ipsec_traffic_selector}
  */
  readonly ipsecTrafficSelector?: string;
}

export function dataThunderVpnOperDefaultOperToTerraform(struct?: DataThunderVpnOperDefaultOperOutputReference | DataThunderVpnOperDefaultOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ike_auth_method: cdktf.stringToTerraform(struct!.ikeAuthMethod),
    ike_dh_group: cdktf.stringToTerraform(struct!.ikeDhGroup),
    ike_dpd_interval: cdktf.numberToTerraform(struct!.ikeDpdInterval),
    ike_encryption: cdktf.stringToTerraform(struct!.ikeEncryption),
    ike_hash: cdktf.stringToTerraform(struct!.ikeHash),
    ike_lifetime: cdktf.numberToTerraform(struct!.ikeLifetime),
    ike_local_address: cdktf.stringToTerraform(struct!.ikeLocalAddress),
    ike_mode: cdktf.stringToTerraform(struct!.ikeMode),
    ike_nat_traversal: cdktf.stringToTerraform(struct!.ikeNatTraversal),
    ike_priority: cdktf.numberToTerraform(struct!.ikePriority),
    ike_remote_address: cdktf.stringToTerraform(struct!.ikeRemoteAddress),
    ike_version: cdktf.stringToTerraform(struct!.ikeVersion),
    ipsec_anti_replay_window: cdktf.numberToTerraform(struct!.ipsecAntiReplayWindow),
    ipsec_dh_group: cdktf.stringToTerraform(struct!.ipsecDhGroup),
    ipsec_encryption: cdktf.stringToTerraform(struct!.ipsecEncryption),
    ipsec_hash: cdktf.stringToTerraform(struct!.ipsecHash),
    ipsec_lifebytes: cdktf.numberToTerraform(struct!.ipsecLifebytes),
    ipsec_lifetime: cdktf.numberToTerraform(struct!.ipsecLifetime),
    ipsec_local_port: cdktf.numberToTerraform(struct!.ipsecLocalPort),
    ipsec_local_protocol: cdktf.numberToTerraform(struct!.ipsecLocalProtocol),
    ipsec_local_subnet: cdktf.stringToTerraform(struct!.ipsecLocalSubnet),
    ipsec_mode: cdktf.stringToTerraform(struct!.ipsecMode),
    ipsec_priority: cdktf.numberToTerraform(struct!.ipsecPriority),
    ipsec_protocol: cdktf.stringToTerraform(struct!.ipsecProtocol),
    ipsec_remote_port: cdktf.numberToTerraform(struct!.ipsecRemotePort),
    ipsec_remote_protocol: cdktf.numberToTerraform(struct!.ipsecRemoteProtocol),
    ipsec_remote_subnet: cdktf.stringToTerraform(struct!.ipsecRemoteSubnet),
    ipsec_traffic_selector: cdktf.stringToTerraform(struct!.ipsecTrafficSelector),
  }
}


export function dataThunderVpnOperDefaultOperToHclTerraform(struct?: DataThunderVpnOperDefaultOperOutputReference | DataThunderVpnOperDefaultOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ike_auth_method: {
      value: cdktf.stringToHclTerraform(struct!.ikeAuthMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_dh_group: {
      value: cdktf.stringToHclTerraform(struct!.ikeDhGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_dpd_interval: {
      value: cdktf.numberToHclTerraform(struct!.ikeDpdInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ike_encryption: {
      value: cdktf.stringToHclTerraform(struct!.ikeEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_hash: {
      value: cdktf.stringToHclTerraform(struct!.ikeHash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.ikeLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ike_local_address: {
      value: cdktf.stringToHclTerraform(struct!.ikeLocalAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_mode: {
      value: cdktf.stringToHclTerraform(struct!.ikeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_nat_traversal: {
      value: cdktf.stringToHclTerraform(struct!.ikeNatTraversal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_priority: {
      value: cdktf.numberToHclTerraform(struct!.ikePriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ike_remote_address: {
      value: cdktf.stringToHclTerraform(struct!.ikeRemoteAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_version: {
      value: cdktf.stringToHclTerraform(struct!.ikeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_anti_replay_window: {
      value: cdktf.numberToHclTerraform(struct!.ipsecAntiReplayWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_dh_group: {
      value: cdktf.stringToHclTerraform(struct!.ipsecDhGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_encryption: {
      value: cdktf.stringToHclTerraform(struct!.ipsecEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_hash: {
      value: cdktf.stringToHclTerraform(struct!.ipsecHash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_lifebytes: {
      value: cdktf.numberToHclTerraform(struct!.ipsecLifebytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.ipsecLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_local_port: {
      value: cdktf.numberToHclTerraform(struct!.ipsecLocalPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_local_protocol: {
      value: cdktf.numberToHclTerraform(struct!.ipsecLocalProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_local_subnet: {
      value: cdktf.stringToHclTerraform(struct!.ipsecLocalSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_mode: {
      value: cdktf.stringToHclTerraform(struct!.ipsecMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_priority: {
      value: cdktf.numberToHclTerraform(struct!.ipsecPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_protocol: {
      value: cdktf.stringToHclTerraform(struct!.ipsecProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_remote_port: {
      value: cdktf.numberToHclTerraform(struct!.ipsecRemotePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_remote_protocol: {
      value: cdktf.numberToHclTerraform(struct!.ipsecRemoteProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_remote_subnet: {
      value: cdktf.stringToHclTerraform(struct!.ipsecRemoteSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_traffic_selector: {
      value: cdktf.stringToHclTerraform(struct!.ipsecTrafficSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperDefaultOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnOperDefaultOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ikeAuthMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeAuthMethod = this._ikeAuthMethod;
    }
    if (this._ikeDhGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeDhGroup = this._ikeDhGroup;
    }
    if (this._ikeDpdInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeDpdInterval = this._ikeDpdInterval;
    }
    if (this._ikeEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeEncryption = this._ikeEncryption;
    }
    if (this._ikeHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeHash = this._ikeHash;
    }
    if (this._ikeLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeLifetime = this._ikeLifetime;
    }
    if (this._ikeLocalAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeLocalAddress = this._ikeLocalAddress;
    }
    if (this._ikeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeMode = this._ikeMode;
    }
    if (this._ikeNatTraversal !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeNatTraversal = this._ikeNatTraversal;
    }
    if (this._ikePriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikePriority = this._ikePriority;
    }
    if (this._ikeRemoteAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeRemoteAddress = this._ikeRemoteAddress;
    }
    if (this._ikeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeVersion = this._ikeVersion;
    }
    if (this._ipsecAntiReplayWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecAntiReplayWindow = this._ipsecAntiReplayWindow;
    }
    if (this._ipsecDhGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecDhGroup = this._ipsecDhGroup;
    }
    if (this._ipsecEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecEncryption = this._ipsecEncryption;
    }
    if (this._ipsecHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecHash = this._ipsecHash;
    }
    if (this._ipsecLifebytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecLifebytes = this._ipsecLifebytes;
    }
    if (this._ipsecLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecLifetime = this._ipsecLifetime;
    }
    if (this._ipsecLocalPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecLocalPort = this._ipsecLocalPort;
    }
    if (this._ipsecLocalProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecLocalProtocol = this._ipsecLocalProtocol;
    }
    if (this._ipsecLocalSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecLocalSubnet = this._ipsecLocalSubnet;
    }
    if (this._ipsecMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecMode = this._ipsecMode;
    }
    if (this._ipsecPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecPriority = this._ipsecPriority;
    }
    if (this._ipsecProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecProtocol = this._ipsecProtocol;
    }
    if (this._ipsecRemotePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecRemotePort = this._ipsecRemotePort;
    }
    if (this._ipsecRemoteProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecRemoteProtocol = this._ipsecRemoteProtocol;
    }
    if (this._ipsecRemoteSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecRemoteSubnet = this._ipsecRemoteSubnet;
    }
    if (this._ipsecTrafficSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecTrafficSelector = this._ipsecTrafficSelector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperDefaultOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ikeAuthMethod = undefined;
      this._ikeDhGroup = undefined;
      this._ikeDpdInterval = undefined;
      this._ikeEncryption = undefined;
      this._ikeHash = undefined;
      this._ikeLifetime = undefined;
      this._ikeLocalAddress = undefined;
      this._ikeMode = undefined;
      this._ikeNatTraversal = undefined;
      this._ikePriority = undefined;
      this._ikeRemoteAddress = undefined;
      this._ikeVersion = undefined;
      this._ipsecAntiReplayWindow = undefined;
      this._ipsecDhGroup = undefined;
      this._ipsecEncryption = undefined;
      this._ipsecHash = undefined;
      this._ipsecLifebytes = undefined;
      this._ipsecLifetime = undefined;
      this._ipsecLocalPort = undefined;
      this._ipsecLocalProtocol = undefined;
      this._ipsecLocalSubnet = undefined;
      this._ipsecMode = undefined;
      this._ipsecPriority = undefined;
      this._ipsecProtocol = undefined;
      this._ipsecRemotePort = undefined;
      this._ipsecRemoteProtocol = undefined;
      this._ipsecRemoteSubnet = undefined;
      this._ipsecTrafficSelector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ikeAuthMethod = value.ikeAuthMethod;
      this._ikeDhGroup = value.ikeDhGroup;
      this._ikeDpdInterval = value.ikeDpdInterval;
      this._ikeEncryption = value.ikeEncryption;
      this._ikeHash = value.ikeHash;
      this._ikeLifetime = value.ikeLifetime;
      this._ikeLocalAddress = value.ikeLocalAddress;
      this._ikeMode = value.ikeMode;
      this._ikeNatTraversal = value.ikeNatTraversal;
      this._ikePriority = value.ikePriority;
      this._ikeRemoteAddress = value.ikeRemoteAddress;
      this._ikeVersion = value.ikeVersion;
      this._ipsecAntiReplayWindow = value.ipsecAntiReplayWindow;
      this._ipsecDhGroup = value.ipsecDhGroup;
      this._ipsecEncryption = value.ipsecEncryption;
      this._ipsecHash = value.ipsecHash;
      this._ipsecLifebytes = value.ipsecLifebytes;
      this._ipsecLifetime = value.ipsecLifetime;
      this._ipsecLocalPort = value.ipsecLocalPort;
      this._ipsecLocalProtocol = value.ipsecLocalProtocol;
      this._ipsecLocalSubnet = value.ipsecLocalSubnet;
      this._ipsecMode = value.ipsecMode;
      this._ipsecPriority = value.ipsecPriority;
      this._ipsecProtocol = value.ipsecProtocol;
      this._ipsecRemotePort = value.ipsecRemotePort;
      this._ipsecRemoteProtocol = value.ipsecRemoteProtocol;
      this._ipsecRemoteSubnet = value.ipsecRemoteSubnet;
      this._ipsecTrafficSelector = value.ipsecTrafficSelector;
    }
  }

  // ike_auth_method - computed: false, optional: true, required: false
  private _ikeAuthMethod?: string; 
  public get ikeAuthMethod() {
    return this.getStringAttribute('ike_auth_method');
  }
  public set ikeAuthMethod(value: string) {
    this._ikeAuthMethod = value;
  }
  public resetIkeAuthMethod() {
    this._ikeAuthMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeAuthMethodInput() {
    return this._ikeAuthMethod;
  }

  // ike_dh_group - computed: false, optional: true, required: false
  private _ikeDhGroup?: string; 
  public get ikeDhGroup() {
    return this.getStringAttribute('ike_dh_group');
  }
  public set ikeDhGroup(value: string) {
    this._ikeDhGroup = value;
  }
  public resetIkeDhGroup() {
    this._ikeDhGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeDhGroupInput() {
    return this._ikeDhGroup;
  }

  // ike_dpd_interval - computed: false, optional: true, required: false
  private _ikeDpdInterval?: number; 
  public get ikeDpdInterval() {
    return this.getNumberAttribute('ike_dpd_interval');
  }
  public set ikeDpdInterval(value: number) {
    this._ikeDpdInterval = value;
  }
  public resetIkeDpdInterval() {
    this._ikeDpdInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeDpdIntervalInput() {
    return this._ikeDpdInterval;
  }

  // ike_encryption - computed: false, optional: true, required: false
  private _ikeEncryption?: string; 
  public get ikeEncryption() {
    return this.getStringAttribute('ike_encryption');
  }
  public set ikeEncryption(value: string) {
    this._ikeEncryption = value;
  }
  public resetIkeEncryption() {
    this._ikeEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeEncryptionInput() {
    return this._ikeEncryption;
  }

  // ike_hash - computed: false, optional: true, required: false
  private _ikeHash?: string; 
  public get ikeHash() {
    return this.getStringAttribute('ike_hash');
  }
  public set ikeHash(value: string) {
    this._ikeHash = value;
  }
  public resetIkeHash() {
    this._ikeHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeHashInput() {
    return this._ikeHash;
  }

  // ike_lifetime - computed: false, optional: true, required: false
  private _ikeLifetime?: number; 
  public get ikeLifetime() {
    return this.getNumberAttribute('ike_lifetime');
  }
  public set ikeLifetime(value: number) {
    this._ikeLifetime = value;
  }
  public resetIkeLifetime() {
    this._ikeLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeLifetimeInput() {
    return this._ikeLifetime;
  }

  // ike_local_address - computed: false, optional: true, required: false
  private _ikeLocalAddress?: string; 
  public get ikeLocalAddress() {
    return this.getStringAttribute('ike_local_address');
  }
  public set ikeLocalAddress(value: string) {
    this._ikeLocalAddress = value;
  }
  public resetIkeLocalAddress() {
    this._ikeLocalAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeLocalAddressInput() {
    return this._ikeLocalAddress;
  }

  // ike_mode - computed: false, optional: true, required: false
  private _ikeMode?: string; 
  public get ikeMode() {
    return this.getStringAttribute('ike_mode');
  }
  public set ikeMode(value: string) {
    this._ikeMode = value;
  }
  public resetIkeMode() {
    this._ikeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeModeInput() {
    return this._ikeMode;
  }

  // ike_nat_traversal - computed: false, optional: true, required: false
  private _ikeNatTraversal?: string; 
  public get ikeNatTraversal() {
    return this.getStringAttribute('ike_nat_traversal');
  }
  public set ikeNatTraversal(value: string) {
    this._ikeNatTraversal = value;
  }
  public resetIkeNatTraversal() {
    this._ikeNatTraversal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeNatTraversalInput() {
    return this._ikeNatTraversal;
  }

  // ike_priority - computed: false, optional: true, required: false
  private _ikePriority?: number; 
  public get ikePriority() {
    return this.getNumberAttribute('ike_priority');
  }
  public set ikePriority(value: number) {
    this._ikePriority = value;
  }
  public resetIkePriority() {
    this._ikePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikePriorityInput() {
    return this._ikePriority;
  }

  // ike_remote_address - computed: false, optional: true, required: false
  private _ikeRemoteAddress?: string; 
  public get ikeRemoteAddress() {
    return this.getStringAttribute('ike_remote_address');
  }
  public set ikeRemoteAddress(value: string) {
    this._ikeRemoteAddress = value;
  }
  public resetIkeRemoteAddress() {
    this._ikeRemoteAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeRemoteAddressInput() {
    return this._ikeRemoteAddress;
  }

  // ike_version - computed: false, optional: true, required: false
  private _ikeVersion?: string; 
  public get ikeVersion() {
    return this.getStringAttribute('ike_version');
  }
  public set ikeVersion(value: string) {
    this._ikeVersion = value;
  }
  public resetIkeVersion() {
    this._ikeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeVersionInput() {
    return this._ikeVersion;
  }

  // ipsec_anti_replay_window - computed: false, optional: true, required: false
  private _ipsecAntiReplayWindow?: number; 
  public get ipsecAntiReplayWindow() {
    return this.getNumberAttribute('ipsec_anti_replay_window');
  }
  public set ipsecAntiReplayWindow(value: number) {
    this._ipsecAntiReplayWindow = value;
  }
  public resetIpsecAntiReplayWindow() {
    this._ipsecAntiReplayWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecAntiReplayWindowInput() {
    return this._ipsecAntiReplayWindow;
  }

  // ipsec_dh_group - computed: false, optional: true, required: false
  private _ipsecDhGroup?: string; 
  public get ipsecDhGroup() {
    return this.getStringAttribute('ipsec_dh_group');
  }
  public set ipsecDhGroup(value: string) {
    this._ipsecDhGroup = value;
  }
  public resetIpsecDhGroup() {
    this._ipsecDhGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecDhGroupInput() {
    return this._ipsecDhGroup;
  }

  // ipsec_encryption - computed: false, optional: true, required: false
  private _ipsecEncryption?: string; 
  public get ipsecEncryption() {
    return this.getStringAttribute('ipsec_encryption');
  }
  public set ipsecEncryption(value: string) {
    this._ipsecEncryption = value;
  }
  public resetIpsecEncryption() {
    this._ipsecEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecEncryptionInput() {
    return this._ipsecEncryption;
  }

  // ipsec_hash - computed: false, optional: true, required: false
  private _ipsecHash?: string; 
  public get ipsecHash() {
    return this.getStringAttribute('ipsec_hash');
  }
  public set ipsecHash(value: string) {
    this._ipsecHash = value;
  }
  public resetIpsecHash() {
    this._ipsecHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecHashInput() {
    return this._ipsecHash;
  }

  // ipsec_lifebytes - computed: false, optional: true, required: false
  private _ipsecLifebytes?: number; 
  public get ipsecLifebytes() {
    return this.getNumberAttribute('ipsec_lifebytes');
  }
  public set ipsecLifebytes(value: number) {
    this._ipsecLifebytes = value;
  }
  public resetIpsecLifebytes() {
    this._ipsecLifebytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecLifebytesInput() {
    return this._ipsecLifebytes;
  }

  // ipsec_lifetime - computed: false, optional: true, required: false
  private _ipsecLifetime?: number; 
  public get ipsecLifetime() {
    return this.getNumberAttribute('ipsec_lifetime');
  }
  public set ipsecLifetime(value: number) {
    this._ipsecLifetime = value;
  }
  public resetIpsecLifetime() {
    this._ipsecLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecLifetimeInput() {
    return this._ipsecLifetime;
  }

  // ipsec_local_port - computed: false, optional: true, required: false
  private _ipsecLocalPort?: number; 
  public get ipsecLocalPort() {
    return this.getNumberAttribute('ipsec_local_port');
  }
  public set ipsecLocalPort(value: number) {
    this._ipsecLocalPort = value;
  }
  public resetIpsecLocalPort() {
    this._ipsecLocalPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecLocalPortInput() {
    return this._ipsecLocalPort;
  }

  // ipsec_local_protocol - computed: false, optional: true, required: false
  private _ipsecLocalProtocol?: number; 
  public get ipsecLocalProtocol() {
    return this.getNumberAttribute('ipsec_local_protocol');
  }
  public set ipsecLocalProtocol(value: number) {
    this._ipsecLocalProtocol = value;
  }
  public resetIpsecLocalProtocol() {
    this._ipsecLocalProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecLocalProtocolInput() {
    return this._ipsecLocalProtocol;
  }

  // ipsec_local_subnet - computed: false, optional: true, required: false
  private _ipsecLocalSubnet?: string; 
  public get ipsecLocalSubnet() {
    return this.getStringAttribute('ipsec_local_subnet');
  }
  public set ipsecLocalSubnet(value: string) {
    this._ipsecLocalSubnet = value;
  }
  public resetIpsecLocalSubnet() {
    this._ipsecLocalSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecLocalSubnetInput() {
    return this._ipsecLocalSubnet;
  }

  // ipsec_mode - computed: false, optional: true, required: false
  private _ipsecMode?: string; 
  public get ipsecMode() {
    return this.getStringAttribute('ipsec_mode');
  }
  public set ipsecMode(value: string) {
    this._ipsecMode = value;
  }
  public resetIpsecMode() {
    this._ipsecMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecModeInput() {
    return this._ipsecMode;
  }

  // ipsec_priority - computed: false, optional: true, required: false
  private _ipsecPriority?: number; 
  public get ipsecPriority() {
    return this.getNumberAttribute('ipsec_priority');
  }
  public set ipsecPriority(value: number) {
    this._ipsecPriority = value;
  }
  public resetIpsecPriority() {
    this._ipsecPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPriorityInput() {
    return this._ipsecPriority;
  }

  // ipsec_protocol - computed: false, optional: true, required: false
  private _ipsecProtocol?: string; 
  public get ipsecProtocol() {
    return this.getStringAttribute('ipsec_protocol');
  }
  public set ipsecProtocol(value: string) {
    this._ipsecProtocol = value;
  }
  public resetIpsecProtocol() {
    this._ipsecProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecProtocolInput() {
    return this._ipsecProtocol;
  }

  // ipsec_remote_port - computed: false, optional: true, required: false
  private _ipsecRemotePort?: number; 
  public get ipsecRemotePort() {
    return this.getNumberAttribute('ipsec_remote_port');
  }
  public set ipsecRemotePort(value: number) {
    this._ipsecRemotePort = value;
  }
  public resetIpsecRemotePort() {
    this._ipsecRemotePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecRemotePortInput() {
    return this._ipsecRemotePort;
  }

  // ipsec_remote_protocol - computed: false, optional: true, required: false
  private _ipsecRemoteProtocol?: number; 
  public get ipsecRemoteProtocol() {
    return this.getNumberAttribute('ipsec_remote_protocol');
  }
  public set ipsecRemoteProtocol(value: number) {
    this._ipsecRemoteProtocol = value;
  }
  public resetIpsecRemoteProtocol() {
    this._ipsecRemoteProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecRemoteProtocolInput() {
    return this._ipsecRemoteProtocol;
  }

  // ipsec_remote_subnet - computed: false, optional: true, required: false
  private _ipsecRemoteSubnet?: string; 
  public get ipsecRemoteSubnet() {
    return this.getStringAttribute('ipsec_remote_subnet');
  }
  public set ipsecRemoteSubnet(value: string) {
    this._ipsecRemoteSubnet = value;
  }
  public resetIpsecRemoteSubnet() {
    this._ipsecRemoteSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecRemoteSubnetInput() {
    return this._ipsecRemoteSubnet;
  }

  // ipsec_traffic_selector - computed: false, optional: true, required: false
  private _ipsecTrafficSelector?: string; 
  public get ipsecTrafficSelector() {
    return this.getStringAttribute('ipsec_traffic_selector');
  }
  public set ipsecTrafficSelector(value: string) {
    this._ipsecTrafficSelector = value;
  }
  public resetIpsecTrafficSelector() {
    this._ipsecTrafficSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecTrafficSelectorInput() {
    return this._ipsecTrafficSelector;
  }
}
export interface DataThunderVpnOperDefault {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#oper DataThunderVpnOper#oper}
  */
  readonly oper?: DataThunderVpnOperDefaultOper;
}

export function dataThunderVpnOperDefaultToTerraform(struct?: DataThunderVpnOperDefaultOutputReference | DataThunderVpnOperDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderVpnOperDefaultOperToTerraform(struct!.oper),
  }
}


export function dataThunderVpnOperDefaultToHclTerraform(struct?: DataThunderVpnOperDefaultOutputReference | DataThunderVpnOperDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderVpnOperDefaultOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnOperDefaultOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnOperDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperDefault | undefined) {
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
  private _oper = new DataThunderVpnOperDefaultOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVpnOperDefaultOper) {
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
export interface DataThunderVpnOperErrordumpOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ipsec_error_dump_path DataThunderVpnOper#ipsec_error_dump_path}
  */
  readonly ipsecErrorDumpPath?: string;
}

export function dataThunderVpnOperErrordumpOperToTerraform(struct?: DataThunderVpnOperErrordumpOperOutputReference | DataThunderVpnOperErrordumpOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipsec_error_dump_path: cdktf.stringToTerraform(struct!.ipsecErrorDumpPath),
  }
}


export function dataThunderVpnOperErrordumpOperToHclTerraform(struct?: DataThunderVpnOperErrordumpOperOutputReference | DataThunderVpnOperErrordumpOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipsec_error_dump_path: {
      value: cdktf.stringToHclTerraform(struct!.ipsecErrorDumpPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperErrordumpOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnOperErrordumpOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipsecErrorDumpPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecErrorDumpPath = this._ipsecErrorDumpPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperErrordumpOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipsecErrorDumpPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipsecErrorDumpPath = value.ipsecErrorDumpPath;
    }
  }

  // ipsec_error_dump_path - computed: false, optional: true, required: false
  private _ipsecErrorDumpPath?: string; 
  public get ipsecErrorDumpPath() {
    return this.getStringAttribute('ipsec_error_dump_path');
  }
  public set ipsecErrorDumpPath(value: string) {
    this._ipsecErrorDumpPath = value;
  }
  public resetIpsecErrorDumpPath() {
    this._ipsecErrorDumpPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecErrorDumpPathInput() {
    return this._ipsecErrorDumpPath;
  }
}
export interface DataThunderVpnOperErrordump {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#oper DataThunderVpnOper#oper}
  */
  readonly oper?: DataThunderVpnOperErrordumpOper;
}

export function dataThunderVpnOperErrordumpToTerraform(struct?: DataThunderVpnOperErrordumpOutputReference | DataThunderVpnOperErrordump): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderVpnOperErrordumpOperToTerraform(struct!.oper),
  }
}


export function dataThunderVpnOperErrordumpToHclTerraform(struct?: DataThunderVpnOperErrordumpOutputReference | DataThunderVpnOperErrordump): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderVpnOperErrordumpOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnOperErrordumpOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperErrordumpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnOperErrordump | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperErrordump | undefined) {
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
  private _oper = new DataThunderVpnOperErrordumpOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVpnOperErrordumpOper) {
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
export interface DataThunderVpnOperGroupListOperGroupListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#grp_member_count DataThunderVpnOper#grp_member_count}
  */
  readonly grpMemberCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_gateway_name DataThunderVpnOper#ike_gateway_name}
  */
  readonly ikeGatewayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ipsec_sa_name DataThunderVpnOper#ipsec_sa_name}
  */
  readonly ipsecSaName?: string;
  /**
  * a value of 1 indicates new group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#is_new_group DataThunderVpnOper#is_new_group}
  */
  readonly isNewGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#name DataThunderVpnOper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#priority DataThunderVpnOper#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#role DataThunderVpnOper#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#status DataThunderVpnOper#status}
  */
  readonly status?: string;
}

export function dataThunderVpnOperGroupListOperGroupListStructToTerraform(struct?: DataThunderVpnOperGroupListOperGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grp_member_count: cdktf.numberToTerraform(struct!.grpMemberCount),
    ike_gateway_name: cdktf.stringToTerraform(struct!.ikeGatewayName),
    ipsec_sa_name: cdktf.stringToTerraform(struct!.ipsecSaName),
    is_new_group: cdktf.numberToTerraform(struct!.isNewGroup),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    role: cdktf.stringToTerraform(struct!.role),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataThunderVpnOperGroupListOperGroupListStructToHclTerraform(struct?: DataThunderVpnOperGroupListOperGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grp_member_count: {
      value: cdktf.numberToHclTerraform(struct!.grpMemberCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ike_gateway_name: {
      value: cdktf.stringToHclTerraform(struct!.ikeGatewayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_sa_name: {
      value: cdktf.stringToHclTerraform(struct!.ipsecSaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_new_group: {
      value: cdktf.numberToHclTerraform(struct!.isNewGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
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

export class DataThunderVpnOperGroupListOperGroupListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVpnOperGroupListOperGroupListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grpMemberCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpMemberCount = this._grpMemberCount;
    }
    if (this._ikeGatewayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeGatewayName = this._ikeGatewayName;
    }
    if (this._ipsecSaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecSaName = this._ipsecSaName;
    }
    if (this._isNewGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNewGroup = this._isNewGroup;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperGroupListOperGroupListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._grpMemberCount = undefined;
      this._ikeGatewayName = undefined;
      this._ipsecSaName = undefined;
      this._isNewGroup = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._role = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._grpMemberCount = value.grpMemberCount;
      this._ikeGatewayName = value.ikeGatewayName;
      this._ipsecSaName = value.ipsecSaName;
      this._isNewGroup = value.isNewGroup;
      this._name = value.name;
      this._priority = value.priority;
      this._role = value.role;
      this._status = value.status;
    }
  }

  // grp_member_count - computed: false, optional: true, required: false
  private _grpMemberCount?: number; 
  public get grpMemberCount() {
    return this.getNumberAttribute('grp_member_count');
  }
  public set grpMemberCount(value: number) {
    this._grpMemberCount = value;
  }
  public resetGrpMemberCount() {
    this._grpMemberCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpMemberCountInput() {
    return this._grpMemberCount;
  }

  // ike_gateway_name - computed: false, optional: true, required: false
  private _ikeGatewayName?: string; 
  public get ikeGatewayName() {
    return this.getStringAttribute('ike_gateway_name');
  }
  public set ikeGatewayName(value: string) {
    this._ikeGatewayName = value;
  }
  public resetIkeGatewayName() {
    this._ikeGatewayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeGatewayNameInput() {
    return this._ikeGatewayName;
  }

  // ipsec_sa_name - computed: false, optional: true, required: false
  private _ipsecSaName?: string; 
  public get ipsecSaName() {
    return this.getStringAttribute('ipsec_sa_name');
  }
  public set ipsecSaName(value: string) {
    this._ipsecSaName = value;
  }
  public resetIpsecSaName() {
    this._ipsecSaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSaNameInput() {
    return this._ipsecSaName;
  }

  // is_new_group - computed: false, optional: true, required: false
  private _isNewGroup?: number; 
  public get isNewGroup() {
    return this.getNumberAttribute('is_new_group');
  }
  public set isNewGroup(value: number) {
    this._isNewGroup = value;
  }
  public resetIsNewGroup() {
    this._isNewGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNewGroupInput() {
    return this._isNewGroup;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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

export class DataThunderVpnOperGroupListOperGroupListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVpnOperGroupListOperGroupListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVpnOperGroupListOperGroupListStructOutputReference {
    return new DataThunderVpnOperGroupListOperGroupListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVpnOperGroupListOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#group_name DataThunderVpnOper#group_name}
  */
  readonly groupName?: string;
  /**
  * group_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#group_list DataThunderVpnOper#group_list}
  */
  readonly groupList?: DataThunderVpnOperGroupListOperGroupListStruct[] | cdktf.IResolvable;
}

export function dataThunderVpnOperGroupListOperToTerraform(struct?: DataThunderVpnOperGroupListOperOutputReference | DataThunderVpnOperGroupListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_name: cdktf.stringToTerraform(struct!.groupName),
    group_list: cdktf.listMapper(dataThunderVpnOperGroupListOperGroupListStructToTerraform, true)(struct!.groupList),
  }
}


export function dataThunderVpnOperGroupListOperToHclTerraform(struct?: DataThunderVpnOperGroupListOperOutputReference | DataThunderVpnOperGroupListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_list: {
      value: cdktf.listMapperHcl(dataThunderVpnOperGroupListOperGroupListStructToHclTerraform, true)(struct!.groupList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnOperGroupListOperGroupListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperGroupListOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnOperGroupListOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._groupList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupList = this._groupList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperGroupListOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupName = undefined;
      this._groupList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupName = value.groupName;
      this._groupList.internalValue = value.groupList;
    }
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // group_list - computed: false, optional: true, required: false
  private _groupList = new DataThunderVpnOperGroupListOperGroupListStructList(this, "group_list", false);
  public get groupList() {
    return this._groupList;
  }
  public putGroupList(value: DataThunderVpnOperGroupListOperGroupListStruct[] | cdktf.IResolvable) {
    this._groupList.internalValue = value;
  }
  public resetGroupList() {
    this._groupList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupListInput() {
    return this._groupList.internalValue;
  }
}
export interface DataThunderVpnOperGroupListStruct {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#oper DataThunderVpnOper#oper}
  */
  readonly oper?: DataThunderVpnOperGroupListOper;
}

export function dataThunderVpnOperGroupListStructToTerraform(struct?: DataThunderVpnOperGroupListStructOutputReference | DataThunderVpnOperGroupListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderVpnOperGroupListOperToTerraform(struct!.oper),
  }
}


export function dataThunderVpnOperGroupListStructToHclTerraform(struct?: DataThunderVpnOperGroupListStructOutputReference | DataThunderVpnOperGroupListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderVpnOperGroupListOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnOperGroupListOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperGroupListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnOperGroupListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperGroupListStruct | undefined) {
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
  private _oper = new DataThunderVpnOperGroupListOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVpnOperGroupListOper) {
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
export interface DataThunderVpnOperIkeGatewayListOperSaListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#dh_group DataThunderVpnOper#dh_group}
  */
  readonly dhGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#encryption DataThunderVpnOper#encryption}
  */
  readonly encryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#fragment_message_generated DataThunderVpnOper#fragment_message_generated}
  */
  readonly fragmentMessageGenerated?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#fragment_message_received DataThunderVpnOper#fragment_message_received}
  */
  readonly fragmentMessageReceived?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#fragment_reassemble_error DataThunderVpnOper#fragment_reassemble_error}
  */
  readonly fragmentReassembleError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#fragmentation_error DataThunderVpnOper#fragmentation_error}
  */
  readonly fragmentationError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#hash DataThunderVpnOper#hash}
  */
  readonly hash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#initiator_spi DataThunderVpnOper#initiator_spi}
  */
  readonly initiatorSpi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#lifetime DataThunderVpnOper#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#local_ip DataThunderVpnOper#local_ip}
  */
  readonly localIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#nat_traversal DataThunderVpnOper#nat_traversal}
  */
  readonly natTraversal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#remote_id DataThunderVpnOper#remote_id}
  */
  readonly remoteId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#remote_ip DataThunderVpnOper#remote_ip}
  */
  readonly remoteIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#responder_spi DataThunderVpnOper#responder_spi}
  */
  readonly responderSpi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#sign_hash DataThunderVpnOper#sign_hash}
  */
  readonly signHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#status DataThunderVpnOper#status}
  */
  readonly status?: string;
}

export function dataThunderVpnOperIkeGatewayListOperSaListStructToTerraform(struct?: DataThunderVpnOperIkeGatewayListOperSaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dh_group: cdktf.numberToTerraform(struct!.dhGroup),
    encryption: cdktf.stringToTerraform(struct!.encryption),
    fragment_message_generated: cdktf.numberToTerraform(struct!.fragmentMessageGenerated),
    fragment_message_received: cdktf.numberToTerraform(struct!.fragmentMessageReceived),
    fragment_reassemble_error: cdktf.numberToTerraform(struct!.fragmentReassembleError),
    fragmentation_error: cdktf.numberToTerraform(struct!.fragmentationError),
    hash: cdktf.stringToTerraform(struct!.hash),
    initiator_spi: cdktf.stringToTerraform(struct!.initiatorSpi),
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    local_ip: cdktf.stringToTerraform(struct!.localIp),
    nat_traversal: cdktf.numberToTerraform(struct!.natTraversal),
    remote_id: cdktf.stringToTerraform(struct!.remoteId),
    remote_ip: cdktf.stringToTerraform(struct!.remoteIp),
    responder_spi: cdktf.stringToTerraform(struct!.responderSpi),
    sign_hash: cdktf.stringToTerraform(struct!.signHash),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataThunderVpnOperIkeGatewayListOperSaListStructToHclTerraform(struct?: DataThunderVpnOperIkeGatewayListOperSaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dh_group: {
      value: cdktf.numberToHclTerraform(struct!.dhGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    encryption: {
      value: cdktf.stringToHclTerraform(struct!.encryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fragment_message_generated: {
      value: cdktf.numberToHclTerraform(struct!.fragmentMessageGenerated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fragment_message_received: {
      value: cdktf.numberToHclTerraform(struct!.fragmentMessageReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fragment_reassemble_error: {
      value: cdktf.numberToHclTerraform(struct!.fragmentReassembleError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fragmentation_error: {
      value: cdktf.numberToHclTerraform(struct!.fragmentationError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hash: {
      value: cdktf.stringToHclTerraform(struct!.hash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initiator_spi: {
      value: cdktf.stringToHclTerraform(struct!.initiatorSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_ip: {
      value: cdktf.stringToHclTerraform(struct!.localIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_traversal: {
      value: cdktf.numberToHclTerraform(struct!.natTraversal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_id: {
      value: cdktf.stringToHclTerraform(struct!.remoteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ip: {
      value: cdktf.stringToHclTerraform(struct!.remoteIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    responder_spi: {
      value: cdktf.stringToHclTerraform(struct!.responderSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sign_hash: {
      value: cdktf.stringToHclTerraform(struct!.signHash),
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

export class DataThunderVpnOperIkeGatewayListOperSaListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVpnOperIkeGatewayListOperSaListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhGroup = this._dhGroup;
    }
    if (this._encryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption;
    }
    if (this._fragmentMessageGenerated !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragmentMessageGenerated = this._fragmentMessageGenerated;
    }
    if (this._fragmentMessageReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragmentMessageReceived = this._fragmentMessageReceived;
    }
    if (this._fragmentReassembleError !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragmentReassembleError = this._fragmentReassembleError;
    }
    if (this._fragmentationError !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragmentationError = this._fragmentationError;
    }
    if (this._hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash;
    }
    if (this._initiatorSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.initiatorSpi = this._initiatorSpi;
    }
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    if (this._localIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.localIp = this._localIp;
    }
    if (this._natTraversal !== undefined) {
      hasAnyValues = true;
      internalValueResult.natTraversal = this._natTraversal;
    }
    if (this._remoteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteId = this._remoteId;
    }
    if (this._remoteIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIp = this._remoteIp;
    }
    if (this._responderSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.responderSpi = this._responderSpi;
    }
    if (this._signHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.signHash = this._signHash;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperIkeGatewayListOperSaListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhGroup = undefined;
      this._encryption = undefined;
      this._fragmentMessageGenerated = undefined;
      this._fragmentMessageReceived = undefined;
      this._fragmentReassembleError = undefined;
      this._fragmentationError = undefined;
      this._hash = undefined;
      this._initiatorSpi = undefined;
      this._lifetime = undefined;
      this._localIp = undefined;
      this._natTraversal = undefined;
      this._remoteId = undefined;
      this._remoteIp = undefined;
      this._responderSpi = undefined;
      this._signHash = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhGroup = value.dhGroup;
      this._encryption = value.encryption;
      this._fragmentMessageGenerated = value.fragmentMessageGenerated;
      this._fragmentMessageReceived = value.fragmentMessageReceived;
      this._fragmentReassembleError = value.fragmentReassembleError;
      this._fragmentationError = value.fragmentationError;
      this._hash = value.hash;
      this._initiatorSpi = value.initiatorSpi;
      this._lifetime = value.lifetime;
      this._localIp = value.localIp;
      this._natTraversal = value.natTraversal;
      this._remoteId = value.remoteId;
      this._remoteIp = value.remoteIp;
      this._responderSpi = value.responderSpi;
      this._signHash = value.signHash;
      this._status = value.status;
    }
  }

  // dh_group - computed: false, optional: true, required: false
  private _dhGroup?: number; 
  public get dhGroup() {
    return this.getNumberAttribute('dh_group');
  }
  public set dhGroup(value: number) {
    this._dhGroup = value;
  }
  public resetDhGroup() {
    this._dhGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroupInput() {
    return this._dhGroup;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption?: string; 
  public get encryption() {
    return this.getStringAttribute('encryption');
  }
  public set encryption(value: string) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // fragment_message_generated - computed: false, optional: true, required: false
  private _fragmentMessageGenerated?: number; 
  public get fragmentMessageGenerated() {
    return this.getNumberAttribute('fragment_message_generated');
  }
  public set fragmentMessageGenerated(value: number) {
    this._fragmentMessageGenerated = value;
  }
  public resetFragmentMessageGenerated() {
    this._fragmentMessageGenerated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentMessageGeneratedInput() {
    return this._fragmentMessageGenerated;
  }

  // fragment_message_received - computed: false, optional: true, required: false
  private _fragmentMessageReceived?: number; 
  public get fragmentMessageReceived() {
    return this.getNumberAttribute('fragment_message_received');
  }
  public set fragmentMessageReceived(value: number) {
    this._fragmentMessageReceived = value;
  }
  public resetFragmentMessageReceived() {
    this._fragmentMessageReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentMessageReceivedInput() {
    return this._fragmentMessageReceived;
  }

  // fragment_reassemble_error - computed: false, optional: true, required: false
  private _fragmentReassembleError?: number; 
  public get fragmentReassembleError() {
    return this.getNumberAttribute('fragment_reassemble_error');
  }
  public set fragmentReassembleError(value: number) {
    this._fragmentReassembleError = value;
  }
  public resetFragmentReassembleError() {
    this._fragmentReassembleError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentReassembleErrorInput() {
    return this._fragmentReassembleError;
  }

  // fragmentation_error - computed: false, optional: true, required: false
  private _fragmentationError?: number; 
  public get fragmentationError() {
    return this.getNumberAttribute('fragmentation_error');
  }
  public set fragmentationError(value: number) {
    this._fragmentationError = value;
  }
  public resetFragmentationError() {
    this._fragmentationError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentationErrorInput() {
    return this._fragmentationError;
  }

  // hash - computed: false, optional: true, required: false
  private _hash?: string; 
  public get hash() {
    return this.getStringAttribute('hash');
  }
  public set hash(value: string) {
    this._hash = value;
  }
  public resetHash() {
    this._hash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash;
  }

  // initiator_spi - computed: false, optional: true, required: false
  private _initiatorSpi?: string; 
  public get initiatorSpi() {
    return this.getStringAttribute('initiator_spi');
  }
  public set initiatorSpi(value: string) {
    this._initiatorSpi = value;
  }
  public resetInitiatorSpi() {
    this._initiatorSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiatorSpiInput() {
    return this._initiatorSpi;
  }

  // lifetime - computed: false, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }

  // local_ip - computed: false, optional: true, required: false
  private _localIp?: string; 
  public get localIp() {
    return this.getStringAttribute('local_ip');
  }
  public set localIp(value: string) {
    this._localIp = value;
  }
  public resetLocalIp() {
    this._localIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpInput() {
    return this._localIp;
  }

  // nat_traversal - computed: false, optional: true, required: false
  private _natTraversal?: number; 
  public get natTraversal() {
    return this.getNumberAttribute('nat_traversal');
  }
  public set natTraversal(value: number) {
    this._natTraversal = value;
  }
  public resetNatTraversal() {
    this._natTraversal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natTraversalInput() {
    return this._natTraversal;
  }

  // remote_id - computed: false, optional: true, required: false
  private _remoteId?: string; 
  public get remoteId() {
    return this.getStringAttribute('remote_id');
  }
  public set remoteId(value: string) {
    this._remoteId = value;
  }
  public resetRemoteId() {
    this._remoteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIdInput() {
    return this._remoteId;
  }

  // remote_ip - computed: false, optional: true, required: false
  private _remoteIp?: string; 
  public get remoteIp() {
    return this.getStringAttribute('remote_ip');
  }
  public set remoteIp(value: string) {
    this._remoteIp = value;
  }
  public resetRemoteIp() {
    this._remoteIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpInput() {
    return this._remoteIp;
  }

  // responder_spi - computed: false, optional: true, required: false
  private _responderSpi?: string; 
  public get responderSpi() {
    return this.getStringAttribute('responder_spi');
  }
  public set responderSpi(value: string) {
    this._responderSpi = value;
  }
  public resetResponderSpi() {
    this._responderSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responderSpiInput() {
    return this._responderSpi;
  }

  // sign_hash - computed: false, optional: true, required: false
  private _signHash?: string; 
  public get signHash() {
    return this.getStringAttribute('sign_hash');
  }
  public set signHash(value: string) {
    this._signHash = value;
  }
  public resetSignHash() {
    this._signHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signHashInput() {
    return this._signHash;
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

export class DataThunderVpnOperIkeGatewayListOperSaListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVpnOperIkeGatewayListOperSaListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVpnOperIkeGatewayListOperSaListStructOutputReference {
    return new DataThunderVpnOperIkeGatewayListOperSaListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVpnOperIkeGatewayListOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#brief_filter DataThunderVpnOper#brief_filter}
  */
  readonly briefFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#remote_id_filter DataThunderVpnOper#remote_id_filter}
  */
  readonly remoteIdFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#remote_ip_filter DataThunderVpnOper#remote_ip_filter}
  */
  readonly remoteIpFilter?: string;
  /**
  * sa_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#sa_list DataThunderVpnOper#sa_list}
  */
  readonly saList?: DataThunderVpnOperIkeGatewayListOperSaListStruct[] | cdktf.IResolvable;
}

export function dataThunderVpnOperIkeGatewayListOperToTerraform(struct?: DataThunderVpnOperIkeGatewayListOperOutputReference | DataThunderVpnOperIkeGatewayListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    brief_filter: cdktf.stringToTerraform(struct!.briefFilter),
    remote_id_filter: cdktf.stringToTerraform(struct!.remoteIdFilter),
    remote_ip_filter: cdktf.stringToTerraform(struct!.remoteIpFilter),
    sa_list: cdktf.listMapper(dataThunderVpnOperIkeGatewayListOperSaListStructToTerraform, true)(struct!.saList),
  }
}


export function dataThunderVpnOperIkeGatewayListOperToHclTerraform(struct?: DataThunderVpnOperIkeGatewayListOperOutputReference | DataThunderVpnOperIkeGatewayListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    brief_filter: {
      value: cdktf.stringToHclTerraform(struct!.briefFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_id_filter: {
      value: cdktf.stringToHclTerraform(struct!.remoteIdFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ip_filter: {
      value: cdktf.stringToHclTerraform(struct!.remoteIpFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sa_list: {
      value: cdktf.listMapperHcl(dataThunderVpnOperIkeGatewayListOperSaListStructToHclTerraform, true)(struct!.saList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnOperIkeGatewayListOperSaListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperIkeGatewayListOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnOperIkeGatewayListOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._briefFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.briefFilter = this._briefFilter;
    }
    if (this._remoteIdFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIdFilter = this._remoteIdFilter;
    }
    if (this._remoteIpFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIpFilter = this._remoteIpFilter;
    }
    if (this._saList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.saList = this._saList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperIkeGatewayListOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._briefFilter = undefined;
      this._remoteIdFilter = undefined;
      this._remoteIpFilter = undefined;
      this._saList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._briefFilter = value.briefFilter;
      this._remoteIdFilter = value.remoteIdFilter;
      this._remoteIpFilter = value.remoteIpFilter;
      this._saList.internalValue = value.saList;
    }
  }

  // brief_filter - computed: false, optional: true, required: false
  private _briefFilter?: string; 
  public get briefFilter() {
    return this.getStringAttribute('brief_filter');
  }
  public set briefFilter(value: string) {
    this._briefFilter = value;
  }
  public resetBriefFilter() {
    this._briefFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get briefFilterInput() {
    return this._briefFilter;
  }

  // remote_id_filter - computed: false, optional: true, required: false
  private _remoteIdFilter?: string; 
  public get remoteIdFilter() {
    return this.getStringAttribute('remote_id_filter');
  }
  public set remoteIdFilter(value: string) {
    this._remoteIdFilter = value;
  }
  public resetRemoteIdFilter() {
    this._remoteIdFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIdFilterInput() {
    return this._remoteIdFilter;
  }

  // remote_ip_filter - computed: false, optional: true, required: false
  private _remoteIpFilter?: string; 
  public get remoteIpFilter() {
    return this.getStringAttribute('remote_ip_filter');
  }
  public set remoteIpFilter(value: string) {
    this._remoteIpFilter = value;
  }
  public resetRemoteIpFilter() {
    this._remoteIpFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpFilterInput() {
    return this._remoteIpFilter;
  }

  // sa_list - computed: false, optional: true, required: false
  private _saList = new DataThunderVpnOperIkeGatewayListOperSaListStructList(this, "sa_list", false);
  public get saList() {
    return this._saList;
  }
  public putSaList(value: DataThunderVpnOperIkeGatewayListOperSaListStruct[] | cdktf.IResolvable) {
    this._saList.internalValue = value;
  }
  public resetSaList() {
    this._saList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saListInput() {
    return this._saList.internalValue;
  }
}
export interface DataThunderVpnOperIkeGatewayListStruct {
  /**
  * IKE-gateway name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#name DataThunderVpnOper#name}
  */
  readonly name: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#oper DataThunderVpnOper#oper}
  */
  readonly oper?: DataThunderVpnOperIkeGatewayListOper;
}

export function dataThunderVpnOperIkeGatewayListStructToTerraform(struct?: DataThunderVpnOperIkeGatewayListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    oper: dataThunderVpnOperIkeGatewayListOperToTerraform(struct!.oper),
  }
}


export function dataThunderVpnOperIkeGatewayListStructToHclTerraform(struct?: DataThunderVpnOperIkeGatewayListStruct | cdktf.IResolvable): any {
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
    oper: {
      value: dataThunderVpnOperIkeGatewayListOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnOperIkeGatewayListOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperIkeGatewayListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVpnOperIkeGatewayListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperIkeGatewayListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._oper.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._oper.internalValue = value.oper;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderVpnOperIkeGatewayListOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVpnOperIkeGatewayListOper) {
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

export class DataThunderVpnOperIkeGatewayListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVpnOperIkeGatewayListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVpnOperIkeGatewayListStructOutputReference {
    return new DataThunderVpnOperIkeGatewayListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVpnOperIkeSaOperIkeSaListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#encryption DataThunderVpnOper#encryption}
  */
  readonly encryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#hash DataThunderVpnOper#hash}
  */
  readonly hash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#initiator_spi DataThunderVpnOper#initiator_spi}
  */
  readonly initiatorSpi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#lifetime DataThunderVpnOper#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#local_ip DataThunderVpnOper#local_ip}
  */
  readonly localIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#name DataThunderVpnOper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#nat_traversal DataThunderVpnOper#nat_traversal}
  */
  readonly natTraversal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#remote_ip DataThunderVpnOper#remote_ip}
  */
  readonly remoteIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#responder_spi DataThunderVpnOper#responder_spi}
  */
  readonly responderSpi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#status DataThunderVpnOper#status}
  */
  readonly status?: string;
}

export function dataThunderVpnOperIkeSaOperIkeSaListStructToTerraform(struct?: DataThunderVpnOperIkeSaOperIkeSaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption: cdktf.stringToTerraform(struct!.encryption),
    hash: cdktf.stringToTerraform(struct!.hash),
    initiator_spi: cdktf.stringToTerraform(struct!.initiatorSpi),
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    local_ip: cdktf.stringToTerraform(struct!.localIp),
    name: cdktf.stringToTerraform(struct!.name),
    nat_traversal: cdktf.numberToTerraform(struct!.natTraversal),
    remote_ip: cdktf.stringToTerraform(struct!.remoteIp),
    responder_spi: cdktf.stringToTerraform(struct!.responderSpi),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataThunderVpnOperIkeSaOperIkeSaListStructToHclTerraform(struct?: DataThunderVpnOperIkeSaOperIkeSaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption: {
      value: cdktf.stringToHclTerraform(struct!.encryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hash: {
      value: cdktf.stringToHclTerraform(struct!.hash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initiator_spi: {
      value: cdktf.stringToHclTerraform(struct!.initiatorSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_ip: {
      value: cdktf.stringToHclTerraform(struct!.localIp),
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
    nat_traversal: {
      value: cdktf.numberToHclTerraform(struct!.natTraversal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_ip: {
      value: cdktf.stringToHclTerraform(struct!.remoteIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    responder_spi: {
      value: cdktf.stringToHclTerraform(struct!.responderSpi),
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

export class DataThunderVpnOperIkeSaOperIkeSaListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVpnOperIkeSaOperIkeSaListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption;
    }
    if (this._hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash;
    }
    if (this._initiatorSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.initiatorSpi = this._initiatorSpi;
    }
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    if (this._localIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.localIp = this._localIp;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._natTraversal !== undefined) {
      hasAnyValues = true;
      internalValueResult.natTraversal = this._natTraversal;
    }
    if (this._remoteIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIp = this._remoteIp;
    }
    if (this._responderSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.responderSpi = this._responderSpi;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperIkeSaOperIkeSaListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryption = undefined;
      this._hash = undefined;
      this._initiatorSpi = undefined;
      this._lifetime = undefined;
      this._localIp = undefined;
      this._name = undefined;
      this._natTraversal = undefined;
      this._remoteIp = undefined;
      this._responderSpi = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryption = value.encryption;
      this._hash = value.hash;
      this._initiatorSpi = value.initiatorSpi;
      this._lifetime = value.lifetime;
      this._localIp = value.localIp;
      this._name = value.name;
      this._natTraversal = value.natTraversal;
      this._remoteIp = value.remoteIp;
      this._responderSpi = value.responderSpi;
      this._status = value.status;
    }
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption?: string; 
  public get encryption() {
    return this.getStringAttribute('encryption');
  }
  public set encryption(value: string) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // hash - computed: false, optional: true, required: false
  private _hash?: string; 
  public get hash() {
    return this.getStringAttribute('hash');
  }
  public set hash(value: string) {
    this._hash = value;
  }
  public resetHash() {
    this._hash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash;
  }

  // initiator_spi - computed: false, optional: true, required: false
  private _initiatorSpi?: string; 
  public get initiatorSpi() {
    return this.getStringAttribute('initiator_spi');
  }
  public set initiatorSpi(value: string) {
    this._initiatorSpi = value;
  }
  public resetInitiatorSpi() {
    this._initiatorSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiatorSpiInput() {
    return this._initiatorSpi;
  }

  // lifetime - computed: false, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }

  // local_ip - computed: false, optional: true, required: false
  private _localIp?: string; 
  public get localIp() {
    return this.getStringAttribute('local_ip');
  }
  public set localIp(value: string) {
    this._localIp = value;
  }
  public resetLocalIp() {
    this._localIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpInput() {
    return this._localIp;
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

  // nat_traversal - computed: false, optional: true, required: false
  private _natTraversal?: number; 
  public get natTraversal() {
    return this.getNumberAttribute('nat_traversal');
  }
  public set natTraversal(value: number) {
    this._natTraversal = value;
  }
  public resetNatTraversal() {
    this._natTraversal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natTraversalInput() {
    return this._natTraversal;
  }

  // remote_ip - computed: false, optional: true, required: false
  private _remoteIp?: string; 
  public get remoteIp() {
    return this.getStringAttribute('remote_ip');
  }
  public set remoteIp(value: string) {
    this._remoteIp = value;
  }
  public resetRemoteIp() {
    this._remoteIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpInput() {
    return this._remoteIp;
  }

  // responder_spi - computed: false, optional: true, required: false
  private _responderSpi?: string; 
  public get responderSpi() {
    return this.getStringAttribute('responder_spi');
  }
  public set responderSpi(value: string) {
    this._responderSpi = value;
  }
  public resetResponderSpi() {
    this._responderSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responderSpiInput() {
    return this._responderSpi;
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

export class DataThunderVpnOperIkeSaOperIkeSaListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVpnOperIkeSaOperIkeSaListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVpnOperIkeSaOperIkeSaListStructOutputReference {
    return new DataThunderVpnOperIkeSaOperIkeSaListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVpnOperIkeSaOper {
  /**
  * ike_sa_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_sa_list DataThunderVpnOper#ike_sa_list}
  */
  readonly ikeSaList?: DataThunderVpnOperIkeSaOperIkeSaListStruct[] | cdktf.IResolvable;
}

export function dataThunderVpnOperIkeSaOperToTerraform(struct?: DataThunderVpnOperIkeSaOperOutputReference | DataThunderVpnOperIkeSaOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ike_sa_list: cdktf.listMapper(dataThunderVpnOperIkeSaOperIkeSaListStructToTerraform, true)(struct!.ikeSaList),
  }
}


export function dataThunderVpnOperIkeSaOperToHclTerraform(struct?: DataThunderVpnOperIkeSaOperOutputReference | DataThunderVpnOperIkeSaOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ike_sa_list: {
      value: cdktf.listMapperHcl(dataThunderVpnOperIkeSaOperIkeSaListStructToHclTerraform, true)(struct!.ikeSaList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnOperIkeSaOperIkeSaListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperIkeSaOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnOperIkeSaOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ikeSaList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeSaList = this._ikeSaList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperIkeSaOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ikeSaList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ikeSaList.internalValue = value.ikeSaList;
    }
  }

  // ike_sa_list - computed: false, optional: true, required: false
  private _ikeSaList = new DataThunderVpnOperIkeSaOperIkeSaListStructList(this, "ike_sa_list", false);
  public get ikeSaList() {
    return this._ikeSaList;
  }
  public putIkeSaList(value: DataThunderVpnOperIkeSaOperIkeSaListStruct[] | cdktf.IResolvable) {
    this._ikeSaList.internalValue = value;
  }
  public resetIkeSaList() {
    this._ikeSaList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaListInput() {
    return this._ikeSaList.internalValue;
  }
}
export interface DataThunderVpnOperIkeSa {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#oper DataThunderVpnOper#oper}
  */
  readonly oper?: DataThunderVpnOperIkeSaOper;
}

export function dataThunderVpnOperIkeSaToTerraform(struct?: DataThunderVpnOperIkeSaOutputReference | DataThunderVpnOperIkeSa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderVpnOperIkeSaOperToTerraform(struct!.oper),
  }
}


export function dataThunderVpnOperIkeSaToHclTerraform(struct?: DataThunderVpnOperIkeSaOutputReference | DataThunderVpnOperIkeSa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderVpnOperIkeSaOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnOperIkeSaOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperIkeSaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnOperIkeSa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperIkeSa | undefined) {
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
  private _oper = new DataThunderVpnOperIkeSaOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVpnOperIkeSaOper) {
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
export interface DataThunderVpnOperIkeSaBriefOperIkeSaBriefRemoteGw {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_sa_brief_remote_gw_id DataThunderVpnOper#ike_sa_brief_remote_gw_id}
  */
  readonly ikeSaBriefRemoteGwId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_sa_brief_remote_gw_ip DataThunderVpnOper#ike_sa_brief_remote_gw_ip}
  */
  readonly ikeSaBriefRemoteGwIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_sa_brief_remote_gw_lifetime DataThunderVpnOper#ike_sa_brief_remote_gw_lifetime}
  */
  readonly ikeSaBriefRemoteGwLifetime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_sa_brief_remote_gw_status DataThunderVpnOper#ike_sa_brief_remote_gw_status}
  */
  readonly ikeSaBriefRemoteGwStatus?: string;
}

export function dataThunderVpnOperIkeSaBriefOperIkeSaBriefRemoteGwToTerraform(struct?: DataThunderVpnOperIkeSaBriefOperIkeSaBriefRemoteGw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ike_sa_brief_remote_gw_id: cdktf.stringToTerraform(struct!.ikeSaBriefRemoteGwId),
    ike_sa_brief_remote_gw_ip: cdktf.stringToTerraform(struct!.ikeSaBriefRemoteGwIp),
    ike_sa_brief_remote_gw_lifetime: cdktf.stringToTerraform(struct!.ikeSaBriefRemoteGwLifetime),
    ike_sa_brief_remote_gw_status: cdktf.stringToTerraform(struct!.ikeSaBriefRemoteGwStatus),
  }
}


export function dataThunderVpnOperIkeSaBriefOperIkeSaBriefRemoteGwToHclTerraform(struct?: DataThunderVpnOperIkeSaBriefOperIkeSaBriefRemoteGw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ike_sa_brief_remote_gw_id: {
      value: cdktf.stringToHclTerraform(struct!.ikeSaBriefRemoteGwId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_sa_brief_remote_gw_ip: {
      value: cdktf.stringToHclTerraform(struct!.ikeSaBriefRemoteGwIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_sa_brief_remote_gw_lifetime: {
      value: cdktf.stringToHclTerraform(struct!.ikeSaBriefRemoteGwLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_sa_brief_remote_gw_status: {
      value: cdktf.stringToHclTerraform(struct!.ikeSaBriefRemoteGwStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperIkeSaBriefOperIkeSaBriefRemoteGwOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVpnOperIkeSaBriefOperIkeSaBriefRemoteGw | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ikeSaBriefRemoteGwId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeSaBriefRemoteGwId = this._ikeSaBriefRemoteGwId;
    }
    if (this._ikeSaBriefRemoteGwIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeSaBriefRemoteGwIp = this._ikeSaBriefRemoteGwIp;
    }
    if (this._ikeSaBriefRemoteGwLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeSaBriefRemoteGwLifetime = this._ikeSaBriefRemoteGwLifetime;
    }
    if (this._ikeSaBriefRemoteGwStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeSaBriefRemoteGwStatus = this._ikeSaBriefRemoteGwStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperIkeSaBriefOperIkeSaBriefRemoteGw | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ikeSaBriefRemoteGwId = undefined;
      this._ikeSaBriefRemoteGwIp = undefined;
      this._ikeSaBriefRemoteGwLifetime = undefined;
      this._ikeSaBriefRemoteGwStatus = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ikeSaBriefRemoteGwId = value.ikeSaBriefRemoteGwId;
      this._ikeSaBriefRemoteGwIp = value.ikeSaBriefRemoteGwIp;
      this._ikeSaBriefRemoteGwLifetime = value.ikeSaBriefRemoteGwLifetime;
      this._ikeSaBriefRemoteGwStatus = value.ikeSaBriefRemoteGwStatus;
    }
  }

  // ike_sa_brief_remote_gw_id - computed: false, optional: true, required: false
  private _ikeSaBriefRemoteGwId?: string; 
  public get ikeSaBriefRemoteGwId() {
    return this.getStringAttribute('ike_sa_brief_remote_gw_id');
  }
  public set ikeSaBriefRemoteGwId(value: string) {
    this._ikeSaBriefRemoteGwId = value;
  }
  public resetIkeSaBriefRemoteGwId() {
    this._ikeSaBriefRemoteGwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaBriefRemoteGwIdInput() {
    return this._ikeSaBriefRemoteGwId;
  }

  // ike_sa_brief_remote_gw_ip - computed: false, optional: true, required: false
  private _ikeSaBriefRemoteGwIp?: string; 
  public get ikeSaBriefRemoteGwIp() {
    return this.getStringAttribute('ike_sa_brief_remote_gw_ip');
  }
  public set ikeSaBriefRemoteGwIp(value: string) {
    this._ikeSaBriefRemoteGwIp = value;
  }
  public resetIkeSaBriefRemoteGwIp() {
    this._ikeSaBriefRemoteGwIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaBriefRemoteGwIpInput() {
    return this._ikeSaBriefRemoteGwIp;
  }

  // ike_sa_brief_remote_gw_lifetime - computed: false, optional: true, required: false
  private _ikeSaBriefRemoteGwLifetime?: string; 
  public get ikeSaBriefRemoteGwLifetime() {
    return this.getStringAttribute('ike_sa_brief_remote_gw_lifetime');
  }
  public set ikeSaBriefRemoteGwLifetime(value: string) {
    this._ikeSaBriefRemoteGwLifetime = value;
  }
  public resetIkeSaBriefRemoteGwLifetime() {
    this._ikeSaBriefRemoteGwLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaBriefRemoteGwLifetimeInput() {
    return this._ikeSaBriefRemoteGwLifetime;
  }

  // ike_sa_brief_remote_gw_status - computed: false, optional: true, required: false
  private _ikeSaBriefRemoteGwStatus?: string; 
  public get ikeSaBriefRemoteGwStatus() {
    return this.getStringAttribute('ike_sa_brief_remote_gw_status');
  }
  public set ikeSaBriefRemoteGwStatus(value: string) {
    this._ikeSaBriefRemoteGwStatus = value;
  }
  public resetIkeSaBriefRemoteGwStatus() {
    this._ikeSaBriefRemoteGwStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaBriefRemoteGwStatusInput() {
    return this._ikeSaBriefRemoteGwStatus;
  }
}

export class DataThunderVpnOperIkeSaBriefOperIkeSaBriefRemoteGwList extends cdktf.ComplexList {
  public internalValue? : DataThunderVpnOperIkeSaBriefOperIkeSaBriefRemoteGw[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVpnOperIkeSaBriefOperIkeSaBriefRemoteGwOutputReference {
    return new DataThunderVpnOperIkeSaBriefOperIkeSaBriefRemoteGwOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVpnOperIkeSaBriefOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#local_ip DataThunderVpnOper#local_ip}
  */
  readonly localIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#name DataThunderVpnOper#name}
  */
  readonly name?: string;
  /**
  * ike_sa_brief_remote_gw block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_sa_brief_remote_gw DataThunderVpnOper#ike_sa_brief_remote_gw}
  */
  readonly ikeSaBriefRemoteGw?: DataThunderVpnOperIkeSaBriefOperIkeSaBriefRemoteGw[] | cdktf.IResolvable;
}

export function dataThunderVpnOperIkeSaBriefOperToTerraform(struct?: DataThunderVpnOperIkeSaBriefOperOutputReference | DataThunderVpnOperIkeSaBriefOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_ip: cdktf.stringToTerraform(struct!.localIp),
    name: cdktf.stringToTerraform(struct!.name),
    ike_sa_brief_remote_gw: cdktf.listMapper(dataThunderVpnOperIkeSaBriefOperIkeSaBriefRemoteGwToTerraform, true)(struct!.ikeSaBriefRemoteGw),
  }
}


export function dataThunderVpnOperIkeSaBriefOperToHclTerraform(struct?: DataThunderVpnOperIkeSaBriefOperOutputReference | DataThunderVpnOperIkeSaBriefOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_ip: {
      value: cdktf.stringToHclTerraform(struct!.localIp),
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
    ike_sa_brief_remote_gw: {
      value: cdktf.listMapperHcl(dataThunderVpnOperIkeSaBriefOperIkeSaBriefRemoteGwToHclTerraform, true)(struct!.ikeSaBriefRemoteGw),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnOperIkeSaBriefOperIkeSaBriefRemoteGwList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperIkeSaBriefOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnOperIkeSaBriefOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.localIp = this._localIp;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ikeSaBriefRemoteGw?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeSaBriefRemoteGw = this._ikeSaBriefRemoteGw?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperIkeSaBriefOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localIp = undefined;
      this._name = undefined;
      this._ikeSaBriefRemoteGw.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localIp = value.localIp;
      this._name = value.name;
      this._ikeSaBriefRemoteGw.internalValue = value.ikeSaBriefRemoteGw;
    }
  }

  // local_ip - computed: false, optional: true, required: false
  private _localIp?: string; 
  public get localIp() {
    return this.getStringAttribute('local_ip');
  }
  public set localIp(value: string) {
    this._localIp = value;
  }
  public resetLocalIp() {
    this._localIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpInput() {
    return this._localIp;
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

  // ike_sa_brief_remote_gw - computed: false, optional: true, required: false
  private _ikeSaBriefRemoteGw = new DataThunderVpnOperIkeSaBriefOperIkeSaBriefRemoteGwList(this, "ike_sa_brief_remote_gw", false);
  public get ikeSaBriefRemoteGw() {
    return this._ikeSaBriefRemoteGw;
  }
  public putIkeSaBriefRemoteGw(value: DataThunderVpnOperIkeSaBriefOperIkeSaBriefRemoteGw[] | cdktf.IResolvable) {
    this._ikeSaBriefRemoteGw.internalValue = value;
  }
  public resetIkeSaBriefRemoteGw() {
    this._ikeSaBriefRemoteGw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaBriefRemoteGwInput() {
    return this._ikeSaBriefRemoteGw.internalValue;
  }
}
export interface DataThunderVpnOperIkeSaBrief {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#oper DataThunderVpnOper#oper}
  */
  readonly oper?: DataThunderVpnOperIkeSaBriefOper;
}

export function dataThunderVpnOperIkeSaBriefToTerraform(struct?: DataThunderVpnOperIkeSaBriefOutputReference | DataThunderVpnOperIkeSaBrief): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderVpnOperIkeSaBriefOperToTerraform(struct!.oper),
  }
}


export function dataThunderVpnOperIkeSaBriefToHclTerraform(struct?: DataThunderVpnOperIkeSaBriefOutputReference | DataThunderVpnOperIkeSaBrief): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderVpnOperIkeSaBriefOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnOperIkeSaBriefOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperIkeSaBriefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnOperIkeSaBrief | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperIkeSaBrief | undefined) {
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
  private _oper = new DataThunderVpnOperIkeSaBriefOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVpnOperIkeSaBriefOper) {
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
export interface DataThunderVpnOperIkeSaClientsOperIkeSaClientsRemoteGw {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_sa_clients_remote_gw_bytes DataThunderVpnOper#ike_sa_clients_remote_gw_bytes}
  */
  readonly ikeSaClientsRemoteGwBytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_sa_clients_remote_gw_idle_time DataThunderVpnOper#ike_sa_clients_remote_gw_idle_time}
  */
  readonly ikeSaClientsRemoteGwIdleTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_sa_clients_remote_gw_ip DataThunderVpnOper#ike_sa_clients_remote_gw_ip}
  */
  readonly ikeSaClientsRemoteGwIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_sa_clients_remote_gw_remote_id DataThunderVpnOper#ike_sa_clients_remote_gw_remote_id}
  */
  readonly ikeSaClientsRemoteGwRemoteId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_sa_clients_remote_gw_session_time DataThunderVpnOper#ike_sa_clients_remote_gw_session_time}
  */
  readonly ikeSaClientsRemoteGwSessionTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_sa_clients_remote_gw_user_id DataThunderVpnOper#ike_sa_clients_remote_gw_user_id}
  */
  readonly ikeSaClientsRemoteGwUserId?: string;
}

export function dataThunderVpnOperIkeSaClientsOperIkeSaClientsRemoteGwToTerraform(struct?: DataThunderVpnOperIkeSaClientsOperIkeSaClientsRemoteGw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ike_sa_clients_remote_gw_bytes: cdktf.stringToTerraform(struct!.ikeSaClientsRemoteGwBytes),
    ike_sa_clients_remote_gw_idle_time: cdktf.stringToTerraform(struct!.ikeSaClientsRemoteGwIdleTime),
    ike_sa_clients_remote_gw_ip: cdktf.stringToTerraform(struct!.ikeSaClientsRemoteGwIp),
    ike_sa_clients_remote_gw_remote_id: cdktf.stringToTerraform(struct!.ikeSaClientsRemoteGwRemoteId),
    ike_sa_clients_remote_gw_session_time: cdktf.stringToTerraform(struct!.ikeSaClientsRemoteGwSessionTime),
    ike_sa_clients_remote_gw_user_id: cdktf.stringToTerraform(struct!.ikeSaClientsRemoteGwUserId),
  }
}


export function dataThunderVpnOperIkeSaClientsOperIkeSaClientsRemoteGwToHclTerraform(struct?: DataThunderVpnOperIkeSaClientsOperIkeSaClientsRemoteGw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ike_sa_clients_remote_gw_bytes: {
      value: cdktf.stringToHclTerraform(struct!.ikeSaClientsRemoteGwBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_sa_clients_remote_gw_idle_time: {
      value: cdktf.stringToHclTerraform(struct!.ikeSaClientsRemoteGwIdleTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_sa_clients_remote_gw_ip: {
      value: cdktf.stringToHclTerraform(struct!.ikeSaClientsRemoteGwIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_sa_clients_remote_gw_remote_id: {
      value: cdktf.stringToHclTerraform(struct!.ikeSaClientsRemoteGwRemoteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_sa_clients_remote_gw_session_time: {
      value: cdktf.stringToHclTerraform(struct!.ikeSaClientsRemoteGwSessionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_sa_clients_remote_gw_user_id: {
      value: cdktf.stringToHclTerraform(struct!.ikeSaClientsRemoteGwUserId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperIkeSaClientsOperIkeSaClientsRemoteGwOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVpnOperIkeSaClientsOperIkeSaClientsRemoteGw | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ikeSaClientsRemoteGwBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeSaClientsRemoteGwBytes = this._ikeSaClientsRemoteGwBytes;
    }
    if (this._ikeSaClientsRemoteGwIdleTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeSaClientsRemoteGwIdleTime = this._ikeSaClientsRemoteGwIdleTime;
    }
    if (this._ikeSaClientsRemoteGwIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeSaClientsRemoteGwIp = this._ikeSaClientsRemoteGwIp;
    }
    if (this._ikeSaClientsRemoteGwRemoteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeSaClientsRemoteGwRemoteId = this._ikeSaClientsRemoteGwRemoteId;
    }
    if (this._ikeSaClientsRemoteGwSessionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeSaClientsRemoteGwSessionTime = this._ikeSaClientsRemoteGwSessionTime;
    }
    if (this._ikeSaClientsRemoteGwUserId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeSaClientsRemoteGwUserId = this._ikeSaClientsRemoteGwUserId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperIkeSaClientsOperIkeSaClientsRemoteGw | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ikeSaClientsRemoteGwBytes = undefined;
      this._ikeSaClientsRemoteGwIdleTime = undefined;
      this._ikeSaClientsRemoteGwIp = undefined;
      this._ikeSaClientsRemoteGwRemoteId = undefined;
      this._ikeSaClientsRemoteGwSessionTime = undefined;
      this._ikeSaClientsRemoteGwUserId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ikeSaClientsRemoteGwBytes = value.ikeSaClientsRemoteGwBytes;
      this._ikeSaClientsRemoteGwIdleTime = value.ikeSaClientsRemoteGwIdleTime;
      this._ikeSaClientsRemoteGwIp = value.ikeSaClientsRemoteGwIp;
      this._ikeSaClientsRemoteGwRemoteId = value.ikeSaClientsRemoteGwRemoteId;
      this._ikeSaClientsRemoteGwSessionTime = value.ikeSaClientsRemoteGwSessionTime;
      this._ikeSaClientsRemoteGwUserId = value.ikeSaClientsRemoteGwUserId;
    }
  }

  // ike_sa_clients_remote_gw_bytes - computed: false, optional: true, required: false
  private _ikeSaClientsRemoteGwBytes?: string; 
  public get ikeSaClientsRemoteGwBytes() {
    return this.getStringAttribute('ike_sa_clients_remote_gw_bytes');
  }
  public set ikeSaClientsRemoteGwBytes(value: string) {
    this._ikeSaClientsRemoteGwBytes = value;
  }
  public resetIkeSaClientsRemoteGwBytes() {
    this._ikeSaClientsRemoteGwBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaClientsRemoteGwBytesInput() {
    return this._ikeSaClientsRemoteGwBytes;
  }

  // ike_sa_clients_remote_gw_idle_time - computed: false, optional: true, required: false
  private _ikeSaClientsRemoteGwIdleTime?: string; 
  public get ikeSaClientsRemoteGwIdleTime() {
    return this.getStringAttribute('ike_sa_clients_remote_gw_idle_time');
  }
  public set ikeSaClientsRemoteGwIdleTime(value: string) {
    this._ikeSaClientsRemoteGwIdleTime = value;
  }
  public resetIkeSaClientsRemoteGwIdleTime() {
    this._ikeSaClientsRemoteGwIdleTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaClientsRemoteGwIdleTimeInput() {
    return this._ikeSaClientsRemoteGwIdleTime;
  }

  // ike_sa_clients_remote_gw_ip - computed: false, optional: true, required: false
  private _ikeSaClientsRemoteGwIp?: string; 
  public get ikeSaClientsRemoteGwIp() {
    return this.getStringAttribute('ike_sa_clients_remote_gw_ip');
  }
  public set ikeSaClientsRemoteGwIp(value: string) {
    this._ikeSaClientsRemoteGwIp = value;
  }
  public resetIkeSaClientsRemoteGwIp() {
    this._ikeSaClientsRemoteGwIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaClientsRemoteGwIpInput() {
    return this._ikeSaClientsRemoteGwIp;
  }

  // ike_sa_clients_remote_gw_remote_id - computed: false, optional: true, required: false
  private _ikeSaClientsRemoteGwRemoteId?: string; 
  public get ikeSaClientsRemoteGwRemoteId() {
    return this.getStringAttribute('ike_sa_clients_remote_gw_remote_id');
  }
  public set ikeSaClientsRemoteGwRemoteId(value: string) {
    this._ikeSaClientsRemoteGwRemoteId = value;
  }
  public resetIkeSaClientsRemoteGwRemoteId() {
    this._ikeSaClientsRemoteGwRemoteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaClientsRemoteGwRemoteIdInput() {
    return this._ikeSaClientsRemoteGwRemoteId;
  }

  // ike_sa_clients_remote_gw_session_time - computed: false, optional: true, required: false
  private _ikeSaClientsRemoteGwSessionTime?: string; 
  public get ikeSaClientsRemoteGwSessionTime() {
    return this.getStringAttribute('ike_sa_clients_remote_gw_session_time');
  }
  public set ikeSaClientsRemoteGwSessionTime(value: string) {
    this._ikeSaClientsRemoteGwSessionTime = value;
  }
  public resetIkeSaClientsRemoteGwSessionTime() {
    this._ikeSaClientsRemoteGwSessionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaClientsRemoteGwSessionTimeInput() {
    return this._ikeSaClientsRemoteGwSessionTime;
  }

  // ike_sa_clients_remote_gw_user_id - computed: false, optional: true, required: false
  private _ikeSaClientsRemoteGwUserId?: string; 
  public get ikeSaClientsRemoteGwUserId() {
    return this.getStringAttribute('ike_sa_clients_remote_gw_user_id');
  }
  public set ikeSaClientsRemoteGwUserId(value: string) {
    this._ikeSaClientsRemoteGwUserId = value;
  }
  public resetIkeSaClientsRemoteGwUserId() {
    this._ikeSaClientsRemoteGwUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaClientsRemoteGwUserIdInput() {
    return this._ikeSaClientsRemoteGwUserId;
  }
}

export class DataThunderVpnOperIkeSaClientsOperIkeSaClientsRemoteGwList extends cdktf.ComplexList {
  public internalValue? : DataThunderVpnOperIkeSaClientsOperIkeSaClientsRemoteGw[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVpnOperIkeSaClientsOperIkeSaClientsRemoteGwOutputReference {
    return new DataThunderVpnOperIkeSaClientsOperIkeSaClientsRemoteGwOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVpnOperIkeSaClientsOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_sa_clients_local_ip DataThunderVpnOper#ike_sa_clients_local_ip}
  */
  readonly ikeSaClientsLocalIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#name DataThunderVpnOper#name}
  */
  readonly name?: string;
  /**
  * ike_sa_clients_remote_gw block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_sa_clients_remote_gw DataThunderVpnOper#ike_sa_clients_remote_gw}
  */
  readonly ikeSaClientsRemoteGw?: DataThunderVpnOperIkeSaClientsOperIkeSaClientsRemoteGw[] | cdktf.IResolvable;
}

export function dataThunderVpnOperIkeSaClientsOperToTerraform(struct?: DataThunderVpnOperIkeSaClientsOperOutputReference | DataThunderVpnOperIkeSaClientsOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ike_sa_clients_local_ip: cdktf.stringToTerraform(struct!.ikeSaClientsLocalIp),
    name: cdktf.stringToTerraform(struct!.name),
    ike_sa_clients_remote_gw: cdktf.listMapper(dataThunderVpnOperIkeSaClientsOperIkeSaClientsRemoteGwToTerraform, true)(struct!.ikeSaClientsRemoteGw),
  }
}


export function dataThunderVpnOperIkeSaClientsOperToHclTerraform(struct?: DataThunderVpnOperIkeSaClientsOperOutputReference | DataThunderVpnOperIkeSaClientsOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ike_sa_clients_local_ip: {
      value: cdktf.stringToHclTerraform(struct!.ikeSaClientsLocalIp),
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
    ike_sa_clients_remote_gw: {
      value: cdktf.listMapperHcl(dataThunderVpnOperIkeSaClientsOperIkeSaClientsRemoteGwToHclTerraform, true)(struct!.ikeSaClientsRemoteGw),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnOperIkeSaClientsOperIkeSaClientsRemoteGwList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperIkeSaClientsOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnOperIkeSaClientsOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ikeSaClientsLocalIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeSaClientsLocalIp = this._ikeSaClientsLocalIp;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ikeSaClientsRemoteGw?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeSaClientsRemoteGw = this._ikeSaClientsRemoteGw?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperIkeSaClientsOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ikeSaClientsLocalIp = undefined;
      this._name = undefined;
      this._ikeSaClientsRemoteGw.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ikeSaClientsLocalIp = value.ikeSaClientsLocalIp;
      this._name = value.name;
      this._ikeSaClientsRemoteGw.internalValue = value.ikeSaClientsRemoteGw;
    }
  }

  // ike_sa_clients_local_ip - computed: false, optional: true, required: false
  private _ikeSaClientsLocalIp?: string; 
  public get ikeSaClientsLocalIp() {
    return this.getStringAttribute('ike_sa_clients_local_ip');
  }
  public set ikeSaClientsLocalIp(value: string) {
    this._ikeSaClientsLocalIp = value;
  }
  public resetIkeSaClientsLocalIp() {
    this._ikeSaClientsLocalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaClientsLocalIpInput() {
    return this._ikeSaClientsLocalIp;
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

  // ike_sa_clients_remote_gw - computed: false, optional: true, required: false
  private _ikeSaClientsRemoteGw = new DataThunderVpnOperIkeSaClientsOperIkeSaClientsRemoteGwList(this, "ike_sa_clients_remote_gw", false);
  public get ikeSaClientsRemoteGw() {
    return this._ikeSaClientsRemoteGw;
  }
  public putIkeSaClientsRemoteGw(value: DataThunderVpnOperIkeSaClientsOperIkeSaClientsRemoteGw[] | cdktf.IResolvable) {
    this._ikeSaClientsRemoteGw.internalValue = value;
  }
  public resetIkeSaClientsRemoteGw() {
    this._ikeSaClientsRemoteGw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaClientsRemoteGwInput() {
    return this._ikeSaClientsRemoteGw.internalValue;
  }
}
export interface DataThunderVpnOperIkeSaClients {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#oper DataThunderVpnOper#oper}
  */
  readonly oper?: DataThunderVpnOperIkeSaClientsOper;
}

export function dataThunderVpnOperIkeSaClientsToTerraform(struct?: DataThunderVpnOperIkeSaClientsOutputReference | DataThunderVpnOperIkeSaClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderVpnOperIkeSaClientsOperToTerraform(struct!.oper),
  }
}


export function dataThunderVpnOperIkeSaClientsToHclTerraform(struct?: DataThunderVpnOperIkeSaClientsOutputReference | DataThunderVpnOperIkeSaClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderVpnOperIkeSaClientsOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnOperIkeSaClientsOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperIkeSaClientsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnOperIkeSaClients | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperIkeSaClients | undefined) {
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
  private _oper = new DataThunderVpnOperIkeSaClientsOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVpnOperIkeSaClientsOper) {
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
export interface DataThunderVpnOperIkeStatsByGwOperIkeStatsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_version DataThunderVpnOper#ike_version}
  */
  readonly ikeVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#name DataThunderVpnOper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#remote_id DataThunderVpnOper#remote_id}
  */
  readonly remoteId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#remote_ip DataThunderVpnOper#remote_ip}
  */
  readonly remoteIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v1_child_sa_invalid_spi DataThunderVpnOper#v1_child_sa_invalid_spi}
  */
  readonly v1ChildSaInvalidSpi?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v1_in_aggressive_req DataThunderVpnOper#v1_in_aggressive_req}
  */
  readonly v1InAggressiveReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v1_in_aggressive_rsp DataThunderVpnOper#v1_in_aggressive_rsp}
  */
  readonly v1InAggressiveRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v1_in_auth_only_req DataThunderVpnOper#v1_in_auth_only_req}
  */
  readonly v1InAuthOnlyReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v1_in_auth_only_rsp DataThunderVpnOper#v1_in_auth_only_rsp}
  */
  readonly v1InAuthOnlyRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v1_in_id_prot_req DataThunderVpnOper#v1_in_id_prot_req}
  */
  readonly v1InIdProtReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v1_in_id_prot_rsp DataThunderVpnOper#v1_in_id_prot_rsp}
  */
  readonly v1InIdProtRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v1_in_info_v1_req DataThunderVpnOper#v1_in_info_v1_req}
  */
  readonly v1InInfoV1Req?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v1_in_info_v1_rsp DataThunderVpnOper#v1_in_info_v1_rsp}
  */
  readonly v1InInfoV1Rsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v1_in_new_group_mode_req DataThunderVpnOper#v1_in_new_group_mode_req}
  */
  readonly v1InNewGroupModeReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v1_in_new_group_mode_rsp DataThunderVpnOper#v1_in_new_group_mode_rsp}
  */
  readonly v1InNewGroupModeRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v1_in_quick_mode_req DataThunderVpnOper#v1_in_quick_mode_req}
  */
  readonly v1InQuickModeReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v1_in_quick_mode_rsp DataThunderVpnOper#v1_in_quick_mode_rsp}
  */
  readonly v1InQuickModeRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v1_in_transaction_req DataThunderVpnOper#v1_in_transaction_req}
  */
  readonly v1InTransactionReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v1_in_transaction_rsp DataThunderVpnOper#v1_in_transaction_rsp}
  */
  readonly v1InTransactionRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v1_out_aggressive_req DataThunderVpnOper#v1_out_aggressive_req}
  */
  readonly v1OutAggressiveReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v1_out_aggressive_rsp DataThunderVpnOper#v1_out_aggressive_rsp}
  */
  readonly v1OutAggressiveRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v1_out_auth_only_req DataThunderVpnOper#v1_out_auth_only_req}
  */
  readonly v1OutAuthOnlyReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v1_out_auth_only_rsp DataThunderVpnOper#v1_out_auth_only_rsp}
  */
  readonly v1OutAuthOnlyRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v1_out_id_prot_req DataThunderVpnOper#v1_out_id_prot_req}
  */
  readonly v1OutIdProtReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v1_out_id_prot_rsp DataThunderVpnOper#v1_out_id_prot_rsp}
  */
  readonly v1OutIdProtRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v1_out_info_v1_req DataThunderVpnOper#v1_out_info_v1_req}
  */
  readonly v1OutInfoV1Req?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v1_out_info_v1_rsp DataThunderVpnOper#v1_out_info_v1_rsp}
  */
  readonly v1OutInfoV1Rsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v1_out_new_group_mode_req DataThunderVpnOper#v1_out_new_group_mode_req}
  */
  readonly v1OutNewGroupModeReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v1_out_new_group_mode_rsp DataThunderVpnOper#v1_out_new_group_mode_rsp}
  */
  readonly v1OutNewGroupModeRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v1_out_quick_mode_req DataThunderVpnOper#v1_out_quick_mode_req}
  */
  readonly v1OutQuickModeReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v1_out_quick_mode_rsp DataThunderVpnOper#v1_out_quick_mode_rsp}
  */
  readonly v1OutQuickModeRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v1_out_transaction_req DataThunderVpnOper#v1_out_transaction_req}
  */
  readonly v1OutTransactionReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v1_out_transaction_rsp DataThunderVpnOper#v1_out_transaction_rsp}
  */
  readonly v1OutTransactionRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v2_child_sa_invalid_spi DataThunderVpnOper#v2_child_sa_invalid_spi}
  */
  readonly v2ChildSaInvalidSpi?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v2_child_sa_rekey DataThunderVpnOper#v2_child_sa_rekey}
  */
  readonly v2ChildSaRekey?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v2_in_auth_req DataThunderVpnOper#v2_in_auth_req}
  */
  readonly v2InAuthReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v2_in_auth_rsp DataThunderVpnOper#v2_in_auth_rsp}
  */
  readonly v2InAuthRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v2_in_create_child_req DataThunderVpnOper#v2_in_create_child_req}
  */
  readonly v2InCreateChildReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v2_in_create_child_rsp DataThunderVpnOper#v2_in_create_child_rsp}
  */
  readonly v2InCreateChildRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v2_in_info_req DataThunderVpnOper#v2_in_info_req}
  */
  readonly v2InInfoReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v2_in_info_rsp DataThunderVpnOper#v2_in_info_rsp}
  */
  readonly v2InInfoRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v2_in_init_req DataThunderVpnOper#v2_in_init_req}
  */
  readonly v2InInitReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v2_in_init_rsp DataThunderVpnOper#v2_in_init_rsp}
  */
  readonly v2InInitRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v2_in_invalid DataThunderVpnOper#v2_in_invalid}
  */
  readonly v2InInvalid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v2_in_invalid_spi DataThunderVpnOper#v2_in_invalid_spi}
  */
  readonly v2InInvalidSpi?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v2_init_rekey DataThunderVpnOper#v2_init_rekey}
  */
  readonly v2InitRekey?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v2_out_auth_req DataThunderVpnOper#v2_out_auth_req}
  */
  readonly v2OutAuthReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v2_out_auth_rsp DataThunderVpnOper#v2_out_auth_rsp}
  */
  readonly v2OutAuthRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v2_out_create_child_req DataThunderVpnOper#v2_out_create_child_req}
  */
  readonly v2OutCreateChildReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v2_out_create_child_rsp DataThunderVpnOper#v2_out_create_child_rsp}
  */
  readonly v2OutCreateChildRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v2_out_info_req DataThunderVpnOper#v2_out_info_req}
  */
  readonly v2OutInfoReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v2_out_info_rsp DataThunderVpnOper#v2_out_info_rsp}
  */
  readonly v2OutInfoRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v2_out_init_req DataThunderVpnOper#v2_out_init_req}
  */
  readonly v2OutInitReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v2_out_init_rsp DataThunderVpnOper#v2_out_init_rsp}
  */
  readonly v2OutInitRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#v2_rsp_rekey DataThunderVpnOper#v2_rsp_rekey}
  */
  readonly v2RspRekey?: number;
}

export function dataThunderVpnOperIkeStatsByGwOperIkeStatsListStructToTerraform(struct?: DataThunderVpnOperIkeStatsByGwOperIkeStatsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ike_version: cdktf.stringToTerraform(struct!.ikeVersion),
    name: cdktf.stringToTerraform(struct!.name),
    remote_id: cdktf.stringToTerraform(struct!.remoteId),
    remote_ip: cdktf.stringToTerraform(struct!.remoteIp),
    v1_child_sa_invalid_spi: cdktf.numberToTerraform(struct!.v1ChildSaInvalidSpi),
    v1_in_aggressive_req: cdktf.numberToTerraform(struct!.v1InAggressiveReq),
    v1_in_aggressive_rsp: cdktf.numberToTerraform(struct!.v1InAggressiveRsp),
    v1_in_auth_only_req: cdktf.numberToTerraform(struct!.v1InAuthOnlyReq),
    v1_in_auth_only_rsp: cdktf.numberToTerraform(struct!.v1InAuthOnlyRsp),
    v1_in_id_prot_req: cdktf.numberToTerraform(struct!.v1InIdProtReq),
    v1_in_id_prot_rsp: cdktf.numberToTerraform(struct!.v1InIdProtRsp),
    v1_in_info_v1_req: cdktf.numberToTerraform(struct!.v1InInfoV1Req),
    v1_in_info_v1_rsp: cdktf.numberToTerraform(struct!.v1InInfoV1Rsp),
    v1_in_new_group_mode_req: cdktf.numberToTerraform(struct!.v1InNewGroupModeReq),
    v1_in_new_group_mode_rsp: cdktf.numberToTerraform(struct!.v1InNewGroupModeRsp),
    v1_in_quick_mode_req: cdktf.numberToTerraform(struct!.v1InQuickModeReq),
    v1_in_quick_mode_rsp: cdktf.numberToTerraform(struct!.v1InQuickModeRsp),
    v1_in_transaction_req: cdktf.numberToTerraform(struct!.v1InTransactionReq),
    v1_in_transaction_rsp: cdktf.numberToTerraform(struct!.v1InTransactionRsp),
    v1_out_aggressive_req: cdktf.numberToTerraform(struct!.v1OutAggressiveReq),
    v1_out_aggressive_rsp: cdktf.numberToTerraform(struct!.v1OutAggressiveRsp),
    v1_out_auth_only_req: cdktf.numberToTerraform(struct!.v1OutAuthOnlyReq),
    v1_out_auth_only_rsp: cdktf.numberToTerraform(struct!.v1OutAuthOnlyRsp),
    v1_out_id_prot_req: cdktf.numberToTerraform(struct!.v1OutIdProtReq),
    v1_out_id_prot_rsp: cdktf.numberToTerraform(struct!.v1OutIdProtRsp),
    v1_out_info_v1_req: cdktf.numberToTerraform(struct!.v1OutInfoV1Req),
    v1_out_info_v1_rsp: cdktf.numberToTerraform(struct!.v1OutInfoV1Rsp),
    v1_out_new_group_mode_req: cdktf.numberToTerraform(struct!.v1OutNewGroupModeReq),
    v1_out_new_group_mode_rsp: cdktf.numberToTerraform(struct!.v1OutNewGroupModeRsp),
    v1_out_quick_mode_req: cdktf.numberToTerraform(struct!.v1OutQuickModeReq),
    v1_out_quick_mode_rsp: cdktf.numberToTerraform(struct!.v1OutQuickModeRsp),
    v1_out_transaction_req: cdktf.numberToTerraform(struct!.v1OutTransactionReq),
    v1_out_transaction_rsp: cdktf.numberToTerraform(struct!.v1OutTransactionRsp),
    v2_child_sa_invalid_spi: cdktf.numberToTerraform(struct!.v2ChildSaInvalidSpi),
    v2_child_sa_rekey: cdktf.numberToTerraform(struct!.v2ChildSaRekey),
    v2_in_auth_req: cdktf.numberToTerraform(struct!.v2InAuthReq),
    v2_in_auth_rsp: cdktf.numberToTerraform(struct!.v2InAuthRsp),
    v2_in_create_child_req: cdktf.numberToTerraform(struct!.v2InCreateChildReq),
    v2_in_create_child_rsp: cdktf.numberToTerraform(struct!.v2InCreateChildRsp),
    v2_in_info_req: cdktf.numberToTerraform(struct!.v2InInfoReq),
    v2_in_info_rsp: cdktf.numberToTerraform(struct!.v2InInfoRsp),
    v2_in_init_req: cdktf.numberToTerraform(struct!.v2InInitReq),
    v2_in_init_rsp: cdktf.numberToTerraform(struct!.v2InInitRsp),
    v2_in_invalid: cdktf.numberToTerraform(struct!.v2InInvalid),
    v2_in_invalid_spi: cdktf.numberToTerraform(struct!.v2InInvalidSpi),
    v2_init_rekey: cdktf.numberToTerraform(struct!.v2InitRekey),
    v2_out_auth_req: cdktf.numberToTerraform(struct!.v2OutAuthReq),
    v2_out_auth_rsp: cdktf.numberToTerraform(struct!.v2OutAuthRsp),
    v2_out_create_child_req: cdktf.numberToTerraform(struct!.v2OutCreateChildReq),
    v2_out_create_child_rsp: cdktf.numberToTerraform(struct!.v2OutCreateChildRsp),
    v2_out_info_req: cdktf.numberToTerraform(struct!.v2OutInfoReq),
    v2_out_info_rsp: cdktf.numberToTerraform(struct!.v2OutInfoRsp),
    v2_out_init_req: cdktf.numberToTerraform(struct!.v2OutInitReq),
    v2_out_init_rsp: cdktf.numberToTerraform(struct!.v2OutInitRsp),
    v2_rsp_rekey: cdktf.numberToTerraform(struct!.v2RspRekey),
  }
}


export function dataThunderVpnOperIkeStatsByGwOperIkeStatsListStructToHclTerraform(struct?: DataThunderVpnOperIkeStatsByGwOperIkeStatsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ike_version: {
      value: cdktf.stringToHclTerraform(struct!.ikeVersion),
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
    remote_id: {
      value: cdktf.stringToHclTerraform(struct!.remoteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ip: {
      value: cdktf.stringToHclTerraform(struct!.remoteIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v1_child_sa_invalid_spi: {
      value: cdktf.numberToHclTerraform(struct!.v1ChildSaInvalidSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_aggressive_req: {
      value: cdktf.numberToHclTerraform(struct!.v1InAggressiveReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_aggressive_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1InAggressiveRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_auth_only_req: {
      value: cdktf.numberToHclTerraform(struct!.v1InAuthOnlyReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_auth_only_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1InAuthOnlyRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_id_prot_req: {
      value: cdktf.numberToHclTerraform(struct!.v1InIdProtReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_id_prot_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1InIdProtRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_info_v1_req: {
      value: cdktf.numberToHclTerraform(struct!.v1InInfoV1Req),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_info_v1_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1InInfoV1Rsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_new_group_mode_req: {
      value: cdktf.numberToHclTerraform(struct!.v1InNewGroupModeReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_new_group_mode_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1InNewGroupModeRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_quick_mode_req: {
      value: cdktf.numberToHclTerraform(struct!.v1InQuickModeReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_quick_mode_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1InQuickModeRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_transaction_req: {
      value: cdktf.numberToHclTerraform(struct!.v1InTransactionReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_transaction_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1InTransactionRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_aggressive_req: {
      value: cdktf.numberToHclTerraform(struct!.v1OutAggressiveReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_aggressive_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1OutAggressiveRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_auth_only_req: {
      value: cdktf.numberToHclTerraform(struct!.v1OutAuthOnlyReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_auth_only_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1OutAuthOnlyRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_id_prot_req: {
      value: cdktf.numberToHclTerraform(struct!.v1OutIdProtReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_id_prot_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1OutIdProtRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_info_v1_req: {
      value: cdktf.numberToHclTerraform(struct!.v1OutInfoV1Req),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_info_v1_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1OutInfoV1Rsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_new_group_mode_req: {
      value: cdktf.numberToHclTerraform(struct!.v1OutNewGroupModeReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_new_group_mode_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1OutNewGroupModeRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_quick_mode_req: {
      value: cdktf.numberToHclTerraform(struct!.v1OutQuickModeReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_quick_mode_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1OutQuickModeRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_transaction_req: {
      value: cdktf.numberToHclTerraform(struct!.v1OutTransactionReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_transaction_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1OutTransactionRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_child_sa_invalid_spi: {
      value: cdktf.numberToHclTerraform(struct!.v2ChildSaInvalidSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_child_sa_rekey: {
      value: cdktf.numberToHclTerraform(struct!.v2ChildSaRekey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_auth_req: {
      value: cdktf.numberToHclTerraform(struct!.v2InAuthReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_auth_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v2InAuthRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_create_child_req: {
      value: cdktf.numberToHclTerraform(struct!.v2InCreateChildReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_create_child_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v2InCreateChildRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_info_req: {
      value: cdktf.numberToHclTerraform(struct!.v2InInfoReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_info_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v2InInfoRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_init_req: {
      value: cdktf.numberToHclTerraform(struct!.v2InInitReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_init_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v2InInitRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_invalid: {
      value: cdktf.numberToHclTerraform(struct!.v2InInvalid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_invalid_spi: {
      value: cdktf.numberToHclTerraform(struct!.v2InInvalidSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_init_rekey: {
      value: cdktf.numberToHclTerraform(struct!.v2InitRekey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_out_auth_req: {
      value: cdktf.numberToHclTerraform(struct!.v2OutAuthReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_out_auth_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v2OutAuthRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_out_create_child_req: {
      value: cdktf.numberToHclTerraform(struct!.v2OutCreateChildReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_out_create_child_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v2OutCreateChildRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_out_info_req: {
      value: cdktf.numberToHclTerraform(struct!.v2OutInfoReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_out_info_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v2OutInfoRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_out_init_req: {
      value: cdktf.numberToHclTerraform(struct!.v2OutInitReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_out_init_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v2OutInitRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_rsp_rekey: {
      value: cdktf.numberToHclTerraform(struct!.v2RspRekey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperIkeStatsByGwOperIkeStatsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVpnOperIkeStatsByGwOperIkeStatsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ikeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeVersion = this._ikeVersion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._remoteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteId = this._remoteId;
    }
    if (this._remoteIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIp = this._remoteIp;
    }
    if (this._v1ChildSaInvalidSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1ChildSaInvalidSpi = this._v1ChildSaInvalidSpi;
    }
    if (this._v1InAggressiveReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InAggressiveReq = this._v1InAggressiveReq;
    }
    if (this._v1InAggressiveRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InAggressiveRsp = this._v1InAggressiveRsp;
    }
    if (this._v1InAuthOnlyReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InAuthOnlyReq = this._v1InAuthOnlyReq;
    }
    if (this._v1InAuthOnlyRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InAuthOnlyRsp = this._v1InAuthOnlyRsp;
    }
    if (this._v1InIdProtReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InIdProtReq = this._v1InIdProtReq;
    }
    if (this._v1InIdProtRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InIdProtRsp = this._v1InIdProtRsp;
    }
    if (this._v1InInfoV1Req !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InInfoV1Req = this._v1InInfoV1Req;
    }
    if (this._v1InInfoV1Rsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InInfoV1Rsp = this._v1InInfoV1Rsp;
    }
    if (this._v1InNewGroupModeReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InNewGroupModeReq = this._v1InNewGroupModeReq;
    }
    if (this._v1InNewGroupModeRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InNewGroupModeRsp = this._v1InNewGroupModeRsp;
    }
    if (this._v1InQuickModeReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InQuickModeReq = this._v1InQuickModeReq;
    }
    if (this._v1InQuickModeRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InQuickModeRsp = this._v1InQuickModeRsp;
    }
    if (this._v1InTransactionReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InTransactionReq = this._v1InTransactionReq;
    }
    if (this._v1InTransactionRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InTransactionRsp = this._v1InTransactionRsp;
    }
    if (this._v1OutAggressiveReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutAggressiveReq = this._v1OutAggressiveReq;
    }
    if (this._v1OutAggressiveRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutAggressiveRsp = this._v1OutAggressiveRsp;
    }
    if (this._v1OutAuthOnlyReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutAuthOnlyReq = this._v1OutAuthOnlyReq;
    }
    if (this._v1OutAuthOnlyRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutAuthOnlyRsp = this._v1OutAuthOnlyRsp;
    }
    if (this._v1OutIdProtReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutIdProtReq = this._v1OutIdProtReq;
    }
    if (this._v1OutIdProtRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutIdProtRsp = this._v1OutIdProtRsp;
    }
    if (this._v1OutInfoV1Req !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutInfoV1Req = this._v1OutInfoV1Req;
    }
    if (this._v1OutInfoV1Rsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutInfoV1Rsp = this._v1OutInfoV1Rsp;
    }
    if (this._v1OutNewGroupModeReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutNewGroupModeReq = this._v1OutNewGroupModeReq;
    }
    if (this._v1OutNewGroupModeRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutNewGroupModeRsp = this._v1OutNewGroupModeRsp;
    }
    if (this._v1OutQuickModeReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutQuickModeReq = this._v1OutQuickModeReq;
    }
    if (this._v1OutQuickModeRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutQuickModeRsp = this._v1OutQuickModeRsp;
    }
    if (this._v1OutTransactionReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutTransactionReq = this._v1OutTransactionReq;
    }
    if (this._v1OutTransactionRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutTransactionRsp = this._v1OutTransactionRsp;
    }
    if (this._v2ChildSaInvalidSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2ChildSaInvalidSpi = this._v2ChildSaInvalidSpi;
    }
    if (this._v2ChildSaRekey !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2ChildSaRekey = this._v2ChildSaRekey;
    }
    if (this._v2InAuthReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InAuthReq = this._v2InAuthReq;
    }
    if (this._v2InAuthRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InAuthRsp = this._v2InAuthRsp;
    }
    if (this._v2InCreateChildReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InCreateChildReq = this._v2InCreateChildReq;
    }
    if (this._v2InCreateChildRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InCreateChildRsp = this._v2InCreateChildRsp;
    }
    if (this._v2InInfoReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InInfoReq = this._v2InInfoReq;
    }
    if (this._v2InInfoRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InInfoRsp = this._v2InInfoRsp;
    }
    if (this._v2InInitReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InInitReq = this._v2InInitReq;
    }
    if (this._v2InInitRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InInitRsp = this._v2InInitRsp;
    }
    if (this._v2InInvalid !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InInvalid = this._v2InInvalid;
    }
    if (this._v2InInvalidSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InInvalidSpi = this._v2InInvalidSpi;
    }
    if (this._v2InitRekey !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InitRekey = this._v2InitRekey;
    }
    if (this._v2OutAuthReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2OutAuthReq = this._v2OutAuthReq;
    }
    if (this._v2OutAuthRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2OutAuthRsp = this._v2OutAuthRsp;
    }
    if (this._v2OutCreateChildReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2OutCreateChildReq = this._v2OutCreateChildReq;
    }
    if (this._v2OutCreateChildRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2OutCreateChildRsp = this._v2OutCreateChildRsp;
    }
    if (this._v2OutInfoReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2OutInfoReq = this._v2OutInfoReq;
    }
    if (this._v2OutInfoRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2OutInfoRsp = this._v2OutInfoRsp;
    }
    if (this._v2OutInitReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2OutInitReq = this._v2OutInitReq;
    }
    if (this._v2OutInitRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2OutInitRsp = this._v2OutInitRsp;
    }
    if (this._v2RspRekey !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2RspRekey = this._v2RspRekey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperIkeStatsByGwOperIkeStatsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ikeVersion = undefined;
      this._name = undefined;
      this._remoteId = undefined;
      this._remoteIp = undefined;
      this._v1ChildSaInvalidSpi = undefined;
      this._v1InAggressiveReq = undefined;
      this._v1InAggressiveRsp = undefined;
      this._v1InAuthOnlyReq = undefined;
      this._v1InAuthOnlyRsp = undefined;
      this._v1InIdProtReq = undefined;
      this._v1InIdProtRsp = undefined;
      this._v1InInfoV1Req = undefined;
      this._v1InInfoV1Rsp = undefined;
      this._v1InNewGroupModeReq = undefined;
      this._v1InNewGroupModeRsp = undefined;
      this._v1InQuickModeReq = undefined;
      this._v1InQuickModeRsp = undefined;
      this._v1InTransactionReq = undefined;
      this._v1InTransactionRsp = undefined;
      this._v1OutAggressiveReq = undefined;
      this._v1OutAggressiveRsp = undefined;
      this._v1OutAuthOnlyReq = undefined;
      this._v1OutAuthOnlyRsp = undefined;
      this._v1OutIdProtReq = undefined;
      this._v1OutIdProtRsp = undefined;
      this._v1OutInfoV1Req = undefined;
      this._v1OutInfoV1Rsp = undefined;
      this._v1OutNewGroupModeReq = undefined;
      this._v1OutNewGroupModeRsp = undefined;
      this._v1OutQuickModeReq = undefined;
      this._v1OutQuickModeRsp = undefined;
      this._v1OutTransactionReq = undefined;
      this._v1OutTransactionRsp = undefined;
      this._v2ChildSaInvalidSpi = undefined;
      this._v2ChildSaRekey = undefined;
      this._v2InAuthReq = undefined;
      this._v2InAuthRsp = undefined;
      this._v2InCreateChildReq = undefined;
      this._v2InCreateChildRsp = undefined;
      this._v2InInfoReq = undefined;
      this._v2InInfoRsp = undefined;
      this._v2InInitReq = undefined;
      this._v2InInitRsp = undefined;
      this._v2InInvalid = undefined;
      this._v2InInvalidSpi = undefined;
      this._v2InitRekey = undefined;
      this._v2OutAuthReq = undefined;
      this._v2OutAuthRsp = undefined;
      this._v2OutCreateChildReq = undefined;
      this._v2OutCreateChildRsp = undefined;
      this._v2OutInfoReq = undefined;
      this._v2OutInfoRsp = undefined;
      this._v2OutInitReq = undefined;
      this._v2OutInitRsp = undefined;
      this._v2RspRekey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ikeVersion = value.ikeVersion;
      this._name = value.name;
      this._remoteId = value.remoteId;
      this._remoteIp = value.remoteIp;
      this._v1ChildSaInvalidSpi = value.v1ChildSaInvalidSpi;
      this._v1InAggressiveReq = value.v1InAggressiveReq;
      this._v1InAggressiveRsp = value.v1InAggressiveRsp;
      this._v1InAuthOnlyReq = value.v1InAuthOnlyReq;
      this._v1InAuthOnlyRsp = value.v1InAuthOnlyRsp;
      this._v1InIdProtReq = value.v1InIdProtReq;
      this._v1InIdProtRsp = value.v1InIdProtRsp;
      this._v1InInfoV1Req = value.v1InInfoV1Req;
      this._v1InInfoV1Rsp = value.v1InInfoV1Rsp;
      this._v1InNewGroupModeReq = value.v1InNewGroupModeReq;
      this._v1InNewGroupModeRsp = value.v1InNewGroupModeRsp;
      this._v1InQuickModeReq = value.v1InQuickModeReq;
      this._v1InQuickModeRsp = value.v1InQuickModeRsp;
      this._v1InTransactionReq = value.v1InTransactionReq;
      this._v1InTransactionRsp = value.v1InTransactionRsp;
      this._v1OutAggressiveReq = value.v1OutAggressiveReq;
      this._v1OutAggressiveRsp = value.v1OutAggressiveRsp;
      this._v1OutAuthOnlyReq = value.v1OutAuthOnlyReq;
      this._v1OutAuthOnlyRsp = value.v1OutAuthOnlyRsp;
      this._v1OutIdProtReq = value.v1OutIdProtReq;
      this._v1OutIdProtRsp = value.v1OutIdProtRsp;
      this._v1OutInfoV1Req = value.v1OutInfoV1Req;
      this._v1OutInfoV1Rsp = value.v1OutInfoV1Rsp;
      this._v1OutNewGroupModeReq = value.v1OutNewGroupModeReq;
      this._v1OutNewGroupModeRsp = value.v1OutNewGroupModeRsp;
      this._v1OutQuickModeReq = value.v1OutQuickModeReq;
      this._v1OutQuickModeRsp = value.v1OutQuickModeRsp;
      this._v1OutTransactionReq = value.v1OutTransactionReq;
      this._v1OutTransactionRsp = value.v1OutTransactionRsp;
      this._v2ChildSaInvalidSpi = value.v2ChildSaInvalidSpi;
      this._v2ChildSaRekey = value.v2ChildSaRekey;
      this._v2InAuthReq = value.v2InAuthReq;
      this._v2InAuthRsp = value.v2InAuthRsp;
      this._v2InCreateChildReq = value.v2InCreateChildReq;
      this._v2InCreateChildRsp = value.v2InCreateChildRsp;
      this._v2InInfoReq = value.v2InInfoReq;
      this._v2InInfoRsp = value.v2InInfoRsp;
      this._v2InInitReq = value.v2InInitReq;
      this._v2InInitRsp = value.v2InInitRsp;
      this._v2InInvalid = value.v2InInvalid;
      this._v2InInvalidSpi = value.v2InInvalidSpi;
      this._v2InitRekey = value.v2InitRekey;
      this._v2OutAuthReq = value.v2OutAuthReq;
      this._v2OutAuthRsp = value.v2OutAuthRsp;
      this._v2OutCreateChildReq = value.v2OutCreateChildReq;
      this._v2OutCreateChildRsp = value.v2OutCreateChildRsp;
      this._v2OutInfoReq = value.v2OutInfoReq;
      this._v2OutInfoRsp = value.v2OutInfoRsp;
      this._v2OutInitReq = value.v2OutInitReq;
      this._v2OutInitRsp = value.v2OutInitRsp;
      this._v2RspRekey = value.v2RspRekey;
    }
  }

  // ike_version - computed: false, optional: true, required: false
  private _ikeVersion?: string; 
  public get ikeVersion() {
    return this.getStringAttribute('ike_version');
  }
  public set ikeVersion(value: string) {
    this._ikeVersion = value;
  }
  public resetIkeVersion() {
    this._ikeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeVersionInput() {
    return this._ikeVersion;
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

  // remote_id - computed: false, optional: true, required: false
  private _remoteId?: string; 
  public get remoteId() {
    return this.getStringAttribute('remote_id');
  }
  public set remoteId(value: string) {
    this._remoteId = value;
  }
  public resetRemoteId() {
    this._remoteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIdInput() {
    return this._remoteId;
  }

  // remote_ip - computed: false, optional: true, required: false
  private _remoteIp?: string; 
  public get remoteIp() {
    return this.getStringAttribute('remote_ip');
  }
  public set remoteIp(value: string) {
    this._remoteIp = value;
  }
  public resetRemoteIp() {
    this._remoteIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpInput() {
    return this._remoteIp;
  }

  // v1_child_sa_invalid_spi - computed: false, optional: true, required: false
  private _v1ChildSaInvalidSpi?: number; 
  public get v1ChildSaInvalidSpi() {
    return this.getNumberAttribute('v1_child_sa_invalid_spi');
  }
  public set v1ChildSaInvalidSpi(value: number) {
    this._v1ChildSaInvalidSpi = value;
  }
  public resetV1ChildSaInvalidSpi() {
    this._v1ChildSaInvalidSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1ChildSaInvalidSpiInput() {
    return this._v1ChildSaInvalidSpi;
  }

  // v1_in_aggressive_req - computed: false, optional: true, required: false
  private _v1InAggressiveReq?: number; 
  public get v1InAggressiveReq() {
    return this.getNumberAttribute('v1_in_aggressive_req');
  }
  public set v1InAggressiveReq(value: number) {
    this._v1InAggressiveReq = value;
  }
  public resetV1InAggressiveReq() {
    this._v1InAggressiveReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InAggressiveReqInput() {
    return this._v1InAggressiveReq;
  }

  // v1_in_aggressive_rsp - computed: false, optional: true, required: false
  private _v1InAggressiveRsp?: number; 
  public get v1InAggressiveRsp() {
    return this.getNumberAttribute('v1_in_aggressive_rsp');
  }
  public set v1InAggressiveRsp(value: number) {
    this._v1InAggressiveRsp = value;
  }
  public resetV1InAggressiveRsp() {
    this._v1InAggressiveRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InAggressiveRspInput() {
    return this._v1InAggressiveRsp;
  }

  // v1_in_auth_only_req - computed: false, optional: true, required: false
  private _v1InAuthOnlyReq?: number; 
  public get v1InAuthOnlyReq() {
    return this.getNumberAttribute('v1_in_auth_only_req');
  }
  public set v1InAuthOnlyReq(value: number) {
    this._v1InAuthOnlyReq = value;
  }
  public resetV1InAuthOnlyReq() {
    this._v1InAuthOnlyReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InAuthOnlyReqInput() {
    return this._v1InAuthOnlyReq;
  }

  // v1_in_auth_only_rsp - computed: false, optional: true, required: false
  private _v1InAuthOnlyRsp?: number; 
  public get v1InAuthOnlyRsp() {
    return this.getNumberAttribute('v1_in_auth_only_rsp');
  }
  public set v1InAuthOnlyRsp(value: number) {
    this._v1InAuthOnlyRsp = value;
  }
  public resetV1InAuthOnlyRsp() {
    this._v1InAuthOnlyRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InAuthOnlyRspInput() {
    return this._v1InAuthOnlyRsp;
  }

  // v1_in_id_prot_req - computed: false, optional: true, required: false
  private _v1InIdProtReq?: number; 
  public get v1InIdProtReq() {
    return this.getNumberAttribute('v1_in_id_prot_req');
  }
  public set v1InIdProtReq(value: number) {
    this._v1InIdProtReq = value;
  }
  public resetV1InIdProtReq() {
    this._v1InIdProtReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InIdProtReqInput() {
    return this._v1InIdProtReq;
  }

  // v1_in_id_prot_rsp - computed: false, optional: true, required: false
  private _v1InIdProtRsp?: number; 
  public get v1InIdProtRsp() {
    return this.getNumberAttribute('v1_in_id_prot_rsp');
  }
  public set v1InIdProtRsp(value: number) {
    this._v1InIdProtRsp = value;
  }
  public resetV1InIdProtRsp() {
    this._v1InIdProtRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InIdProtRspInput() {
    return this._v1InIdProtRsp;
  }

  // v1_in_info_v1_req - computed: false, optional: true, required: false
  private _v1InInfoV1Req?: number; 
  public get v1InInfoV1Req() {
    return this.getNumberAttribute('v1_in_info_v1_req');
  }
  public set v1InInfoV1Req(value: number) {
    this._v1InInfoV1Req = value;
  }
  public resetV1InInfoV1Req() {
    this._v1InInfoV1Req = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InInfoV1ReqInput() {
    return this._v1InInfoV1Req;
  }

  // v1_in_info_v1_rsp - computed: false, optional: true, required: false
  private _v1InInfoV1Rsp?: number; 
  public get v1InInfoV1Rsp() {
    return this.getNumberAttribute('v1_in_info_v1_rsp');
  }
  public set v1InInfoV1Rsp(value: number) {
    this._v1InInfoV1Rsp = value;
  }
  public resetV1InInfoV1Rsp() {
    this._v1InInfoV1Rsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InInfoV1RspInput() {
    return this._v1InInfoV1Rsp;
  }

  // v1_in_new_group_mode_req - computed: false, optional: true, required: false
  private _v1InNewGroupModeReq?: number; 
  public get v1InNewGroupModeReq() {
    return this.getNumberAttribute('v1_in_new_group_mode_req');
  }
  public set v1InNewGroupModeReq(value: number) {
    this._v1InNewGroupModeReq = value;
  }
  public resetV1InNewGroupModeReq() {
    this._v1InNewGroupModeReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InNewGroupModeReqInput() {
    return this._v1InNewGroupModeReq;
  }

  // v1_in_new_group_mode_rsp - computed: false, optional: true, required: false
  private _v1InNewGroupModeRsp?: number; 
  public get v1InNewGroupModeRsp() {
    return this.getNumberAttribute('v1_in_new_group_mode_rsp');
  }
  public set v1InNewGroupModeRsp(value: number) {
    this._v1InNewGroupModeRsp = value;
  }
  public resetV1InNewGroupModeRsp() {
    this._v1InNewGroupModeRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InNewGroupModeRspInput() {
    return this._v1InNewGroupModeRsp;
  }

  // v1_in_quick_mode_req - computed: false, optional: true, required: false
  private _v1InQuickModeReq?: number; 
  public get v1InQuickModeReq() {
    return this.getNumberAttribute('v1_in_quick_mode_req');
  }
  public set v1InQuickModeReq(value: number) {
    this._v1InQuickModeReq = value;
  }
  public resetV1InQuickModeReq() {
    this._v1InQuickModeReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InQuickModeReqInput() {
    return this._v1InQuickModeReq;
  }

  // v1_in_quick_mode_rsp - computed: false, optional: true, required: false
  private _v1InQuickModeRsp?: number; 
  public get v1InQuickModeRsp() {
    return this.getNumberAttribute('v1_in_quick_mode_rsp');
  }
  public set v1InQuickModeRsp(value: number) {
    this._v1InQuickModeRsp = value;
  }
  public resetV1InQuickModeRsp() {
    this._v1InQuickModeRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InQuickModeRspInput() {
    return this._v1InQuickModeRsp;
  }

  // v1_in_transaction_req - computed: false, optional: true, required: false
  private _v1InTransactionReq?: number; 
  public get v1InTransactionReq() {
    return this.getNumberAttribute('v1_in_transaction_req');
  }
  public set v1InTransactionReq(value: number) {
    this._v1InTransactionReq = value;
  }
  public resetV1InTransactionReq() {
    this._v1InTransactionReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InTransactionReqInput() {
    return this._v1InTransactionReq;
  }

  // v1_in_transaction_rsp - computed: false, optional: true, required: false
  private _v1InTransactionRsp?: number; 
  public get v1InTransactionRsp() {
    return this.getNumberAttribute('v1_in_transaction_rsp');
  }
  public set v1InTransactionRsp(value: number) {
    this._v1InTransactionRsp = value;
  }
  public resetV1InTransactionRsp() {
    this._v1InTransactionRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InTransactionRspInput() {
    return this._v1InTransactionRsp;
  }

  // v1_out_aggressive_req - computed: false, optional: true, required: false
  private _v1OutAggressiveReq?: number; 
  public get v1OutAggressiveReq() {
    return this.getNumberAttribute('v1_out_aggressive_req');
  }
  public set v1OutAggressiveReq(value: number) {
    this._v1OutAggressiveReq = value;
  }
  public resetV1OutAggressiveReq() {
    this._v1OutAggressiveReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutAggressiveReqInput() {
    return this._v1OutAggressiveReq;
  }

  // v1_out_aggressive_rsp - computed: false, optional: true, required: false
  private _v1OutAggressiveRsp?: number; 
  public get v1OutAggressiveRsp() {
    return this.getNumberAttribute('v1_out_aggressive_rsp');
  }
  public set v1OutAggressiveRsp(value: number) {
    this._v1OutAggressiveRsp = value;
  }
  public resetV1OutAggressiveRsp() {
    this._v1OutAggressiveRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutAggressiveRspInput() {
    return this._v1OutAggressiveRsp;
  }

  // v1_out_auth_only_req - computed: false, optional: true, required: false
  private _v1OutAuthOnlyReq?: number; 
  public get v1OutAuthOnlyReq() {
    return this.getNumberAttribute('v1_out_auth_only_req');
  }
  public set v1OutAuthOnlyReq(value: number) {
    this._v1OutAuthOnlyReq = value;
  }
  public resetV1OutAuthOnlyReq() {
    this._v1OutAuthOnlyReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutAuthOnlyReqInput() {
    return this._v1OutAuthOnlyReq;
  }

  // v1_out_auth_only_rsp - computed: false, optional: true, required: false
  private _v1OutAuthOnlyRsp?: number; 
  public get v1OutAuthOnlyRsp() {
    return this.getNumberAttribute('v1_out_auth_only_rsp');
  }
  public set v1OutAuthOnlyRsp(value: number) {
    this._v1OutAuthOnlyRsp = value;
  }
  public resetV1OutAuthOnlyRsp() {
    this._v1OutAuthOnlyRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutAuthOnlyRspInput() {
    return this._v1OutAuthOnlyRsp;
  }

  // v1_out_id_prot_req - computed: false, optional: true, required: false
  private _v1OutIdProtReq?: number; 
  public get v1OutIdProtReq() {
    return this.getNumberAttribute('v1_out_id_prot_req');
  }
  public set v1OutIdProtReq(value: number) {
    this._v1OutIdProtReq = value;
  }
  public resetV1OutIdProtReq() {
    this._v1OutIdProtReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutIdProtReqInput() {
    return this._v1OutIdProtReq;
  }

  // v1_out_id_prot_rsp - computed: false, optional: true, required: false
  private _v1OutIdProtRsp?: number; 
  public get v1OutIdProtRsp() {
    return this.getNumberAttribute('v1_out_id_prot_rsp');
  }
  public set v1OutIdProtRsp(value: number) {
    this._v1OutIdProtRsp = value;
  }
  public resetV1OutIdProtRsp() {
    this._v1OutIdProtRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutIdProtRspInput() {
    return this._v1OutIdProtRsp;
  }

  // v1_out_info_v1_req - computed: false, optional: true, required: false
  private _v1OutInfoV1Req?: number; 
  public get v1OutInfoV1Req() {
    return this.getNumberAttribute('v1_out_info_v1_req');
  }
  public set v1OutInfoV1Req(value: number) {
    this._v1OutInfoV1Req = value;
  }
  public resetV1OutInfoV1Req() {
    this._v1OutInfoV1Req = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutInfoV1ReqInput() {
    return this._v1OutInfoV1Req;
  }

  // v1_out_info_v1_rsp - computed: false, optional: true, required: false
  private _v1OutInfoV1Rsp?: number; 
  public get v1OutInfoV1Rsp() {
    return this.getNumberAttribute('v1_out_info_v1_rsp');
  }
  public set v1OutInfoV1Rsp(value: number) {
    this._v1OutInfoV1Rsp = value;
  }
  public resetV1OutInfoV1Rsp() {
    this._v1OutInfoV1Rsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutInfoV1RspInput() {
    return this._v1OutInfoV1Rsp;
  }

  // v1_out_new_group_mode_req - computed: false, optional: true, required: false
  private _v1OutNewGroupModeReq?: number; 
  public get v1OutNewGroupModeReq() {
    return this.getNumberAttribute('v1_out_new_group_mode_req');
  }
  public set v1OutNewGroupModeReq(value: number) {
    this._v1OutNewGroupModeReq = value;
  }
  public resetV1OutNewGroupModeReq() {
    this._v1OutNewGroupModeReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutNewGroupModeReqInput() {
    return this._v1OutNewGroupModeReq;
  }

  // v1_out_new_group_mode_rsp - computed: false, optional: true, required: false
  private _v1OutNewGroupModeRsp?: number; 
  public get v1OutNewGroupModeRsp() {
    return this.getNumberAttribute('v1_out_new_group_mode_rsp');
  }
  public set v1OutNewGroupModeRsp(value: number) {
    this._v1OutNewGroupModeRsp = value;
  }
  public resetV1OutNewGroupModeRsp() {
    this._v1OutNewGroupModeRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutNewGroupModeRspInput() {
    return this._v1OutNewGroupModeRsp;
  }

  // v1_out_quick_mode_req - computed: false, optional: true, required: false
  private _v1OutQuickModeReq?: number; 
  public get v1OutQuickModeReq() {
    return this.getNumberAttribute('v1_out_quick_mode_req');
  }
  public set v1OutQuickModeReq(value: number) {
    this._v1OutQuickModeReq = value;
  }
  public resetV1OutQuickModeReq() {
    this._v1OutQuickModeReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutQuickModeReqInput() {
    return this._v1OutQuickModeReq;
  }

  // v1_out_quick_mode_rsp - computed: false, optional: true, required: false
  private _v1OutQuickModeRsp?: number; 
  public get v1OutQuickModeRsp() {
    return this.getNumberAttribute('v1_out_quick_mode_rsp');
  }
  public set v1OutQuickModeRsp(value: number) {
    this._v1OutQuickModeRsp = value;
  }
  public resetV1OutQuickModeRsp() {
    this._v1OutQuickModeRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutQuickModeRspInput() {
    return this._v1OutQuickModeRsp;
  }

  // v1_out_transaction_req - computed: false, optional: true, required: false
  private _v1OutTransactionReq?: number; 
  public get v1OutTransactionReq() {
    return this.getNumberAttribute('v1_out_transaction_req');
  }
  public set v1OutTransactionReq(value: number) {
    this._v1OutTransactionReq = value;
  }
  public resetV1OutTransactionReq() {
    this._v1OutTransactionReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutTransactionReqInput() {
    return this._v1OutTransactionReq;
  }

  // v1_out_transaction_rsp - computed: false, optional: true, required: false
  private _v1OutTransactionRsp?: number; 
  public get v1OutTransactionRsp() {
    return this.getNumberAttribute('v1_out_transaction_rsp');
  }
  public set v1OutTransactionRsp(value: number) {
    this._v1OutTransactionRsp = value;
  }
  public resetV1OutTransactionRsp() {
    this._v1OutTransactionRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutTransactionRspInput() {
    return this._v1OutTransactionRsp;
  }

  // v2_child_sa_invalid_spi - computed: false, optional: true, required: false
  private _v2ChildSaInvalidSpi?: number; 
  public get v2ChildSaInvalidSpi() {
    return this.getNumberAttribute('v2_child_sa_invalid_spi');
  }
  public set v2ChildSaInvalidSpi(value: number) {
    this._v2ChildSaInvalidSpi = value;
  }
  public resetV2ChildSaInvalidSpi() {
    this._v2ChildSaInvalidSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2ChildSaInvalidSpiInput() {
    return this._v2ChildSaInvalidSpi;
  }

  // v2_child_sa_rekey - computed: false, optional: true, required: false
  private _v2ChildSaRekey?: number; 
  public get v2ChildSaRekey() {
    return this.getNumberAttribute('v2_child_sa_rekey');
  }
  public set v2ChildSaRekey(value: number) {
    this._v2ChildSaRekey = value;
  }
  public resetV2ChildSaRekey() {
    this._v2ChildSaRekey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2ChildSaRekeyInput() {
    return this._v2ChildSaRekey;
  }

  // v2_in_auth_req - computed: false, optional: true, required: false
  private _v2InAuthReq?: number; 
  public get v2InAuthReq() {
    return this.getNumberAttribute('v2_in_auth_req');
  }
  public set v2InAuthReq(value: number) {
    this._v2InAuthReq = value;
  }
  public resetV2InAuthReq() {
    this._v2InAuthReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InAuthReqInput() {
    return this._v2InAuthReq;
  }

  // v2_in_auth_rsp - computed: false, optional: true, required: false
  private _v2InAuthRsp?: number; 
  public get v2InAuthRsp() {
    return this.getNumberAttribute('v2_in_auth_rsp');
  }
  public set v2InAuthRsp(value: number) {
    this._v2InAuthRsp = value;
  }
  public resetV2InAuthRsp() {
    this._v2InAuthRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InAuthRspInput() {
    return this._v2InAuthRsp;
  }

  // v2_in_create_child_req - computed: false, optional: true, required: false
  private _v2InCreateChildReq?: number; 
  public get v2InCreateChildReq() {
    return this.getNumberAttribute('v2_in_create_child_req');
  }
  public set v2InCreateChildReq(value: number) {
    this._v2InCreateChildReq = value;
  }
  public resetV2InCreateChildReq() {
    this._v2InCreateChildReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InCreateChildReqInput() {
    return this._v2InCreateChildReq;
  }

  // v2_in_create_child_rsp - computed: false, optional: true, required: false
  private _v2InCreateChildRsp?: number; 
  public get v2InCreateChildRsp() {
    return this.getNumberAttribute('v2_in_create_child_rsp');
  }
  public set v2InCreateChildRsp(value: number) {
    this._v2InCreateChildRsp = value;
  }
  public resetV2InCreateChildRsp() {
    this._v2InCreateChildRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InCreateChildRspInput() {
    return this._v2InCreateChildRsp;
  }

  // v2_in_info_req - computed: false, optional: true, required: false
  private _v2InInfoReq?: number; 
  public get v2InInfoReq() {
    return this.getNumberAttribute('v2_in_info_req');
  }
  public set v2InInfoReq(value: number) {
    this._v2InInfoReq = value;
  }
  public resetV2InInfoReq() {
    this._v2InInfoReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InInfoReqInput() {
    return this._v2InInfoReq;
  }

  // v2_in_info_rsp - computed: false, optional: true, required: false
  private _v2InInfoRsp?: number; 
  public get v2InInfoRsp() {
    return this.getNumberAttribute('v2_in_info_rsp');
  }
  public set v2InInfoRsp(value: number) {
    this._v2InInfoRsp = value;
  }
  public resetV2InInfoRsp() {
    this._v2InInfoRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InInfoRspInput() {
    return this._v2InInfoRsp;
  }

  // v2_in_init_req - computed: false, optional: true, required: false
  private _v2InInitReq?: number; 
  public get v2InInitReq() {
    return this.getNumberAttribute('v2_in_init_req');
  }
  public set v2InInitReq(value: number) {
    this._v2InInitReq = value;
  }
  public resetV2InInitReq() {
    this._v2InInitReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InInitReqInput() {
    return this._v2InInitReq;
  }

  // v2_in_init_rsp - computed: false, optional: true, required: false
  private _v2InInitRsp?: number; 
  public get v2InInitRsp() {
    return this.getNumberAttribute('v2_in_init_rsp');
  }
  public set v2InInitRsp(value: number) {
    this._v2InInitRsp = value;
  }
  public resetV2InInitRsp() {
    this._v2InInitRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InInitRspInput() {
    return this._v2InInitRsp;
  }

  // v2_in_invalid - computed: false, optional: true, required: false
  private _v2InInvalid?: number; 
  public get v2InInvalid() {
    return this.getNumberAttribute('v2_in_invalid');
  }
  public set v2InInvalid(value: number) {
    this._v2InInvalid = value;
  }
  public resetV2InInvalid() {
    this._v2InInvalid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InInvalidInput() {
    return this._v2InInvalid;
  }

  // v2_in_invalid_spi - computed: false, optional: true, required: false
  private _v2InInvalidSpi?: number; 
  public get v2InInvalidSpi() {
    return this.getNumberAttribute('v2_in_invalid_spi');
  }
  public set v2InInvalidSpi(value: number) {
    this._v2InInvalidSpi = value;
  }
  public resetV2InInvalidSpi() {
    this._v2InInvalidSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InInvalidSpiInput() {
    return this._v2InInvalidSpi;
  }

  // v2_init_rekey - computed: false, optional: true, required: false
  private _v2InitRekey?: number; 
  public get v2InitRekey() {
    return this.getNumberAttribute('v2_init_rekey');
  }
  public set v2InitRekey(value: number) {
    this._v2InitRekey = value;
  }
  public resetV2InitRekey() {
    this._v2InitRekey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InitRekeyInput() {
    return this._v2InitRekey;
  }

  // v2_out_auth_req - computed: false, optional: true, required: false
  private _v2OutAuthReq?: number; 
  public get v2OutAuthReq() {
    return this.getNumberAttribute('v2_out_auth_req');
  }
  public set v2OutAuthReq(value: number) {
    this._v2OutAuthReq = value;
  }
  public resetV2OutAuthReq() {
    this._v2OutAuthReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2OutAuthReqInput() {
    return this._v2OutAuthReq;
  }

  // v2_out_auth_rsp - computed: false, optional: true, required: false
  private _v2OutAuthRsp?: number; 
  public get v2OutAuthRsp() {
    return this.getNumberAttribute('v2_out_auth_rsp');
  }
  public set v2OutAuthRsp(value: number) {
    this._v2OutAuthRsp = value;
  }
  public resetV2OutAuthRsp() {
    this._v2OutAuthRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2OutAuthRspInput() {
    return this._v2OutAuthRsp;
  }

  // v2_out_create_child_req - computed: false, optional: true, required: false
  private _v2OutCreateChildReq?: number; 
  public get v2OutCreateChildReq() {
    return this.getNumberAttribute('v2_out_create_child_req');
  }
  public set v2OutCreateChildReq(value: number) {
    this._v2OutCreateChildReq = value;
  }
  public resetV2OutCreateChildReq() {
    this._v2OutCreateChildReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2OutCreateChildReqInput() {
    return this._v2OutCreateChildReq;
  }

  // v2_out_create_child_rsp - computed: false, optional: true, required: false
  private _v2OutCreateChildRsp?: number; 
  public get v2OutCreateChildRsp() {
    return this.getNumberAttribute('v2_out_create_child_rsp');
  }
  public set v2OutCreateChildRsp(value: number) {
    this._v2OutCreateChildRsp = value;
  }
  public resetV2OutCreateChildRsp() {
    this._v2OutCreateChildRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2OutCreateChildRspInput() {
    return this._v2OutCreateChildRsp;
  }

  // v2_out_info_req - computed: false, optional: true, required: false
  private _v2OutInfoReq?: number; 
  public get v2OutInfoReq() {
    return this.getNumberAttribute('v2_out_info_req');
  }
  public set v2OutInfoReq(value: number) {
    this._v2OutInfoReq = value;
  }
  public resetV2OutInfoReq() {
    this._v2OutInfoReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2OutInfoReqInput() {
    return this._v2OutInfoReq;
  }

  // v2_out_info_rsp - computed: false, optional: true, required: false
  private _v2OutInfoRsp?: number; 
  public get v2OutInfoRsp() {
    return this.getNumberAttribute('v2_out_info_rsp');
  }
  public set v2OutInfoRsp(value: number) {
    this._v2OutInfoRsp = value;
  }
  public resetV2OutInfoRsp() {
    this._v2OutInfoRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2OutInfoRspInput() {
    return this._v2OutInfoRsp;
  }

  // v2_out_init_req - computed: false, optional: true, required: false
  private _v2OutInitReq?: number; 
  public get v2OutInitReq() {
    return this.getNumberAttribute('v2_out_init_req');
  }
  public set v2OutInitReq(value: number) {
    this._v2OutInitReq = value;
  }
  public resetV2OutInitReq() {
    this._v2OutInitReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2OutInitReqInput() {
    return this._v2OutInitReq;
  }

  // v2_out_init_rsp - computed: false, optional: true, required: false
  private _v2OutInitRsp?: number; 
  public get v2OutInitRsp() {
    return this.getNumberAttribute('v2_out_init_rsp');
  }
  public set v2OutInitRsp(value: number) {
    this._v2OutInitRsp = value;
  }
  public resetV2OutInitRsp() {
    this._v2OutInitRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2OutInitRspInput() {
    return this._v2OutInitRsp;
  }

  // v2_rsp_rekey - computed: false, optional: true, required: false
  private _v2RspRekey?: number; 
  public get v2RspRekey() {
    return this.getNumberAttribute('v2_rsp_rekey');
  }
  public set v2RspRekey(value: number) {
    this._v2RspRekey = value;
  }
  public resetV2RspRekey() {
    this._v2RspRekey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2RspRekeyInput() {
    return this._v2RspRekey;
  }
}

export class DataThunderVpnOperIkeStatsByGwOperIkeStatsListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVpnOperIkeStatsByGwOperIkeStatsListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVpnOperIkeStatsByGwOperIkeStatsListStructOutputReference {
    return new DataThunderVpnOperIkeStatsByGwOperIkeStatsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVpnOperIkeStatsByGwOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#display_all_filter DataThunderVpnOper#display_all_filter}
  */
  readonly displayAllFilter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#gateway_name_filter DataThunderVpnOper#gateway_name_filter}
  */
  readonly gatewayNameFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#remote_id_filter DataThunderVpnOper#remote_id_filter}
  */
  readonly remoteIdFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#remote_ip_filter DataThunderVpnOper#remote_ip_filter}
  */
  readonly remoteIpFilter?: string;
  /**
  * ike_stats_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_stats_list DataThunderVpnOper#ike_stats_list}
  */
  readonly ikeStatsList?: DataThunderVpnOperIkeStatsByGwOperIkeStatsListStruct[] | cdktf.IResolvable;
}

export function dataThunderVpnOperIkeStatsByGwOperToTerraform(struct?: DataThunderVpnOperIkeStatsByGwOperOutputReference | DataThunderVpnOperIkeStatsByGwOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_all_filter: cdktf.numberToTerraform(struct!.displayAllFilter),
    gateway_name_filter: cdktf.stringToTerraform(struct!.gatewayNameFilter),
    remote_id_filter: cdktf.stringToTerraform(struct!.remoteIdFilter),
    remote_ip_filter: cdktf.stringToTerraform(struct!.remoteIpFilter),
    ike_stats_list: cdktf.listMapper(dataThunderVpnOperIkeStatsByGwOperIkeStatsListStructToTerraform, true)(struct!.ikeStatsList),
  }
}


export function dataThunderVpnOperIkeStatsByGwOperToHclTerraform(struct?: DataThunderVpnOperIkeStatsByGwOperOutputReference | DataThunderVpnOperIkeStatsByGwOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_all_filter: {
      value: cdktf.numberToHclTerraform(struct!.displayAllFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gateway_name_filter: {
      value: cdktf.stringToHclTerraform(struct!.gatewayNameFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_id_filter: {
      value: cdktf.stringToHclTerraform(struct!.remoteIdFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ip_filter: {
      value: cdktf.stringToHclTerraform(struct!.remoteIpFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_stats_list: {
      value: cdktf.listMapperHcl(dataThunderVpnOperIkeStatsByGwOperIkeStatsListStructToHclTerraform, true)(struct!.ikeStatsList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnOperIkeStatsByGwOperIkeStatsListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperIkeStatsByGwOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnOperIkeStatsByGwOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayAllFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayAllFilter = this._displayAllFilter;
    }
    if (this._gatewayNameFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayNameFilter = this._gatewayNameFilter;
    }
    if (this._remoteIdFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIdFilter = this._remoteIdFilter;
    }
    if (this._remoteIpFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIpFilter = this._remoteIpFilter;
    }
    if (this._ikeStatsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeStatsList = this._ikeStatsList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperIkeStatsByGwOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayAllFilter = undefined;
      this._gatewayNameFilter = undefined;
      this._remoteIdFilter = undefined;
      this._remoteIpFilter = undefined;
      this._ikeStatsList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayAllFilter = value.displayAllFilter;
      this._gatewayNameFilter = value.gatewayNameFilter;
      this._remoteIdFilter = value.remoteIdFilter;
      this._remoteIpFilter = value.remoteIpFilter;
      this._ikeStatsList.internalValue = value.ikeStatsList;
    }
  }

  // display_all_filter - computed: false, optional: true, required: false
  private _displayAllFilter?: number; 
  public get displayAllFilter() {
    return this.getNumberAttribute('display_all_filter');
  }
  public set displayAllFilter(value: number) {
    this._displayAllFilter = value;
  }
  public resetDisplayAllFilter() {
    this._displayAllFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayAllFilterInput() {
    return this._displayAllFilter;
  }

  // gateway_name_filter - computed: false, optional: true, required: false
  private _gatewayNameFilter?: string; 
  public get gatewayNameFilter() {
    return this.getStringAttribute('gateway_name_filter');
  }
  public set gatewayNameFilter(value: string) {
    this._gatewayNameFilter = value;
  }
  public resetGatewayNameFilter() {
    this._gatewayNameFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayNameFilterInput() {
    return this._gatewayNameFilter;
  }

  // remote_id_filter - computed: false, optional: true, required: false
  private _remoteIdFilter?: string; 
  public get remoteIdFilter() {
    return this.getStringAttribute('remote_id_filter');
  }
  public set remoteIdFilter(value: string) {
    this._remoteIdFilter = value;
  }
  public resetRemoteIdFilter() {
    this._remoteIdFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIdFilterInput() {
    return this._remoteIdFilter;
  }

  // remote_ip_filter - computed: false, optional: true, required: false
  private _remoteIpFilter?: string; 
  public get remoteIpFilter() {
    return this.getStringAttribute('remote_ip_filter');
  }
  public set remoteIpFilter(value: string) {
    this._remoteIpFilter = value;
  }
  public resetRemoteIpFilter() {
    this._remoteIpFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpFilterInput() {
    return this._remoteIpFilter;
  }

  // ike_stats_list - computed: false, optional: true, required: false
  private _ikeStatsList = new DataThunderVpnOperIkeStatsByGwOperIkeStatsListStructList(this, "ike_stats_list", false);
  public get ikeStatsList() {
    return this._ikeStatsList;
  }
  public putIkeStatsList(value: DataThunderVpnOperIkeStatsByGwOperIkeStatsListStruct[] | cdktf.IResolvable) {
    this._ikeStatsList.internalValue = value;
  }
  public resetIkeStatsList() {
    this._ikeStatsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeStatsListInput() {
    return this._ikeStatsList.internalValue;
  }
}
export interface DataThunderVpnOperIkeStatsByGw {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#oper DataThunderVpnOper#oper}
  */
  readonly oper?: DataThunderVpnOperIkeStatsByGwOper;
}

export function dataThunderVpnOperIkeStatsByGwToTerraform(struct?: DataThunderVpnOperIkeStatsByGwOutputReference | DataThunderVpnOperIkeStatsByGw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderVpnOperIkeStatsByGwOperToTerraform(struct!.oper),
  }
}


export function dataThunderVpnOperIkeStatsByGwToHclTerraform(struct?: DataThunderVpnOperIkeStatsByGwOutputReference | DataThunderVpnOperIkeStatsByGw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderVpnOperIkeStatsByGwOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnOperIkeStatsByGwOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperIkeStatsByGwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnOperIkeStatsByGw | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperIkeStatsByGw | undefined) {
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
  private _oper = new DataThunderVpnOperIkeStatsByGwOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVpnOperIkeStatsByGwOper) {
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
export interface DataThunderVpnOperIpsecListOperSaListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#anti_replay DataThunderVpnOper#anti_replay}
  */
  readonly antiReplay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#anti_replay_num DataThunderVpnOper#anti_replay_num}
  */
  readonly antiReplayNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#bytes_decrypted DataThunderVpnOper#bytes_decrypted}
  */
  readonly bytesDecrypted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#bytes_encrypted DataThunderVpnOper#bytes_encrypted}
  */
  readonly bytesEncrypted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#cavium_bytes_decrypted DataThunderVpnOper#cavium_bytes_decrypted}
  */
  readonly caviumBytesDecrypted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#cavium_bytes_encrypted DataThunderVpnOper#cavium_bytes_encrypted}
  */
  readonly caviumBytesEncrypted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#cavium_packets_decrypted DataThunderVpnOper#cavium_packets_decrypted}
  */
  readonly caviumPacketsDecrypted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#cavium_packets_encrypted DataThunderVpnOper#cavium_packets_encrypted}
  */
  readonly caviumPacketsEncrypted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#dh_group DataThunderVpnOper#dh_group}
  */
  readonly dhGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#encryption_algorithm DataThunderVpnOper#encryption_algorithm}
  */
  readonly encryptionAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#enforce_ts_decap_drop DataThunderVpnOper#enforce_ts_decap_drop}
  */
  readonly enforceTsDecapDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#enforce_ts_encap_drop DataThunderVpnOper#enforce_ts_encap_drop}
  */
  readonly enforceTsEncapDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#frag_after_encap_frag_packets DataThunderVpnOper#frag_after_encap_frag_packets}
  */
  readonly fragAfterEncapFragPackets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#frag_received DataThunderVpnOper#frag_received}
  */
  readonly fragReceived?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#hash_algorithm DataThunderVpnOper#hash_algorithm}
  */
  readonly hashAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#invalid_tunnel_id DataThunderVpnOper#invalid_tunnel_id}
  */
  readonly invalidTunnelId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#lifebytes DataThunderVpnOper#lifebytes}
  */
  readonly lifebytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#lifetime DataThunderVpnOper#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#local_ip DataThunderVpnOper#local_ip}
  */
  readonly localIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#local_port DataThunderVpnOper#local_port}
  */
  readonly localPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#local_spi DataThunderVpnOper#local_spi}
  */
  readonly localSpi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#mode DataThunderVpnOper#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#nat_traversal DataThunderVpnOper#nat_traversal}
  */
  readonly natTraversal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#no_next_hop DataThunderVpnOper#no_next_hop}
  */
  readonly noNextHop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#no_tunnel_found DataThunderVpnOper#no_tunnel_found}
  */
  readonly noTunnelFound?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#packets_decrypted DataThunderVpnOper#packets_decrypted}
  */
  readonly packetsDecrypted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#packets_encrypted DataThunderVpnOper#packets_encrypted}
  */
  readonly packetsEncrypted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#packets_err_encryption DataThunderVpnOper#packets_err_encryption}
  */
  readonly packetsErrEncryption?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#packets_err_icv_check DataThunderVpnOper#packets_err_icv_check}
  */
  readonly packetsErrIcvCheck?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#packets_err_inactive DataThunderVpnOper#packets_err_inactive}
  */
  readonly packetsErrInactive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#packets_err_lifetime_lifebytes DataThunderVpnOper#packets_err_lifetime_lifebytes}
  */
  readonly packetsErrLifetimeLifebytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#packets_err_nh_check DataThunderVpnOper#packets_err_nh_check}
  */
  readonly packetsErrNhCheck?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#packets_err_pad_check DataThunderVpnOper#packets_err_pad_check}
  */
  readonly packetsErrPadCheck?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#packets_err_pkt_sanity DataThunderVpnOper#packets_err_pkt_sanity}
  */
  readonly packetsErrPktSanity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#peer_ip DataThunderVpnOper#peer_ip}
  */
  readonly peerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#peer_port DataThunderVpnOper#peer_port}
  */
  readonly peerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#pkt_fail_prep_to_send DataThunderVpnOper#pkt_fail_prep_to_send}
  */
  readonly pktFailPrepToSend?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#pkt_fail_to_send DataThunderVpnOper#pkt_fail_to_send}
  */
  readonly pktFailToSend?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#prefrag_error DataThunderVpnOper#prefrag_error}
  */
  readonly prefragError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#prefrag_success DataThunderVpnOper#prefrag_success}
  */
  readonly prefragSuccess?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#protocol DataThunderVpnOper#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#qat_bytes_decrypted DataThunderVpnOper#qat_bytes_decrypted}
  */
  readonly qatBytesDecrypted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#qat_bytes_encrypted DataThunderVpnOper#qat_bytes_encrypted}
  */
  readonly qatBytesEncrypted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#qat_packets_decrypted DataThunderVpnOper#qat_packets_decrypted}
  */
  readonly qatPacketsDecrypted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#qat_packets_encrypted DataThunderVpnOper#qat_packets_encrypted}
  */
  readonly qatPacketsEncrypted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#rekey_num DataThunderVpnOper#rekey_num}
  */
  readonly rekeyNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#remote_spi DataThunderVpnOper#remote_spi}
  */
  readonly remoteSpi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#sa_index DataThunderVpnOper#sa_index}
  */
  readonly saIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#sequence_num DataThunderVpnOper#sequence_num}
  */
  readonly sequenceNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#sequence_num_rollover DataThunderVpnOper#sequence_num_rollover}
  */
  readonly sequenceNumRollover?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#status DataThunderVpnOper#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ts_proto DataThunderVpnOper#ts_proto}
  */
  readonly tsProto?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#tunnel_intf_down DataThunderVpnOper#tunnel_intf_down}
  */
  readonly tunnelIntfDown?: number;
}

export function dataThunderVpnOperIpsecListOperSaListStructToTerraform(struct?: DataThunderVpnOperIpsecListOperSaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anti_replay: cdktf.stringToTerraform(struct!.antiReplay),
    anti_replay_num: cdktf.numberToTerraform(struct!.antiReplayNum),
    bytes_decrypted: cdktf.numberToTerraform(struct!.bytesDecrypted),
    bytes_encrypted: cdktf.numberToTerraform(struct!.bytesEncrypted),
    cavium_bytes_decrypted: cdktf.numberToTerraform(struct!.caviumBytesDecrypted),
    cavium_bytes_encrypted: cdktf.numberToTerraform(struct!.caviumBytesEncrypted),
    cavium_packets_decrypted: cdktf.numberToTerraform(struct!.caviumPacketsDecrypted),
    cavium_packets_encrypted: cdktf.numberToTerraform(struct!.caviumPacketsEncrypted),
    dh_group: cdktf.numberToTerraform(struct!.dhGroup),
    encryption_algorithm: cdktf.stringToTerraform(struct!.encryptionAlgorithm),
    enforce_ts_decap_drop: cdktf.numberToTerraform(struct!.enforceTsDecapDrop),
    enforce_ts_encap_drop: cdktf.numberToTerraform(struct!.enforceTsEncapDrop),
    frag_after_encap_frag_packets: cdktf.numberToTerraform(struct!.fragAfterEncapFragPackets),
    frag_received: cdktf.numberToTerraform(struct!.fragReceived),
    hash_algorithm: cdktf.stringToTerraform(struct!.hashAlgorithm),
    invalid_tunnel_id: cdktf.numberToTerraform(struct!.invalidTunnelId),
    lifebytes: cdktf.stringToTerraform(struct!.lifebytes),
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    local_ip: cdktf.stringToTerraform(struct!.localIp),
    local_port: cdktf.numberToTerraform(struct!.localPort),
    local_spi: cdktf.stringToTerraform(struct!.localSpi),
    mode: cdktf.stringToTerraform(struct!.mode),
    nat_traversal: cdktf.numberToTerraform(struct!.natTraversal),
    no_next_hop: cdktf.numberToTerraform(struct!.noNextHop),
    no_tunnel_found: cdktf.numberToTerraform(struct!.noTunnelFound),
    packets_decrypted: cdktf.numberToTerraform(struct!.packetsDecrypted),
    packets_encrypted: cdktf.numberToTerraform(struct!.packetsEncrypted),
    packets_err_encryption: cdktf.numberToTerraform(struct!.packetsErrEncryption),
    packets_err_icv_check: cdktf.numberToTerraform(struct!.packetsErrIcvCheck),
    packets_err_inactive: cdktf.numberToTerraform(struct!.packetsErrInactive),
    packets_err_lifetime_lifebytes: cdktf.numberToTerraform(struct!.packetsErrLifetimeLifebytes),
    packets_err_nh_check: cdktf.numberToTerraform(struct!.packetsErrNhCheck),
    packets_err_pad_check: cdktf.numberToTerraform(struct!.packetsErrPadCheck),
    packets_err_pkt_sanity: cdktf.numberToTerraform(struct!.packetsErrPktSanity),
    peer_ip: cdktf.stringToTerraform(struct!.peerIp),
    peer_port: cdktf.numberToTerraform(struct!.peerPort),
    pkt_fail_prep_to_send: cdktf.numberToTerraform(struct!.pktFailPrepToSend),
    pkt_fail_to_send: cdktf.numberToTerraform(struct!.pktFailToSend),
    prefrag_error: cdktf.numberToTerraform(struct!.prefragError),
    prefrag_success: cdktf.numberToTerraform(struct!.prefragSuccess),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    qat_bytes_decrypted: cdktf.numberToTerraform(struct!.qatBytesDecrypted),
    qat_bytes_encrypted: cdktf.numberToTerraform(struct!.qatBytesEncrypted),
    qat_packets_decrypted: cdktf.numberToTerraform(struct!.qatPacketsDecrypted),
    qat_packets_encrypted: cdktf.numberToTerraform(struct!.qatPacketsEncrypted),
    rekey_num: cdktf.numberToTerraform(struct!.rekeyNum),
    remote_spi: cdktf.stringToTerraform(struct!.remoteSpi),
    sa_index: cdktf.numberToTerraform(struct!.saIndex),
    sequence_num: cdktf.numberToTerraform(struct!.sequenceNum),
    sequence_num_rollover: cdktf.numberToTerraform(struct!.sequenceNumRollover),
    status: cdktf.stringToTerraform(struct!.status),
    ts_proto: cdktf.numberToTerraform(struct!.tsProto),
    tunnel_intf_down: cdktf.numberToTerraform(struct!.tunnelIntfDown),
  }
}


export function dataThunderVpnOperIpsecListOperSaListStructToHclTerraform(struct?: DataThunderVpnOperIpsecListOperSaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anti_replay: {
      value: cdktf.stringToHclTerraform(struct!.antiReplay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    anti_replay_num: {
      value: cdktf.numberToHclTerraform(struct!.antiReplayNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bytes_decrypted: {
      value: cdktf.numberToHclTerraform(struct!.bytesDecrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bytes_encrypted: {
      value: cdktf.numberToHclTerraform(struct!.bytesEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cavium_bytes_decrypted: {
      value: cdktf.numberToHclTerraform(struct!.caviumBytesDecrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cavium_bytes_encrypted: {
      value: cdktf.numberToHclTerraform(struct!.caviumBytesEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cavium_packets_decrypted: {
      value: cdktf.numberToHclTerraform(struct!.caviumPacketsDecrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cavium_packets_encrypted: {
      value: cdktf.numberToHclTerraform(struct!.caviumPacketsEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dh_group: {
      value: cdktf.numberToHclTerraform(struct!.dhGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    encryption_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.encryptionAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enforce_ts_decap_drop: {
      value: cdktf.numberToHclTerraform(struct!.enforceTsDecapDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enforce_ts_encap_drop: {
      value: cdktf.numberToHclTerraform(struct!.enforceTsEncapDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frag_after_encap_frag_packets: {
      value: cdktf.numberToHclTerraform(struct!.fragAfterEncapFragPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frag_received: {
      value: cdktf.numberToHclTerraform(struct!.fragReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hash_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.hashAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invalid_tunnel_id: {
      value: cdktf.numberToHclTerraform(struct!.invalidTunnelId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lifebytes: {
      value: cdktf.stringToHclTerraform(struct!.lifebytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_ip: {
      value: cdktf.stringToHclTerraform(struct!.localIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_port: {
      value: cdktf.numberToHclTerraform(struct!.localPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_spi: {
      value: cdktf.stringToHclTerraform(struct!.localSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_traversal: {
      value: cdktf.numberToHclTerraform(struct!.natTraversal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_next_hop: {
      value: cdktf.numberToHclTerraform(struct!.noNextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_tunnel_found: {
      value: cdktf.numberToHclTerraform(struct!.noTunnelFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_decrypted: {
      value: cdktf.numberToHclTerraform(struct!.packetsDecrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_encrypted: {
      value: cdktf.numberToHclTerraform(struct!.packetsEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_err_encryption: {
      value: cdktf.numberToHclTerraform(struct!.packetsErrEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_err_icv_check: {
      value: cdktf.numberToHclTerraform(struct!.packetsErrIcvCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_err_inactive: {
      value: cdktf.numberToHclTerraform(struct!.packetsErrInactive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_err_lifetime_lifebytes: {
      value: cdktf.numberToHclTerraform(struct!.packetsErrLifetimeLifebytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_err_nh_check: {
      value: cdktf.numberToHclTerraform(struct!.packetsErrNhCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_err_pad_check: {
      value: cdktf.numberToHclTerraform(struct!.packetsErrPadCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_err_pkt_sanity: {
      value: cdktf.numberToHclTerraform(struct!.packetsErrPktSanity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_ip: {
      value: cdktf.stringToHclTerraform(struct!.peerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_port: {
      value: cdktf.numberToHclTerraform(struct!.peerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_fail_prep_to_send: {
      value: cdktf.numberToHclTerraform(struct!.pktFailPrepToSend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_fail_to_send: {
      value: cdktf.numberToHclTerraform(struct!.pktFailToSend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefrag_error: {
      value: cdktf.numberToHclTerraform(struct!.prefragError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefrag_success: {
      value: cdktf.numberToHclTerraform(struct!.prefragSuccess),
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
    qat_bytes_decrypted: {
      value: cdktf.numberToHclTerraform(struct!.qatBytesDecrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    qat_bytes_encrypted: {
      value: cdktf.numberToHclTerraform(struct!.qatBytesEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    qat_packets_decrypted: {
      value: cdktf.numberToHclTerraform(struct!.qatPacketsDecrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    qat_packets_encrypted: {
      value: cdktf.numberToHclTerraform(struct!.qatPacketsEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rekey_num: {
      value: cdktf.numberToHclTerraform(struct!.rekeyNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_spi: {
      value: cdktf.stringToHclTerraform(struct!.remoteSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sa_index: {
      value: cdktf.numberToHclTerraform(struct!.saIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sequence_num: {
      value: cdktf.numberToHclTerraform(struct!.sequenceNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sequence_num_rollover: {
      value: cdktf.numberToHclTerraform(struct!.sequenceNumRollover),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ts_proto: {
      value: cdktf.numberToHclTerraform(struct!.tsProto),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tunnel_intf_down: {
      value: cdktf.numberToHclTerraform(struct!.tunnelIntfDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperIpsecListOperSaListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVpnOperIpsecListOperSaListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._antiReplay !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiReplay = this._antiReplay;
    }
    if (this._antiReplayNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiReplayNum = this._antiReplayNum;
    }
    if (this._bytesDecrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytesDecrypted = this._bytesDecrypted;
    }
    if (this._bytesEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytesEncrypted = this._bytesEncrypted;
    }
    if (this._caviumBytesDecrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.caviumBytesDecrypted = this._caviumBytesDecrypted;
    }
    if (this._caviumBytesEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.caviumBytesEncrypted = this._caviumBytesEncrypted;
    }
    if (this._caviumPacketsDecrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.caviumPacketsDecrypted = this._caviumPacketsDecrypted;
    }
    if (this._caviumPacketsEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.caviumPacketsEncrypted = this._caviumPacketsEncrypted;
    }
    if (this._dhGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhGroup = this._dhGroup;
    }
    if (this._encryptionAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionAlgorithm = this._encryptionAlgorithm;
    }
    if (this._enforceTsDecapDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceTsDecapDrop = this._enforceTsDecapDrop;
    }
    if (this._enforceTsEncapDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceTsEncapDrop = this._enforceTsEncapDrop;
    }
    if (this._fragAfterEncapFragPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragAfterEncapFragPackets = this._fragAfterEncapFragPackets;
    }
    if (this._fragReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragReceived = this._fragReceived;
    }
    if (this._hashAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashAlgorithm = this._hashAlgorithm;
    }
    if (this._invalidTunnelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidTunnelId = this._invalidTunnelId;
    }
    if (this._lifebytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifebytes = this._lifebytes;
    }
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    if (this._localIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.localIp = this._localIp;
    }
    if (this._localPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPort = this._localPort;
    }
    if (this._localSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSpi = this._localSpi;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._natTraversal !== undefined) {
      hasAnyValues = true;
      internalValueResult.natTraversal = this._natTraversal;
    }
    if (this._noNextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.noNextHop = this._noNextHop;
    }
    if (this._noTunnelFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTunnelFound = this._noTunnelFound;
    }
    if (this._packetsDecrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsDecrypted = this._packetsDecrypted;
    }
    if (this._packetsEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsEncrypted = this._packetsEncrypted;
    }
    if (this._packetsErrEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsErrEncryption = this._packetsErrEncryption;
    }
    if (this._packetsErrIcvCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsErrIcvCheck = this._packetsErrIcvCheck;
    }
    if (this._packetsErrInactive !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsErrInactive = this._packetsErrInactive;
    }
    if (this._packetsErrLifetimeLifebytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsErrLifetimeLifebytes = this._packetsErrLifetimeLifebytes;
    }
    if (this._packetsErrNhCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsErrNhCheck = this._packetsErrNhCheck;
    }
    if (this._packetsErrPadCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsErrPadCheck = this._packetsErrPadCheck;
    }
    if (this._packetsErrPktSanity !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsErrPktSanity = this._packetsErrPktSanity;
    }
    if (this._peerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerIp = this._peerIp;
    }
    if (this._peerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerPort = this._peerPort;
    }
    if (this._pktFailPrepToSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktFailPrepToSend = this._pktFailPrepToSend;
    }
    if (this._pktFailToSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktFailToSend = this._pktFailToSend;
    }
    if (this._prefragError !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefragError = this._prefragError;
    }
    if (this._prefragSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefragSuccess = this._prefragSuccess;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._qatBytesDecrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.qatBytesDecrypted = this._qatBytesDecrypted;
    }
    if (this._qatBytesEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.qatBytesEncrypted = this._qatBytesEncrypted;
    }
    if (this._qatPacketsDecrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.qatPacketsDecrypted = this._qatPacketsDecrypted;
    }
    if (this._qatPacketsEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.qatPacketsEncrypted = this._qatPacketsEncrypted;
    }
    if (this._rekeyNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.rekeyNum = this._rekeyNum;
    }
    if (this._remoteSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteSpi = this._remoteSpi;
    }
    if (this._saIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.saIndex = this._saIndex;
    }
    if (this._sequenceNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceNum = this._sequenceNum;
    }
    if (this._sequenceNumRollover !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceNumRollover = this._sequenceNumRollover;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tsProto !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsProto = this._tsProto;
    }
    if (this._tunnelIntfDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelIntfDown = this._tunnelIntfDown;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperIpsecListOperSaListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._antiReplay = undefined;
      this._antiReplayNum = undefined;
      this._bytesDecrypted = undefined;
      this._bytesEncrypted = undefined;
      this._caviumBytesDecrypted = undefined;
      this._caviumBytesEncrypted = undefined;
      this._caviumPacketsDecrypted = undefined;
      this._caviumPacketsEncrypted = undefined;
      this._dhGroup = undefined;
      this._encryptionAlgorithm = undefined;
      this._enforceTsDecapDrop = undefined;
      this._enforceTsEncapDrop = undefined;
      this._fragAfterEncapFragPackets = undefined;
      this._fragReceived = undefined;
      this._hashAlgorithm = undefined;
      this._invalidTunnelId = undefined;
      this._lifebytes = undefined;
      this._lifetime = undefined;
      this._localIp = undefined;
      this._localPort = undefined;
      this._localSpi = undefined;
      this._mode = undefined;
      this._natTraversal = undefined;
      this._noNextHop = undefined;
      this._noTunnelFound = undefined;
      this._packetsDecrypted = undefined;
      this._packetsEncrypted = undefined;
      this._packetsErrEncryption = undefined;
      this._packetsErrIcvCheck = undefined;
      this._packetsErrInactive = undefined;
      this._packetsErrLifetimeLifebytes = undefined;
      this._packetsErrNhCheck = undefined;
      this._packetsErrPadCheck = undefined;
      this._packetsErrPktSanity = undefined;
      this._peerIp = undefined;
      this._peerPort = undefined;
      this._pktFailPrepToSend = undefined;
      this._pktFailToSend = undefined;
      this._prefragError = undefined;
      this._prefragSuccess = undefined;
      this._protocol = undefined;
      this._qatBytesDecrypted = undefined;
      this._qatBytesEncrypted = undefined;
      this._qatPacketsDecrypted = undefined;
      this._qatPacketsEncrypted = undefined;
      this._rekeyNum = undefined;
      this._remoteSpi = undefined;
      this._saIndex = undefined;
      this._sequenceNum = undefined;
      this._sequenceNumRollover = undefined;
      this._status = undefined;
      this._tsProto = undefined;
      this._tunnelIntfDown = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._antiReplay = value.antiReplay;
      this._antiReplayNum = value.antiReplayNum;
      this._bytesDecrypted = value.bytesDecrypted;
      this._bytesEncrypted = value.bytesEncrypted;
      this._caviumBytesDecrypted = value.caviumBytesDecrypted;
      this._caviumBytesEncrypted = value.caviumBytesEncrypted;
      this._caviumPacketsDecrypted = value.caviumPacketsDecrypted;
      this._caviumPacketsEncrypted = value.caviumPacketsEncrypted;
      this._dhGroup = value.dhGroup;
      this._encryptionAlgorithm = value.encryptionAlgorithm;
      this._enforceTsDecapDrop = value.enforceTsDecapDrop;
      this._enforceTsEncapDrop = value.enforceTsEncapDrop;
      this._fragAfterEncapFragPackets = value.fragAfterEncapFragPackets;
      this._fragReceived = value.fragReceived;
      this._hashAlgorithm = value.hashAlgorithm;
      this._invalidTunnelId = value.invalidTunnelId;
      this._lifebytes = value.lifebytes;
      this._lifetime = value.lifetime;
      this._localIp = value.localIp;
      this._localPort = value.localPort;
      this._localSpi = value.localSpi;
      this._mode = value.mode;
      this._natTraversal = value.natTraversal;
      this._noNextHop = value.noNextHop;
      this._noTunnelFound = value.noTunnelFound;
      this._packetsDecrypted = value.packetsDecrypted;
      this._packetsEncrypted = value.packetsEncrypted;
      this._packetsErrEncryption = value.packetsErrEncryption;
      this._packetsErrIcvCheck = value.packetsErrIcvCheck;
      this._packetsErrInactive = value.packetsErrInactive;
      this._packetsErrLifetimeLifebytes = value.packetsErrLifetimeLifebytes;
      this._packetsErrNhCheck = value.packetsErrNhCheck;
      this._packetsErrPadCheck = value.packetsErrPadCheck;
      this._packetsErrPktSanity = value.packetsErrPktSanity;
      this._peerIp = value.peerIp;
      this._peerPort = value.peerPort;
      this._pktFailPrepToSend = value.pktFailPrepToSend;
      this._pktFailToSend = value.pktFailToSend;
      this._prefragError = value.prefragError;
      this._prefragSuccess = value.prefragSuccess;
      this._protocol = value.protocol;
      this._qatBytesDecrypted = value.qatBytesDecrypted;
      this._qatBytesEncrypted = value.qatBytesEncrypted;
      this._qatPacketsDecrypted = value.qatPacketsDecrypted;
      this._qatPacketsEncrypted = value.qatPacketsEncrypted;
      this._rekeyNum = value.rekeyNum;
      this._remoteSpi = value.remoteSpi;
      this._saIndex = value.saIndex;
      this._sequenceNum = value.sequenceNum;
      this._sequenceNumRollover = value.sequenceNumRollover;
      this._status = value.status;
      this._tsProto = value.tsProto;
      this._tunnelIntfDown = value.tunnelIntfDown;
    }
  }

  // anti_replay - computed: false, optional: true, required: false
  private _antiReplay?: string; 
  public get antiReplay() {
    return this.getStringAttribute('anti_replay');
  }
  public set antiReplay(value: string) {
    this._antiReplay = value;
  }
  public resetAntiReplay() {
    this._antiReplay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiReplayInput() {
    return this._antiReplay;
  }

  // anti_replay_num - computed: false, optional: true, required: false
  private _antiReplayNum?: number; 
  public get antiReplayNum() {
    return this.getNumberAttribute('anti_replay_num');
  }
  public set antiReplayNum(value: number) {
    this._antiReplayNum = value;
  }
  public resetAntiReplayNum() {
    this._antiReplayNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiReplayNumInput() {
    return this._antiReplayNum;
  }

  // bytes_decrypted - computed: false, optional: true, required: false
  private _bytesDecrypted?: number; 
  public get bytesDecrypted() {
    return this.getNumberAttribute('bytes_decrypted');
  }
  public set bytesDecrypted(value: number) {
    this._bytesDecrypted = value;
  }
  public resetBytesDecrypted() {
    this._bytesDecrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesDecryptedInput() {
    return this._bytesDecrypted;
  }

  // bytes_encrypted - computed: false, optional: true, required: false
  private _bytesEncrypted?: number; 
  public get bytesEncrypted() {
    return this.getNumberAttribute('bytes_encrypted');
  }
  public set bytesEncrypted(value: number) {
    this._bytesEncrypted = value;
  }
  public resetBytesEncrypted() {
    this._bytesEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesEncryptedInput() {
    return this._bytesEncrypted;
  }

  // cavium_bytes_decrypted - computed: false, optional: true, required: false
  private _caviumBytesDecrypted?: number; 
  public get caviumBytesDecrypted() {
    return this.getNumberAttribute('cavium_bytes_decrypted');
  }
  public set caviumBytesDecrypted(value: number) {
    this._caviumBytesDecrypted = value;
  }
  public resetCaviumBytesDecrypted() {
    this._caviumBytesDecrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caviumBytesDecryptedInput() {
    return this._caviumBytesDecrypted;
  }

  // cavium_bytes_encrypted - computed: false, optional: true, required: false
  private _caviumBytesEncrypted?: number; 
  public get caviumBytesEncrypted() {
    return this.getNumberAttribute('cavium_bytes_encrypted');
  }
  public set caviumBytesEncrypted(value: number) {
    this._caviumBytesEncrypted = value;
  }
  public resetCaviumBytesEncrypted() {
    this._caviumBytesEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caviumBytesEncryptedInput() {
    return this._caviumBytesEncrypted;
  }

  // cavium_packets_decrypted - computed: false, optional: true, required: false
  private _caviumPacketsDecrypted?: number; 
  public get caviumPacketsDecrypted() {
    return this.getNumberAttribute('cavium_packets_decrypted');
  }
  public set caviumPacketsDecrypted(value: number) {
    this._caviumPacketsDecrypted = value;
  }
  public resetCaviumPacketsDecrypted() {
    this._caviumPacketsDecrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caviumPacketsDecryptedInput() {
    return this._caviumPacketsDecrypted;
  }

  // cavium_packets_encrypted - computed: false, optional: true, required: false
  private _caviumPacketsEncrypted?: number; 
  public get caviumPacketsEncrypted() {
    return this.getNumberAttribute('cavium_packets_encrypted');
  }
  public set caviumPacketsEncrypted(value: number) {
    this._caviumPacketsEncrypted = value;
  }
  public resetCaviumPacketsEncrypted() {
    this._caviumPacketsEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caviumPacketsEncryptedInput() {
    return this._caviumPacketsEncrypted;
  }

  // dh_group - computed: false, optional: true, required: false
  private _dhGroup?: number; 
  public get dhGroup() {
    return this.getNumberAttribute('dh_group');
  }
  public set dhGroup(value: number) {
    this._dhGroup = value;
  }
  public resetDhGroup() {
    this._dhGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroupInput() {
    return this._dhGroup;
  }

  // encryption_algorithm - computed: false, optional: true, required: false
  private _encryptionAlgorithm?: string; 
  public get encryptionAlgorithm() {
    return this.getStringAttribute('encryption_algorithm');
  }
  public set encryptionAlgorithm(value: string) {
    this._encryptionAlgorithm = value;
  }
  public resetEncryptionAlgorithm() {
    this._encryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAlgorithmInput() {
    return this._encryptionAlgorithm;
  }

  // enforce_ts_decap_drop - computed: false, optional: true, required: false
  private _enforceTsDecapDrop?: number; 
  public get enforceTsDecapDrop() {
    return this.getNumberAttribute('enforce_ts_decap_drop');
  }
  public set enforceTsDecapDrop(value: number) {
    this._enforceTsDecapDrop = value;
  }
  public resetEnforceTsDecapDrop() {
    this._enforceTsDecapDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceTsDecapDropInput() {
    return this._enforceTsDecapDrop;
  }

  // enforce_ts_encap_drop - computed: false, optional: true, required: false
  private _enforceTsEncapDrop?: number; 
  public get enforceTsEncapDrop() {
    return this.getNumberAttribute('enforce_ts_encap_drop');
  }
  public set enforceTsEncapDrop(value: number) {
    this._enforceTsEncapDrop = value;
  }
  public resetEnforceTsEncapDrop() {
    this._enforceTsEncapDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceTsEncapDropInput() {
    return this._enforceTsEncapDrop;
  }

  // frag_after_encap_frag_packets - computed: false, optional: true, required: false
  private _fragAfterEncapFragPackets?: number; 
  public get fragAfterEncapFragPackets() {
    return this.getNumberAttribute('frag_after_encap_frag_packets');
  }
  public set fragAfterEncapFragPackets(value: number) {
    this._fragAfterEncapFragPackets = value;
  }
  public resetFragAfterEncapFragPackets() {
    this._fragAfterEncapFragPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragAfterEncapFragPacketsInput() {
    return this._fragAfterEncapFragPackets;
  }

  // frag_received - computed: false, optional: true, required: false
  private _fragReceived?: number; 
  public get fragReceived() {
    return this.getNumberAttribute('frag_received');
  }
  public set fragReceived(value: number) {
    this._fragReceived = value;
  }
  public resetFragReceived() {
    this._fragReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragReceivedInput() {
    return this._fragReceived;
  }

  // hash_algorithm - computed: false, optional: true, required: false
  private _hashAlgorithm?: string; 
  public get hashAlgorithm() {
    return this.getStringAttribute('hash_algorithm');
  }
  public set hashAlgorithm(value: string) {
    this._hashAlgorithm = value;
  }
  public resetHashAlgorithm() {
    this._hashAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashAlgorithmInput() {
    return this._hashAlgorithm;
  }

  // invalid_tunnel_id - computed: false, optional: true, required: false
  private _invalidTunnelId?: number; 
  public get invalidTunnelId() {
    return this.getNumberAttribute('invalid_tunnel_id');
  }
  public set invalidTunnelId(value: number) {
    this._invalidTunnelId = value;
  }
  public resetInvalidTunnelId() {
    this._invalidTunnelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidTunnelIdInput() {
    return this._invalidTunnelId;
  }

  // lifebytes - computed: false, optional: true, required: false
  private _lifebytes?: string; 
  public get lifebytes() {
    return this.getStringAttribute('lifebytes');
  }
  public set lifebytes(value: string) {
    this._lifebytes = value;
  }
  public resetLifebytes() {
    this._lifebytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifebytesInput() {
    return this._lifebytes;
  }

  // lifetime - computed: false, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }

  // local_ip - computed: false, optional: true, required: false
  private _localIp?: string; 
  public get localIp() {
    return this.getStringAttribute('local_ip');
  }
  public set localIp(value: string) {
    this._localIp = value;
  }
  public resetLocalIp() {
    this._localIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpInput() {
    return this._localIp;
  }

  // local_port - computed: false, optional: true, required: false
  private _localPort?: number; 
  public get localPort() {
    return this.getNumberAttribute('local_port');
  }
  public set localPort(value: number) {
    this._localPort = value;
  }
  public resetLocalPort() {
    this._localPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPortInput() {
    return this._localPort;
  }

  // local_spi - computed: false, optional: true, required: false
  private _localSpi?: string; 
  public get localSpi() {
    return this.getStringAttribute('local_spi');
  }
  public set localSpi(value: string) {
    this._localSpi = value;
  }
  public resetLocalSpi() {
    this._localSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSpiInput() {
    return this._localSpi;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // nat_traversal - computed: false, optional: true, required: false
  private _natTraversal?: number; 
  public get natTraversal() {
    return this.getNumberAttribute('nat_traversal');
  }
  public set natTraversal(value: number) {
    this._natTraversal = value;
  }
  public resetNatTraversal() {
    this._natTraversal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natTraversalInput() {
    return this._natTraversal;
  }

  // no_next_hop - computed: false, optional: true, required: false
  private _noNextHop?: number; 
  public get noNextHop() {
    return this.getNumberAttribute('no_next_hop');
  }
  public set noNextHop(value: number) {
    this._noNextHop = value;
  }
  public resetNoNextHop() {
    this._noNextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noNextHopInput() {
    return this._noNextHop;
  }

  // no_tunnel_found - computed: false, optional: true, required: false
  private _noTunnelFound?: number; 
  public get noTunnelFound() {
    return this.getNumberAttribute('no_tunnel_found');
  }
  public set noTunnelFound(value: number) {
    this._noTunnelFound = value;
  }
  public resetNoTunnelFound() {
    this._noTunnelFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTunnelFoundInput() {
    return this._noTunnelFound;
  }

  // packets_decrypted - computed: false, optional: true, required: false
  private _packetsDecrypted?: number; 
  public get packetsDecrypted() {
    return this.getNumberAttribute('packets_decrypted');
  }
  public set packetsDecrypted(value: number) {
    this._packetsDecrypted = value;
  }
  public resetPacketsDecrypted() {
    this._packetsDecrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsDecryptedInput() {
    return this._packetsDecrypted;
  }

  // packets_encrypted - computed: false, optional: true, required: false
  private _packetsEncrypted?: number; 
  public get packetsEncrypted() {
    return this.getNumberAttribute('packets_encrypted');
  }
  public set packetsEncrypted(value: number) {
    this._packetsEncrypted = value;
  }
  public resetPacketsEncrypted() {
    this._packetsEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsEncryptedInput() {
    return this._packetsEncrypted;
  }

  // packets_err_encryption - computed: false, optional: true, required: false
  private _packetsErrEncryption?: number; 
  public get packetsErrEncryption() {
    return this.getNumberAttribute('packets_err_encryption');
  }
  public set packetsErrEncryption(value: number) {
    this._packetsErrEncryption = value;
  }
  public resetPacketsErrEncryption() {
    this._packetsErrEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsErrEncryptionInput() {
    return this._packetsErrEncryption;
  }

  // packets_err_icv_check - computed: false, optional: true, required: false
  private _packetsErrIcvCheck?: number; 
  public get packetsErrIcvCheck() {
    return this.getNumberAttribute('packets_err_icv_check');
  }
  public set packetsErrIcvCheck(value: number) {
    this._packetsErrIcvCheck = value;
  }
  public resetPacketsErrIcvCheck() {
    this._packetsErrIcvCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsErrIcvCheckInput() {
    return this._packetsErrIcvCheck;
  }

  // packets_err_inactive - computed: false, optional: true, required: false
  private _packetsErrInactive?: number; 
  public get packetsErrInactive() {
    return this.getNumberAttribute('packets_err_inactive');
  }
  public set packetsErrInactive(value: number) {
    this._packetsErrInactive = value;
  }
  public resetPacketsErrInactive() {
    this._packetsErrInactive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsErrInactiveInput() {
    return this._packetsErrInactive;
  }

  // packets_err_lifetime_lifebytes - computed: false, optional: true, required: false
  private _packetsErrLifetimeLifebytes?: number; 
  public get packetsErrLifetimeLifebytes() {
    return this.getNumberAttribute('packets_err_lifetime_lifebytes');
  }
  public set packetsErrLifetimeLifebytes(value: number) {
    this._packetsErrLifetimeLifebytes = value;
  }
  public resetPacketsErrLifetimeLifebytes() {
    this._packetsErrLifetimeLifebytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsErrLifetimeLifebytesInput() {
    return this._packetsErrLifetimeLifebytes;
  }

  // packets_err_nh_check - computed: false, optional: true, required: false
  private _packetsErrNhCheck?: number; 
  public get packetsErrNhCheck() {
    return this.getNumberAttribute('packets_err_nh_check');
  }
  public set packetsErrNhCheck(value: number) {
    this._packetsErrNhCheck = value;
  }
  public resetPacketsErrNhCheck() {
    this._packetsErrNhCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsErrNhCheckInput() {
    return this._packetsErrNhCheck;
  }

  // packets_err_pad_check - computed: false, optional: true, required: false
  private _packetsErrPadCheck?: number; 
  public get packetsErrPadCheck() {
    return this.getNumberAttribute('packets_err_pad_check');
  }
  public set packetsErrPadCheck(value: number) {
    this._packetsErrPadCheck = value;
  }
  public resetPacketsErrPadCheck() {
    this._packetsErrPadCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsErrPadCheckInput() {
    return this._packetsErrPadCheck;
  }

  // packets_err_pkt_sanity - computed: false, optional: true, required: false
  private _packetsErrPktSanity?: number; 
  public get packetsErrPktSanity() {
    return this.getNumberAttribute('packets_err_pkt_sanity');
  }
  public set packetsErrPktSanity(value: number) {
    this._packetsErrPktSanity = value;
  }
  public resetPacketsErrPktSanity() {
    this._packetsErrPktSanity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsErrPktSanityInput() {
    return this._packetsErrPktSanity;
  }

  // peer_ip - computed: false, optional: true, required: false
  private _peerIp?: string; 
  public get peerIp() {
    return this.getStringAttribute('peer_ip');
  }
  public set peerIp(value: string) {
    this._peerIp = value;
  }
  public resetPeerIp() {
    this._peerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpInput() {
    return this._peerIp;
  }

  // peer_port - computed: false, optional: true, required: false
  private _peerPort?: number; 
  public get peerPort() {
    return this.getNumberAttribute('peer_port');
  }
  public set peerPort(value: number) {
    this._peerPort = value;
  }
  public resetPeerPort() {
    this._peerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerPortInput() {
    return this._peerPort;
  }

  // pkt_fail_prep_to_send - computed: false, optional: true, required: false
  private _pktFailPrepToSend?: number; 
  public get pktFailPrepToSend() {
    return this.getNumberAttribute('pkt_fail_prep_to_send');
  }
  public set pktFailPrepToSend(value: number) {
    this._pktFailPrepToSend = value;
  }
  public resetPktFailPrepToSend() {
    this._pktFailPrepToSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktFailPrepToSendInput() {
    return this._pktFailPrepToSend;
  }

  // pkt_fail_to_send - computed: false, optional: true, required: false
  private _pktFailToSend?: number; 
  public get pktFailToSend() {
    return this.getNumberAttribute('pkt_fail_to_send');
  }
  public set pktFailToSend(value: number) {
    this._pktFailToSend = value;
  }
  public resetPktFailToSend() {
    this._pktFailToSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktFailToSendInput() {
    return this._pktFailToSend;
  }

  // prefrag_error - computed: false, optional: true, required: false
  private _prefragError?: number; 
  public get prefragError() {
    return this.getNumberAttribute('prefrag_error');
  }
  public set prefragError(value: number) {
    this._prefragError = value;
  }
  public resetPrefragError() {
    this._prefragError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefragErrorInput() {
    return this._prefragError;
  }

  // prefrag_success - computed: false, optional: true, required: false
  private _prefragSuccess?: number; 
  public get prefragSuccess() {
    return this.getNumberAttribute('prefrag_success');
  }
  public set prefragSuccess(value: number) {
    this._prefragSuccess = value;
  }
  public resetPrefragSuccess() {
    this._prefragSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefragSuccessInput() {
    return this._prefragSuccess;
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

  // qat_bytes_decrypted - computed: false, optional: true, required: false
  private _qatBytesDecrypted?: number; 
  public get qatBytesDecrypted() {
    return this.getNumberAttribute('qat_bytes_decrypted');
  }
  public set qatBytesDecrypted(value: number) {
    this._qatBytesDecrypted = value;
  }
  public resetQatBytesDecrypted() {
    this._qatBytesDecrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qatBytesDecryptedInput() {
    return this._qatBytesDecrypted;
  }

  // qat_bytes_encrypted - computed: false, optional: true, required: false
  private _qatBytesEncrypted?: number; 
  public get qatBytesEncrypted() {
    return this.getNumberAttribute('qat_bytes_encrypted');
  }
  public set qatBytesEncrypted(value: number) {
    this._qatBytesEncrypted = value;
  }
  public resetQatBytesEncrypted() {
    this._qatBytesEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qatBytesEncryptedInput() {
    return this._qatBytesEncrypted;
  }

  // qat_packets_decrypted - computed: false, optional: true, required: false
  private _qatPacketsDecrypted?: number; 
  public get qatPacketsDecrypted() {
    return this.getNumberAttribute('qat_packets_decrypted');
  }
  public set qatPacketsDecrypted(value: number) {
    this._qatPacketsDecrypted = value;
  }
  public resetQatPacketsDecrypted() {
    this._qatPacketsDecrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qatPacketsDecryptedInput() {
    return this._qatPacketsDecrypted;
  }

  // qat_packets_encrypted - computed: false, optional: true, required: false
  private _qatPacketsEncrypted?: number; 
  public get qatPacketsEncrypted() {
    return this.getNumberAttribute('qat_packets_encrypted');
  }
  public set qatPacketsEncrypted(value: number) {
    this._qatPacketsEncrypted = value;
  }
  public resetQatPacketsEncrypted() {
    this._qatPacketsEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qatPacketsEncryptedInput() {
    return this._qatPacketsEncrypted;
  }

  // rekey_num - computed: false, optional: true, required: false
  private _rekeyNum?: number; 
  public get rekeyNum() {
    return this.getNumberAttribute('rekey_num');
  }
  public set rekeyNum(value: number) {
    this._rekeyNum = value;
  }
  public resetRekeyNum() {
    this._rekeyNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rekeyNumInput() {
    return this._rekeyNum;
  }

  // remote_spi - computed: false, optional: true, required: false
  private _remoteSpi?: string; 
  public get remoteSpi() {
    return this.getStringAttribute('remote_spi');
  }
  public set remoteSpi(value: string) {
    this._remoteSpi = value;
  }
  public resetRemoteSpi() {
    this._remoteSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteSpiInput() {
    return this._remoteSpi;
  }

  // sa_index - computed: false, optional: true, required: false
  private _saIndex?: number; 
  public get saIndex() {
    return this.getNumberAttribute('sa_index');
  }
  public set saIndex(value: number) {
    this._saIndex = value;
  }
  public resetSaIndex() {
    this._saIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saIndexInput() {
    return this._saIndex;
  }

  // sequence_num - computed: false, optional: true, required: false
  private _sequenceNum?: number; 
  public get sequenceNum() {
    return this.getNumberAttribute('sequence_num');
  }
  public set sequenceNum(value: number) {
    this._sequenceNum = value;
  }
  public resetSequenceNum() {
    this._sequenceNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumInput() {
    return this._sequenceNum;
  }

  // sequence_num_rollover - computed: false, optional: true, required: false
  private _sequenceNumRollover?: number; 
  public get sequenceNumRollover() {
    return this.getNumberAttribute('sequence_num_rollover');
  }
  public set sequenceNumRollover(value: number) {
    this._sequenceNumRollover = value;
  }
  public resetSequenceNumRollover() {
    this._sequenceNumRollover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumRolloverInput() {
    return this._sequenceNumRollover;
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

  // ts_proto - computed: false, optional: true, required: false
  private _tsProto?: number; 
  public get tsProto() {
    return this.getNumberAttribute('ts_proto');
  }
  public set tsProto(value: number) {
    this._tsProto = value;
  }
  public resetTsProto() {
    this._tsProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsProtoInput() {
    return this._tsProto;
  }

  // tunnel_intf_down - computed: false, optional: true, required: false
  private _tunnelIntfDown?: number; 
  public get tunnelIntfDown() {
    return this.getNumberAttribute('tunnel_intf_down');
  }
  public set tunnelIntfDown(value: number) {
    this._tunnelIntfDown = value;
  }
  public resetTunnelIntfDown() {
    this._tunnelIntfDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelIntfDownInput() {
    return this._tunnelIntfDown;
  }
}

export class DataThunderVpnOperIpsecListOperSaListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVpnOperIpsecListOperSaListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVpnOperIpsecListOperSaListStructOutputReference {
    return new DataThunderVpnOperIpsecListOperSaListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVpnOperIpsecListOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#in_spi_filter DataThunderVpnOper#in_spi_filter}
  */
  readonly inSpiFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#out_spi_filter DataThunderVpnOper#out_spi_filter}
  */
  readonly outSpiFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#remote_ts_filter DataThunderVpnOper#remote_ts_filter}
  */
  readonly remoteTsFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#remote_ts_v6_filter DataThunderVpnOper#remote_ts_v6_filter}
  */
  readonly remoteTsV6Filter?: string;
  /**
  * sa_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#sa_list DataThunderVpnOper#sa_list}
  */
  readonly saList?: DataThunderVpnOperIpsecListOperSaListStruct[] | cdktf.IResolvable;
}

export function dataThunderVpnOperIpsecListOperToTerraform(struct?: DataThunderVpnOperIpsecListOperOutputReference | DataThunderVpnOperIpsecListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in_spi_filter: cdktf.stringToTerraform(struct!.inSpiFilter),
    out_spi_filter: cdktf.stringToTerraform(struct!.outSpiFilter),
    remote_ts_filter: cdktf.stringToTerraform(struct!.remoteTsFilter),
    remote_ts_v6_filter: cdktf.stringToTerraform(struct!.remoteTsV6Filter),
    sa_list: cdktf.listMapper(dataThunderVpnOperIpsecListOperSaListStructToTerraform, true)(struct!.saList),
  }
}


export function dataThunderVpnOperIpsecListOperToHclTerraform(struct?: DataThunderVpnOperIpsecListOperOutputReference | DataThunderVpnOperIpsecListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in_spi_filter: {
      value: cdktf.stringToHclTerraform(struct!.inSpiFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    out_spi_filter: {
      value: cdktf.stringToHclTerraform(struct!.outSpiFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ts_filter: {
      value: cdktf.stringToHclTerraform(struct!.remoteTsFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ts_v6_filter: {
      value: cdktf.stringToHclTerraform(struct!.remoteTsV6Filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sa_list: {
      value: cdktf.listMapperHcl(dataThunderVpnOperIpsecListOperSaListStructToHclTerraform, true)(struct!.saList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnOperIpsecListOperSaListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperIpsecListOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnOperIpsecListOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inSpiFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.inSpiFilter = this._inSpiFilter;
    }
    if (this._outSpiFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.outSpiFilter = this._outSpiFilter;
    }
    if (this._remoteTsFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteTsFilter = this._remoteTsFilter;
    }
    if (this._remoteTsV6Filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteTsV6Filter = this._remoteTsV6Filter;
    }
    if (this._saList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.saList = this._saList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperIpsecListOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inSpiFilter = undefined;
      this._outSpiFilter = undefined;
      this._remoteTsFilter = undefined;
      this._remoteTsV6Filter = undefined;
      this._saList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inSpiFilter = value.inSpiFilter;
      this._outSpiFilter = value.outSpiFilter;
      this._remoteTsFilter = value.remoteTsFilter;
      this._remoteTsV6Filter = value.remoteTsV6Filter;
      this._saList.internalValue = value.saList;
    }
  }

  // in_spi_filter - computed: false, optional: true, required: false
  private _inSpiFilter?: string; 
  public get inSpiFilter() {
    return this.getStringAttribute('in_spi_filter');
  }
  public set inSpiFilter(value: string) {
    this._inSpiFilter = value;
  }
  public resetInSpiFilter() {
    this._inSpiFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inSpiFilterInput() {
    return this._inSpiFilter;
  }

  // out_spi_filter - computed: false, optional: true, required: false
  private _outSpiFilter?: string; 
  public get outSpiFilter() {
    return this.getStringAttribute('out_spi_filter');
  }
  public set outSpiFilter(value: string) {
    this._outSpiFilter = value;
  }
  public resetOutSpiFilter() {
    this._outSpiFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outSpiFilterInput() {
    return this._outSpiFilter;
  }

  // remote_ts_filter - computed: false, optional: true, required: false
  private _remoteTsFilter?: string; 
  public get remoteTsFilter() {
    return this.getStringAttribute('remote_ts_filter');
  }
  public set remoteTsFilter(value: string) {
    this._remoteTsFilter = value;
  }
  public resetRemoteTsFilter() {
    this._remoteTsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteTsFilterInput() {
    return this._remoteTsFilter;
  }

  // remote_ts_v6_filter - computed: false, optional: true, required: false
  private _remoteTsV6Filter?: string; 
  public get remoteTsV6Filter() {
    return this.getStringAttribute('remote_ts_v6_filter');
  }
  public set remoteTsV6Filter(value: string) {
    this._remoteTsV6Filter = value;
  }
  public resetRemoteTsV6Filter() {
    this._remoteTsV6Filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteTsV6FilterInput() {
    return this._remoteTsV6Filter;
  }

  // sa_list - computed: false, optional: true, required: false
  private _saList = new DataThunderVpnOperIpsecListOperSaListStructList(this, "sa_list", false);
  public get saList() {
    return this._saList;
  }
  public putSaList(value: DataThunderVpnOperIpsecListOperSaListStruct[] | cdktf.IResolvable) {
    this._saList.internalValue = value;
  }
  public resetSaList() {
    this._saList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saListInput() {
    return this._saList.internalValue;
  }
}
export interface DataThunderVpnOperIpsecListStruct {
  /**
  * IPsec name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#name DataThunderVpnOper#name}
  */
  readonly name: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#oper DataThunderVpnOper#oper}
  */
  readonly oper?: DataThunderVpnOperIpsecListOper;
}

export function dataThunderVpnOperIpsecListStructToTerraform(struct?: DataThunderVpnOperIpsecListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    oper: dataThunderVpnOperIpsecListOperToTerraform(struct!.oper),
  }
}


export function dataThunderVpnOperIpsecListStructToHclTerraform(struct?: DataThunderVpnOperIpsecListStruct | cdktf.IResolvable): any {
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
    oper: {
      value: dataThunderVpnOperIpsecListOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnOperIpsecListOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperIpsecListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVpnOperIpsecListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperIpsecListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._oper.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._oper.internalValue = value.oper;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderVpnOperIpsecListOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVpnOperIpsecListOper) {
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

export class DataThunderVpnOperIpsecListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVpnOperIpsecListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVpnOperIpsecListStructOutputReference {
    return new DataThunderVpnOperIpsecListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVpnOperIpsecSaOperIpsecSaListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#encryption DataThunderVpnOper#encryption}
  */
  readonly encryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#hash DataThunderVpnOper#hash}
  */
  readonly hash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_gateway_name DataThunderVpnOper#ike_gateway_name}
  */
  readonly ikeGatewayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#in_spi DataThunderVpnOper#in_spi}
  */
  readonly inSpi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ipsec_sa_name DataThunderVpnOper#ipsec_sa_name}
  */
  readonly ipsecSaName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#lifebytes DataThunderVpnOper#lifebytes}
  */
  readonly lifebytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#lifetime DataThunderVpnOper#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#local_ts DataThunderVpnOper#local_ts}
  */
  readonly localTs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#mode DataThunderVpnOper#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#out_spi DataThunderVpnOper#out_spi}
  */
  readonly outSpi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#protocol DataThunderVpnOper#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#remote_ts DataThunderVpnOper#remote_ts}
  */
  readonly remoteTs?: string;
}

export function dataThunderVpnOperIpsecSaOperIpsecSaListStructToTerraform(struct?: DataThunderVpnOperIpsecSaOperIpsecSaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption: cdktf.stringToTerraform(struct!.encryption),
    hash: cdktf.stringToTerraform(struct!.hash),
    ike_gateway_name: cdktf.stringToTerraform(struct!.ikeGatewayName),
    in_spi: cdktf.stringToTerraform(struct!.inSpi),
    ipsec_sa_name: cdktf.stringToTerraform(struct!.ipsecSaName),
    lifebytes: cdktf.stringToTerraform(struct!.lifebytes),
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    local_ts: cdktf.stringToTerraform(struct!.localTs),
    mode: cdktf.stringToTerraform(struct!.mode),
    out_spi: cdktf.stringToTerraform(struct!.outSpi),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    remote_ts: cdktf.stringToTerraform(struct!.remoteTs),
  }
}


export function dataThunderVpnOperIpsecSaOperIpsecSaListStructToHclTerraform(struct?: DataThunderVpnOperIpsecSaOperIpsecSaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption: {
      value: cdktf.stringToHclTerraform(struct!.encryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hash: {
      value: cdktf.stringToHclTerraform(struct!.hash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_gateway_name: {
      value: cdktf.stringToHclTerraform(struct!.ikeGatewayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    in_spi: {
      value: cdktf.stringToHclTerraform(struct!.inSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_sa_name: {
      value: cdktf.stringToHclTerraform(struct!.ipsecSaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifebytes: {
      value: cdktf.stringToHclTerraform(struct!.lifebytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_ts: {
      value: cdktf.stringToHclTerraform(struct!.localTs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    out_spi: {
      value: cdktf.stringToHclTerraform(struct!.outSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ts: {
      value: cdktf.stringToHclTerraform(struct!.remoteTs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperIpsecSaOperIpsecSaListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVpnOperIpsecSaOperIpsecSaListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption;
    }
    if (this._hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash;
    }
    if (this._ikeGatewayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeGatewayName = this._ikeGatewayName;
    }
    if (this._inSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.inSpi = this._inSpi;
    }
    if (this._ipsecSaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecSaName = this._ipsecSaName;
    }
    if (this._lifebytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifebytes = this._lifebytes;
    }
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    if (this._localTs !== undefined) {
      hasAnyValues = true;
      internalValueResult.localTs = this._localTs;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._outSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.outSpi = this._outSpi;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._remoteTs !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteTs = this._remoteTs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperIpsecSaOperIpsecSaListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryption = undefined;
      this._hash = undefined;
      this._ikeGatewayName = undefined;
      this._inSpi = undefined;
      this._ipsecSaName = undefined;
      this._lifebytes = undefined;
      this._lifetime = undefined;
      this._localTs = undefined;
      this._mode = undefined;
      this._outSpi = undefined;
      this._protocol = undefined;
      this._remoteTs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryption = value.encryption;
      this._hash = value.hash;
      this._ikeGatewayName = value.ikeGatewayName;
      this._inSpi = value.inSpi;
      this._ipsecSaName = value.ipsecSaName;
      this._lifebytes = value.lifebytes;
      this._lifetime = value.lifetime;
      this._localTs = value.localTs;
      this._mode = value.mode;
      this._outSpi = value.outSpi;
      this._protocol = value.protocol;
      this._remoteTs = value.remoteTs;
    }
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption?: string; 
  public get encryption() {
    return this.getStringAttribute('encryption');
  }
  public set encryption(value: string) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // hash - computed: false, optional: true, required: false
  private _hash?: string; 
  public get hash() {
    return this.getStringAttribute('hash');
  }
  public set hash(value: string) {
    this._hash = value;
  }
  public resetHash() {
    this._hash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash;
  }

  // ike_gateway_name - computed: false, optional: true, required: false
  private _ikeGatewayName?: string; 
  public get ikeGatewayName() {
    return this.getStringAttribute('ike_gateway_name');
  }
  public set ikeGatewayName(value: string) {
    this._ikeGatewayName = value;
  }
  public resetIkeGatewayName() {
    this._ikeGatewayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeGatewayNameInput() {
    return this._ikeGatewayName;
  }

  // in_spi - computed: false, optional: true, required: false
  private _inSpi?: string; 
  public get inSpi() {
    return this.getStringAttribute('in_spi');
  }
  public set inSpi(value: string) {
    this._inSpi = value;
  }
  public resetInSpi() {
    this._inSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inSpiInput() {
    return this._inSpi;
  }

  // ipsec_sa_name - computed: false, optional: true, required: false
  private _ipsecSaName?: string; 
  public get ipsecSaName() {
    return this.getStringAttribute('ipsec_sa_name');
  }
  public set ipsecSaName(value: string) {
    this._ipsecSaName = value;
  }
  public resetIpsecSaName() {
    this._ipsecSaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSaNameInput() {
    return this._ipsecSaName;
  }

  // lifebytes - computed: false, optional: true, required: false
  private _lifebytes?: string; 
  public get lifebytes() {
    return this.getStringAttribute('lifebytes');
  }
  public set lifebytes(value: string) {
    this._lifebytes = value;
  }
  public resetLifebytes() {
    this._lifebytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifebytesInput() {
    return this._lifebytes;
  }

  // lifetime - computed: false, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }

  // local_ts - computed: false, optional: true, required: false
  private _localTs?: string; 
  public get localTs() {
    return this.getStringAttribute('local_ts');
  }
  public set localTs(value: string) {
    this._localTs = value;
  }
  public resetLocalTs() {
    this._localTs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localTsInput() {
    return this._localTs;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // out_spi - computed: false, optional: true, required: false
  private _outSpi?: string; 
  public get outSpi() {
    return this.getStringAttribute('out_spi');
  }
  public set outSpi(value: string) {
    this._outSpi = value;
  }
  public resetOutSpi() {
    this._outSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outSpiInput() {
    return this._outSpi;
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

  // remote_ts - computed: false, optional: true, required: false
  private _remoteTs?: string; 
  public get remoteTs() {
    return this.getStringAttribute('remote_ts');
  }
  public set remoteTs(value: string) {
    this._remoteTs = value;
  }
  public resetRemoteTs() {
    this._remoteTs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteTsInput() {
    return this._remoteTs;
  }
}

export class DataThunderVpnOperIpsecSaOperIpsecSaListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVpnOperIpsecSaOperIpsecSaListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVpnOperIpsecSaOperIpsecSaListStructOutputReference {
    return new DataThunderVpnOperIpsecSaOperIpsecSaListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVpnOperIpsecSaOper {
  /**
  * ipsec_sa_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ipsec_sa_list DataThunderVpnOper#ipsec_sa_list}
  */
  readonly ipsecSaList?: DataThunderVpnOperIpsecSaOperIpsecSaListStruct[] | cdktf.IResolvable;
}

export function dataThunderVpnOperIpsecSaOperToTerraform(struct?: DataThunderVpnOperIpsecSaOperOutputReference | DataThunderVpnOperIpsecSaOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipsec_sa_list: cdktf.listMapper(dataThunderVpnOperIpsecSaOperIpsecSaListStructToTerraform, true)(struct!.ipsecSaList),
  }
}


export function dataThunderVpnOperIpsecSaOperToHclTerraform(struct?: DataThunderVpnOperIpsecSaOperOutputReference | DataThunderVpnOperIpsecSaOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipsec_sa_list: {
      value: cdktf.listMapperHcl(dataThunderVpnOperIpsecSaOperIpsecSaListStructToHclTerraform, true)(struct!.ipsecSaList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnOperIpsecSaOperIpsecSaListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperIpsecSaOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnOperIpsecSaOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipsecSaList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecSaList = this._ipsecSaList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperIpsecSaOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipsecSaList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipsecSaList.internalValue = value.ipsecSaList;
    }
  }

  // ipsec_sa_list - computed: false, optional: true, required: false
  private _ipsecSaList = new DataThunderVpnOperIpsecSaOperIpsecSaListStructList(this, "ipsec_sa_list", false);
  public get ipsecSaList() {
    return this._ipsecSaList;
  }
  public putIpsecSaList(value: DataThunderVpnOperIpsecSaOperIpsecSaListStruct[] | cdktf.IResolvable) {
    this._ipsecSaList.internalValue = value;
  }
  public resetIpsecSaList() {
    this._ipsecSaList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSaListInput() {
    return this._ipsecSaList.internalValue;
  }
}
export interface DataThunderVpnOperIpsecSa {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#oper DataThunderVpnOper#oper}
  */
  readonly oper?: DataThunderVpnOperIpsecSaOper;
}

export function dataThunderVpnOperIpsecSaToTerraform(struct?: DataThunderVpnOperIpsecSaOutputReference | DataThunderVpnOperIpsecSa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderVpnOperIpsecSaOperToTerraform(struct!.oper),
  }
}


export function dataThunderVpnOperIpsecSaToHclTerraform(struct?: DataThunderVpnOperIpsecSaOutputReference | DataThunderVpnOperIpsecSa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderVpnOperIpsecSaOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnOperIpsecSaOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperIpsecSaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnOperIpsecSa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperIpsecSa | undefined) {
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
  private _oper = new DataThunderVpnOperIpsecSaOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVpnOperIpsecSaOper) {
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
export interface DataThunderVpnOperIpsecSaByGwOperIpsecSaListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#encryption DataThunderVpnOper#encryption}
  */
  readonly encryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#hash DataThunderVpnOper#hash}
  */
  readonly hash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#in_spi DataThunderVpnOper#in_spi}
  */
  readonly inSpi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ipsec_sa_name DataThunderVpnOper#ipsec_sa_name}
  */
  readonly ipsecSaName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#lifebytes DataThunderVpnOper#lifebytes}
  */
  readonly lifebytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#lifetime DataThunderVpnOper#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#local_ts DataThunderVpnOper#local_ts}
  */
  readonly localTs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#mode DataThunderVpnOper#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#out_spi DataThunderVpnOper#out_spi}
  */
  readonly outSpi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#protocol DataThunderVpnOper#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#remote_ts DataThunderVpnOper#remote_ts}
  */
  readonly remoteTs?: string;
}

export function dataThunderVpnOperIpsecSaByGwOperIpsecSaListStructToTerraform(struct?: DataThunderVpnOperIpsecSaByGwOperIpsecSaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption: cdktf.stringToTerraform(struct!.encryption),
    hash: cdktf.stringToTerraform(struct!.hash),
    in_spi: cdktf.stringToTerraform(struct!.inSpi),
    ipsec_sa_name: cdktf.stringToTerraform(struct!.ipsecSaName),
    lifebytes: cdktf.stringToTerraform(struct!.lifebytes),
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    local_ts: cdktf.stringToTerraform(struct!.localTs),
    mode: cdktf.stringToTerraform(struct!.mode),
    out_spi: cdktf.stringToTerraform(struct!.outSpi),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    remote_ts: cdktf.stringToTerraform(struct!.remoteTs),
  }
}


export function dataThunderVpnOperIpsecSaByGwOperIpsecSaListStructToHclTerraform(struct?: DataThunderVpnOperIpsecSaByGwOperIpsecSaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption: {
      value: cdktf.stringToHclTerraform(struct!.encryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hash: {
      value: cdktf.stringToHclTerraform(struct!.hash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    in_spi: {
      value: cdktf.stringToHclTerraform(struct!.inSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_sa_name: {
      value: cdktf.stringToHclTerraform(struct!.ipsecSaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifebytes: {
      value: cdktf.stringToHclTerraform(struct!.lifebytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_ts: {
      value: cdktf.stringToHclTerraform(struct!.localTs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    out_spi: {
      value: cdktf.stringToHclTerraform(struct!.outSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ts: {
      value: cdktf.stringToHclTerraform(struct!.remoteTs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperIpsecSaByGwOperIpsecSaListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVpnOperIpsecSaByGwOperIpsecSaListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption;
    }
    if (this._hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash;
    }
    if (this._inSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.inSpi = this._inSpi;
    }
    if (this._ipsecSaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecSaName = this._ipsecSaName;
    }
    if (this._lifebytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifebytes = this._lifebytes;
    }
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    if (this._localTs !== undefined) {
      hasAnyValues = true;
      internalValueResult.localTs = this._localTs;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._outSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.outSpi = this._outSpi;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._remoteTs !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteTs = this._remoteTs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperIpsecSaByGwOperIpsecSaListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryption = undefined;
      this._hash = undefined;
      this._inSpi = undefined;
      this._ipsecSaName = undefined;
      this._lifebytes = undefined;
      this._lifetime = undefined;
      this._localTs = undefined;
      this._mode = undefined;
      this._outSpi = undefined;
      this._protocol = undefined;
      this._remoteTs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryption = value.encryption;
      this._hash = value.hash;
      this._inSpi = value.inSpi;
      this._ipsecSaName = value.ipsecSaName;
      this._lifebytes = value.lifebytes;
      this._lifetime = value.lifetime;
      this._localTs = value.localTs;
      this._mode = value.mode;
      this._outSpi = value.outSpi;
      this._protocol = value.protocol;
      this._remoteTs = value.remoteTs;
    }
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption?: string; 
  public get encryption() {
    return this.getStringAttribute('encryption');
  }
  public set encryption(value: string) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // hash - computed: false, optional: true, required: false
  private _hash?: string; 
  public get hash() {
    return this.getStringAttribute('hash');
  }
  public set hash(value: string) {
    this._hash = value;
  }
  public resetHash() {
    this._hash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash;
  }

  // in_spi - computed: false, optional: true, required: false
  private _inSpi?: string; 
  public get inSpi() {
    return this.getStringAttribute('in_spi');
  }
  public set inSpi(value: string) {
    this._inSpi = value;
  }
  public resetInSpi() {
    this._inSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inSpiInput() {
    return this._inSpi;
  }

  // ipsec_sa_name - computed: false, optional: true, required: false
  private _ipsecSaName?: string; 
  public get ipsecSaName() {
    return this.getStringAttribute('ipsec_sa_name');
  }
  public set ipsecSaName(value: string) {
    this._ipsecSaName = value;
  }
  public resetIpsecSaName() {
    this._ipsecSaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSaNameInput() {
    return this._ipsecSaName;
  }

  // lifebytes - computed: false, optional: true, required: false
  private _lifebytes?: string; 
  public get lifebytes() {
    return this.getStringAttribute('lifebytes');
  }
  public set lifebytes(value: string) {
    this._lifebytes = value;
  }
  public resetLifebytes() {
    this._lifebytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifebytesInput() {
    return this._lifebytes;
  }

  // lifetime - computed: false, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }

  // local_ts - computed: false, optional: true, required: false
  private _localTs?: string; 
  public get localTs() {
    return this.getStringAttribute('local_ts');
  }
  public set localTs(value: string) {
    this._localTs = value;
  }
  public resetLocalTs() {
    this._localTs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localTsInput() {
    return this._localTs;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // out_spi - computed: false, optional: true, required: false
  private _outSpi?: string; 
  public get outSpi() {
    return this.getStringAttribute('out_spi');
  }
  public set outSpi(value: string) {
    this._outSpi = value;
  }
  public resetOutSpi() {
    this._outSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outSpiInput() {
    return this._outSpi;
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

  // remote_ts - computed: false, optional: true, required: false
  private _remoteTs?: string; 
  public get remoteTs() {
    return this.getStringAttribute('remote_ts');
  }
  public set remoteTs(value: string) {
    this._remoteTs = value;
  }
  public resetRemoteTs() {
    this._remoteTs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteTsInput() {
    return this._remoteTs;
  }
}

export class DataThunderVpnOperIpsecSaByGwOperIpsecSaListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVpnOperIpsecSaByGwOperIpsecSaListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVpnOperIpsecSaByGwOperIpsecSaListStructOutputReference {
    return new DataThunderVpnOperIpsecSaByGwOperIpsecSaListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVpnOperIpsecSaByGwOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_gateway_name DataThunderVpnOper#ike_gateway_name}
  */
  readonly ikeGatewayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#local_ip DataThunderVpnOper#local_ip}
  */
  readonly localIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#peer_ip DataThunderVpnOper#peer_ip}
  */
  readonly peerIp?: string;
  /**
  * ipsec_sa_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ipsec_sa_list DataThunderVpnOper#ipsec_sa_list}
  */
  readonly ipsecSaList?: DataThunderVpnOperIpsecSaByGwOperIpsecSaListStruct[] | cdktf.IResolvable;
}

export function dataThunderVpnOperIpsecSaByGwOperToTerraform(struct?: DataThunderVpnOperIpsecSaByGwOperOutputReference | DataThunderVpnOperIpsecSaByGwOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ike_gateway_name: cdktf.stringToTerraform(struct!.ikeGatewayName),
    local_ip: cdktf.stringToTerraform(struct!.localIp),
    peer_ip: cdktf.stringToTerraform(struct!.peerIp),
    ipsec_sa_list: cdktf.listMapper(dataThunderVpnOperIpsecSaByGwOperIpsecSaListStructToTerraform, true)(struct!.ipsecSaList),
  }
}


export function dataThunderVpnOperIpsecSaByGwOperToHclTerraform(struct?: DataThunderVpnOperIpsecSaByGwOperOutputReference | DataThunderVpnOperIpsecSaByGwOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ike_gateway_name: {
      value: cdktf.stringToHclTerraform(struct!.ikeGatewayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_ip: {
      value: cdktf.stringToHclTerraform(struct!.localIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_ip: {
      value: cdktf.stringToHclTerraform(struct!.peerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_sa_list: {
      value: cdktf.listMapperHcl(dataThunderVpnOperIpsecSaByGwOperIpsecSaListStructToHclTerraform, true)(struct!.ipsecSaList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnOperIpsecSaByGwOperIpsecSaListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperIpsecSaByGwOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnOperIpsecSaByGwOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ikeGatewayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeGatewayName = this._ikeGatewayName;
    }
    if (this._localIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.localIp = this._localIp;
    }
    if (this._peerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerIp = this._peerIp;
    }
    if (this._ipsecSaList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecSaList = this._ipsecSaList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperIpsecSaByGwOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ikeGatewayName = undefined;
      this._localIp = undefined;
      this._peerIp = undefined;
      this._ipsecSaList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ikeGatewayName = value.ikeGatewayName;
      this._localIp = value.localIp;
      this._peerIp = value.peerIp;
      this._ipsecSaList.internalValue = value.ipsecSaList;
    }
  }

  // ike_gateway_name - computed: false, optional: true, required: false
  private _ikeGatewayName?: string; 
  public get ikeGatewayName() {
    return this.getStringAttribute('ike_gateway_name');
  }
  public set ikeGatewayName(value: string) {
    this._ikeGatewayName = value;
  }
  public resetIkeGatewayName() {
    this._ikeGatewayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeGatewayNameInput() {
    return this._ikeGatewayName;
  }

  // local_ip - computed: false, optional: true, required: false
  private _localIp?: string; 
  public get localIp() {
    return this.getStringAttribute('local_ip');
  }
  public set localIp(value: string) {
    this._localIp = value;
  }
  public resetLocalIp() {
    this._localIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpInput() {
    return this._localIp;
  }

  // peer_ip - computed: false, optional: true, required: false
  private _peerIp?: string; 
  public get peerIp() {
    return this.getStringAttribute('peer_ip');
  }
  public set peerIp(value: string) {
    this._peerIp = value;
  }
  public resetPeerIp() {
    this._peerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpInput() {
    return this._peerIp;
  }

  // ipsec_sa_list - computed: false, optional: true, required: false
  private _ipsecSaList = new DataThunderVpnOperIpsecSaByGwOperIpsecSaListStructList(this, "ipsec_sa_list", false);
  public get ipsecSaList() {
    return this._ipsecSaList;
  }
  public putIpsecSaList(value: DataThunderVpnOperIpsecSaByGwOperIpsecSaListStruct[] | cdktf.IResolvable) {
    this._ipsecSaList.internalValue = value;
  }
  public resetIpsecSaList() {
    this._ipsecSaList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSaListInput() {
    return this._ipsecSaList.internalValue;
  }
}
export interface DataThunderVpnOperIpsecSaByGw {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#oper DataThunderVpnOper#oper}
  */
  readonly oper?: DataThunderVpnOperIpsecSaByGwOper;
}

export function dataThunderVpnOperIpsecSaByGwToTerraform(struct?: DataThunderVpnOperIpsecSaByGwOutputReference | DataThunderVpnOperIpsecSaByGw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderVpnOperIpsecSaByGwOperToTerraform(struct!.oper),
  }
}


export function dataThunderVpnOperIpsecSaByGwToHclTerraform(struct?: DataThunderVpnOperIpsecSaByGwOutputReference | DataThunderVpnOperIpsecSaByGw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderVpnOperIpsecSaByGwOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnOperIpsecSaByGwOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperIpsecSaByGwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnOperIpsecSaByGw | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperIpsecSaByGw | undefined) {
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
  private _oper = new DataThunderVpnOperIpsecSaByGwOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVpnOperIpsecSaByGwOper) {
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
export interface DataThunderVpnOperIpsecSaClientsOperIpsecClientsSaListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#in_spi DataThunderVpnOper#in_spi}
  */
  readonly inSpi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#lifebytes DataThunderVpnOper#lifebytes}
  */
  readonly lifebytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#lifetime DataThunderVpnOper#lifetime}
  */
  readonly lifetime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#local_ts DataThunderVpnOper#local_ts}
  */
  readonly localTs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#name DataThunderVpnOper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#out_spi DataThunderVpnOper#out_spi}
  */
  readonly outSpi?: string;
}

export function dataThunderVpnOperIpsecSaClientsOperIpsecClientsSaListStructToTerraform(struct?: DataThunderVpnOperIpsecSaClientsOperIpsecClientsSaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in_spi: cdktf.stringToTerraform(struct!.inSpi),
    lifebytes: cdktf.stringToTerraform(struct!.lifebytes),
    lifetime: cdktf.stringToTerraform(struct!.lifetime),
    local_ts: cdktf.stringToTerraform(struct!.localTs),
    name: cdktf.stringToTerraform(struct!.name),
    out_spi: cdktf.stringToTerraform(struct!.outSpi),
  }
}


export function dataThunderVpnOperIpsecSaClientsOperIpsecClientsSaListStructToHclTerraform(struct?: DataThunderVpnOperIpsecSaClientsOperIpsecClientsSaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in_spi: {
      value: cdktf.stringToHclTerraform(struct!.inSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifebytes: {
      value: cdktf.stringToHclTerraform(struct!.lifebytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifetime: {
      value: cdktf.stringToHclTerraform(struct!.lifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_ts: {
      value: cdktf.stringToHclTerraform(struct!.localTs),
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
    out_spi: {
      value: cdktf.stringToHclTerraform(struct!.outSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperIpsecSaClientsOperIpsecClientsSaListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVpnOperIpsecSaClientsOperIpsecClientsSaListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.inSpi = this._inSpi;
    }
    if (this._lifebytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifebytes = this._lifebytes;
    }
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    if (this._localTs !== undefined) {
      hasAnyValues = true;
      internalValueResult.localTs = this._localTs;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._outSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.outSpi = this._outSpi;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperIpsecSaClientsOperIpsecClientsSaListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inSpi = undefined;
      this._lifebytes = undefined;
      this._lifetime = undefined;
      this._localTs = undefined;
      this._name = undefined;
      this._outSpi = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inSpi = value.inSpi;
      this._lifebytes = value.lifebytes;
      this._lifetime = value.lifetime;
      this._localTs = value.localTs;
      this._name = value.name;
      this._outSpi = value.outSpi;
    }
  }

  // in_spi - computed: false, optional: true, required: false
  private _inSpi?: string; 
  public get inSpi() {
    return this.getStringAttribute('in_spi');
  }
  public set inSpi(value: string) {
    this._inSpi = value;
  }
  public resetInSpi() {
    this._inSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inSpiInput() {
    return this._inSpi;
  }

  // lifebytes - computed: false, optional: true, required: false
  private _lifebytes?: string; 
  public get lifebytes() {
    return this.getStringAttribute('lifebytes');
  }
  public set lifebytes(value: string) {
    this._lifebytes = value;
  }
  public resetLifebytes() {
    this._lifebytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifebytesInput() {
    return this._lifebytes;
  }

  // lifetime - computed: false, optional: true, required: false
  private _lifetime?: string; 
  public get lifetime() {
    return this.getStringAttribute('lifetime');
  }
  public set lifetime(value: string) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }

  // local_ts - computed: false, optional: true, required: false
  private _localTs?: string; 
  public get localTs() {
    return this.getStringAttribute('local_ts');
  }
  public set localTs(value: string) {
    this._localTs = value;
  }
  public resetLocalTs() {
    this._localTs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localTsInput() {
    return this._localTs;
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

  // out_spi - computed: false, optional: true, required: false
  private _outSpi?: string; 
  public get outSpi() {
    return this.getStringAttribute('out_spi');
  }
  public set outSpi(value: string) {
    this._outSpi = value;
  }
  public resetOutSpi() {
    this._outSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outSpiInput() {
    return this._outSpi;
  }
}

export class DataThunderVpnOperIpsecSaClientsOperIpsecClientsSaListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVpnOperIpsecSaClientsOperIpsecClientsSaListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVpnOperIpsecSaClientsOperIpsecClientsSaListStructOutputReference {
    return new DataThunderVpnOperIpsecSaClientsOperIpsecClientsSaListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVpnOperIpsecSaClientsOperIpsecClients {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ipsec_clients_ip DataThunderVpnOper#ipsec_clients_ip}
  */
  readonly ipsecClientsIp?: string;
  /**
  * sa_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#sa_list DataThunderVpnOper#sa_list}
  */
  readonly saList?: DataThunderVpnOperIpsecSaClientsOperIpsecClientsSaListStruct[] | cdktf.IResolvable;
}

export function dataThunderVpnOperIpsecSaClientsOperIpsecClientsToTerraform(struct?: DataThunderVpnOperIpsecSaClientsOperIpsecClients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipsec_clients_ip: cdktf.stringToTerraform(struct!.ipsecClientsIp),
    sa_list: cdktf.listMapper(dataThunderVpnOperIpsecSaClientsOperIpsecClientsSaListStructToTerraform, true)(struct!.saList),
  }
}


export function dataThunderVpnOperIpsecSaClientsOperIpsecClientsToHclTerraform(struct?: DataThunderVpnOperIpsecSaClientsOperIpsecClients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipsec_clients_ip: {
      value: cdktf.stringToHclTerraform(struct!.ipsecClientsIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sa_list: {
      value: cdktf.listMapperHcl(dataThunderVpnOperIpsecSaClientsOperIpsecClientsSaListStructToHclTerraform, true)(struct!.saList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnOperIpsecSaClientsOperIpsecClientsSaListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperIpsecSaClientsOperIpsecClientsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVpnOperIpsecSaClientsOperIpsecClients | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipsecClientsIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecClientsIp = this._ipsecClientsIp;
    }
    if (this._saList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.saList = this._saList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperIpsecSaClientsOperIpsecClients | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipsecClientsIp = undefined;
      this._saList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipsecClientsIp = value.ipsecClientsIp;
      this._saList.internalValue = value.saList;
    }
  }

  // ipsec_clients_ip - computed: false, optional: true, required: false
  private _ipsecClientsIp?: string; 
  public get ipsecClientsIp() {
    return this.getStringAttribute('ipsec_clients_ip');
  }
  public set ipsecClientsIp(value: string) {
    this._ipsecClientsIp = value;
  }
  public resetIpsecClientsIp() {
    this._ipsecClientsIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecClientsIpInput() {
    return this._ipsecClientsIp;
  }

  // sa_list - computed: false, optional: true, required: false
  private _saList = new DataThunderVpnOperIpsecSaClientsOperIpsecClientsSaListStructList(this, "sa_list", false);
  public get saList() {
    return this._saList;
  }
  public putSaList(value: DataThunderVpnOperIpsecSaClientsOperIpsecClientsSaListStruct[] | cdktf.IResolvable) {
    this._saList.internalValue = value;
  }
  public resetSaList() {
    this._saList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saListInput() {
    return this._saList.internalValue;
  }
}

export class DataThunderVpnOperIpsecSaClientsOperIpsecClientsList extends cdktf.ComplexList {
  public internalValue? : DataThunderVpnOperIpsecSaClientsOperIpsecClients[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVpnOperIpsecSaClientsOperIpsecClientsOutputReference {
    return new DataThunderVpnOperIpsecSaClientsOperIpsecClientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVpnOperIpsecSaClientsOper {
  /**
  * ipsec_clients block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ipsec_clients DataThunderVpnOper#ipsec_clients}
  */
  readonly ipsecClients?: DataThunderVpnOperIpsecSaClientsOperIpsecClients[] | cdktf.IResolvable;
}

export function dataThunderVpnOperIpsecSaClientsOperToTerraform(struct?: DataThunderVpnOperIpsecSaClientsOperOutputReference | DataThunderVpnOperIpsecSaClientsOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipsec_clients: cdktf.listMapper(dataThunderVpnOperIpsecSaClientsOperIpsecClientsToTerraform, true)(struct!.ipsecClients),
  }
}


export function dataThunderVpnOperIpsecSaClientsOperToHclTerraform(struct?: DataThunderVpnOperIpsecSaClientsOperOutputReference | DataThunderVpnOperIpsecSaClientsOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipsec_clients: {
      value: cdktf.listMapperHcl(dataThunderVpnOperIpsecSaClientsOperIpsecClientsToHclTerraform, true)(struct!.ipsecClients),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnOperIpsecSaClientsOperIpsecClientsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperIpsecSaClientsOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnOperIpsecSaClientsOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipsecClients?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecClients = this._ipsecClients?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperIpsecSaClientsOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipsecClients.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipsecClients.internalValue = value.ipsecClients;
    }
  }

  // ipsec_clients - computed: false, optional: true, required: false
  private _ipsecClients = new DataThunderVpnOperIpsecSaClientsOperIpsecClientsList(this, "ipsec_clients", false);
  public get ipsecClients() {
    return this._ipsecClients;
  }
  public putIpsecClients(value: DataThunderVpnOperIpsecSaClientsOperIpsecClients[] | cdktf.IResolvable) {
    this._ipsecClients.internalValue = value;
  }
  public resetIpsecClients() {
    this._ipsecClients.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecClientsInput() {
    return this._ipsecClients.internalValue;
  }
}
export interface DataThunderVpnOperIpsecSaClients {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#oper DataThunderVpnOper#oper}
  */
  readonly oper?: DataThunderVpnOperIpsecSaClientsOper;
}

export function dataThunderVpnOperIpsecSaClientsToTerraform(struct?: DataThunderVpnOperIpsecSaClientsOutputReference | DataThunderVpnOperIpsecSaClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderVpnOperIpsecSaClientsOperToTerraform(struct!.oper),
  }
}


export function dataThunderVpnOperIpsecSaClientsToHclTerraform(struct?: DataThunderVpnOperIpsecSaClientsOutputReference | DataThunderVpnOperIpsecSaClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderVpnOperIpsecSaClientsOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnOperIpsecSaClientsOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperIpsecSaClientsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnOperIpsecSaClients | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperIpsecSaClients | undefined) {
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
  private _oper = new DataThunderVpnOperIpsecSaClientsOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVpnOperIpsecSaClientsOper) {
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
export interface DataThunderVpnOperLogOperVpnLogListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#vpn_log_data DataThunderVpnOper#vpn_log_data}
  */
  readonly vpnLogData?: string;
}

export function dataThunderVpnOperLogOperVpnLogListStructToTerraform(struct?: DataThunderVpnOperLogOperVpnLogListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vpn_log_data: cdktf.stringToTerraform(struct!.vpnLogData),
  }
}


export function dataThunderVpnOperLogOperVpnLogListStructToHclTerraform(struct?: DataThunderVpnOperLogOperVpnLogListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vpn_log_data: {
      value: cdktf.stringToHclTerraform(struct!.vpnLogData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperLogOperVpnLogListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVpnOperLogOperVpnLogListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpnLogData !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnLogData = this._vpnLogData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperLogOperVpnLogListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vpnLogData = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vpnLogData = value.vpnLogData;
    }
  }

  // vpn_log_data - computed: false, optional: true, required: false
  private _vpnLogData?: string; 
  public get vpnLogData() {
    return this.getStringAttribute('vpn_log_data');
  }
  public set vpnLogData(value: string) {
    this._vpnLogData = value;
  }
  public resetVpnLogData() {
    this._vpnLogData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnLogDataInput() {
    return this._vpnLogData;
  }
}

export class DataThunderVpnOperLogOperVpnLogListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVpnOperLogOperVpnLogListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVpnOperLogOperVpnLogListStructOutputReference {
    return new DataThunderVpnOperLogOperVpnLogListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVpnOperLogOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#follow DataThunderVpnOper#follow}
  */
  readonly follow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#from_start DataThunderVpnOper#from_start}
  */
  readonly fromStart?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#num_lines DataThunderVpnOper#num_lines}
  */
  readonly numLines?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#vpn_log_offset DataThunderVpnOper#vpn_log_offset}
  */
  readonly vpnLogOffset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#vpn_log_over DataThunderVpnOper#vpn_log_over}
  */
  readonly vpnLogOver?: number;
  /**
  * vpn_log_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#vpn_log_list DataThunderVpnOper#vpn_log_list}
  */
  readonly vpnLogList?: DataThunderVpnOperLogOperVpnLogListStruct[] | cdktf.IResolvable;
}

export function dataThunderVpnOperLogOperToTerraform(struct?: DataThunderVpnOperLogOperOutputReference | DataThunderVpnOperLogOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    follow: cdktf.numberToTerraform(struct!.follow),
    from_start: cdktf.numberToTerraform(struct!.fromStart),
    num_lines: cdktf.numberToTerraform(struct!.numLines),
    vpn_log_offset: cdktf.numberToTerraform(struct!.vpnLogOffset),
    vpn_log_over: cdktf.numberToTerraform(struct!.vpnLogOver),
    vpn_log_list: cdktf.listMapper(dataThunderVpnOperLogOperVpnLogListStructToTerraform, true)(struct!.vpnLogList),
  }
}


export function dataThunderVpnOperLogOperToHclTerraform(struct?: DataThunderVpnOperLogOperOutputReference | DataThunderVpnOperLogOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    follow: {
      value: cdktf.numberToHclTerraform(struct!.follow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    from_start: {
      value: cdktf.numberToHclTerraform(struct!.fromStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_lines: {
      value: cdktf.numberToHclTerraform(struct!.numLines),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpn_log_offset: {
      value: cdktf.numberToHclTerraform(struct!.vpnLogOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpn_log_over: {
      value: cdktf.numberToHclTerraform(struct!.vpnLogOver),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpn_log_list: {
      value: cdktf.listMapperHcl(dataThunderVpnOperLogOperVpnLogListStructToHclTerraform, true)(struct!.vpnLogList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnOperLogOperVpnLogListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperLogOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnOperLogOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._follow !== undefined) {
      hasAnyValues = true;
      internalValueResult.follow = this._follow;
    }
    if (this._fromStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromStart = this._fromStart;
    }
    if (this._numLines !== undefined) {
      hasAnyValues = true;
      internalValueResult.numLines = this._numLines;
    }
    if (this._vpnLogOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnLogOffset = this._vpnLogOffset;
    }
    if (this._vpnLogOver !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnLogOver = this._vpnLogOver;
    }
    if (this._vpnLogList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnLogList = this._vpnLogList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperLogOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._follow = undefined;
      this._fromStart = undefined;
      this._numLines = undefined;
      this._vpnLogOffset = undefined;
      this._vpnLogOver = undefined;
      this._vpnLogList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._follow = value.follow;
      this._fromStart = value.fromStart;
      this._numLines = value.numLines;
      this._vpnLogOffset = value.vpnLogOffset;
      this._vpnLogOver = value.vpnLogOver;
      this._vpnLogList.internalValue = value.vpnLogList;
    }
  }

  // follow - computed: false, optional: true, required: false
  private _follow?: number; 
  public get follow() {
    return this.getNumberAttribute('follow');
  }
  public set follow(value: number) {
    this._follow = value;
  }
  public resetFollow() {
    this._follow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followInput() {
    return this._follow;
  }

  // from_start - computed: false, optional: true, required: false
  private _fromStart?: number; 
  public get fromStart() {
    return this.getNumberAttribute('from_start');
  }
  public set fromStart(value: number) {
    this._fromStart = value;
  }
  public resetFromStart() {
    this._fromStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromStartInput() {
    return this._fromStart;
  }

  // num_lines - computed: false, optional: true, required: false
  private _numLines?: number; 
  public get numLines() {
    return this.getNumberAttribute('num_lines');
  }
  public set numLines(value: number) {
    this._numLines = value;
  }
  public resetNumLines() {
    this._numLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numLinesInput() {
    return this._numLines;
  }

  // vpn_log_offset - computed: false, optional: true, required: false
  private _vpnLogOffset?: number; 
  public get vpnLogOffset() {
    return this.getNumberAttribute('vpn_log_offset');
  }
  public set vpnLogOffset(value: number) {
    this._vpnLogOffset = value;
  }
  public resetVpnLogOffset() {
    this._vpnLogOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnLogOffsetInput() {
    return this._vpnLogOffset;
  }

  // vpn_log_over - computed: false, optional: true, required: false
  private _vpnLogOver?: number; 
  public get vpnLogOver() {
    return this.getNumberAttribute('vpn_log_over');
  }
  public set vpnLogOver(value: number) {
    this._vpnLogOver = value;
  }
  public resetVpnLogOver() {
    this._vpnLogOver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnLogOverInput() {
    return this._vpnLogOver;
  }

  // vpn_log_list - computed: false, optional: true, required: false
  private _vpnLogList = new DataThunderVpnOperLogOperVpnLogListStructList(this, "vpn_log_list", false);
  public get vpnLogList() {
    return this._vpnLogList;
  }
  public putVpnLogList(value: DataThunderVpnOperLogOperVpnLogListStruct[] | cdktf.IResolvable) {
    this._vpnLogList.internalValue = value;
  }
  public resetVpnLogList() {
    this._vpnLogList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnLogListInput() {
    return this._vpnLogList.internalValue;
  }
}
export interface DataThunderVpnOperLog {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#oper DataThunderVpnOper#oper}
  */
  readonly oper?: DataThunderVpnOperLogOper;
}

export function dataThunderVpnOperLogToTerraform(struct?: DataThunderVpnOperLogOutputReference | DataThunderVpnOperLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderVpnOperLogOperToTerraform(struct!.oper),
  }
}


export function dataThunderVpnOperLogToHclTerraform(struct?: DataThunderVpnOperLogOutputReference | DataThunderVpnOperLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderVpnOperLogOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnOperLogOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnOperLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperLog | undefined) {
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
  private _oper = new DataThunderVpnOperLogOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVpnOperLogOper) {
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
export interface DataThunderVpnOperOcspOperOcspListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#certificate_status DataThunderVpnOper#certificate_status}
  */
  readonly certificateStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#issuer DataThunderVpnOper#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#subject DataThunderVpnOper#subject}
  */
  readonly subject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#validity DataThunderVpnOper#validity}
  */
  readonly validity?: string;
}

export function dataThunderVpnOperOcspOperOcspListStructToTerraform(struct?: DataThunderVpnOperOcspOperOcspListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_status: cdktf.stringToTerraform(struct!.certificateStatus),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    subject: cdktf.stringToTerraform(struct!.subject),
    validity: cdktf.stringToTerraform(struct!.validity),
  }
}


export function dataThunderVpnOperOcspOperOcspListStructToHclTerraform(struct?: DataThunderVpnOperOcspOperOcspListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_status: {
      value: cdktf.stringToHclTerraform(struct!.certificateStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validity: {
      value: cdktf.stringToHclTerraform(struct!.validity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperOcspOperOcspListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVpnOperOcspOperOcspListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateStatus = this._certificateStatus;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._validity !== undefined) {
      hasAnyValues = true;
      internalValueResult.validity = this._validity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperOcspOperOcspListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateStatus = undefined;
      this._issuer = undefined;
      this._subject = undefined;
      this._validity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateStatus = value.certificateStatus;
      this._issuer = value.issuer;
      this._subject = value.subject;
      this._validity = value.validity;
    }
  }

  // certificate_status - computed: false, optional: true, required: false
  private _certificateStatus?: string; 
  public get certificateStatus() {
    return this.getStringAttribute('certificate_status');
  }
  public set certificateStatus(value: string) {
    this._certificateStatus = value;
  }
  public resetCertificateStatus() {
    this._certificateStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateStatusInput() {
    return this._certificateStatus;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // validity - computed: false, optional: true, required: false
  private _validity?: string; 
  public get validity() {
    return this.getStringAttribute('validity');
  }
  public set validity(value: string) {
    this._validity = value;
  }
  public resetValidity() {
    this._validity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validityInput() {
    return this._validity;
  }
}

export class DataThunderVpnOperOcspOperOcspListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVpnOperOcspOperOcspListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVpnOperOcspOperOcspListStructOutputReference {
    return new DataThunderVpnOperOcspOperOcspListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVpnOperOcspOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#total_ocsps DataThunderVpnOper#total_ocsps}
  */
  readonly totalOcsps?: number;
  /**
  * ocsp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ocsp_list DataThunderVpnOper#ocsp_list}
  */
  readonly ocspList?: DataThunderVpnOperOcspOperOcspListStruct[] | cdktf.IResolvable;
}

export function dataThunderVpnOperOcspOperToTerraform(struct?: DataThunderVpnOperOcspOperOutputReference | DataThunderVpnOperOcspOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    total_ocsps: cdktf.numberToTerraform(struct!.totalOcsps),
    ocsp_list: cdktf.listMapper(dataThunderVpnOperOcspOperOcspListStructToTerraform, true)(struct!.ocspList),
  }
}


export function dataThunderVpnOperOcspOperToHclTerraform(struct?: DataThunderVpnOperOcspOperOutputReference | DataThunderVpnOperOcspOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    total_ocsps: {
      value: cdktf.numberToHclTerraform(struct!.totalOcsps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocsp_list: {
      value: cdktf.listMapperHcl(dataThunderVpnOperOcspOperOcspListStructToHclTerraform, true)(struct!.ocspList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnOperOcspOperOcspListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperOcspOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnOperOcspOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._totalOcsps !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalOcsps = this._totalOcsps;
    }
    if (this._ocspList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspList = this._ocspList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperOcspOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._totalOcsps = undefined;
      this._ocspList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._totalOcsps = value.totalOcsps;
      this._ocspList.internalValue = value.ocspList;
    }
  }

  // total_ocsps - computed: false, optional: true, required: false
  private _totalOcsps?: number; 
  public get totalOcsps() {
    return this.getNumberAttribute('total_ocsps');
  }
  public set totalOcsps(value: number) {
    this._totalOcsps = value;
  }
  public resetTotalOcsps() {
    this._totalOcsps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalOcspsInput() {
    return this._totalOcsps;
  }

  // ocsp_list - computed: false, optional: true, required: false
  private _ocspList = new DataThunderVpnOperOcspOperOcspListStructList(this, "ocsp_list", false);
  public get ocspList() {
    return this._ocspList;
  }
  public putOcspList(value: DataThunderVpnOperOcspOperOcspListStruct[] | cdktf.IResolvable) {
    this._ocspList.internalValue = value;
  }
  public resetOcspList() {
    this._ocspList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspListInput() {
    return this._ocspList.internalValue;
  }
}
export interface DataThunderVpnOperOcsp {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#oper DataThunderVpnOper#oper}
  */
  readonly oper?: DataThunderVpnOperOcspOper;
}

export function dataThunderVpnOperOcspToTerraform(struct?: DataThunderVpnOperOcspOutputReference | DataThunderVpnOperOcsp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderVpnOperOcspOperToTerraform(struct!.oper),
  }
}


export function dataThunderVpnOperOcspToHclTerraform(struct?: DataThunderVpnOperOcspOutputReference | DataThunderVpnOperOcsp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderVpnOperOcspOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnOperOcspOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperOcspOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnOperOcsp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperOcsp | undefined) {
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
  private _oper = new DataThunderVpnOperOcspOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVpnOperOcspOper) {
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
export interface DataThunderVpnOperOperAllPartitionListVpnListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#cpu_id DataThunderVpnOper#cpu_id}
  */
  readonly cpuId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#passthrough DataThunderVpnOper#passthrough}
  */
  readonly passthrough?: number;
}

export function dataThunderVpnOperOperAllPartitionListVpnListStructToTerraform(struct?: DataThunderVpnOperOperAllPartitionListVpnListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_id: cdktf.numberToTerraform(struct!.cpuId),
    passthrough: cdktf.numberToTerraform(struct!.passthrough),
  }
}


export function dataThunderVpnOperOperAllPartitionListVpnListStructToHclTerraform(struct?: DataThunderVpnOperOperAllPartitionListVpnListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_id: {
      value: cdktf.numberToHclTerraform(struct!.cpuId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    passthrough: {
      value: cdktf.numberToHclTerraform(struct!.passthrough),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperOperAllPartitionListVpnListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVpnOperOperAllPartitionListVpnListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuId = this._cpuId;
    }
    if (this._passthrough !== undefined) {
      hasAnyValues = true;
      internalValueResult.passthrough = this._passthrough;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperOperAllPartitionListVpnListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuId = undefined;
      this._passthrough = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuId = value.cpuId;
      this._passthrough = value.passthrough;
    }
  }

  // cpu_id - computed: false, optional: true, required: false
  private _cpuId?: number; 
  public get cpuId() {
    return this.getNumberAttribute('cpu_id');
  }
  public set cpuId(value: number) {
    this._cpuId = value;
  }
  public resetCpuId() {
    this._cpuId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuIdInput() {
    return this._cpuId;
  }

  // passthrough - computed: false, optional: true, required: false
  private _passthrough?: number; 
  public get passthrough() {
    return this.getNumberAttribute('passthrough');
  }
  public set passthrough(value: number) {
    this._passthrough = value;
  }
  public resetPassthrough() {
    this._passthrough = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passthroughInput() {
    return this._passthrough;
  }
}

export class DataThunderVpnOperOperAllPartitionListVpnListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVpnOperOperAllPartitionListVpnListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVpnOperOperAllPartitionListVpnListStructOutputReference {
    return new DataThunderVpnOperOperAllPartitionListVpnListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVpnOperOperAllPartitionListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#crypto_cores_assigned_to_ipsec DataThunderVpnOper#crypto_cores_assigned_to_ipsec}
  */
  readonly cryptoCoresAssignedToIpsec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#crypto_cores_total DataThunderVpnOper#crypto_cores_total}
  */
  readonly cryptoCoresTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#crypto_hw_err DataThunderVpnOper#crypto_hw_err}
  */
  readonly cryptoHwErr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#crypto_hw_err_bad_ctx_pointer DataThunderVpnOper#crypto_hw_err_bad_ctx_pointer}
  */
  readonly cryptoHwErrBadCtxPointer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#crypto_hw_err_bad_pointer DataThunderVpnOper#crypto_hw_err_bad_pointer}
  */
  readonly cryptoHwErrBadPointer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#crypto_hw_err_buff_alloc_error DataThunderVpnOper#crypto_hw_err_buff_alloc_error}
  */
  readonly cryptoHwErrBuffAllocError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#crypto_hw_err_enqueue_fail DataThunderVpnOper#crypto_hw_err_enqueue_fail}
  */
  readonly cryptoHwErrEnqueueFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#crypto_hw_err_req_alloc_fail DataThunderVpnOper#crypto_hw_err_req_alloc_fail}
  */
  readonly cryptoHwErrReqAllocFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#crypto_hw_err_req_error DataThunderVpnOper#crypto_hw_err_req_error}
  */
  readonly cryptoHwErrReqError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#crypto_hw_err_sg_buff_alloc_fail DataThunderVpnOper#crypto_hw_err_sg_buff_alloc_fail}
  */
  readonly cryptoHwErrSgBuffAllocFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#crypto_hw_err_state DataThunderVpnOper#crypto_hw_err_state}
  */
  readonly cryptoHwErrState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#crypto_hw_err_state_error DataThunderVpnOper#crypto_hw_err_state_error}
  */
  readonly cryptoHwErrStateError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#crypto_hw_err_time_out DataThunderVpnOper#crypto_hw_err_time_out}
  */
  readonly cryptoHwErrTimeOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#crypto_hw_err_time_out_state DataThunderVpnOper#crypto_hw_err_time_out_state}
  */
  readonly cryptoHwErrTimeOutState?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#crypto_mem DataThunderVpnOper#crypto_mem}
  */
  readonly cryptoMem?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_gateway_total DataThunderVpnOper#ike_gateway_total}
  */
  readonly ikeGatewayTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_hardware_accelerate DataThunderVpnOper#ike_hardware_accelerate}
  */
  readonly ikeHardwareAccelerate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_sa_total DataThunderVpnOper#ike_sa_total}
  */
  readonly ikeSaTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ipsec_hardware_type DataThunderVpnOper#ipsec_hardware_type}
  */
  readonly ipsecHardwareType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ipsec_mode DataThunderVpnOper#ipsec_mode}
  */
  readonly ipsecMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ipsec_sa_total DataThunderVpnOper#ipsec_sa_total}
  */
  readonly ipsecSaTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ipsec_stateless DataThunderVpnOper#ipsec_stateless}
  */
  readonly ipsecStateless?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ipsec_total DataThunderVpnOper#ipsec_total}
  */
  readonly ipsecTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#num_hardware_devices DataThunderVpnOper#num_hardware_devices}
  */
  readonly numHardwareDevices?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#partition_name DataThunderVpnOper#partition_name}
  */
  readonly partitionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#passthrough_total DataThunderVpnOper#passthrough_total}
  */
  readonly passthroughTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#signed_auth_flag DataThunderVpnOper#signed_auth_flag}
  */
  readonly signedAuthFlag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#standby_drop DataThunderVpnOper#standby_drop}
  */
  readonly standbyDrop?: number;
  /**
  * vpn_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#vpn_list DataThunderVpnOper#vpn_list}
  */
  readonly vpnList?: DataThunderVpnOperOperAllPartitionListVpnListStruct[] | cdktf.IResolvable;
}

export function dataThunderVpnOperOperAllPartitionListStructToTerraform(struct?: DataThunderVpnOperOperAllPartitionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crypto_cores_assigned_to_ipsec: cdktf.numberToTerraform(struct!.cryptoCoresAssignedToIpsec),
    crypto_cores_total: cdktf.numberToTerraform(struct!.cryptoCoresTotal),
    crypto_hw_err: cdktf.numberToTerraform(struct!.cryptoHwErr),
    crypto_hw_err_bad_ctx_pointer: cdktf.numberToTerraform(struct!.cryptoHwErrBadCtxPointer),
    crypto_hw_err_bad_pointer: cdktf.numberToTerraform(struct!.cryptoHwErrBadPointer),
    crypto_hw_err_buff_alloc_error: cdktf.numberToTerraform(struct!.cryptoHwErrBuffAllocError),
    crypto_hw_err_enqueue_fail: cdktf.numberToTerraform(struct!.cryptoHwErrEnqueueFail),
    crypto_hw_err_req_alloc_fail: cdktf.numberToTerraform(struct!.cryptoHwErrReqAllocFail),
    crypto_hw_err_req_error: cdktf.numberToTerraform(struct!.cryptoHwErrReqError),
    crypto_hw_err_sg_buff_alloc_fail: cdktf.numberToTerraform(struct!.cryptoHwErrSgBuffAllocFail),
    crypto_hw_err_state: cdktf.stringToTerraform(struct!.cryptoHwErrState),
    crypto_hw_err_state_error: cdktf.numberToTerraform(struct!.cryptoHwErrStateError),
    crypto_hw_err_time_out: cdktf.numberToTerraform(struct!.cryptoHwErrTimeOut),
    crypto_hw_err_time_out_state: cdktf.numberToTerraform(struct!.cryptoHwErrTimeOutState),
    crypto_mem: cdktf.numberToTerraform(struct!.cryptoMem),
    ike_gateway_total: cdktf.numberToTerraform(struct!.ikeGatewayTotal),
    ike_hardware_accelerate: cdktf.stringToTerraform(struct!.ikeHardwareAccelerate),
    ike_sa_total: cdktf.numberToTerraform(struct!.ikeSaTotal),
    ipsec_hardware_type: cdktf.stringToTerraform(struct!.ipsecHardwareType),
    ipsec_mode: cdktf.stringToTerraform(struct!.ipsecMode),
    ipsec_sa_total: cdktf.numberToTerraform(struct!.ipsecSaTotal),
    ipsec_stateless: cdktf.numberToTerraform(struct!.ipsecStateless),
    ipsec_total: cdktf.numberToTerraform(struct!.ipsecTotal),
    num_hardware_devices: cdktf.numberToTerraform(struct!.numHardwareDevices),
    partition_name: cdktf.stringToTerraform(struct!.partitionName),
    passthrough_total: cdktf.numberToTerraform(struct!.passthroughTotal),
    signed_auth_flag: cdktf.numberToTerraform(struct!.signedAuthFlag),
    standby_drop: cdktf.numberToTerraform(struct!.standbyDrop),
    vpn_list: cdktf.listMapper(dataThunderVpnOperOperAllPartitionListVpnListStructToTerraform, true)(struct!.vpnList),
  }
}


export function dataThunderVpnOperOperAllPartitionListStructToHclTerraform(struct?: DataThunderVpnOperOperAllPartitionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crypto_cores_assigned_to_ipsec: {
      value: cdktf.numberToHclTerraform(struct!.cryptoCoresAssignedToIpsec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crypto_cores_total: {
      value: cdktf.numberToHclTerraform(struct!.cryptoCoresTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crypto_hw_err: {
      value: cdktf.numberToHclTerraform(struct!.cryptoHwErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crypto_hw_err_bad_ctx_pointer: {
      value: cdktf.numberToHclTerraform(struct!.cryptoHwErrBadCtxPointer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crypto_hw_err_bad_pointer: {
      value: cdktf.numberToHclTerraform(struct!.cryptoHwErrBadPointer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crypto_hw_err_buff_alloc_error: {
      value: cdktf.numberToHclTerraform(struct!.cryptoHwErrBuffAllocError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crypto_hw_err_enqueue_fail: {
      value: cdktf.numberToHclTerraform(struct!.cryptoHwErrEnqueueFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crypto_hw_err_req_alloc_fail: {
      value: cdktf.numberToHclTerraform(struct!.cryptoHwErrReqAllocFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crypto_hw_err_req_error: {
      value: cdktf.numberToHclTerraform(struct!.cryptoHwErrReqError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crypto_hw_err_sg_buff_alloc_fail: {
      value: cdktf.numberToHclTerraform(struct!.cryptoHwErrSgBuffAllocFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crypto_hw_err_state: {
      value: cdktf.stringToHclTerraform(struct!.cryptoHwErrState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crypto_hw_err_state_error: {
      value: cdktf.numberToHclTerraform(struct!.cryptoHwErrStateError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crypto_hw_err_time_out: {
      value: cdktf.numberToHclTerraform(struct!.cryptoHwErrTimeOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crypto_hw_err_time_out_state: {
      value: cdktf.numberToHclTerraform(struct!.cryptoHwErrTimeOutState),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crypto_mem: {
      value: cdktf.numberToHclTerraform(struct!.cryptoMem),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ike_gateway_total: {
      value: cdktf.numberToHclTerraform(struct!.ikeGatewayTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ike_hardware_accelerate: {
      value: cdktf.stringToHclTerraform(struct!.ikeHardwareAccelerate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_sa_total: {
      value: cdktf.numberToHclTerraform(struct!.ikeSaTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_hardware_type: {
      value: cdktf.stringToHclTerraform(struct!.ipsecHardwareType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_mode: {
      value: cdktf.stringToHclTerraform(struct!.ipsecMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_sa_total: {
      value: cdktf.numberToHclTerraform(struct!.ipsecSaTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_stateless: {
      value: cdktf.numberToHclTerraform(struct!.ipsecStateless),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_total: {
      value: cdktf.numberToHclTerraform(struct!.ipsecTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_hardware_devices: {
      value: cdktf.numberToHclTerraform(struct!.numHardwareDevices),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    partition_name: {
      value: cdktf.stringToHclTerraform(struct!.partitionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passthrough_total: {
      value: cdktf.numberToHclTerraform(struct!.passthroughTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    signed_auth_flag: {
      value: cdktf.numberToHclTerraform(struct!.signedAuthFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    standby_drop: {
      value: cdktf.numberToHclTerraform(struct!.standbyDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpn_list: {
      value: cdktf.listMapperHcl(dataThunderVpnOperOperAllPartitionListVpnListStructToHclTerraform, true)(struct!.vpnList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnOperOperAllPartitionListVpnListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperOperAllPartitionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVpnOperOperAllPartitionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cryptoCoresAssignedToIpsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoCoresAssignedToIpsec = this._cryptoCoresAssignedToIpsec;
    }
    if (this._cryptoCoresTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoCoresTotal = this._cryptoCoresTotal;
    }
    if (this._cryptoHwErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoHwErr = this._cryptoHwErr;
    }
    if (this._cryptoHwErrBadCtxPointer !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoHwErrBadCtxPointer = this._cryptoHwErrBadCtxPointer;
    }
    if (this._cryptoHwErrBadPointer !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoHwErrBadPointer = this._cryptoHwErrBadPointer;
    }
    if (this._cryptoHwErrBuffAllocError !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoHwErrBuffAllocError = this._cryptoHwErrBuffAllocError;
    }
    if (this._cryptoHwErrEnqueueFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoHwErrEnqueueFail = this._cryptoHwErrEnqueueFail;
    }
    if (this._cryptoHwErrReqAllocFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoHwErrReqAllocFail = this._cryptoHwErrReqAllocFail;
    }
    if (this._cryptoHwErrReqError !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoHwErrReqError = this._cryptoHwErrReqError;
    }
    if (this._cryptoHwErrSgBuffAllocFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoHwErrSgBuffAllocFail = this._cryptoHwErrSgBuffAllocFail;
    }
    if (this._cryptoHwErrState !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoHwErrState = this._cryptoHwErrState;
    }
    if (this._cryptoHwErrStateError !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoHwErrStateError = this._cryptoHwErrStateError;
    }
    if (this._cryptoHwErrTimeOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoHwErrTimeOut = this._cryptoHwErrTimeOut;
    }
    if (this._cryptoHwErrTimeOutState !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoHwErrTimeOutState = this._cryptoHwErrTimeOutState;
    }
    if (this._cryptoMem !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoMem = this._cryptoMem;
    }
    if (this._ikeGatewayTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeGatewayTotal = this._ikeGatewayTotal;
    }
    if (this._ikeHardwareAccelerate !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeHardwareAccelerate = this._ikeHardwareAccelerate;
    }
    if (this._ikeSaTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeSaTotal = this._ikeSaTotal;
    }
    if (this._ipsecHardwareType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecHardwareType = this._ipsecHardwareType;
    }
    if (this._ipsecMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecMode = this._ipsecMode;
    }
    if (this._ipsecSaTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecSaTotal = this._ipsecSaTotal;
    }
    if (this._ipsecStateless !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecStateless = this._ipsecStateless;
    }
    if (this._ipsecTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecTotal = this._ipsecTotal;
    }
    if (this._numHardwareDevices !== undefined) {
      hasAnyValues = true;
      internalValueResult.numHardwareDevices = this._numHardwareDevices;
    }
    if (this._partitionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionName = this._partitionName;
    }
    if (this._passthroughTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.passthroughTotal = this._passthroughTotal;
    }
    if (this._signedAuthFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.signedAuthFlag = this._signedAuthFlag;
    }
    if (this._standbyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.standbyDrop = this._standbyDrop;
    }
    if (this._vpnList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnList = this._vpnList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperOperAllPartitionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cryptoCoresAssignedToIpsec = undefined;
      this._cryptoCoresTotal = undefined;
      this._cryptoHwErr = undefined;
      this._cryptoHwErrBadCtxPointer = undefined;
      this._cryptoHwErrBadPointer = undefined;
      this._cryptoHwErrBuffAllocError = undefined;
      this._cryptoHwErrEnqueueFail = undefined;
      this._cryptoHwErrReqAllocFail = undefined;
      this._cryptoHwErrReqError = undefined;
      this._cryptoHwErrSgBuffAllocFail = undefined;
      this._cryptoHwErrState = undefined;
      this._cryptoHwErrStateError = undefined;
      this._cryptoHwErrTimeOut = undefined;
      this._cryptoHwErrTimeOutState = undefined;
      this._cryptoMem = undefined;
      this._ikeGatewayTotal = undefined;
      this._ikeHardwareAccelerate = undefined;
      this._ikeSaTotal = undefined;
      this._ipsecHardwareType = undefined;
      this._ipsecMode = undefined;
      this._ipsecSaTotal = undefined;
      this._ipsecStateless = undefined;
      this._ipsecTotal = undefined;
      this._numHardwareDevices = undefined;
      this._partitionName = undefined;
      this._passthroughTotal = undefined;
      this._signedAuthFlag = undefined;
      this._standbyDrop = undefined;
      this._vpnList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cryptoCoresAssignedToIpsec = value.cryptoCoresAssignedToIpsec;
      this._cryptoCoresTotal = value.cryptoCoresTotal;
      this._cryptoHwErr = value.cryptoHwErr;
      this._cryptoHwErrBadCtxPointer = value.cryptoHwErrBadCtxPointer;
      this._cryptoHwErrBadPointer = value.cryptoHwErrBadPointer;
      this._cryptoHwErrBuffAllocError = value.cryptoHwErrBuffAllocError;
      this._cryptoHwErrEnqueueFail = value.cryptoHwErrEnqueueFail;
      this._cryptoHwErrReqAllocFail = value.cryptoHwErrReqAllocFail;
      this._cryptoHwErrReqError = value.cryptoHwErrReqError;
      this._cryptoHwErrSgBuffAllocFail = value.cryptoHwErrSgBuffAllocFail;
      this._cryptoHwErrState = value.cryptoHwErrState;
      this._cryptoHwErrStateError = value.cryptoHwErrStateError;
      this._cryptoHwErrTimeOut = value.cryptoHwErrTimeOut;
      this._cryptoHwErrTimeOutState = value.cryptoHwErrTimeOutState;
      this._cryptoMem = value.cryptoMem;
      this._ikeGatewayTotal = value.ikeGatewayTotal;
      this._ikeHardwareAccelerate = value.ikeHardwareAccelerate;
      this._ikeSaTotal = value.ikeSaTotal;
      this._ipsecHardwareType = value.ipsecHardwareType;
      this._ipsecMode = value.ipsecMode;
      this._ipsecSaTotal = value.ipsecSaTotal;
      this._ipsecStateless = value.ipsecStateless;
      this._ipsecTotal = value.ipsecTotal;
      this._numHardwareDevices = value.numHardwareDevices;
      this._partitionName = value.partitionName;
      this._passthroughTotal = value.passthroughTotal;
      this._signedAuthFlag = value.signedAuthFlag;
      this._standbyDrop = value.standbyDrop;
      this._vpnList.internalValue = value.vpnList;
    }
  }

  // crypto_cores_assigned_to_ipsec - computed: false, optional: true, required: false
  private _cryptoCoresAssignedToIpsec?: number; 
  public get cryptoCoresAssignedToIpsec() {
    return this.getNumberAttribute('crypto_cores_assigned_to_ipsec');
  }
  public set cryptoCoresAssignedToIpsec(value: number) {
    this._cryptoCoresAssignedToIpsec = value;
  }
  public resetCryptoCoresAssignedToIpsec() {
    this._cryptoCoresAssignedToIpsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoCoresAssignedToIpsecInput() {
    return this._cryptoCoresAssignedToIpsec;
  }

  // crypto_cores_total - computed: false, optional: true, required: false
  private _cryptoCoresTotal?: number; 
  public get cryptoCoresTotal() {
    return this.getNumberAttribute('crypto_cores_total');
  }
  public set cryptoCoresTotal(value: number) {
    this._cryptoCoresTotal = value;
  }
  public resetCryptoCoresTotal() {
    this._cryptoCoresTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoCoresTotalInput() {
    return this._cryptoCoresTotal;
  }

  // crypto_hw_err - computed: false, optional: true, required: false
  private _cryptoHwErr?: number; 
  public get cryptoHwErr() {
    return this.getNumberAttribute('crypto_hw_err');
  }
  public set cryptoHwErr(value: number) {
    this._cryptoHwErr = value;
  }
  public resetCryptoHwErr() {
    this._cryptoHwErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoHwErrInput() {
    return this._cryptoHwErr;
  }

  // crypto_hw_err_bad_ctx_pointer - computed: false, optional: true, required: false
  private _cryptoHwErrBadCtxPointer?: number; 
  public get cryptoHwErrBadCtxPointer() {
    return this.getNumberAttribute('crypto_hw_err_bad_ctx_pointer');
  }
  public set cryptoHwErrBadCtxPointer(value: number) {
    this._cryptoHwErrBadCtxPointer = value;
  }
  public resetCryptoHwErrBadCtxPointer() {
    this._cryptoHwErrBadCtxPointer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoHwErrBadCtxPointerInput() {
    return this._cryptoHwErrBadCtxPointer;
  }

  // crypto_hw_err_bad_pointer - computed: false, optional: true, required: false
  private _cryptoHwErrBadPointer?: number; 
  public get cryptoHwErrBadPointer() {
    return this.getNumberAttribute('crypto_hw_err_bad_pointer');
  }
  public set cryptoHwErrBadPointer(value: number) {
    this._cryptoHwErrBadPointer = value;
  }
  public resetCryptoHwErrBadPointer() {
    this._cryptoHwErrBadPointer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoHwErrBadPointerInput() {
    return this._cryptoHwErrBadPointer;
  }

  // crypto_hw_err_buff_alloc_error - computed: false, optional: true, required: false
  private _cryptoHwErrBuffAllocError?: number; 
  public get cryptoHwErrBuffAllocError() {
    return this.getNumberAttribute('crypto_hw_err_buff_alloc_error');
  }
  public set cryptoHwErrBuffAllocError(value: number) {
    this._cryptoHwErrBuffAllocError = value;
  }
  public resetCryptoHwErrBuffAllocError() {
    this._cryptoHwErrBuffAllocError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoHwErrBuffAllocErrorInput() {
    return this._cryptoHwErrBuffAllocError;
  }

  // crypto_hw_err_enqueue_fail - computed: false, optional: true, required: false
  private _cryptoHwErrEnqueueFail?: number; 
  public get cryptoHwErrEnqueueFail() {
    return this.getNumberAttribute('crypto_hw_err_enqueue_fail');
  }
  public set cryptoHwErrEnqueueFail(value: number) {
    this._cryptoHwErrEnqueueFail = value;
  }
  public resetCryptoHwErrEnqueueFail() {
    this._cryptoHwErrEnqueueFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoHwErrEnqueueFailInput() {
    return this._cryptoHwErrEnqueueFail;
  }

  // crypto_hw_err_req_alloc_fail - computed: false, optional: true, required: false
  private _cryptoHwErrReqAllocFail?: number; 
  public get cryptoHwErrReqAllocFail() {
    return this.getNumberAttribute('crypto_hw_err_req_alloc_fail');
  }
  public set cryptoHwErrReqAllocFail(value: number) {
    this._cryptoHwErrReqAllocFail = value;
  }
  public resetCryptoHwErrReqAllocFail() {
    this._cryptoHwErrReqAllocFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoHwErrReqAllocFailInput() {
    return this._cryptoHwErrReqAllocFail;
  }

  // crypto_hw_err_req_error - computed: false, optional: true, required: false
  private _cryptoHwErrReqError?: number; 
  public get cryptoHwErrReqError() {
    return this.getNumberAttribute('crypto_hw_err_req_error');
  }
  public set cryptoHwErrReqError(value: number) {
    this._cryptoHwErrReqError = value;
  }
  public resetCryptoHwErrReqError() {
    this._cryptoHwErrReqError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoHwErrReqErrorInput() {
    return this._cryptoHwErrReqError;
  }

  // crypto_hw_err_sg_buff_alloc_fail - computed: false, optional: true, required: false
  private _cryptoHwErrSgBuffAllocFail?: number; 
  public get cryptoHwErrSgBuffAllocFail() {
    return this.getNumberAttribute('crypto_hw_err_sg_buff_alloc_fail');
  }
  public set cryptoHwErrSgBuffAllocFail(value: number) {
    this._cryptoHwErrSgBuffAllocFail = value;
  }
  public resetCryptoHwErrSgBuffAllocFail() {
    this._cryptoHwErrSgBuffAllocFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoHwErrSgBuffAllocFailInput() {
    return this._cryptoHwErrSgBuffAllocFail;
  }

  // crypto_hw_err_state - computed: false, optional: true, required: false
  private _cryptoHwErrState?: string; 
  public get cryptoHwErrState() {
    return this.getStringAttribute('crypto_hw_err_state');
  }
  public set cryptoHwErrState(value: string) {
    this._cryptoHwErrState = value;
  }
  public resetCryptoHwErrState() {
    this._cryptoHwErrState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoHwErrStateInput() {
    return this._cryptoHwErrState;
  }

  // crypto_hw_err_state_error - computed: false, optional: true, required: false
  private _cryptoHwErrStateError?: number; 
  public get cryptoHwErrStateError() {
    return this.getNumberAttribute('crypto_hw_err_state_error');
  }
  public set cryptoHwErrStateError(value: number) {
    this._cryptoHwErrStateError = value;
  }
  public resetCryptoHwErrStateError() {
    this._cryptoHwErrStateError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoHwErrStateErrorInput() {
    return this._cryptoHwErrStateError;
  }

  // crypto_hw_err_time_out - computed: false, optional: true, required: false
  private _cryptoHwErrTimeOut?: number; 
  public get cryptoHwErrTimeOut() {
    return this.getNumberAttribute('crypto_hw_err_time_out');
  }
  public set cryptoHwErrTimeOut(value: number) {
    this._cryptoHwErrTimeOut = value;
  }
  public resetCryptoHwErrTimeOut() {
    this._cryptoHwErrTimeOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoHwErrTimeOutInput() {
    return this._cryptoHwErrTimeOut;
  }

  // crypto_hw_err_time_out_state - computed: false, optional: true, required: false
  private _cryptoHwErrTimeOutState?: number; 
  public get cryptoHwErrTimeOutState() {
    return this.getNumberAttribute('crypto_hw_err_time_out_state');
  }
  public set cryptoHwErrTimeOutState(value: number) {
    this._cryptoHwErrTimeOutState = value;
  }
  public resetCryptoHwErrTimeOutState() {
    this._cryptoHwErrTimeOutState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoHwErrTimeOutStateInput() {
    return this._cryptoHwErrTimeOutState;
  }

  // crypto_mem - computed: false, optional: true, required: false
  private _cryptoMem?: number; 
  public get cryptoMem() {
    return this.getNumberAttribute('crypto_mem');
  }
  public set cryptoMem(value: number) {
    this._cryptoMem = value;
  }
  public resetCryptoMem() {
    this._cryptoMem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoMemInput() {
    return this._cryptoMem;
  }

  // ike_gateway_total - computed: false, optional: true, required: false
  private _ikeGatewayTotal?: number; 
  public get ikeGatewayTotal() {
    return this.getNumberAttribute('ike_gateway_total');
  }
  public set ikeGatewayTotal(value: number) {
    this._ikeGatewayTotal = value;
  }
  public resetIkeGatewayTotal() {
    this._ikeGatewayTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeGatewayTotalInput() {
    return this._ikeGatewayTotal;
  }

  // ike_hardware_accelerate - computed: false, optional: true, required: false
  private _ikeHardwareAccelerate?: string; 
  public get ikeHardwareAccelerate() {
    return this.getStringAttribute('ike_hardware_accelerate');
  }
  public set ikeHardwareAccelerate(value: string) {
    this._ikeHardwareAccelerate = value;
  }
  public resetIkeHardwareAccelerate() {
    this._ikeHardwareAccelerate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeHardwareAccelerateInput() {
    return this._ikeHardwareAccelerate;
  }

  // ike_sa_total - computed: false, optional: true, required: false
  private _ikeSaTotal?: number; 
  public get ikeSaTotal() {
    return this.getNumberAttribute('ike_sa_total');
  }
  public set ikeSaTotal(value: number) {
    this._ikeSaTotal = value;
  }
  public resetIkeSaTotal() {
    this._ikeSaTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaTotalInput() {
    return this._ikeSaTotal;
  }

  // ipsec_hardware_type - computed: false, optional: true, required: false
  private _ipsecHardwareType?: string; 
  public get ipsecHardwareType() {
    return this.getStringAttribute('ipsec_hardware_type');
  }
  public set ipsecHardwareType(value: string) {
    this._ipsecHardwareType = value;
  }
  public resetIpsecHardwareType() {
    this._ipsecHardwareType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecHardwareTypeInput() {
    return this._ipsecHardwareType;
  }

  // ipsec_mode - computed: false, optional: true, required: false
  private _ipsecMode?: string; 
  public get ipsecMode() {
    return this.getStringAttribute('ipsec_mode');
  }
  public set ipsecMode(value: string) {
    this._ipsecMode = value;
  }
  public resetIpsecMode() {
    this._ipsecMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecModeInput() {
    return this._ipsecMode;
  }

  // ipsec_sa_total - computed: false, optional: true, required: false
  private _ipsecSaTotal?: number; 
  public get ipsecSaTotal() {
    return this.getNumberAttribute('ipsec_sa_total');
  }
  public set ipsecSaTotal(value: number) {
    this._ipsecSaTotal = value;
  }
  public resetIpsecSaTotal() {
    this._ipsecSaTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSaTotalInput() {
    return this._ipsecSaTotal;
  }

  // ipsec_stateless - computed: false, optional: true, required: false
  private _ipsecStateless?: number; 
  public get ipsecStateless() {
    return this.getNumberAttribute('ipsec_stateless');
  }
  public set ipsecStateless(value: number) {
    this._ipsecStateless = value;
  }
  public resetIpsecStateless() {
    this._ipsecStateless = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecStatelessInput() {
    return this._ipsecStateless;
  }

  // ipsec_total - computed: false, optional: true, required: false
  private _ipsecTotal?: number; 
  public get ipsecTotal() {
    return this.getNumberAttribute('ipsec_total');
  }
  public set ipsecTotal(value: number) {
    this._ipsecTotal = value;
  }
  public resetIpsecTotal() {
    this._ipsecTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecTotalInput() {
    return this._ipsecTotal;
  }

  // num_hardware_devices - computed: false, optional: true, required: false
  private _numHardwareDevices?: number; 
  public get numHardwareDevices() {
    return this.getNumberAttribute('num_hardware_devices');
  }
  public set numHardwareDevices(value: number) {
    this._numHardwareDevices = value;
  }
  public resetNumHardwareDevices() {
    this._numHardwareDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numHardwareDevicesInput() {
    return this._numHardwareDevices;
  }

  // partition_name - computed: false, optional: true, required: false
  private _partitionName?: string; 
  public get partitionName() {
    return this.getStringAttribute('partition_name');
  }
  public set partitionName(value: string) {
    this._partitionName = value;
  }
  public resetPartitionName() {
    this._partitionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionNameInput() {
    return this._partitionName;
  }

  // passthrough_total - computed: false, optional: true, required: false
  private _passthroughTotal?: number; 
  public get passthroughTotal() {
    return this.getNumberAttribute('passthrough_total');
  }
  public set passthroughTotal(value: number) {
    this._passthroughTotal = value;
  }
  public resetPassthroughTotal() {
    this._passthroughTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passthroughTotalInput() {
    return this._passthroughTotal;
  }

  // signed_auth_flag - computed: false, optional: true, required: false
  private _signedAuthFlag?: number; 
  public get signedAuthFlag() {
    return this.getNumberAttribute('signed_auth_flag');
  }
  public set signedAuthFlag(value: number) {
    this._signedAuthFlag = value;
  }
  public resetSignedAuthFlag() {
    this._signedAuthFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signedAuthFlagInput() {
    return this._signedAuthFlag;
  }

  // standby_drop - computed: false, optional: true, required: false
  private _standbyDrop?: number; 
  public get standbyDrop() {
    return this.getNumberAttribute('standby_drop');
  }
  public set standbyDrop(value: number) {
    this._standbyDrop = value;
  }
  public resetStandbyDrop() {
    this._standbyDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyDropInput() {
    return this._standbyDrop;
  }

  // vpn_list - computed: false, optional: true, required: false
  private _vpnList = new DataThunderVpnOperOperAllPartitionListVpnListStructList(this, "vpn_list", false);
  public get vpnList() {
    return this._vpnList;
  }
  public putVpnList(value: DataThunderVpnOperOperAllPartitionListVpnListStruct[] | cdktf.IResolvable) {
    this._vpnList.internalValue = value;
  }
  public resetVpnList() {
    this._vpnList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnListInput() {
    return this._vpnList.internalValue;
  }
}

export class DataThunderVpnOperOperAllPartitionListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVpnOperOperAllPartitionListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVpnOperOperAllPartitionListStructOutputReference {
    return new DataThunderVpnOperOperAllPartitionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVpnOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#all_partitions DataThunderVpnOper#all_partitions}
  */
  readonly allPartitions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#crypto_cores_assigned_to_ipsec DataThunderVpnOper#crypto_cores_assigned_to_ipsec}
  */
  readonly cryptoCoresAssignedToIpsec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#crypto_cores_total DataThunderVpnOper#crypto_cores_total}
  */
  readonly cryptoCoresTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#crypto_mem DataThunderVpnOper#crypto_mem}
  */
  readonly cryptoMem?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_gateway_total DataThunderVpnOper#ike_gateway_total}
  */
  readonly ikeGatewayTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ike_sa_total DataThunderVpnOper#ike_sa_total}
  */
  readonly ikeSaTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ipsec_mode DataThunderVpnOper#ipsec_mode}
  */
  readonly ipsecMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ipsec_sa_total DataThunderVpnOper#ipsec_sa_total}
  */
  readonly ipsecSaTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#ipsec_total DataThunderVpnOper#ipsec_total}
  */
  readonly ipsecTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#num_hardware_devices DataThunderVpnOper#num_hardware_devices}
  */
  readonly numHardwareDevices?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#shared DataThunderVpnOper#shared}
  */
  readonly shared?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#specific_partition DataThunderVpnOper#specific_partition}
  */
  readonly specificPartition?: string;
  /**
  * all_partition_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#all_partition_list DataThunderVpnOper#all_partition_list}
  */
  readonly allPartitionList?: DataThunderVpnOperOperAllPartitionListStruct[] | cdktf.IResolvable;
}

export function dataThunderVpnOperOperToTerraform(struct?: DataThunderVpnOperOperOutputReference | DataThunderVpnOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_partitions: cdktf.numberToTerraform(struct!.allPartitions),
    crypto_cores_assigned_to_ipsec: cdktf.numberToTerraform(struct!.cryptoCoresAssignedToIpsec),
    crypto_cores_total: cdktf.numberToTerraform(struct!.cryptoCoresTotal),
    crypto_mem: cdktf.numberToTerraform(struct!.cryptoMem),
    ike_gateway_total: cdktf.numberToTerraform(struct!.ikeGatewayTotal),
    ike_sa_total: cdktf.numberToTerraform(struct!.ikeSaTotal),
    ipsec_mode: cdktf.stringToTerraform(struct!.ipsecMode),
    ipsec_sa_total: cdktf.numberToTerraform(struct!.ipsecSaTotal),
    ipsec_total: cdktf.numberToTerraform(struct!.ipsecTotal),
    num_hardware_devices: cdktf.numberToTerraform(struct!.numHardwareDevices),
    shared: cdktf.numberToTerraform(struct!.shared),
    specific_partition: cdktf.stringToTerraform(struct!.specificPartition),
    all_partition_list: cdktf.listMapper(dataThunderVpnOperOperAllPartitionListStructToTerraform, true)(struct!.allPartitionList),
  }
}


export function dataThunderVpnOperOperToHclTerraform(struct?: DataThunderVpnOperOperOutputReference | DataThunderVpnOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_partitions: {
      value: cdktf.numberToHclTerraform(struct!.allPartitions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crypto_cores_assigned_to_ipsec: {
      value: cdktf.numberToHclTerraform(struct!.cryptoCoresAssignedToIpsec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crypto_cores_total: {
      value: cdktf.numberToHclTerraform(struct!.cryptoCoresTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crypto_mem: {
      value: cdktf.numberToHclTerraform(struct!.cryptoMem),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ike_gateway_total: {
      value: cdktf.numberToHclTerraform(struct!.ikeGatewayTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ike_sa_total: {
      value: cdktf.numberToHclTerraform(struct!.ikeSaTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_mode: {
      value: cdktf.stringToHclTerraform(struct!.ipsecMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_sa_total: {
      value: cdktf.numberToHclTerraform(struct!.ipsecSaTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_total: {
      value: cdktf.numberToHclTerraform(struct!.ipsecTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_hardware_devices: {
      value: cdktf.numberToHclTerraform(struct!.numHardwareDevices),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared: {
      value: cdktf.numberToHclTerraform(struct!.shared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    specific_partition: {
      value: cdktf.stringToHclTerraform(struct!.specificPartition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    all_partition_list: {
      value: cdktf.listMapperHcl(dataThunderVpnOperOperAllPartitionListStructToHclTerraform, true)(struct!.allPartitionList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnOperOperAllPartitionListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allPartitions !== undefined) {
      hasAnyValues = true;
      internalValueResult.allPartitions = this._allPartitions;
    }
    if (this._cryptoCoresAssignedToIpsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoCoresAssignedToIpsec = this._cryptoCoresAssignedToIpsec;
    }
    if (this._cryptoCoresTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoCoresTotal = this._cryptoCoresTotal;
    }
    if (this._cryptoMem !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoMem = this._cryptoMem;
    }
    if (this._ikeGatewayTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeGatewayTotal = this._ikeGatewayTotal;
    }
    if (this._ikeSaTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeSaTotal = this._ikeSaTotal;
    }
    if (this._ipsecMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecMode = this._ipsecMode;
    }
    if (this._ipsecSaTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecSaTotal = this._ipsecSaTotal;
    }
    if (this._ipsecTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecTotal = this._ipsecTotal;
    }
    if (this._numHardwareDevices !== undefined) {
      hasAnyValues = true;
      internalValueResult.numHardwareDevices = this._numHardwareDevices;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    if (this._specificPartition !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificPartition = this._specificPartition;
    }
    if (this._allPartitionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allPartitionList = this._allPartitionList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allPartitions = undefined;
      this._cryptoCoresAssignedToIpsec = undefined;
      this._cryptoCoresTotal = undefined;
      this._cryptoMem = undefined;
      this._ikeGatewayTotal = undefined;
      this._ikeSaTotal = undefined;
      this._ipsecMode = undefined;
      this._ipsecSaTotal = undefined;
      this._ipsecTotal = undefined;
      this._numHardwareDevices = undefined;
      this._shared = undefined;
      this._specificPartition = undefined;
      this._allPartitionList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allPartitions = value.allPartitions;
      this._cryptoCoresAssignedToIpsec = value.cryptoCoresAssignedToIpsec;
      this._cryptoCoresTotal = value.cryptoCoresTotal;
      this._cryptoMem = value.cryptoMem;
      this._ikeGatewayTotal = value.ikeGatewayTotal;
      this._ikeSaTotal = value.ikeSaTotal;
      this._ipsecMode = value.ipsecMode;
      this._ipsecSaTotal = value.ipsecSaTotal;
      this._ipsecTotal = value.ipsecTotal;
      this._numHardwareDevices = value.numHardwareDevices;
      this._shared = value.shared;
      this._specificPartition = value.specificPartition;
      this._allPartitionList.internalValue = value.allPartitionList;
    }
  }

  // all_partitions - computed: false, optional: true, required: false
  private _allPartitions?: number; 
  public get allPartitions() {
    return this.getNumberAttribute('all_partitions');
  }
  public set allPartitions(value: number) {
    this._allPartitions = value;
  }
  public resetAllPartitions() {
    this._allPartitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allPartitionsInput() {
    return this._allPartitions;
  }

  // crypto_cores_assigned_to_ipsec - computed: false, optional: true, required: false
  private _cryptoCoresAssignedToIpsec?: number; 
  public get cryptoCoresAssignedToIpsec() {
    return this.getNumberAttribute('crypto_cores_assigned_to_ipsec');
  }
  public set cryptoCoresAssignedToIpsec(value: number) {
    this._cryptoCoresAssignedToIpsec = value;
  }
  public resetCryptoCoresAssignedToIpsec() {
    this._cryptoCoresAssignedToIpsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoCoresAssignedToIpsecInput() {
    return this._cryptoCoresAssignedToIpsec;
  }

  // crypto_cores_total - computed: false, optional: true, required: false
  private _cryptoCoresTotal?: number; 
  public get cryptoCoresTotal() {
    return this.getNumberAttribute('crypto_cores_total');
  }
  public set cryptoCoresTotal(value: number) {
    this._cryptoCoresTotal = value;
  }
  public resetCryptoCoresTotal() {
    this._cryptoCoresTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoCoresTotalInput() {
    return this._cryptoCoresTotal;
  }

  // crypto_mem - computed: false, optional: true, required: false
  private _cryptoMem?: number; 
  public get cryptoMem() {
    return this.getNumberAttribute('crypto_mem');
  }
  public set cryptoMem(value: number) {
    this._cryptoMem = value;
  }
  public resetCryptoMem() {
    this._cryptoMem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoMemInput() {
    return this._cryptoMem;
  }

  // ike_gateway_total - computed: false, optional: true, required: false
  private _ikeGatewayTotal?: number; 
  public get ikeGatewayTotal() {
    return this.getNumberAttribute('ike_gateway_total');
  }
  public set ikeGatewayTotal(value: number) {
    this._ikeGatewayTotal = value;
  }
  public resetIkeGatewayTotal() {
    this._ikeGatewayTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeGatewayTotalInput() {
    return this._ikeGatewayTotal;
  }

  // ike_sa_total - computed: false, optional: true, required: false
  private _ikeSaTotal?: number; 
  public get ikeSaTotal() {
    return this.getNumberAttribute('ike_sa_total');
  }
  public set ikeSaTotal(value: number) {
    this._ikeSaTotal = value;
  }
  public resetIkeSaTotal() {
    this._ikeSaTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaTotalInput() {
    return this._ikeSaTotal;
  }

  // ipsec_mode - computed: false, optional: true, required: false
  private _ipsecMode?: string; 
  public get ipsecMode() {
    return this.getStringAttribute('ipsec_mode');
  }
  public set ipsecMode(value: string) {
    this._ipsecMode = value;
  }
  public resetIpsecMode() {
    this._ipsecMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecModeInput() {
    return this._ipsecMode;
  }

  // ipsec_sa_total - computed: false, optional: true, required: false
  private _ipsecSaTotal?: number; 
  public get ipsecSaTotal() {
    return this.getNumberAttribute('ipsec_sa_total');
  }
  public set ipsecSaTotal(value: number) {
    this._ipsecSaTotal = value;
  }
  public resetIpsecSaTotal() {
    this._ipsecSaTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSaTotalInput() {
    return this._ipsecSaTotal;
  }

  // ipsec_total - computed: false, optional: true, required: false
  private _ipsecTotal?: number; 
  public get ipsecTotal() {
    return this.getNumberAttribute('ipsec_total');
  }
  public set ipsecTotal(value: number) {
    this._ipsecTotal = value;
  }
  public resetIpsecTotal() {
    this._ipsecTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecTotalInput() {
    return this._ipsecTotal;
  }

  // num_hardware_devices - computed: false, optional: true, required: false
  private _numHardwareDevices?: number; 
  public get numHardwareDevices() {
    return this.getNumberAttribute('num_hardware_devices');
  }
  public set numHardwareDevices(value: number) {
    this._numHardwareDevices = value;
  }
  public resetNumHardwareDevices() {
    this._numHardwareDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numHardwareDevicesInput() {
    return this._numHardwareDevices;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: number; 
  public get shared() {
    return this.getNumberAttribute('shared');
  }
  public set shared(value: number) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // specific_partition - computed: false, optional: true, required: false
  private _specificPartition?: string; 
  public get specificPartition() {
    return this.getStringAttribute('specific_partition');
  }
  public set specificPartition(value: string) {
    this._specificPartition = value;
  }
  public resetSpecificPartition() {
    this._specificPartition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificPartitionInput() {
    return this._specificPartition;
  }

  // all_partition_list - computed: false, optional: true, required: false
  private _allPartitionList = new DataThunderVpnOperOperAllPartitionListStructList(this, "all_partition_list", false);
  public get allPartitionList() {
    return this._allPartitionList;
  }
  public putAllPartitionList(value: DataThunderVpnOperOperAllPartitionListStruct[] | cdktf.IResolvable) {
    this._allPartitionList.internalValue = value;
  }
  public resetAllPartitionList() {
    this._allPartitionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allPartitionListInput() {
    return this._allPartitionList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper thunder_vpn_oper}
*/
export class DataThunderVpnOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vpn_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVpnOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVpnOper to import
  * @param importFromId The id of the existing DataThunderVpnOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVpnOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vpn_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_oper thunder_vpn_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVpnOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVpnOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vpn_oper',
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
    this._crl.internalValue = config.crl;
    this._default.internalValue = config.default;
    this._errordump.internalValue = config.errordump;
    this._groupList.internalValue = config.groupList;
    this._ikeGatewayList.internalValue = config.ikeGatewayList;
    this._ikeSa.internalValue = config.ikeSa;
    this._ikeSaBrief.internalValue = config.ikeSaBrief;
    this._ikeSaClients.internalValue = config.ikeSaClients;
    this._ikeStatsByGw.internalValue = config.ikeStatsByGw;
    this._ipsecList.internalValue = config.ipsecList;
    this._ipsecSa.internalValue = config.ipsecSa;
    this._ipsecSaByGw.internalValue = config.ipsecSaByGw;
    this._ipsecSaClients.internalValue = config.ipsecSaClients;
    this._log.internalValue = config.log;
    this._ocsp.internalValue = config.ocsp;
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

  // crl - computed: false, optional: true, required: false
  private _crl = new DataThunderVpnOperCrlOutputReference(this, "crl");
  public get crl() {
    return this._crl;
  }
  public putCrl(value: DataThunderVpnOperCrl) {
    this._crl.internalValue = value;
  }
  public resetCrl() {
    this._crl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlInput() {
    return this._crl.internalValue;
  }

  // default - computed: false, optional: true, required: false
  private _default = new DataThunderVpnOperDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: DataThunderVpnOperDefault) {
    this._default.internalValue = value;
  }
  public resetDefault() {
    this._default.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }

  // errordump - computed: false, optional: true, required: false
  private _errordump = new DataThunderVpnOperErrordumpOutputReference(this, "errordump");
  public get errordump() {
    return this._errordump;
  }
  public putErrordump(value: DataThunderVpnOperErrordump) {
    this._errordump.internalValue = value;
  }
  public resetErrordump() {
    this._errordump.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errordumpInput() {
    return this._errordump.internalValue;
  }

  // group_list - computed: false, optional: true, required: false
  private _groupList = new DataThunderVpnOperGroupListStructOutputReference(this, "group_list");
  public get groupList() {
    return this._groupList;
  }
  public putGroupList(value: DataThunderVpnOperGroupListStruct) {
    this._groupList.internalValue = value;
  }
  public resetGroupList() {
    this._groupList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupListInput() {
    return this._groupList.internalValue;
  }

  // ike_gateway_list - computed: false, optional: true, required: false
  private _ikeGatewayList = new DataThunderVpnOperIkeGatewayListStructList(this, "ike_gateway_list", false);
  public get ikeGatewayList() {
    return this._ikeGatewayList;
  }
  public putIkeGatewayList(value: DataThunderVpnOperIkeGatewayListStruct[] | cdktf.IResolvable) {
    this._ikeGatewayList.internalValue = value;
  }
  public resetIkeGatewayList() {
    this._ikeGatewayList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeGatewayListInput() {
    return this._ikeGatewayList.internalValue;
  }

  // ike_sa - computed: false, optional: true, required: false
  private _ikeSa = new DataThunderVpnOperIkeSaOutputReference(this, "ike_sa");
  public get ikeSa() {
    return this._ikeSa;
  }
  public putIkeSa(value: DataThunderVpnOperIkeSa) {
    this._ikeSa.internalValue = value;
  }
  public resetIkeSa() {
    this._ikeSa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaInput() {
    return this._ikeSa.internalValue;
  }

  // ike_sa_brief - computed: false, optional: true, required: false
  private _ikeSaBrief = new DataThunderVpnOperIkeSaBriefOutputReference(this, "ike_sa_brief");
  public get ikeSaBrief() {
    return this._ikeSaBrief;
  }
  public putIkeSaBrief(value: DataThunderVpnOperIkeSaBrief) {
    this._ikeSaBrief.internalValue = value;
  }
  public resetIkeSaBrief() {
    this._ikeSaBrief.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaBriefInput() {
    return this._ikeSaBrief.internalValue;
  }

  // ike_sa_clients - computed: false, optional: true, required: false
  private _ikeSaClients = new DataThunderVpnOperIkeSaClientsOutputReference(this, "ike_sa_clients");
  public get ikeSaClients() {
    return this._ikeSaClients;
  }
  public putIkeSaClients(value: DataThunderVpnOperIkeSaClients) {
    this._ikeSaClients.internalValue = value;
  }
  public resetIkeSaClients() {
    this._ikeSaClients.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaClientsInput() {
    return this._ikeSaClients.internalValue;
  }

  // ike_stats_by_gw - computed: false, optional: true, required: false
  private _ikeStatsByGw = new DataThunderVpnOperIkeStatsByGwOutputReference(this, "ike_stats_by_gw");
  public get ikeStatsByGw() {
    return this._ikeStatsByGw;
  }
  public putIkeStatsByGw(value: DataThunderVpnOperIkeStatsByGw) {
    this._ikeStatsByGw.internalValue = value;
  }
  public resetIkeStatsByGw() {
    this._ikeStatsByGw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeStatsByGwInput() {
    return this._ikeStatsByGw.internalValue;
  }

  // ipsec_list - computed: false, optional: true, required: false
  private _ipsecList = new DataThunderVpnOperIpsecListStructList(this, "ipsec_list", false);
  public get ipsecList() {
    return this._ipsecList;
  }
  public putIpsecList(value: DataThunderVpnOperIpsecListStruct[] | cdktf.IResolvable) {
    this._ipsecList.internalValue = value;
  }
  public resetIpsecList() {
    this._ipsecList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecListInput() {
    return this._ipsecList.internalValue;
  }

  // ipsec_sa - computed: false, optional: true, required: false
  private _ipsecSa = new DataThunderVpnOperIpsecSaOutputReference(this, "ipsec_sa");
  public get ipsecSa() {
    return this._ipsecSa;
  }
  public putIpsecSa(value: DataThunderVpnOperIpsecSa) {
    this._ipsecSa.internalValue = value;
  }
  public resetIpsecSa() {
    this._ipsecSa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSaInput() {
    return this._ipsecSa.internalValue;
  }

  // ipsec_sa_by_gw - computed: false, optional: true, required: false
  private _ipsecSaByGw = new DataThunderVpnOperIpsecSaByGwOutputReference(this, "ipsec_sa_by_gw");
  public get ipsecSaByGw() {
    return this._ipsecSaByGw;
  }
  public putIpsecSaByGw(value: DataThunderVpnOperIpsecSaByGw) {
    this._ipsecSaByGw.internalValue = value;
  }
  public resetIpsecSaByGw() {
    this._ipsecSaByGw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSaByGwInput() {
    return this._ipsecSaByGw.internalValue;
  }

  // ipsec_sa_clients - computed: false, optional: true, required: false
  private _ipsecSaClients = new DataThunderVpnOperIpsecSaClientsOutputReference(this, "ipsec_sa_clients");
  public get ipsecSaClients() {
    return this._ipsecSaClients;
  }
  public putIpsecSaClients(value: DataThunderVpnOperIpsecSaClients) {
    this._ipsecSaClients.internalValue = value;
  }
  public resetIpsecSaClients() {
    this._ipsecSaClients.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSaClientsInput() {
    return this._ipsecSaClients.internalValue;
  }

  // log - computed: false, optional: true, required: false
  private _log = new DataThunderVpnOperLogOutputReference(this, "log");
  public get log() {
    return this._log;
  }
  public putLog(value: DataThunderVpnOperLog) {
    this._log.internalValue = value;
  }
  public resetLog() {
    this._log.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log.internalValue;
  }

  // ocsp - computed: false, optional: true, required: false
  private _ocsp = new DataThunderVpnOperOcspOutputReference(this, "ocsp");
  public get ocsp() {
    return this._ocsp;
  }
  public putOcsp(value: DataThunderVpnOperOcsp) {
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
  private _oper = new DataThunderVpnOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVpnOperOper) {
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
      crl: dataThunderVpnOperCrlToTerraform(this._crl.internalValue),
      default: dataThunderVpnOperDefaultToTerraform(this._default.internalValue),
      errordump: dataThunderVpnOperErrordumpToTerraform(this._errordump.internalValue),
      group_list: dataThunderVpnOperGroupListStructToTerraform(this._groupList.internalValue),
      ike_gateway_list: cdktf.listMapper(dataThunderVpnOperIkeGatewayListStructToTerraform, true)(this._ikeGatewayList.internalValue),
      ike_sa: dataThunderVpnOperIkeSaToTerraform(this._ikeSa.internalValue),
      ike_sa_brief: dataThunderVpnOperIkeSaBriefToTerraform(this._ikeSaBrief.internalValue),
      ike_sa_clients: dataThunderVpnOperIkeSaClientsToTerraform(this._ikeSaClients.internalValue),
      ike_stats_by_gw: dataThunderVpnOperIkeStatsByGwToTerraform(this._ikeStatsByGw.internalValue),
      ipsec_list: cdktf.listMapper(dataThunderVpnOperIpsecListStructToTerraform, true)(this._ipsecList.internalValue),
      ipsec_sa: dataThunderVpnOperIpsecSaToTerraform(this._ipsecSa.internalValue),
      ipsec_sa_by_gw: dataThunderVpnOperIpsecSaByGwToTerraform(this._ipsecSaByGw.internalValue),
      ipsec_sa_clients: dataThunderVpnOperIpsecSaClientsToTerraform(this._ipsecSaClients.internalValue),
      log: dataThunderVpnOperLogToTerraform(this._log.internalValue),
      ocsp: dataThunderVpnOperOcspToTerraform(this._ocsp.internalValue),
      oper: dataThunderVpnOperOperToTerraform(this._oper.internalValue),
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
      crl: {
        value: dataThunderVpnOperCrlToHclTerraform(this._crl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnOperCrlList",
      },
      default: {
        value: dataThunderVpnOperDefaultToHclTerraform(this._default.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnOperDefaultList",
      },
      errordump: {
        value: dataThunderVpnOperErrordumpToHclTerraform(this._errordump.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnOperErrordumpList",
      },
      group_list: {
        value: dataThunderVpnOperGroupListStructToHclTerraform(this._groupList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnOperGroupListStructList",
      },
      ike_gateway_list: {
        value: cdktf.listMapperHcl(dataThunderVpnOperIkeGatewayListStructToHclTerraform, true)(this._ikeGatewayList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnOperIkeGatewayListStructList",
      },
      ike_sa: {
        value: dataThunderVpnOperIkeSaToHclTerraform(this._ikeSa.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnOperIkeSaList",
      },
      ike_sa_brief: {
        value: dataThunderVpnOperIkeSaBriefToHclTerraform(this._ikeSaBrief.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnOperIkeSaBriefList",
      },
      ike_sa_clients: {
        value: dataThunderVpnOperIkeSaClientsToHclTerraform(this._ikeSaClients.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnOperIkeSaClientsList",
      },
      ike_stats_by_gw: {
        value: dataThunderVpnOperIkeStatsByGwToHclTerraform(this._ikeStatsByGw.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnOperIkeStatsByGwList",
      },
      ipsec_list: {
        value: cdktf.listMapperHcl(dataThunderVpnOperIpsecListStructToHclTerraform, true)(this._ipsecList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnOperIpsecListStructList",
      },
      ipsec_sa: {
        value: dataThunderVpnOperIpsecSaToHclTerraform(this._ipsecSa.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnOperIpsecSaList",
      },
      ipsec_sa_by_gw: {
        value: dataThunderVpnOperIpsecSaByGwToHclTerraform(this._ipsecSaByGw.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnOperIpsecSaByGwList",
      },
      ipsec_sa_clients: {
        value: dataThunderVpnOperIpsecSaClientsToHclTerraform(this._ipsecSaClients.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnOperIpsecSaClientsList",
      },
      log: {
        value: dataThunderVpnOperLogToHclTerraform(this._log.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnOperLogList",
      },
      ocsp: {
        value: dataThunderVpnOperOcspToHclTerraform(this._ocsp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnOperOcspList",
      },
      oper: {
        value: dataThunderVpnOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
