// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ca_cert_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbSslCaCertOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ca_cert_oper#id DataThunderSlbSslCaCertOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ca_cert_oper#oper DataThunderSlbSslCaCertOper#oper}
  */
  readonly oper?: DataThunderSlbSslCaCertOperOper;
}
export interface DataThunderSlbSslCaCertOperOperSslCerts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ca_cert_oper#common_name DataThunderSlbSslCaCertOper#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ca_cert_oper#issuer DataThunderSlbSslCaCertOper#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ca_cert_oper#keysize DataThunderSlbSslCaCertOper#keysize}
  */
  readonly keysize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ca_cert_oper#name DataThunderSlbSslCaCertOper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ca_cert_oper#notafter DataThunderSlbSslCaCertOper#notafter}
  */
  readonly notafter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ca_cert_oper#notafter_number DataThunderSlbSslCaCertOper#notafter_number}
  */
  readonly notafterNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ca_cert_oper#notbefore DataThunderSlbSslCaCertOper#notbefore}
  */
  readonly notbefore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ca_cert_oper#organization DataThunderSlbSslCaCertOper#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ca_cert_oper#serial DataThunderSlbSslCaCertOper#serial}
  */
  readonly serial?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ca_cert_oper#status DataThunderSlbSslCaCertOper#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ca_cert_oper#subject DataThunderSlbSslCaCertOper#subject}
  */
  readonly subject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ca_cert_oper#type DataThunderSlbSslCaCertOper#type}
  */
  readonly type?: string;
}

