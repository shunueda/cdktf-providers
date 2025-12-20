// https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/producer_image_share_group_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProducerImageShareGroupMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * The label of the member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/producer_image_share_group_member#label ProducerImageShareGroupMember#label}
  */
  readonly label: string;
  /**
  * The ID of the Image Share Group the member belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/producer_image_share_group_member#sharegroup_id ProducerImageShareGroupMember#sharegroup_id}
  */
  readonly sharegroupId: number;
  /**
  * The one-time-use token provided by the prospective member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/producer_image_share_group_member#token ProducerImageShareGroupMember#token}
  */
  readonly token: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/producer_image_share_group_member linode_producer_image_share_group_member}
*/
export class ProducerImageShareGroupMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_producer_image_share_group_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProducerImageShareGroupMember resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProducerImageShareGroupMember to import
  * @param importFromId The id of the existing ProducerImageShareGroupMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/producer_image_share_group_member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProducerImageShareGroupMember to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_producer_image_share_group_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/producer_image_share_group_member linode_producer_image_share_group_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProducerImageShareGroupMemberConfig
  */
  public constructor(scope: Construct, id: string, config: ProducerImageShareGroupMemberConfig) {
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
    this._label = config.label;
    this._sharegroupId = config.sharegroupId;
    this._token = config.token;
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

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // token_uuid - computed: true, optional: false, required: false
  public get tokenUuid() {
    return this.getStringAttribute('token_uuid');
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
      label: cdktf.stringToTerraform(this._label),
      sharegroup_id: cdktf.numberToTerraform(this._sharegroupId),
      token: cdktf.stringToTerraform(this._token),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sharegroup_id: {
        value: cdktf.numberToHclTerraform(this._sharegroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
