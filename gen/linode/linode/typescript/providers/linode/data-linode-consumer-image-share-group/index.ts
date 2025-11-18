// https://registry.terraform.io/providers/linode/linode/3.6.0/docs/data-sources/consumer_image_share_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLinodeConsumerImageShareGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID of the token that has been accepted into this Image Share Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/data-sources/consumer_image_share_group#token_uuid DataLinodeConsumerImageShareGroup#token_uuid}
  */
  readonly tokenUuid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/data-sources/consumer_image_share_group linode_consumer_image_share_group}
*/
export class DataLinodeConsumerImageShareGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_consumer_image_share_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLinodeConsumerImageShareGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLinodeConsumerImageShareGroup to import
  * @param importFromId The id of the existing DataLinodeConsumerImageShareGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/data-sources/consumer_image_share_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLinodeConsumerImageShareGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_consumer_image_share_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/data-sources/consumer_image_share_group linode_consumer_image_share_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLinodeConsumerImageShareGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataLinodeConsumerImageShareGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'linode_consumer_image_share_group',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.6.0',
        providerVersionConstraint: '3.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._tokenUuid = config.tokenUuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // is_suspended - computed: true, optional: false, required: false
  public get isSuspended() {
    return this.getBooleanAttribute('is_suspended');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // token_uuid - computed: false, optional: false, required: true
  private _tokenUuid?: string; 
  public get tokenUuid() {
    return this.getStringAttribute('token_uuid');
  }
  public set tokenUuid(value: string) {
    this._tokenUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUuidInput() {
    return this._tokenUuid;
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      token_uuid: cdktf.stringToTerraform(this._tokenUuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      token_uuid: {
        value: cdktf.stringToHclTerraform(this._tokenUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
