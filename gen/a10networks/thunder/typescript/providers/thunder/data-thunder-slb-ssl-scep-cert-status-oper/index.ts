// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_scep_cert_status_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbSslScepCertStatusOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_scep_cert_status_oper#id DataThunderSlbSslScepCertStatusOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_scep_cert_status_oper#oper DataThunderSlbSslScepCertStatusOper#oper}
  */
  readonly oper?: DataThunderSlbSslScepCertStatusOperOper;
}
export interface DataThunderSlbSslScepCertStatusOperOperScepCerts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_scep_cert_status_oper#name DataThunderSlbSslScepCertStatusOper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_scep_cert_status_oper#renew DataThunderSlbSslScepCertStatusOper#renew}
  */
  readonly renew?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_scep_cert_status_oper#rotated DataThunderSlbSslScepCertStatusOper#rotated}
  */
  readonly rotated?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_scep_cert_status_oper#status DataThunderSlbSslScepCertStatusOper#status}
  */
  readonly status?: string;
}

export function dataThunderSlbSslScepCertStatusOperOperScepCertsToTerraform(struct?: DataThunderSlbSslScepCertStatusOperOperScepCerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    renew: cdktf.stringToTerraform(struct!.renew),
    rotated: cdktf.numberToTerraform(struct!.rotated),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataThunderSlbSslScepCertStatusOperOperScepCertsToHclTerraform(struct?: DataThunderSlbSslScepCertStatusOperOperScepCerts | cdktf.IResolvable): any {
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

export class DataThunderSlbSslScepCertStatusOperOperScepCertsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbSslScepCertStatusOperOperScepCerts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataThunderSlbSslScepCertStatusOperOperScepCerts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._renew = value.renew;
      this._rotated = value.rotated;
      this._status = value.status;
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

export class DataThunderSlbSslScepCertStatusOperOperScepCertsList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbSslScepCertStatusOperOperScepCerts[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbSslScepCertStatusOperOperScepCertsOutputReference {
    return new DataThunderSlbSslScepCertStatusOperOperScepCertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbSslScepCertStatusOperOper {
  /**
  * scep_certs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_scep_cert_status_oper#scep_certs DataThunderSlbSslScepCertStatusOper#scep_certs}
  */
  readonly scepCerts?: DataThunderSlbSslScepCertStatusOperOperScepCerts[] | cdktf.IResolvable;
}

export function dataThunderSlbSslScepCertStatusOperOperToTerraform(struct?: DataThunderSlbSslScepCertStatusOperOperOutputReference | DataThunderSlbSslScepCertStatusOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scep_certs: cdktf.listMapper(dataThunderSlbSslScepCertStatusOperOperScepCertsToTerraform, true)(struct!.scepCerts),
  }
}


export function dataThunderSlbSslScepCertStatusOperOperToHclTerraform(struct?: DataThunderSlbSslScepCertStatusOperOperOutputReference | DataThunderSlbSslScepCertStatusOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scep_certs: {
      value: cdktf.listMapperHcl(dataThunderSlbSslScepCertStatusOperOperScepCertsToHclTerraform, true)(struct!.scepCerts),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbSslScepCertStatusOperOperScepCertsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSslScepCertStatusOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbSslScepCertStatusOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scepCerts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scepCerts = this._scepCerts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSslScepCertStatusOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scepCerts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scepCerts.internalValue = value.scepCerts;
    }
  }

  // scep_certs - computed: false, optional: true, required: false
  private _scepCerts = new DataThunderSlbSslScepCertStatusOperOperScepCertsList(this, "scep_certs", false);
  public get scepCerts() {
    return this._scepCerts;
  }
  public putScepCerts(value: DataThunderSlbSslScepCertStatusOperOperScepCerts[] | cdktf.IResolvable) {
    this._scepCerts.internalValue = value;
  }
  public resetScepCerts() {
    this._scepCerts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scepCertsInput() {
    return this._scepCerts.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_scep_cert_status_oper thunder_slb_ssl_scep_cert_status_oper}
*/
export class DataThunderSlbSslScepCertStatusOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_ssl_scep_cert_status_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbSslScepCertStatusOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbSslScepCertStatusOper to import
  * @param importFromId The id of the existing DataThunderSlbSslScepCertStatusOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_scep_cert_status_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbSslScepCertStatusOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_ssl_scep_cert_status_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_scep_cert_status_oper thunder_slb_ssl_scep_cert_status_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbSslScepCertStatusOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbSslScepCertStatusOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_ssl_scep_cert_status_oper',
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
  private _oper = new DataThunderSlbSslScepCertStatusOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbSslScepCertStatusOperOper) {
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
      oper: dataThunderSlbSslScepCertStatusOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbSslScepCertStatusOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbSslScepCertStatusOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
