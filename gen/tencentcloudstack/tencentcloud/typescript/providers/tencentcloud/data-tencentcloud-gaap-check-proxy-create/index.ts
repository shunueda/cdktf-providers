// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/gaap_check_proxy_create
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudGaapCheckProxyCreateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The access (acceleration) area of the proxy. The value can be obtained through the interface DescribeAccessRegionsByDestRegion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/gaap_check_proxy_create#access_region DataTencentcloudGaapCheckProxyCreate#access_region}
  */
  readonly accessRegion: string;
  /**
  * The upper limit of proxy bandwidth, in Mbps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/gaap_check_proxy_create#bandwidth DataTencentcloudGaapCheckProxyCreate#bandwidth}
  */
  readonly bandwidth: number;
  /**
  * The upper limit of chanproxynel concurrency, representing the number of simultaneous online connections, in tens of thousands.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/gaap_check_proxy_create#concurrent DataTencentcloudGaapCheckProxyCreate#concurrent}
  */
  readonly concurrent: number;
  /**
  * If creating a proxy under a proxy group, you need to fill in the ID of the proxy group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/gaap_check_proxy_create#group_id DataTencentcloudGaapCheckProxyCreate#group_id}
  */
  readonly groupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/gaap_check_proxy_create#id DataTencentcloudGaapCheckProxyCreate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP version, can be taken as IPv4 or IPv6, with a default value of IPv4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/gaap_check_proxy_create#ip_address_version DataTencentcloudGaapCheckProxyCreate#ip_address_version}
  */
  readonly ipAddressVersion?: string;
  /**
  * Network type, can take values &amp;#39;normal&amp;#39;, &amp;#39;cn2&amp;#39;, default value normal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/gaap_check_proxy_create#network_type DataTencentcloudGaapCheckProxyCreate#network_type}
  */
  readonly networkType?: string;
  /**
  * Channel package type. Thunder represents the standard proxy group, Accelerator represents the game accelerator proxy, and CrossBorder represents the cross-border proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/gaap_check_proxy_create#package_type DataTencentcloudGaapCheckProxyCreate#package_type}
  */
  readonly packageType?: string;
  /**
  * The origin area of the proxy. The value can be obtained through the interface DescribeDestRegions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/gaap_check_proxy_create#real_server_region DataTencentcloudGaapCheckProxyCreate#real_server_region}
  */
  readonly realServerRegion: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/gaap_check_proxy_create#result_output_file DataTencentcloudGaapCheckProxyCreate#result_output_file}
  */
  readonly resultOutputFile?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/gaap_check_proxy_create tencentcloud_gaap_check_proxy_create}
*/
export class DataTencentcloudGaapCheckProxyCreate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_gaap_check_proxy_create";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudGaapCheckProxyCreate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudGaapCheckProxyCreate to import
  * @param importFromId The id of the existing DataTencentcloudGaapCheckProxyCreate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/gaap_check_proxy_create#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudGaapCheckProxyCreate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_gaap_check_proxy_create", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/gaap_check_proxy_create tencentcloud_gaap_check_proxy_create} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudGaapCheckProxyCreateConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudGaapCheckProxyCreateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_gaap_check_proxy_create',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessRegion = config.accessRegion;
    this._bandwidth = config.bandwidth;
    this._concurrent = config.concurrent;
    this._groupId = config.groupId;
    this._id = config.id;
    this._ipAddressVersion = config.ipAddressVersion;
    this._networkType = config.networkType;
    this._packageType = config.packageType;
    this._realServerRegion = config.realServerRegion;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_region - computed: false, optional: false, required: true
  private _accessRegion?: string; 
  public get accessRegion() {
    return this.getStringAttribute('access_region');
  }
  public set accessRegion(value: string) {
    this._accessRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRegionInput() {
    return this._accessRegion;
  }

  // bandwidth - computed: false, optional: false, required: true
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // check_flag - computed: true, optional: false, required: false
  public get checkFlag() {
    return this.getNumberAttribute('check_flag');
  }

  // concurrent - computed: false, optional: false, required: true
  private _concurrent?: number; 
  public get concurrent() {
    return this.getNumberAttribute('concurrent');
  }
  public set concurrent(value: number) {
    this._concurrent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentInput() {
    return this._concurrent;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // ip_address_version - computed: false, optional: true, required: false
  private _ipAddressVersion?: string; 
  public get ipAddressVersion() {
    return this.getStringAttribute('ip_address_version');
  }
  public set ipAddressVersion(value: string) {
    this._ipAddressVersion = value;
  }
  public resetIpAddressVersion() {
    this._ipAddressVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressVersionInput() {
    return this._ipAddressVersion;
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

  // package_type - computed: false, optional: true, required: false
  private _packageType?: string; 
  public get packageType() {
    return this.getStringAttribute('package_type');
  }
  public set packageType(value: string) {
    this._packageType = value;
  }
  public resetPackageType() {
    this._packageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageTypeInput() {
    return this._packageType;
  }

  // real_server_region - computed: false, optional: false, required: true
  private _realServerRegion?: string; 
  public get realServerRegion() {
    return this.getStringAttribute('real_server_region');
  }
  public set realServerRegion(value: string) {
    this._realServerRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realServerRegionInput() {
    return this._realServerRegion;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_region: cdktf.stringToTerraform(this._accessRegion),
      bandwidth: cdktf.numberToTerraform(this._bandwidth),
      concurrent: cdktf.numberToTerraform(this._concurrent),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      ip_address_version: cdktf.stringToTerraform(this._ipAddressVersion),
      network_type: cdktf.stringToTerraform(this._networkType),
      package_type: cdktf.stringToTerraform(this._packageType),
      real_server_region: cdktf.stringToTerraform(this._realServerRegion),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_region: {
        value: cdktf.stringToHclTerraform(this._accessRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth: {
        value: cdktf.numberToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      concurrent: {
        value: cdktf.numberToHclTerraform(this._concurrent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
      ip_address_version: {
        value: cdktf.stringToHclTerraform(this._ipAddressVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_type: {
        value: cdktf.stringToHclTerraform(this._networkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_type: {
        value: cdktf.stringToHclTerraform(this._packageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      real_server_region: {
        value: cdktf.stringToHclTerraform(this._realServerRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
