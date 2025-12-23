// https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_directory
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectionDirectoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the connection for this directory provisioning configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_directory#connection_id ConnectionDirectory#connection_id}
  */
  readonly connectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_directory#id ConnectionDirectory#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether periodic automatic synchronization is enabled. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_directory#synchronize_automatically ConnectionDirectory#synchronize_automatically}
  */
  readonly synchronizeAutomatically?: boolean | cdktf.IResolvable;
  /**
  * mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_directory#mapping ConnectionDirectory#mapping}
  */
  readonly mapping?: ConnectionDirectoryMapping[] | cdktf.IResolvable;
}
export interface ConnectionDirectoryMapping {
  /**
  * The field location in the Auth0 schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_directory#auth0 ConnectionDirectory#auth0}
  */
  readonly auth0: string;
  /**
  * The field location in the IDP schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_directory#idp ConnectionDirectory#idp}
  */
  readonly idp: string;
}

export function connectionDirectoryMappingToTerraform(struct?: ConnectionDirectoryMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth0: cdktf.stringToTerraform(struct!.auth0),
    idp: cdktf.stringToTerraform(struct!.idp),
  }
}


export function connectionDirectoryMappingToHclTerraform(struct?: ConnectionDirectoryMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth0: {
      value: cdktf.stringToHclTerraform(struct!.auth0),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idp: {
      value: cdktf.stringToHclTerraform(struct!.idp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionDirectoryMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionDirectoryMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth0 !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth0 = this._auth0;
    }
    if (this._idp !== undefined) {
      hasAnyValues = true;
      internalValueResult.idp = this._idp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionDirectoryMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth0 = undefined;
      this._idp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth0 = value.auth0;
      this._idp = value.idp;
    }
  }

  // auth0 - computed: false, optional: false, required: true
  private _auth0?: string; 
  public get auth0() {
    return this.getStringAttribute('auth0');
  }
  public set auth0(value: string) {
    this._auth0 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get auth0Input() {
    return this._auth0;
  }

  // idp - computed: false, optional: false, required: true
  private _idp?: string; 
  public get idp() {
    return this.getStringAttribute('idp');
  }
  public set idp(value: string) {
    this._idp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpInput() {
    return this._idp;
  }
}

export class ConnectionDirectoryMappingList extends cdktf.ComplexList {
  public internalValue? : ConnectionDirectoryMapping[] | cdktf.IResolvable

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
  public get(index: number): ConnectionDirectoryMappingOutputReference {
    return new ConnectionDirectoryMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_directory auth0_connection_directory}
*/
export class ConnectionDirectory extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_connection_directory";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectionDirectory resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectionDirectory to import
  * @param importFromId The id of the existing ConnectionDirectory that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_directory#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectionDirectory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_connection_directory", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/connection_directory auth0_connection_directory} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectionDirectoryConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectionDirectoryConfig) {
    super(scope, id, {
      terraformResourceType: 'auth0_connection_directory',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.37.0',
        providerVersionConstraint: '1.37.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionId = config.connectionId;
    this._id = config.id;
    this._synchronizeAutomatically = config.synchronizeAutomatically;
    this._mapping.internalValue = config.mapping;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // connection_name - computed: true, optional: false, required: false
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // last_synchronization_at - computed: true, optional: false, required: false
  public get lastSynchronizationAt() {
    return this.getStringAttribute('last_synchronization_at');
  }

  // last_synchronization_error - computed: true, optional: false, required: false
  public get lastSynchronizationError() {
    return this.getStringAttribute('last_synchronization_error');
  }

  // last_synchronization_status - computed: true, optional: false, required: false
  public get lastSynchronizationStatus() {
    return this.getStringAttribute('last_synchronization_status');
  }

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }

  // synchronize_automatically - computed: true, optional: true, required: false
  private _synchronizeAutomatically?: boolean | cdktf.IResolvable; 
  public get synchronizeAutomatically() {
    return this.getBooleanAttribute('synchronize_automatically');
  }
  public set synchronizeAutomatically(value: boolean | cdktf.IResolvable) {
    this._synchronizeAutomatically = value;
  }
  public resetSynchronizeAutomatically() {
    this._synchronizeAutomatically = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synchronizeAutomaticallyInput() {
    return this._synchronizeAutomatically;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // mapping - computed: false, optional: true, required: false
  private _mapping = new ConnectionDirectoryMappingList(this, "mapping", true);
  public get mapping() {
    return this._mapping;
  }
  public putMapping(value: ConnectionDirectoryMapping[] | cdktf.IResolvable) {
    this._mapping.internalValue = value;
  }
  public resetMapping() {
    this._mapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_id: cdktf.stringToTerraform(this._connectionId),
      id: cdktf.stringToTerraform(this._id),
      synchronize_automatically: cdktf.booleanToTerraform(this._synchronizeAutomatically),
      mapping: cdktf.listMapper(connectionDirectoryMappingToTerraform, true)(this._mapping.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_id: {
        value: cdktf.stringToHclTerraform(this._connectionId),
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
      synchronize_automatically: {
        value: cdktf.booleanToHclTerraform(this._synchronizeAutomatically),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mapping: {
        value: cdktf.listMapperHcl(connectionDirectoryMappingToHclTerraform, true)(this._mapping.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectionDirectoryMappingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
