// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_expire_check_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbSslCertExpireCheckOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_expire_check_oper#id DataThunderSlbSslCertExpireCheckOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_expire_check_oper#oper DataThunderSlbSslCertExpireCheckOper#oper}
  */
  readonly oper?: DataThunderSlbSslCertExpireCheckOperOper;
}
export interface DataThunderSlbSslCertExpireCheckOperOperSslException {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_expire_check_oper#exception_cert DataThunderSlbSslCertExpireCheckOper#exception_cert}
  */
  readonly exceptionCert?: string;
}

export function dataThunderSlbSslCertExpireCheckOperOperSslExceptionToTerraform(struct?: DataThunderSlbSslCertExpireCheckOperOperSslException | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exception_cert: cdktf.stringToTerraform(struct!.exceptionCert),
  }
}


export function dataThunderSlbSslCertExpireCheckOperOperSslExceptionToHclTerraform(struct?: DataThunderSlbSslCertExpireCheckOperOperSslException | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exception_cert: {
      value: cdktf.stringToHclTerraform(struct!.exceptionCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSslCertExpireCheckOperOperSslExceptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbSslCertExpireCheckOperOperSslException | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exceptionCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionCert = this._exceptionCert;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSslCertExpireCheckOperOperSslException | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exceptionCert = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exceptionCert = value.exceptionCert;
    }
  }

  // exception_cert - computed: false, optional: true, required: false
  private _exceptionCert?: string; 
  public get exceptionCert() {
    return this.getStringAttribute('exception_cert');
  }
  public set exceptionCert(value: string) {
    this._exceptionCert = value;
  }
  public resetExceptionCert() {
    this._exceptionCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionCertInput() {
    return this._exceptionCert;
  }
}

export class DataThunderSlbSslCertExpireCheckOperOperSslExceptionList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbSslCertExpireCheckOperOperSslException[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbSslCertExpireCheckOperOperSslExceptionOutputReference {
    return new DataThunderSlbSslCertExpireCheckOperOperSslExceptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbSslCertExpireCheckOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_expire_check_oper#before DataThunderSlbSslCertExpireCheckOper#before}
  */
  readonly before?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_expire_check_oper#email_address DataThunderSlbSslCertExpireCheckOper#email_address}
  */
  readonly emailAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_expire_check_oper#email_address2 DataThunderSlbSslCertExpireCheckOper#email_address2}
  */
  readonly emailAddress2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_expire_check_oper#expire_check_status DataThunderSlbSslCertExpireCheckOper#expire_check_status}
  */
  readonly expireCheckStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_expire_check_oper#interval DataThunderSlbSslCertExpireCheckOper#interval}
  */
  readonly interval?: number;
  /**
  * ssl_exception block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_expire_check_oper#ssl_exception DataThunderSlbSslCertExpireCheckOper#ssl_exception}
  */
  readonly sslException?: DataThunderSlbSslCertExpireCheckOperOperSslException[] | cdktf.IResolvable;
}

export function dataThunderSlbSslCertExpireCheckOperOperToTerraform(struct?: DataThunderSlbSslCertExpireCheckOperOperOutputReference | DataThunderSlbSslCertExpireCheckOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    before: cdktf.numberToTerraform(struct!.before),
    email_address: cdktf.stringToTerraform(struct!.emailAddress),
    email_address2: cdktf.stringToTerraform(struct!.emailAddress2),
    expire_check_status: cdktf.stringToTerraform(struct!.expireCheckStatus),
    interval: cdktf.numberToTerraform(struct!.interval),
    ssl_exception: cdktf.listMapper(dataThunderSlbSslCertExpireCheckOperOperSslExceptionToTerraform, true)(struct!.sslException),
  }
}


export function dataThunderSlbSslCertExpireCheckOperOperToHclTerraform(struct?: DataThunderSlbSslCertExpireCheckOperOperOutputReference | DataThunderSlbSslCertExpireCheckOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    before: {
      value: cdktf.numberToHclTerraform(struct!.before),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    email_address: {
      value: cdktf.stringToHclTerraform(struct!.emailAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_address2: {
      value: cdktf.stringToHclTerraform(struct!.emailAddress2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expire_check_status: {
      value: cdktf.stringToHclTerraform(struct!.expireCheckStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_exception: {
      value: cdktf.listMapperHcl(dataThunderSlbSslCertExpireCheckOperOperSslExceptionToHclTerraform, true)(struct!.sslException),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbSslCertExpireCheckOperOperSslExceptionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSslCertExpireCheckOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbSslCertExpireCheckOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._before !== undefined) {
      hasAnyValues = true;
      internalValueResult.before = this._before;
    }
    if (this._emailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddress = this._emailAddress;
    }
    if (this._emailAddress2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddress2 = this._emailAddress2;
    }
    if (this._expireCheckStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.expireCheckStatus = this._expireCheckStatus;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._sslException?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslException = this._sslException?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSslCertExpireCheckOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._before = undefined;
      this._emailAddress = undefined;
      this._emailAddress2 = undefined;
      this._expireCheckStatus = undefined;
      this._interval = undefined;
      this._sslException.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._before = value.before;
      this._emailAddress = value.emailAddress;
      this._emailAddress2 = value.emailAddress2;
      this._expireCheckStatus = value.expireCheckStatus;
      this._interval = value.interval;
      this._sslException.internalValue = value.sslException;
    }
  }

  // before - computed: false, optional: true, required: false
  private _before?: number; 
  public get before() {
    return this.getNumberAttribute('before');
  }
  public set before(value: number) {
    this._before = value;
  }
  public resetBefore() {
    this._before = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeInput() {
    return this._before;
  }

  // email_address - computed: false, optional: true, required: false
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  public resetEmailAddress() {
    this._emailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // email_address2 - computed: false, optional: true, required: false
  private _emailAddress2?: string; 
  public get emailAddress2() {
    return this.getStringAttribute('email_address2');
  }
  public set emailAddress2(value: string) {
    this._emailAddress2 = value;
  }
  public resetEmailAddress2() {
    this._emailAddress2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddress2Input() {
    return this._emailAddress2;
  }

  // expire_check_status - computed: false, optional: true, required: false
  private _expireCheckStatus?: string; 
  public get expireCheckStatus() {
    return this.getStringAttribute('expire_check_status');
  }
  public set expireCheckStatus(value: string) {
    this._expireCheckStatus = value;
  }
  public resetExpireCheckStatus() {
    this._expireCheckStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireCheckStatusInput() {
    return this._expireCheckStatus;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // ssl_exception - computed: false, optional: true, required: false
  private _sslException = new DataThunderSlbSslCertExpireCheckOperOperSslExceptionList(this, "ssl_exception", false);
  public get sslException() {
    return this._sslException;
  }
  public putSslException(value: DataThunderSlbSslCertExpireCheckOperOperSslException[] | cdktf.IResolvable) {
    this._sslException.internalValue = value;
  }
  public resetSslException() {
    this._sslException.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslExceptionInput() {
    return this._sslException.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_expire_check_oper thunder_slb_ssl_cert_expire_check_oper}
*/
export class DataThunderSlbSslCertExpireCheckOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_ssl_cert_expire_check_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbSslCertExpireCheckOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbSslCertExpireCheckOper to import
  * @param importFromId The id of the existing DataThunderSlbSslCertExpireCheckOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_expire_check_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbSslCertExpireCheckOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_ssl_cert_expire_check_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_cert_expire_check_oper thunder_slb_ssl_cert_expire_check_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbSslCertExpireCheckOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbSslCertExpireCheckOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_ssl_cert_expire_check_oper',
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
  private _oper = new DataThunderSlbSslCertExpireCheckOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbSslCertExpireCheckOperOper) {
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
      oper: dataThunderSlbSslCertExpireCheckOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbSslCertExpireCheckOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbSslCertExpireCheckOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
