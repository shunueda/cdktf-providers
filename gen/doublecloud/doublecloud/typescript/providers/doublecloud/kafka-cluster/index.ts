// https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KafkaClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloud provider (`aws`, `gcp`, or `azure`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster#cloud_type KafkaCluster#cloud_type}
  */
  readonly cloudType: string;
  /**
  * Cluster description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster#description KafkaCluster#description}
  */
  readonly description?: string;
  /**
  * Cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster#name KafkaCluster#name}
  */
  readonly name: string;
  /**
  * Cluster network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster#network_id KafkaCluster#network_id}
  */
  readonly networkId: string;
  /**
  * Project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster#project_id KafkaCluster#project_id}
  */
  readonly projectId: string;
  /**
  * Region where the cluster is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster#region_id KafkaCluster#region_id}
  */
  readonly regionId: string;
  /**
  * Version of Apache Kafka
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster#version KafkaCluster#version}
  */
  readonly version?: string;
  /**
  * access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster#access KafkaCluster#access}
  */
  readonly access?: KafkaClusterAccess;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster#config KafkaCluster#config}
  */
  readonly config?: KafkaClusterConfigA;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster#resources KafkaCluster#resources}
  */
  readonly resources?: KafkaClusterResources;
  /**
  * schema_registry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster#schema_registry KafkaCluster#schema_registry}
  */
  readonly schemaRegistry?: KafkaClusterSchemaRegistry;
}
export interface KafkaClusterConnectionInfo {
}

