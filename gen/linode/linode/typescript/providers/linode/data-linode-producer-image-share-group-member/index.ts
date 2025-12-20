// https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/producer_image_share_group_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLinodeProducerImageShareGroupMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Image Share Group the member belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/producer_image_share_group_member#sharegroup_id DataLinodeProducerImageShareGroupMember#sharegroup_id}
  */
  readonly sharegroupId: number;
  /**
  * The UUID of member's token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/producer_image_share_group_member#token_uuid DataLinodeProducerImageShareGroupMember#token_uuid}
  */
  readonly tokenUuid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/producer_image_share_group_member linode_producer_image_share_group_member}
*/
export class DataLinodeProducerImageShareGroupMember extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_producer_image_share_group_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLinodeProducerImageShareGroupMember resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLinodeProducerImageShareGroupMember to import
  * @param importFromId The id of the existing DataLinodeProducerImageShareGroupMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/producer_image_share_group_member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLinodeProducerImageShareGroupMember to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_producer_image_share_group_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/producer_image_share_group_member linode_producer_image_share_group_member} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLinodeProducerImageShareGroupMemberConfig
  */
  public constructor(scope: Construct, id: string, config: DataLinodeProducerImageShareGroupMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'linode_producer_image_share_group_member',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.7.0',
        providerVersionConstraint: '3.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._sharegroupId = config.sharegroupId;
    this._tokenUuid = config.tokenUuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // expiry - computed: true, optional: false, required: false
  public get expiry() {
    return this.getStringAttribute('expiry');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // sharegroup_id - computed: false, optional: false, required: true
  private _sharegroupId?: number; 
  public get sharegroupId() {
    return this.getNumberAttribute('sharegroup_id');
  }
  public set sharegroupId(value: number) {
    this._sharegroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharegroupIdInput() {
    return this._sharegroupId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      sharegroup_id: cdktf.numberToTerraform(this._sharegroupId),
      token_uuid: cdktf.stringToTerraform(this._tokenUuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      sharegroup_id: {
        value: cdktf.numberToHclTerraform(this._sharegroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
