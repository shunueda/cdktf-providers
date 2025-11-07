// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_acme_cert_status_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbSslAcmeCertStatusOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_acme_cert_status_oper#id DataThunderSlbSslAcmeCertStatusOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_acme_cert_status_oper#oper DataThunderSlbSslAcmeCertStatusOper#oper}
  */
  readonly oper?: DataThunderSlbSslAcmeCertStatusOperOper;
}
export interface DataThunderSlbSslAcmeCertStatusOperOperAcmeCerts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_acme_cert_status_oper#last_enroll_renew_status DataThunderSlbSslAcmeCertStatusOper#last_enroll_renew_status}
  */
  readonly lastEnrollRenewStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_acme_cert_status_oper#name DataThunderSlbSslAcmeCertStatusOper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_acme_cert_status_oper#renew DataThunderSlbSslAcmeCertStatusOper#renew}
  */
  readonly renew?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_acme_cert_status_oper#rotated DataThunderSlbSslAcmeCertStatusOper#rotated}
  */
  readonly rotated?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_acme_cert_status_oper#status DataThunderSlbSslAcmeCertStatusOper#status}
  */
  readonly status?: string;
}

export function dataThunderSlbSslAcmeCertStatusOperOperAcmeCertsToTerraform(struct?: DataThunderSlbSslAcmeCertStatusOperOperAcmeCerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    last_enroll_renew_status: cdktf.stringToTerraform(struct!.lastEnrollRenewStatus),
    name: cdktf.stringToTerraform(struct!.name),
    renew: cdktf.stringToTerraform(struct!.renew),
    rotated: cdktf.numberToTerraform(struct!.rotated),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataThunderSlbSslAcmeCertStatusOperOperAcmeCertsToHclTerraform(struct?: DataThunderSlbSslAcmeCertStatusOperOperAcmeCerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    last_enroll_renew_status: {
      value: cdktf.stringToHclTerraform(struct!.lastEnrollRenewStatus),
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
    renew: {
      value: cdktf.stringToHclTerraform(struct!.renew),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rotated: {
      value: cdktf.numberToHclTerraform(struct!.rotated),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSslAcmeCertStatusOperOperAcmeCertsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbSslAcmeCertStatusOperOperAcmeCerts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lastEnrollRenewStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastEnrollRenewStatus = this._lastEnrollRenewStatus;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._renew !== undefined) {
      hasAnyValues = true;
      internalValueResult.renew = this._renew;
    }
    if (this._rotated !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotated = this._rotated;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSslAcmeCertStatusOperOperAcmeCerts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lastEnrollRenewStatus = undefined;
      this._name = undefined;
      this._renew = undefined;
      this._rotated = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lastEnrollRenewStatus = value.lastEnrollRenewStatus;
      this._name = value.name;
      this._renew = value.renew;
      this._rotated = value.rotated;
      this._status = value.status;
    }
  }

  // last_enroll_renew_status - computed: false, optional: true, required: false
  private _lastEnrollRenewStatus?: string; 
  public get lastEnrollRenewStatus() {
    return this.getStringAttribute('last_enroll_renew_status');
  }
  public set lastEnrollRenewStatus(value: string) {
    this._lastEnrollRenewStatus = value;
  }
  public resetLastEnrollRenewStatus() {
    this._lastEnrollRenewStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastEnrollRenewStatusInput() {
    return this._lastEnrollRenewStatus;
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

  // renew - computed: false, optional: true, required: false
  private _renew?: string; 
  public get renew() {
    return this.getStringAttribute('renew');
  }
  public set renew(value: string) {
    this._renew = value;
  }
  public resetRenew() {
    this._renew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewInput() {
    return this._renew;
  }

  // rotated - computed: false, optional: true, required: false
  private _rotated?: number; 
  public get rotated() {
    return this.getNumberAttribute('rotated');
  }
  public set rotated(value: number) {
    this._rotated = value;
  }
  public resetRotated() {
    this._rotated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotatedInput() {
    return this._rotated;
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

export class DataThunderSlbSslAcmeCertStatusOperOperAcmeCertsList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbSslAcmeCertStatusOperOperAcmeCerts[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbSslAcmeCertStatusOperOperAcmeCertsOutputReference {
    return new DataThunderSlbSslAcmeCertStatusOperOperAcmeCertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbSslAcmeCertStatusOperOper {
  /**
  * acme_certs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_acme_cert_status_oper#acme_certs DataThunderSlbSslAcmeCertStatusOper#acme_certs}
  */
  readonly acmeCerts?: DataThunderSlbSslAcmeCertStatusOperOperAcmeCerts[] | cdktf.IResolvable;
}

export function dataThunderSlbSslAcmeCertStatusOperOperToTerraform(struct?: DataThunderSlbSslAcmeCertStatusOperOperOutputReference | DataThunderSlbSslAcmeCertStatusOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acme_certs: cdktf.listMapper(dataThunderSlbSslAcmeCertStatusOperOperAcmeCertsToTerraform, true)(struct!.acmeCerts),
  }
}


export function dataThunderSlbSslAcmeCertStatusOperOperToHclTerraform(struct?: DataThunderSlbSslAcmeCertStatusOperOperOutputReference | DataThunderSlbSslAcmeCertStatusOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acme_certs: {
      value: cdktf.listMapperHcl(dataThunderSlbSslAcmeCertStatusOperOperAcmeCertsToHclTerraform, true)(struct!.acmeCerts),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbSslAcmeCertStatusOperOperAcmeCertsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSslAcmeCertStatusOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbSslAcmeCertStatusOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acmeCerts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acmeCerts = this._acmeCerts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSslAcmeCertStatusOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acmeCerts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acmeCerts.internalValue = value.acmeCerts;
    }
  }

  // acme_certs - computed: false, optional: true, required: false
  private _acmeCerts = new DataThunderSlbSslAcmeCertStatusOperOperAcmeCertsList(this, "acme_certs", false);
  public get acmeCerts() {
    return this._acmeCerts;
  }
  public putAcmeCerts(value: DataThunderSlbSslAcmeCertStatusOperOperAcmeCerts[] | cdktf.IResolvable) {
    this._acmeCerts.internalValue = value;
  }
  public resetAcmeCerts() {
    this._acmeCerts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmeCertsInput() {
    return this._acmeCerts.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_acme_cert_status_oper thunder_slb_ssl_acme_cert_status_oper}
*/
export class DataThunderSlbSslAcmeCertStatusOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_ssl_acme_cert_status_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbSslAcmeCertStatusOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbSslAcmeCertStatusOper to import
  * @param importFromId The id of the existing DataThunderSlbSslAcmeCertStatusOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_acme_cert_status_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbSslAcmeCertStatusOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_ssl_acme_cert_status_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_acme_cert_status_oper thunder_slb_ssl_acme_cert_status_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbSslAcmeCertStatusOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbSslAcmeCertStatusOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_ssl_acme_cert_status_oper',
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
  private _oper = new DataThunderSlbSslAcmeCertStatusOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbSslAcmeCertStatusOperOper) {
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
      oper: dataThunderSlbSslAcmeCertStatusOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbSslAcmeCertStatusOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbSslAcmeCertStatusOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
