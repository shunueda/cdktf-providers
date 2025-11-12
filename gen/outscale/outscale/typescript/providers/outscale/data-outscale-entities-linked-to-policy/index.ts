// https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/data-sources/entities_linked_to_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOutscaleEntitiesLinkedToPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/data-sources/entities_linked_to_policy#entities_type DataOutscaleEntitiesLinkedToPolicy#entities_type}
  */
  readonly entitiesType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/data-sources/entities_linked_to_policy#id DataOutscaleEntitiesLinkedToPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/data-sources/entities_linked_to_policy#policy_orn DataOutscaleEntitiesLinkedToPolicy#policy_orn}
  */
  readonly policyOrn: string;
}
export interface DataOutscaleEntitiesLinkedToPolicyPolicyEntitiesAccounts {
}

export function dataOutscaleEntitiesLinkedToPolicyPolicyEntitiesAccountsToTerraform(struct?: DataOutscaleEntitiesLinkedToPolicyPolicyEntitiesAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOutscaleEntitiesLinkedToPolicyPolicyEntitiesAccountsToHclTerraform(struct?: DataOutscaleEntitiesLinkedToPolicyPolicyEntitiesAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOutscaleEntitiesLinkedToPolicyPolicyEntitiesAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOutscaleEntitiesLinkedToPolicyPolicyEntitiesAccounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOutscaleEntitiesLinkedToPolicyPolicyEntitiesAccounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // orn - computed: true, optional: false, required: false
  public get orn() {
    return this.getStringAttribute('orn');
  }
}

export class DataOutscaleEntitiesLinkedToPolicyPolicyEntitiesAccountsList extends cdktf.ComplexList {

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
  public get(index: number): DataOutscaleEntitiesLinkedToPolicyPolicyEntitiesAccountsOutputReference {
    return new DataOutscaleEntitiesLinkedToPolicyPolicyEntitiesAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOutscaleEntitiesLinkedToPolicyPolicyEntitiesGroups {
}

export function dataOutscaleEntitiesLinkedToPolicyPolicyEntitiesGroupsToTerraform(struct?: DataOutscaleEntitiesLinkedToPolicyPolicyEntitiesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOutscaleEntitiesLinkedToPolicyPolicyEntitiesGroupsToHclTerraform(struct?: DataOutscaleEntitiesLinkedToPolicyPolicyEntitiesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOutscaleEntitiesLinkedToPolicyPolicyEntitiesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOutscaleEntitiesLinkedToPolicyPolicyEntitiesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOutscaleEntitiesLinkedToPolicyPolicyEntitiesGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // orn - computed: true, optional: false, required: false
  public get orn() {
    return this.getStringAttribute('orn');
  }
}

export class DataOutscaleEntitiesLinkedToPolicyPolicyEntitiesGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOutscaleEntitiesLinkedToPolicyPolicyEntitiesGroupsOutputReference {
    return new DataOutscaleEntitiesLinkedToPolicyPolicyEntitiesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOutscaleEntitiesLinkedToPolicyPolicyEntitiesUsers {
}

export function dataOutscaleEntitiesLinkedToPolicyPolicyEntitiesUsersToTerraform(struct?: DataOutscaleEntitiesLinkedToPolicyPolicyEntitiesUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOutscaleEntitiesLinkedToPolicyPolicyEntitiesUsersToHclTerraform(struct?: DataOutscaleEntitiesLinkedToPolicyPolicyEntitiesUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOutscaleEntitiesLinkedToPolicyPolicyEntitiesUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOutscaleEntitiesLinkedToPolicyPolicyEntitiesUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOutscaleEntitiesLinkedToPolicyPolicyEntitiesUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // orn - computed: true, optional: false, required: false
  public get orn() {
    return this.getStringAttribute('orn');
  }
}

export class DataOutscaleEntitiesLinkedToPolicyPolicyEntitiesUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataOutscaleEntitiesLinkedToPolicyPolicyEntitiesUsersOutputReference {
    return new DataOutscaleEntitiesLinkedToPolicyPolicyEntitiesUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOutscaleEntitiesLinkedToPolicyPolicyEntities {
}

export function dataOutscaleEntitiesLinkedToPolicyPolicyEntitiesToTerraform(struct?: DataOutscaleEntitiesLinkedToPolicyPolicyEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOutscaleEntitiesLinkedToPolicyPolicyEntitiesToHclTerraform(struct?: DataOutscaleEntitiesLinkedToPolicyPolicyEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOutscaleEntitiesLinkedToPolicyPolicyEntitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOutscaleEntitiesLinkedToPolicyPolicyEntities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOutscaleEntitiesLinkedToPolicyPolicyEntities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accounts - computed: true, optional: false, required: false
  private _accounts = new DataOutscaleEntitiesLinkedToPolicyPolicyEntitiesAccountsList(this, "accounts", true);
  public get accounts() {
    return this._accounts;
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataOutscaleEntitiesLinkedToPolicyPolicyEntitiesGroupsList(this, "groups", true);
  public get groups() {
    return this._groups;
  }

  // users - computed: true, optional: false, required: false
  private _users = new DataOutscaleEntitiesLinkedToPolicyPolicyEntitiesUsersList(this, "users", true);
  public get users() {
    return this._users;
  }
}

export class DataOutscaleEntitiesLinkedToPolicyPolicyEntitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOutscaleEntitiesLinkedToPolicyPolicyEntitiesOutputReference {
    return new DataOutscaleEntitiesLinkedToPolicyPolicyEntitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/data-sources/entities_linked_to_policy outscale_entities_linked_to_policy}
*/
export class DataOutscaleEntitiesLinkedToPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "outscale_entities_linked_to_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOutscaleEntitiesLinkedToPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOutscaleEntitiesLinkedToPolicy to import
  * @param importFromId The id of the existing DataOutscaleEntitiesLinkedToPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/data-sources/entities_linked_to_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOutscaleEntitiesLinkedToPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "outscale_entities_linked_to_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/data-sources/entities_linked_to_policy outscale_entities_linked_to_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOutscaleEntitiesLinkedToPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataOutscaleEntitiesLinkedToPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'outscale_entities_linked_to_policy',
      terraformGeneratorMetadata: {
        providerName: 'outscale',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._entitiesType = config.entitiesType;
    this._id = config.id;
    this._policyOrn = config.policyOrn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entities_type - computed: false, optional: true, required: false
  private _entitiesType?: string[]; 
  public get entitiesType() {
    return cdktf.Fn.tolist(this.getListAttribute('entities_type'));
  }
  public set entitiesType(value: string[]) {
    this._entitiesType = value;
  }
  public resetEntitiesType() {
    this._entitiesType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitiesTypeInput() {
    return this._entitiesType;
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

  // policy_entities - computed: true, optional: false, required: false
  private _policyEntities = new DataOutscaleEntitiesLinkedToPolicyPolicyEntitiesList(this, "policy_entities", true);
  public get policyEntities() {
    return this._policyEntities;
  }

  // policy_orn - computed: false, optional: false, required: true
  private _policyOrn?: string; 
  public get policyOrn() {
    return this.getStringAttribute('policy_orn');
  }
  public set policyOrn(value: string) {
    this._policyOrn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyOrnInput() {
    return this._policyOrn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      entities_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._entitiesType),
      id: cdktf.stringToTerraform(this._id),
      policy_orn: cdktf.stringToTerraform(this._policyOrn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entities_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._entitiesType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_orn: {
        value: cdktf.stringToHclTerraform(this._policyOrn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
