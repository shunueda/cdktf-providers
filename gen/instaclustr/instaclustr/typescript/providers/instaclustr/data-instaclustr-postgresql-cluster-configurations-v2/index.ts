// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/postgresql_cluster_configurations_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrPostgresqlClusterConfigurationsV2Config extends cdktf.TerraformMetaArguments {
  /**
  * ID of the PostgreSQL cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/postgresql_cluster_configurations_v2#cluster_id DataInstaclustrPostgresqlClusterConfigurationsV2#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/postgresql_cluster_configurations_v2#id DataInstaclustrPostgresqlClusterConfigurationsV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/postgresql_cluster_configurations_v2#postgresql_cluster_id DataInstaclustrPostgresqlClusterConfigurationsV2#postgresql_cluster_id}
  */
  readonly postgresqlClusterId: string;
  /**
  * configuration_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/postgresql_cluster_configurations_v2#configuration_properties DataInstaclustrPostgresqlClusterConfigurationsV2#configuration_properties}
  */
  readonly configurationProperties?: DataInstaclustrPostgresqlClusterConfigurationsV2ConfigurationProperties[] | cdktf.IResolvable;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/postgresql_cluster_configurations_v2#filter DataInstaclustrPostgresqlClusterConfigurationsV2#filter}
  */
  readonly filter?: DataInstaclustrPostgresqlClusterConfigurationsV2Filter[] | cdktf.IResolvable;
}
export interface DataInstaclustrPostgresqlClusterConfigurationsV2ConfigurationProperties {
  /**
  * Id of the PostgreSQL cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/postgresql_cluster_configurations_v2#cluster_id DataInstaclustrPostgresqlClusterConfigurationsV2#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Instaclustr identifier for the PostgreSQL configuration property. The value of this property has the form: [cluster-id]|[configuration_name]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/postgresql_cluster_configurations_v2#id DataInstaclustrPostgresqlClusterConfigurationsV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the configuration property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/postgresql_cluster_configurations_v2#name DataInstaclustrPostgresqlClusterConfigurationsV2#name}
  */
  readonly name?: string;
  /**
  * Value of the configuration property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/postgresql_cluster_configurations_v2#value DataInstaclustrPostgresqlClusterConfigurationsV2#value}
  */
  readonly value?: string;
}

