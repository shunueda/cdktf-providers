// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sddp_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SddpInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sddp_instance#dataphin SddpInstance#dataphin}
  */
  readonly dataphin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sddp_instance#dataphin_count SddpInstance#dataphin_count}
  */
  readonly dataphinCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sddp_instance#id SddpInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sddp_instance#logistics SddpInstance#logistics}
  */
  readonly logistics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sddp_instance#modify_type SddpInstance#modify_type}
  */
  readonly modifyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sddp_instance#oss_size SddpInstance#oss_size}
  */
  readonly ossSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sddp_instance#payment_type SddpInstance#payment_type}
  */
  readonly paymentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sddp_instance#period SddpInstance#period}
  */
  readonly period: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sddp_instance#renew_period SddpInstance#renew_period}
  */
  readonly renewPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sddp_instance#renewal_status SddpInstance#renewal_status}
  */
  readonly renewalStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sddp_instance#sd_cbool SddpInstance#sd_cbool}
  */
  readonly sdCbool: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sddp_instance#sdc SddpInstance#sdc}
  */
  readonly sdc: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sddp_instance#sddp_version SddpInstance#sddp_version}
  */
  readonly sddpVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sddp_instance#ud_cbool SddpInstance#ud_cbool}
  */
  readonly udCbool: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sddp_instance#udc SddpInstance#udc}
  */
  readonly udc: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sddp_instance alicloud_sddp_instance}
