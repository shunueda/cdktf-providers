// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ocsp_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVpnOcspOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ocsp_oper#id DataThunderVpnOcspOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ocsp_oper#oper DataThunderVpnOcspOper#oper}
  */
  readonly oper?: DataThunderVpnOcspOperOper;
}
export interface DataThunderVpnOcspOperOperOcspListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ocsp_oper#certificate_status DataThunderVpnOcspOper#certificate_status}
  */
  readonly certificateStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ocsp_oper#issuer DataThunderVpnOcspOper#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ocsp_oper#subject DataThunderVpnOcspOper#subject}
  */
  readonly subject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ocsp_oper#validity DataThunderVpnOcspOper#validity}
  */
  readonly validity?: string;
}

export function dataThunderVpnOcspOperOperOcspListStructToTerraform(struct?: DataThunderVpnOcspOperOperOcspListStruct | cdktf.IResolvable): any {
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


export function dataThunderVpnOcspOperOperOcspListStructToHclTerraform(struct?: DataThunderVpnOcspOperOperOcspListStruct | cdktf.IResolvable): any {
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

export class DataThunderVpnOcspOperOperOcspListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVpnOcspOperOperOcspListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderVpnOcspOperOperOcspListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderVpnOcspOperOperOcspListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVpnOcspOperOperOcspListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVpnOcspOperOperOcspListStructOutputReference {
    return new DataThunderVpnOcspOperOperOcspListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVpnOcspOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ocsp_oper#total_ocsps DataThunderVpnOcspOper#total_ocsps}
  */
  readonly totalOcsps?: number;
  /**
  * ocsp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ocsp_oper#ocsp_list DataThunderVpnOcspOper#ocsp_list}
  */
  readonly ocspList?: DataThunderVpnOcspOperOperOcspListStruct[] | cdktf.IResolvable;
}

export function dataThunderVpnOcspOperOperToTerraform(struct?: DataThunderVpnOcspOperOperOutputReference | DataThunderVpnOcspOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    total_ocsps: cdktf.numberToTerraform(struct!.totalOcsps),
    ocsp_list: cdktf.listMapper(dataThunderVpnOcspOperOperOcspListStructToTerraform, true)(struct!.ocspList),
  }
}


export function dataThunderVpnOcspOperOperToHclTerraform(struct?: DataThunderVpnOcspOperOperOutputReference | DataThunderVpnOcspOperOper): any {
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
      value: cdktf.listMapperHcl(dataThunderVpnOcspOperOperOcspListStructToHclTerraform, true)(struct!.ocspList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnOcspOperOperOcspListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnOcspOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnOcspOperOper | undefined {
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

  public set internalValue(value: DataThunderVpnOcspOperOper | undefined) {
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
  private _ocspList = new DataThunderVpnOcspOperOperOcspListStructList(this, "ocsp_list", false);
  public get ocspList() {
    return this._ocspList;
  }
  public putOcspList(value: DataThunderVpnOcspOperOperOcspListStruct[] | cdktf.IResolvable) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ocsp_oper thunder_vpn_ocsp_oper}
*/
export class DataThunderVpnOcspOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vpn_ocsp_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVpnOcspOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVpnOcspOper to import
  * @param importFromId The id of the existing DataThunderVpnOcspOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ocsp_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVpnOcspOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vpn_ocsp_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ocsp_oper thunder_vpn_ocsp_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVpnOcspOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVpnOcspOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vpn_ocsp_oper',
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
  private _oper = new DataThunderVpnOcspOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVpnOcspOperOper) {
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
      oper: dataThunderVpnOcspOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderVpnOcspOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnOcspOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
