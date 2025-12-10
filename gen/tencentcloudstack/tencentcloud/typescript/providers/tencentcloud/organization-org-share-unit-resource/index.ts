// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_org_share_unit_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationOrgShareUnitResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Shared unit area.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_org_share_unit_resource#area OrganizationOrgShareUnitResource#area}
  */
  readonly area: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_org_share_unit_resource#id OrganizationOrgShareUnitResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Product Resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_org_share_unit_resource#product_resource_id OrganizationOrgShareUnitResource#product_resource_id}
  */
  readonly productResourceId: string;
  /**
  * Shared resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_org_share_unit_resource#type OrganizationOrgShareUnitResource#type}
  */
  readonly type: string;
  /**
  * Shared unit ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_org_share_unit_resource#unit_id OrganizationOrgShareUnitResource#unit_id}
  */
  readonly unitId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_org_share_unit_resource tencentcloud_organization_org_share_unit_resource}
*/
export class OrganizationOrgShareUnitResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_organization_org_share_unit_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationOrgShareUnitResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationOrgShareUnitResource to import
  * @param importFromId The id of the existing OrganizationOrgShareUnitResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_org_share_unit_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationOrgShareUnitResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_organization_org_share_unit_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_org_share_unit_resource tencentcloud_organization_org_share_unit_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationOrgShareUnitResourceConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationOrgShareUnitResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_organization_org_share_unit_resource',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._area = config.area;
    this._id = config.id;
    this._productResourceId = config.productResourceId;
    this._type = config.type;
    this._unitId = config.unitId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // area - computed: false, optional: false, required: true
  private _area?: string; 
  public get area() {
    return this.getStringAttribute('area');
  }
  public set area(value: string) {
    this._area = value;
  }
  // Temporarily expose input value. Use with caution.
  public get areaInput() {
    return this._area;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // product_resource_id - computed: false, optional: false, required: true
  private _productResourceId?: string; 
  public get productResourceId() {
    return this.getStringAttribute('product_resource_id');
  }
  public set productResourceId(value: string) {
    this._productResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productResourceIdInput() {
    return this._productResourceId;
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // share_manager_uin - computed: true, optional: false, required: false
  public get shareManagerUin() {
    return this.getNumberAttribute('share_manager_uin');
  }

  // shared_member_num - computed: true, optional: false, required: false
  public get sharedMemberNum() {
    return this.getNumberAttribute('shared_member_num');
  }

  // shared_member_use_num - computed: true, optional: false, required: false
  public get sharedMemberUseNum() {
    return this.getNumberAttribute('shared_member_use_num');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unit_id - computed: false, optional: false, required: true
  private _unitId?: string; 
  public get unitId() {
    return this.getStringAttribute('unit_id');
  }
  public set unitId(value: string) {
    this._unitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitIdInput() {
    return this._unitId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      area: cdktf.stringToTerraform(this._area),
      id: cdktf.stringToTerraform(this._id),
      product_resource_id: cdktf.stringToTerraform(this._productResourceId),
      type: cdktf.stringToTerraform(this._type),
      unit_id: cdktf.stringToTerraform(this._unitId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      area: {
        value: cdktf.stringToHclTerraform(this._area),
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
      product_resource_id: {
        value: cdktf.stringToHclTerraform(this._productResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unit_id: {
        value: cdktf.stringToHclTerraform(this._unitId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
