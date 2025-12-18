// https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/data-sources/cluster_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataConfluentClusterLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Cluster Link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/data-sources/cluster_link#link_name DataConfluentClusterLink#link_name}
  */
  readonly linkName: string;
  /**
  * The REST endpoint of the Kafka cluster (e.g., `https://pkc-00000.us-central1.gcp.confluent.cloud:443`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/data-sources/cluster_link#rest_endpoint DataConfluentClusterLink#rest_endpoint}
  */
  readonly restEndpoint?: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/data-sources/cluster_link#credentials DataConfluentClusterLink#credentials}
  */
  readonly credentials?: DataConfluentClusterLinkCredentials;
  /**
  * kafka_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/data-sources/cluster_link#kafka_cluster DataConfluentClusterLink#kafka_cluster}
  */
  readonly kafkaCluster?: DataConfluentClusterLinkKafkaCluster;
}
export interface DataConfluentClusterLinkCredentials {
  /**
  * The Cluster API Key for your Confluent Cloud cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/data-sources/cluster_link#key DataConfluentClusterLink#key}
  */
  readonly key: string;
  /**
  * The Cluster API Secret for your Confluent Cloud cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/data-sources/cluster_link#secret DataConfluentClusterLink#secret}
  */
  readonly secret: string;
}

export function dataConfluentClusterLinkCredentialsToTerraform(struct?: DataConfluentClusterLinkCredentialsOutputReference | DataConfluentClusterLinkCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function dataConfluentClusterLinkCredentialsToHclTerraform(struct?: DataConfluentClusterLinkCredentialsOutputReference | DataConfluentClusterLinkCredentials): any {
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

export class DataConfluentClusterLinkCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataConfluentClusterLinkCredentials | undefined {
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

  public set internalValue(value: DataConfluentClusterLinkCredentials | undefined) {
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
export interface DataConfluentClusterLinkKafkaCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/data-sources/cluster_link#id DataConfluentClusterLink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataConfluentClusterLinkKafkaClusterToTerraform(struct?: DataConfluentClusterLinkKafkaClusterOutputReference | DataConfluentClusterLinkKafkaCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataConfluentClusterLinkKafkaClusterToHclTerraform(struct?: DataConfluentClusterLinkKafkaClusterOutputReference | DataConfluentClusterLinkKafkaCluster): any {
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

export class DataConfluentClusterLinkKafkaClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataConfluentClusterLinkKafkaCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConfluentClusterLinkKafkaCluster | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/data-sources/cluster_link confluent_cluster_link}
*/
export class DataConfluentClusterLink extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluent_cluster_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataConfluentClusterLink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataConfluentClusterLink to import
  * @param importFromId The id of the existing DataConfluentClusterLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/data-sources/cluster_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataConfluentClusterLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluent_cluster_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/data-sources/cluster_link confluent_cluster_link} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataConfluentClusterLinkConfig
  */
  public constructor(scope: Construct, id: string, config: DataConfluentClusterLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'confluent_cluster_link',
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
    this._linkName = config.linkName;
    this._restEndpoint = config.restEndpoint;
    this._credentials.internalValue = config.credentials;
    this._kafkaCluster.internalValue = config.kafkaCluster;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_link_id - computed: true, optional: false, required: false
  public get clusterLinkId() {
    return this.getStringAttribute('cluster_link_id');
  }

  // config - computed: true, optional: false, required: false
  private _config = new cdktf.StringMap(this, "config");
  public get config() {
    return this._config;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // link_name - computed: false, optional: false, required: true
  private _linkName?: string; 
  public get linkName() {
    return this.getStringAttribute('link_name');
  }
  public set linkName(value: string) {
    this._linkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkNameInput() {
    return this._linkName;
  }

  // link_state - computed: true, optional: false, required: false
  public get linkState() {
    return this.getStringAttribute('link_state');
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
  private _credentials = new DataConfluentClusterLinkCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DataConfluentClusterLinkCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // kafka_cluster - computed: false, optional: true, required: false
  private _kafkaCluster = new DataConfluentClusterLinkKafkaClusterOutputReference(this, "kafka_cluster");
  public get kafkaCluster() {
    return this._kafkaCluster;
  }
  public putKafkaCluster(value: DataConfluentClusterLinkKafkaCluster) {
    this._kafkaCluster.internalValue = value;
  }
  public resetKafkaCluster() {
    this._kafkaCluster.internalValue = undefined;
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
      link_name: cdktf.stringToTerraform(this._linkName),
      rest_endpoint: cdktf.stringToTerraform(this._restEndpoint),
      credentials: dataConfluentClusterLinkCredentialsToTerraform(this._credentials.internalValue),
      kafka_cluster: dataConfluentClusterLinkKafkaClusterToTerraform(this._kafkaCluster.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      link_name: {
        value: cdktf.stringToHclTerraform(this._linkName),
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
        value: dataConfluentClusterLinkCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataConfluentClusterLinkCredentialsList",
      },
      kafka_cluster: {
        value: dataConfluentClusterLinkKafkaClusterToHclTerraform(this._kafkaCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataConfluentClusterLinkKafkaClusterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
