// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_bandwidth_package
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcBandwidthPackageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Bandwidth package name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_bandwidth_package#bandwidth_package_name VpcBandwidthPackage#bandwidth_package_name}
  */
  readonly bandwidthPackageName?: string;
  /**
  * Bandwidth package billing type, default: `TOP5_POSTPAID_BY_MONTH`. Optional value: `TOP5_POSTPAID_BY_MONTH`: TOP5 billed by monthly postpaid; `PERCENT95_POSTPAID_BY_MONTH`: 95 billed monthly postpaid; `FIXED_PREPAID_BY_MONTH`: Monthly prepaid billing (Type FIXED_PREPAID_BY_MONTH product API capability is under construction); `BANDWIDTH_POSTPAID_BY_DAY`: bandwidth billed by daily postpaid; `ENHANCED95_POSTPAID_BY_MONTH`: enhanced 95 billed monthly postpaid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_bandwidth_package#charge_type VpcBandwidthPackage#charge_type}
  */
  readonly chargeType?: string;
  /**
  * Network egress. It defaults to `center_egress1`. If you want to try the egress feature, please [submit a ticket](https://console.cloud.tencent.com/workorder/category).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_bandwidth_package#egress VpcBandwidthPackage#egress}
  */
  readonly egress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_bandwidth_package#id VpcBandwidthPackage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Bandwidth packet speed limit size. Unit: Mbps, -1 means no speed limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_bandwidth_package#internet_max_bandwidth VpcBandwidthPackage#internet_max_bandwidth}
  */
  readonly internetMaxBandwidth?: number;
  /**
  * Bandwidth packet type, default: `BGP`. Optional value: `BGP`: common BGP shared bandwidth package; `HIGH_QUALITY_BGP`: High Quality BGP Shared Bandwidth Package; `SINGLEISP_CMCC`: CMCC shared bandwidth package; `SINGLEISP_CTCC:`: CTCC shared bandwidth package; `SINGLEISP_CUCC`: CUCC shared bandwidth package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_bandwidth_package#network_type VpcBandwidthPackage#network_type}
  */
  readonly networkType?: string;
  /**
  * Tag description list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_bandwidth_package#tags VpcBandwidthPackage#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The purchase duration of the prepaid monthly bandwidth package, unit: month, value range: 1~60.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_bandwidth_package#time_span VpcBandwidthPackage#time_span}
  */
  readonly timeSpan?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_bandwidth_package tencentcloud_vpc_bandwidth_package}
*/
export class VpcBandwidthPackage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vpc_bandwidth_package";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcBandwidthPackage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcBandwidthPackage to import
  * @param importFromId The id of the existing VpcBandwidthPackage that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_bandwidth_package#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcBandwidthPackage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vpc_bandwidth_package", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_bandwidth_package tencentcloud_vpc_bandwidth_package} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcBandwidthPackageConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VpcBandwidthPackageConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vpc_bandwidth_package',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bandwidthPackageName = config.bandwidthPackageName;
    this._chargeType = config.chargeType;
    this._egress = config.egress;
    this._id = config.id;
    this._internetMaxBandwidth = config.internetMaxBandwidth;
    this._networkType = config.networkType;
    this._tags = config.tags;
    this._timeSpan = config.timeSpan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth_package_name - computed: false, optional: true, required: false
  private _bandwidthPackageName?: string; 
  public get bandwidthPackageName() {
    return this.getStringAttribute('bandwidth_package_name');
  }
  public set bandwidthPackageName(value: string) {
    this._bandwidthPackageName = value;
  }
  public resetBandwidthPackageName() {
    this._bandwidthPackageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthPackageNameInput() {
    return this._bandwidthPackageName;
  }

  // charge_type - computed: false, optional: true, required: false
  private _chargeType?: string; 
  public get chargeType() {
    return this.getStringAttribute('charge_type');
  }
  public set chargeType(value: string) {
    this._chargeType = value;
  }
  public resetChargeType() {
    this._chargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chargeTypeInput() {
    return this._chargeType;
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

  // internet_max_bandwidth - computed: false, optional: true, required: false
  private _internetMaxBandwidth?: number; 
  public get internetMaxBandwidth() {
    return this.getNumberAttribute('internet_max_bandwidth');
  }
  public set internetMaxBandwidth(value: number) {
    this._internetMaxBandwidth = value;
  }
  public resetInternetMaxBandwidth() {
    this._internetMaxBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetMaxBandwidthInput() {
    return this._internetMaxBandwidth;
  }

  // network_type - computed: false, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
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

  // time_span - computed: false, optional: true, required: false
  private _timeSpan?: number; 
  public get timeSpan() {
    return this.getNumberAttribute('time_span');
  }
  public set timeSpan(value: number) {
    this._timeSpan = value;
  }
  public resetTimeSpan() {
    this._timeSpan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSpanInput() {
    return this._timeSpan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidth_package_name: cdktf.stringToTerraform(this._bandwidthPackageName),
      charge_type: cdktf.stringToTerraform(this._chargeType),
      egress: cdktf.stringToTerraform(this._egress),
      id: cdktf.stringToTerraform(this._id),
      internet_max_bandwidth: cdktf.numberToTerraform(this._internetMaxBandwidth),
      network_type: cdktf.stringToTerraform(this._networkType),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      time_span: cdktf.numberToTerraform(this._timeSpan),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth_package_name: {
        value: cdktf.stringToHclTerraform(this._bandwidthPackageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      charge_type: {
        value: cdktf.stringToHclTerraform(this._chargeType),
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
      internet_max_bandwidth: {
        value: cdktf.numberToHclTerraform(this._internetMaxBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      network_type: {
        value: cdktf.stringToHclTerraform(this._networkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      time_span: {
        value: cdktf.numberToHclTerraform(this._timeSpan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
