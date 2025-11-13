// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EipConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of anti DDos package, it must set when `type` is `AntiDDoSEIP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eip#anti_ddos_package_id Eip#anti_ddos_package_id}
  */
  readonly antiDdosPackageId?: string;
  /**
  * The zone of anycast. Valid value: `ANYCAST_ZONE_GLOBAL` and `ANYCAST_ZONE_OVERSEAS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eip#anycast_zone Eip#anycast_zone}
  */
  readonly anycastZone?: string;
  /**
  * Indicates whether the anycast eip can be associated to a CLB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eip#applicable_for_clb Eip#applicable_for_clb}
  */
  readonly applicableForClb?: boolean | cdktf.IResolvable;
  /**
  * Auto renew flag.  0 - default state (manual renew); 1 - automatic renew; 2 - explicit no automatic renew. NOTES: Only supported prepaid EIP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eip#auto_renew_flag Eip#auto_renew_flag}
  */
  readonly autoRenewFlag?: number;
  /**
  * ID of bandwidth package, it will set when `internet_charge_type` is `BANDWIDTH_PACKAGE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eip#bandwidth_package_id Eip#bandwidth_package_id}
  */
  readonly bandwidthPackageId?: string;
  /**
  * CDC Unique ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eip#cdc_id Eip#cdc_id}
  */
  readonly cdcId?: string;
  /**
  * Network egress. It defaults to `center_egress1`. If you want to try the egress feature, please [submit a ticket](https://console.cloud.tencent.com/workorder/category).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eip#egress Eip#egress}
  */
  readonly egress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eip#id Eip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The charge type of eip. Valid values: `BANDWIDTH_PACKAGE`, `BANDWIDTH_POSTPAID_BY_HOUR`, `BANDWIDTH_PREPAID_BY_MONTH` and `TRAFFIC_POSTPAID_BY_HOUR`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eip#internet_charge_type Eip#internet_charge_type}
  */
  readonly internetChargeType?: string;
  /**
  * The bandwidth limit of EIP, unit is Mbps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eip#internet_max_bandwidth_out Eip#internet_max_bandwidth_out}
  */
  readonly internetMaxBandwidthOut?: number;
  /**
  * Internet service provider of eip. Valid value: `BGP`, `CMCC`, `CTCC` and `CUCC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eip#internet_service_provider Eip#internet_service_provider}
  */
  readonly internetServiceProvider?: string;
  /**
  * The name of eip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eip#name Eip#name}
  */
  readonly name?: string;
  /**
  * Period of instance. Default value: `1`. Valid value: `1`, `2`, `3`, `4`, `6`, `7`, `8`, `9`, `12`, `24`, `36`. NOTES: must set when `internet_charge_type` is `BANDWIDTH_PREPAID_BY_MONTH`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eip#prepaid_period Eip#prepaid_period}
  */
  readonly prepaidPeriod?: number;
  /**
  * The tags of eip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eip#tags Eip#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The type of eip. Valid value:  `EIP` and `AnycastEIP` and `HighQualityEIP` and `AntiDDoSEIP`. Default is `EIP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eip#type Eip#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eip tencentcloud_eip}
*/
export class Eip extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_eip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Eip resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Eip to import
  * @param importFromId The id of the existing Eip that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Eip to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_eip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/eip tencentcloud_eip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EipConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EipConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_eip',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._antiDdosPackageId = config.antiDdosPackageId;
    this._anycastZone = config.anycastZone;
    this._applicableForClb = config.applicableForClb;
    this._autoRenewFlag = config.autoRenewFlag;
    this._bandwidthPackageId = config.bandwidthPackageId;
    this._cdcId = config.cdcId;
    this._egress = config.egress;
    this._id = config.id;
    this._internetChargeType = config.internetChargeType;
    this._internetMaxBandwidthOut = config.internetMaxBandwidthOut;
    this._internetServiceProvider = config.internetServiceProvider;
    this._name = config.name;
    this._prepaidPeriod = config.prepaidPeriod;
    this._tags = config.tags;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anti_ddos_package_id - computed: true, optional: true, required: false
  private _antiDdosPackageId?: string; 
  public get antiDdosPackageId() {
    return this.getStringAttribute('anti_ddos_package_id');
  }
  public set antiDdosPackageId(value: string) {
    this._antiDdosPackageId = value;
  }
  public resetAntiDdosPackageId() {
    this._antiDdosPackageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiDdosPackageIdInput() {
    return this._antiDdosPackageId;
  }

  // anycast_zone - computed: false, optional: true, required: false
  private _anycastZone?: string; 
  public get anycastZone() {
    return this.getStringAttribute('anycast_zone');
  }
  public set anycastZone(value: string) {
    this._anycastZone = value;
  }
  public resetAnycastZone() {
    this._anycastZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anycastZoneInput() {
    return this._anycastZone;
  }

  // applicable_for_clb - computed: false, optional: true, required: false
  private _applicableForClb?: boolean | cdktf.IResolvable; 
  public get applicableForClb() {
    return this.getBooleanAttribute('applicable_for_clb');
  }
  public set applicableForClb(value: boolean | cdktf.IResolvable) {
    this._applicableForClb = value;
  }
  public resetApplicableForClb() {
    this._applicableForClb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicableForClbInput() {
    return this._applicableForClb;
  }

  // auto_renew_flag - computed: false, optional: true, required: false
  private _autoRenewFlag?: number; 
  public get autoRenewFlag() {
    return this.getNumberAttribute('auto_renew_flag');
  }
  public set autoRenewFlag(value: number) {
    this._autoRenewFlag = value;
  }
  public resetAutoRenewFlag() {
    this._autoRenewFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewFlagInput() {
    return this._autoRenewFlag;
  }

  // bandwidth_package_id - computed: true, optional: true, required: false
  private _bandwidthPackageId?: string; 
  public get bandwidthPackageId() {
    return this.getStringAttribute('bandwidth_package_id');
  }
  public set bandwidthPackageId(value: string) {
    this._bandwidthPackageId = value;
  }
  public resetBandwidthPackageId() {
    this._bandwidthPackageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthPackageIdInput() {
    return this._bandwidthPackageId;
  }

  // cdc_id - computed: false, optional: true, required: false
  private _cdcId?: string; 
  public get cdcId() {
    return this.getStringAttribute('cdc_id');
  }
  public set cdcId(value: string) {
    this._cdcId = value;
  }
  public resetCdcId() {
    this._cdcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdcIdInput() {
    return this._cdcId;
  }

  // egress - computed: true, optional: true, required: false
  private _egress?: string; 
  public get egress() {
    return this.getStringAttribute('egress');
  }
  public set egress(value: string) {
    this._egress = value;
  }
  public resetEgress() {
    this._egress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress;
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

  // internet_charge_type - computed: true, optional: true, required: false
  private _internetChargeType?: string; 
  public get internetChargeType() {
    return this.getStringAttribute('internet_charge_type');
  }
  public set internetChargeType(value: string) {
    this._internetChargeType = value;
  }
  public resetInternetChargeType() {
    this._internetChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetChargeTypeInput() {
    return this._internetChargeType;
  }

  // internet_max_bandwidth_out - computed: true, optional: true, required: false
  private _internetMaxBandwidthOut?: number; 
  public get internetMaxBandwidthOut() {
    return this.getNumberAttribute('internet_max_bandwidth_out');
  }
  public set internetMaxBandwidthOut(value: number) {
    this._internetMaxBandwidthOut = value;
  }
  public resetInternetMaxBandwidthOut() {
    this._internetMaxBandwidthOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetMaxBandwidthOutInput() {
    return this._internetMaxBandwidthOut;
  }

  // internet_service_provider - computed: false, optional: true, required: false
  private _internetServiceProvider?: string; 
  public get internetServiceProvider() {
    return this.getStringAttribute('internet_service_provider');
  }
  public set internetServiceProvider(value: string) {
    this._internetServiceProvider = value;
  }
  public resetInternetServiceProvider() {
    this._internetServiceProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceProviderInput() {
    return this._internetServiceProvider;
  }

  // name - computed: true, optional: true, required: false
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

  // prepaid_period - computed: false, optional: true, required: false
  private _prepaidPeriod?: number; 
  public get prepaidPeriod() {
    return this.getNumberAttribute('prepaid_period');
  }
  public set prepaidPeriod(value: number) {
    this._prepaidPeriod = value;
  }
  public resetPrepaidPeriod() {
    this._prepaidPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prepaidPeriodInput() {
    return this._prepaidPeriod;
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anti_ddos_package_id: cdktf.stringToTerraform(this._antiDdosPackageId),
      anycast_zone: cdktf.stringToTerraform(this._anycastZone),
      applicable_for_clb: cdktf.booleanToTerraform(this._applicableForClb),
      auto_renew_flag: cdktf.numberToTerraform(this._autoRenewFlag),
      bandwidth_package_id: cdktf.stringToTerraform(this._bandwidthPackageId),
      cdc_id: cdktf.stringToTerraform(this._cdcId),
      egress: cdktf.stringToTerraform(this._egress),
      id: cdktf.stringToTerraform(this._id),
      internet_charge_type: cdktf.stringToTerraform(this._internetChargeType),
      internet_max_bandwidth_out: cdktf.numberToTerraform(this._internetMaxBandwidthOut),
      internet_service_provider: cdktf.stringToTerraform(this._internetServiceProvider),
      name: cdktf.stringToTerraform(this._name),
      prepaid_period: cdktf.numberToTerraform(this._prepaidPeriod),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anti_ddos_package_id: {
        value: cdktf.stringToHclTerraform(this._antiDdosPackageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      anycast_zone: {
        value: cdktf.stringToHclTerraform(this._anycastZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      applicable_for_clb: {
        value: cdktf.booleanToHclTerraform(this._applicableForClb),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_renew_flag: {
        value: cdktf.numberToHclTerraform(this._autoRenewFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bandwidth_package_id: {
        value: cdktf.stringToHclTerraform(this._bandwidthPackageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cdc_id: {
        value: cdktf.stringToHclTerraform(this._cdcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      egress: {
        value: cdktf.stringToHclTerraform(this._egress),
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
      internet_charge_type: {
        value: cdktf.stringToHclTerraform(this._internetChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_max_bandwidth_out: {
        value: cdktf.numberToHclTerraform(this._internetMaxBandwidthOut),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      internet_service_provider: {
        value: cdktf.stringToHclTerraform(this._internetServiceProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prepaid_period: {
        value: cdktf.numberToHclTerraform(this._prepaidPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
