// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/invite_organization_member_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InviteOrganizationMemberOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/invite_organization_member_operation#id InviteOrganizationMemberOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to allow members to withdraw. Allow: Allow, Disallow: Denied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/invite_organization_member_operation#is_allow_quit InviteOrganizationMemberOperation#is_allow_quit}
  */
  readonly isAllowQuit?: string;
  /**
  * Invited account Uin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/invite_organization_member_operation#member_uin InviteOrganizationMemberOperation#member_uin}
  */
  readonly memberUin: number;
  /**
  * Member name. The maximum length is 25 characters and supports English letters, numbers, Chinese characters, symbols `+`, `@`, `&`, `.`, `[`, `]`, `-`, `:`, `,` and enumeration comma.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/invite_organization_member_operation#name InviteOrganizationMemberOperation#name}
  */
  readonly name: string;
  /**
  * Node ID of the member's department.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/invite_organization_member_operation#node_id InviteOrganizationMemberOperation#node_id}
  */
  readonly nodeId: number;
  /**
  * Payer Uin. Member needs to pay on behalf of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/invite_organization_member_operation#pay_uin InviteOrganizationMemberOperation#pay_uin}
  */
  readonly payUin?: string;
  /**
  * List of member financial authority IDs. Values: 1-View bill, 2-View balance, 3-Fund transfer, 4-Consolidated disbursement, 5-Invoice, 6-Benefit inheritance, 7-Proxy payment, 1 and 2 must be default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/invite_organization_member_operation#permission_ids InviteOrganizationMemberOperation#permission_ids}
  */
  readonly permissionIds: number[];
  /**
  * Relationship strategies. Value taken: Financial.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/invite_organization_member_operation#policy_type InviteOrganizationMemberOperation#policy_type}
  */
  readonly policyType: string;
  /**
  * Name of the real-name subject of mutual trust.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/invite_organization_member_operation#relation_auth_name InviteOrganizationMemberOperation#relation_auth_name}
  */
  readonly relationAuthName?: string;
  /**
  * Remark.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/invite_organization_member_operation#remark InviteOrganizationMemberOperation#remark}
  */
  readonly remark?: string;
  /**
  * auth_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/invite_organization_member_operation#auth_file InviteOrganizationMemberOperation#auth_file}
  */
  readonly authFile?: InviteOrganizationMemberOperationAuthFile[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/invite_organization_member_operation#tags InviteOrganizationMemberOperation#tags}
  */
  readonly tags?: InviteOrganizationMemberOperationTags[] | cdktf.IResolvable;
}
export interface InviteOrganizationMemberOperationAuthFile {
  /**
  * File name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/invite_organization_member_operation#name InviteOrganizationMemberOperation#name}
  */
  readonly name: string;
  /**
  * File path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/invite_organization_member_operation#url InviteOrganizationMemberOperation#url}
  */
  readonly url: string;
}

