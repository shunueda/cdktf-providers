// https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConsoleTopicV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Catalog visibility for the topic, valid values are: PRIVATE, PUBLIC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_v2#catalog_visibility ConsoleTopicV2#catalog_visibility}
  */
  readonly catalogVisibility?: string;
  /**
  * Kafka cluster name linked with Kafka topic. Must already exist in Conduktor Console. Any change will require the Topic to be destroyed and re-created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_v2#cluster ConsoleTopicV2#cluster}
  */
  readonly cluster: string;
  /**
  * Topic description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_v2#description ConsoleTopicV2#description}
  */
  readonly description?: string;
  /**
  * is optional (defaults 'true'). Defines whether the description can be updated in the UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_v2#description_is_editable ConsoleTopicV2#description_is_editable}
  */
  readonly descriptionIsEditable?: boolean | cdktf.IResolvable;
  /**
  * Custom labels for the topic resource. Used in Conduktor's topic catalog and UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_v2#labels ConsoleTopicV2#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Topic name, must be unique, acts as an ID for import. Any change will require the Topic to be destroyed and re-created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_v2#name ConsoleTopicV2#name}
  */
  readonly name: string;
  /**
  * Topic specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_v2#spec ConsoleTopicV2#spec}
  */
  readonly spec: ConsoleTopicV2Spec;
  /**
  * Sql storage configuration. NOTE: this field has been introduced with Console `1.30.0` and it will not work with previous versions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_v2#sql_storage ConsoleTopicV2#sql_storage}
  */
  readonly sqlStorage?: ConsoleTopicV2SqlStorage;
}
export interface ConsoleTopicV2Spec {
  /**
  * Must be valid Kafka Topic configs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_v2#configs ConsoleTopicV2#configs}
  */
  readonly configs?: { [key: string]: string };
  /**
  * Immutable field. Any change will require the Topic to be destroyed and re-created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_v2#partitions ConsoleTopicV2#partitions}
  */
  readonly partitions: number;
  /**
  * Immutable field. Any change will require the Topic to be destroyed and re-created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_v2#replication_factor ConsoleTopicV2#replication_factor}
  */
  readonly replicationFactor: number;
}

export function consoleTopicV2SpecToTerraform(struct?: ConsoleTopicV2Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configs),
    partitions: cdktf.numberToTerraform(struct!.partitions),
    replication_factor: cdktf.numberToTerraform(struct!.replicationFactor),
  }
}


