// https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/authorization_policy_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthorizationPolicyV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/authorization_policy_v2#authorization_policy_type AuthorizationPolicyV2#authorization_policy_type}
  */
  readonly authorizationPolicyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/authorization_policy_v2#description AuthorizationPolicyV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/authorization_policy_v2#display_name AuthorizationPolicyV2#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/authorization_policy_v2#ext_id AuthorizationPolicyV2#ext_id}
  */
  readonly extId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/authorization_policy_v2#id AuthorizationPolicyV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/authorization_policy_v2#role AuthorizationPolicyV2#role}
  */
  readonly role: string;
  /**
  * entities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/authorization_policy_v2#entities AuthorizationPolicyV2#entities}
  */
  readonly entities: AuthorizationPolicyV2Entities[] | cdktf.IResolvable;
  /**
  * identities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/authorization_policy_v2#identities AuthorizationPolicyV2#identities}
  */
  readonly identities: AuthorizationPolicyV2Identities[] | cdktf.IResolvable;
}
export interface AuthorizationPolicyV2Entities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/authorization_policy_v2#reserved AuthorizationPolicyV2#reserved}
  */
  readonly reserved?: string;
}

export function authorizationPolicyV2EntitiesToTerraform(struct?: AuthorizationPolicyV2Entities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reserved: cdktf.stringToTerraform(struct!.reserved),
  }
}


export function authorizationPolicyV2EntitiesToHclTerraform(struct?: AuthorizationPolicyV2Entities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reserved: {
      value: cdktf.stringToHclTerraform(struct!.reserved),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthorizationPolicyV2EntitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthorizationPolicyV2Entities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reserved !== undefined) {
      hasAnyValues = true;
      internalValueResult.reserved = this._reserved;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthorizationPolicyV2Entities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reserved = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reserved = value.reserved;
    }
  }

  // reserved - computed: false, optional: true, required: false
  private _reserved?: string; 
  public get reserved() {
    return this.getStringAttribute('reserved');
  }
  public set reserved(value: string) {
    this._reserved = value;
  }
  public resetReserved() {
    this._reserved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedInput() {
    return this._reserved;
  }
}

export class AuthorizationPolicyV2EntitiesList extends cdktf.ComplexList {
  public internalValue? : AuthorizationPolicyV2Entities[] | cdktf.IResolvable

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
  public get(index: number): AuthorizationPolicyV2EntitiesOutputReference {
    return new AuthorizationPolicyV2EntitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthorizationPolicyV2Identities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/authorization_policy_v2#reserved AuthorizationPolicyV2#reserved}
  */
  readonly reserved?: string;
}

export function authorizationPolicyV2IdentitiesToTerraform(struct?: AuthorizationPolicyV2Identities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reserved: cdktf.stringToTerraform(struct!.reserved),
  }
}


export function authorizationPolicyV2IdentitiesToHclTerraform(struct?: AuthorizationPolicyV2Identities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reserved: {
      value: cdktf.stringToHclTerraform(struct!.reserved),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthorizationPolicyV2IdentitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthorizationPolicyV2Identities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reserved !== undefined) {
      hasAnyValues = true;
      internalValueResult.reserved = this._reserved;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthorizationPolicyV2Identities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reserved = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reserved = value.reserved;
    }
  }

  // reserved - computed: true, optional: true, required: false
  private _reserved?: string; 
  public get reserved() {
    return this.getStringAttribute('reserved');
  }
  public set reserved(value: string) {
    this._reserved = value;
  }
  public resetReserved() {
    this._reserved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedInput() {
    return this._reserved;
  }
}

export class AuthorizationPolicyV2IdentitiesList extends cdktf.ComplexList {
  public internalValue? : AuthorizationPolicyV2Identities[] | cdktf.IResolvable

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
  public get(index: number): AuthorizationPolicyV2IdentitiesOutputReference {
    return new AuthorizationPolicyV2IdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/authorization_policy_v2 nutanix_authorization_policy_v2}
*/
export class AuthorizationPolicyV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_authorization_policy_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthorizationPolicyV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthorizationPolicyV2 to import
  * @param importFromId The id of the existing AuthorizationPolicyV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/authorization_policy_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthorizationPolicyV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_authorization_policy_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/authorization_policy_v2 nutanix_authorization_policy_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthorizationPolicyV2Config
  */
  public constructor(scope: Construct, id: string, config: AuthorizationPolicyV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_authorization_policy_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authorizationPolicyType = config.authorizationPolicyType;
    this._description = config.description;
    this._displayName = config.displayName;
    this._extId = config.extId;
    this._id = config.id;
    this._role = config.role;
    this._entities.internalValue = config.entities;
    this._identities.internalValue = config.identities;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_policy_type - computed: true, optional: true, required: false
  private _authorizationPolicyType?: string; 
  public get authorizationPolicyType() {
    return this.getStringAttribute('authorization_policy_type');
  }
  public set authorizationPolicyType(value: string) {
    this._authorizationPolicyType = value;
  }
  public resetAuthorizationPolicyType() {
    this._authorizationPolicyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationPolicyTypeInput() {
    return this._authorizationPolicyType;
  }

  // client_name - computed: true, optional: false, required: false
  public get clientName() {
    return this.getStringAttribute('client_name');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // description - computed: true, optional: true, required: false
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
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

  // is_system_defined - computed: true, optional: false, required: false
  public get isSystemDefined() {
    return this.getBooleanAttribute('is_system_defined');
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
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

  // entities - computed: false, optional: false, required: true
  private _entities = new AuthorizationPolicyV2EntitiesList(this, "entities", false);
  public get entities() {
    return this._entities;
  }
  public putEntities(value: AuthorizationPolicyV2Entities[] | cdktf.IResolvable) {
    this._entities.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entitiesInput() {
    return this._entities.internalValue;
  }

  // identities - computed: false, optional: false, required: true
  private _identities = new AuthorizationPolicyV2IdentitiesList(this, "identities", false);
  public get identities() {
    return this._identities;
  }
  public putIdentities(value: AuthorizationPolicyV2Identities[] | cdktf.IResolvable) {
    this._identities.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorization_policy_type: cdktf.stringToTerraform(this._authorizationPolicyType),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      ext_id: cdktf.stringToTerraform(this._extId),
      id: cdktf.stringToTerraform(this._id),
      role: cdktf.stringToTerraform(this._role),
      entities: cdktf.listMapper(authorizationPolicyV2EntitiesToTerraform, true)(this._entities.internalValue),
      identities: cdktf.listMapper(authorizationPolicyV2IdentitiesToTerraform, true)(this._identities.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorization_policy_type: {
        value: cdktf.stringToHclTerraform(this._authorizationPolicyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_id: {
        value: cdktf.stringToHclTerraform(this._extId),
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
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entities: {
        value: cdktf.listMapperHcl(authorizationPolicyV2EntitiesToHclTerraform, true)(this._entities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AuthorizationPolicyV2EntitiesList",
      },
      identities: {
        value: cdktf.listMapperHcl(authorizationPolicyV2IdentitiesToHclTerraform, true)(this._identities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AuthorizationPolicyV2IdentitiesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
