// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/copilot_security_group_management_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CopilotSecurityGroupManagementConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access account name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/copilot_security_group_management_config#account_name CopilotSecurityGroupManagementConfig#account_name}
  */
  readonly accountName?: string;
  /**
  * Cloud type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/copilot_security_group_management_config#cloud_type CopilotSecurityGroupManagementConfig#cloud_type}
  */
  readonly cloudType?: number;
  /**
  * Switch to enable copilot security group management.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/copilot_security_group_management_config#enable_copilot_security_group_management CopilotSecurityGroupManagementConfig#enable_copilot_security_group_management}
  */
  readonly enableCopilotSecurityGroupManagement: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/copilot_security_group_management_config#id CopilotSecurityGroupManagementConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Copilot instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/copilot_security_group_management_config#instance_id CopilotSecurityGroupManagementConfig#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Copilot region. Valid for AWS and Azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/copilot_security_group_management_config#region CopilotSecurityGroupManagementConfig#region}
  */
  readonly region?: string;
  /**
  * VPC ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/copilot_security_group_management_config#vpc_id CopilotSecurityGroupManagementConfig#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Copilot zone. Valid for GCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/copilot_security_group_management_config#zone CopilotSecurityGroupManagementConfig#zone}
  */
  readonly zone?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/copilot_security_group_management_config aviatrix_copilot_security_group_management_config}
*/
export class CopilotSecurityGroupManagementConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_copilot_security_group_management_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CopilotSecurityGroupManagementConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CopilotSecurityGroupManagementConfig to import
  * @param importFromId The id of the existing CopilotSecurityGroupManagementConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/copilot_security_group_management_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CopilotSecurityGroupManagementConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_copilot_security_group_management_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/copilot_security_group_management_config aviatrix_copilot_security_group_management_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CopilotSecurityGroupManagementConfigConfig
  */
  public constructor(scope: Construct, id: string, config: CopilotSecurityGroupManagementConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_copilot_security_group_management_config',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.2.0',
        providerVersionConstraint: '8.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountName = config.accountName;
    this._cloudType = config.cloudType;
    this._enableCopilotSecurityGroupManagement = config.enableCopilotSecurityGroupManagement;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._region = config.region;
    this._vpcId = config.vpcId;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: true, required: false
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  public resetAccountName() {
    this._accountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // cloud_type - computed: false, optional: true, required: false
  private _cloudType?: number; 
  public get cloudType() {
    return this.getNumberAttribute('cloud_type');
  }
  public set cloudType(value: number) {
    this._cloudType = value;
  }
  public resetCloudType() {
    this._cloudType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTypeInput() {
    return this._cloudType;
  }

  // enable_copilot_security_group_management - computed: false, optional: false, required: true
  private _enableCopilotSecurityGroupManagement?: boolean | cdktf.IResolvable; 
  public get enableCopilotSecurityGroupManagement() {
    return this.getBooleanAttribute('enable_copilot_security_group_management');
  }
  public set enableCopilotSecurityGroupManagement(value: boolean | cdktf.IResolvable) {
    this._enableCopilotSecurityGroupManagement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCopilotSecurityGroupManagementInput() {
    return this._enableCopilotSecurityGroupManagement;
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

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
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

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
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
      account_name: cdktf.stringToTerraform(this._accountName),
      cloud_type: cdktf.numberToTerraform(this._cloudType),
      enable_copilot_security_group_management: cdktf.booleanToTerraform(this._enableCopilotSecurityGroupManagement),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      region: cdktf.stringToTerraform(this._region),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_name: {
        value: cdktf.stringToHclTerraform(this._accountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_type: {
        value: cdktf.numberToHclTerraform(this._cloudType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_copilot_security_group_management: {
        value: cdktf.booleanToHclTerraform(this._enableCopilotSecurityGroupManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
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
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
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
