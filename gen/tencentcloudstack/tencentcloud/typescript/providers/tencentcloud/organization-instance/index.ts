// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_instance#id OrganizationInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Root node name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_instance#root_node_name OrganizationInstance#root_node_name}
  */
  readonly rootNodeName?: string;
}
export interface OrganizationInstanceOrgPermission {
}

export function organizationInstanceOrgPermissionToTerraform(struct?: OrganizationInstanceOrgPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function organizationInstanceOrgPermissionToHclTerraform(struct?: OrganizationInstanceOrgPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OrganizationInstanceOrgPermissionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OrganizationInstanceOrgPermission | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationInstanceOrgPermission | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class OrganizationInstanceOrgPermissionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OrganizationInstanceOrgPermissionOutputReference {
    return new OrganizationInstanceOrgPermissionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_instance tencentcloud_organization_instance}
*/
export class OrganizationInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_organization_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationInstance to import
  * @param importFromId The id of the existing OrganizationInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_organization_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_instance tencentcloud_organization_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationInstanceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OrganizationInstanceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_organization_instance',
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
    this._id = config.id;
    this._rootNodeName = config.rootNodeName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // host_uin - computed: true, optional: false, required: false
  public get hostUin() {
    return this.getNumberAttribute('host_uin');
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

  // is_allow_quit - computed: true, optional: false, required: false
  public get isAllowQuit() {
    return this.getStringAttribute('is_allow_quit');
  }

  // is_assign_manager - computed: true, optional: false, required: false
  public get isAssignManager() {
    return this.getBooleanAttribute('is_assign_manager');
  }

  // is_auth_manager - computed: true, optional: false, required: false
  public get isAuthManager() {
    return this.getBooleanAttribute('is_auth_manager');
  }

  // is_manager - computed: true, optional: false, required: false
  public get isManager() {
    return this.getBooleanAttribute('is_manager');
  }

  // join_time - computed: true, optional: false, required: false
  public get joinTime() {
    return this.getStringAttribute('join_time');
  }

  // nick_name - computed: true, optional: false, required: false
  public get nickName() {
    return this.getStringAttribute('nick_name');
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getNumberAttribute('org_id');
  }

  // org_permission - computed: true, optional: false, required: false
  private _orgPermission = new OrganizationInstanceOrgPermissionList(this, "org_permission", false);
  public get orgPermission() {
    return this._orgPermission;
  }

  // org_policy_name - computed: true, optional: false, required: false
  public get orgPolicyName() {
    return this.getStringAttribute('org_policy_name');
  }

  // org_policy_type - computed: true, optional: false, required: false
  public get orgPolicyType() {
    return this.getStringAttribute('org_policy_type');
  }

  // org_type - computed: true, optional: false, required: false
  public get orgType() {
    return this.getNumberAttribute('org_type');
  }

  // pay_name - computed: true, optional: false, required: false
  public get payName() {
    return this.getStringAttribute('pay_name');
  }

  // pay_uin - computed: true, optional: false, required: false
  public get payUin() {
    return this.getStringAttribute('pay_uin');
  }

  // root_node_id - computed: true, optional: false, required: false
  public get rootNodeId() {
    return this.getNumberAttribute('root_node_id');
  }

  // root_node_name - computed: true, optional: true, required: false
  private _rootNodeName?: string; 
  public get rootNodeName() {
    return this.getStringAttribute('root_node_name');
  }
  public set rootNodeName(value: string) {
    this._rootNodeName = value;
  }
  public resetRootNodeName() {
    this._rootNodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootNodeNameInput() {
    return this._rootNodeName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      root_node_name: cdktf.stringToTerraform(this._rootNodeName),
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
      root_node_name: {
        value: cdktf.stringToHclTerraform(this._rootNodeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
