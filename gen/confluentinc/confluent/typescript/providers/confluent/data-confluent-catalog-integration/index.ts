// https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/data-sources/catalog_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataConfluentCatalogIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Catalog Integration, for example, `tci-abc123`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/data-sources/catalog_integration#id DataConfluentCatalogIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/data-sources/catalog_integration#credentials DataConfluentCatalogIntegration#credentials}
  */
  readonly credentials?: DataConfluentCatalogIntegrationCredentials;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/data-sources/catalog_integration#environment DataConfluentCatalogIntegration#environment}
  */
  readonly environment: DataConfluentCatalogIntegrationEnvironment;
  /**
  * kafka_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/data-sources/catalog_integration#kafka_cluster DataConfluentCatalogIntegration#kafka_cluster}
  */
  readonly kafkaCluster: DataConfluentCatalogIntegrationKafkaCluster;
}
export interface DataConfluentCatalogIntegrationAwsGlue {
}

export function dataConfluentCatalogIntegrationAwsGlueToTerraform(struct?: DataConfluentCatalogIntegrationAwsGlue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataConfluentCatalogIntegrationAwsGlueToHclTerraform(struct?: DataConfluentCatalogIntegrationAwsGlue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataConfluentCatalogIntegrationAwsGlueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataConfluentCatalogIntegrationAwsGlue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConfluentCatalogIntegrationAwsGlue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // provider_integration_id - computed: true, optional: false, required: false
  public get providerIntegrationId() {
    return this.getStringAttribute('provider_integration_id');
  }
}

export class DataConfluentCatalogIntegrationAwsGlueList extends cdktf.ComplexList {

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
  public get(index: number): DataConfluentCatalogIntegrationAwsGlueOutputReference {
    return new DataConfluentCatalogIntegrationAwsGlueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataConfluentCatalogIntegrationSnowflake {
}

export function dataConfluentCatalogIntegrationSnowflakeToTerraform(struct?: DataConfluentCatalogIntegrationSnowflake): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataConfluentCatalogIntegrationSnowflakeToHclTerraform(struct?: DataConfluentCatalogIntegrationSnowflake): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataConfluentCatalogIntegrationSnowflakeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataConfluentCatalogIntegrationSnowflake | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConfluentCatalogIntegrationSnowflake | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_scope - computed: true, optional: false, required: false
  public get allowedScope() {
    return this.getStringAttribute('allowed_scope');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // warehouse - computed: true, optional: false, required: false
  public get warehouse() {
    return this.getStringAttribute('warehouse');
  }
}

export class DataConfluentCatalogIntegrationSnowflakeList extends cdktf.ComplexList {

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
  public get(index: number): DataConfluentCatalogIntegrationSnowflakeOutputReference {
    return new DataConfluentCatalogIntegrationSnowflakeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataConfluentCatalogIntegrationCredentials {
  /**
  * The Cluster API Key for your Confluent Cloud cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/data-sources/catalog_integration#key DataConfluentCatalogIntegration#key}
  */
  readonly key: string;
  /**
  * The Cluster API Secret for your Confluent Cloud cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/data-sources/catalog_integration#secret DataConfluentCatalogIntegration#secret}
  */
  readonly secret: string;
}

export function dataConfluentCatalogIntegrationCredentialsToTerraform(struct?: DataConfluentCatalogIntegrationCredentialsOutputReference | DataConfluentCatalogIntegrationCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function dataConfluentCatalogIntegrationCredentialsToHclTerraform(struct?: DataConfluentCatalogIntegrationCredentialsOutputReference | DataConfluentCatalogIntegrationCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataConfluentCatalogIntegrationCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataConfluentCatalogIntegrationCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConfluentCatalogIntegrationCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._secret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._secret = value.secret;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}
export interface DataConfluentCatalogIntegrationEnvironment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/data-sources/catalog_integration#id DataConfluentCatalogIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataConfluentCatalogIntegrationEnvironmentToTerraform(struct?: DataConfluentCatalogIntegrationEnvironmentOutputReference | DataConfluentCatalogIntegrationEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataConfluentCatalogIntegrationEnvironmentToHclTerraform(struct?: DataConfluentCatalogIntegrationEnvironmentOutputReference | DataConfluentCatalogIntegrationEnvironment): any {
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

export class DataConfluentCatalogIntegrationEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataConfluentCatalogIntegrationEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConfluentCatalogIntegrationEnvironment | undefined) {
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
export interface DataConfluentCatalogIntegrationKafkaCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/data-sources/catalog_integration#id DataConfluentCatalogIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataConfluentCatalogIntegrationKafkaClusterToTerraform(struct?: DataConfluentCatalogIntegrationKafkaClusterOutputReference | DataConfluentCatalogIntegrationKafkaCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataConfluentCatalogIntegrationKafkaClusterToHclTerraform(struct?: DataConfluentCatalogIntegrationKafkaClusterOutputReference | DataConfluentCatalogIntegrationKafkaCluster): any {
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

export class DataConfluentCatalogIntegrationKafkaClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataConfluentCatalogIntegrationKafkaCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConfluentCatalogIntegrationKafkaCluster | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/data-sources/catalog_integration confluent_catalog_integration}
*/
export class DataConfluentCatalogIntegration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluent_catalog_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataConfluentCatalogIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataConfluentCatalogIntegration to import
  * @param importFromId The id of the existing DataConfluentCatalogIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/data-sources/catalog_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataConfluentCatalogIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluent_catalog_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/data-sources/catalog_integration confluent_catalog_integration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataConfluentCatalogIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: DataConfluentCatalogIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'confluent_catalog_integration',
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
    this._id = config.id;
    this._credentials.internalValue = config.credentials;
    this._environment.internalValue = config.environment;
    this._kafkaCluster.internalValue = config.kafkaCluster;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_glue - computed: true, optional: false, required: false
  private _awsGlue = new DataConfluentCatalogIntegrationAwsGlueList(this, "aws_glue", false);
  public get awsGlue() {
    return this._awsGlue;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // snowflake - computed: true, optional: false, required: false
  private _snowflake = new DataConfluentCatalogIntegrationSnowflakeList(this, "snowflake", false);
  public get snowflake() {
    return this._snowflake;
  }

  // suspended - computed: true, optional: false, required: false
  public get suspended() {
    return this.getBooleanAttribute('suspended');
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new DataConfluentCatalogIntegrationCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DataConfluentCatalogIntegrationCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // environment - computed: false, optional: false, required: true
  private _environment = new DataConfluentCatalogIntegrationEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: DataConfluentCatalogIntegrationEnvironment) {
    this._environment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // kafka_cluster - computed: false, optional: false, required: true
  private _kafkaCluster = new DataConfluentCatalogIntegrationKafkaClusterOutputReference(this, "kafka_cluster");
  public get kafkaCluster() {
    return this._kafkaCluster;
  }
  public putKafkaCluster(value: DataConfluentCatalogIntegrationKafkaCluster) {
    this._kafkaCluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaClusterInput() {
    return this._kafkaCluster.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      credentials: dataConfluentCatalogIntegrationCredentialsToTerraform(this._credentials.internalValue),
      environment: dataConfluentCatalogIntegrationEnvironmentToTerraform(this._environment.internalValue),
      kafka_cluster: dataConfluentCatalogIntegrationKafkaClusterToTerraform(this._kafkaCluster.internalValue),
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
      credentials: {
        value: dataConfluentCatalogIntegrationCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataConfluentCatalogIntegrationCredentialsList",
      },
      environment: {
        value: dataConfluentCatalogIntegrationEnvironmentToHclTerraform(this._environment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataConfluentCatalogIntegrationEnvironmentList",
      },
      kafka_cluster: {
        value: dataConfluentCatalogIntegrationKafkaClusterToHclTerraform(this._kafkaCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataConfluentCatalogIntegrationKafkaClusterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