export function inviteOrganizationMemberOperationAuthFileToTerraform(struct?: InviteOrganizationMemberOperationAuthFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function inviteOrganizationMemberOperationAuthFileToHclTerraform(struct?: InviteOrganizationMemberOperationAuthFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InviteOrganizationMemberOperationAuthFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): InviteOrganizationMemberOperationAuthFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InviteOrganizationMemberOperationAuthFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._url = value.url;
    }
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class InviteOrganizationMemberOperationAuthFileList extends cdktf.ComplexList {
  public internalValue? : InviteOrganizationMemberOperationAuthFile[] | cdktf.IResolvable

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
  public get(index: number): InviteOrganizationMemberOperationAuthFileOutputReference {
    return new InviteOrganizationMemberOperationAuthFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InviteOrganizationMemberOperationTags {
  /**
  * Tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/invite_organization_member_operation#tag_key InviteOrganizationMemberOperation#tag_key}
  */
  readonly tagKey: string;
  /**
  * Tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/invite_organization_member_operation#tag_value InviteOrganizationMemberOperation#tag_value}
  */
  readonly tagValue: string;
}

export function inviteOrganizationMemberOperationTagsToTerraform(struct?: InviteOrganizationMemberOperationTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function inviteOrganizationMemberOperationTagsToHclTerraform(struct?: InviteOrganizationMemberOperationTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InviteOrganizationMemberOperationTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): InviteOrganizationMemberOperationTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InviteOrganizationMemberOperationTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // tag_key - computed: false, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: false, required: true
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}

export class InviteOrganizationMemberOperationTagsList extends cdktf.ComplexList {
  public internalValue? : InviteOrganizationMemberOperationTags[] | cdktf.IResolvable

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
  public get(index: number): InviteOrganizationMemberOperationTagsOutputReference {
    return new InviteOrganizationMemberOperationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/invite_organization_member_operation tencentcloud_invite_organization_member_operation}
*/
export class InviteOrganizationMemberOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_invite_organization_member_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InviteOrganizationMemberOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InviteOrganizationMemberOperation to import
  * @param importFromId The id of the existing InviteOrganizationMemberOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/invite_organization_member_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InviteOrganizationMemberOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_invite_organization_member_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/invite_organization_member_operation tencentcloud_invite_organization_member_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InviteOrganizationMemberOperationConfig
  */
  public constructor(scope: Construct, id: string, config: InviteOrganizationMemberOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_invite_organization_member_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
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
    this._isAllowQuit = config.isAllowQuit;
    this._memberUin = config.memberUin;
    this._name = config.name;
    this._nodeId = config.nodeId;
    this._payUin = config.payUin;
    this._permissionIds = config.permissionIds;
    this._policyType = config.policyType;
    this._relationAuthName = config.relationAuthName;
    this._remark = config.remark;
    this._authFile.internalValue = config.authFile;
    this._tags.internalValue = config.tags;
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

  // is_allow_quit - computed: false, optional: true, required: false
  private _isAllowQuit?: string; 
  public get isAllowQuit() {
    return this.getStringAttribute('is_allow_quit');
  }
  public set isAllowQuit(value: string) {
    this._isAllowQuit = value;
  }
  public resetIsAllowQuit() {
    this._isAllowQuit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAllowQuitInput() {
    return this._isAllowQuit;
  }

  // member_uin - computed: false, optional: false, required: true
  private _memberUin?: number; 
  public get memberUin() {
    return this.getNumberAttribute('member_uin');
  }
  public set memberUin(value: number) {
    this._memberUin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberUinInput() {
    return this._memberUin;
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

  // relation_auth_name - computed: false, optional: true, required: false
  private _relationAuthName?: string; 
  public get relationAuthName() {
    return this.getStringAttribute('relation_auth_name');
  }
  public set relationAuthName(value: string) {
    this._relationAuthName = value;
  }
  public resetRelationAuthName() {
    this._relationAuthName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationAuthNameInput() {
    return this._relationAuthName;
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

  // auth_file - computed: false, optional: true, required: false
  private _authFile = new InviteOrganizationMemberOperationAuthFileList(this, "auth_file", false);
  public get authFile() {
    return this._authFile;
  }
  public putAuthFile(value: InviteOrganizationMemberOperationAuthFile[] | cdktf.IResolvable) {
    this._authFile.internalValue = value;
  }
  public resetAuthFile() {
    this._authFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authFileInput() {
    return this._authFile.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new InviteOrganizationMemberOperationTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: InviteOrganizationMemberOperationTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      is_allow_quit: cdktf.stringToTerraform(this._isAllowQuit),
      member_uin: cdktf.numberToTerraform(this._memberUin),
      name: cdktf.stringToTerraform(this._name),
      node_id: cdktf.numberToTerraform(this._nodeId),
      pay_uin: cdktf.stringToTerraform(this._payUin),
      permission_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._permissionIds),
      policy_type: cdktf.stringToTerraform(this._policyType),
      relation_auth_name: cdktf.stringToTerraform(this._relationAuthName),
      remark: cdktf.stringToTerraform(this._remark),
      auth_file: cdktf.listMapper(inviteOrganizationMemberOperationAuthFileToTerraform, true)(this._authFile.internalValue),
      tags: cdktf.listMapper(inviteOrganizationMemberOperationTagsToTerraform, true)(this._tags.internalValue),
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
      is_allow_quit: {
        value: cdktf.stringToHclTerraform(this._isAllowQuit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_uin: {
        value: cdktf.numberToHclTerraform(this._memberUin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      relation_auth_name: {
        value: cdktf.stringToHclTerraform(this._relationAuthName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_file: {
        value: cdktf.listMapperHcl(inviteOrganizationMemberOperationAuthFileToHclTerraform, true)(this._authFile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InviteOrganizationMemberOperationAuthFileList",
      },
      tags: {
        value: cdktf.listMapperHcl(inviteOrganizationMemberOperationTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InviteOrganizationMemberOperationTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