export function kafkaClusterConnectionInfoToTerraform(struct?: KafkaClusterConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function kafkaClusterConnectionInfoToHclTerraform(struct?: KafkaClusterConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KafkaClusterConnectionInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KafkaClusterConnectionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterConnectionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export interface KafkaClusterPrivateConnectionInfo {
}

export function kafkaClusterPrivateConnectionInfoToTerraform(struct?: KafkaClusterPrivateConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function kafkaClusterPrivateConnectionInfoToHclTerraform(struct?: KafkaClusterPrivateConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KafkaClusterPrivateConnectionInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KafkaClusterPrivateConnectionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterPrivateConnectionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export interface KafkaClusterAccessIpv4CidrBlocks {
  /**
  * CIDR block description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster#description KafkaCluster#description}
  */
  readonly description?: string;
  /**
  * CIDR block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster#value KafkaCluster#value}
  */
  readonly value: string;
}

export function kafkaClusterAccessIpv4CidrBlocksToTerraform(struct?: KafkaClusterAccessIpv4CidrBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function kafkaClusterAccessIpv4CidrBlocksToHclTerraform(struct?: KafkaClusterAccessIpv4CidrBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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

export class KafkaClusterAccessIpv4CidrBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaClusterAccessIpv4CidrBlocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterAccessIpv4CidrBlocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._value = value.value;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class KafkaClusterAccessIpv4CidrBlocksList extends cdktf.ComplexList {
  public internalValue? : KafkaClusterAccessIpv4CidrBlocks[] | cdktf.IResolvable

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
  public get(index: number): KafkaClusterAccessIpv4CidrBlocksOutputReference {
    return new KafkaClusterAccessIpv4CidrBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaClusterAccessIpv6CidrBlocks {
  /**
  * CIDR block description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster#description KafkaCluster#description}
  */
  readonly description?: string;
  /**
  * CIDR block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster#value KafkaCluster#value}
  */
  readonly value: string;
}

export function kafkaClusterAccessIpv6CidrBlocksToTerraform(struct?: KafkaClusterAccessIpv6CidrBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function kafkaClusterAccessIpv6CidrBlocksToHclTerraform(struct?: KafkaClusterAccessIpv6CidrBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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

export class KafkaClusterAccessIpv6CidrBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaClusterAccessIpv6CidrBlocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterAccessIpv6CidrBlocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._value = value.value;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class KafkaClusterAccessIpv6CidrBlocksList extends cdktf.ComplexList {
  public internalValue? : KafkaClusterAccessIpv6CidrBlocks[] | cdktf.IResolvable

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
  public get(index: number): KafkaClusterAccessIpv6CidrBlocksOutputReference {
    return new KafkaClusterAccessIpv6CidrBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaClusterAccess {
  /**
  * List of allowed services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster#data_services KafkaCluster#data_services}
  */
  readonly dataServices?: string[];
  /**
  * IPv4 CIDR blocks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster#ipv4_cidr_blocks KafkaCluster#ipv4_cidr_blocks}
  */
  readonly ipv4CidrBlocks?: KafkaClusterAccessIpv4CidrBlocks[] | cdktf.IResolvable;
  /**
  * IPv6 CIDR blocks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster#ipv6_cidr_blocks KafkaCluster#ipv6_cidr_blocks}
  */
  readonly ipv6CidrBlocks?: KafkaClusterAccessIpv6CidrBlocks[] | cdktf.IResolvable;
}

export function kafkaClusterAccessToTerraform(struct?: KafkaClusterAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dataServices),
    ipv4_cidr_blocks: cdktf.listMapper(kafkaClusterAccessIpv4CidrBlocksToTerraform, false)(struct!.ipv4CidrBlocks),
    ipv6_cidr_blocks: cdktf.listMapper(kafkaClusterAccessIpv6CidrBlocksToTerraform, false)(struct!.ipv6CidrBlocks),
  }
}


export function kafkaClusterAccessToHclTerraform(struct?: KafkaClusterAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dataServices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv4_cidr_blocks: {
      value: cdktf.listMapperHcl(kafkaClusterAccessIpv4CidrBlocksToHclTerraform, false)(struct!.ipv4CidrBlocks),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaClusterAccessIpv4CidrBlocksList",
    },
    ipv6_cidr_blocks: {
      value: cdktf.listMapperHcl(kafkaClusterAccessIpv6CidrBlocksToHclTerraform, false)(struct!.ipv6CidrBlocks),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaClusterAccessIpv6CidrBlocksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaClusterAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KafkaClusterAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataServices = this._dataServices;
    }
    if (this._ipv4CidrBlocks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4CidrBlocks = this._ipv4CidrBlocks?.internalValue;
    }
    if (this._ipv6CidrBlocks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6CidrBlocks = this._ipv6CidrBlocks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataServices = undefined;
      this._ipv4CidrBlocks.internalValue = undefined;
      this._ipv6CidrBlocks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataServices = value.dataServices;
      this._ipv4CidrBlocks.internalValue = value.ipv4CidrBlocks;
      this._ipv6CidrBlocks.internalValue = value.ipv6CidrBlocks;
    }
  }

  // data_services - computed: false, optional: true, required: false
  private _dataServices?: string[]; 
  public get dataServices() {
    return this.getListAttribute('data_services');
  }
  public set dataServices(value: string[]) {
    this._dataServices = value;
  }
  public resetDataServices() {
    this._dataServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataServicesInput() {
    return this._dataServices;
  }

  // ipv4_cidr_blocks - computed: false, optional: true, required: false
  private _ipv4CidrBlocks = new KafkaClusterAccessIpv4CidrBlocksList(this, "ipv4_cidr_blocks", false);
  public get ipv4CidrBlocks() {
    return this._ipv4CidrBlocks;
  }
  public putIpv4CidrBlocks(value: KafkaClusterAccessIpv4CidrBlocks[] | cdktf.IResolvable) {
    this._ipv4CidrBlocks.internalValue = value;
  }
  public resetIpv4CidrBlocks() {
    this._ipv4CidrBlocks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4CidrBlocksInput() {
    return this._ipv4CidrBlocks.internalValue;
  }

  // ipv6_cidr_blocks - computed: false, optional: true, required: false
  private _ipv6CidrBlocks = new KafkaClusterAccessIpv6CidrBlocksList(this, "ipv6_cidr_blocks", false);
  public get ipv6CidrBlocks() {
    return this._ipv6CidrBlocks;
  }
  public putIpv6CidrBlocks(value: KafkaClusterAccessIpv6CidrBlocks[] | cdktf.IResolvable) {
    this._ipv6CidrBlocks.internalValue = value;
  }
  public resetIpv6CidrBlocks() {
    this._ipv6CidrBlocks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrBlocksInput() {
    return this._ipv6CidrBlocks.internalValue;
  }
}
export interface KafkaClusterConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster#log_retention_bytes KafkaCluster#log_retention_bytes}
  */
  readonly logRetentionBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster#log_retention_hours KafkaCluster#log_retention_hours}
  */
  readonly logRetentionHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster#log_retention_minutes KafkaCluster#log_retention_minutes}
  */
  readonly logRetentionMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster#log_retention_ms KafkaCluster#log_retention_ms}
  */
  readonly logRetentionMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster#message_max_bytes KafkaCluster#message_max_bytes}
  */
  readonly messageMaxBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster#replica_fetch_max_bytes KafkaCluster#replica_fetch_max_bytes}
  */
  readonly replicaFetchMaxBytes?: number;
}

export function kafkaClusterConfigAToTerraform(struct?: KafkaClusterConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_retention_bytes: cdktf.numberToTerraform(struct!.logRetentionBytes),
    log_retention_hours: cdktf.numberToTerraform(struct!.logRetentionHours),
    log_retention_minutes: cdktf.numberToTerraform(struct!.logRetentionMinutes),
    log_retention_ms: cdktf.numberToTerraform(struct!.logRetentionMs),
    message_max_bytes: cdktf.numberToTerraform(struct!.messageMaxBytes),
    replica_fetch_max_bytes: cdktf.numberToTerraform(struct!.replicaFetchMaxBytes),
  }
}


export function kafkaClusterConfigAToHclTerraform(struct?: KafkaClusterConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_retention_bytes: {
      value: cdktf.numberToHclTerraform(struct!.logRetentionBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_retention_hours: {
      value: cdktf.numberToHclTerraform(struct!.logRetentionHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_retention_minutes: {
      value: cdktf.numberToHclTerraform(struct!.logRetentionMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_retention_ms: {
      value: cdktf.numberToHclTerraform(struct!.logRetentionMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.messageMaxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replica_fetch_max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.replicaFetchMaxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaClusterConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KafkaClusterConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logRetentionBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRetentionBytes = this._logRetentionBytes;
    }
    if (this._logRetentionHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRetentionHours = this._logRetentionHours;
    }
    if (this._logRetentionMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRetentionMinutes = this._logRetentionMinutes;
    }
    if (this._logRetentionMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRetentionMs = this._logRetentionMs;
    }
    if (this._messageMaxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageMaxBytes = this._messageMaxBytes;
    }
    if (this._replicaFetchMaxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaFetchMaxBytes = this._replicaFetchMaxBytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logRetentionBytes = undefined;
      this._logRetentionHours = undefined;
      this._logRetentionMinutes = undefined;
      this._logRetentionMs = undefined;
      this._messageMaxBytes = undefined;
      this._replicaFetchMaxBytes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logRetentionBytes = value.logRetentionBytes;
      this._logRetentionHours = value.logRetentionHours;
      this._logRetentionMinutes = value.logRetentionMinutes;
      this._logRetentionMs = value.logRetentionMs;
      this._messageMaxBytes = value.messageMaxBytes;
      this._replicaFetchMaxBytes = value.replicaFetchMaxBytes;
    }
  }

  // log_retention_bytes - computed: false, optional: true, required: false
  private _logRetentionBytes?: number; 
  public get logRetentionBytes() {
    return this.getNumberAttribute('log_retention_bytes');
  }
  public set logRetentionBytes(value: number) {
    this._logRetentionBytes = value;
  }
  public resetLogRetentionBytes() {
    this._logRetentionBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRetentionBytesInput() {
    return this._logRetentionBytes;
  }

  // log_retention_hours - computed: false, optional: true, required: false
  private _logRetentionHours?: number; 
  public get logRetentionHours() {
    return this.getNumberAttribute('log_retention_hours');
  }
  public set logRetentionHours(value: number) {
    this._logRetentionHours = value;
  }
  public resetLogRetentionHours() {
    this._logRetentionHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRetentionHoursInput() {
    return this._logRetentionHours;
  }

  // log_retention_minutes - computed: false, optional: true, required: false
  private _logRetentionMinutes?: number; 
  public get logRetentionMinutes() {
    return this.getNumberAttribute('log_retention_minutes');
  }
  public set logRetentionMinutes(value: number) {
    this._logRetentionMinutes = value;
  }
  public resetLogRetentionMinutes() {
    this._logRetentionMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRetentionMinutesInput() {
    return this._logRetentionMinutes;
  }

  // log_retention_ms - computed: false, optional: true, required: false
  private _logRetentionMs?: number; 
  public get logRetentionMs() {
    return this.getNumberAttribute('log_retention_ms');
  }
  public set logRetentionMs(value: number) {
    this._logRetentionMs = value;
  }
  public resetLogRetentionMs() {
    this._logRetentionMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRetentionMsInput() {
    return this._logRetentionMs;
  }

  // message_max_bytes - computed: false, optional: true, required: false
  private _messageMaxBytes?: number; 
  public get messageMaxBytes() {
    return this.getNumberAttribute('message_max_bytes');
  }
  public set messageMaxBytes(value: number) {
    this._messageMaxBytes = value;
  }
  public resetMessageMaxBytes() {
    this._messageMaxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageMaxBytesInput() {
    return this._messageMaxBytes;
  }

  // replica_fetch_max_bytes - computed: false, optional: true, required: false
  private _replicaFetchMaxBytes?: number; 
  public get replicaFetchMaxBytes() {
    return this.getNumberAttribute('replica_fetch_max_bytes');
  }
  public set replicaFetchMaxBytes(value: number) {
    this._replicaFetchMaxBytes = value;
  }
  public resetReplicaFetchMaxBytes() {
    this._replicaFetchMaxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaFetchMaxBytesInput() {
    return this._replicaFetchMaxBytes;
  }
}
export interface KafkaClusterResourcesKafka {
  /**
  * Number of brokers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster#broker_count KafkaCluster#broker_count}
  */
  readonly brokerCount: number;
  /**
  * Disk size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster#disk_size KafkaCluster#disk_size}
  */
  readonly diskSize: number;
  /**
  * Maximum storage volume the cluster can automatically scale up to in bytes. If not set, autoscaling is disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster#max_disk_size KafkaCluster#max_disk_size}
  */
  readonly maxDiskSize?: number;
  /**
  * ID of the maximal computational resources preset available to a host (CPU, memory, etc.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster#max_resource_preset_id KafkaCluster#max_resource_preset_id}
  */
  readonly maxResourcePresetId?: string;
  /**
  * ID of the minimal computational resources preset available to a host (CPU, memory, etc.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster#min_resource_preset_id KafkaCluster#min_resource_preset_id}
  */
  readonly minResourcePresetId?: string;
  /**
  * Resource preset ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster#resource_preset_id KafkaCluster#resource_preset_id}
  */
  readonly resourcePresetId?: string;
  /**
  * Number of zones
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster#zone_count KafkaCluster#zone_count}
  */
  readonly zoneCount: number;
}

export function kafkaClusterResourcesKafkaToTerraform(struct?: KafkaClusterResourcesKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broker_count: cdktf.numberToTerraform(struct!.brokerCount),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    max_disk_size: cdktf.numberToTerraform(struct!.maxDiskSize),
    max_resource_preset_id: cdktf.stringToTerraform(struct!.maxResourcePresetId),
    min_resource_preset_id: cdktf.stringToTerraform(struct!.minResourcePresetId),
    resource_preset_id: cdktf.stringToTerraform(struct!.resourcePresetId),
    zone_count: cdktf.numberToTerraform(struct!.zoneCount),
  }
}


export function kafkaClusterResourcesKafkaToHclTerraform(struct?: KafkaClusterResourcesKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broker_count: {
      value: cdktf.numberToHclTerraform(struct!.brokerCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_disk_size: {
      value: cdktf.numberToHclTerraform(struct!.maxDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_resource_preset_id: {
      value: cdktf.stringToHclTerraform(struct!.maxResourcePresetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_resource_preset_id: {
      value: cdktf.stringToHclTerraform(struct!.minResourcePresetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_preset_id: {
      value: cdktf.stringToHclTerraform(struct!.resourcePresetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_count: {
      value: cdktf.numberToHclTerraform(struct!.zoneCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaClusterResourcesKafkaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KafkaClusterResourcesKafka | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._brokerCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokerCount = this._brokerCount;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._maxDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDiskSize = this._maxDiskSize;
    }
    if (this._maxResourcePresetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxResourcePresetId = this._maxResourcePresetId;
    }
    if (this._minResourcePresetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.minResourcePresetId = this._minResourcePresetId;
    }
    if (this._resourcePresetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePresetId = this._resourcePresetId;
    }
    if (this._zoneCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneCount = this._zoneCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterResourcesKafka | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._brokerCount = undefined;
      this._diskSize = undefined;
      this._maxDiskSize = undefined;
      this._maxResourcePresetId = undefined;
      this._minResourcePresetId = undefined;
      this._resourcePresetId = undefined;
      this._zoneCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._brokerCount = value.brokerCount;
      this._diskSize = value.diskSize;
      this._maxDiskSize = value.maxDiskSize;
      this._maxResourcePresetId = value.maxResourcePresetId;
      this._minResourcePresetId = value.minResourcePresetId;
      this._resourcePresetId = value.resourcePresetId;
      this._zoneCount = value.zoneCount;
    }
  }

  // broker_count - computed: false, optional: false, required: true
  private _brokerCount?: number; 
  public get brokerCount() {
    return this.getNumberAttribute('broker_count');
  }
  public set brokerCount(value: number) {
    this._brokerCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerCountInput() {
    return this._brokerCount;
  }

  // disk_size - computed: false, optional: false, required: true
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // max_disk_size - computed: false, optional: true, required: false
  private _maxDiskSize?: number; 
  public get maxDiskSize() {
    return this.getNumberAttribute('max_disk_size');
  }
  public set maxDiskSize(value: number) {
    this._maxDiskSize = value;
  }
  public resetMaxDiskSize() {
    this._maxDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDiskSizeInput() {
    return this._maxDiskSize;
  }

  // max_resource_preset_id - computed: false, optional: true, required: false
  private _maxResourcePresetId?: string; 
  public get maxResourcePresetId() {
    return this.getStringAttribute('max_resource_preset_id');
  }
  public set maxResourcePresetId(value: string) {
    this._maxResourcePresetId = value;
  }
  public resetMaxResourcePresetId() {
    this._maxResourcePresetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResourcePresetIdInput() {
    return this._maxResourcePresetId;
  }

  // min_resource_preset_id - computed: false, optional: true, required: false
  private _minResourcePresetId?: string; 
  public get minResourcePresetId() {
    return this.getStringAttribute('min_resource_preset_id');
  }
  public set minResourcePresetId(value: string) {
    this._minResourcePresetId = value;
  }
  public resetMinResourcePresetId() {
    this._minResourcePresetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minResourcePresetIdInput() {
    return this._minResourcePresetId;
  }

  // resource_preset_id - computed: false, optional: true, required: false
  private _resourcePresetId?: string; 
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }
  public set resourcePresetId(value: string) {
    this._resourcePresetId = value;
  }
  public resetResourcePresetId() {
    this._resourcePresetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePresetIdInput() {
    return this._resourcePresetId;
  }

  // zone_count - computed: false, optional: false, required: true
  private _zoneCount?: number; 
  public get zoneCount() {
    return this.getNumberAttribute('zone_count');
  }
  public set zoneCount(value: number) {
    this._zoneCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneCountInput() {
    return this._zoneCount;
  }
}
export interface KafkaClusterResources {
  /**
  * kafka block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster#kafka KafkaCluster#kafka}
  */
  readonly kafka?: KafkaClusterResourcesKafka;
}

export function kafkaClusterResourcesToTerraform(struct?: KafkaClusterResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kafka: kafkaClusterResourcesKafkaToTerraform(struct!.kafka),
  }
}


export function kafkaClusterResourcesToHclTerraform(struct?: KafkaClusterResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kafka: {
      value: kafkaClusterResourcesKafkaToHclTerraform(struct!.kafka),
      isBlock: true,
      type: "struct",
      storageClassType: "KafkaClusterResourcesKafka",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaClusterResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KafkaClusterResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kafka?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafka = this._kafka?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kafka.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kafka.internalValue = value.kafka;
    }
  }

  // kafka - computed: false, optional: true, required: false
  private _kafka = new KafkaClusterResourcesKafkaOutputReference(this, "kafka");
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: KafkaClusterResourcesKafka) {
    this._kafka.internalValue = value;
  }
  public resetKafka() {
    this._kafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
  }
}
export interface KafkaClusterSchemaRegistry {
  /**
  * Enable the Schema Registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster#enabled KafkaCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function kafkaClusterSchemaRegistryToTerraform(struct?: KafkaClusterSchemaRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function kafkaClusterSchemaRegistryToHclTerraform(struct?: KafkaClusterSchemaRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaClusterSchemaRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KafkaClusterSchemaRegistry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterSchemaRegistry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster doublecloud_kafka_cluster}
*/
export class KafkaCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doublecloud_kafka_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KafkaCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KafkaCluster to import
  * @param importFromId The id of the existing KafkaCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KafkaCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doublecloud_kafka_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/kafka_cluster doublecloud_kafka_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KafkaClusterConfig
  */
  public constructor(scope: Construct, id: string, config: KafkaClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'doublecloud_kafka_cluster',
      terraformGeneratorMetadata: {
        providerName: 'doublecloud',
        providerVersion: '0.1.26'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudType = config.cloudType;
    this._description = config.description;
    this._name = config.name;
    this._networkId = config.networkId;
    this._projectId = config.projectId;
    this._regionId = config.regionId;
    this._version = config.version;
    this._access.internalValue = config.access;
    this._config.internalValue = config.config;
    this._resources.internalValue = config.resources;
    this._schemaRegistry.internalValue = config.schemaRegistry;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_type - computed: false, optional: false, required: true
  private _cloudType?: string; 
  public get cloudType() {
    return this.getStringAttribute('cloud_type');
  }
  public set cloudType(value: string) {
    this._cloudType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTypeInput() {
    return this._cloudType;
  }

  // connection_info - computed: true, optional: false, required: false
  private _connectionInfo = new KafkaClusterConnectionInfoOutputReference(this, "connection_info");
  public get connectionInfo() {
    return this._connectionInfo;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // private_connection_info - computed: true, optional: false, required: false
  private _privateConnectionInfo = new KafkaClusterPrivateConnectionInfoOutputReference(this, "private_connection_info");
  public get privateConnectionInfo() {
    return this._privateConnectionInfo;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region_id - computed: false, optional: false, required: true
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // access - computed: false, optional: true, required: false
  private _access = new KafkaClusterAccessOutputReference(this, "access");
  public get access() {
    return this._access;
  }
  public putAccess(value: KafkaClusterAccess) {
    this._access.internalValue = value;
  }
  public resetAccess() {
    this._access.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access.internalValue;
  }

  // config - computed: false, optional: true, required: false
  private _config = new KafkaClusterConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: KafkaClusterConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new KafkaClusterResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: KafkaClusterResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // schema_registry - computed: false, optional: true, required: false
  private _schemaRegistry = new KafkaClusterSchemaRegistryOutputReference(this, "schema_registry");
  public get schemaRegistry() {
    return this._schemaRegistry;
  }
  public putSchemaRegistry(value: KafkaClusterSchemaRegistry) {
    this._schemaRegistry.internalValue = value;
  }
  public resetSchemaRegistry() {
    this._schemaRegistry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryInput() {
    return this._schemaRegistry.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_type: cdktf.stringToTerraform(this._cloudType),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      project_id: cdktf.stringToTerraform(this._projectId),
      region_id: cdktf.stringToTerraform(this._regionId),
      version: cdktf.stringToTerraform(this._version),
      access: kafkaClusterAccessToTerraform(this._access.internalValue),
      config: kafkaClusterConfigAToTerraform(this._config.internalValue),
      resources: kafkaClusterResourcesToTerraform(this._resources.internalValue),
      schema_registry: kafkaClusterSchemaRegistryToTerraform(this._schemaRegistry.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_type: {
        value: cdktf.stringToHclTerraform(this._cloudType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.stringToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access: {
        value: kafkaClusterAccessToHclTerraform(this._access.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KafkaClusterAccess",
      },
      config: {
        value: kafkaClusterConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KafkaClusterConfigA",
      },
      resources: {
        value: kafkaClusterResourcesToHclTerraform(this._resources.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KafkaClusterResources",
      },
      schema_registry: {
        value: kafkaClusterSchemaRegistryToHclTerraform(this._schemaRegistry.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KafkaClusterSchemaRegistry",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
