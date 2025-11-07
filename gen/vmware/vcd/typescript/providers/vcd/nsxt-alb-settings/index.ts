// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxtAlbSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Edge gateway ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_settings#edge_gateway_id NsxtAlbSettings#edge_gateway_id}
  */
  readonly edgeGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_settings#id NsxtAlbSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The IPv6 network definition in Gateway CIDR format which will be used by Load Balancer service on Edge (VCD 10.4.0+)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_settings#ipv6_service_network_specification NsxtAlbSettings#ipv6_service_network_specification}
  */
  readonly ipv6ServiceNetworkSpecification?: string;
  /**
  * Defines if ALB is enabled on Edge Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_settings#is_active NsxtAlbSettings#is_active}
  */
  readonly isActive: boolean | cdktf.IResolvable;
  /**
  * Enabling transparent mode allows to configure Preserve Client IP on a Virtual Service (VCD 10.4.1+)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_settings#is_transparent_mode_enabled NsxtAlbSettings#is_transparent_mode_enabled}
  */
  readonly isTransparentModeEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_settings#org NsxtAlbSettings#org}
  */
  readonly org?: string;
  /**
  * Optional custom network CIDR definition for ALB Service Engine placement (VCD default is 192.168.255.1/25)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_settings#service_network_specification NsxtAlbSettings#service_network_specification}
  */
  readonly serviceNetworkSpecification?: string;
  /**
  * Feature set for ALB in this Edge Gateway. One of 'STANDARD', 'PREMIUM'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_settings#supported_feature_set NsxtAlbSettings#supported_feature_set}
  */
  readonly supportedFeatureSet?: string;
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_settings#vdc NsxtAlbSettings#vdc}
  */
  readonly vdc?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_settings vcd_nsxt_alb_settings}
*/
export class NsxtAlbSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_alb_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxtAlbSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxtAlbSettings to import
  * @param importFromId The id of the existing NsxtAlbSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxtAlbSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_alb_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_settings vcd_nsxt_alb_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxtAlbSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: NsxtAlbSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_alb_settings',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._edgeGatewayId = config.edgeGatewayId;
    this._id = config.id;
    this._ipv6ServiceNetworkSpecification = config.ipv6ServiceNetworkSpecification;
    this._isActive = config.isActive;
    this._isTransparentModeEnabled = config.isTransparentModeEnabled;
    this._org = config.org;
    this._serviceNetworkSpecification = config.serviceNetworkSpecification;
    this._supportedFeatureSet = config.supportedFeatureSet;
    this._vdc = config.vdc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // edge_gateway_id - computed: false, optional: false, required: true
  private _edgeGatewayId?: string; 
  public get edgeGatewayId() {
    return this.getStringAttribute('edge_gateway_id');
  }
  public set edgeGatewayId(value: string) {
    this._edgeGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeGatewayIdInput() {
    return this._edgeGatewayId;
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

  // ipv6_service_network_specification - computed: true, optional: true, required: false
  private _ipv6ServiceNetworkSpecification?: string; 
  public get ipv6ServiceNetworkSpecification() {
    return this.getStringAttribute('ipv6_service_network_specification');
  }
  public set ipv6ServiceNetworkSpecification(value: string) {
    this._ipv6ServiceNetworkSpecification = value;
  }
  public resetIpv6ServiceNetworkSpecification() {
    this._ipv6ServiceNetworkSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ServiceNetworkSpecificationInput() {
    return this._ipv6ServiceNetworkSpecification;
  }

  // is_active - computed: false, optional: false, required: true
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
  }

  // is_transparent_mode_enabled - computed: true, optional: true, required: false
  private _isTransparentModeEnabled?: boolean | cdktf.IResolvable; 
  public get isTransparentModeEnabled() {
    return this.getBooleanAttribute('is_transparent_mode_enabled');
  }
  public set isTransparentModeEnabled(value: boolean | cdktf.IResolvable) {
    this._isTransparentModeEnabled = value;
  }
  public resetIsTransparentModeEnabled() {
    this._isTransparentModeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTransparentModeEnabledInput() {
    return this._isTransparentModeEnabled;
  }

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // service_network_specification - computed: true, optional: true, required: false
  private _serviceNetworkSpecification?: string; 
  public get serviceNetworkSpecification() {
    return this.getStringAttribute('service_network_specification');
  }
  public set serviceNetworkSpecification(value: string) {
    this._serviceNetworkSpecification = value;
  }
  public resetServiceNetworkSpecification() {
    this._serviceNetworkSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNetworkSpecificationInput() {
    return this._serviceNetworkSpecification;
  }

  // supported_feature_set - computed: true, optional: true, required: false
  private _supportedFeatureSet?: string; 
  public get supportedFeatureSet() {
    return this.getStringAttribute('supported_feature_set');
  }
  public set supportedFeatureSet(value: string) {
    this._supportedFeatureSet = value;
  }
  public resetSupportedFeatureSet() {
    this._supportedFeatureSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedFeatureSetInput() {
    return this._supportedFeatureSet;
  }

  // vdc - computed: true, optional: true, required: false
  private _vdc?: string; 
  public get vdc() {
    return this.getStringAttribute('vdc');
  }
  public set vdc(value: string) {
    this._vdc = value;
  }
  public resetVdc() {
    this._vdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcInput() {
    return this._vdc;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      edge_gateway_id: cdktf.stringToTerraform(this._edgeGatewayId),
      id: cdktf.stringToTerraform(this._id),
      ipv6_service_network_specification: cdktf.stringToTerraform(this._ipv6ServiceNetworkSpecification),
      is_active: cdktf.booleanToTerraform(this._isActive),
      is_transparent_mode_enabled: cdktf.booleanToTerraform(this._isTransparentModeEnabled),
      org: cdktf.stringToTerraform(this._org),
      service_network_specification: cdktf.stringToTerraform(this._serviceNetworkSpecification),
      supported_feature_set: cdktf.stringToTerraform(this._supportedFeatureSet),
      vdc: cdktf.stringToTerraform(this._vdc),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      edge_gateway_id: {
        value: cdktf.stringToHclTerraform(this._edgeGatewayId),
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
      ipv6_service_network_specification: {
        value: cdktf.stringToHclTerraform(this._ipv6ServiceNetworkSpecification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_active: {
        value: cdktf.booleanToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_transparent_mode_enabled: {
        value: cdktf.booleanToHclTerraform(this._isTransparentModeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_network_specification: {
        value: cdktf.stringToHclTerraform(this._serviceNetworkSpecification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      supported_feature_set: {
        value: cdktf.stringToHclTerraform(this._supportedFeatureSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdc: {
        value: cdktf.stringToHclTerraform(this._vdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
