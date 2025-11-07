// https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/iam_service_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVkcsIamServiceUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the service user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/iam_service_user#id DataVkcsIamServiceUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the service user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/iam_service_user#name DataVkcsIamServiceUser#name}
  */
  readonly name?: string;
  /**
  * The region in which to obtain the IAM Service Users client. If omitted, the `region` argument of the provider is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/iam_service_user#region DataVkcsIamServiceUser#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/iam_service_user vkcs_iam_service_user}
*/
export class DataVkcsIamServiceUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vkcs_iam_service_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVkcsIamServiceUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVkcsIamServiceUser to import
  * @param importFromId The id of the existing DataVkcsIamServiceUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/iam_service_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVkcsIamServiceUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vkcs_iam_service_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/iam_service_user vkcs_iam_service_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVkcsIamServiceUserConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVkcsIamServiceUserConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vkcs_iam_service_user',
      terraformGeneratorMetadata: {
        providerName: 'vkcs',
        providerVersion: '0.13.0'
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
    this._name = config.name;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // creator_name - computed: true, optional: false, required: false
  public get creatorName() {
    return this.getStringAttribute('creator_name');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // role_names - computed: true, optional: false, required: false
  public get roleNames() {
    return this.getListAttribute('role_names');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
