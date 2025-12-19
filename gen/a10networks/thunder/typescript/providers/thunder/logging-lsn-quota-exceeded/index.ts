// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/logging_lsn_quota_exceeded
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoggingLsnQuotaExceededConfig extends cdktf.TerraformMetaArguments {
  /**
  * Customized attribute No.1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/logging_lsn_quota_exceeded#custom1 LoggingLsnQuotaExceeded#custom1}
  */
  readonly custom1?: number;
  /**
  * Customized attribute No.2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/logging_lsn_quota_exceeded#custom2 LoggingLsnQuotaExceeded#custom2}
  */
  readonly custom2?: number;
  /**
  * Customized attribute No.3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/logging_lsn_quota_exceeded#custom3 LoggingLsnQuotaExceeded#custom3}
  */
  readonly custom3?: number;
  /**
  * Customized attribute No.4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/logging_lsn_quota_exceeded#custom4 LoggingLsnQuotaExceeded#custom4}
  */
  readonly custom4?: number;
  /**
  * Customized attribute No.5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/logging_lsn_quota_exceeded#custom5 LoggingLsnQuotaExceeded#custom5}
  */
  readonly custom5?: number;
  /**
  * Customized attribute No.6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/logging_lsn_quota_exceeded#custom6 LoggingLsnQuotaExceeded#custom6}
  */
  readonly custom6?: number;
  /**
  * Disable log LSN user quota exceeded based on LSN pool(Default: enabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/logging_lsn_quota_exceeded#disable_pool_based LoggingLsnQuotaExceeded#disable_pool_based}
  */
  readonly disablePoolBased?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/logging_lsn_quota_exceeded#id LoggingLsnQuotaExceeded#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * International Mobile Equipment Identity (IMEI)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/logging_lsn_quota_exceeded#imei LoggingLsnQuotaExceeded#imei}
  */
  readonly imei?: number;
  /**
  * International Mobile Subscriber Identity (IMSI)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/logging_lsn_quota_exceeded#imsi LoggingLsnQuotaExceeded#imsi}
  */
  readonly imsi?: number;
  /**
  * Log LSN user quota exceeded based on private IP(Default: disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/logging_lsn_quota_exceeded#ip_based LoggingLsnQuotaExceeded#ip_based}
  */
  readonly ipBased?: number;
  /**
  * Mobile Subscriber Integrated Services Digital Netwrok-Number (MSISDN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/logging_lsn_quota_exceeded#msisdn LoggingLsnQuotaExceeded#msisdn}
  */
  readonly msisdn?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/logging_lsn_quota_exceeded#uuid LoggingLsnQuotaExceeded#uuid}
  */
  readonly uuid?: string;
  /**
  * Log with radius attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/logging_lsn_quota_exceeded#with_radius_attribute LoggingLsnQuotaExceeded#with_radius_attribute}
  */
  readonly withRadiusAttribute?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/logging_lsn_quota_exceeded thunder_logging_lsn_quota_exceeded}
