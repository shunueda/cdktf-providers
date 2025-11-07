// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_trusted_ca_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementCommandSetTrustedCaSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the trusted CAs package should be updated automatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_trusted_ca_settings#automatic_update ManagementCommandSetTrustedCaSettings#automatic_update}
  */
  readonly automaticUpdate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_trusted_ca_settings#id ManagementCommandSetTrustedCaSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_trusted_ca_settings checkpoint_management_command_set_trusted_ca_settings}
*/
export class ManagementCommandSetTrustedCaSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_command_set_trusted_ca_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementCommandSetTrustedCaSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementCommandSetTrustedCaSettings to import
  * @param importFromId The id of the existing ManagementCommandSetTrustedCaSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_trusted_ca_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementCommandSetTrustedCaSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_command_set_trusted_ca_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_trusted_ca_settings checkpoint_management_command_set_trusted_ca_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementCommandSetTrustedCaSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ManagementCommandSetTrustedCaSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_command_set_trusted_ca_settings',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._automaticUpdate = config.automaticUpdate;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automatic_update - computed: false, optional: true, required: false
  private _automaticUpdate?: boolean | cdktf.IResolvable; 
  public get automaticUpdate() {
    return this.getBooleanAttribute('automatic_update');
  }
  public set automaticUpdate(value: boolean | cdktf.IResolvable) {
    this._automaticUpdate = value;
  }
  public resetAutomaticUpdate() {
    this._automaticUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticUpdateInput() {
    return this._automaticUpdate;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automatic_update: cdktf.booleanToTerraform(this._automaticUpdate),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      automatic_update: {
        value: cdktf.booleanToHclTerraform(this._automaticUpdate),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