export function consoleTopicV2SpecToHclTerraform(struct?: ConsoleTopicV2Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configs: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    partitions: {
      value: cdktf.numberToHclTerraform(struct!.partitions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replication_factor: {
      value: cdktf.numberToHclTerraform(struct!.replicationFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleTopicV2SpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleTopicV2Spec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configs !== undefined) {
      hasAnyValues = true;
      internalValueResult.configs = this._configs;
    }
    if (this._partitions !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitions = this._partitions;
    }
    if (this._replicationFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationFactor = this._replicationFactor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleTopicV2Spec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configs = undefined;
      this._partitions = undefined;
      this._replicationFactor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configs = value.configs;
      this._partitions = value.partitions;
      this._replicationFactor = value.replicationFactor;
    }
  }

  // configs - computed: true, optional: true, required: false
  private _configs?: { [key: string]: string }; 
  public get configs() {
    return this.getStringMapAttribute('configs');
  }
  public set configs(value: { [key: string]: string }) {
    this._configs = value;
  }
  public resetConfigs() {
    this._configs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configsInput() {
    return this._configs;
  }

  // partitions - computed: false, optional: false, required: true
  private _partitions?: number; 
  public get partitions() {
    return this.getNumberAttribute('partitions');
  }
  public set partitions(value: number) {
    this._partitions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionsInput() {
    return this._partitions;
  }

  // replication_factor - computed: false, optional: false, required: true
  private _replicationFactor?: number; 
  public get replicationFactor() {
    return this.getNumberAttribute('replication_factor');
  }
  public set replicationFactor(value: number) {
    this._replicationFactor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationFactorInput() {
    return this._replicationFactor;
  }
}
export interface ConsoleTopicV2SqlStorage {
  /**
  * Whether to store topic data in the database, to enable Conduktor SQL search of a topic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_v2#enabled ConsoleTopicV2#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * When storing a topic's data for Conduktor SQL search, how long to retain the topic data in the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_v2#retention_time_in_second ConsoleTopicV2#retention_time_in_second}
  */
  readonly retentionTimeInSecond: number;
}

export function consoleTopicV2SqlStorageToTerraform(struct?: ConsoleTopicV2SqlStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    retention_time_in_second: cdktf.numberToTerraform(struct!.retentionTimeInSecond),
  }
}


export function consoleTopicV2SqlStorageToHclTerraform(struct?: ConsoleTopicV2SqlStorage | cdktf.IResolvable): any {
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
    retention_time_in_second: {
      value: cdktf.numberToHclTerraform(struct!.retentionTimeInSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleTopicV2SqlStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleTopicV2SqlStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._retentionTimeInSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionTimeInSecond = this._retentionTimeInSecond;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleTopicV2SqlStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._retentionTimeInSecond = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._retentionTimeInSecond = value.retentionTimeInSecond;
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

  // retention_time_in_second - computed: false, optional: false, required: true
  private _retentionTimeInSecond?: number; 
  public get retentionTimeInSecond() {
    return this.getNumberAttribute('retention_time_in_second');
  }
  public set retentionTimeInSecond(value: number) {
    this._retentionTimeInSecond = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionTimeInSecondInput() {
    return this._retentionTimeInSecond;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_v2 conduktor_console_topic_v2}
*/
export class ConsoleTopicV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "conduktor_console_topic_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConsoleTopicV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConsoleTopicV2 to import
  * @param importFromId The id of the existing ConsoleTopicV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConsoleTopicV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "conduktor_console_topic_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_topic_v2 conduktor_console_topic_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConsoleTopicV2Config
  */
  public constructor(scope: Construct, id: string, config: ConsoleTopicV2Config) {
    super(scope, id, {
      terraformResourceType: 'conduktor_console_topic_v2',
      terraformGeneratorMetadata: {
        providerName: 'conduktor',
        providerVersion: '1.0.1',
        providerVersionConstraint: '1.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._catalogVisibility = config.catalogVisibility;
    this._cluster = config.cluster;
    this._description = config.description;
    this._descriptionIsEditable = config.descriptionIsEditable;
    this._labels = config.labels;
    this._name = config.name;
    this._spec.internalValue = config.spec;
    this._sqlStorage.internalValue = config.sqlStorage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_visibility - computed: false, optional: true, required: false
  private _catalogVisibility?: string; 
  public get catalogVisibility() {
    return this.getStringAttribute('catalog_visibility');
  }
  public set catalogVisibility(value: string) {
    this._catalogVisibility = value;
  }
  public resetCatalogVisibility() {
    this._catalogVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogVisibilityInput() {
    return this._catalogVisibility;
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
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

  // description_is_editable - computed: true, optional: true, required: false
  private _descriptionIsEditable?: boolean | cdktf.IResolvable; 
  public get descriptionIsEditable() {
    return this.getBooleanAttribute('description_is_editable');
  }
  public set descriptionIsEditable(value: boolean | cdktf.IResolvable) {
    this._descriptionIsEditable = value;
  }
  public resetDescriptionIsEditable() {
    this._descriptionIsEditable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionIsEditableInput() {
    return this._descriptionIsEditable;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // managed_labels - computed: true, optional: false, required: false
  private _managedLabels = new cdktf.StringMap(this, "managed_labels");
  public get managedLabels() {
    return this._managedLabels;
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

  // spec - computed: false, optional: false, required: true
  private _spec = new ConsoleTopicV2SpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: ConsoleTopicV2Spec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // sql_storage - computed: false, optional: true, required: false
  private _sqlStorage = new ConsoleTopicV2SqlStorageOutputReference(this, "sql_storage");
  public get sqlStorage() {
    return this._sqlStorage;
  }
  public putSqlStorage(value: ConsoleTopicV2SqlStorage) {
    this._sqlStorage.internalValue = value;
  }
  public resetSqlStorage() {
    this._sqlStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlStorageInput() {
    return this._sqlStorage.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_visibility: cdktf.stringToTerraform(this._catalogVisibility),
      cluster: cdktf.stringToTerraform(this._cluster),
      description: cdktf.stringToTerraform(this._description),
      description_is_editable: cdktf.booleanToTerraform(this._descriptionIsEditable),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      spec: consoleTopicV2SpecToTerraform(this._spec.internalValue),
      sql_storage: consoleTopicV2SqlStorageToTerraform(this._sqlStorage.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog_visibility: {
        value: cdktf.stringToHclTerraform(this._catalogVisibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster: {
        value: cdktf.stringToHclTerraform(this._cluster),
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
      description_is_editable: {
        value: cdktf.booleanToHclTerraform(this._descriptionIsEditable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spec: {
        value: consoleTopicV2SpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConsoleTopicV2Spec",
      },
      sql_storage: {
        value: consoleTopicV2SqlStorageToHclTerraform(this._sqlStorage.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConsoleTopicV2SqlStorage",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
