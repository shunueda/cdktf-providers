// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_supportedcontent_default
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConversationsMessagingSupportedcontentDefaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * The SupportedContent unique identifier associated with this integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_supportedcontent_default#content_id ConversationsMessagingSupportedcontentDefault#content_id}
  */
  readonly contentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_supportedcontent_default#id ConversationsMessagingSupportedcontentDefault#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_supportedcontent_default genesyscloud_conversations_messaging_supportedcontent_default}
*/
export class ConversationsMessagingSupportedcontentDefault extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_conversations_messaging_supportedcontent_default";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConversationsMessagingSupportedcontentDefault resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConversationsMessagingSupportedcontentDefault to import
  * @param importFromId The id of the existing ConversationsMessagingSupportedcontentDefault that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_supportedcontent_default#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConversationsMessagingSupportedcontentDefault to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_conversations_messaging_supportedcontent_default", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/conversations_messaging_supportedcontent_default genesyscloud_conversations_messaging_supportedcontent_default} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConversationsMessagingSupportedcontentDefaultConfig
  */
  public constructor(scope: Construct, id: string, config: ConversationsMessagingSupportedcontentDefaultConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_conversations_messaging_supportedcontent_default',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contentId = config.contentId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content_id - computed: false, optional: false, required: true
  private _contentId?: string; 
  public get contentId() {
    return this.getStringAttribute('content_id');
  }
  public set contentId(value: string) {
    this._contentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentIdInput() {
    return this._contentId;
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
      content_id: cdktf.stringToTerraform(this._contentId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content_id: {
        value: cdktf.stringToHclTerraform(this._contentId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
