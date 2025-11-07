// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_ssl_expire_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbSslExpireCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * The number of days in advance notice before expiration, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_ssl_expire_check#before SlbSslExpireCheck#before}
  */
  readonly before?: number;
  /**
  * Email address for certificate expiration check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_ssl_expire_check#expire_address1 SlbSslExpireCheck#expire_address1}
  */
  readonly expireAddress1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_ssl_expire_check#id SlbSslExpireCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The interval of days notice after expiration, default is 2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_ssl_expire_check#interval_days SlbSslExpireCheck#interval_days}
  */
  readonly intervalDays?: number;
  /**
  * Config Email address for certificate expiration check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_ssl_expire_check#ssl_expire_email_address SlbSslExpireCheck#ssl_expire_email_address}
  */
  readonly sslExpireEmailAddress?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_ssl_expire_check#uuid SlbSslExpireCheck#uuid}
  */
  readonly uuid?: string;
  /**
  * exception block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_ssl_expire_check#exception SlbSslExpireCheck#exception}
  */
  readonly exception?: SlbSslExpireCheckException;
}
export interface SlbSslExpireCheckException {
  /**
  * 'add': Add an exception; 'delete': Delete an exception; 'clean': Delete all exception;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_ssl_expire_check#action SlbSslExpireCheck#action}
  */
  readonly action?: string;
  /**
  * The certificate name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_ssl_expire_check#certificate_name SlbSslExpireCheck#certificate_name}
  */
  readonly certificateName?: string;
}

export function slbSslExpireCheckExceptionToTerraform(struct?: SlbSslExpireCheckExceptionOutputReference | SlbSslExpireCheckException): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    certificate_name: cdktf.stringToTerraform(struct!.certificateName),
  }
}


export function slbSslExpireCheckExceptionToHclTerraform(struct?: SlbSslExpireCheckExceptionOutputReference | SlbSslExpireCheckException): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_name: {
      value: cdktf.stringToHclTerraform(struct!.certificateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbSslExpireCheckExceptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbSslExpireCheckException | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._certificateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateName = this._certificateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbSslExpireCheckException | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._certificateName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._certificateName = value.certificateName;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // certificate_name - computed: false, optional: true, required: false
  private _certificateName?: string; 
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }
  public set certificateName(value: string) {
    this._certificateName = value;
  }
  public resetCertificateName() {
    this._certificateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateNameInput() {
    return this._certificateName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_ssl_expire_check thunder_slb_ssl_expire_check}
*/
export class SlbSslExpireCheck extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_ssl_expire_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbSslExpireCheck resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbSslExpireCheck to import
  * @param importFromId The id of the existing SlbSslExpireCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_ssl_expire_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbSslExpireCheck to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_ssl_expire_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_ssl_expire_check thunder_slb_ssl_expire_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbSslExpireCheckConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SlbSslExpireCheckConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_ssl_expire_check',
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
    this._before = config.before;
    this._expireAddress1 = config.expireAddress1;
    this._id = config.id;
    this._intervalDays = config.intervalDays;
    this._sslExpireEmailAddress = config.sslExpireEmailAddress;
    this._uuid = config.uuid;
    this._exception.internalValue = config.exception;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // expire_address1 - computed: false, optional: true, required: false
  private _expireAddress1?: string; 
  public get expireAddress1() {
    return this.getStringAttribute('expire_address1');
  }
  public set expireAddress1(value: string) {
    this._expireAddress1 = value;
  }
  public resetExpireAddress1() {
    this._expireAddress1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireAddress1Input() {
    return this._expireAddress1;
  }

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

  // interval_days - computed: false, optional: true, required: false
  private _intervalDays?: number; 
  public get intervalDays() {
    return this.getNumberAttribute('interval_days');
  }
  public set intervalDays(value: number) {
    this._intervalDays = value;
  }
  public resetIntervalDays() {
    this._intervalDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalDaysInput() {
    return this._intervalDays;
  }

  // ssl_expire_email_address - computed: false, optional: true, required: false
  private _sslExpireEmailAddress?: string; 
  public get sslExpireEmailAddress() {
    return this.getStringAttribute('ssl_expire_email_address');
  }
  public set sslExpireEmailAddress(value: string) {
    this._sslExpireEmailAddress = value;
  }
  public resetSslExpireEmailAddress() {
    this._sslExpireEmailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslExpireEmailAddressInput() {
    return this._sslExpireEmailAddress;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // exception - computed: false, optional: true, required: false
  private _exception = new SlbSslExpireCheckExceptionOutputReference(this, "exception");
  public get exception() {
    return this._exception;
  }
  public putException(value: SlbSslExpireCheckException) {
    this._exception.internalValue = value;
  }
  public resetException() {
    this._exception.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionInput() {
    return this._exception.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      before: cdktf.numberToTerraform(this._before),
      expire_address1: cdktf.stringToTerraform(this._expireAddress1),
      id: cdktf.stringToTerraform(this._id),
      interval_days: cdktf.numberToTerraform(this._intervalDays),
      ssl_expire_email_address: cdktf.stringToTerraform(this._sslExpireEmailAddress),
      uuid: cdktf.stringToTerraform(this._uuid),
      exception: slbSslExpireCheckExceptionToTerraform(this._exception.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      before: {
        value: cdktf.numberToHclTerraform(this._before),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      expire_address1: {
        value: cdktf.stringToHclTerraform(this._expireAddress1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval_days: {
        value: cdktf.numberToHclTerraform(this._intervalDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_expire_email_address: {
        value: cdktf.stringToHclTerraform(this._sslExpireEmailAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exception: {
        value: slbSslExpireCheckExceptionToHclTerraform(this._exception.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbSslExpireCheckExceptionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
