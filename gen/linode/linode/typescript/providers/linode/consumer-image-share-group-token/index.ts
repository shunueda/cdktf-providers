// https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/consumer_image_share_group_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConsumerImageShareGroupTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * The label of the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/consumer_image_share_group_token#label ConsumerImageShareGroupToken#label}
  */
  readonly label?: string;
  /**
  * The UUID of the Image Share Group this token is for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/consumer_image_share_group_token#valid_for_sharegroup_uuid ConsumerImageShareGroupToken#valid_for_sharegroup_uuid}
  */
  readonly validForSharegroupUuid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/consumer_image_share_group_token linode_consumer_image_share_group_token}
*/
export class ConsumerImageShareGroupToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_consumer_image_share_group_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConsumerImageShareGroupToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConsumerImageShareGroupToken to import
  * @param importFromId The id of the existing ConsumerImageShareGroupToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/consumer_image_share_group_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConsumerImageShareGroupToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_consumer_image_share_group_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/consumer_image_share_group_token linode_consumer_image_share_group_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConsumerImageShareGroupTokenConfig
  */
  public constructor(scope: Construct, id: string, config: ConsumerImageShareGroupTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'linode_consumer_image_share_group_token',
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
    this._label = config.label;
    this._validForSharegroupUuid = config.validForSharegroupUuid;
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

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // sharegroup_label - computed: true, optional: false, required: false
  public get sharegroupLabel() {
    return this.getStringAttribute('sharegroup_label');
  }

  // sharegroup_uuid - computed: true, optional: false, required: false
  public get sharegroupUuid() {
    return this.getStringAttribute('sharegroup_uuid');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // token_uuid - computed: true, optional: false, required: false
  public get tokenUuid() {
    return this.getStringAttribute('token_uuid');
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // valid_for_sharegroup_uuid - computed: false, optional: false, required: true
  private _validForSharegroupUuid?: string; 
  public get validForSharegroupUuid() {
    return this.getStringAttribute('valid_for_sharegroup_uuid');
  }
  public set validForSharegroupUuid(value: string) {
    this._validForSharegroupUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validForSharegroupUuidInput() {
    return this._validForSharegroupUuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      label: cdktf.stringToTerraform(this._label),
      valid_for_sharegroup_uuid: cdktf.stringToTerraform(this._validForSharegroupUuid),
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
      valid_for_sharegroup_uuid: {
        value: cdktf.stringToHclTerraform(this._validForSharegroupUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
