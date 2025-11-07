// https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/data-sources/remote_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerstoreRemoteSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * PowerStore filter expression to filter Remote Systems by. Conflicts with `id` and `name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/data-sources/remote_system#filter_expression DataPowerstoreRemoteSystem#filter_expression}
  */
  readonly filterExpression?: string;
  /**
  * Unique identifier of the Remote System to be fetched. Conflicts with `name` and `filter_expression`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/data-sources/remote_system#id DataPowerstoreRemoteSystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Remote System to be fetched. Conflicts with `id` and `filter_expression`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/data-sources/remote_system#name DataPowerstoreRemoteSystem#name}
  */
  readonly name?: string;
}
export interface DataPowerstoreRemoteSystemRemoteSystems {
}

export function dataPowerstoreRemoteSystemRemoteSystemsToTerraform(struct?: DataPowerstoreRemoteSystemRemoteSystems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerstoreRemoteSystemRemoteSystemsToHclTerraform(struct?: DataPowerstoreRemoteSystemRemoteSystems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerstoreRemoteSystemRemoteSystemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerstoreRemoteSystemRemoteSystems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerstoreRemoteSystemRemoteSystems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capabilities - computed: true, optional: false, required: false
  public get capabilities() {
    return this.getListAttribute('capabilities');
  }

  // data_connection_state - computed: true, optional: false, required: false
  public get dataConnectionState() {
    return this.getStringAttribute('data_connection_state');
  }

  // data_network_latency - computed: true, optional: false, required: false
  public get dataNetworkLatency() {
    return this.getStringAttribute('data_network_latency');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // management_address - computed: true, optional: false, required: false
  public get managementAddress() {
    return this.getStringAttribute('management_address');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataPowerstoreRemoteSystemRemoteSystemsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerstoreRemoteSystemRemoteSystemsOutputReference {
    return new DataPowerstoreRemoteSystemRemoteSystemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/data-sources/remote_system powerstore_remote_system}
*/
export class DataPowerstoreRemoteSystem extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerstore_remote_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerstoreRemoteSystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerstoreRemoteSystem to import
  * @param importFromId The id of the existing DataPowerstoreRemoteSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/data-sources/remote_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerstoreRemoteSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerstore_remote_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/data-sources/remote_system powerstore_remote_system} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerstoreRemoteSystemConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerstoreRemoteSystemConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerstore_remote_system',
      terraformGeneratorMetadata: {
        providerName: 'powerstore',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filterExpression = config.filterExpression;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter_expression - computed: false, optional: true, required: false
  private _filterExpression?: string; 
  public get filterExpression() {
    return this.getStringAttribute('filter_expression');
  }
  public set filterExpression(value: string) {
    this._filterExpression = value;
  }
  public resetFilterExpression() {
    this._filterExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterExpressionInput() {
    return this._filterExpression;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // remote_systems - computed: true, optional: false, required: false
  private _remoteSystems = new DataPowerstoreRemoteSystemRemoteSystemsList(this, "remote_systems", false);
  public get remoteSystems() {
    return this._remoteSystems;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_expression: cdktf.stringToTerraform(this._filterExpression),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter_expression: {
        value: cdktf.stringToHclTerraform(this._filterExpression),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
