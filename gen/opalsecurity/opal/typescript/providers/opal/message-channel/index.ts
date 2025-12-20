// https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/message_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MessageChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * The remote ID of the message channel. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/message_channel#remote_id MessageChannel#remote_id}
  */
  readonly remoteId: string;
  /**
  * The third party provider of the message channel. must be "SLACK"; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/message_channel#third_party_provider MessageChannel#third_party_provider}
  */
  readonly thirdPartyProvider: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/message_channel opal_message_channel}
*/
export class MessageChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opal_message_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MessageChannel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MessageChannel to import
  * @param importFromId The id of the existing MessageChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/message_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MessageChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opal_message_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/message_channel opal_message_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MessageChannelConfig
  */
  public constructor(scope: Construct, id: string, config: MessageChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'opal_message_channel',
      terraformGeneratorMetadata: {
        providerName: 'opal',
        providerVersion: '3.4.0',
        providerVersionConstraint: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._remoteId = config.remoteId;
    this._thirdPartyProvider = config.thirdPartyProvider;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_private - computed: true, optional: false, required: false
  public get isPrivate() {
    return this.getBooleanAttribute('is_private');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // remote_id - computed: false, optional: false, required: true
  private _remoteId?: string; 
  public get remoteId() {
    return this.getStringAttribute('remote_id');
  }
  public set remoteId(value: string) {
    this._remoteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIdInput() {
    return this._remoteId;
  }

  // third_party_provider - computed: false, optional: false, required: true
  private _thirdPartyProvider?: string; 
  public get thirdPartyProvider() {
    return this.getStringAttribute('third_party_provider');
  }
  public set thirdPartyProvider(value: string) {
    this._thirdPartyProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartyProviderInput() {
    return this._thirdPartyProvider;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      remote_id: cdktf.stringToTerraform(this._remoteId),
      third_party_provider: cdktf.stringToTerraform(this._thirdPartyProvider),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      remote_id: {
        value: cdktf.stringToHclTerraform(this._remoteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      third_party_provider: {
        value: cdktf.stringToHclTerraform(this._thirdPartyProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
