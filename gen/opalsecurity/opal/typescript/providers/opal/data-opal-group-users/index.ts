// https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/group_users
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpalGroupUsersConfig extends cdktf.TerraformMetaArguments {
  /**
  * The pagination cursor value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/group_users#cursor DataOpalGroupUsers#cursor}
  */
  readonly cursor?: string;
  /**
  * The ID of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/group_users#group_id DataOpalGroupUsers#group_id}
  */
  readonly groupId: string;
  /**
  * Number of results to return per page. Default is 200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/group_users#page_size DataOpalGroupUsers#page_size}
  */
  readonly pageSize?: number;
}
export interface DataOpalGroupUsersResultsAccessLevel {
}

export function dataOpalGroupUsersResultsAccessLevelToTerraform(struct?: DataOpalGroupUsersResultsAccessLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalGroupUsersResultsAccessLevelToHclTerraform(struct?: DataOpalGroupUsersResultsAccessLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalGroupUsersResultsAccessLevelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalGroupUsersResultsAccessLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalGroupUsersResultsAccessLevel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_level_name - computed: true, optional: false, required: false
  public get accessLevelName() {
    return this.getStringAttribute('access_level_name');
  }

  // access_level_remote_id - computed: true, optional: false, required: false
  public get accessLevelRemoteId() {
    return this.getStringAttribute('access_level_remote_id');
  }
}
export interface DataOpalGroupUsersResultsPropagationStatus {
}

export function dataOpalGroupUsersResultsPropagationStatusToTerraform(struct?: DataOpalGroupUsersResultsPropagationStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalGroupUsersResultsPropagationStatusToHclTerraform(struct?: DataOpalGroupUsersResultsPropagationStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalGroupUsersResultsPropagationStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalGroupUsersResultsPropagationStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalGroupUsersResultsPropagationStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface DataOpalGroupUsersResults {
}

export function dataOpalGroupUsersResultsToTerraform(struct?: DataOpalGroupUsersResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalGroupUsersResultsToHclTerraform(struct?: DataOpalGroupUsersResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalGroupUsersResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpalGroupUsersResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalGroupUsersResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_level - computed: true, optional: false, required: false
  private _accessLevel = new DataOpalGroupUsersResultsAccessLevelOutputReference(this, "access_level");
  public get accessLevel() {
    return this._accessLevel;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // expiration_date - computed: true, optional: false, required: false
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }

  // full_name - computed: true, optional: false, required: false
  public get fullName() {
    return this.getStringAttribute('full_name');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // propagation_status - computed: true, optional: false, required: false
  private _propagationStatus = new DataOpalGroupUsersResultsPropagationStatusOutputReference(this, "propagation_status");
  public get propagationStatus() {
    return this._propagationStatus;
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }
}

export class DataOpalGroupUsersResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpalGroupUsersResultsOutputReference {
    return new DataOpalGroupUsersResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/group_users opal_group_users}
*/
export class DataOpalGroupUsers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opal_group_users";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpalGroupUsers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpalGroupUsers to import
  * @param importFromId The id of the existing DataOpalGroupUsers that should be imported. Refer to the {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/group_users#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpalGroupUsers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opal_group_users", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/group_users opal_group_users} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpalGroupUsersConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpalGroupUsersConfig) {
    super(scope, id, {
      terraformResourceType: 'opal_group_users',
      terraformGeneratorMetadata: {
        providerName: 'opal',
        providerVersion: '3.4.0',
        providerVersionConstraint: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cursor = config.cursor;
    this._groupId = config.groupId;
    this._pageSize = config.pageSize;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cursor - computed: false, optional: true, required: false
  private _cursor?: string; 
  public get cursor() {
    return this.getStringAttribute('cursor');
  }
  public set cursor(value: string) {
    this._cursor = value;
  }
  public resetCursor() {
    this._cursor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cursorInput() {
    return this._cursor;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // next - computed: true, optional: false, required: false
  public get next() {
    return this.getStringAttribute('next');
  }

  // page_size - computed: false, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
  }

  // previous - computed: true, optional: false, required: false
  public get previous() {
    return this.getStringAttribute('previous');
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataOpalGroupUsersResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cursor: cdktf.stringToTerraform(this._cursor),
      group_id: cdktf.stringToTerraform(this._groupId),
      page_size: cdktf.numberToTerraform(this._pageSize),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cursor: {
        value: cdktf.stringToHclTerraform(this._cursor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page_size: {
        value: cdktf.numberToHclTerraform(this._pageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
