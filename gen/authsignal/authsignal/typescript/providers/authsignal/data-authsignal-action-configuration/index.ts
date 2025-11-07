// https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/data-sources/action_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAuthsignalActionConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the action that users perform which you will track. (e.g 'login')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/data-sources/action_configuration#action_code DataAuthsignalActionConfiguration#action_code}
  */
  readonly actionCode: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/data-sources/action_configuration authsignal_action_configuration}
*/
export class DataAuthsignalActionConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authsignal_action_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAuthsignalActionConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAuthsignalActionConfiguration to import
  * @param importFromId The id of the existing DataAuthsignalActionConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/data-sources/action_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAuthsignalActionConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authsignal_action_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/data-sources/action_configuration authsignal_action_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAuthsignalActionConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAuthsignalActionConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'authsignal_action_configuration',
      terraformGeneratorMetadata: {
        providerName: 'authsignal',
        providerVersion: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionCode = config.actionCode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_code - computed: false, optional: false, required: true
  private _actionCode?: string; 
  public get actionCode() {
    return this.getStringAttribute('action_code');
  }
  public set actionCode(value: string) {
    this._actionCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionCodeInput() {
    return this._actionCode;
  }

  // default_user_action_result - computed: true, optional: false, required: false
  public get defaultUserActionResult() {
    return this.getStringAttribute('default_user_action_result');
  }

  // default_verification_method - computed: true, optional: false, required: false
  public get defaultVerificationMethod() {
    return this.getStringAttribute('default_verification_method');
  }

  // last_action_created_at - computed: true, optional: false, required: false
  public get lastActionCreatedAt() {
    return this.getStringAttribute('last_action_created_at');
  }

  // messaging_templates - computed: true, optional: false, required: false
  public get messagingTemplates() {
    return this.getStringAttribute('messaging_templates');
  }

  // prompt_to_enroll_verification_methods - computed: true, optional: false, required: false
  public get promptToEnrollVerificationMethods() {
    return this.getListAttribute('prompt_to_enroll_verification_methods');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // verification_methods - computed: true, optional: false, required: false
  public get verificationMethods() {
    return this.getListAttribute('verification_methods');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_code: cdktf.stringToTerraform(this._actionCode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_code: {
        value: cdktf.stringToHclTerraform(this._actionCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