*/
export class SddpInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_sddp_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SddpInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SddpInstance to import
  * @param importFromId The id of the existing SddpInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sddp_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SddpInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_sddp_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/sddp_instance alicloud_sddp_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SddpInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: SddpInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_sddp_instance',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataphin = config.dataphin;
    this._dataphinCount = config.dataphinCount;
    this._id = config.id;
    this._logistics = config.logistics;
    this._modifyType = config.modifyType;
    this._ossSize = config.ossSize;
    this._paymentType = config.paymentType;
    this._period = config.period;
    this._renewPeriod = config.renewPeriod;
    this._renewalStatus = config.renewalStatus;
    this._sdCbool = config.sdCbool;
    this._sdc = config.sdc;
    this._sddpVersion = config.sddpVersion;
    this._udCbool = config.udCbool;
    this._udc = config.udc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authed - computed: true, optional: false, required: false
  public get authed() {
    return this.getBooleanAttribute('authed');
  }

  // dataphin - computed: false, optional: true, required: false
  private _dataphin?: string; 
  public get dataphin() {
    return this.getStringAttribute('dataphin');
  }
  public set dataphin(value: string) {
    this._dataphin = value;
  }
  public resetDataphin() {
    this._dataphin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataphinInput() {
    return this._dataphin;
  }

  // dataphin_count - computed: false, optional: true, required: false
  private _dataphinCount?: string; 
  public get dataphinCount() {
    return this.getStringAttribute('dataphin_count');
  }
  public set dataphinCount(value: string) {
    this._dataphinCount = value;
  }
  public resetDataphinCount() {
    this._dataphinCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataphinCountInput() {
    return this._dataphinCount;
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

  // instance_num - computed: true, optional: false, required: false
  public get instanceNum() {
    return this.getStringAttribute('instance_num');
  }

  // logistics - computed: false, optional: true, required: false
  private _logistics?: string; 
  public get logistics() {
    return this.getStringAttribute('logistics');
  }
  public set logistics(value: string) {
    this._logistics = value;
  }
  public resetLogistics() {
    this._logistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logisticsInput() {
    return this._logistics;
  }

  // modify_type - computed: false, optional: true, required: false
  private _modifyType?: string; 
  public get modifyType() {
    return this.getStringAttribute('modify_type');
  }
  public set modifyType(value: string) {
    this._modifyType = value;
  }
  public resetModifyType() {
    this._modifyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyTypeInput() {
    return this._modifyType;
  }

  // odps_set - computed: true, optional: false, required: false
  public get odpsSet() {
    return this.getBooleanAttribute('odps_set');
  }

  // oss_bucket_set - computed: true, optional: false, required: false
  public get ossBucketSet() {
    return this.getBooleanAttribute('oss_bucket_set');
  }

  // oss_size - computed: true, optional: true, required: false
  private _ossSize?: string; 
  public get ossSize() {
    return this.getStringAttribute('oss_size');
  }
  public set ossSize(value: string) {
    this._ossSize = value;
  }
  public resetOssSize() {
    this._ossSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ossSizeInput() {
    return this._ossSize;
  }

  // payment_type - computed: false, optional: false, required: true
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
  }

  // period - computed: false, optional: false, required: true
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // rds_set - computed: true, optional: false, required: false
  public get rdsSet() {
    return this.getBooleanAttribute('rds_set');
  }

  // remain_days - computed: true, optional: false, required: false
  public get remainDays() {
    return this.getStringAttribute('remain_days');
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

  // sd_cbool - computed: false, optional: false, required: true
  private _sdCbool?: string; 
  public get sdCbool() {
    return this.getStringAttribute('sd_cbool');
  }
  public set sdCbool(value: string) {
    this._sdCbool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sdCboolInput() {
    return this._sdCbool;
  }

  // sdc - computed: false, optional: false, required: true
  private _sdc?: string; 
  public get sdc() {
    return this.getStringAttribute('sdc');
  }
  public set sdc(value: string) {
    this._sdc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sdcInput() {
    return this._sdc;
  }

  // sddp_version - computed: false, optional: false, required: true
  private _sddpVersion?: string; 
  public get sddpVersion() {
    return this.getStringAttribute('sddp_version');
  }
  public set sddpVersion(value: string) {
    this._sddpVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sddpVersionInput() {
    return this._sddpVersion;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // ud_cbool - computed: false, optional: false, required: true
  private _udCbool?: string; 
  public get udCbool() {
    return this.getStringAttribute('ud_cbool');
  }
  public set udCbool(value: string) {
    this._udCbool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get udCboolInput() {
    return this._udCbool;
  }

  // udc - computed: false, optional: false, required: true
  private _udc?: string; 
  public get udc() {
    return this.getStringAttribute('udc');
  }
  public set udc(value: string) {
    this._udc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get udcInput() {
    return this._udc;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dataphin: cdktf.stringToTerraform(this._dataphin),
      dataphin_count: cdktf.stringToTerraform(this._dataphinCount),
      id: cdktf.stringToTerraform(this._id),
      logistics: cdktf.stringToTerraform(this._logistics),
      modify_type: cdktf.stringToTerraform(this._modifyType),
      oss_size: cdktf.stringToTerraform(this._ossSize),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      period: cdktf.numberToTerraform(this._period),
      renew_period: cdktf.numberToTerraform(this._renewPeriod),
      renewal_status: cdktf.stringToTerraform(this._renewalStatus),
      sd_cbool: cdktf.stringToTerraform(this._sdCbool),
      sdc: cdktf.stringToTerraform(this._sdc),
      sddp_version: cdktf.stringToTerraform(this._sddpVersion),
      ud_cbool: cdktf.stringToTerraform(this._udCbool),
      udc: cdktf.stringToTerraform(this._udc),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dataphin: {
        value: cdktf.stringToHclTerraform(this._dataphin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dataphin_count: {
        value: cdktf.stringToHclTerraform(this._dataphinCount),
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
      logistics: {
        value: cdktf.stringToHclTerraform(this._logistics),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modify_type: {
        value: cdktf.stringToHclTerraform(this._modifyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oss_size: {
        value: cdktf.stringToHclTerraform(this._ossSize),
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
      sd_cbool: {
        value: cdktf.stringToHclTerraform(this._sdCbool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdc: {
        value: cdktf.stringToHclTerraform(this._sdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sddp_version: {
        value: cdktf.stringToHclTerraform(this._sddpVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ud_cbool: {
        value: cdktf.stringToHclTerraform(this._udCbool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udc: {
        value: cdktf.stringToHclTerraform(this._udc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
