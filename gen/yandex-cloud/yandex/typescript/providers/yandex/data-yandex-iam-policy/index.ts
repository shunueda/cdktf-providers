// https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/iam_policy#id DataYandexIamPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * binding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/iam_policy#binding DataYandexIamPolicy#binding}
  */
  readonly binding: DataYandexIamPolicyBinding[] | cdktf.IResolvable;
}
export interface DataYandexIamPolicyBinding {
  /**
  * An array of identities that will be granted the privilege in the `role`. Each entry can have one of the following values:
  * * **userAccount:{user_id}**: A unique user ID that represents a specific Yandex account.
  * * **serviceAccount:{service_account_id}**: A unique service account ID.
  * * **federatedUser:{federated_user_id}:**: A unique saml federation user account ID.
  * * **group:{group_id}**: A unique group ID.
  * * **system:group:federation:{federation_id}:users**: All users in federation.
  * * **system:group:organization:{organization_id}:users**: All users in organization.
  * * **system:allAuthenticatedUsers**: All authenticated users.
  * * **system:allUsers**: All users, including unauthenticated ones.
  * 
  * ~> For more information about system groups, see the [documentation](https://yandex.cloud/docs/iam/concepts/access-control/system-group).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/iam_policy#members DataYandexIamPolicy#members}
  */
  readonly members: string[];
  /**
  * The role/permission that will be granted to the members. See the [IAM Roles](https://yandex.cloud/docs/iam/concepts/access-control/roles) documentation for a complete list of roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/iam_policy#role DataYandexIamPolicy#role}
  */
  readonly role: string;
}

export function dataYandexIamPolicyBindingToTerraform(struct?: DataYandexIamPolicyBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    members: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.members),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function dataYandexIamPolicyBindingToHclTerraform(struct?: DataYandexIamPolicyBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    members: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.members),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexIamPolicyBindingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexIamPolicyBinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._members !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexIamPolicyBinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._members = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._members = value.members;
      this._role = value.role;
    }
  }

  // members - computed: false, optional: false, required: true
  private _members?: string[]; 
  public get members() {
    return cdktf.Fn.tolist(this.getListAttribute('members'));
  }
  public set members(value: string[]) {
    this._members = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
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
}

export class DataYandexIamPolicyBindingList extends cdktf.ComplexList {
  public internalValue? : DataYandexIamPolicyBinding[] | cdktf.IResolvable

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
  public get(index: number): DataYandexIamPolicyBindingOutputReference {
    return new DataYandexIamPolicyBindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/iam_policy yandex_iam_policy}
*/
export class DataYandexIamPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_iam_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexIamPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexIamPolicy to import
  * @param importFromId The id of the existing DataYandexIamPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/iam_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexIamPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_iam_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/iam_policy yandex_iam_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexIamPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataYandexIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.177.0',
        providerVersionConstraint: '0.177.0'
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
    this._binding.internalValue = config.binding;
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

  // policy_data - computed: true, optional: false, required: false
  public get policyData() {
    return this.getStringAttribute('policy_data');
  }

  // binding - computed: false, optional: false, required: true
  private _binding = new DataYandexIamPolicyBindingList(this, "binding", true);
  public get binding() {
    return this._binding;
  }
  public putBinding(value: DataYandexIamPolicyBinding[] | cdktf.IResolvable) {
    this._binding.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingInput() {
    return this._binding.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      binding: cdktf.listMapper(dataYandexIamPolicyBindingToTerraform, true)(this._binding.internalValue),
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
      binding: {
        value: cdktf.listMapperHcl(dataYandexIamPolicyBindingToHclTerraform, true)(this._binding.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataYandexIamPolicyBindingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
