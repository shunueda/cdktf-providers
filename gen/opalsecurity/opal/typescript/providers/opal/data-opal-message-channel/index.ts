// https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/message_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpalMessageChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the message_channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/message_channel#id DataOpalMessageChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/message_channel opal_message_channel}
*/
export class DataOpalMessageChannel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opal_message_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpalMessageChannel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpalMessageChannel to import
  * @param importFromId The id of the existing DataOpalMessageChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/message_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpalMessageChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opal_message_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/message_channel opal_message_channel} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpalMessageChannelConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpalMessageChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'opal_message_channel',
      terraformGeneratorMetadata: {
        providerName: 'opal',
        providerVersion: '3.3.3'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_private - computed: true, optional: false, required: false
  public get isPrivate() {
    return this.getBooleanAttribute('is_private');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // remote_id - computed: true, optional: false, required: false
  public get remoteId() {
    return this.getStringAttribute('remote_id');
  }

  // third_party_provider - computed: true, optional: false, required: false
  public get thirdPartyProvider() {
    return this.getStringAttribute('third_party_provider');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
