// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/vpc_end_point_service_white_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcEndPointServiceWhiteListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of white list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/vpc_end_point_service_white_list#description VpcEndPointServiceWhiteList#description}
  */
  readonly description?: string;
  /**
  * ID of endpoint service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/vpc_end_point_service_white_list#end_point_service_id VpcEndPointServiceWhiteList#end_point_service_id}
  */
  readonly endPointServiceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/vpc_end_point_service_white_list#id VpcEndPointServiceWhiteList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * UIN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/vpc_end_point_service_white_list#user_uin VpcEndPointServiceWhiteList#user_uin}
  */
  readonly userUin: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/vpc_end_point_service_white_list tencentcloud_vpc_end_point_service_white_list}
*/
export class VpcEndPointServiceWhiteList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vpc_end_point_service_white_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcEndPointServiceWhiteList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcEndPointServiceWhiteList to import
  * @param importFromId The id of the existing VpcEndPointServiceWhiteList that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/vpc_end_point_service_white_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcEndPointServiceWhiteList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vpc_end_point_service_white_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/vpc_end_point_service_white_list tencentcloud_vpc_end_point_service_white_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcEndPointServiceWhiteListConfig
  */
  public constructor(scope: Construct, id: string, config: VpcEndPointServiceWhiteListConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vpc_end_point_service_white_list',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._endPointServiceId = config.endPointServiceId;
    this._id = config.id;
    this._userUin = config.userUin;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // end_point_service_id - computed: false, optional: false, required: true
  private _endPointServiceId?: string; 
  public get endPointServiceId() {
    return this.getStringAttribute('end_point_service_id');
  }
  public set endPointServiceId(value: string) {
    this._endPointServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endPointServiceIdInput() {
    return this._endPointServiceId;
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

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // user_uin - computed: false, optional: false, required: true
  private _userUin?: string; 
  public get userUin() {
    return this.getStringAttribute('user_uin');
  }
  public set userUin(value: string) {
    this._userUin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userUinInput() {
    return this._userUin;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      end_point_service_id: cdktf.stringToTerraform(this._endPointServiceId),
      id: cdktf.stringToTerraform(this._id),
      user_uin: cdktf.stringToTerraform(this._userUin),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_point_service_id: {
        value: cdktf.stringToHclTerraform(this._endPointServiceId),
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
      user_uin: {
        value: cdktf.stringToHclTerraform(this._userUin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
