// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/inter_server_authentication_info_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryInterServerAuthenticationInfoListConfig extends cdktf.TerraformMetaArguments {
  /**
  * SCIM filter used when searching the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/inter_server_authentication_info_list#filter DataPingdirectoryInterServerAuthenticationInfoList#filter}
  */
  readonly filter?: string;
  /**
  * Name of the parent Server Instance Listener
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/inter_server_authentication_info_list#server_instance_listener_name DataPingdirectoryInterServerAuthenticationInfoList#server_instance_listener_name}
  */
  readonly serverInstanceListenerName: string;
  /**
  * Name of the parent Server Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/inter_server_authentication_info_list#server_instance_name DataPingdirectoryInterServerAuthenticationInfoList#server_instance_name}
  */
  readonly serverInstanceName: string;
}
export interface DataPingdirectoryInterServerAuthenticationInfoListObjects {
}

export function dataPingdirectoryInterServerAuthenticationInfoListObjectsToTerraform(struct?: DataPingdirectoryInterServerAuthenticationInfoListObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingdirectoryInterServerAuthenticationInfoListObjectsToHclTerraform(struct?: DataPingdirectoryInterServerAuthenticationInfoListObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingdirectoryInterServerAuthenticationInfoListObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingdirectoryInterServerAuthenticationInfoListObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingdirectoryInterServerAuthenticationInfoListObjects | undefined) {
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataPingdirectoryInterServerAuthenticationInfoListObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataPingdirectoryInterServerAuthenticationInfoListObjectsOutputReference {
    return new DataPingdirectoryInterServerAuthenticationInfoListObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/inter_server_authentication_info_list pingdirectory_inter_server_authentication_info_list}
*/
export class DataPingdirectoryInterServerAuthenticationInfoList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_inter_server_authentication_info_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryInterServerAuthenticationInfoList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryInterServerAuthenticationInfoList to import
  * @param importFromId The id of the existing DataPingdirectoryInterServerAuthenticationInfoList that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/inter_server_authentication_info_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryInterServerAuthenticationInfoList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_inter_server_authentication_info_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/inter_server_authentication_info_list pingdirectory_inter_server_authentication_info_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryInterServerAuthenticationInfoListConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryInterServerAuthenticationInfoListConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_inter_server_authentication_info_list',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter = config.filter;
    this._serverInstanceListenerName = config.serverInstanceListenerName;
    this._serverInstanceName = config.serverInstanceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // objects - computed: true, optional: false, required: false
  private _objects = new DataPingdirectoryInterServerAuthenticationInfoListObjectsList(this, "objects", true);
  public get objects() {
    return this._objects;
  }

  // server_instance_listener_name - computed: false, optional: false, required: true
  private _serverInstanceListenerName?: string; 
  public get serverInstanceListenerName() {
    return this.getStringAttribute('server_instance_listener_name');
  }
  public set serverInstanceListenerName(value: string) {
    this._serverInstanceListenerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInstanceListenerNameInput() {
    return this._serverInstanceListenerName;
  }

  // server_instance_name - computed: false, optional: false, required: true
  private _serverInstanceName?: string; 
  public get serverInstanceName() {
    return this.getStringAttribute('server_instance_name');
  }
  public set serverInstanceName(value: string) {
    this._serverInstanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInstanceNameInput() {
    return this._serverInstanceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.stringToTerraform(this._filter),
      server_instance_listener_name: cdktf.stringToTerraform(this._serverInstanceListenerName),
      server_instance_name: cdktf.stringToTerraform(this._serverInstanceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_instance_listener_name: {
        value: cdktf.stringToHclTerraform(this._serverInstanceListenerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_instance_name: {
        value: cdktf.stringToHclTerraform(this._serverInstanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
