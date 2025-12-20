// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/chdfs_access_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChdfsAccessGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Permission group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/chdfs_access_group#access_group_name ChdfsAccessGroup#access_group_name}
  */
  readonly accessGroupName: string;
  /**
  * Permission group description, default empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/chdfs_access_group#description ChdfsAccessGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/chdfs_access_group#id ChdfsAccessGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * VPC ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/chdfs_access_group#vpc_id ChdfsAccessGroup#vpc_id}
  */
  readonly vpcId: string;
  /**
  * vpc network type(1:CVM, 2:BM 1.0).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/chdfs_access_group#vpc_type ChdfsAccessGroup#vpc_type}
  */
  readonly vpcType: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/chdfs_access_group tencentcloud_chdfs_access_group}
*/
export class ChdfsAccessGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_chdfs_access_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ChdfsAccessGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChdfsAccessGroup to import
  * @param importFromId The id of the existing ChdfsAccessGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/chdfs_access_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChdfsAccessGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_chdfs_access_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/chdfs_access_group tencentcloud_chdfs_access_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChdfsAccessGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ChdfsAccessGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_chdfs_access_group',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessGroupName = config.accessGroupName;
    this._description = config.description;
    this._id = config.id;
    this._vpcId = config.vpcId;
    this._vpcType = config.vpcType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_group_name - computed: false, optional: false, required: true
  private _accessGroupName?: string; 
  public get accessGroupName() {
    return this.getStringAttribute('access_group_name');
  }
  public set accessGroupName(value: string) {
    this._accessGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGroupNameInput() {
    return this._accessGroupName;
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

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vpc_type - computed: false, optional: false, required: true
  private _vpcType?: number; 
  public get vpcType() {
    return this.getNumberAttribute('vpc_type');
  }
  public set vpcType(value: number) {
    this._vpcType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcTypeInput() {
    return this._vpcType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_group_name: cdktf.stringToTerraform(this._accessGroupName),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vpc_type: cdktf.numberToTerraform(this._vpcType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_group_name: {
        value: cdktf.stringToHclTerraform(this._accessGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_type: {
        value: cdktf.numberToHclTerraform(this._vpcType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
