// https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/data-sources/users
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOneloginUsersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/data-sources/users#directory_id DataOneloginUsers#directory_id}
  */
  readonly directoryId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/data-sources/users#external_id DataOneloginUsers#external_id}
  */
  readonly externalId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/data-sources/users#firstname DataOneloginUsers#firstname}
  */
  readonly firstname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/data-sources/users#id DataOneloginUsers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/data-sources/users#lastname DataOneloginUsers#lastname}
  */
  readonly lastname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/data-sources/users#samaccountname DataOneloginUsers#samaccountname}
  */
  readonly samaccountname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/data-sources/users#user_id DataOneloginUsers#user_id}
  */
  readonly userId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/data-sources/users#username DataOneloginUsers#username}
  */
  readonly username?: string;
}
export interface DataOneloginUsersUsers {
}

export function dataOneloginUsersUsersToTerraform(struct?: DataOneloginUsersUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOneloginUsersUsersToHclTerraform(struct?: DataOneloginUsersUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOneloginUsersUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOneloginUsersUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOneloginUsersUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // directory_id - computed: true, optional: false, required: false
  public get directoryId() {
    return this.getNumberAttribute('directory_id');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getNumberAttribute('external_id');
  }

  // firstname - computed: true, optional: false, required: false
  public get firstname() {
    return this.getStringAttribute('firstname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // last_login - computed: true, optional: false, required: false
  public get lastLogin() {
    return this.getStringAttribute('last_login');
  }

  // lastname - computed: true, optional: false, required: false
  public get lastname() {
    return this.getStringAttribute('lastname');
  }

  // samaccountname - computed: true, optional: false, required: false
  public get samaccountname() {
    return this.getStringAttribute('samaccountname');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataOneloginUsersUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataOneloginUsersUsersOutputReference {
    return new DataOneloginUsersUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/data-sources/users onelogin_users}
*/
export class DataOneloginUsers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "onelogin_users";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOneloginUsers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOneloginUsers to import
  * @param importFromId The id of the existing DataOneloginUsers that should be imported. Refer to the {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/data-sources/users#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOneloginUsers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "onelogin_users", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/data-sources/users onelogin_users} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOneloginUsersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOneloginUsersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'onelogin_users',
      terraformGeneratorMetadata: {
        providerName: 'onelogin',
        providerVersion: '0.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._directoryId = config.directoryId;
    this._externalId = config.externalId;
    this._firstname = config.firstname;
    this._id = config.id;
    this._lastname = config.lastname;
    this._samaccountname = config.samaccountname;
    this._userId = config.userId;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // directory_id - computed: false, optional: true, required: false
  private _directoryId?: number; 
  public get directoryId() {
    return this.getNumberAttribute('directory_id');
  }
  public set directoryId(value: number) {
    this._directoryId = value;
  }
  public resetDirectoryId() {
    this._directoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryIdInput() {
    return this._directoryId;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: number; 
  public get externalId() {
    return this.getNumberAttribute('external_id');
  }
  public set externalId(value: number) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // firstname - computed: false, optional: true, required: false
  private _firstname?: string; 
  public get firstname() {
    return this.getStringAttribute('firstname');
  }
  public set firstname(value: string) {
    this._firstname = value;
  }
  public resetFirstname() {
    this._firstname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstnameInput() {
    return this._firstname;
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

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // lastname - computed: false, optional: true, required: false
  private _lastname?: string; 
  public get lastname() {
    return this.getStringAttribute('lastname');
  }
  public set lastname(value: string) {
    this._lastname = value;
  }
  public resetLastname() {
    this._lastname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastnameInput() {
    return this._lastname;
  }

  // samaccountname - computed: false, optional: true, required: false
  private _samaccountname?: string; 
  public get samaccountname() {
    return this.getStringAttribute('samaccountname');
  }
  public set samaccountname(value: string) {
    this._samaccountname = value;
  }
  public resetSamaccountname() {
    this._samaccountname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samaccountnameInput() {
    return this._samaccountname;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // users - computed: true, optional: false, required: false
  private _users = new DataOneloginUsersUsersList(this, "users", false);
  public get users() {
    return this._users;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      directory_id: cdktf.numberToTerraform(this._directoryId),
      external_id: cdktf.numberToTerraform(this._externalId),
      firstname: cdktf.stringToTerraform(this._firstname),
      id: cdktf.stringToTerraform(this._id),
      lastname: cdktf.stringToTerraform(this._lastname),
      samaccountname: cdktf.stringToTerraform(this._samaccountname),
      user_id: cdktf.stringToTerraform(this._userId),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      directory_id: {
        value: cdktf.numberToHclTerraform(this._directoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      external_id: {
        value: cdktf.numberToHclTerraform(this._externalId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      firstname: {
        value: cdktf.stringToHclTerraform(this._firstname),
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
      lastname: {
        value: cdktf.stringToHclTerraform(this._lastname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      samaccountname: {
        value: cdktf.stringToHclTerraform(this._samaccountname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
