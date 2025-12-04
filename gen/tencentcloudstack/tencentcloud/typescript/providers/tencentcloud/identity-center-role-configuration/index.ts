// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/identity_center_role_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityCenterRoleConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access configuration description, which contains up to 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/identity_center_role_configuration#description IdentityCenterRoleConfiguration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/identity_center_role_configuration#id IdentityCenterRoleConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Initial access page. It indicates the initial access page URL when CIC users use the access configuration to access the target account of the Tencent Cloud Organization. This page must be the Tencent Cloud console page. The default is null, which indicates navigating to the home page of the Tencent Cloud console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/identity_center_role_configuration#relay_state IdentityCenterRoleConfiguration#relay_state}
  */
  readonly relayState?: string;
  /**
  * Access configuration name, which contains up to 128 characters, including English letters, digits, and hyphens (-).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/identity_center_role_configuration#role_configuration_name IdentityCenterRoleConfiguration#role_configuration_name}
  */
  readonly roleConfigurationName: string;
  /**
  * Session duration. It indicates the maximum session duration when CIC users use the access configuration to access the target account of the Tencent Cloud Organization. Unit: seconds. Value range: 900-43,200 (15 minutes to 12 hours). Default value: 3600 (1 hour).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/identity_center_role_configuration#session_duration IdentityCenterRoleConfiguration#session_duration}
  */
  readonly sessionDuration?: number;
  /**
  * Space ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/identity_center_role_configuration#zone_id IdentityCenterRoleConfiguration#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/identity_center_role_configuration tencentcloud_identity_center_role_configuration}
*/
export class IdentityCenterRoleConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_identity_center_role_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityCenterRoleConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityCenterRoleConfiguration to import
  * @param importFromId The id of the existing IdentityCenterRoleConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/identity_center_role_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityCenterRoleConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_identity_center_role_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/identity_center_role_configuration tencentcloud_identity_center_role_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityCenterRoleConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityCenterRoleConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_identity_center_role_configuration',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._relayState = config.relayState;
    this._roleConfigurationName = config.roleConfigurationName;
    this._sessionDuration = config.sessionDuration;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // relay_state - computed: true, optional: true, required: false
  private _relayState?: string; 
  public get relayState() {
    return this.getStringAttribute('relay_state');
  }
  public set relayState(value: string) {
    this._relayState = value;
  }
  public resetRelayState() {
    this._relayState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayStateInput() {
    return this._relayState;
  }

  // role_configuration_id - computed: true, optional: false, required: false
  public get roleConfigurationId() {
    return this.getStringAttribute('role_configuration_id');
  }

  // role_configuration_name - computed: false, optional: false, required: true
  private _roleConfigurationName?: string; 
  public get roleConfigurationName() {
    return this.getStringAttribute('role_configuration_name');
  }
  public set roleConfigurationName(value: string) {
    this._roleConfigurationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleConfigurationNameInput() {
    return this._roleConfigurationName;
  }

  // session_duration - computed: true, optional: true, required: false
  private _sessionDuration?: number; 
  public get sessionDuration() {
    return this.getNumberAttribute('session_duration');
  }
  public set sessionDuration(value: number) {
    this._sessionDuration = value;
  }
  public resetSessionDuration() {
    this._sessionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionDurationInput() {
    return this._sessionDuration;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      relay_state: cdktf.stringToTerraform(this._relayState),
      role_configuration_name: cdktf.stringToTerraform(this._roleConfigurationName),
      session_duration: cdktf.numberToTerraform(this._sessionDuration),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      relay_state: {
        value: cdktf.stringToHclTerraform(this._relayState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_configuration_name: {
        value: cdktf.stringToHclTerraform(this._roleConfigurationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_duration: {
        value: cdktf.numberToHclTerraform(this._sessionDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
