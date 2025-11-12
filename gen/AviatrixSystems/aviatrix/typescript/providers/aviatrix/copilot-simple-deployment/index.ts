// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/copilot_simple_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CopilotSimpleDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Aviatrix access account name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/copilot_simple_deployment#account_name CopilotSimpleDeployment#account_name}
  */
  readonly accountName: string;
  /**
  * Cloud type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/copilot_simple_deployment#cloud_type CopilotSimpleDeployment#cloud_type}
  */
  readonly cloudType: number;
  /**
  * Controller service account password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/copilot_simple_deployment#controller_service_account_password CopilotSimpleDeployment#controller_service_account_password}
  */
  readonly controllerServiceAccountPassword: string;
  /**
  * Controller service account username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/copilot_simple_deployment#controller_service_account_username CopilotSimpleDeployment#controller_service_account_username}
  */
  readonly controllerServiceAccountUsername: string;
  /**
  * Data volume size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/copilot_simple_deployment#data_volume_size CopilotSimpleDeployment#data_volume_size}
  */
  readonly dataVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/copilot_simple_deployment#id CopilotSimpleDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/copilot_simple_deployment#instance_size CopilotSimpleDeployment#instance_size}
  */
  readonly instanceSize?: string;
  /**
  * Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/copilot_simple_deployment#region CopilotSimpleDeployment#region}
  */
  readonly region: string;
  /**
  * Subnet CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/copilot_simple_deployment#subnet CopilotSimpleDeployment#subnet}
  */
  readonly subnet: string;
  /**
  * VPC ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/copilot_simple_deployment#vpc_id CopilotSimpleDeployment#vpc_id}
  */
  readonly vpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/copilot_simple_deployment aviatrix_copilot_simple_deployment}
*/
export class CopilotSimpleDeployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_copilot_simple_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CopilotSimpleDeployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CopilotSimpleDeployment to import
  * @param importFromId The id of the existing CopilotSimpleDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/copilot_simple_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CopilotSimpleDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_copilot_simple_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/copilot_simple_deployment aviatrix_copilot_simple_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CopilotSimpleDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: CopilotSimpleDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_copilot_simple_deployment',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10',
        providerVersionConstraint: '8.1.10'
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
    this._controllerServiceAccountPassword = config.controllerServiceAccountPassword;
    this._controllerServiceAccountUsername = config.controllerServiceAccountUsername;
    this._dataVolumeSize = config.dataVolumeSize;
    this._id = config.id;
    this._instanceSize = config.instanceSize;
    this._region = config.region;
    this._subnet = config.subnet;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // cloud_type - computed: false, optional: false, required: true
  private _cloudType?: number; 
  public get cloudType() {
    return this.getNumberAttribute('cloud_type');
  }
  public set cloudType(value: number) {
    this._cloudType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTypeInput() {
    return this._cloudType;
  }

  // controller_service_account_password - computed: false, optional: false, required: true
  private _controllerServiceAccountPassword?: string; 
  public get controllerServiceAccountPassword() {
    return this.getStringAttribute('controller_service_account_password');
  }
  public set controllerServiceAccountPassword(value: string) {
    this._controllerServiceAccountPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerServiceAccountPasswordInput() {
    return this._controllerServiceAccountPassword;
  }

  // controller_service_account_username - computed: false, optional: false, required: true
  private _controllerServiceAccountUsername?: string; 
  public get controllerServiceAccountUsername() {
    return this.getStringAttribute('controller_service_account_username');
  }
  public set controllerServiceAccountUsername(value: string) {
    this._controllerServiceAccountUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerServiceAccountUsernameInput() {
    return this._controllerServiceAccountUsername;
  }

  // data_volume_size - computed: false, optional: true, required: false
  private _dataVolumeSize?: number; 
  public get dataVolumeSize() {
    return this.getNumberAttribute('data_volume_size');
  }
  public set dataVolumeSize(value: number) {
    this._dataVolumeSize = value;
  }
  public resetDataVolumeSize() {
    this._dataVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVolumeSizeInput() {
    return this._dataVolumeSize;
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

  // instance_size - computed: false, optional: true, required: false
  private _instanceSize?: string; 
  public get instanceSize() {
    return this.getStringAttribute('instance_size');
  }
  public set instanceSize(value: string) {
    this._instanceSize = value;
  }
  public resetInstanceSize() {
    this._instanceSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSizeInput() {
    return this._instanceSize;
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: cdktf.stringToTerraform(this._accountName),
      cloud_type: cdktf.numberToTerraform(this._cloudType),
      controller_service_account_password: cdktf.stringToTerraform(this._controllerServiceAccountPassword),
      controller_service_account_username: cdktf.stringToTerraform(this._controllerServiceAccountUsername),
      data_volume_size: cdktf.numberToTerraform(this._dataVolumeSize),
      id: cdktf.stringToTerraform(this._id),
      instance_size: cdktf.stringToTerraform(this._instanceSize),
      region: cdktf.stringToTerraform(this._region),
      subnet: cdktf.stringToTerraform(this._subnet),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
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
      controller_service_account_password: {
        value: cdktf.stringToHclTerraform(this._controllerServiceAccountPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      controller_service_account_username: {
        value: cdktf.stringToHclTerraform(this._controllerServiceAccountUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_volume_size: {
        value: cdktf.numberToHclTerraform(this._dataVolumeSize),
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
      instance_size: {
        value: cdktf.stringToHclTerraform(this._instanceSize),
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
      subnet: {
        value: cdktf.stringToHclTerraform(this._subnet),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
