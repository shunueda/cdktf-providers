// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/vpn_customer_gateway_configuration_download
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnCustomerGatewayConfigurationDownloadConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/vpn_customer_gateway_configuration_download#id VpnCustomerGatewayConfigurationDownload#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * VPN connection access device physical interface name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/vpn_customer_gateway_configuration_download#interface_name VpnCustomerGatewayConfigurationDownload#interface_name}
  */
  readonly interfaceName: string;
  /**
  * VPN Connection Instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/vpn_customer_gateway_configuration_download#vpn_connection_id VpnCustomerGatewayConfigurationDownload#vpn_connection_id}
  */
  readonly vpnConnectionId: string;
  /**
  * VPN Gateway Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/vpn_customer_gateway_configuration_download#vpn_gateway_id VpnCustomerGatewayConfigurationDownload#vpn_gateway_id}
  */
  readonly vpnGatewayId: string;
  /**
  * customer_gateway_vendor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/vpn_customer_gateway_configuration_download#customer_gateway_vendor VpnCustomerGatewayConfigurationDownload#customer_gateway_vendor}
  */
  readonly customerGatewayVendor: VpnCustomerGatewayConfigurationDownloadCustomerGatewayVendor;
}
export interface VpnCustomerGatewayConfigurationDownloadCustomerGatewayVendor {
  /**
  * Platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/vpn_customer_gateway_configuration_download#platform VpnCustomerGatewayConfigurationDownload#platform}
  */
  readonly platform: string;
  /**
  * SoftwareVersion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/vpn_customer_gateway_configuration_download#software_version VpnCustomerGatewayConfigurationDownload#software_version}
  */
  readonly softwareVersion: string;
  /**
  * VendorName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/vpn_customer_gateway_configuration_download#vendor_name VpnCustomerGatewayConfigurationDownload#vendor_name}
  */
  readonly vendorName: string;
}

export function vpnCustomerGatewayConfigurationDownloadCustomerGatewayVendorToTerraform(struct?: VpnCustomerGatewayConfigurationDownloadCustomerGatewayVendorOutputReference | VpnCustomerGatewayConfigurationDownloadCustomerGatewayVendor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    platform: cdktf.stringToTerraform(struct!.platform),
    software_version: cdktf.stringToTerraform(struct!.softwareVersion),
    vendor_name: cdktf.stringToTerraform(struct!.vendorName),
  }
}


export function vpnCustomerGatewayConfigurationDownloadCustomerGatewayVendorToHclTerraform(struct?: VpnCustomerGatewayConfigurationDownloadCustomerGatewayVendorOutputReference | VpnCustomerGatewayConfigurationDownloadCustomerGatewayVendor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    platform: {
      value: cdktf.stringToHclTerraform(struct!.platform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    software_version: {
      value: cdktf.stringToHclTerraform(struct!.softwareVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor_name: {
      value: cdktf.stringToHclTerraform(struct!.vendorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnCustomerGatewayConfigurationDownloadCustomerGatewayVendorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnCustomerGatewayConfigurationDownloadCustomerGatewayVendor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._platform !== undefined) {
      hasAnyValues = true;
      internalValueResult.platform = this._platform;
    }
    if (this._softwareVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.softwareVersion = this._softwareVersion;
    }
    if (this._vendorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorName = this._vendorName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnCustomerGatewayConfigurationDownloadCustomerGatewayVendor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._platform = undefined;
      this._softwareVersion = undefined;
      this._vendorName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._platform = value.platform;
      this._softwareVersion = value.softwareVersion;
      this._vendorName = value.vendorName;
    }
  }

  // platform - computed: false, optional: false, required: true
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // software_version - computed: false, optional: false, required: true
  private _softwareVersion?: string; 
  public get softwareVersion() {
    return this.getStringAttribute('software_version');
  }
  public set softwareVersion(value: string) {
    this._softwareVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareVersionInput() {
    return this._softwareVersion;
  }

  // vendor_name - computed: false, optional: false, required: true
  private _vendorName?: string; 
  public get vendorName() {
    return this.getStringAttribute('vendor_name');
  }
  public set vendorName(value: string) {
    this._vendorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorNameInput() {
    return this._vendorName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/vpn_customer_gateway_configuration_download tencentcloud_vpn_customer_gateway_configuration_download}
*/
export class VpnCustomerGatewayConfigurationDownload extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vpn_customer_gateway_configuration_download";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnCustomerGatewayConfigurationDownload resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnCustomerGatewayConfigurationDownload to import
  * @param importFromId The id of the existing VpnCustomerGatewayConfigurationDownload that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/vpn_customer_gateway_configuration_download#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnCustomerGatewayConfigurationDownload to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vpn_customer_gateway_configuration_download", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/vpn_customer_gateway_configuration_download tencentcloud_vpn_customer_gateway_configuration_download} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnCustomerGatewayConfigurationDownloadConfig
  */
  public constructor(scope: Construct, id: string, config: VpnCustomerGatewayConfigurationDownloadConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vpn_customer_gateway_configuration_download',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._interfaceName = config.interfaceName;
    this._vpnConnectionId = config.vpnConnectionId;
    this._vpnGatewayId = config.vpnGatewayId;
    this._customerGatewayVendor.internalValue = config.customerGatewayVendor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // customer_gateway_configuration - computed: true, optional: false, required: false
  public get customerGatewayConfiguration() {
    return this.getStringAttribute('customer_gateway_configuration');
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

  // interface_name - computed: false, optional: false, required: true
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // vpn_connection_id - computed: false, optional: false, required: true
  private _vpnConnectionId?: string; 
  public get vpnConnectionId() {
    return this.getStringAttribute('vpn_connection_id');
  }
  public set vpnConnectionId(value: string) {
    this._vpnConnectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnConnectionIdInput() {
    return this._vpnConnectionId;
  }

  // vpn_gateway_id - computed: false, optional: false, required: true
  private _vpnGatewayId?: string; 
  public get vpnGatewayId() {
    return this.getStringAttribute('vpn_gateway_id');
  }
  public set vpnGatewayId(value: string) {
    this._vpnGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnGatewayIdInput() {
    return this._vpnGatewayId;
  }

  // customer_gateway_vendor - computed: false, optional: false, required: true
  private _customerGatewayVendor = new VpnCustomerGatewayConfigurationDownloadCustomerGatewayVendorOutputReference(this, "customer_gateway_vendor");
  public get customerGatewayVendor() {
    return this._customerGatewayVendor;
  }
  public putCustomerGatewayVendor(value: VpnCustomerGatewayConfigurationDownloadCustomerGatewayVendor) {
    this._customerGatewayVendor.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerGatewayVendorInput() {
    return this._customerGatewayVendor.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      interface_name: cdktf.stringToTerraform(this._interfaceName),
      vpn_connection_id: cdktf.stringToTerraform(this._vpnConnectionId),
      vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId),
      customer_gateway_vendor: vpnCustomerGatewayConfigurationDownloadCustomerGatewayVendorToTerraform(this._customerGatewayVendor.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_name: {
        value: cdktf.stringToHclTerraform(this._interfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_connection_id: {
        value: cdktf.stringToHclTerraform(this._vpnConnectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_gateway_id: {
        value: cdktf.stringToHclTerraform(this._vpnGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_gateway_vendor: {
        value: vpnCustomerGatewayConfigurationDownloadCustomerGatewayVendorToHclTerraform(this._customerGatewayVendor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnCustomerGatewayConfigurationDownloadCustomerGatewayVendorList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
