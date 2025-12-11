// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/karapace_schema_registry_cluster_users_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrKarapaceSchemaRegistryClusterUsersV2Config extends cdktf.TerraformMetaArguments {
  /**
  * ID of the kafka cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/karapace_schema_registry_cluster_users_v2#cluster_id DataInstaclustrKarapaceSchemaRegistryClusterUsersV2#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/karapace_schema_registry_cluster_users_v2#id DataInstaclustrKarapaceSchemaRegistryClusterUsersV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/karapace_schema_registry_cluster_users_v2#karapace_schema_registry_cluster_id DataInstaclustrKarapaceSchemaRegistryClusterUsersV2#karapace_schema_registry_cluster_id}
  */
  readonly karapaceSchemaRegistryClusterId: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/karapace_schema_registry_cluster_users_v2#filter DataInstaclustrKarapaceSchemaRegistryClusterUsersV2#filter}
  */
  readonly filter?: DataInstaclustrKarapaceSchemaRegistryClusterUsersV2Filter[] | cdktf.IResolvable;
  /**
  * karapace_schema_registry_users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/karapace_schema_registry_cluster_users_v2#karapace_schema_registry_users DataInstaclustrKarapaceSchemaRegistryClusterUsersV2#karapace_schema_registry_users}
  */
  readonly karapaceSchemaRegistryUsers?: DataInstaclustrKarapaceSchemaRegistryClusterUsersV2KarapaceSchemaRegistryUsers[] | cdktf.IResolvable;
}
export interface DataInstaclustrKarapaceSchemaRegistryClusterUsersV2Filter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/karapace_schema_registry_cluster_users_v2#name DataInstaclustrKarapaceSchemaRegistryClusterUsersV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/karapace_schema_registry_cluster_users_v2#values DataInstaclustrKarapaceSchemaRegistryClusterUsersV2#values}
  */
  readonly values: string[];
}

