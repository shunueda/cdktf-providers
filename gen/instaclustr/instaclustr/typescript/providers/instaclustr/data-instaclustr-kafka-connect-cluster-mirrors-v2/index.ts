// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/kafka_connect_cluster_mirrors_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrKafkaConnectClusterMirrorsV2Config extends cdktf.TerraformMetaArguments {
  /**
  * ID of the kafka Connect cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/kafka_connect_cluster_mirrors_v2#cluster_id DataInstaclustrKafkaConnectClusterMirrorsV2#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/kafka_connect_cluster_mirrors_v2#id DataInstaclustrKafkaConnectClusterMirrorsV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/kafka_connect_cluster_mirrors_v2#kafka_connect_cluster_id DataInstaclustrKafkaConnectClusterMirrorsV2#kafka_connect_cluster_id}
  */
  readonly kafkaConnectClusterId: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/kafka_connect_cluster_mirrors_v2#filter DataInstaclustrKafkaConnectClusterMirrorsV2#filter}
  */
  readonly filter?: DataInstaclustrKafkaConnectClusterMirrorsV2Filter[] | cdktf.IResolvable;
  /**
  * mirrors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/kafka_connect_cluster_mirrors_v2#mirrors DataInstaclustrKafkaConnectClusterMirrorsV2#mirrors}
  */
  readonly mirrors?: DataInstaclustrKafkaConnectClusterMirrorsV2Mirrors[] | cdktf.IResolvable;
}
export interface DataInstaclustrKafkaConnectClusterMirrorsV2Filter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/kafka_connect_cluster_mirrors_v2#name DataInstaclustrKafkaConnectClusterMirrorsV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/kafka_connect_cluster_mirrors_v2#values DataInstaclustrKafkaConnectClusterMirrorsV2#values}
  */
  readonly values: string[];
}

