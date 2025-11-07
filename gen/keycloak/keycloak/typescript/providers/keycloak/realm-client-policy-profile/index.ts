// https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm_client_policy_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RealmClientPolicyProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm_client_policy_profile#description RealmClientPolicyProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm_client_policy_profile#id RealmClientPolicyProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm_client_policy_profile#name RealmClientPolicyProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm_client_policy_profile#realm_id RealmClientPolicyProfile#realm_id}
  */
  readonly realmId: string;
  /**
  * executor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm_client_policy_profile#executor RealmClientPolicyProfile#executor}
  */
  readonly executor?: RealmClientPolicyProfileExecutor[] | cdktf.IResolvable;
}
export interface RealmClientPolicyProfileExecutor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm_client_policy_profile#configuration RealmClientPolicyProfile#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm_client_policy_profile#name RealmClientPolicyProfile#name}
  */
  readonly name: string;
}

export function realmClientPolicyProfileExecutorToTerraform(struct?: RealmClientPolicyProfileExecutor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function realmClientPolicyProfileExecutorToHclTerraform(struct?: RealmClientPolicyProfileExecutor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RealmClientPolicyProfileExecutorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RealmClientPolicyProfileExecutor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealmClientPolicyProfileExecutor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration = value.configuration;
      this._name = value.name;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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
}

export class RealmClientPolicyProfileExecutorList extends cdktf.ComplexList {
  public internalValue? : RealmClientPolicyProfileExecutor[] | cdktf.IResolvable

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
  public get(index: number): RealmClientPolicyProfileExecutorOutputReference {
    return new RealmClientPolicyProfileExecutorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm_client_policy_profile keycloak_realm_client_policy_profile}
*/
export class RealmClientPolicyProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_realm_client_policy_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RealmClientPolicyProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RealmClientPolicyProfile to import
  * @param importFromId The id of the existing RealmClientPolicyProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm_client_policy_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RealmClientPolicyProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_realm_client_policy_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm_client_policy_profile keycloak_realm_client_policy_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RealmClientPolicyProfileConfig
  */
  public constructor(scope: Construct, id: string, config: RealmClientPolicyProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_realm_client_policy_profile',
      terraformGeneratorMetadata: {
        providerName: 'keycloak',
        providerVersion: '5.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._realmId = config.realmId;
    this._executor.internalValue = config.executor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // realm_id - computed: false, optional: false, required: true
  private _realmId?: string; 
  public get realmId() {
    return this.getStringAttribute('realm_id');
  }
  public set realmId(value: string) {
    this._realmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmIdInput() {
    return this._realmId;
  }

  // executor - computed: false, optional: true, required: false
  private _executor = new RealmClientPolicyProfileExecutorList(this, "executor", false);
  public get executor() {
    return this._executor;
  }
  public putExecutor(value: RealmClientPolicyProfileExecutor[] | cdktf.IResolvable) {
    this._executor.internalValue = value;
  }
  public resetExecutor() {
    this._executor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executorInput() {
    return this._executor.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      realm_id: cdktf.stringToTerraform(this._realmId),
      executor: cdktf.listMapper(realmClientPolicyProfileExecutorToTerraform, true)(this._executor.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realm_id: {
        value: cdktf.stringToHclTerraform(this._realmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      executor: {
        value: cdktf.listMapperHcl(realmClientPolicyProfileExecutorToHclTerraform, true)(this._executor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RealmClientPolicyProfileExecutorList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
