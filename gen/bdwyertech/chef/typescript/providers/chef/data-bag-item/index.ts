// https://registry.terraform.io/providers/bdwyertech/chef/0.3.17/docs/resources/data_bag_item
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBagItemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bdwyertech/chef/0.3.17/docs/resources/data_bag_item#content_json DataBagItem#content_json}
  */
  readonly contentJson: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bdwyertech/chef/0.3.17/docs/resources/data_bag_item#data_bag_name DataBagItem#data_bag_name}
  */
  readonly dataBagName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bdwyertech/chef/0.3.17/docs/resources/data_bag_item#id DataBagItem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bdwyertech/chef/0.3.17/docs/resources/data_bag_item chef_data_bag_item}
*/
export class DataBagItem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chef_data_bag_item";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBagItem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBagItem to import
  * @param importFromId The id of the existing DataBagItem that should be imported. Refer to the {@link https://registry.terraform.io/providers/bdwyertech/chef/0.3.17/docs/resources/data_bag_item#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBagItem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chef_data_bag_item", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bdwyertech/chef/0.3.17/docs/resources/data_bag_item chef_data_bag_item} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBagItemConfig
  */
  public constructor(scope: Construct, id: string, config: DataBagItemConfig) {
    super(scope, id, {
      terraformResourceType: 'chef_data_bag_item',
      terraformGeneratorMetadata: {
        providerName: 'chef',
        providerVersion: '0.3.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contentJson = config.contentJson;
    this._dataBagName = config.dataBagName;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content_json - computed: false, optional: false, required: true
  private _contentJson?: string; 
  public get contentJson() {
    return this.getStringAttribute('content_json');
  }
  public set contentJson(value: string) {
    this._contentJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentJsonInput() {
    return this._contentJson;
  }

  // data_bag_name - computed: false, optional: false, required: true
  private _dataBagName?: string; 
  public get dataBagName() {
    return this.getStringAttribute('data_bag_name');
  }
  public set dataBagName(value: string) {
    this._dataBagName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataBagNameInput() {
    return this._dataBagName;
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
      content_json: cdktf.stringToTerraform(this._contentJson),
      data_bag_name: cdktf.stringToTerraform(this._dataBagName),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content_json: {
        value: cdktf.stringToHclTerraform(this._contentJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_bag_name: {
        value: cdktf.stringToHclTerraform(this._dataBagName),
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
