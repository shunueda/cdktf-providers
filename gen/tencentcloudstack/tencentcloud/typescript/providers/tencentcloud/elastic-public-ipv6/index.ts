// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/elastic_public_ipv6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticPublicIpv6Config extends cdktf.TerraformMetaArguments {
  /**
  * External network IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/elastic_public_ipv6#address_ip ElasticPublicIpv6#address_ip}
  */
  readonly addressIp?: string;
  /**
  * EIP name, used to customize the personalized name of the EIP when applying for EIP. Default value: unnamed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/elastic_public_ipv6#address_name ElasticPublicIpv6#address_name}
  */
  readonly addressName?: string;
  /**
  * Elastic IPv6 type, optional values:
  * 	- EIPv6: Ordinary IPv6
  * 	- HighQualityEIPv6: Premium IPv6
  * Note: You need to contact the product to open a premium IPv6 white list, and only some regions support premium IPv6
  * Default value: EIPv6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/elastic_public_ipv6#address_type ElasticPublicIpv6#address_type}
  */
  readonly addressType?: string;
  /**
  * Bandwidth packet unique ID parameter. If this parameter is set and the InternetChargeType is BANDWIDTH_PACKAGE, it means that the EIP created is added to the BGP bandwidth packet and the bandwidth packet is charged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/elastic_public_ipv6#bandwidth_package_id ElasticPublicIpv6#bandwidth_package_id}
  */
  readonly bandwidthPackageId?: string;
  /**
  * Elastic IPv6 network exit, optional values:
  * 	- CENTER_EGRESS_1: Center Exit 1
  * 	- CENTER_EGRESS_2: Center Exit 2
  * 	- CENTER_EGRESS_3: Center Exit 3
  * Note: Network exports corresponding to different operators or resource types need to contact the product for clarification
  * Default value: CENTER_EGRESS_1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/elastic_public_ipv6#egress ElasticPublicIpv6#egress}
  */
  readonly egress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/elastic_public_ipv6#id ElasticPublicIpv6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Elastic IPv6 charging method, optional values:
  * 	- BANDWIDTH_PACKAGE: Payment for Shared Bandwidth Package
  * 	- TRAFFIC_POSTPAID_BY_HOUR: Traffic is paid by the hour
  * Default value: TRAFFIC_POSTPAID_BY_HOUR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/elastic_public_ipv6#internet_charge_type ElasticPublicIpv6#internet_charge_type}
  */
  readonly internetChargeType?: string;
  /**
  * Elastic IPv6 bandwidth limit in Mbps.
  * The range of selectable values depends on the EIP billing method:
  * 	- BANDWIDTH_PACKAGE: 1 Mbps to 2000 Mbps
  * 	- TRAFFIC_POSTPAID_BY_HOUR: 1 Mbps to 100 Mbps
  * Default value: 1 Mbps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/elastic_public_ipv6#internet_max_bandwidth_out ElasticPublicIpv6#internet_max_bandwidth_out}
  */
  readonly internetMaxBandwidthOut?: number;
  /**
  * Elastic IPv6 line type, default value: BGP.
  * For users who have activated a static single-line IP whitelist, selectable values:
  * 	- CMCC: China Mobile
  * 	- CTCC: China Telecom
  * 	- CUCC: China Unicom
  * Note: Static single-wire IP is only supported in some regions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/elastic_public_ipv6#internet_service_provider ElasticPublicIpv6#internet_service_provider}
  */
  readonly internetServiceProvider?: string;
  /**
  * Tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/elastic_public_ipv6#tags ElasticPublicIpv6#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/elastic_public_ipv6 tencentcloud_elastic_public_ipv6}
*/
export class ElasticPublicIpv6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_elastic_public_ipv6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElasticPublicIpv6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElasticPublicIpv6 to import
  * @param importFromId The id of the existing ElasticPublicIpv6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/elastic_public_ipv6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElasticPublicIpv6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_elastic_public_ipv6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/elastic_public_ipv6 tencentcloud_elastic_public_ipv6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticPublicIpv6Config = {}
  */
  public constructor(scope: Construct, id: string, config: ElasticPublicIpv6Config = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_elastic_public_ipv6',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressIp = config.addressIp;
    this._addressName = config.addressName;
    this._addressType = config.addressType;
    this._bandwidthPackageId = config.bandwidthPackageId;
    this._egress = config.egress;
    this._id = config.id;
    this._internetChargeType = config.internetChargeType;
    this._internetMaxBandwidthOut = config.internetMaxBandwidthOut;
    this._internetServiceProvider = config.internetServiceProvider;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_ip - computed: true, optional: true, required: false
  private _addressIp?: string; 
  public get addressIp() {
    return this.getStringAttribute('address_ip');
  }
  public set addressIp(value: string) {
    this._addressIp = value;
  }
  public resetAddressIp() {
    this._addressIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressIpInput() {
    return this._addressIp;
  }

  // address_name - computed: true, optional: true, required: false
  private _addressName?: string; 
  public get addressName() {
    return this.getStringAttribute('address_name');
  }
  public set addressName(value: string) {
    this._addressName = value;
  }
  public resetAddressName() {
    this._addressName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressNameInput() {
    return this._addressName;
  }

  // address_type - computed: true, optional: true, required: false
  private _addressType?: string; 
  public get addressType() {
    return this.getStringAttribute('address_type');
  }
  public set addressType(value: string) {
    this._addressType = value;
  }
  public resetAddressType() {
    this._addressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTypeInput() {
    return this._addressType;
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

  // internet_service_provider - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_ip: cdktf.stringToTerraform(this._addressIp),
      address_name: cdktf.stringToTerraform(this._addressName),
      address_type: cdktf.stringToTerraform(this._addressType),
      bandwidth_package_id: cdktf.stringToTerraform(this._bandwidthPackageId),
      egress: cdktf.stringToTerraform(this._egress),
      id: cdktf.stringToTerraform(this._id),
      internet_charge_type: cdktf.stringToTerraform(this._internetChargeType),
      internet_max_bandwidth_out: cdktf.numberToTerraform(this._internetMaxBandwidthOut),
      internet_service_provider: cdktf.stringToTerraform(this._internetServiceProvider),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_ip: {
        value: cdktf.stringToHclTerraform(this._addressIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_name: {
        value: cdktf.stringToHclTerraform(this._addressName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_type: {
        value: cdktf.stringToHclTerraform(this._addressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth_package_id: {
        value: cdktf.stringToHclTerraform(this._bandwidthPackageId),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