export function dataThunderSlbSslCaCertOperOperSslCertsToTerraform(struct?: DataThunderSlbSslCaCertOperOperSslCerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    keysize: cdktf.numberToTerraform(struct!.keysize),
    name: cdktf.stringToTerraform(struct!.name),
    notafter: cdktf.stringToTerraform(struct!.notafter),
    notafter_number: cdktf.numberToTerraform(struct!.notafterNumber),
    notbefore: cdktf.stringToTerraform(struct!.notbefore),
    organization: cdktf.stringToTerraform(struct!.organization),
    serial: cdktf.stringToTerraform(struct!.serial),
    status: cdktf.stringToTerraform(struct!.status),
    subject: cdktf.stringToTerraform(struct!.subject),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataThunderSlbSslCaCertOperOperSslCertsToHclTerraform(struct?: DataThunderSlbSslCaCertOperOperSslCerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_name: {
      value: cdktf.stringToHclTerraform(struct!.commonName),
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
    keysize: {
      value: cdktf.numberToHclTerraform(struct!.keysize),
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
    notafter: {
      value: cdktf.stringToHclTerraform(struct!.notafter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notafter_number: {
      value: cdktf.numberToHclTerraform(struct!.notafterNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notbefore: {
      value: cdktf.stringToHclTerraform(struct!.notbefore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
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
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSslCaCertOperOperSslCertsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbSslCaCertOperOperSslCerts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._keysize !== undefined) {
      hasAnyValues = true;
      internalValueResult.keysize = this._keysize;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notafter !== undefined) {
      hasAnyValues = true;
      internalValueResult.notafter = this._notafter;
    }
    if (this._notafterNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.notafterNumber = this._notafterNumber;
    }
    if (this._notbefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.notbefore = this._notbefore;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._serial !== undefined) {
      hasAnyValues = true;
      internalValueResult.serial = this._serial;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSslCaCertOperOperSslCerts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonName = undefined;
      this._issuer = undefined;
      this._keysize = undefined;
      this._name = undefined;
      this._notafter = undefined;
      this._notafterNumber = undefined;
      this._notbefore = undefined;
      this._organization = undefined;
      this._serial = undefined;
      this._status = undefined;
      this._subject = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonName = value.commonName;
      this._issuer = value.issuer;
      this._keysize = value.keysize;
      this._name = value.name;
      this._notafter = value.notafter;
      this._notafterNumber = value.notafterNumber;
      this._notbefore = value.notbefore;
      this._organization = value.organization;
      this._serial = value.serial;
      this._status = value.status;
      this._subject = value.subject;
      this._type = value.type;
    }
  }

  // common_name - computed: false, optional: true, required: false
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
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

  // keysize - computed: false, optional: true, required: false
  private _keysize?: number; 
  public get keysize() {
    return this.getNumberAttribute('keysize');
  }
  public set keysize(value: number) {
    this._keysize = value;
  }
  public resetKeysize() {
    this._keysize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysizeInput() {
    return this._keysize;
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

  // notafter - computed: false, optional: true, required: false
  private _notafter?: string; 
  public get notafter() {
    return this.getStringAttribute('notafter');
  }
  public set notafter(value: string) {
    this._notafter = value;
  }
  public resetNotafter() {
    this._notafter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notafterInput() {
    return this._notafter;
  }

  // notafter_number - computed: false, optional: true, required: false
  private _notafterNumber?: number; 
  public get notafterNumber() {
    return this.getNumberAttribute('notafter_number');
  }
  public set notafterNumber(value: number) {
    this._notafterNumber = value;
  }
  public resetNotafterNumber() {
    this._notafterNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notafterNumberInput() {
    return this._notafterNumber;
  }

  // notbefore - computed: false, optional: true, required: false
  private _notbefore?: string; 
  public get notbefore() {
    return this.getStringAttribute('notbefore');
  }
  public set notbefore(value: string) {
    this._notbefore = value;
  }
  public resetNotbefore() {
    this._notbefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notbeforeInput() {
    return this._notbefore;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataThunderSlbSslCaCertOperOperSslCertsList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbSslCaCertOperOperSslCerts[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbSslCaCertOperOperSslCertsOutputReference {
    return new DataThunderSlbSslCaCertOperOperSslCertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbSslCaCertOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ca_cert_oper#exact_match DataThunderSlbSslCaCertOper#exact_match}
  */
  readonly exactMatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ca_cert_oper#partition DataThunderSlbSslCaCertOper#partition}
  */
  readonly partition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ca_cert_oper#sortby_exp DataThunderSlbSslCaCertOper#sortby_exp}
  */
  readonly sortbyExp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ca_cert_oper#sortby_name DataThunderSlbSslCaCertOper#sortby_name}
  */
  readonly sortbyName?: number;
  /**
  * ssl_certs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ca_cert_oper#ssl_certs DataThunderSlbSslCaCertOper#ssl_certs}
  */
  readonly sslCerts?: DataThunderSlbSslCaCertOperOperSslCerts[] | cdktf.IResolvable;
}

export function dataThunderSlbSslCaCertOperOperToTerraform(struct?: DataThunderSlbSslCaCertOperOperOutputReference | DataThunderSlbSslCaCertOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.numberToTerraform(struct!.exactMatch),
    partition: cdktf.stringToTerraform(struct!.partition),
    sortby_exp: cdktf.numberToTerraform(struct!.sortbyExp),
    sortby_name: cdktf.numberToTerraform(struct!.sortbyName),
    ssl_certs: cdktf.listMapper(dataThunderSlbSslCaCertOperOperSslCertsToTerraform, true)(struct!.sslCerts),
  }
}


export function dataThunderSlbSslCaCertOperOperToHclTerraform(struct?: DataThunderSlbSslCaCertOperOperOutputReference | DataThunderSlbSslCaCertOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_match: {
      value: cdktf.numberToHclTerraform(struct!.exactMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    partition: {
      value: cdktf.stringToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sortby_exp: {
      value: cdktf.numberToHclTerraform(struct!.sortbyExp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sortby_name: {
      value: cdktf.numberToHclTerraform(struct!.sortbyName),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_certs: {
      value: cdktf.listMapperHcl(dataThunderSlbSslCaCertOperOperSslCertsToHclTerraform, true)(struct!.sslCerts),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbSslCaCertOperOperSslCertsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSslCaCertOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbSslCaCertOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._sortbyExp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortbyExp = this._sortbyExp;
    }
    if (this._sortbyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortbyName = this._sortbyName;
    }
    if (this._sslCerts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCerts = this._sslCerts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSslCaCertOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactMatch = undefined;
      this._partition = undefined;
      this._sortbyExp = undefined;
      this._sortbyName = undefined;
      this._sslCerts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactMatch = value.exactMatch;
      this._partition = value.partition;
      this._sortbyExp = value.sortbyExp;
      this._sortbyName = value.sortbyName;
      this._sslCerts.internalValue = value.sslCerts;
    }
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: number; 
  public get exactMatch() {
    return this.getNumberAttribute('exact_match');
  }
  public set exactMatch(value: number) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // sortby_exp - computed: false, optional: true, required: false
  private _sortbyExp?: number; 
  public get sortbyExp() {
    return this.getNumberAttribute('sortby_exp');
  }
  public set sortbyExp(value: number) {
    this._sortbyExp = value;
  }
  public resetSortbyExp() {
    this._sortbyExp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortbyExpInput() {
    return this._sortbyExp;
  }

  // sortby_name - computed: false, optional: true, required: false
  private _sortbyName?: number; 
  public get sortbyName() {
    return this.getNumberAttribute('sortby_name');
  }
  public set sortbyName(value: number) {
    this._sortbyName = value;
  }
  public resetSortbyName() {
    this._sortbyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortbyNameInput() {
    return this._sortbyName;
  }

  // ssl_certs - computed: false, optional: true, required: false
  private _sslCerts = new DataThunderSlbSslCaCertOperOperSslCertsList(this, "ssl_certs", false);
  public get sslCerts() {
    return this._sslCerts;
  }
  public putSslCerts(value: DataThunderSlbSslCaCertOperOperSslCerts[] | cdktf.IResolvable) {
    this._sslCerts.internalValue = value;
  }
  public resetSslCerts() {
    this._sslCerts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertsInput() {
    return this._sslCerts.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ca_cert_oper thunder_slb_ssl_ca_cert_oper}
*/
export class DataThunderSlbSslCaCertOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_ssl_ca_cert_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbSslCaCertOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbSslCaCertOper to import
  * @param importFromId The id of the existing DataThunderSlbSslCaCertOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ca_cert_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbSslCaCertOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_ssl_ca_cert_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ca_cert_oper thunder_slb_ssl_ca_cert_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbSslCaCertOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbSslCaCertOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_ssl_ca_cert_oper',
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
  private _oper = new DataThunderSlbSslCaCertOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbSslCaCertOperOper) {
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
      oper: dataThunderSlbSslCaCertOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbSslCaCertOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbSslCaCertOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
