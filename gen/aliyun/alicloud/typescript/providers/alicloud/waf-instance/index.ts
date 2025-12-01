// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/waf_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/waf_instance#big_screen WafInstance#big_screen}
  */
  readonly bigScreen: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/waf_instance#exclusive_ip_package WafInstance#exclusive_ip_package}
  */
  readonly exclusiveIpPackage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/waf_instance#ext_bandwidth WafInstance#ext_bandwidth}
  */
  readonly extBandwidth: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/waf_instance#ext_domain_package WafInstance#ext_domain_package}
  */
  readonly extDomainPackage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/waf_instance#id WafInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/waf_instance#log_storage WafInstance#log_storage}
  */
  readonly logStorage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/waf_instance#log_time WafInstance#log_time}
  */
  readonly logTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/waf_instance#modify_type WafInstance#modify_type}
  */
  readonly modifyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/waf_instance#package_code WafInstance#package_code}
  */
  readonly packageCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/waf_instance#period WafInstance#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/waf_instance#prefessional_service WafInstance#prefessional_service}
  */
  readonly prefessionalService: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/waf_instance#region WafInstance#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/waf_instance#renew_period WafInstance#renew_period}
  */
  readonly renewPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/waf_instance#renewal_status WafInstance#renewal_status}
  */
  readonly renewalStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/waf_instance#resource_group_id WafInstance#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/waf_instance#subscription_type WafInstance#subscription_type}
  */
  readonly subscriptionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/waf_instance#waf_log WafInstance#waf_log}
  */
  readonly wafLog: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/waf_instance alicloud_waf_instance}
*/
export class WafInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_waf_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafInstance to import
  * @param importFromId The id of the existing WafInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/waf_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_waf_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/waf_instance alicloud_waf_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: WafInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_waf_instance',
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
    this._bigScreen = config.bigScreen;
    this._exclusiveIpPackage = config.exclusiveIpPackage;
    this._extBandwidth = config.extBandwidth;
    this._extDomainPackage = config.extDomainPackage;
    this._id = config.id;
    this._logStorage = config.logStorage;
    this._logTime = config.logTime;
    this._modifyType = config.modifyType;
    this._packageCode = config.packageCode;
    this._period = config.period;
    this._prefessionalService = config.prefessionalService;
    this._region = config.region;
    this._renewPeriod = config.renewPeriod;
    this._renewalStatus = config.renewalStatus;
    this._resourceGroupId = config.resourceGroupId;
    this._subscriptionType = config.subscriptionType;
    this._wafLog = config.wafLog;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // big_screen - computed: false, optional: false, required: true
  private _bigScreen?: string; 
  public get bigScreen() {
    return this.getStringAttribute('big_screen');
  }
  public set bigScreen(value: string) {
    this._bigScreen = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bigScreenInput() {
    return this._bigScreen;
  }

  // exclusive_ip_package - computed: false, optional: false, required: true
  private _exclusiveIpPackage?: string; 
  public get exclusiveIpPackage() {
    return this.getStringAttribute('exclusive_ip_package');
  }
  public set exclusiveIpPackage(value: string) {
    this._exclusiveIpPackage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveIpPackageInput() {
    return this._exclusiveIpPackage;
  }

  // ext_bandwidth - computed: false, optional: false, required: true
  private _extBandwidth?: string; 
  public get extBandwidth() {
    return this.getStringAttribute('ext_bandwidth');
  }
  public set extBandwidth(value: string) {
    this._extBandwidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extBandwidthInput() {
    return this._extBandwidth;
  }

  // ext_domain_package - computed: false, optional: false, required: true
  private _extDomainPackage?: string; 
  public get extDomainPackage() {
    return this.getStringAttribute('ext_domain_package');
  }
  public set extDomainPackage(value: string) {
    this._extDomainPackage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extDomainPackageInput() {
    return this._extDomainPackage;
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

  // log_storage - computed: false, optional: false, required: true
  private _logStorage?: string; 
  public get logStorage() {
    return this.getStringAttribute('log_storage');
  }
  public set logStorage(value: string) {
    this._logStorage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logStorageInput() {
    return this._logStorage;
  }

  // log_time - computed: false, optional: false, required: true
  private _logTime?: string; 
  public get logTime() {
    return this.getStringAttribute('log_time');
  }
  public set logTime(value: string) {
    this._logTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logTimeInput() {
    return this._logTime;
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

  // package_code - computed: false, optional: false, required: true
  private _packageCode?: string; 
  public get packageCode() {
    return this.getStringAttribute('package_code');
  }
  public set packageCode(value: string) {
    this._packageCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageCodeInput() {
    return this._packageCode;
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

  // prefessional_service - computed: false, optional: false, required: true
  private _prefessionalService?: string; 
  public get prefessionalService() {
    return this.getStringAttribute('prefessional_service');
  }
  public set prefessionalService(value: string) {
    this._prefessionalService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefessionalServiceInput() {
    return this._prefessionalService;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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

  // renewal_status - computed: false, optional: true, required: false
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

  // resource_group_id - computed: false, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // subscription_type - computed: false, optional: false, required: true
  private _subscriptionType?: string; 
  public get subscriptionType() {
    return this.getStringAttribute('subscription_type');
  }
  public set subscriptionType(value: string) {
    this._subscriptionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionTypeInput() {
    return this._subscriptionType;
  }

  // waf_log - computed: false, optional: false, required: true
  private _wafLog?: string; 
  public get wafLog() {
    return this.getStringAttribute('waf_log');
  }
  public set wafLog(value: string) {
    this._wafLog = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wafLogInput() {
    return this._wafLog;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      big_screen: cdktf.stringToTerraform(this._bigScreen),
      exclusive_ip_package: cdktf.stringToTerraform(this._exclusiveIpPackage),
      ext_bandwidth: cdktf.stringToTerraform(this._extBandwidth),
      ext_domain_package: cdktf.stringToTerraform(this._extDomainPackage),
      id: cdktf.stringToTerraform(this._id),
      log_storage: cdktf.stringToTerraform(this._logStorage),
      log_time: cdktf.stringToTerraform(this._logTime),
      modify_type: cdktf.stringToTerraform(this._modifyType),
      package_code: cdktf.stringToTerraform(this._packageCode),
      period: cdktf.numberToTerraform(this._period),
      prefessional_service: cdktf.stringToTerraform(this._prefessionalService),
      region: cdktf.stringToTerraform(this._region),
      renew_period: cdktf.numberToTerraform(this._renewPeriod),
      renewal_status: cdktf.stringToTerraform(this._renewalStatus),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      subscription_type: cdktf.stringToTerraform(this._subscriptionType),
      waf_log: cdktf.stringToTerraform(this._wafLog),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      big_screen: {
        value: cdktf.stringToHclTerraform(this._bigScreen),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclusive_ip_package: {
        value: cdktf.stringToHclTerraform(this._exclusiveIpPackage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_bandwidth: {
        value: cdktf.stringToHclTerraform(this._extBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_domain_package: {
        value: cdktf.stringToHclTerraform(this._extDomainPackage),
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
      log_storage: {
        value: cdktf.stringToHclTerraform(this._logStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_time: {
        value: cdktf.stringToHclTerraform(this._logTime),
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
      package_code: {
        value: cdktf.stringToHclTerraform(this._packageCode),
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
      prefessional_service: {
        value: cdktf.stringToHclTerraform(this._prefessionalService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_type: {
        value: cdktf.stringToHclTerraform(this._subscriptionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      waf_log: {
        value: cdktf.stringToHclTerraform(this._wafLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
