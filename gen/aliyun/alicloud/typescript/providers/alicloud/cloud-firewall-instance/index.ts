// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudFirewallInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_instance#account_number CloudFirewallInstance#account_number}
  */
  readonly accountNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_instance#band_width CloudFirewallInstance#band_width}
  */
  readonly bandWidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_instance#cfw_account CloudFirewallInstance#cfw_account}
  */
  readonly cfwAccount?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_instance#cfw_log CloudFirewallInstance#cfw_log}
  */
  readonly cfwLog?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_instance#cfw_log_storage CloudFirewallInstance#cfw_log_storage}
  */
  readonly cfwLogStorage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_instance#cfw_service CloudFirewallInstance#cfw_service}
  */
  readonly cfwService?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_instance#fw_vpc_number CloudFirewallInstance#fw_vpc_number}
  */
  readonly fwVpcNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_instance#id CloudFirewallInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_instance#instance_count CloudFirewallInstance#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_instance#ip_number CloudFirewallInstance#ip_number}
  */
  readonly ipNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_instance#logistics CloudFirewallInstance#logistics}
  */
  readonly logistics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_instance#modify_type CloudFirewallInstance#modify_type}
  */
  readonly modifyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_instance#payment_type CloudFirewallInstance#payment_type}
  */
  readonly paymentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_instance#period CloudFirewallInstance#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_instance#renew_period CloudFirewallInstance#renew_period}
  */
  readonly renewPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_instance#renewal_duration CloudFirewallInstance#renewal_duration}
  */
  readonly renewalDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_instance#renewal_duration_unit CloudFirewallInstance#renewal_duration_unit}
  */
  readonly renewalDurationUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_instance#renewal_status CloudFirewallInstance#renewal_status}
  */
  readonly renewalStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_instance#spec CloudFirewallInstance#spec}
  */
  readonly spec?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_instance alicloud_cloud_firewall_instance}
