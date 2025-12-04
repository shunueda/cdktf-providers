// https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_kafka_configs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksFeatureEngineeringKafkaConfigsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_kafka_configs#page_size DataDatabricksFeatureEngineeringKafkaConfigs#page_size}
  */
  readonly pageSize?: number;
}
export interface DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_kafka_configs#uc_service_credential_name DataDatabricksFeatureEngineeringKafkaConfigs#uc_service_credential_name}
  */
  readonly ucServiceCredentialName?: string;
}

export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigToTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uc_service_credential_name: cdktf.stringToTerraform(struct!.ucServiceCredentialName),
  }
}


export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigToHclTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uc_service_credential_name: {
      value: cdktf.stringToHclTerraform(struct!.ucServiceCredentialName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ucServiceCredentialName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ucServiceCredentialName = this._ucServiceCredentialName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ucServiceCredentialName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ucServiceCredentialName = value.ucServiceCredentialName;
    }
  }

  // uc_service_credential_name - computed: true, optional: true, required: false
  private _ucServiceCredentialName?: string; 
  public get ucServiceCredentialName() {
    return this.getStringAttribute('uc_service_credential_name');
  }
  public set ucServiceCredentialName(value: string) {
    this._ucServiceCredentialName = value;
  }
  public resetUcServiceCredentialName() {
    this._ucServiceCredentialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ucServiceCredentialNameInput() {
    return this._ucServiceCredentialName;
  }
}
export interface DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_kafka_configs#json_schema DataDatabricksFeatureEngineeringKafkaConfigs#json_schema}
  */
  readonly jsonSchema?: string;
}

export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaToTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_schema: cdktf.stringToTerraform(struct!.jsonSchema),
  }
}


export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaToHclTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_schema: {
      value: cdktf.stringToHclTerraform(struct!.jsonSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonSchema = this._jsonSchema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonSchema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonSchema = value.jsonSchema;
    }
  }

  // json_schema - computed: true, optional: true, required: false
  private _jsonSchema?: string; 
  public get jsonSchema() {
    return this.getStringAttribute('json_schema');
  }
  public set jsonSchema(value: string) {
    this._jsonSchema = value;
  }
  public resetJsonSchema() {
    this._jsonSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonSchemaInput() {
    return this._jsonSchema;
  }
}
export interface DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_kafka_configs#assign DataDatabricksFeatureEngineeringKafkaConfigs#assign}
  */
  readonly assign?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_kafka_configs#subscribe DataDatabricksFeatureEngineeringKafkaConfigs#subscribe}
  */
  readonly subscribe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_kafka_configs#subscribe_pattern DataDatabricksFeatureEngineeringKafkaConfigs#subscribe_pattern}
  */
  readonly subscribePattern?: string;
}

export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeToTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign: cdktf.stringToTerraform(struct!.assign),
    subscribe: cdktf.stringToTerraform(struct!.subscribe),
    subscribe_pattern: cdktf.stringToTerraform(struct!.subscribePattern),
  }
}


