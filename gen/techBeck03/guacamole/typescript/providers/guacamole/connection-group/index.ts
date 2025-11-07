// https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectionGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_group#id ConnectionGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of guacamole connection group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_group#name ConnectionGroup#name}
  */
  readonly name: string;
  /**
  * Parent Identifier of guacamole connection group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_group#parent_identifier ConnectionGroup#parent_identifier}
  */
  readonly parentIdentifier: string;
  /**
  * Type of guacamole connection group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_group#type ConnectionGroup#type}
  */
  readonly type?: string;
  /**
  * attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_group#attributes ConnectionGroup#attributes}
  */
  readonly attributes?: ConnectionGroupAttributes[] | cdktf.IResolvable;
}
export interface ConnectionGroupAttributes {
  /**
  * Enable session affinity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_group#enable_session_affinity ConnectionGroup#enable_session_affinity}
  */
  readonly enableSessionAffinity?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of total simultaneous connections allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_group#max_connections ConnectionGroup#max_connections}
  */
  readonly maxConnections?: string;
  /**
  * Maximum number of simultaneous connections allowed per user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_group#max_connections_per_user ConnectionGroup#max_connections_per_user}
  */
  readonly maxConnectionsPerUser?: string;
}

export function connectionGroupAttributesToTerraform(struct?: ConnectionGroupAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_session_affinity: cdktf.booleanToTerraform(struct!.enableSessionAffinity),
    max_connections: cdktf.stringToTerraform(struct!.maxConnections),
    max_connections_per_user: cdktf.stringToTerraform(struct!.maxConnectionsPerUser),
  }
}


export function connectionGroupAttributesToHclTerraform(struct?: ConnectionGroupAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_session_affinity: {
      value: cdktf.booleanToHclTerraform(struct!.enableSessionAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_connections: {
      value: cdktf.stringToHclTerraform(struct!.maxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_connections_per_user: {
      value: cdktf.stringToHclTerraform(struct!.maxConnectionsPerUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionGroupAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionGroupAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableSessionAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSessionAffinity = this._enableSessionAffinity;
    }
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    if (this._maxConnectionsPerUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionsPerUser = this._maxConnectionsPerUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionGroupAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableSessionAffinity = undefined;
      this._maxConnections = undefined;
      this._maxConnectionsPerUser = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableSessionAffinity = value.enableSessionAffinity;
      this._maxConnections = value.maxConnections;
      this._maxConnectionsPerUser = value.maxConnectionsPerUser;
    }
  }

  // enable_session_affinity - computed: true, optional: true, required: false
  private _enableSessionAffinity?: boolean | cdktf.IResolvable; 
  public get enableSessionAffinity() {
    return this.getBooleanAttribute('enable_session_affinity');
  }
  public set enableSessionAffinity(value: boolean | cdktf.IResolvable) {
    this._enableSessionAffinity = value;
  }
  public resetEnableSessionAffinity() {
    this._enableSessionAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSessionAffinityInput() {
    return this._enableSessionAffinity;
  }

  // max_connections - computed: true, optional: true, required: false
  private _maxConnections?: string; 
  public get maxConnections() {
    return this.getStringAttribute('max_connections');
  }
  public set maxConnections(value: string) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // max_connections_per_user - computed: true, optional: true, required: false
  private _maxConnectionsPerUser?: string; 
  public get maxConnectionsPerUser() {
    return this.getStringAttribute('max_connections_per_user');
  }
  public set maxConnectionsPerUser(value: string) {
    this._maxConnectionsPerUser = value;
  }
  public resetMaxConnectionsPerUser() {
    this._maxConnectionsPerUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsPerUserInput() {
    return this._maxConnectionsPerUser;
  }
}

export class ConnectionGroupAttributesList extends cdktf.ComplexList {
  public internalValue? : ConnectionGroupAttributes[] | cdktf.IResolvable

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
  public get(index: number): ConnectionGroupAttributesOutputReference {
    return new ConnectionGroupAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_group guacamole_connection_group}
*/
export class ConnectionGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "guacamole_connection_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectionGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectionGroup to import
  * @param importFromId The id of the existing ConnectionGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectionGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "guacamole_connection_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/connection_group guacamole_connection_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectionGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectionGroupConfig) {
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
    this._name = config.name;
    this._parentIdentifier = config.parentIdentifier;
    this._type = config.type;
    this._attributes.internalValue = config.attributes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_connections - computed: true, optional: false, required: false
  public get activeConnections() {
    return this.getNumberAttribute('active_connections');
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

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
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

  // parent_identifier - computed: false, optional: false, required: true
  private _parentIdentifier?: string; 
  public get parentIdentifier() {
    return this.getStringAttribute('parent_identifier');
  }
  public set parentIdentifier(value: string) {
    this._parentIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdentifierInput() {
    return this._parentIdentifier;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes = new ConnectionGroupAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: ConnectionGroupAttributes[] | cdktf.IResolvable) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      parent_identifier: cdktf.stringToTerraform(this._parentIdentifier),
      type: cdktf.stringToTerraform(this._type),
      attributes: cdktf.listMapper(connectionGroupAttributesToTerraform, true)(this._attributes.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attributes: {
        value: cdktf.listMapperHcl(connectionGroupAttributesToHclTerraform, true)(this._attributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionGroupAttributesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
