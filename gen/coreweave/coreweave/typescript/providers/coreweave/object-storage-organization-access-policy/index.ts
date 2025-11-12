// https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_organization_access_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectStorageOrganizationAccessPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the organization access policy, must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_organization_access_policy#name ObjectStorageOrganizationAccessPolicy#name}
  */
  readonly name: string;
  /**
  * The list of access policy statements associated with this policy. At least one statement is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_organization_access_policy#statements ObjectStorageOrganizationAccessPolicy#statements}
  */
  readonly statements: ObjectStorageOrganizationAccessPolicyStatements[] | cdktf.IResolvable;
}
export interface ObjectStorageOrganizationAccessPolicyStatements {
  /**
  * Defines which operations the policy allows or denies. Organization access policies can include actions from two APIs - S3 (s3:*) and AI Object Storage API (cwobject:*). You can use wildcards (like s3:* or cwobject:*) to cover multiple actions at once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_organization_access_policy#actions ObjectStorageOrganizationAccessPolicy#actions}
  */
  readonly actions: string[];
  /**
  * Must be either Allow or Deny (case-sensitive). Determines whether the statement grants or denies the specified actions on the listed resources for the designated principals. By default, all access is denied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_organization_access_policy#effect ObjectStorageOrganizationAccessPolicy#effect}
  */
  readonly effect: string;
  /**
  * A short, human-readable identifier for this specific policy statement, similar to Sid in bucket access policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_organization_access_policy#name ObjectStorageOrganizationAccessPolicy#name}
  */
  readonly name: string;
  /**
  * Defines which users, roles, or groups the policy applies to. Only short-form identifiers are supported. If you use a full ARN, the policy will fail with an error. See the [AI Object Storage documentation](https://docs.coreweave.com/docs/products/storage/object-storage/concepts/policies/organization-policies#resources) for guidelines on defining principals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_organization_access_policy#principals ObjectStorageOrganizationAccessPolicy#principals}
  */
  readonly principals: string[];
  /**
  * Defines which resources the policy applies to. See the [AI Object Storage documentation](https://docs.coreweave.com/docs/products/storage/object-storage/concepts/policies/organization-policies#resources) for guidelines on defining resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_organization_access_policy#resources ObjectStorageOrganizationAccessPolicy#resources}
  */
  readonly resources: string[];
}

export function objectStorageOrganizationAccessPolicyStatementsToTerraform(struct?: ObjectStorageOrganizationAccessPolicyStatements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    effect: cdktf.stringToTerraform(struct!.effect),
    name: cdktf.stringToTerraform(struct!.name),
    principals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.principals),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
  }
}


export function objectStorageOrganizationAccessPolicyStatementsToHclTerraform(struct?: ObjectStorageOrganizationAccessPolicyStatements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.principals),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectStorageOrganizationAccessPolicyStatementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectStorageOrganizationAccessPolicyStatements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._principals !== undefined) {
      hasAnyValues = true;
      internalValueResult.principals = this._principals;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectStorageOrganizationAccessPolicyStatements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._effect = undefined;
      this._name = undefined;
      this._principals = undefined;
      this._resources = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._effect = value.effect;
      this._name = value.name;
      this._principals = value.principals;
      this._resources = value.resources;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // principals - computed: false, optional: false, required: true
  private _principals?: string[]; 
  public get principals() {
    return cdktf.Fn.tolist(this.getListAttribute('principals'));
  }
  public set principals(value: string[]) {
    this._principals = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals;
  }

  // resources - computed: false, optional: false, required: true
  private _resources?: string[]; 
  public get resources() {
    return cdktf.Fn.tolist(this.getListAttribute('resources'));
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }
}

export class ObjectStorageOrganizationAccessPolicyStatementsList extends cdktf.ComplexList {
  public internalValue? : ObjectStorageOrganizationAccessPolicyStatements[] | cdktf.IResolvable

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
  public get(index: number): ObjectStorageOrganizationAccessPolicyStatementsOutputReference {
    return new ObjectStorageOrganizationAccessPolicyStatementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_organization_access_policy coreweave_object_storage_organization_access_policy}
*/
export class ObjectStorageOrganizationAccessPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coreweave_object_storage_organization_access_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectStorageOrganizationAccessPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectStorageOrganizationAccessPolicy to import
  * @param importFromId The id of the existing ObjectStorageOrganizationAccessPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_organization_access_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectStorageOrganizationAccessPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coreweave_object_storage_organization_access_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_organization_access_policy coreweave_object_storage_organization_access_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectStorageOrganizationAccessPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectStorageOrganizationAccessPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'coreweave_object_storage_organization_access_policy',
      terraformGeneratorMetadata: {
        providerName: 'coreweave',
        providerVersion: '0.7.0',
        providerVersionConstraint: '0.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._statements.internalValue = config.statements;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // statements - computed: false, optional: false, required: true
  private _statements = new ObjectStorageOrganizationAccessPolicyStatementsList(this, "statements", true);
  public get statements() {
    return this._statements;
  }
  public putStatements(value: ObjectStorageOrganizationAccessPolicyStatements[] | cdktf.IResolvable) {
    this._statements.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statementsInput() {
    return this._statements.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      statements: cdktf.listMapper(objectStorageOrganizationAccessPolicyStatementsToTerraform, false)(this._statements.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      statements: {
        value: cdktf.listMapperHcl(objectStorageOrganizationAccessPolicyStatementsToHclTerraform, false)(this._statements.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ObjectStorageOrganizationAccessPolicyStatementsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