export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeToHclTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign: {
      value: cdktf.stringToHclTerraform(struct!.assign),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscribe: {
      value: cdktf.stringToHclTerraform(struct!.subscribe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscribe_pattern: {
      value: cdktf.stringToHclTerraform(struct!.subscribePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assign !== undefined) {
      hasAnyValues = true;
      internalValueResult.assign = this._assign;
    }
    if (this._subscribe !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscribe = this._subscribe;
    }
    if (this._subscribePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscribePattern = this._subscribePattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assign = undefined;
      this._subscribe = undefined;
      this._subscribePattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assign = value.assign;
      this._subscribe = value.subscribe;
      this._subscribePattern = value.subscribePattern;
    }
  }

  // assign - computed: true, optional: true, required: false
  private _assign?: string; 
  public get assign() {
    return this.getStringAttribute('assign');
  }
  public set assign(value: string) {
    this._assign = value;
  }
  public resetAssign() {
    this._assign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignInput() {
    return this._assign;
  }

  // subscribe - computed: true, optional: true, required: false
  private _subscribe?: string; 
  public get subscribe() {
    return this.getStringAttribute('subscribe');
  }
  public set subscribe(value: string) {
    this._subscribe = value;
  }
  public resetSubscribe() {
    this._subscribe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribeInput() {
    return this._subscribe;
  }

  // subscribe_pattern - computed: true, optional: true, required: false
  private _subscribePattern?: string; 
  public get subscribePattern() {
    return this.getStringAttribute('subscribe_pattern');
  }
  public set subscribePattern(value: string) {
    this._subscribePattern = value;
  }
  public resetSubscribePattern() {
    this._subscribePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribePatternInput() {
    return this._subscribePattern;
  }
}
export interface DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_kafka_configs#json_schema DataDatabricksFeatureEngineeringKafkaConfigs#json_schema}
  */
  readonly jsonSchema?: string;
}

export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaToTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_schema: cdktf.stringToTerraform(struct!.jsonSchema),
  }
}


export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaToHclTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_schema: {
      value: cdktf.stringToHclTerraform(struct!.jsonSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonSchema = this._jsonSchema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonSchema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonSchema = value.jsonSchema;
    }
  }

  // json_schema - computed: true, optional: true, required: false
  private _jsonSchema?: string; 
  public get jsonSchema() {
    return this.getStringAttribute('json_schema');
  }
  public set jsonSchema(value: string) {
    this._jsonSchema = value;
  }
  public resetJsonSchema() {
    this._jsonSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonSchemaInput() {
    return this._jsonSchema;
  }
}
export interface DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_kafka_configs#name DataDatabricksFeatureEngineeringKafkaConfigs#name}
  */
  readonly name: string;
}

export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsToTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsToHclTerraform(struct?: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigs): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // auth_config - computed: true, optional: false, required: false
  private _authConfig = new DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference(this, "auth_config");
  public get authConfig() {
    return this._authConfig;
  }

  // bootstrap_servers - computed: true, optional: false, required: false
  public get bootstrapServers() {
    return this.getStringAttribute('bootstrap_servers');
  }

  // extra_options - computed: true, optional: false, required: false
  private _extraOptions = new cdktf.StringMap(this, "extra_options");
  public get extraOptions() {
    return this._extraOptions;
  }

  // key_schema - computed: true, optional: false, required: false
  private _keySchema = new DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference(this, "key_schema");
  public get keySchema() {
    return this._keySchema;
  }

  // name - computed: true, optional: false, required: true
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

  // subscription_mode - computed: true, optional: false, required: false
  private _subscriptionMode = new DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference(this, "subscription_mode");
  public get subscriptionMode() {
    return this._subscriptionMode;
  }

  // value_schema - computed: true, optional: false, required: false
  private _valueSchema = new DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference(this, "value_schema");
  public get valueSchema() {
    return this._valueSchema;
  }
}

export class DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference {
    return new DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_kafka_configs databricks_feature_engineering_kafka_configs}
*/
export class DataDatabricksFeatureEngineeringKafkaConfigs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_feature_engineering_kafka_configs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksFeatureEngineeringKafkaConfigs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksFeatureEngineeringKafkaConfigs to import
  * @param importFromId The id of the existing DataDatabricksFeatureEngineeringKafkaConfigs that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_kafka_configs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksFeatureEngineeringKafkaConfigs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_feature_engineering_kafka_configs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/data-sources/feature_engineering_kafka_configs databricks_feature_engineering_kafka_configs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksFeatureEngineeringKafkaConfigsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksFeatureEngineeringKafkaConfigsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_feature_engineering_kafka_configs',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.99.0',
        providerVersionConstraint: '1.99.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._pageSize = config.pageSize;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // kafka_configs - computed: true, optional: false, required: false
  private _kafkaConfigs = new DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList(this, "kafka_configs", false);
  public get kafkaConfigs() {
    return this._kafkaConfigs;
  }

  // page_size - computed: false, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      page_size: cdktf.numberToTerraform(this._pageSize),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      page_size: {
        value: cdktf.numberToHclTerraform(this._pageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