*/
export class CloudFirewallInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cloud_firewall_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudFirewallInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudFirewallInstance to import
  * @param importFromId The id of the existing CloudFirewallInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudFirewallInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cloud_firewall_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_instance alicloud_cloud_firewall_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudFirewallInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: CloudFirewallInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cloud_firewall_instance',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountNumber = config.accountNumber;
    this._bandWidth = config.bandWidth;
    this._cfwAccount = config.cfwAccount;
    this._cfwLog = config.cfwLog;
    this._cfwLogStorage = config.cfwLogStorage;
    this._cfwService = config.cfwService;
    this._fwVpcNumber = config.fwVpcNumber;
    this._id = config.id;
    this._instanceCount = config.instanceCount;
    this._ipNumber = config.ipNumber;
    this._logistics = config.logistics;
    this._modifyType = config.modifyType;
    this._paymentType = config.paymentType;
    this._period = config.period;
    this._renewPeriod = config.renewPeriod;
    this._renewalDuration = config.renewalDuration;
    this._renewalDurationUnit = config.renewalDurationUnit;
    this._renewalStatus = config.renewalStatus;
    this._spec = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_number - computed: false, optional: true, required: false
  private _accountNumber?: number; 
  public get accountNumber() {
    return this.getNumberAttribute('account_number');
  }
  public set accountNumber(value: number) {
    this._accountNumber = value;
  }
  public resetAccountNumber() {
    this._accountNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNumberInput() {
    return this._accountNumber;
  }

  // band_width - computed: false, optional: true, required: false
  private _bandWidth?: number; 
  public get bandWidth() {
    return this.getNumberAttribute('band_width');
  }
  public set bandWidth(value: number) {
    this._bandWidth = value;
  }
  public resetBandWidth() {
    this._bandWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandWidthInput() {
    return this._bandWidth;
  }

  // cfw_account - computed: false, optional: true, required: false
  private _cfwAccount?: boolean | cdktf.IResolvable; 
  public get cfwAccount() {
    return this.getBooleanAttribute('cfw_account');
  }
  public set cfwAccount(value: boolean | cdktf.IResolvable) {
    this._cfwAccount = value;
  }
  public resetCfwAccount() {
    this._cfwAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfwAccountInput() {
    return this._cfwAccount;
  }

  // cfw_log - computed: false, optional: true, required: false
  private _cfwLog?: boolean | cdktf.IResolvable; 
  public get cfwLog() {
    return this.getBooleanAttribute('cfw_log');
  }
  public set cfwLog(value: boolean | cdktf.IResolvable) {
    this._cfwLog = value;
  }
  public resetCfwLog() {
    this._cfwLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfwLogInput() {
    return this._cfwLog;
  }

  // cfw_log_storage - computed: false, optional: true, required: false
  private _cfwLogStorage?: number; 
  public get cfwLogStorage() {
    return this.getNumberAttribute('cfw_log_storage');
  }
  public set cfwLogStorage(value: number) {
    this._cfwLogStorage = value;
  }
  public resetCfwLogStorage() {
    this._cfwLogStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfwLogStorageInput() {
    return this._cfwLogStorage;
  }

  // cfw_service - computed: false, optional: true, required: false
  private _cfwService?: boolean | cdktf.IResolvable; 
  public get cfwService() {
    return this.getBooleanAttribute('cfw_service');
  }
  public set cfwService(value: boolean | cdktf.IResolvable) {
    this._cfwService = value;
  }
  public resetCfwService() {
    this._cfwService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfwServiceInput() {
    return this._cfwService;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // fw_vpc_number - computed: true, optional: true, required: false
  private _fwVpcNumber?: number; 
  public get fwVpcNumber() {
    return this.getNumberAttribute('fw_vpc_number');
  }
  public set fwVpcNumber(value: number) {
    this._fwVpcNumber = value;
  }
  public resetFwVpcNumber() {
    this._fwVpcNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwVpcNumberInput() {
    return this._fwVpcNumber;
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

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // ip_number - computed: true, optional: true, required: false
  private _ipNumber?: number; 
  public get ipNumber() {
    return this.getNumberAttribute('ip_number');
  }
  public set ipNumber(value: number) {
    this._ipNumber = value;
  }
  public resetIpNumber() {
    this._ipNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNumberInput() {
    return this._ipNumber;
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

  // release_time - computed: true, optional: false, required: false
  public get releaseTime() {
    return this.getStringAttribute('release_time');
  }

  // renew_period - computed: true, optional: true, required: false
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

  // renewal_duration - computed: true, optional: true, required: false
  private _renewalDuration?: number; 
  public get renewalDuration() {
    return this.getNumberAttribute('renewal_duration');
  }
  public set renewalDuration(value: number) {
    this._renewalDuration = value;
  }
  public resetRenewalDuration() {
    this._renewalDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewalDurationInput() {
    return this._renewalDuration;
  }

  // renewal_duration_unit - computed: false, optional: true, required: false
  private _renewalDurationUnit?: string; 
  public get renewalDurationUnit() {
    return this.getStringAttribute('renewal_duration_unit');
  }
  public set renewalDurationUnit(value: string) {
    this._renewalDurationUnit = value;
  }
  public resetRenewalDurationUnit() {
    this._renewalDurationUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewalDurationUnitInput() {
    return this._renewalDurationUnit;
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

  // spec - computed: true, optional: true, required: false
  private _spec?: string; 
  public get spec() {
    return this.getStringAttribute('spec');
  }
  public set spec(value: string) {
    this._spec = value;
  }
  public resetSpec() {
    this._spec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // user_status - computed: true, optional: false, required: false
  public get userStatus() {
    return this.getBooleanAttribute('user_status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_number: cdktf.numberToTerraform(this._accountNumber),
      band_width: cdktf.numberToTerraform(this._bandWidth),
      cfw_account: cdktf.booleanToTerraform(this._cfwAccount),
      cfw_log: cdktf.booleanToTerraform(this._cfwLog),
      cfw_log_storage: cdktf.numberToTerraform(this._cfwLogStorage),
      cfw_service: cdktf.booleanToTerraform(this._cfwService),
      fw_vpc_number: cdktf.numberToTerraform(this._fwVpcNumber),
      id: cdktf.stringToTerraform(this._id),
      instance_count: cdktf.numberToTerraform(this._instanceCount),
      ip_number: cdktf.numberToTerraform(this._ipNumber),
      logistics: cdktf.stringToTerraform(this._logistics),
      modify_type: cdktf.stringToTerraform(this._modifyType),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      period: cdktf.numberToTerraform(this._period),
      renew_period: cdktf.numberToTerraform(this._renewPeriod),
      renewal_duration: cdktf.numberToTerraform(this._renewalDuration),
      renewal_duration_unit: cdktf.stringToTerraform(this._renewalDurationUnit),
      renewal_status: cdktf.stringToTerraform(this._renewalStatus),
      spec: cdktf.stringToTerraform(this._spec),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_number: {
        value: cdktf.numberToHclTerraform(this._accountNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      band_width: {
        value: cdktf.numberToHclTerraform(this._bandWidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cfw_account: {
        value: cdktf.booleanToHclTerraform(this._cfwAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cfw_log: {
        value: cdktf.booleanToHclTerraform(this._cfwLog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cfw_log_storage: {
        value: cdktf.numberToHclTerraform(this._cfwLogStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cfw_service: {
        value: cdktf.booleanToHclTerraform(this._cfwService),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fw_vpc_number: {
        value: cdktf.numberToHclTerraform(this._fwVpcNumber),
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
      instance_count: {
        value: cdktf.numberToHclTerraform(this._instanceCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_number: {
        value: cdktf.numberToHclTerraform(this._ipNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      renewal_duration: {
        value: cdktf.numberToHclTerraform(this._renewalDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      renewal_duration_unit: {
        value: cdktf.stringToHclTerraform(this._renewalDurationUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      renewal_status: {
        value: cdktf.stringToHclTerraform(this._renewalStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spec: {
        value: cdktf.stringToHclTerraform(this._spec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