export function dataInstaclustrKarapaceSchemaRegistryClusterUsersV2FilterToTerraform(struct?: DataInstaclustrKarapaceSchemaRegistryClusterUsersV2Filter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataInstaclustrKarapaceSchemaRegistryClusterUsersV2FilterToHclTerraform(struct?: DataInstaclustrKarapaceSchemaRegistryClusterUsersV2Filter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKarapaceSchemaRegistryClusterUsersV2FilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrKarapaceSchemaRegistryClusterUsersV2Filter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKarapaceSchemaRegistryClusterUsersV2Filter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataInstaclustrKarapaceSchemaRegistryClusterUsersV2FilterList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKarapaceSchemaRegistryClusterUsersV2Filter[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKarapaceSchemaRegistryClusterUsersV2FilterOutputReference {
    return new DataInstaclustrKarapaceSchemaRegistryClusterUsersV2FilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKarapaceSchemaRegistryClusterUsersV2KarapaceSchemaRegistryUsers {
  /**
  * ID of the Kafka cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/karapace_schema_registry_cluster_users_v2#cluster_id DataInstaclustrKarapaceSchemaRegistryClusterUsersV2#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Instaclustr identifier for the Karapace Schema Registry user. The value of this property has the form: [cluster-id]_[karapace-schema-registry-username]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/karapace_schema_registry_cluster_users_v2#id DataInstaclustrKarapaceSchemaRegistryClusterUsersV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Username of the Karapace Schema Registry user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/karapace_schema_registry_cluster_users_v2#username DataInstaclustrKarapaceSchemaRegistryClusterUsersV2#username}
  */
  readonly username?: string;
}

export function dataInstaclustrKarapaceSchemaRegistryClusterUsersV2KarapaceSchemaRegistryUsersToTerraform(struct?: DataInstaclustrKarapaceSchemaRegistryClusterUsersV2KarapaceSchemaRegistryUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    id: cdktf.stringToTerraform(struct!.id),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataInstaclustrKarapaceSchemaRegistryClusterUsersV2KarapaceSchemaRegistryUsersToHclTerraform(struct?: DataInstaclustrKarapaceSchemaRegistryClusterUsersV2KarapaceSchemaRegistryUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKarapaceSchemaRegistryClusterUsersV2KarapaceSchemaRegistryUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrKarapaceSchemaRegistryClusterUsersV2KarapaceSchemaRegistryUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKarapaceSchemaRegistryClusterUsersV2KarapaceSchemaRegistryUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterId = undefined;
      this._id = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterId = value.clusterId;
      this._id = value.id;
      this._username = value.username;
    }
  }

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class DataInstaclustrKarapaceSchemaRegistryClusterUsersV2KarapaceSchemaRegistryUsersList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKarapaceSchemaRegistryClusterUsersV2KarapaceSchemaRegistryUsers[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKarapaceSchemaRegistryClusterUsersV2KarapaceSchemaRegistryUsersOutputReference {
    return new DataInstaclustrKarapaceSchemaRegistryClusterUsersV2KarapaceSchemaRegistryUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/karapace_schema_registry_cluster_users_v2 instaclustr_karapace_schema_registry_cluster_users_v2}
*/
export class DataInstaclustrKarapaceSchemaRegistryClusterUsersV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_karapace_schema_registry_cluster_users_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrKarapaceSchemaRegistryClusterUsersV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrKarapaceSchemaRegistryClusterUsersV2 to import
  * @param importFromId The id of the existing DataInstaclustrKarapaceSchemaRegistryClusterUsersV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/karapace_schema_registry_cluster_users_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrKarapaceSchemaRegistryClusterUsersV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_karapace_schema_registry_cluster_users_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/karapace_schema_registry_cluster_users_v2 instaclustr_karapace_schema_registry_cluster_users_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrKarapaceSchemaRegistryClusterUsersV2Config
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrKarapaceSchemaRegistryClusterUsersV2Config) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_karapace_schema_registry_cluster_users_v2',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.35',
        providerVersionConstraint: '2.1.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._karapaceSchemaRegistryClusterId = config.karapaceSchemaRegistryClusterId;
    this._filter.internalValue = config.filter;
    this._karapaceSchemaRegistryUsers.internalValue = config.karapaceSchemaRegistryUsers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // karapace_schema_registry_cluster_id - computed: false, optional: false, required: true
  private _karapaceSchemaRegistryClusterId?: string; 
  public get karapaceSchemaRegistryClusterId() {
    return this.getStringAttribute('karapace_schema_registry_cluster_id');
  }
  public set karapaceSchemaRegistryClusterId(value: string) {
    this._karapaceSchemaRegistryClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get karapaceSchemaRegistryClusterIdInput() {
    return this._karapaceSchemaRegistryClusterId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataInstaclustrKarapaceSchemaRegistryClusterUsersV2FilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataInstaclustrKarapaceSchemaRegistryClusterUsersV2Filter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // karapace_schema_registry_users - computed: false, optional: true, required: false
  private _karapaceSchemaRegistryUsers = new DataInstaclustrKarapaceSchemaRegistryClusterUsersV2KarapaceSchemaRegistryUsersList(this, "karapace_schema_registry_users", false);
  public get karapaceSchemaRegistryUsers() {
    return this._karapaceSchemaRegistryUsers;
  }
  public putKarapaceSchemaRegistryUsers(value: DataInstaclustrKarapaceSchemaRegistryClusterUsersV2KarapaceSchemaRegistryUsers[] | cdktf.IResolvable) {
    this._karapaceSchemaRegistryUsers.internalValue = value;
  }
  public resetKarapaceSchemaRegistryUsers() {
    this._karapaceSchemaRegistryUsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get karapaceSchemaRegistryUsersInput() {
    return this._karapaceSchemaRegistryUsers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      karapace_schema_registry_cluster_id: cdktf.stringToTerraform(this._karapaceSchemaRegistryClusterId),
      filter: cdktf.listMapper(dataInstaclustrKarapaceSchemaRegistryClusterUsersV2FilterToTerraform, true)(this._filter.internalValue),
      karapace_schema_registry_users: cdktf.listMapper(dataInstaclustrKarapaceSchemaRegistryClusterUsersV2KarapaceSchemaRegistryUsersToTerraform, true)(this._karapaceSchemaRegistryUsers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
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
      karapace_schema_registry_cluster_id: {
        value: cdktf.stringToHclTerraform(this._karapaceSchemaRegistryClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataInstaclustrKarapaceSchemaRegistryClusterUsersV2FilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInstaclustrKarapaceSchemaRegistryClusterUsersV2FilterList",
      },
      karapace_schema_registry_users: {
        value: cdktf.listMapperHcl(dataInstaclustrKarapaceSchemaRegistryClusterUsersV2KarapaceSchemaRegistryUsersToHclTerraform, true)(this._karapaceSchemaRegistryUsers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrKarapaceSchemaRegistryClusterUsersV2KarapaceSchemaRegistryUsersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
