// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/organization_org_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationOrgMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to force delete the member account when deleting the organization member. It is only applicable to member accounts of the creation type, not to member accounts of the invitation type. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/organization_org_member#force_delete_account OrganizationOrgMember#force_delete_account}
  */
  readonly forceDeleteAccount?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/organization_org_member#id OrganizationOrgMember#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Member name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/organization_org_member#name OrganizationOrgMember#name}
  */
  readonly name: string;
  /**
  * Organization node ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/organization_org_member#node_id OrganizationOrgMember#node_id}
  */
  readonly nodeId: number;
  /**
  * The uin which is payment account on behalf.When `PermissionIds` contains 7, is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/organization_org_member#pay_uin OrganizationOrgMember#pay_uin}
  */
  readonly payUin?: string;
  /**
  * Financial management permission IDs.Valid values:- `1`: View bill.- `2`: Check balance.- `3`: Fund transfer.- `4`: Combine bill.- `5`: Issue an invoice.- `6`: Inherit discount.- `7`: Pay on behalf.value 1,2 is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/organization_org_member#permission_ids OrganizationOrgMember#permission_ids}
  */
  readonly permissionIds: number[];
  /**
  * Organization policy type.- `Financial`: Financial management policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/organization_org_member#policy_type OrganizationOrgMember#policy_type}
  */
  readonly policyType: string;
  /**
  * Create member record ID.When create failed and needs to be recreated, is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/organization_org_member#record_id OrganizationOrgMember#record_id}
  */
  readonly recordId?: number;
  /**
  * Notes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/organization_org_member#remark OrganizationOrgMember#remark}
  */
  readonly remark?: string;
  /**
  * Tag description list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/organization_org_member#tags OrganizationOrgMember#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface OrganizationOrgMemberOrgPermission {
}

export function organizationOrgMemberOrgPermissionToTerraform(struct?: OrganizationOrgMemberOrgPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function organizationOrgMemberOrgPermissionToHclTerraform(struct?: OrganizationOrgMemberOrgPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OrganizationOrgMemberOrgPermissionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrganizationOrgMemberOrgPermission | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationOrgMemberOrgPermission | undefined) {
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

export class OrganizationOrgMemberOrgPermissionList extends cdktf.ComplexList {

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
  public get(index: number): OrganizationOrgMemberOrgPermissionOutputReference {
    return new OrganizationOrgMemberOrgPermissionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/organization_org_member tencentcloud_organization_org_member}
*/
export class OrganizationOrgMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_organization_org_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationOrgMember resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationOrgMember to import
  * @param importFromId The id of the existing OrganizationOrgMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/organization_org_member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationOrgMember to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_organization_org_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/organization_org_member tencentcloud_organization_org_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationOrgMemberConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationOrgMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_organization_org_member',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._forceDeleteAccount = config.forceDeleteAccount;
    this._id = config.id;
    this._name = config.name;
    this._nodeId = config.nodeId;
    this._payUin = config.payUin;
    this._permissionIds = config.permissionIds;
    this._policyType = config.policyType;
    this._recordId = config.recordId;
    this._remark = config.remark;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // force_delete_account - computed: false, optional: true, required: false
  private _forceDeleteAccount?: boolean | cdktf.IResolvable; 
  public get forceDeleteAccount() {
    return this.getBooleanAttribute('force_delete_account');
  }
  public set forceDeleteAccount(value: boolean | cdktf.IResolvable) {
    this._forceDeleteAccount = value;
  }
  public resetForceDeleteAccount() {
    this._forceDeleteAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteAccountInput() {
    return this._forceDeleteAccount;
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

  // member_type - computed: true, optional: false, required: false
  public get memberType() {
    return this.getStringAttribute('member_type');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // node_id - computed: false, optional: false, required: true
  private _nodeId?: number; 
  public get nodeId() {
    return this.getNumberAttribute('node_id');
  }
  public set nodeId(value: number) {
    this._nodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // node_name - computed: true, optional: false, required: false
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }

  // org_permission - computed: true, optional: false, required: false
  private _orgPermission = new OrganizationOrgMemberOrgPermissionList(this, "org_permission", false);
  public get orgPermission() {
    return this._orgPermission;
  }

  // org_policy_name - computed: true, optional: false, required: false
  public get orgPolicyName() {
    return this.getStringAttribute('org_policy_name');
  }

  // pay_name - computed: true, optional: false, required: false
  public get payName() {
    return this.getStringAttribute('pay_name');
  }

  // pay_uin - computed: false, optional: true, required: false
  private _payUin?: string; 
  public get payUin() {
    return this.getStringAttribute('pay_uin');
  }
  public set payUin(value: string) {
    this._payUin = value;
  }
  public resetPayUin() {
    this._payUin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payUinInput() {
    return this._payUin;
  }

  // permission_ids - computed: false, optional: false, required: true
  private _permissionIds?: number[]; 
  public get permissionIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('permission_ids')));
  }
  public set permissionIds(value: number[]) {
    this._permissionIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionIdsInput() {
    return this._permissionIds;
  }

  // policy_type - computed: false, optional: false, required: true
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // record_id - computed: false, optional: true, required: false
  private _recordId?: number; 
  public get recordId() {
    return this.getNumberAttribute('record_id');
  }
  public set recordId(value: number) {
    this._recordId = value;
  }
  public resetRecordId() {
    this._recordId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIdInput() {
    return this._recordId;
  }

  // remark - computed: false, optional: true, required: false
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      force_delete_account: cdktf.booleanToTerraform(this._forceDeleteAccount),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      node_id: cdktf.numberToTerraform(this._nodeId),
      pay_uin: cdktf.stringToTerraform(this._payUin),
      permission_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._permissionIds),
      policy_type: cdktf.stringToTerraform(this._policyType),
      record_id: cdktf.numberToTerraform(this._recordId),
      remark: cdktf.stringToTerraform(this._remark),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      force_delete_account: {
        value: cdktf.booleanToHclTerraform(this._forceDeleteAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      node_id: {
        value: cdktf.numberToHclTerraform(this._nodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pay_uin: {
        value: cdktf.stringToHclTerraform(this._payUin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permission_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._permissionIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      policy_type: {
        value: cdktf.stringToHclTerraform(this._policyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      record_id: {
        value: cdktf.numberToHclTerraform(this._recordId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
