// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/security_group_user_ip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityGroupUserIpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/security_group_user_ip#id SecurityGroupUserIp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target SecurityGroup id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/security_group_user_ip#security_group_id SecurityGroupUserIp#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * Address of Directly Attached IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/security_group_user_ip#user_ip_address SecurityGroupUserIp#user_ip_address}
  */
  readonly userIpAddress: string;
  /**
  * Description of Directly Attached IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/security_group_user_ip#user_ip_description SecurityGroupUserIp#user_ip_description}
  */
  readonly userIpDescription: string;
  /**
  * Type of Directly Attached IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/security_group_user_ip#user_ip_type SecurityGroupUserIp#user_ip_type}
  */
  readonly userIpType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/security_group_user_ip samsungcloudplatform_security_group_user_ip}
*/
export class SecurityGroupUserIp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_security_group_user_ip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityGroupUserIp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityGroupUserIp to import
  * @param importFromId The id of the existing SecurityGroupUserIp that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/security_group_user_ip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityGroupUserIp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_security_group_user_ip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/security_group_user_ip samsungcloudplatform_security_group_user_ip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityGroupUserIpConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityGroupUserIpConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_security_group_user_ip',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.16.0',
        providerVersionConstraint: '3.16.0'
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
    this._securityGroupId = config.securityGroupId;
    this._userIpAddress = config.userIpAddress;
    this._userIpDescription = config.userIpDescription;
    this._userIpType = config.userIpType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // user_ip_address - computed: false, optional: false, required: true
  private _userIpAddress?: string; 
  public get userIpAddress() {
    return this.getStringAttribute('user_ip_address');
  }
  public set userIpAddress(value: string) {
    this._userIpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIpAddressInput() {
    return this._userIpAddress;
  }

  // user_ip_description - computed: false, optional: false, required: true
  private _userIpDescription?: string; 
  public get userIpDescription() {
    return this.getStringAttribute('user_ip_description');
  }
  public set userIpDescription(value: string) {
    this._userIpDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIpDescriptionInput() {
    return this._userIpDescription;
  }

  // user_ip_type - computed: false, optional: false, required: true
  private _userIpType?: string; 
  public get userIpType() {
    return this.getStringAttribute('user_ip_type');
  }
  public set userIpType(value: string) {
    this._userIpType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIpTypeInput() {
    return this._userIpType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      user_ip_address: cdktf.stringToTerraform(this._userIpAddress),
      user_ip_description: cdktf.stringToTerraform(this._userIpDescription),
      user_ip_type: cdktf.stringToTerraform(this._userIpType),
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
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_ip_address: {
        value: cdktf.stringToHclTerraform(this._userIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_ip_description: {
        value: cdktf.stringToHclTerraform(this._userIpDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_ip_type: {
        value: cdktf.stringToHclTerraform(this._userIpType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
