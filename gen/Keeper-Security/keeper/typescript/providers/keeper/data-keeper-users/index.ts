// https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/users
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKeeperUsersConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of emails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/users#emails DataKeeperUsers#emails}
  */
  readonly emails?: string[];
  /**
  * Search By field filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/users#filter DataKeeperUsers#filter}
  */
  readonly filter?: DataKeeperUsersFilter;
  /**
  * Filter Active or Pending users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/users#is_active DataKeeperUsers#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * Search By node filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/users#nodes DataKeeperUsers#nodes}
  */
  readonly nodes?: DataKeeperUsersNodes;
}
export interface DataKeeperUsersFilter {
  /**
  * Comparison operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/users#cmp DataKeeperUsers#cmp}
  */
  readonly cmp?: string;
  /**
  * Field Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/users#field DataKeeperUsers#field}
  */
  readonly field: string;
  /**
  * Comparison value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/users#value DataKeeperUsers#value}
  */
  readonly value: string;
}

export function dataKeeperUsersFilterToTerraform(struct?: DataKeeperUsersFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cmp: cdktf.stringToTerraform(struct!.cmp),
    field: cdktf.stringToTerraform(struct!.field),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataKeeperUsersFilterToHclTerraform(struct?: DataKeeperUsersFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cmp: {
      value: cdktf.stringToHclTerraform(struct!.cmp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
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

export class DataKeeperUsersFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeeperUsersFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmp = this._cmp;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeeperUsersFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cmp = undefined;
      this._field = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cmp = value.cmp;
      this._field = value.field;
      this._value = value.value;
    }
  }

  // cmp - computed: false, optional: true, required: false
  private _cmp?: string; 
  public get cmp() {
    return this.getStringAttribute('cmp');
  }
  public set cmp(value: string) {
    this._cmp = value;
  }
  public resetCmp() {
    this._cmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmpInput() {
    return this._cmp;
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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
export interface DataKeeperUsersNodes {
  /**
  * Include subnodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/users#cascade DataKeeperUsers#cascade}
  */
  readonly cascade?: boolean | cdktf.IResolvable;
  /**
  * Base Node ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/users#node_id DataKeeperUsers#node_id}
  */
  readonly nodeId: number;
}

export function dataKeeperUsersNodesToTerraform(struct?: DataKeeperUsersNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cascade: cdktf.booleanToTerraform(struct!.cascade),
    node_id: cdktf.numberToTerraform(struct!.nodeId),
  }
}


export function dataKeeperUsersNodesToHclTerraform(struct?: DataKeeperUsersNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cascade: {
      value: cdktf.booleanToHclTerraform(struct!.cascade),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_id: {
      value: cdktf.numberToHclTerraform(struct!.nodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKeeperUsersNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeeperUsersNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cascade !== undefined) {
      hasAnyValues = true;
      internalValueResult.cascade = this._cascade;
    }
    if (this._nodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeId = this._nodeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeeperUsersNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cascade = undefined;
      this._nodeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cascade = value.cascade;
      this._nodeId = value.nodeId;
    }
  }

  // cascade - computed: false, optional: true, required: false
  private _cascade?: boolean | cdktf.IResolvable; 
  public get cascade() {
    return this.getBooleanAttribute('cascade');
  }
  public set cascade(value: boolean | cdktf.IResolvable) {
    this._cascade = value;
  }
  public resetCascade() {
    this._cascade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cascadeInput() {
    return this._cascade;
  }

  // node_id - computed: false, optional: false, required: true
  private _nodeId?: number; 
  public get nodeId() {
    return this.getNumberAttribute('node_id');
  }
  public set nodeId(value: number) {
    this._nodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }
}
export interface DataKeeperUsersUsers {
}

export function dataKeeperUsersUsersToTerraform(struct?: DataKeeperUsersUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeeperUsersUsersToHclTerraform(struct?: DataKeeperUsersUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeeperUsersUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeeperUsersUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeeperUsersUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_share_expiration - computed: true, optional: false, required: false
  public get accountShareExpiration() {
    return this.getNumberAttribute('account_share_expiration');
  }

  // enterprise_user_id - computed: true, optional: false, required: false
  public get enterpriseUserId() {
    return this.getNumberAttribute('enterprise_user_id');
  }

  // full_name - computed: true, optional: false, required: false
  public get fullName() {
    return this.getStringAttribute('full_name');
  }

  // job_title - computed: true, optional: false, required: false
  public get jobTitle() {
    return this.getStringAttribute('job_title');
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getNumberAttribute('node_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tfa_enabled - computed: true, optional: false, required: false
  public get tfaEnabled() {
    return this.getBooleanAttribute('tfa_enabled');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataKeeperUsersUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataKeeperUsersUsersOutputReference {
    return new DataKeeperUsersUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/users keeper_users}
*/
export class DataKeeperUsers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keeper_users";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKeeperUsers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKeeperUsers to import
  * @param importFromId The id of the existing DataKeeperUsers that should be imported. Refer to the {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/users#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKeeperUsers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keeper_users", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/users keeper_users} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKeeperUsersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataKeeperUsersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'keeper_users',
      terraformGeneratorMetadata: {
        providerName: 'keeper',
        providerVersion: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._emails = config.emails;
    this._filter.internalValue = config.filter;
    this._isActive = config.isActive;
    this._nodes.internalValue = config.nodes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // emails - computed: false, optional: true, required: false
  private _emails?: string[]; 
  public get emails() {
    return cdktf.Fn.tolist(this.getListAttribute('emails'));
  }
  public set emails(value: string[]) {
    this._emails = value;
  }
  public resetEmails() {
    this._emails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailsInput() {
    return this._emails;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataKeeperUsersFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataKeeperUsersFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // is_active - computed: false, optional: true, required: false
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes = new DataKeeperUsersNodesOutputReference(this, "nodes");
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: DataKeeperUsersNodes) {
    this._nodes.internalValue = value;
  }
  public resetNodes() {
    this._nodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }

  // users - computed: true, optional: false, required: false
  private _users = new DataKeeperUsersUsersList(this, "users", false);
  public get users() {
    return this._users;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      emails: cdktf.listMapper(cdktf.stringToTerraform, false)(this._emails),
      filter: dataKeeperUsersFilterToTerraform(this._filter.internalValue),
      is_active: cdktf.booleanToTerraform(this._isActive),
      nodes: dataKeeperUsersNodesToTerraform(this._nodes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      emails: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._emails),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      filter: {
        value: dataKeeperUsersFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataKeeperUsersFilter",
      },
      is_active: {
        value: cdktf.booleanToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nodes: {
        value: dataKeeperUsersNodesToHclTerraform(this._nodes.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataKeeperUsersNodes",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
