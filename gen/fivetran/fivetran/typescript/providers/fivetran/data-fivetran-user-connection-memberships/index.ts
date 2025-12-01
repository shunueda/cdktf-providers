// https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/data-sources/user_connection_memberships
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFivetranUserConnectionMembershipsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier for the user within your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/data-sources/user_connection_memberships#id DataFivetranUserConnectionMemberships#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/data-sources/user_connection_memberships#connections DataFivetranUserConnectionMemberships#connections}
  */
  readonly connections?: DataFivetranUserConnectionMembershipsConnections[] | cdktf.IResolvable;
}
export interface DataFivetranUserConnectionMembershipsConnections {
}

export function dataFivetranUserConnectionMembershipsConnectionsToTerraform(struct?: DataFivetranUserConnectionMembershipsConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranUserConnectionMembershipsConnectionsToHclTerraform(struct?: DataFivetranUserConnectionMembershipsConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranUserConnectionMembershipsConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFivetranUserConnectionMembershipsConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranUserConnectionMembershipsConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // connection_id - computed: true, optional: false, required: false
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }
}

export class DataFivetranUserConnectionMembershipsConnectionsList extends cdktf.ComplexList {
  public internalValue? : DataFivetranUserConnectionMembershipsConnections[] | cdktf.IResolvable

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
  public get(index: number): DataFivetranUserConnectionMembershipsConnectionsOutputReference {
    return new DataFivetranUserConnectionMembershipsConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/data-sources/user_connection_memberships fivetran_user_connection_memberships}
*/
export class DataFivetranUserConnectionMemberships extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fivetran_user_connection_memberships";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFivetranUserConnectionMemberships resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFivetranUserConnectionMemberships to import
  * @param importFromId The id of the existing DataFivetranUserConnectionMemberships that should be imported. Refer to the {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/data-sources/user_connection_memberships#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFivetranUserConnectionMemberships to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fivetran_user_connection_memberships", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/data-sources/user_connection_memberships fivetran_user_connection_memberships} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFivetranUserConnectionMembershipsConfig
  */
  public constructor(scope: Construct, id: string, config: DataFivetranUserConnectionMembershipsConfig) {
    super(scope, id, {
      terraformResourceType: 'fivetran_user_connection_memberships',
      terraformGeneratorMetadata: {
        providerName: 'fivetran',
        providerVersion: '1.9.16',
        providerVersionConstraint: '1.9.16'
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
    this._connections.internalValue = config.connections;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // connections - computed: false, optional: true, required: false
  private _connections = new DataFivetranUserConnectionMembershipsConnectionsList(this, "connections", true);
  public get connections() {
    return this._connections;
  }
  public putConnections(value: DataFivetranUserConnectionMembershipsConnections[] | cdktf.IResolvable) {
    this._connections.internalValue = value;
  }
  public resetConnections() {
    this._connections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsInput() {
    return this._connections.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      connections: cdktf.listMapper(dataFivetranUserConnectionMembershipsConnectionsToTerraform, true)(this._connections.internalValue),
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
      connections: {
        value: cdktf.listMapperHcl(dataFivetranUserConnectionMembershipsConnectionsToHclTerraform, true)(this._connections.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataFivetranUserConnectionMembershipsConnectionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
