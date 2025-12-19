// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/organization_service_assign
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationServiceAssignConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/organization_service_assign#id OrganizationServiceAssign#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Management scope of the delegated admin. Valid values: 1 (all members), 2 (partial members). Default value: `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/organization_service_assign#management_scope OrganizationServiceAssign#management_scope}
  */
  readonly managementScope?: number;
  /**
  * ID list of the managed departments. This parameter is valid when `management_scope` is `2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/organization_service_assign#management_scope_node_ids OrganizationServiceAssign#management_scope_node_ids}
  */
  readonly managementScopeNodeIds?: number[];
  /**
  * Uin list of the managed members. This parameter is valid when `management_scope` is `2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/organization_service_assign#management_scope_uins OrganizationServiceAssign#management_scope_uins}
  */
  readonly managementScopeUins?: number[];
  /**
  * Uin list of the delegated admins, Including up to 20 items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/organization_service_assign#member_uins OrganizationServiceAssign#member_uins}
  */
  readonly memberUins: number[];
  /**
  * Organization service ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/organization_service_assign#service_id OrganizationServiceAssign#service_id}
  */
  readonly serviceId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/organization_service_assign tencentcloud_organization_service_assign}
*/
export class OrganizationServiceAssign extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_organization_service_assign";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationServiceAssign resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationServiceAssign to import
  * @param importFromId The id of the existing OrganizationServiceAssign that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/organization_service_assign#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationServiceAssign to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_organization_service_assign", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/organization_service_assign tencentcloud_organization_service_assign} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationServiceAssignConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationServiceAssignConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_organization_service_assign',
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
    this._id = config.id;
    this._managementScope = config.managementScope;
    this._managementScopeNodeIds = config.managementScopeNodeIds;
    this._managementScopeUins = config.managementScopeUins;
    this._memberUins = config.memberUins;
    this._serviceId = config.serviceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // management_scope - computed: true, optional: true, required: false
  private _managementScope?: number; 
  public get managementScope() {
    return this.getNumberAttribute('management_scope');
  }
  public set managementScope(value: number) {
    this._managementScope = value;
  }
  public resetManagementScope() {
    this._managementScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementScopeInput() {
    return this._managementScope;
  }

  // management_scope_node_ids - computed: false, optional: true, required: false
  private _managementScopeNodeIds?: number[]; 
  public get managementScopeNodeIds() {
    return this.getNumberListAttribute('management_scope_node_ids');
  }
  public set managementScopeNodeIds(value: number[]) {
    this._managementScopeNodeIds = value;
  }
  public resetManagementScopeNodeIds() {
    this._managementScopeNodeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementScopeNodeIdsInput() {
    return this._managementScopeNodeIds;
  }

  // management_scope_uins - computed: false, optional: true, required: false
  private _managementScopeUins?: number[]; 
  public get managementScopeUins() {
    return this.getNumberListAttribute('management_scope_uins');
  }
  public set managementScopeUins(value: number[]) {
    this._managementScopeUins = value;
  }
  public resetManagementScopeUins() {
    this._managementScopeUins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementScopeUinsInput() {
    return this._managementScopeUins;
  }

  // member_uins - computed: false, optional: false, required: true
  private _memberUins?: number[]; 
  public get memberUins() {
    return this.getNumberListAttribute('member_uins');
  }
  public set memberUins(value: number[]) {
    this._memberUins = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberUinsInput() {
    return this._memberUins;
  }

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: number; 
  public get serviceId() {
    return this.getNumberAttribute('service_id');
  }
  public set serviceId(value: number) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      management_scope: cdktf.numberToTerraform(this._managementScope),
      management_scope_node_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._managementScopeNodeIds),
      management_scope_uins: cdktf.listMapper(cdktf.numberToTerraform, false)(this._managementScopeUins),
      member_uins: cdktf.listMapper(cdktf.numberToTerraform, false)(this._memberUins),
      service_id: cdktf.numberToTerraform(this._serviceId),
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
      management_scope: {
        value: cdktf.numberToHclTerraform(this._managementScope),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      management_scope_node_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._managementScopeNodeIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      management_scope_uins: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._managementScopeUins),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      member_uins: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._memberUins),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      service_id: {
        value: cdktf.numberToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
