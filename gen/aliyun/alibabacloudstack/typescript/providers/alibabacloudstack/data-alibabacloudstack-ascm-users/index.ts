// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/data-sources/ascm_users
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlibabacloudstackAscmUsersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/data-sources/ascm_users#current_page DataAlibabacloudstackAscmUsers#current_page}
  */
  readonly currentPage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/data-sources/ascm_users#id DataAlibabacloudstackAscmUsers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/data-sources/ascm_users#ids DataAlibabacloudstackAscmUsers#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/data-sources/ascm_users#login_name DataAlibabacloudstackAscmUsers#login_name}
  */
  readonly loginName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/data-sources/ascm_users#login_policy_id DataAlibabacloudstackAscmUsers#login_policy_id}
  */
  readonly loginPolicyId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/data-sources/ascm_users#mark DataAlibabacloudstackAscmUsers#mark}
  */
  readonly mark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/data-sources/ascm_users#organization_id DataAlibabacloudstackAscmUsers#organization_id}
  */
  readonly organizationId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/data-sources/ascm_users#output_file DataAlibabacloudstackAscmUsers#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/data-sources/ascm_users#page_size DataAlibabacloudstackAscmUsers#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/data-sources/ascm_users#role_id DataAlibabacloudstackAscmUsers#role_id}
  */
  readonly roleId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/data-sources/ascm_users#status DataAlibabacloudstackAscmUsers#status}
  */
  readonly status?: string;
}
export interface DataAlibabacloudstackAscmUsersUsers {
}

export function dataAlibabacloudstackAscmUsersUsersToTerraform(struct?: DataAlibabacloudstackAscmUsersUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackAscmUsersUsersToHclTerraform(struct?: DataAlibabacloudstackAscmUsersUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackAscmUsersUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackAscmUsersUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackAscmUsersUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cellphone_num - computed: true, optional: false, required: false
  public get cellphoneNum() {
    return this.getStringAttribute('cellphone_num');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // enable_ding_talk - computed: true, optional: false, required: false
  public get enableDingTalk() {
    return this.getBooleanAttribute('enable_ding_talk');
  }

  // enable_email - computed: true, optional: false, required: false
  public get enableEmail() {
    return this.getBooleanAttribute('enable_email');
  }

  // enable_short_message - computed: true, optional: false, required: false
  public get enableShortMessage() {
    return this.getBooleanAttribute('enable_short_message');
  }

  // last_login_time - computed: true, optional: false, required: false
  public get lastLoginTime() {
    return this.getNumberAttribute('last_login_time');
  }

  // login_name - computed: true, optional: false, required: false
  public get loginName() {
    return this.getStringAttribute('login_name');
  }

  // mobile_nation_code - computed: true, optional: false, required: false
  public get mobileNationCode() {
    return this.getStringAttribute('mobile_nation_code');
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getNumberAttribute('organization_id');
  }

  // parent_pk - computed: true, optional: false, required: false
  public get parentPk() {
    return this.getStringAttribute('parent_pk');
  }

  // primary_key - computed: true, optional: false, required: false
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAlibabacloudstackAscmUsersUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackAscmUsersUsersOutputReference {
    return new DataAlibabacloudstackAscmUsersUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/data-sources/ascm_users alibabacloudstack_ascm_users}
*/
export class DataAlibabacloudstackAscmUsers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_ascm_users";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlibabacloudstackAscmUsers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlibabacloudstackAscmUsers to import
  * @param importFromId The id of the existing DataAlibabacloudstackAscmUsers that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/data-sources/ascm_users#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlibabacloudstackAscmUsers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_ascm_users", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/data-sources/ascm_users alibabacloudstack_ascm_users} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlibabacloudstackAscmUsersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlibabacloudstackAscmUsersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_ascm_users',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.16.21',
        providerVersionConstraint: '3.16.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._currentPage = config.currentPage;
    this._id = config.id;
    this._ids = config.ids;
    this._loginName = config.loginName;
    this._loginPolicyId = config.loginPolicyId;
    this._mark = config.mark;
    this._organizationId = config.organizationId;
    this._outputFile = config.outputFile;
    this._pageSize = config.pageSize;
    this._roleId = config.roleId;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // current_page - computed: false, optional: true, required: false
  private _currentPage?: number; 
  public get currentPage() {
    return this.getNumberAttribute('current_page');
  }
  public set currentPage(value: number) {
    this._currentPage = value;
  }
  public resetCurrentPage() {
    this._currentPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentPageInput() {
    return this._currentPage;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // login_name - computed: false, optional: true, required: false
  private _loginName?: string; 
  public get loginName() {
    return this.getStringAttribute('login_name');
  }
  public set loginName(value: string) {
    this._loginName = value;
  }
  public resetLoginName() {
    this._loginName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginNameInput() {
    return this._loginName;
  }

  // login_policy_id - computed: false, optional: true, required: false
  private _loginPolicyId?: number; 
  public get loginPolicyId() {
    return this.getNumberAttribute('login_policy_id');
  }
  public set loginPolicyId(value: number) {
    this._loginPolicyId = value;
  }
  public resetLoginPolicyId() {
    this._loginPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginPolicyIdInput() {
    return this._loginPolicyId;
  }

  // mark - computed: false, optional: true, required: false
  private _mark?: string; 
  public get mark() {
    return this.getStringAttribute('mark');
  }
  public set mark(value: string) {
    this._mark = value;
  }
  public resetMark() {
    this._mark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markInput() {
    return this._mark;
  }

  // organization_id - computed: false, optional: true, required: false
  private _organizationId?: number; 
  public get organizationId() {
    return this.getNumberAttribute('organization_id');
  }
  public set organizationId(value: number) {
    this._organizationId = value;
  }
  public resetOrganizationId() {
    this._organizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // page_size - computed: false, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
  }

  // role_id - computed: false, optional: true, required: false
  private _roleId?: number; 
  public get roleId() {
    return this.getNumberAttribute('role_id');
  }
  public set roleId(value: number) {
    this._roleId = value;
  }
  public resetRoleId() {
    this._roleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // users - computed: true, optional: false, required: false
  private _users = new DataAlibabacloudstackAscmUsersUsersList(this, "users", false);
  public get users() {
    return this._users;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      current_page: cdktf.numberToTerraform(this._currentPage),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      login_name: cdktf.stringToTerraform(this._loginName),
      login_policy_id: cdktf.numberToTerraform(this._loginPolicyId),
      mark: cdktf.stringToTerraform(this._mark),
      organization_id: cdktf.numberToTerraform(this._organizationId),
      output_file: cdktf.stringToTerraform(this._outputFile),
      page_size: cdktf.numberToTerraform(this._pageSize),
      role_id: cdktf.numberToTerraform(this._roleId),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      current_page: {
        value: cdktf.numberToHclTerraform(this._currentPage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      login_name: {
        value: cdktf.stringToHclTerraform(this._loginName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_policy_id: {
        value: cdktf.numberToHclTerraform(this._loginPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mark: {
        value: cdktf.stringToHclTerraform(this._mark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.numberToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page_size: {
        value: cdktf.numberToHclTerraform(this._pageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      role_id: {
        value: cdktf.numberToHclTerraform(this._roleId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