export function dataInstaclustrPostgresqlClusterConfigurationsV2ConfigurationPropertiesToTerraform(struct?: DataInstaclustrPostgresqlClusterConfigurationsV2ConfigurationProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataInstaclustrPostgresqlClusterConfigurationsV2ConfigurationPropertiesToHclTerraform(struct?: DataInstaclustrPostgresqlClusterConfigurationsV2ConfigurationProperties | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class DataInstaclustrPostgresqlClusterConfigurationsV2ConfigurationPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrPostgresqlClusterConfigurationsV2ConfigurationProperties | cdktf.IResolvable | undefined {
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrPostgresqlClusterConfigurationsV2ConfigurationProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterId = undefined;
      this._id = undefined;
      this._name = undefined;
      this._value = undefined;
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
      this._name = value.name;
      this._value = value.value;
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

  // name - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataInstaclustrPostgresqlClusterConfigurationsV2ConfigurationPropertiesList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrPostgresqlClusterConfigurationsV2ConfigurationProperties[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrPostgresqlClusterConfigurationsV2ConfigurationPropertiesOutputReference {
    return new DataInstaclustrPostgresqlClusterConfigurationsV2ConfigurationPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrPostgresqlClusterConfigurationsV2Filter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/postgresql_cluster_configurations_v2#name DataInstaclustrPostgresqlClusterConfigurationsV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/postgresql_cluster_configurations_v2#values DataInstaclustrPostgresqlClusterConfigurationsV2#values}
  */
  readonly values: string[];
}

export function dataInstaclustrPostgresqlClusterConfigurationsV2FilterToTerraform(struct?: DataInstaclustrPostgresqlClusterConfigurationsV2Filter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataInstaclustrPostgresqlClusterConfigurationsV2FilterToHclTerraform(struct?: DataInstaclustrPostgresqlClusterConfigurationsV2Filter | cdktf.IResolvable): any {
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

export class DataInstaclustrPostgresqlClusterConfigurationsV2FilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrPostgresqlClusterConfigurationsV2Filter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrPostgresqlClusterConfigurationsV2Filter | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrPostgresqlClusterConfigurationsV2FilterList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrPostgresqlClusterConfigurationsV2Filter[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrPostgresqlClusterConfigurationsV2FilterOutputReference {
    return new DataInstaclustrPostgresqlClusterConfigurationsV2FilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/postgresql_cluster_configurations_v2 instaclustr_postgresql_cluster_configurations_v2}
*/
export class DataInstaclustrPostgresqlClusterConfigurationsV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_postgresql_cluster_configurations_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrPostgresqlClusterConfigurationsV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrPostgresqlClusterConfigurationsV2 to import
  * @param importFromId The id of the existing DataInstaclustrPostgresqlClusterConfigurationsV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/postgresql_cluster_configurations_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrPostgresqlClusterConfigurationsV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_postgresql_cluster_configurations_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/postgresql_cluster_configurations_v2 instaclustr_postgresql_cluster_configurations_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrPostgresqlClusterConfigurationsV2Config
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrPostgresqlClusterConfigurationsV2Config) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_postgresql_cluster_configurations_v2',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.33',
        providerVersionConstraint: '2.1.33'
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
    this._postgresqlClusterId = config.postgresqlClusterId;
    this._configurationProperties.internalValue = config.configurationProperties;
    this._filter.internalValue = config.filter;
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

  // postgresql_cluster_id - computed: false, optional: false, required: true
  private _postgresqlClusterId?: string; 
  public get postgresqlClusterId() {
    return this.getStringAttribute('postgresql_cluster_id');
  }
  public set postgresqlClusterId(value: string) {
    this._postgresqlClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlClusterIdInput() {
    return this._postgresqlClusterId;
  }

  // configuration_properties - computed: false, optional: true, required: false
  private _configurationProperties = new DataInstaclustrPostgresqlClusterConfigurationsV2ConfigurationPropertiesList(this, "configuration_properties", false);
  public get configurationProperties() {
    return this._configurationProperties;
  }
  public putConfigurationProperties(value: DataInstaclustrPostgresqlClusterConfigurationsV2ConfigurationProperties[] | cdktf.IResolvable) {
    this._configurationProperties.internalValue = value;
  }
  public resetConfigurationProperties() {
    this._configurationProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationPropertiesInput() {
    return this._configurationProperties.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataInstaclustrPostgresqlClusterConfigurationsV2FilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataInstaclustrPostgresqlClusterConfigurationsV2Filter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      postgresql_cluster_id: cdktf.stringToTerraform(this._postgresqlClusterId),
      configuration_properties: cdktf.listMapper(dataInstaclustrPostgresqlClusterConfigurationsV2ConfigurationPropertiesToTerraform, true)(this._configurationProperties.internalValue),
      filter: cdktf.listMapper(dataInstaclustrPostgresqlClusterConfigurationsV2FilterToTerraform, true)(this._filter.internalValue),
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
      postgresql_cluster_id: {
        value: cdktf.stringToHclTerraform(this._postgresqlClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_properties: {
        value: cdktf.listMapperHcl(dataInstaclustrPostgresqlClusterConfigurationsV2ConfigurationPropertiesToHclTerraform, true)(this._configurationProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrPostgresqlClusterConfigurationsV2ConfigurationPropertiesList",
      },
      filter: {
        value: cdktf.listMapperHcl(dataInstaclustrPostgresqlClusterConfigurationsV2FilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInstaclustrPostgresqlClusterConfigurationsV2FilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
