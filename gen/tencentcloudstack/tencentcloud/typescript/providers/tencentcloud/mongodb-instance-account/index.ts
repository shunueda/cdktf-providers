// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mongodb_instance_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MongodbInstanceAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mongodb_instance_account#id MongodbInstanceAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID, the format is: cmgo-9d0p6umb.Same as the instance ID displayed in the cloud database console page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mongodb_instance_account#instance_id MongodbInstanceAccount#instance_id}
  */
  readonly instanceId: string;
  /**
  * The password corresponding to the mongouser account. mongouser is the system default account, which is the password set when creating an instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mongodb_instance_account#mongo_user_password MongodbInstanceAccount#mongo_user_password}
  */
  readonly mongoUserPassword?: string;
  /**
  * New account password. Password complexity requirements are as follows: character length range [8,32]. Contains at least letters, numbers and special characters (exclamation point!, at@, pound sign #, percent sign %, caret ^, asterisk *, parentheses (), underscore _).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mongodb_instance_account#password MongodbInstanceAccount#password}
  */
  readonly password?: string;
  /**
  * Account remarks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mongodb_instance_account#user_desc MongodbInstanceAccount#user_desc}
  */
  readonly userDesc?: string;
  /**
  * The new account name. Its format requirements are as follows: character range [1,32]. Characters in the range of [A,Z], [a,z], [1,9] as well as underscore _ and dash - can be input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mongodb_instance_account#user_name MongodbInstanceAccount#user_name}
  */
  readonly userName: string;
  /**
  * auth_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mongodb_instance_account#auth_role MongodbInstanceAccount#auth_role}
  */
  readonly authRole?: MongodbInstanceAccountAuthRole[] | cdktf.IResolvable;
}
export interface MongodbInstanceAccountAuthRole {
  /**
  * Permission information of the current account. 0: No permission. 1: read-only. 2: Write only. 3: Read and write.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mongodb_instance_account#mask MongodbInstanceAccount#mask}
  */
  readonly mask: number;
  /**
  * Refers to the name of the database with the current account permissions.*: Indicates all databases. db.name: Indicates the database of a specific name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mongodb_instance_account#namespace MongodbInstanceAccount#namespace}
  */
  readonly namespace: string;
}

export function mongodbInstanceAccountAuthRoleToTerraform(struct?: MongodbInstanceAccountAuthRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.numberToTerraform(struct!.mask),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function mongodbInstanceAccountAuthRoleToHclTerraform(struct?: MongodbInstanceAccountAuthRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.numberToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MongodbInstanceAccountAuthRoleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MongodbInstanceAccountAuthRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MongodbInstanceAccountAuthRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._namespace = value.namespace;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: number; 
  public get mask() {
    return this.getNumberAttribute('mask');
  }
  public set mask(value: number) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}

export class MongodbInstanceAccountAuthRoleList extends cdktf.ComplexList {
  public internalValue? : MongodbInstanceAccountAuthRole[] | cdktf.IResolvable

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
  public get(index: number): MongodbInstanceAccountAuthRoleOutputReference {
    return new MongodbInstanceAccountAuthRoleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mongodb_instance_account tencentcloud_mongodb_instance_account}
*/
export class MongodbInstanceAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mongodb_instance_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MongodbInstanceAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MongodbInstanceAccount to import
  * @param importFromId The id of the existing MongodbInstanceAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mongodb_instance_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MongodbInstanceAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mongodb_instance_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mongodb_instance_account tencentcloud_mongodb_instance_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MongodbInstanceAccountConfig
  */
  public constructor(scope: Construct, id: string, config: MongodbInstanceAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mongodb_instance_account',
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
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._mongoUserPassword = config.mongoUserPassword;
    this._password = config.password;
    this._userDesc = config.userDesc;
    this._userName = config.userName;
    this._authRole.internalValue = config.authRole;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // mongo_user_password - computed: false, optional: true, required: false
  private _mongoUserPassword?: string; 
  public get mongoUserPassword() {
    return this.getStringAttribute('mongo_user_password');
  }
  public set mongoUserPassword(value: string) {
    this._mongoUserPassword = value;
  }
  public resetMongoUserPassword() {
    this._mongoUserPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongoUserPasswordInput() {
    return this._mongoUserPassword;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // user_desc - computed: false, optional: true, required: false
  private _userDesc?: string; 
  public get userDesc() {
    return this.getStringAttribute('user_desc');
  }
  public set userDesc(value: string) {
    this._userDesc = value;
  }
  public resetUserDesc() {
    this._userDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDescInput() {
    return this._userDesc;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // auth_role - computed: false, optional: true, required: false
  private _authRole = new MongodbInstanceAccountAuthRoleList(this, "auth_role", false);
  public get authRole() {
    return this._authRole;
  }
  public putAuthRole(value: MongodbInstanceAccountAuthRole[] | cdktf.IResolvable) {
    this._authRole.internalValue = value;
  }
  public resetAuthRole() {
    this._authRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authRoleInput() {
    return this._authRole.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      mongo_user_password: cdktf.stringToTerraform(this._mongoUserPassword),
      password: cdktf.stringToTerraform(this._password),
      user_desc: cdktf.stringToTerraform(this._userDesc),
      user_name: cdktf.stringToTerraform(this._userName),
      auth_role: cdktf.listMapper(mongodbInstanceAccountAuthRoleToTerraform, true)(this._authRole.internalValue),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mongo_user_password: {
        value: cdktf.stringToHclTerraform(this._mongoUserPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_desc: {
        value: cdktf.stringToHclTerraform(this._userDesc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_role: {
        value: cdktf.listMapperHcl(mongodbInstanceAccountAuthRoleToHclTerraform, true)(this._authRole.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MongodbInstanceAccountAuthRoleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
