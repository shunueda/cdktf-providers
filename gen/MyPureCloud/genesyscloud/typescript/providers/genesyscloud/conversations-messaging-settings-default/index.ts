// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_settings_default
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConversationsMessagingSettingsDefaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_settings_default#id ConversationsMessagingSettingsDefault#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Messaging Setting ID to be used as the default for this Organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_settings_default#setting_id ConversationsMessagingSettingsDefault#setting_id}
  */
  readonly settingId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_settings_default genesyscloud_conversations_messaging_settings_default}
*/
export class ConversationsMessagingSettingsDefault extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_conversations_messaging_settings_default";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConversationsMessagingSettingsDefault resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConversationsMessagingSettingsDefault to import
  * @param importFromId The id of the existing ConversationsMessagingSettingsDefault that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_settings_default#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConversationsMessagingSettingsDefault to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_conversations_messaging_settings_default", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/conversations_messaging_settings_default genesyscloud_conversations_messaging_settings_default} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConversationsMessagingSettingsDefaultConfig
  */
  public constructor(scope: Construct, id: string, config: ConversationsMessagingSettingsDefaultConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_conversations_messaging_settings_default',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.72.2',
        providerVersionConstraint: '1.72.2'
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
    this._settingId = config.settingId;
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

  // setting_id - computed: false, optional: false, required: true
  private _settingId?: string; 
  public get settingId() {
    return this.getStringAttribute('setting_id');
  }
  public set settingId(value: string) {
    this._settingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingIdInput() {
    return this._settingId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      setting_id: cdktf.stringToTerraform(this._settingId),
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
      setting_id: {
        value: cdktf.stringToHclTerraform(this._settingId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
