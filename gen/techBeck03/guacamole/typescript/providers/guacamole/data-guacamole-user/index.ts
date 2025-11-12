// https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/data-sources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGuacamoleUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection Group identifiers a user has permission to read
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/data-sources/user#connection_groups DataGuacamoleUser#connection_groups}
  */
  readonly connectionGroups?: string[];
  /**
  * Connections identifiers a user has permission to read
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/data-sources/user#connections DataGuacamoleUser#connections}
  */
  readonly connections?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/data-sources/user#id DataGuacamoleUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Username of guacamole user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/data-sources/user#username DataGuacamoleUser#username}
  */
  readonly username: string;
}
export interface DataGuacamoleUserAttributes {
}

export function dataGuacamoleUserAttributesToTerraform(struct?: DataGuacamoleUserAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGuacamoleUserAttributesToHclTerraform(struct?: DataGuacamoleUserAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGuacamoleUserAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGuacamoleUserAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGuacamoleUserAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_window_end - computed: true, optional: false, required: false
  public get accessWindowEnd() {
    return this.getStringAttribute('access_window_end');
  }

  // access_window_start - computed: true, optional: false, required: false
  public get accessWindowStart() {
    return this.getStringAttribute('access_window_start');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // expired - computed: true, optional: false, required: false
  public get expired() {
    return this.getBooleanAttribute('expired');
  }

  // full_name - computed: true, optional: false, required: false
  public get fullName() {
    return this.getStringAttribute('full_name');
  }

  // organizational_role - computed: true, optional: false, required: false
  public get organizationalRole() {
    return this.getStringAttribute('organizational_role');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // valid_from - computed: true, optional: false, required: false
  public get validFrom() {
    return this.getStringAttribute('valid_from');
  }

  // valid_until - computed: true, optional: false, required: false
  public get validUntil() {
    return this.getStringAttribute('valid_until');
  }
}

export class DataGuacamoleUserAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataGuacamoleUserAttributesOutputReference {
    return new DataGuacamoleUserAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/data-sources/user guacamole_user}
*/
export class DataGuacamoleUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "guacamole_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGuacamoleUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGuacamoleUser to import
  * @param importFromId The id of the existing DataGuacamoleUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/data-sources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGuacamoleUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "guacamole_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/data-sources/user guacamole_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGuacamoleUserConfig
  */
  public constructor(scope: Construct, id: string, config: DataGuacamoleUserConfig) {
    super(scope, id, {
      terraformResourceType: 'guacamole_user',
      terraformGeneratorMetadata: {
        providerName: 'guacamole',
        providerVersion: '1.4.1',
        providerVersionConstraint: '1.4.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionGroups = config.connectionGroups;
    this._connections = config.connections;
    this._id = config.id;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attributes - computed: true, optional: false, required: false
  private _attributes = new DataGuacamoleUserAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }

  // connection_groups - computed: false, optional: true, required: false
  private _connectionGroups?: string[]; 
  public get connectionGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('connection_groups'));
  }
  public set connectionGroups(value: string[]) {
    this._connectionGroups = value;
  }
  public resetConnectionGroups() {
    this._connectionGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionGroupsInput() {
    return this._connectionGroups;
  }

  // connections - computed: false, optional: true, required: false
  private _connections?: string[]; 
  public get connections() {
    return cdktf.Fn.tolist(this.getListAttribute('connections'));
  }
  public set connections(value: string[]) {
    this._connections = value;
  }
  public resetConnections() {
    this._connections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsInput() {
    return this._connections;
  }

  // group_membership - computed: true, optional: false, required: false
  public get groupMembership() {
    return cdktf.Fn.tolist(this.getListAttribute('group_membership'));
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

  // last_active - computed: true, optional: false, required: false
  public get lastActive() {
    return this.getStringAttribute('last_active');
  }

  // system_permissions - computed: true, optional: false, required: false
  public get systemPermissions() {
    return cdktf.Fn.tolist(this.getListAttribute('system_permissions'));
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._connectionGroups),
      connections: cdktf.listMapper(cdktf.stringToTerraform, false)(this._connections),
      id: cdktf.stringToTerraform(this._id),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._connectionGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      connections: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._connections),
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
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
