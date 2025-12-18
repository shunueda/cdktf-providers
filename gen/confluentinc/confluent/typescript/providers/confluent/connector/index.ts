// https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * The nonsensitive configuration settings to set (e.g., `"time.interval" = "DAILY"`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/connector#config_nonsensitive Connector#config_nonsensitive}
  */
  readonly configNonsensitive: { [key: string]: string };
  /**
  * The sensitive configuration settings to set (e.g., `"gcs.credentials.config" = "**REDACTED***"`). Should not be set for an import operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/connector#config_sensitive Connector#config_sensitive}
  */
  readonly configSensitive?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/connector#id Connector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/connector#status Connector#status}
  */
  readonly status?: string;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/connector#environment Connector#environment}
  */
  readonly environment: ConnectorEnvironment;
  /**
  * kafka_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/connector#kafka_cluster Connector#kafka_cluster}
  */
  readonly kafkaCluster: ConnectorKafkaCluster;
  /**
  * offsets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/connector#offsets Connector#offsets}
  */
  readonly offsets?: ConnectorOffsets[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/connector#timeouts Connector#timeouts}
  */
  readonly timeouts?: ConnectorTimeouts;
}
export interface ConnectorEnvironment {
  /**
  * The unique identifier for the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/connector#id Connector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function connectorEnvironmentToTerraform(struct?: ConnectorEnvironmentOutputReference | ConnectorEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function connectorEnvironmentToHclTerraform(struct?: ConnectorEnvironmentOutputReference | ConnectorEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

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
}
export interface ConnectorKafkaCluster {
  /**
  * The Kafka cluster ID (e.g., `lkc-12345`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/connector#id Connector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function connectorKafkaClusterToTerraform(struct?: ConnectorKafkaClusterOutputReference | ConnectorKafkaCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function connectorKafkaClusterToHclTerraform(struct?: ConnectorKafkaClusterOutputReference | ConnectorKafkaCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorKafkaClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorKafkaCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorKafkaCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

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
}
export interface ConnectorOffsets {
  /**
  * Connector offsets information for the partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/connector#offset Connector#offset}
  */
  readonly offset: { [key: string]: string };
  /**
  * Connector partitions information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/connector#partition Connector#partition}
  */
  readonly partition: { [key: string]: string };
}

export function connectorOffsetsToTerraform(struct?: ConnectorOffsets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offset: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.offset),
    partition: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.partition),
  }
}


export function connectorOffsetsToHclTerraform(struct?: ConnectorOffsets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    offset: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.offset),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    partition: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.partition),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorOffsetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorOffsets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorOffsets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._offset = undefined;
      this._partition = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._offset = value.offset;
      this._partition = value.partition;
    }
  }

  // offset - computed: false, optional: false, required: true
  private _offset?: { [key: string]: string }; 
  public get offset() {
    return this.getStringMapAttribute('offset');
  }
  public set offset(value: { [key: string]: string }) {
    this._offset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // partition - computed: false, optional: false, required: true
  private _partition?: { [key: string]: string }; 
  public get partition() {
    return this.getStringMapAttribute('partition');
  }
  public set partition(value: { [key: string]: string }) {
    this._partition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }
}

export class ConnectorOffsetsList extends cdktf.ComplexList {
  public internalValue? : ConnectorOffsets[] | cdktf.IResolvable

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
  public get(index: number): ConnectorOffsetsOutputReference {
    return new ConnectorOffsetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/connector#create Connector#create}
  */
  readonly create?: string;
}

export function connectorTimeoutsToTerraform(struct?: ConnectorTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function connectorTimeoutsToHclTerraform(struct?: ConnectorTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectorTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/connector confluent_connector}
*/
export class Connector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluent_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Connector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Connector to import
  * @param importFromId The id of the existing Connector that should be imported. Refer to the {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Connector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluent_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/connector confluent_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'confluent_connector',
      terraformGeneratorMetadata: {
        providerName: 'confluent',
        providerVersion: '2.57.0',
        providerVersionConstraint: '2.57.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configNonsensitive = config.configNonsensitive;
    this._configSensitive = config.configSensitive;
    this._id = config.id;
    this._status = config.status;
    this._environment.internalValue = config.environment;
    this._kafkaCluster.internalValue = config.kafkaCluster;
    this._offsets.internalValue = config.offsets;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_nonsensitive - computed: false, optional: false, required: true
  private _configNonsensitive?: { [key: string]: string }; 
  public get configNonsensitive() {
    return this.getStringMapAttribute('config_nonsensitive');
  }
  public set configNonsensitive(value: { [key: string]: string }) {
    this._configNonsensitive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configNonsensitiveInput() {
    return this._configNonsensitive;
  }

  // config_sensitive - computed: true, optional: true, required: false
  private _configSensitive?: { [key: string]: string }; 
  public get configSensitive() {
    return this.getStringMapAttribute('config_sensitive');
  }
  public set configSensitive(value: { [key: string]: string }) {
    this._configSensitive = value;
  }
  public resetConfigSensitive() {
    this._configSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSensitiveInput() {
    return this._configSensitive;
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // environment - computed: false, optional: false, required: true
  private _environment = new ConnectorEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: ConnectorEnvironment) {
    this._environment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // kafka_cluster - computed: false, optional: false, required: true
  private _kafkaCluster = new ConnectorKafkaClusterOutputReference(this, "kafka_cluster");
  public get kafkaCluster() {
    return this._kafkaCluster;
  }
  public putKafkaCluster(value: ConnectorKafkaCluster) {
    this._kafkaCluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaClusterInput() {
    return this._kafkaCluster.internalValue;
  }

  // offsets - computed: false, optional: true, required: false
  private _offsets = new ConnectorOffsetsList(this, "offsets", true);
  public get offsets() {
    return this._offsets;
  }
  public putOffsets(value: ConnectorOffsets[] | cdktf.IResolvable) {
    this._offsets.internalValue = value;
  }
  public resetOffsets() {
    this._offsets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetsInput() {
    return this._offsets.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ConnectorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ConnectorTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_nonsensitive: cdktf.hashMapper(cdktf.stringToTerraform)(this._configNonsensitive),
      config_sensitive: cdktf.hashMapper(cdktf.stringToTerraform)(this._configSensitive),
      id: cdktf.stringToTerraform(this._id),
      status: cdktf.stringToTerraform(this._status),
      environment: connectorEnvironmentToTerraform(this._environment.internalValue),
      kafka_cluster: connectorKafkaClusterToTerraform(this._kafkaCluster.internalValue),
      offsets: cdktf.listMapper(connectorOffsetsToTerraform, true)(this._offsets.internalValue),
      timeouts: connectorTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_nonsensitive: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._configNonsensitive),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      config_sensitive: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._configSensitive),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: connectorEnvironmentToHclTerraform(this._environment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectorEnvironmentList",
      },
      kafka_cluster: {
        value: connectorKafkaClusterToHclTerraform(this._kafkaCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectorKafkaClusterList",
      },
      offsets: {
        value: cdktf.listMapperHcl(connectorOffsetsToHclTerraform, true)(this._offsets.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectorOffsetsList",
      },
      timeouts: {
        value: connectorTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectorTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
