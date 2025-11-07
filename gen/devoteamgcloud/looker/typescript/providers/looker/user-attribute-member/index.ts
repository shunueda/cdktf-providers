// https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/user_attribute_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserAttributeMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/user_attribute_member#user_attribute_id UserAttributeMember#user_attribute_id}
  */
  readonly userAttributeId: string;
  /**
  * group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/user_attribute_member#group UserAttributeMember#group}
  */
  readonly group?: UserAttributeMemberGroup[] | cdktf.IResolvable;
}
export interface UserAttributeMemberGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/user_attribute_member#id UserAttributeMember#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/user_attribute_member#value UserAttributeMember#value}
  */
  readonly value: string;
}

export function userAttributeMemberGroupToTerraform(struct?: UserAttributeMemberGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function userAttributeMemberGroupToHclTerraform(struct?: UserAttributeMemberGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserAttributeMemberGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserAttributeMemberGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserAttributeMemberGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._value = value.value;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class UserAttributeMemberGroupList extends cdktf.ComplexList {
  public internalValue? : UserAttributeMemberGroup[] | cdktf.IResolvable

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
  public get(index: number): UserAttributeMemberGroupOutputReference {
    return new UserAttributeMemberGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/user_attribute_member looker_user_attribute_member}
*/
export class UserAttributeMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "looker_user_attribute_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserAttributeMember resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserAttributeMember to import
  * @param importFromId The id of the existing UserAttributeMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/user_attribute_member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserAttributeMember to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "looker_user_attribute_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/user_attribute_member looker_user_attribute_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserAttributeMemberConfig
  */
  public constructor(scope: Construct, id: string, config: UserAttributeMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'looker_user_attribute_member',
      terraformGeneratorMetadata: {
        providerName: 'looker',
        providerVersion: '0.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._userAttributeId = config.userAttributeId;
    this._group.internalValue = config.group;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // user_attribute_id - computed: false, optional: false, required: true
  private _userAttributeId?: string; 
  public get userAttributeId() {
    return this.getStringAttribute('user_attribute_id');
  }
  public set userAttributeId(value: string) {
    this._userAttributeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userAttributeIdInput() {
    return this._userAttributeId;
  }

  // group - computed: false, optional: true, required: false
  private _group = new UserAttributeMemberGroupList(this, "group", true);
  public get group() {
    return this._group;
  }
  public putGroup(value: UserAttributeMemberGroup[] | cdktf.IResolvable) {
    this._group.internalValue = value;
  }
  public resetGroup() {
    this._group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      user_attribute_id: cdktf.stringToTerraform(this._userAttributeId),
      group: cdktf.listMapper(userAttributeMemberGroupToTerraform, true)(this._group.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      user_attribute_id: {
        value: cdktf.stringToHclTerraform(this._userAttributeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group: {
        value: cdktf.listMapperHcl(userAttributeMemberGroupToHclTerraform, true)(this._group.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UserAttributeMemberGroupList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