*/
export class LoggingLsnQuotaExceeded extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_logging_lsn_quota_exceeded";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoggingLsnQuotaExceeded resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoggingLsnQuotaExceeded to import
  * @param importFromId The id of the existing LoggingLsnQuotaExceeded that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/logging_lsn_quota_exceeded#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoggingLsnQuotaExceeded to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_logging_lsn_quota_exceeded", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/logging_lsn_quota_exceeded thunder_logging_lsn_quota_exceeded} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoggingLsnQuotaExceededConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LoggingLsnQuotaExceededConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_logging_lsn_quota_exceeded',
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
    this._custom1 = config.custom1;
    this._custom2 = config.custom2;
    this._custom3 = config.custom3;
    this._custom4 = config.custom4;
    this._custom5 = config.custom5;
    this._custom6 = config.custom6;
    this._disablePoolBased = config.disablePoolBased;
    this._id = config.id;
    this._imei = config.imei;
    this._imsi = config.imsi;
    this._ipBased = config.ipBased;
    this._msisdn = config.msisdn;
    this._uuid = config.uuid;
    this._withRadiusAttribute = config.withRadiusAttribute;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom1 - computed: false, optional: true, required: false
  private _custom1?: number; 
  public get custom1() {
    return this.getNumberAttribute('custom1');
  }
  public set custom1(value: number) {
    this._custom1 = value;
  }
  public resetCustom1() {
    this._custom1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom1Input() {
    return this._custom1;
  }

  // custom2 - computed: false, optional: true, required: false
  private _custom2?: number; 
  public get custom2() {
    return this.getNumberAttribute('custom2');
  }
  public set custom2(value: number) {
    this._custom2 = value;
  }
  public resetCustom2() {
    this._custom2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom2Input() {
    return this._custom2;
  }

  // custom3 - computed: false, optional: true, required: false
  private _custom3?: number; 
  public get custom3() {
    return this.getNumberAttribute('custom3');
  }
  public set custom3(value: number) {
    this._custom3 = value;
  }
  public resetCustom3() {
    this._custom3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom3Input() {
    return this._custom3;
  }

  // custom4 - computed: false, optional: true, required: false
  private _custom4?: number; 
  public get custom4() {
    return this.getNumberAttribute('custom4');
  }
  public set custom4(value: number) {
    this._custom4 = value;
  }
  public resetCustom4() {
    this._custom4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom4Input() {
    return this._custom4;
  }

  // custom5 - computed: false, optional: true, required: false
  private _custom5?: number; 
  public get custom5() {
    return this.getNumberAttribute('custom5');
  }
  public set custom5(value: number) {
    this._custom5 = value;
  }
  public resetCustom5() {
    this._custom5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom5Input() {
    return this._custom5;
  }

  // custom6 - computed: false, optional: true, required: false
  private _custom6?: number; 
  public get custom6() {
    return this.getNumberAttribute('custom6');
  }
  public set custom6(value: number) {
    this._custom6 = value;
  }
  public resetCustom6() {
    this._custom6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom6Input() {
    return this._custom6;
  }

  // disable_pool_based - computed: false, optional: true, required: false
  private _disablePoolBased?: number; 
  public get disablePoolBased() {
    return this.getNumberAttribute('disable_pool_based');
  }
  public set disablePoolBased(value: number) {
    this._disablePoolBased = value;
  }
  public resetDisablePoolBased() {
    this._disablePoolBased = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePoolBasedInput() {
    return this._disablePoolBased;
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

  // imei - computed: false, optional: true, required: false
  private _imei?: number; 
  public get imei() {
    return this.getNumberAttribute('imei');
  }
  public set imei(value: number) {
    this._imei = value;
  }
  public resetImei() {
    this._imei = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imeiInput() {
    return this._imei;
  }

  // imsi - computed: false, optional: true, required: false
  private _imsi?: number; 
  public get imsi() {
    return this.getNumberAttribute('imsi');
  }
  public set imsi(value: number) {
    this._imsi = value;
  }
  public resetImsi() {
    this._imsi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imsiInput() {
    return this._imsi;
  }

  // ip_based - computed: false, optional: true, required: false
  private _ipBased?: number; 
  public get ipBased() {
    return this.getNumberAttribute('ip_based');
  }
  public set ipBased(value: number) {
    this._ipBased = value;
  }
  public resetIpBased() {
    this._ipBased = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipBasedInput() {
    return this._ipBased;
  }

  // msisdn - computed: false, optional: true, required: false
  private _msisdn?: number; 
  public get msisdn() {
    return this.getNumberAttribute('msisdn');
  }
  public set msisdn(value: number) {
    this._msisdn = value;
  }
  public resetMsisdn() {
    this._msisdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msisdnInput() {
    return this._msisdn;
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

  // with_radius_attribute - computed: false, optional: true, required: false
  private _withRadiusAttribute?: number; 
  public get withRadiusAttribute() {
    return this.getNumberAttribute('with_radius_attribute');
  }
  public set withRadiusAttribute(value: number) {
    this._withRadiusAttribute = value;
  }
  public resetWithRadiusAttribute() {
    this._withRadiusAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withRadiusAttributeInput() {
    return this._withRadiusAttribute;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom1: cdktf.numberToTerraform(this._custom1),
      custom2: cdktf.numberToTerraform(this._custom2),
      custom3: cdktf.numberToTerraform(this._custom3),
      custom4: cdktf.numberToTerraform(this._custom4),
      custom5: cdktf.numberToTerraform(this._custom5),
      custom6: cdktf.numberToTerraform(this._custom6),
      disable_pool_based: cdktf.numberToTerraform(this._disablePoolBased),
      id: cdktf.stringToTerraform(this._id),
      imei: cdktf.numberToTerraform(this._imei),
      imsi: cdktf.numberToTerraform(this._imsi),
      ip_based: cdktf.numberToTerraform(this._ipBased),
      msisdn: cdktf.numberToTerraform(this._msisdn),
      uuid: cdktf.stringToTerraform(this._uuid),
      with_radius_attribute: cdktf.numberToTerraform(this._withRadiusAttribute),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom1: {
        value: cdktf.numberToHclTerraform(this._custom1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom2: {
        value: cdktf.numberToHclTerraform(this._custom2),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom3: {
        value: cdktf.numberToHclTerraform(this._custom3),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom4: {
        value: cdktf.numberToHclTerraform(this._custom4),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom5: {
        value: cdktf.numberToHclTerraform(this._custom5),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom6: {
        value: cdktf.numberToHclTerraform(this._custom6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_pool_based: {
        value: cdktf.numberToHclTerraform(this._disablePoolBased),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      imei: {
        value: cdktf.numberToHclTerraform(this._imei),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      imsi: {
        value: cdktf.numberToHclTerraform(this._imsi),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_based: {
        value: cdktf.numberToHclTerraform(this._ipBased),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      msisdn: {
        value: cdktf.numberToHclTerraform(this._msisdn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      with_radius_attribute: {
        value: cdktf.numberToHclTerraform(this._withRadiusAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
