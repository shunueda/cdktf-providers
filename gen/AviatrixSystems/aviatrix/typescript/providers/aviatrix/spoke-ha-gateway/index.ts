// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/spoke_ha_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpokeHaGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Availability domain for OCI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/spoke_ha_gateway#availability_domain SpokeHaGateway#availability_domain}
  */
  readonly availabilityDomain?: string;
  /**
  * The name of the public IP address and its resource group in Azure to assign to this Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/spoke_ha_gateway#azure_eip_name_resource_group SpokeHaGateway#azure_eip_name_resource_group}
  */
  readonly azureEipNameResourceGroup?: string;
  /**
  * If set, the specified EIP is used for this gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/spoke_ha_gateway#eip SpokeHaGateway#eip}
  */
  readonly eip?: string;
  /**
  * Fault domain for OCI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/spoke_ha_gateway#fault_domain SpokeHaGateway#fault_domain}
  */
  readonly faultDomain?: string;
  /**
  * Name of the HA gateway which is going to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/spoke_ha_gateway#gw_name SpokeHaGateway#gw_name}
  */
  readonly gwName?: string;
  /**
  * Size of the gateway instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/spoke_ha_gateway#gw_size SpokeHaGateway#gw_size}
  */
  readonly gwSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/spoke_ha_gateway#id SpokeHaGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable Insane Mode for Spoke Gateway. Valid values: true, false. Supported for AWS/AWSGov, GCP, Azure and OCI. If insane mode is enabled, gateway size has to at least be c5 size for AWS and Standard_D3_v2 size for Azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/spoke_ha_gateway#insane_mode SpokeHaGateway#insane_mode}
  */
  readonly insaneMode?: boolean | cdktf.IResolvable;
  /**
  * AZ of subnet being created for Insane Mode Spoke Gateway. Required if insane_mode is enabled for AWS cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/spoke_ha_gateway#insane_mode_az SpokeHaGateway#insane_mode_az}
  */
  readonly insaneModeAz?: string;
  /**
  * Name of the primary gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/spoke_ha_gateway#primary_gw_name SpokeHaGateway#primary_gw_name}
  */
  readonly primaryGwName: string;
  /**
  * Public Subnet Info.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/spoke_ha_gateway#subnet SpokeHaGateway#subnet}
  */
  readonly subnet: string;
  /**
  * Availability Zone. Required for GCP gateway, example: 'us-west1-c'. Optional for Azure / Azure GOV / Azure CHINA gateway in the form 'az-n', example: 'az-2'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/spoke_ha_gateway#zone SpokeHaGateway#zone}
  */
  readonly zone?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/spoke_ha_gateway aviatrix_spoke_ha_gateway}
