// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_crl_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVpnCrlOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_crl_oper#id DataThunderVpnCrlOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_crl_oper#oper DataThunderVpnCrlOper#oper}
  */
  readonly oper?: DataThunderVpnCrlOperOper;
}
export interface DataThunderVpnCrlOperOperCrlListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_crl_oper#issuer DataThunderVpnCrlOper#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_crl_oper#revoked DataThunderVpnCrlOper#revoked}
  */
  readonly revoked?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_crl_oper#serial DataThunderVpnCrlOper#serial}
  */
  readonly serial?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_crl_oper#storage_type DataThunderVpnCrlOper#storage_type}
  */
  readonly storageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_crl_oper#subject DataThunderVpnCrlOper#subject}
  */
  readonly subject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_crl_oper#updates DataThunderVpnCrlOper#updates}
  */
  readonly updates?: string;
}

export function dataThunderVpnCrlOperOperCrlListStructToTerraform(struct?: DataThunderVpnCrlOperOperCrlListStruct | cdktf.IResolvable): any {
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


export function dataThunderVpnCrlOperOperCrlListStructToHclTerraform(struct?: DataThunderVpnCrlOperOperCrlListStruct | cdktf.IResolvable): any {
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

export class DataThunderVpnCrlOperOperCrlListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVpnCrlOperOperCrlListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderVpnCrlOperOperCrlListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderVpnCrlOperOperCrlListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVpnCrlOperOperCrlListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVpnCrlOperOperCrlListStructOutputReference {
    return new DataThunderVpnCrlOperOperCrlListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVpnCrlOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_crl_oper#total_crls DataThunderVpnCrlOper#total_crls}
  */
  readonly totalCrls?: number;
  /**
  * crl_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_crl_oper#crl_list DataThunderVpnCrlOper#crl_list}
  */
  readonly crlList?: DataThunderVpnCrlOperOperCrlListStruct[] | cdktf.IResolvable;
}

export function dataThunderVpnCrlOperOperToTerraform(struct?: DataThunderVpnCrlOperOperOutputReference | DataThunderVpnCrlOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    total_crls: cdktf.numberToTerraform(struct!.totalCrls),
    crl_list: cdktf.listMapper(dataThunderVpnCrlOperOperCrlListStructToTerraform, true)(struct!.crlList),
  }
}


export function dataThunderVpnCrlOperOperToHclTerraform(struct?: DataThunderVpnCrlOperOperOutputReference | DataThunderVpnCrlOperOper): any {
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
      value: cdktf.listMapperHcl(dataThunderVpnCrlOperOperCrlListStructToHclTerraform, true)(struct!.crlList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnCrlOperOperCrlListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnCrlOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnCrlOperOper | undefined {
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

  public set internalValue(value: DataThunderVpnCrlOperOper | undefined) {
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
  private _crlList = new DataThunderVpnCrlOperOperCrlListStructList(this, "crl_list", false);
  public get crlList() {
    return this._crlList;
  }
  public putCrlList(value: DataThunderVpnCrlOperOperCrlListStruct[] | cdktf.IResolvable) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_crl_oper thunder_vpn_crl_oper}
*/
export class DataThunderVpnCrlOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vpn_crl_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVpnCrlOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVpnCrlOper to import
  * @param importFromId The id of the existing DataThunderVpnCrlOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_crl_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVpnCrlOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vpn_crl_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_crl_oper thunder_vpn_crl_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVpnCrlOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVpnCrlOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vpn_crl_oper',
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
  private _oper = new DataThunderVpnCrlOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVpnCrlOperOper) {
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
      oper: dataThunderVpnCrlOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderVpnCrlOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnCrlOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