export function dataInstaclustrKafkaConnectClusterMirrorsV2FilterToTerraform(struct?: DataInstaclustrKafkaConnectClusterMirrorsV2Filter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataInstaclustrKafkaConnectClusterMirrorsV2FilterToHclTerraform(struct?: DataInstaclustrKafkaConnectClusterMirrorsV2Filter | cdktf.IResolvable): any {
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

export class DataInstaclustrKafkaConnectClusterMirrorsV2FilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrKafkaConnectClusterMirrorsV2Filter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrKafkaConnectClusterMirrorsV2Filter | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrKafkaConnectClusterMirrorsV2FilterList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaConnectClusterMirrorsV2Filter[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaConnectClusterMirrorsV2FilterOutputReference {
    return new DataInstaclustrKafkaConnectClusterMirrorsV2FilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterExternalCluster {
  /**
  * Kafka connection properties string used to connect to external kafka cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/kafka_connect_cluster_mirrors_v2#source_connection_properties DataInstaclustrKafkaConnectClusterMirrorsV2#source_connection_properties}
  */
  readonly sourceConnectionProperties?: string;
}

export function dataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterExternalClusterToTerraform(struct?: DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterExternalCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_connection_properties: cdktf.stringToTerraform(struct!.sourceConnectionProperties),
  }
}


export function dataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterExternalClusterToHclTerraform(struct?: DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterExternalCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_connection_properties: {
      value: cdktf.stringToHclTerraform(struct!.sourceConnectionProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterExternalClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterExternalCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceConnectionProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceConnectionProperties = this._sourceConnectionProperties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterExternalCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceConnectionProperties = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceConnectionProperties = value.sourceConnectionProperties;
    }
  }

  // source_connection_properties - computed: true, optional: true, required: false
  private _sourceConnectionProperties?: string; 
  public get sourceConnectionProperties() {
    return this.getStringAttribute('source_connection_properties');
  }
  public set sourceConnectionProperties(value: string) {
    this._sourceConnectionProperties = value;
  }
  public resetSourceConnectionProperties() {
    this._sourceConnectionProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConnectionPropertiesInput() {
    return this._sourceConnectionProperties;
  }
}

export class DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterExternalClusterList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterExternalCluster[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterExternalClusterOutputReference {
    return new DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterExternalClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterManagedCluster {
  /**
  * Source kafka cluster id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/kafka_connect_cluster_mirrors_v2#source_kafka_cluster_id DataInstaclustrKafkaConnectClusterMirrorsV2#source_kafka_cluster_id}
  */
  readonly sourceKafkaClusterId?: string;
  /**
  * Whether or not to connect to source cluster's private IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/kafka_connect_cluster_mirrors_v2#use_private_ips DataInstaclustrKafkaConnectClusterMirrorsV2#use_private_ips}
  */
  readonly usePrivateIps?: boolean | cdktf.IResolvable;
}

export function dataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterManagedClusterToTerraform(struct?: DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterManagedCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_kafka_cluster_id: cdktf.stringToTerraform(struct!.sourceKafkaClusterId),
    use_private_ips: cdktf.booleanToTerraform(struct!.usePrivateIps),
  }
}


export function dataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterManagedClusterToHclTerraform(struct?: DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterManagedCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_kafka_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceKafkaClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_private_ips: {
      value: cdktf.booleanToHclTerraform(struct!.usePrivateIps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterManagedClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterManagedCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceKafkaClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceKafkaClusterId = this._sourceKafkaClusterId;
    }
    if (this._usePrivateIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePrivateIps = this._usePrivateIps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterManagedCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceKafkaClusterId = undefined;
      this._usePrivateIps = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceKafkaClusterId = value.sourceKafkaClusterId;
      this._usePrivateIps = value.usePrivateIps;
    }
  }

  // source_kafka_cluster_id - computed: true, optional: true, required: false
  private _sourceKafkaClusterId?: string; 
  public get sourceKafkaClusterId() {
    return this.getStringAttribute('source_kafka_cluster_id');
  }
  public set sourceKafkaClusterId(value: string) {
    this._sourceKafkaClusterId = value;
  }
  public resetSourceKafkaClusterId() {
    this._sourceKafkaClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceKafkaClusterIdInput() {
    return this._sourceKafkaClusterId;
  }

  // use_private_ips - computed: true, optional: true, required: false
  private _usePrivateIps?: boolean | cdktf.IResolvable; 
  public get usePrivateIps() {
    return this.getBooleanAttribute('use_private_ips');
  }
  public set usePrivateIps(value: boolean | cdktf.IResolvable) {
    this._usePrivateIps = value;
  }
  public resetUsePrivateIps() {
    this._usePrivateIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePrivateIpsInput() {
    return this._usePrivateIps;
  }
}

export class DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterManagedClusterList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterManagedCluster[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterManagedClusterOutputReference {
    return new DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterManagedClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceCluster {
  /**
  * Alias to use for the source kafka cluster. This will be used to rename topics if renameMirroredTopics is turned on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/kafka_connect_cluster_mirrors_v2#alias DataInstaclustrKafkaConnectClusterMirrorsV2#alias}
  */
  readonly alias?: string;
  /**
  * external_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/kafka_connect_cluster_mirrors_v2#external_cluster DataInstaclustrKafkaConnectClusterMirrorsV2#external_cluster}
  */
  readonly externalCluster?: DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterExternalCluster[] | cdktf.IResolvable;
  /**
  * managed_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/kafka_connect_cluster_mirrors_v2#managed_cluster DataInstaclustrKafkaConnectClusterMirrorsV2#managed_cluster}
  */
  readonly managedCluster?: DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterManagedCluster[] | cdktf.IResolvable;
}

export function dataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterToTerraform(struct?: DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    external_cluster: cdktf.listMapper(dataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterExternalClusterToTerraform, true)(struct!.externalCluster),
    managed_cluster: cdktf.listMapper(dataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterManagedClusterToTerraform, true)(struct!.managedCluster),
  }
}


export function dataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterToHclTerraform(struct?: DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_cluster: {
      value: cdktf.listMapperHcl(dataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterExternalClusterToHclTerraform, true)(struct!.externalCluster),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterExternalClusterList",
    },
    managed_cluster: {
      value: cdktf.listMapperHcl(dataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterManagedClusterToHclTerraform, true)(struct!.managedCluster),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterManagedClusterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._externalCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalCluster = this._externalCluster?.internalValue;
    }
    if (this._managedCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedCluster = this._managedCluster?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._externalCluster.internalValue = undefined;
      this._managedCluster.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._externalCluster.internalValue = value.externalCluster;
      this._managedCluster.internalValue = value.managedCluster;
    }
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // external_cluster - computed: false, optional: true, required: false
  private _externalCluster = new DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterExternalClusterList(this, "external_cluster", false);
  public get externalCluster() {
    return this._externalCluster;
  }
  public putExternalCluster(value: DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterExternalCluster[] | cdktf.IResolvable) {
    this._externalCluster.internalValue = value;
  }
  public resetExternalCluster() {
    this._externalCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalClusterInput() {
    return this._externalCluster.internalValue;
  }

  // managed_cluster - computed: false, optional: true, required: false
  private _managedCluster = new DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterManagedClusterList(this, "managed_cluster", false);
  public get managedCluster() {
    return this._managedCluster;
  }
  public putManagedCluster(value: DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterManagedCluster[] | cdktf.IResolvable) {
    this._managedCluster.internalValue = value;
  }
  public resetManagedCluster() {
    this._managedCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedClusterInput() {
    return this._managedCluster.internalValue;
  }
}

export class DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceCluster[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterOutputReference {
    return new DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaConnectClusterMirrorsV2Mirrors {
  /**
  * Name of the mirror connector. The value of this property has the form: [source-cluster].[target-cluster].[random-string]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/kafka_connect_cluster_mirrors_v2#connector_name DataInstaclustrKafkaConnectClusterMirrorsV2#connector_name}
  */
  readonly connectorName?: string;
  /**
  * ID of the mirror
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/kafka_connect_cluster_mirrors_v2#id DataInstaclustrKafkaConnectClusterMirrorsV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the kafka connect cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/kafka_connect_cluster_mirrors_v2#kafka_connect_cluster_id DataInstaclustrKafkaConnectClusterMirrorsV2#kafka_connect_cluster_id}
  */
  readonly kafkaConnectClusterId?: string;
  /**
  * Maximum number of tasks for Kafka Connect to use. Should be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/kafka_connect_cluster_mirrors_v2#max_tasks DataInstaclustrKafkaConnectClusterMirrorsV2#max_tasks}
  */
  readonly maxTasks?: number;
  /**
  * Whether to rename topics as they are mirrored, by prefixing the sourceCluster.alias to the topic name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/kafka_connect_cluster_mirrors_v2#rename_mirrored_topics DataInstaclustrKafkaConnectClusterMirrorsV2#rename_mirrored_topics}
  */
  readonly renameMirroredTopics?: boolean | cdktf.IResolvable;
  /**
  * The latency in milliseconds above which this mirror will be considered out of sync. It can not be less than 1000ms. The suggested initial latency is 30000ms  for connectors to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/kafka_connect_cluster_mirrors_v2#target_latency DataInstaclustrKafkaConnectClusterMirrorsV2#target_latency}
  */
  readonly targetLatency?: number;
  /**
  * Regex to select which topics to mirror.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/kafka_connect_cluster_mirrors_v2#topics_regex DataInstaclustrKafkaConnectClusterMirrorsV2#topics_regex}
  */
  readonly topicsRegex?: string;
  /**
  * source_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/kafka_connect_cluster_mirrors_v2#source_cluster DataInstaclustrKafkaConnectClusterMirrorsV2#source_cluster}
  */
  readonly sourceCluster?: DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceCluster[] | cdktf.IResolvable;
}

export function dataInstaclustrKafkaConnectClusterMirrorsV2MirrorsToTerraform(struct?: DataInstaclustrKafkaConnectClusterMirrorsV2Mirrors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connector_name: cdktf.stringToTerraform(struct!.connectorName),
    id: cdktf.stringToTerraform(struct!.id),
    kafka_connect_cluster_id: cdktf.stringToTerraform(struct!.kafkaConnectClusterId),
    max_tasks: cdktf.numberToTerraform(struct!.maxTasks),
    rename_mirrored_topics: cdktf.booleanToTerraform(struct!.renameMirroredTopics),
    target_latency: cdktf.numberToTerraform(struct!.targetLatency),
    topics_regex: cdktf.stringToTerraform(struct!.topicsRegex),
    source_cluster: cdktf.listMapper(dataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterToTerraform, true)(struct!.sourceCluster),
  }
}


export function dataInstaclustrKafkaConnectClusterMirrorsV2MirrorsToHclTerraform(struct?: DataInstaclustrKafkaConnectClusterMirrorsV2Mirrors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connector_name: {
      value: cdktf.stringToHclTerraform(struct!.connectorName),
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
    kafka_connect_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.kafkaConnectClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_tasks: {
      value: cdktf.numberToHclTerraform(struct!.maxTasks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rename_mirrored_topics: {
      value: cdktf.booleanToHclTerraform(struct!.renameMirroredTopics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_latency: {
      value: cdktf.numberToHclTerraform(struct!.targetLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    topics_regex: {
      value: cdktf.stringToHclTerraform(struct!.topicsRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_cluster: {
      value: cdktf.listMapperHcl(dataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterToHclTerraform, true)(struct!.sourceCluster),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrKafkaConnectClusterMirrorsV2Mirrors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorName = this._connectorName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._kafkaConnectClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaConnectClusterId = this._kafkaConnectClusterId;
    }
    if (this._maxTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTasks = this._maxTasks;
    }
    if (this._renameMirroredTopics !== undefined) {
      hasAnyValues = true;
      internalValueResult.renameMirroredTopics = this._renameMirroredTopics;
    }
    if (this._targetLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetLatency = this._targetLatency;
    }
    if (this._topicsRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicsRegex = this._topicsRegex;
    }
    if (this._sourceCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCluster = this._sourceCluster?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaConnectClusterMirrorsV2Mirrors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectorName = undefined;
      this._id = undefined;
      this._kafkaConnectClusterId = undefined;
      this._maxTasks = undefined;
      this._renameMirroredTopics = undefined;
      this._targetLatency = undefined;
      this._topicsRegex = undefined;
      this._sourceCluster.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectorName = value.connectorName;
      this._id = value.id;
      this._kafkaConnectClusterId = value.kafkaConnectClusterId;
      this._maxTasks = value.maxTasks;
      this._renameMirroredTopics = value.renameMirroredTopics;
      this._targetLatency = value.targetLatency;
      this._topicsRegex = value.topicsRegex;
      this._sourceCluster.internalValue = value.sourceCluster;
    }
  }

  // connector_name - computed: true, optional: true, required: false
  private _connectorName?: string; 
  public get connectorName() {
    return this.getStringAttribute('connector_name');
  }
  public set connectorName(value: string) {
    this._connectorName = value;
  }
  public resetConnectorName() {
    this._connectorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorNameInput() {
    return this._connectorName;
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

  // kafka_connect_cluster_id - computed: true, optional: true, required: false
  private _kafkaConnectClusterId?: string; 
  public get kafkaConnectClusterId() {
    return this.getStringAttribute('kafka_connect_cluster_id');
  }
  public set kafkaConnectClusterId(value: string) {
    this._kafkaConnectClusterId = value;
  }
  public resetKafkaConnectClusterId() {
    this._kafkaConnectClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConnectClusterIdInput() {
    return this._kafkaConnectClusterId;
  }

  // max_tasks - computed: true, optional: true, required: false
  private _maxTasks?: number; 
  public get maxTasks() {
    return this.getNumberAttribute('max_tasks');
  }
  public set maxTasks(value: number) {
    this._maxTasks = value;
  }
  public resetMaxTasks() {
    this._maxTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTasksInput() {
    return this._maxTasks;
  }

  // rename_mirrored_topics - computed: true, optional: true, required: false
  private _renameMirroredTopics?: boolean | cdktf.IResolvable; 
  public get renameMirroredTopics() {
    return this.getBooleanAttribute('rename_mirrored_topics');
  }
  public set renameMirroredTopics(value: boolean | cdktf.IResolvable) {
    this._renameMirroredTopics = value;
  }
  public resetRenameMirroredTopics() {
    this._renameMirroredTopics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renameMirroredTopicsInput() {
    return this._renameMirroredTopics;
  }

  // target_latency - computed: true, optional: true, required: false
  private _targetLatency?: number; 
  public get targetLatency() {
    return this.getNumberAttribute('target_latency');
  }
  public set targetLatency(value: number) {
    this._targetLatency = value;
  }
  public resetTargetLatency() {
    this._targetLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetLatencyInput() {
    return this._targetLatency;
  }

  // topics_regex - computed: true, optional: true, required: false
  private _topicsRegex?: string; 
  public get topicsRegex() {
    return this.getStringAttribute('topics_regex');
  }
  public set topicsRegex(value: string) {
    this._topicsRegex = value;
  }
  public resetTopicsRegex() {
    this._topicsRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsRegexInput() {
    return this._topicsRegex;
  }

  // source_cluster - computed: false, optional: true, required: false
  private _sourceCluster = new DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceClusterList(this, "source_cluster", false);
  public get sourceCluster() {
    return this._sourceCluster;
  }
  public putSourceCluster(value: DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsSourceCluster[] | cdktf.IResolvable) {
    this._sourceCluster.internalValue = value;
  }
  public resetSourceCluster() {
    this._sourceCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceClusterInput() {
    return this._sourceCluster.internalValue;
  }
}

export class DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaConnectClusterMirrorsV2Mirrors[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsOutputReference {
    return new DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/kafka_connect_cluster_mirrors_v2 instaclustr_kafka_connect_cluster_mirrors_v2}
*/
export class DataInstaclustrKafkaConnectClusterMirrorsV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_kafka_connect_cluster_mirrors_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrKafkaConnectClusterMirrorsV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrKafkaConnectClusterMirrorsV2 to import
  * @param importFromId The id of the existing DataInstaclustrKafkaConnectClusterMirrorsV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/kafka_connect_cluster_mirrors_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrKafkaConnectClusterMirrorsV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_kafka_connect_cluster_mirrors_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/kafka_connect_cluster_mirrors_v2 instaclustr_kafka_connect_cluster_mirrors_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrKafkaConnectClusterMirrorsV2Config
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrKafkaConnectClusterMirrorsV2Config) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_kafka_connect_cluster_mirrors_v2',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.37',
        providerVersionConstraint: '2.1.37'
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
    this._kafkaConnectClusterId = config.kafkaConnectClusterId;
    this._filter.internalValue = config.filter;
    this._mirrors.internalValue = config.mirrors;
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

  // kafka_connect_cluster_id - computed: false, optional: false, required: true
  private _kafkaConnectClusterId?: string; 
  public get kafkaConnectClusterId() {
    return this.getStringAttribute('kafka_connect_cluster_id');
  }
  public set kafkaConnectClusterId(value: string) {
    this._kafkaConnectClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConnectClusterIdInput() {
    return this._kafkaConnectClusterId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataInstaclustrKafkaConnectClusterMirrorsV2FilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataInstaclustrKafkaConnectClusterMirrorsV2Filter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // mirrors - computed: false, optional: true, required: false
  private _mirrors = new DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsList(this, "mirrors", false);
  public get mirrors() {
    return this._mirrors;
  }
  public putMirrors(value: DataInstaclustrKafkaConnectClusterMirrorsV2Mirrors[] | cdktf.IResolvable) {
    this._mirrors.internalValue = value;
  }
  public resetMirrors() {
    this._mirrors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorsInput() {
    return this._mirrors.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      kafka_connect_cluster_id: cdktf.stringToTerraform(this._kafkaConnectClusterId),
      filter: cdktf.listMapper(dataInstaclustrKafkaConnectClusterMirrorsV2FilterToTerraform, true)(this._filter.internalValue),
      mirrors: cdktf.listMapper(dataInstaclustrKafkaConnectClusterMirrorsV2MirrorsToTerraform, true)(this._mirrors.internalValue),
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
      kafka_connect_cluster_id: {
        value: cdktf.stringToHclTerraform(this._kafkaConnectClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataInstaclustrKafkaConnectClusterMirrorsV2FilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInstaclustrKafkaConnectClusterMirrorsV2FilterList",
      },
      mirrors: {
        value: cdktf.listMapperHcl(dataInstaclustrKafkaConnectClusterMirrorsV2MirrorsToHclTerraform, true)(this._mirrors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrKafkaConnectClusterMirrorsV2MirrorsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
