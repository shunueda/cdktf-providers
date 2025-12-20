// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/organization_members
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudOrganizationMembersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Entity name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/organization_members#auth_name DataTencentcloudOrganizationMembers#auth_name}
  */
  readonly authName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/organization_members#id DataTencentcloudOrganizationMembers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Valid values: `en` (Tencent Cloud International); `zh` (Tencent Cloud).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/organization_members#lang DataTencentcloudOrganizationMembers#lang}
  */
  readonly lang?: string;
  /**
  * Abbreviation of the trusted service, which is required during querying the trusted service admin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/organization_members#product DataTencentcloudOrganizationMembers#product}
  */
  readonly product?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/organization_members#result_output_file DataTencentcloudOrganizationMembers#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Search by member name or ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/organization_members#search_key DataTencentcloudOrganizationMembers#search_key}
  */
  readonly searchKey?: string;
}
export interface DataTencentcloudOrganizationMembersItemsOrgIdentity {
}

export function dataTencentcloudOrganizationMembersItemsOrgIdentityToTerraform(struct?: DataTencentcloudOrganizationMembersItemsOrgIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudOrganizationMembersItemsOrgIdentityToHclTerraform(struct?: DataTencentcloudOrganizationMembersItemsOrgIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudOrganizationMembersItemsOrgIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudOrganizationMembersItemsOrgIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudOrganizationMembersItemsOrgIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // identity_alias_name - computed: true, optional: false, required: false
  public get identityAliasName() {
    return this.getStringAttribute('identity_alias_name');
  }

  // identity_id - computed: true, optional: false, required: false
  public get identityId() {
    return this.getNumberAttribute('identity_id');
  }
}

export class DataTencentcloudOrganizationMembersItemsOrgIdentityList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudOrganizationMembersItemsOrgIdentityOutputReference {
    return new DataTencentcloudOrganizationMembersItemsOrgIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudOrganizationMembersItemsOrgPermission {
}

export function dataTencentcloudOrganizationMembersItemsOrgPermissionToTerraform(struct?: DataTencentcloudOrganizationMembersItemsOrgPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudOrganizationMembersItemsOrgPermissionToHclTerraform(struct?: DataTencentcloudOrganizationMembersItemsOrgPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudOrganizationMembersItemsOrgPermissionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudOrganizationMembersItemsOrgPermission | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudOrganizationMembersItemsOrgPermission | undefined) {
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

export class DataTencentcloudOrganizationMembersItemsOrgPermissionList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudOrganizationMembersItemsOrgPermissionOutputReference {
    return new DataTencentcloudOrganizationMembersItemsOrgPermissionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudOrganizationMembersItems {
}

export function dataTencentcloudOrganizationMembersItemsToTerraform(struct?: DataTencentcloudOrganizationMembersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudOrganizationMembersItemsToHclTerraform(struct?: DataTencentcloudOrganizationMembersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudOrganizationMembersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudOrganizationMembersItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudOrganizationMembersItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bind_status - computed: true, optional: false, required: false
  public get bindStatus() {
    return this.getStringAttribute('bind_status');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // is_allow_quit - computed: true, optional: false, required: false
  public get isAllowQuit() {
    return this.getStringAttribute('is_allow_quit');
  }

  // member_type - computed: true, optional: false, required: false
  public get memberType() {
    return this.getStringAttribute('member_type');
  }

  // member_uin - computed: true, optional: false, required: false
  public get memberUin() {
    return this.getNumberAttribute('member_uin');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getNumberAttribute('node_id');
  }

  // node_name - computed: true, optional: false, required: false
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }

  // org_identity - computed: true, optional: false, required: false
  private _orgIdentity = new DataTencentcloudOrganizationMembersItemsOrgIdentityList(this, "org_identity", false);
  public get orgIdentity() {
    return this._orgIdentity;
  }

  // org_permission - computed: true, optional: false, required: false
  private _orgPermission = new DataTencentcloudOrganizationMembersItemsOrgPermissionList(this, "org_permission", false);
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

  // pay_name - computed: true, optional: false, required: false
  public get payName() {
    return this.getStringAttribute('pay_name');
  }

  // pay_uin - computed: true, optional: false, required: false
  public get payUin() {
    return this.getStringAttribute('pay_uin');
  }

  // permission_status - computed: true, optional: false, required: false
  public get permissionStatus() {
    return this.getStringAttribute('permission_status');
  }

  // remark - computed: true, optional: false, required: false
  public get remark() {
    return this.getStringAttribute('remark');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class DataTencentcloudOrganizationMembersItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudOrganizationMembersItemsOutputReference {
    return new DataTencentcloudOrganizationMembersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/organization_members tencentcloud_organization_members}
*/
export class DataTencentcloudOrganizationMembers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_organization_members";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudOrganizationMembers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudOrganizationMembers to import
  * @param importFromId The id of the existing DataTencentcloudOrganizationMembers that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/organization_members#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudOrganizationMembers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_organization_members", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/organization_members tencentcloud_organization_members} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudOrganizationMembersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudOrganizationMembersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_organization_members',
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
    this._authName = config.authName;
    this._id = config.id;
    this._lang = config.lang;
    this._product = config.product;
    this._resultOutputFile = config.resultOutputFile;
    this._searchKey = config.searchKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_name - computed: false, optional: true, required: false
  private _authName?: string; 
  public get authName() {
    return this.getStringAttribute('auth_name');
  }
  public set authName(value: string) {
    this._authName = value;
  }
  public resetAuthName() {
    this._authName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authNameInput() {
    return this._authName;
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

  // items - computed: true, optional: false, required: false
  private _items = new DataTencentcloudOrganizationMembersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // lang - computed: false, optional: true, required: false
  private _lang?: string; 
  public get lang() {
    return this.getStringAttribute('lang');
  }
  public set lang(value: string) {
    this._lang = value;
  }
  public resetLang() {
    this._lang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get langInput() {
    return this._lang;
  }

  // product - computed: false, optional: true, required: false
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  public resetProduct() {
    this._product = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // search_key - computed: false, optional: true, required: false
  private _searchKey?: string; 
  public get searchKey() {
    return this.getStringAttribute('search_key');
  }
  public set searchKey(value: string) {
    this._searchKey = value;
  }
  public resetSearchKey() {
    this._searchKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchKeyInput() {
    return this._searchKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_name: cdktf.stringToTerraform(this._authName),
      id: cdktf.stringToTerraform(this._id),
      lang: cdktf.stringToTerraform(this._lang),
      product: cdktf.stringToTerraform(this._product),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      search_key: cdktf.stringToTerraform(this._searchKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_name: {
        value: cdktf.stringToHclTerraform(this._authName),
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
      lang: {
        value: cdktf.stringToHclTerraform(this._lang),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product: {
        value: cdktf.stringToHclTerraform(this._product),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_key: {
        value: cdktf.stringToHclTerraform(this._searchKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
