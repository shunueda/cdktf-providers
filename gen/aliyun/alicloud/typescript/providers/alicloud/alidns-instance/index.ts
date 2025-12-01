// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alidns_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlidnsInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alidns_instance#dns_security AlidnsInstance#dns_security}
  */
  readonly dnsSecurity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alidns_instance#domain_numbers AlidnsInstance#domain_numbers}
  */
  readonly domainNumbers: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alidns_instance#id AlidnsInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alidns_instance#payment_type AlidnsInstance#payment_type}
  */
  readonly paymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alidns_instance#period AlidnsInstance#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alidns_instance#renew_period AlidnsInstance#renew_period}
  */
  readonly renewPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alidns_instance#renewal_status AlidnsInstance#renewal_status}
  */
  readonly renewalStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alidns_instance#version_code AlidnsInstance#version_code}
  */
  readonly versionCode: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alidns_instance alicloud_alidns_instance}
*/
export class AlidnsInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_alidns_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlidnsInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlidnsInstance to import
  * @param importFromId The id of the existing AlidnsInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alidns_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlidnsInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_alidns_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alidns_instance alicloud_alidns_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlidnsInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: AlidnsInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_alidns_instance',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dnsSecurity = config.dnsSecurity;
    this._domainNumbers = config.domainNumbers;
    this._id = config.id;
    this._paymentType = config.paymentType;
    this._period = config.period;
    this._renewPeriod = config.renewPeriod;
    this._renewalStatus = config.renewalStatus;
    this._versionCode = config.versionCode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_security - computed: false, optional: false, required: true
  private _dnsSecurity?: string; 
  public get dnsSecurity() {
    return this.getStringAttribute('dns_security');
  }
  public set dnsSecurity(value: string) {
    this._dnsSecurity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSecurityInput() {
    return this._dnsSecurity;
  }

  // domain_numbers - computed: false, optional: false, required: true
  private _domainNumbers?: string; 
  public get domainNumbers() {
    return this.getStringAttribute('domain_numbers');
  }
  public set domainNumbers(value: string) {
    this._domainNumbers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNumbersInput() {
    return this._domainNumbers;
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

  // payment_type - computed: false, optional: true, required: false
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  public resetPaymentType() {
    this._paymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // renew_period - computed: false, optional: true, required: false
  private _renewPeriod?: number; 
  public get renewPeriod() {
    return this.getNumberAttribute('renew_period');
  }
  public set renewPeriod(value: number) {
    this._renewPeriod = value;
  }
  public resetRenewPeriod() {
    this._renewPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewPeriodInput() {
    return this._renewPeriod;
  }

  // renewal_status - computed: true, optional: true, required: false
  private _renewalStatus?: string; 
  public get renewalStatus() {
    return this.getStringAttribute('renewal_status');
  }
  public set renewalStatus(value: string) {
    this._renewalStatus = value;
  }
  public resetRenewalStatus() {
    this._renewalStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewalStatusInput() {
    return this._renewalStatus;
  }

  // version_code - computed: false, optional: false, required: true
  private _versionCode?: string; 
  public get versionCode() {
    return this.getStringAttribute('version_code');
  }
  public set versionCode(value: string) {
    this._versionCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionCodeInput() {
    return this._versionCode;
  }

  // version_name - computed: true, optional: false, required: false
  public get versionName() {
    return this.getStringAttribute('version_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_security: cdktf.stringToTerraform(this._dnsSecurity),
      domain_numbers: cdktf.stringToTerraform(this._domainNumbers),
      id: cdktf.stringToTerraform(this._id),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      period: cdktf.numberToTerraform(this._period),
      renew_period: cdktf.numberToTerraform(this._renewPeriod),
      renewal_status: cdktf.stringToTerraform(this._renewalStatus),
      version_code: cdktf.stringToTerraform(this._versionCode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_security: {
        value: cdktf.stringToHclTerraform(this._dnsSecurity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_numbers: {
        value: cdktf.stringToHclTerraform(this._domainNumbers),
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
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      renew_period: {
        value: cdktf.numberToHclTerraform(this._renewPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      renewal_status: {
        value: cdktf.stringToHclTerraform(this._renewalStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_code: {
        value: cdktf.stringToHclTerraform(this._versionCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
