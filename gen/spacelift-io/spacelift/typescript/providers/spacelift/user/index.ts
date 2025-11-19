// https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * `invitation_email` will be used to send an invitation to the specified email address. This property is required when creating a new user. This property is optional when importing an existing user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/user#invitation_email User#invitation_email}
  */
  readonly invitationEmail?: string;
  /**
  * Username of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/user#username User#username}
  */
  readonly username: string;
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/user#policy User#policy}
  */
  readonly policy?: UserPolicy[] | cdktf.IResolvable;
}
export interface UserPolicy {
  /**
  * Type of access to the space. Possible values are: READ, WRITE, ADMIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/user#role User#role}
  */
  readonly role: string;
  /**
  * ID (slug) of the space the user has access to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/user#space_id User#space_id}
  */
  readonly spaceId: string;
}

export function userPolicyToTerraform(struct?: UserPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role: cdktf.stringToTerraform(struct!.role),
    space_id: cdktf.stringToTerraform(struct!.spaceId),
  }
}


export function userPolicyToHclTerraform(struct?: UserPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    space_id: {
      value: cdktf.stringToHclTerraform(struct!.spaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._spaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaceId = this._spaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._role = undefined;
      this._spaceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._role = value.role;
      this._spaceId = value.spaceId;
    }
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // space_id - computed: false, optional: false, required: true
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }
}

export class UserPolicyList extends cdktf.ComplexList {
  public internalValue? : UserPolicy[] | cdktf.IResolvable

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
  public get(index: number): UserPolicyOutputReference {
    return new UserPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/user spacelift_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spacelift_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spacelift_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/user spacelift_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'spacelift_user',
      terraformGeneratorMetadata: {
        providerName: 'spacelift',
        providerVersion: '1.38.0',
        providerVersionConstraint: '1.38.0'
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
    this._invitationEmail = config.invitationEmail;
    this._username = config.username;
    this._policy.internalValue = config.policy;
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

  // invitation_email - computed: false, optional: true, required: false
  private _invitationEmail?: string; 
  public get invitationEmail() {
    return this.getStringAttribute('invitation_email');
  }
  public set invitationEmail(value: string) {
    this._invitationEmail = value;
  }
  public resetInvitationEmail() {
    this._invitationEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invitationEmailInput() {
    return this._invitationEmail;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // policy - computed: false, optional: true, required: false
  private _policy = new UserPolicyList(this, "policy", true);
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: UserPolicy[] | cdktf.IResolvable) {
    this._policy.internalValue = value;
  }
  public resetPolicy() {
    this._policy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      invitation_email: cdktf.stringToTerraform(this._invitationEmail),
      username: cdktf.stringToTerraform(this._username),
      policy: cdktf.listMapper(userPolicyToTerraform, true)(this._policy.internalValue),
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
      invitation_email: {
        value: cdktf.stringToHclTerraform(this._invitationEmail),
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
      policy: {
        value: cdktf.listMapperHcl(userPolicyToHclTerraform, true)(this._policy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UserPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
