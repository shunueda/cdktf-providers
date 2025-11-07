// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_mqtt
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateMqttConfig extends cdktf.TerraformMetaArguments {
  /**
  * Use the begining part of client ID to calculate hash value (client ID string length to calculate hash value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_mqtt#clientid_hash_first SlbTemplateMqtt#clientid_hash_first}
  */
  readonly clientidHashFirst?: number;
  /**
  * Use the end part of Client ID to calculate hash value (Client ID length to calculate hash value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_mqtt#clientid_hash_last SlbTemplateMqtt#clientid_hash_last}
  */
  readonly clientidHashLast?: number;
  /**
  * Skip part of Client ID to calculate hash value (Offset of the Client ID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_mqtt#clientid_hash_offset SlbTemplateMqtt#clientid_hash_offset}
  */
  readonly clientidHashOffset?: number;
  /**
  * Use Client ID's hash value to select server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_mqtt#clientid_hash_persist SlbTemplateMqtt#clientid_hash_persist}
  */
  readonly clientidHashPersist?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_mqtt#id SlbTemplateMqtt#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * MQTT Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_mqtt#name SlbTemplateMqtt#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_mqtt#user_tag SlbTemplateMqtt#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_mqtt#uuid SlbTemplateMqtt#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_mqtt thunder_slb_template_mqtt}
*/
export class SlbTemplateMqtt extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_mqtt";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateMqtt resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateMqtt to import
  * @param importFromId The id of the existing SlbTemplateMqtt that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_mqtt#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateMqtt to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_mqtt", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_mqtt thunder_slb_template_mqtt} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateMqttConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateMqttConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_mqtt',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientidHashFirst = config.clientidHashFirst;
    this._clientidHashLast = config.clientidHashLast;
    this._clientidHashOffset = config.clientidHashOffset;
    this._clientidHashPersist = config.clientidHashPersist;
    this._id = config.id;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clientid_hash_first - computed: false, optional: true, required: false
  private _clientidHashFirst?: number; 
  public get clientidHashFirst() {
    return this.getNumberAttribute('clientid_hash_first');
  }
  public set clientidHashFirst(value: number) {
    this._clientidHashFirst = value;
  }
  public resetClientidHashFirst() {
    this._clientidHashFirst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientidHashFirstInput() {
    return this._clientidHashFirst;
  }

  // clientid_hash_last - computed: false, optional: true, required: false
  private _clientidHashLast?: number; 
  public get clientidHashLast() {
    return this.getNumberAttribute('clientid_hash_last');
  }
  public set clientidHashLast(value: number) {
    this._clientidHashLast = value;
  }
  public resetClientidHashLast() {
    this._clientidHashLast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientidHashLastInput() {
    return this._clientidHashLast;
  }

  // clientid_hash_offset - computed: false, optional: true, required: false
  private _clientidHashOffset?: number; 
  public get clientidHashOffset() {
    return this.getNumberAttribute('clientid_hash_offset');
  }
  public set clientidHashOffset(value: number) {
    this._clientidHashOffset = value;
  }
  public resetClientidHashOffset() {
    this._clientidHashOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientidHashOffsetInput() {
    return this._clientidHashOffset;
  }

  // clientid_hash_persist - computed: false, optional: true, required: false
  private _clientidHashPersist?: number; 
  public get clientidHashPersist() {
    return this.getNumberAttribute('clientid_hash_persist');
  }
  public set clientidHashPersist(value: number) {
    this._clientidHashPersist = value;
  }
  public resetClientidHashPersist() {
    this._clientidHashPersist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientidHashPersistInput() {
    return this._clientidHashPersist;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clientid_hash_first: cdktf.numberToTerraform(this._clientidHashFirst),
      clientid_hash_last: cdktf.numberToTerraform(this._clientidHashLast),
      clientid_hash_offset: cdktf.numberToTerraform(this._clientidHashOffset),
      clientid_hash_persist: cdktf.numberToTerraform(this._clientidHashPersist),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clientid_hash_first: {
        value: cdktf.numberToHclTerraform(this._clientidHashFirst),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      clientid_hash_last: {
        value: cdktf.numberToHclTerraform(this._clientidHashLast),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      clientid_hash_offset: {
        value: cdktf.numberToHclTerraform(this._clientidHashOffset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      clientid_hash_persist: {
        value: cdktf.numberToHclTerraform(this._clientidHashPersist),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
