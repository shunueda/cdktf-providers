// https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/data-sources/schema_registry_cluster_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataConfluentSchemaRegistryClusterConfigAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/data-sources/schema_registry_cluster_config#id DataConfluentSchemaRegistryClusterConfigA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The REST endpoint of the Schema Registry cluster, for example, `https://psrc-00000.us-central1.gcp.confluent.cloud:443`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/data-sources/schema_registry_cluster_config#rest_endpoint DataConfluentSchemaRegistryClusterConfigA#rest_endpoint}
  */
  readonly restEndpoint?: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/data-sources/schema_registry_cluster_config#credentials DataConfluentSchemaRegistryClusterConfigA#credentials}
  */
  readonly credentials?: DataConfluentSchemaRegistryClusterConfigCredentials;
  /**
  * schema_registry_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/data-sources/schema_registry_cluster_config#schema_registry_cluster DataConfluentSchemaRegistryClusterConfigA#schema_registry_cluster}
  */
  readonly schemaRegistryCluster?: DataConfluentSchemaRegistryClusterConfigSchemaRegistryCluster;
}
export interface DataConfluentSchemaRegistryClusterConfigCredentials {
  /**
  * The Cluster API Key for your Confluent Cloud cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/data-sources/schema_registry_cluster_config#key DataConfluentSchemaRegistryClusterConfigA#key}
  */
  readonly key: string;
  /**
  * The Cluster API Secret for your Confluent Cloud cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/data-sources/schema_registry_cluster_config#secret DataConfluentSchemaRegistryClusterConfigA#secret}
  */
  readonly secret: string;
}

export function dataConfluentSchemaRegistryClusterConfigCredentialsToTerraform(struct?: DataConfluentSchemaRegistryClusterConfigCredentialsOutputReference | DataConfluentSchemaRegistryClusterConfigCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function dataConfluentSchemaRegistryClusterConfigCredentialsToHclTerraform(struct?: DataConfluentSchemaRegistryClusterConfigCredentialsOutputReference | DataConfluentSchemaRegistryClusterConfigCredentials): any {
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

export class DataConfluentSchemaRegistryClusterConfigCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataConfluentSchemaRegistryClusterConfigCredentials | undefined {
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

  public set internalValue(value: DataConfluentSchemaRegistryClusterConfigCredentials | undefined) {
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
export interface DataConfluentSchemaRegistryClusterConfigSchemaRegistryCluster {
  /**
  * The Schema Registry cluster ID (e.g., `lsrc-abc123`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/data-sources/schema_registry_cluster_config#id DataConfluentSchemaRegistryClusterConfigA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataConfluentSchemaRegistryClusterConfigSchemaRegistryClusterToTerraform(struct?: DataConfluentSchemaRegistryClusterConfigSchemaRegistryClusterOutputReference | DataConfluentSchemaRegistryClusterConfigSchemaRegistryCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataConfluentSchemaRegistryClusterConfigSchemaRegistryClusterToHclTerraform(struct?: DataConfluentSchemaRegistryClusterConfigSchemaRegistryClusterOutputReference | DataConfluentSchemaRegistryClusterConfigSchemaRegistryCluster): any {
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

export class DataConfluentSchemaRegistryClusterConfigSchemaRegistryClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataConfluentSchemaRegistryClusterConfigSchemaRegistryCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConfluentSchemaRegistryClusterConfigSchemaRegistryCluster | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/data-sources/schema_registry_cluster_config confluent_schema_registry_cluster_config}
*/
export class DataConfluentSchemaRegistryClusterConfigA extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluent_schema_registry_cluster_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataConfluentSchemaRegistryClusterConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataConfluentSchemaRegistryClusterConfigA to import
  * @param importFromId The id of the existing DataConfluentSchemaRegistryClusterConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/data-sources/schema_registry_cluster_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataConfluentSchemaRegistryClusterConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluent_schema_registry_cluster_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/data-sources/schema_registry_cluster_config confluent_schema_registry_cluster_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataConfluentSchemaRegistryClusterConfigAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataConfluentSchemaRegistryClusterConfigAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'confluent_schema_registry_cluster_config',
      terraformGeneratorMetadata: {
        providerName: 'confluent',
        providerVersion: '2.53.0',
        providerVersionConstraint: '2.53.0'
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
    this._restEndpoint = config.restEndpoint;
    this._credentials.internalValue = config.credentials;
    this._schemaRegistryCluster.internalValue = config.schemaRegistryCluster;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compatibility_group - computed: true, optional: false, required: false
  public get compatibilityGroup() {
    return this.getStringAttribute('compatibility_group');
  }

  // compatibility_level - computed: true, optional: false, required: false
  public get compatibilityLevel() {
    return this.getStringAttribute('compatibility_level');
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

  // rest_endpoint - computed: false, optional: true, required: false
  private _restEndpoint?: string; 
  public get restEndpoint() {
    return this.getStringAttribute('rest_endpoint');
  }
  public set restEndpoint(value: string) {
    this._restEndpoint = value;
  }
  public resetRestEndpoint() {
    this._restEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restEndpointInput() {
    return this._restEndpoint;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new DataConfluentSchemaRegistryClusterConfigCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DataConfluentSchemaRegistryClusterConfigCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // schema_registry_cluster - computed: false, optional: true, required: false
  private _schemaRegistryCluster = new DataConfluentSchemaRegistryClusterConfigSchemaRegistryClusterOutputReference(this, "schema_registry_cluster");
  public get schemaRegistryCluster() {
    return this._schemaRegistryCluster;
  }
  public putSchemaRegistryCluster(value: DataConfluentSchemaRegistryClusterConfigSchemaRegistryCluster) {
    this._schemaRegistryCluster.internalValue = value;
  }
  public resetSchemaRegistryCluster() {
    this._schemaRegistryCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryClusterInput() {
    return this._schemaRegistryCluster.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      rest_endpoint: cdktf.stringToTerraform(this._restEndpoint),
      credentials: dataConfluentSchemaRegistryClusterConfigCredentialsToTerraform(this._credentials.internalValue),
      schema_registry_cluster: dataConfluentSchemaRegistryClusterConfigSchemaRegistryClusterToTerraform(this._schemaRegistryCluster.internalValue),
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
      rest_endpoint: {
        value: cdktf.stringToHclTerraform(this._restEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials: {
        value: dataConfluentSchemaRegistryClusterConfigCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataConfluentSchemaRegistryClusterConfigCredentialsList",
      },
      schema_registry_cluster: {
        value: dataConfluentSchemaRegistryClusterConfigSchemaRegistryClusterToHclTerraform(this._schemaRegistryCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataConfluentSchemaRegistryClusterConfigSchemaRegistryClusterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
