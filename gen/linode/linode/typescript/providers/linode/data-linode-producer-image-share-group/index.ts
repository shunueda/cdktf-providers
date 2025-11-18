// https://registry.terraform.io/providers/linode/linode/3.6.0/docs/data-sources/producer_image_share_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLinodeProducerImageShareGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Image Share Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/data-sources/producer_image_share_group#id DataLinodeProducerImageShareGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/data-sources/producer_image_share_group linode_producer_image_share_group}
*/
export class DataLinodeProducerImageShareGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_producer_image_share_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLinodeProducerImageShareGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLinodeProducerImageShareGroup to import
  * @param importFromId The id of the existing DataLinodeProducerImageShareGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/data-sources/producer_image_share_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLinodeProducerImageShareGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_producer_image_share_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/data-sources/producer_image_share_group linode_producer_image_share_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLinodeProducerImageShareGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataLinodeProducerImageShareGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'linode_producer_image_share_group',
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
    this._id = config.id;
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

  // expiry - computed: true, optional: false, required: false
  public get expiry() {
    return this.getStringAttribute('expiry');
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // images_count - computed: true, optional: false, required: false
  public get imagesCount() {
    return this.getNumberAttribute('images_count');
  }

  // is_suspended - computed: true, optional: false, required: false
  public get isSuspended() {
    return this.getBooleanAttribute('is_suspended');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // members_count - computed: true, optional: false, required: false
  public get membersCount() {
    return this.getNumberAttribute('members_count');
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
      id: cdktf.numberToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