*/
export class SpokeHaGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_spoke_ha_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SpokeHaGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpokeHaGateway to import
  * @param importFromId The id of the existing SpokeHaGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/spoke_ha_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpokeHaGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_spoke_ha_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/spoke_ha_gateway aviatrix_spoke_ha_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpokeHaGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: SpokeHaGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_spoke_ha_gateway',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityDomain = config.availabilityDomain;
    this._azureEipNameResourceGroup = config.azureEipNameResourceGroup;
    this._eip = config.eip;
    this._faultDomain = config.faultDomain;
    this._gwName = config.gwName;
    this._gwSize = config.gwSize;
    this._id = config.id;
    this._insaneMode = config.insaneMode;
    this._insaneModeAz = config.insaneModeAz;
    this._primaryGwName = config.primaryGwName;
    this._subnet = config.subnet;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // availability_domain - computed: true, optional: true, required: false
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  public resetAvailabilityDomain() {
    this._availabilityDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // azure_eip_name_resource_group - computed: false, optional: true, required: false
  private _azureEipNameResourceGroup?: string; 
  public get azureEipNameResourceGroup() {
    return this.getStringAttribute('azure_eip_name_resource_group');
  }
  public set azureEipNameResourceGroup(value: string) {
    this._azureEipNameResourceGroup = value;
  }
  public resetAzureEipNameResourceGroup() {
    this._azureEipNameResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureEipNameResourceGroupInput() {
    return this._azureEipNameResourceGroup;
  }

  // cloud_instance_id - computed: true, optional: false, required: false
  public get cloudInstanceId() {
    return this.getStringAttribute('cloud_instance_id');
  }

  // cloud_type - computed: true, optional: false, required: false
  public get cloudType() {
    return this.getNumberAttribute('cloud_type');
  }

  // eip - computed: true, optional: true, required: false
  private _eip?: string; 
  public get eip() {
    return this.getStringAttribute('eip');
  }
  public set eip(value: string) {
    this._eip = value;
  }
  public resetEip() {
    this._eip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eipInput() {
    return this._eip;
  }

  // fault_domain - computed: true, optional: true, required: false
  private _faultDomain?: string; 
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }
  public set faultDomain(value: string) {
    this._faultDomain = value;
  }
  public resetFaultDomain() {
    this._faultDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultDomainInput() {
    return this._faultDomain;
  }

  // gw_name - computed: true, optional: true, required: false
  private _gwName?: string; 
  public get gwName() {
    return this.getStringAttribute('gw_name');
  }
  public set gwName(value: string) {
    this._gwName = value;
  }
  public resetGwName() {
    this._gwName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gwNameInput() {
    return this._gwName;
  }

  // gw_size - computed: true, optional: true, required: false
  private _gwSize?: string; 
  public get gwSize() {
    return this.getStringAttribute('gw_size');
  }
  public set gwSize(value: string) {
    this._gwSize = value;
  }
  public resetGwSize() {
    this._gwSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gwSizeInput() {
    return this._gwSize;
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

  // image_version - computed: true, optional: false, required: false
  public get imageVersion() {
    return this.getStringAttribute('image_version');
  }

  // insane_mode - computed: false, optional: true, required: false
  private _insaneMode?: boolean | cdktf.IResolvable; 
  public get insaneMode() {
    return this.getBooleanAttribute('insane_mode');
  }
  public set insaneMode(value: boolean | cdktf.IResolvable) {
    this._insaneMode = value;
  }
  public resetInsaneMode() {
    this._insaneMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insaneModeInput() {
    return this._insaneMode;
  }

  // insane_mode_az - computed: false, optional: true, required: false
  private _insaneModeAz?: string; 
  public get insaneModeAz() {
    return this.getStringAttribute('insane_mode_az');
  }
  public set insaneModeAz(value: string) {
    this._insaneModeAz = value;
  }
  public resetInsaneModeAz() {
    this._insaneModeAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insaneModeAzInput() {
    return this._insaneModeAz;
  }

  // primary_gw_name - computed: false, optional: false, required: true
  private _primaryGwName?: string; 
  public get primaryGwName() {
    return this.getStringAttribute('primary_gw_name');
  }
  public set primaryGwName(value: string) {
    this._primaryGwName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryGwNameInput() {
    return this._primaryGwName;
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // security_group_id - computed: true, optional: false, required: false
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }

  // software_version - computed: true, optional: false, required: false
  public get softwareVersion() {
    return this.getStringAttribute('software_version');
  }

  // subnet - computed: false, optional: false, required: true
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // vpc_reg - computed: true, optional: false, required: false
  public get vpcReg() {
    return this.getStringAttribute('vpc_reg');
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_domain: cdktf.stringToTerraform(this._availabilityDomain),
      azure_eip_name_resource_group: cdktf.stringToTerraform(this._azureEipNameResourceGroup),
      eip: cdktf.stringToTerraform(this._eip),
      fault_domain: cdktf.stringToTerraform(this._faultDomain),
      gw_name: cdktf.stringToTerraform(this._gwName),
      gw_size: cdktf.stringToTerraform(this._gwSize),
      id: cdktf.stringToTerraform(this._id),
      insane_mode: cdktf.booleanToTerraform(this._insaneMode),
      insane_mode_az: cdktf.stringToTerraform(this._insaneModeAz),
      primary_gw_name: cdktf.stringToTerraform(this._primaryGwName),
      subnet: cdktf.stringToTerraform(this._subnet),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_domain: {
        value: cdktf.stringToHclTerraform(this._availabilityDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_eip_name_resource_group: {
        value: cdktf.stringToHclTerraform(this._azureEipNameResourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eip: {
        value: cdktf.stringToHclTerraform(this._eip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fault_domain: {
        value: cdktf.stringToHclTerraform(this._faultDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gw_name: {
        value: cdktf.stringToHclTerraform(this._gwName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gw_size: {
        value: cdktf.stringToHclTerraform(this._gwSize),
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
      insane_mode: {
        value: cdktf.booleanToHclTerraform(this._insaneMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      insane_mode_az: {
        value: cdktf.stringToHclTerraform(this._insaneModeAz),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_gw_name: {
        value: cdktf.stringToHclTerraform(this._primaryGwName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet: {
        value: cdktf.stringToHclTerraform(this._subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
