// https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/data-sources/connection_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGuacamoleConnectionGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/data-sources/connection_group#id DataGuacamoleConnectionGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier of guacamole connection group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/data-sources/connection_group#identifier DataGuacamoleConnectionGroup#identifier}
  */
  readonly identifier?: string;
  /**
  * Parent Identifier of guacamole connection group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/data-sources/connection_group#parent_identifier DataGuacamoleConnectionGroup#parent_identifier}
  */
  readonly parentIdentifier?: string;
  /**
  * Identifier of guacamole connection group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/data-sources/connection_group#path DataGuacamoleConnectionGroup#path}
  */
  readonly path?: string;
}
export interface DataGuacamoleConnectionGroupAttributes {
}

export function dataGuacamoleConnectionGroupAttributesToTerraform(struct?: DataGuacamoleConnectionGroupAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGuacamoleConnectionGroupAttributesToHclTerraform(struct?: DataGuacamoleConnectionGroupAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGuacamoleConnectionGroupAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGuacamoleConnectionGroupAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGuacamoleConnectionGroupAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_session_affinity - computed: true, optional: false, required: false
  public get enableSessionAffinity() {
    return this.getBooleanAttribute('enable_session_affinity');
  }

  // max_connections - computed: true, optional: false, required: false
  public get maxConnections() {
    return this.getStringAttribute('max_connections');
  }

  // max_connections_per_user - computed: true, optional: false, required: false
  public get maxConnectionsPerUser() {
    return this.getStringAttribute('max_connections_per_user');
  }
}

export class DataGuacamoleConnectionGroupAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataGuacamoleConnectionGroupAttributesOutputReference {
    return new DataGuacamoleConnectionGroupAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGuacamoleConnectionGroupMemberConnectionGroups {
}

export function dataGuacamoleConnectionGroupMemberConnectionGroupsToTerraform(struct?: DataGuacamoleConnectionGroupMemberConnectionGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGuacamoleConnectionGroupMemberConnectionGroupsToHclTerraform(struct?: DataGuacamoleConnectionGroupMemberConnectionGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGuacamoleConnectionGroupMemberConnectionGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGuacamoleConnectionGroupMemberConnectionGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGuacamoleConnectionGroupMemberConnectionGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_connections - computed: true, optional: false, required: false
  public get activeConnections() {
    return this.getNumberAttribute('active_connections');
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_identifier - computed: true, optional: false, required: false
  public get parentIdentifier() {
    return this.getStringAttribute('parent_identifier');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataGuacamoleConnectionGroupMemberConnectionGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataGuacamoleConnectionGroupMemberConnectionGroupsOutputReference {
    return new DataGuacamoleConnectionGroupMemberConnectionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGuacamoleConnectionGroupMemberConnections {
}

export function dataGuacamoleConnectionGroupMemberConnectionsToTerraform(struct?: DataGuacamoleConnectionGroupMemberConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGuacamoleConnectionGroupMemberConnectionsToHclTerraform(struct?: DataGuacamoleConnectionGroupMemberConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGuacamoleConnectionGroupMemberConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGuacamoleConnectionGroupMemberConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGuacamoleConnectionGroupMemberConnections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_connections - computed: true, optional: false, required: false
  public get activeConnections() {
    return this.getNumberAttribute('active_connections');
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_identifier - computed: true, optional: false, required: false
  public get parentIdentifier() {
    return this.getStringAttribute('parent_identifier');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class DataGuacamoleConnectionGroupMemberConnectionsList extends cdktf.ComplexList {

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
  public get(index: number): DataGuacamoleConnectionGroupMemberConnectionsOutputReference {
    return new DataGuacamoleConnectionGroupMemberConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/data-sources/connection_group guacamole_connection_group}
*/
export class DataGuacamoleConnectionGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "guacamole_connection_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGuacamoleConnectionGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGuacamoleConnectionGroup to import
  * @param importFromId The id of the existing DataGuacamoleConnectionGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/data-sources/connection_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGuacamoleConnectionGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "guacamole_connection_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/data-sources/connection_group guacamole_connection_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGuacamoleConnectionGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGuacamoleConnectionGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'guacamole_connection_group',
      terraformGeneratorMetadata: {
        providerName: 'guacamole',
        providerVersion: '1.4.1'
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
    this._identifier = config.identifier;
    this._parentIdentifier = config.parentIdentifier;
    this._path = config.path;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_connections - computed: true, optional: false, required: false
  public get activeConnections() {
    return this.getNumberAttribute('active_connections');
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new DataGuacamoleConnectionGroupAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
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

  // identifier - computed: false, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // member_connection_groups - computed: true, optional: false, required: false
  private _memberConnectionGroups = new DataGuacamoleConnectionGroupMemberConnectionGroupsList(this, "member_connection_groups", false);
  public get memberConnectionGroups() {
    return this._memberConnectionGroups;
  }

  // member_connections - computed: true, optional: false, required: false
  private _memberConnections = new DataGuacamoleConnectionGroupMemberConnectionsList(this, "member_connections", false);
  public get memberConnections() {
    return this._memberConnections;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_identifier - computed: false, optional: true, required: false
  private _parentIdentifier?: string; 
  public get parentIdentifier() {
    return this.getStringAttribute('parent_identifier');
  }
  public set parentIdentifier(value: string) {
    this._parentIdentifier = value;
  }
  public resetParentIdentifier() {
    this._parentIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdentifierInput() {
    return this._parentIdentifier;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      parent_identifier: cdktf.stringToTerraform(this._parentIdentifier),
      path: cdktf.stringToTerraform(this._path),
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
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_identifier: {
        value: cdktf.stringToHclTerraform(this._parentIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
