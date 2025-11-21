// https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * The custom cluster link settings to set (e.g., `"acl.sync.ms" = "5100"`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link#config ClusterLink#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * The connection mode of the Cluster Link. Defaults to `OUTBOUND`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link#connection_mode ClusterLink#connection_mode}
  */
  readonly connectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link#id ClusterLink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The mode of the Cluster Link. Defaults to `DESTINATION`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link#link_mode ClusterLink#link_mode}
  */
  readonly linkMode?: string;
  /**
  * The name of the Cluster Link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link#link_name ClusterLink#link_name}
  */
  readonly linkName: string;
  /**
  * destination_kafka_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link#destination_kafka_cluster ClusterLink#destination_kafka_cluster}
  */
  readonly destinationKafkaCluster?: ClusterLinkDestinationKafkaCluster;
  /**
  * local_kafka_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link#local_kafka_cluster ClusterLink#local_kafka_cluster}
  */
  readonly localKafkaCluster?: ClusterLinkLocalKafkaCluster;
  /**
  * remote_kafka_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link#remote_kafka_cluster ClusterLink#remote_kafka_cluster}
  */
  readonly remoteKafkaCluster?: ClusterLinkRemoteKafkaCluster;
  /**
  * source_kafka_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link#source_kafka_cluster ClusterLink#source_kafka_cluster}
  */
  readonly sourceKafkaCluster?: ClusterLinkSourceKafkaCluster;
}
export interface ClusterLinkDestinationKafkaClusterCredentials {
  /**
  * The Kafka API Key for your Confluent Cloud cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link#key ClusterLink#key}
  */
  readonly key: string;
  /**
  * The Kafka API Secret for your Confluent Cloud cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link#secret ClusterLink#secret}
  */
  readonly secret: string;
}

export function clusterLinkDestinationKafkaClusterCredentialsToTerraform(struct?: ClusterLinkDestinationKafkaClusterCredentialsOutputReference | ClusterLinkDestinationKafkaClusterCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function clusterLinkDestinationKafkaClusterCredentialsToHclTerraform(struct?: ClusterLinkDestinationKafkaClusterCredentialsOutputReference | ClusterLinkDestinationKafkaClusterCredentials): any {
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

export class ClusterLinkDestinationKafkaClusterCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterLinkDestinationKafkaClusterCredentials | undefined {
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

  public set internalValue(value: ClusterLinkDestinationKafkaClusterCredentials | undefined) {
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
export interface ClusterLinkDestinationKafkaCluster {
  /**
  * The bootstrap endpoint used by Kafka clients to connect to the Kafka cluster. (e.g., `SASL_SSL://pkc-00000.us-central1.gcp.confluent.cloud:9092` or `pkc-00000.us-central1.gcp.confluent.cloud:9092`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link#bootstrap_endpoint ClusterLink#bootstrap_endpoint}
  */
  readonly bootstrapEndpoint?: string;
  /**
  * The unique identifier for the referred Kafka cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link#id ClusterLink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The REST endpoint of the Kafka cluster (e.g., `https://pkc-00000.us-central1.gcp.confluent.cloud:443`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link#rest_endpoint ClusterLink#rest_endpoint}
  */
  readonly restEndpoint?: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link#credentials ClusterLink#credentials}
  */
  readonly credentials?: ClusterLinkDestinationKafkaClusterCredentials;
}

export function clusterLinkDestinationKafkaClusterToTerraform(struct?: ClusterLinkDestinationKafkaClusterOutputReference | ClusterLinkDestinationKafkaCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bootstrap_endpoint: cdktf.stringToTerraform(struct!.bootstrapEndpoint),
    id: cdktf.stringToTerraform(struct!.id),
    rest_endpoint: cdktf.stringToTerraform(struct!.restEndpoint),
    credentials: clusterLinkDestinationKafkaClusterCredentialsToTerraform(struct!.credentials),
  }
}


export function clusterLinkDestinationKafkaClusterToHclTerraform(struct?: ClusterLinkDestinationKafkaClusterOutputReference | ClusterLinkDestinationKafkaCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bootstrap_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.bootstrapEndpoint),
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
    rest_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.restEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: clusterLinkDestinationKafkaClusterCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterLinkDestinationKafkaClusterCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterLinkDestinationKafkaClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterLinkDestinationKafkaCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootstrapEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapEndpoint = this._bootstrapEndpoint;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._restEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.restEndpoint = this._restEndpoint;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterLinkDestinationKafkaCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootstrapEndpoint = undefined;
      this._id = undefined;
      this._restEndpoint = undefined;
      this._credentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootstrapEndpoint = value.bootstrapEndpoint;
      this._id = value.id;
      this._restEndpoint = value.restEndpoint;
      this._credentials.internalValue = value.credentials;
    }
  }

  // bootstrap_endpoint - computed: false, optional: true, required: false
  private _bootstrapEndpoint?: string; 
  public get bootstrapEndpoint() {
    return this.getStringAttribute('bootstrap_endpoint');
  }
  public set bootstrapEndpoint(value: string) {
    this._bootstrapEndpoint = value;
  }
  public resetBootstrapEndpoint() {
    this._bootstrapEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapEndpointInput() {
    return this._bootstrapEndpoint;
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
  private _credentials = new ClusterLinkDestinationKafkaClusterCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: ClusterLinkDestinationKafkaClusterCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }
}
export interface ClusterLinkLocalKafkaClusterCredentials {
  /**
  * The Kafka API Key for your Confluent Cloud cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link#key ClusterLink#key}
  */
  readonly key: string;
  /**
  * The Kafka API Secret for your Confluent Cloud cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link#secret ClusterLink#secret}
  */
  readonly secret: string;
}

export function clusterLinkLocalKafkaClusterCredentialsToTerraform(struct?: ClusterLinkLocalKafkaClusterCredentialsOutputReference | ClusterLinkLocalKafkaClusterCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function clusterLinkLocalKafkaClusterCredentialsToHclTerraform(struct?: ClusterLinkLocalKafkaClusterCredentialsOutputReference | ClusterLinkLocalKafkaClusterCredentials): any {
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

export class ClusterLinkLocalKafkaClusterCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterLinkLocalKafkaClusterCredentials | undefined {
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

  public set internalValue(value: ClusterLinkLocalKafkaClusterCredentials | undefined) {
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
export interface ClusterLinkLocalKafkaCluster {
  /**
  * The bootstrap endpoint used by Kafka clients to connect to the Kafka cluster. (e.g., `SASL_SSL://pkc-00000.us-central1.gcp.confluent.cloud:9092` or `pkc-00000.us-central1.gcp.confluent.cloud:9092`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link#bootstrap_endpoint ClusterLink#bootstrap_endpoint}
  */
  readonly bootstrapEndpoint?: string;
  /**
  * The unique identifier for the referred Kafka cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link#id ClusterLink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The REST endpoint of the Kafka cluster (e.g., `https://pkc-00000.us-central1.gcp.confluent.cloud:443`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link#rest_endpoint ClusterLink#rest_endpoint}
  */
  readonly restEndpoint?: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link#credentials ClusterLink#credentials}
  */
  readonly credentials?: ClusterLinkLocalKafkaClusterCredentials;
}

export function clusterLinkLocalKafkaClusterToTerraform(struct?: ClusterLinkLocalKafkaClusterOutputReference | ClusterLinkLocalKafkaCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bootstrap_endpoint: cdktf.stringToTerraform(struct!.bootstrapEndpoint),
    id: cdktf.stringToTerraform(struct!.id),
    rest_endpoint: cdktf.stringToTerraform(struct!.restEndpoint),
    credentials: clusterLinkLocalKafkaClusterCredentialsToTerraform(struct!.credentials),
  }
}


export function clusterLinkLocalKafkaClusterToHclTerraform(struct?: ClusterLinkLocalKafkaClusterOutputReference | ClusterLinkLocalKafkaCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bootstrap_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.bootstrapEndpoint),
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
    rest_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.restEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: clusterLinkLocalKafkaClusterCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterLinkLocalKafkaClusterCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterLinkLocalKafkaClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterLinkLocalKafkaCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootstrapEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapEndpoint = this._bootstrapEndpoint;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._restEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.restEndpoint = this._restEndpoint;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterLinkLocalKafkaCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootstrapEndpoint = undefined;
      this._id = undefined;
      this._restEndpoint = undefined;
      this._credentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootstrapEndpoint = value.bootstrapEndpoint;
      this._id = value.id;
      this._restEndpoint = value.restEndpoint;
      this._credentials.internalValue = value.credentials;
    }
  }

  // bootstrap_endpoint - computed: false, optional: true, required: false
  private _bootstrapEndpoint?: string; 
  public get bootstrapEndpoint() {
    return this.getStringAttribute('bootstrap_endpoint');
  }
  public set bootstrapEndpoint(value: string) {
    this._bootstrapEndpoint = value;
  }
  public resetBootstrapEndpoint() {
    this._bootstrapEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapEndpointInput() {
    return this._bootstrapEndpoint;
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
  private _credentials = new ClusterLinkLocalKafkaClusterCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: ClusterLinkLocalKafkaClusterCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }
}
export interface ClusterLinkRemoteKafkaClusterCredentials {
  /**
  * The Kafka API Key for your Confluent Cloud cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link#key ClusterLink#key}
  */
  readonly key: string;
  /**
  * The Kafka API Secret for your Confluent Cloud cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link#secret ClusterLink#secret}
  */
  readonly secret: string;
}

export function clusterLinkRemoteKafkaClusterCredentialsToTerraform(struct?: ClusterLinkRemoteKafkaClusterCredentialsOutputReference | ClusterLinkRemoteKafkaClusterCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function clusterLinkRemoteKafkaClusterCredentialsToHclTerraform(struct?: ClusterLinkRemoteKafkaClusterCredentialsOutputReference | ClusterLinkRemoteKafkaClusterCredentials): any {
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

export class ClusterLinkRemoteKafkaClusterCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterLinkRemoteKafkaClusterCredentials | undefined {
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

  public set internalValue(value: ClusterLinkRemoteKafkaClusterCredentials | undefined) {
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
export interface ClusterLinkRemoteKafkaCluster {
  /**
  * The bootstrap endpoint used by Kafka clients to connect to the Kafka cluster. (e.g., `SASL_SSL://pkc-00000.us-central1.gcp.confluent.cloud:9092` or `pkc-00000.us-central1.gcp.confluent.cloud:9092`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link#bootstrap_endpoint ClusterLink#bootstrap_endpoint}
  */
  readonly bootstrapEndpoint?: string;
  /**
  * The unique identifier for the referred Kafka cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link#id ClusterLink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The REST endpoint of the Kafka cluster (e.g., `https://pkc-00000.us-central1.gcp.confluent.cloud:443`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link#rest_endpoint ClusterLink#rest_endpoint}
  */
  readonly restEndpoint?: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link#credentials ClusterLink#credentials}
  */
  readonly credentials?: ClusterLinkRemoteKafkaClusterCredentials;
}

export function clusterLinkRemoteKafkaClusterToTerraform(struct?: ClusterLinkRemoteKafkaClusterOutputReference | ClusterLinkRemoteKafkaCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bootstrap_endpoint: cdktf.stringToTerraform(struct!.bootstrapEndpoint),
    id: cdktf.stringToTerraform(struct!.id),
    rest_endpoint: cdktf.stringToTerraform(struct!.restEndpoint),
    credentials: clusterLinkRemoteKafkaClusterCredentialsToTerraform(struct!.credentials),
  }
}


export function clusterLinkRemoteKafkaClusterToHclTerraform(struct?: ClusterLinkRemoteKafkaClusterOutputReference | ClusterLinkRemoteKafkaCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bootstrap_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.bootstrapEndpoint),
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
    rest_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.restEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: clusterLinkRemoteKafkaClusterCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterLinkRemoteKafkaClusterCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterLinkRemoteKafkaClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterLinkRemoteKafkaCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootstrapEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapEndpoint = this._bootstrapEndpoint;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._restEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.restEndpoint = this._restEndpoint;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterLinkRemoteKafkaCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootstrapEndpoint = undefined;
      this._id = undefined;
      this._restEndpoint = undefined;
      this._credentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootstrapEndpoint = value.bootstrapEndpoint;
      this._id = value.id;
      this._restEndpoint = value.restEndpoint;
      this._credentials.internalValue = value.credentials;
    }
  }

  // bootstrap_endpoint - computed: false, optional: true, required: false
  private _bootstrapEndpoint?: string; 
  public get bootstrapEndpoint() {
    return this.getStringAttribute('bootstrap_endpoint');
  }
  public set bootstrapEndpoint(value: string) {
    this._bootstrapEndpoint = value;
  }
  public resetBootstrapEndpoint() {
    this._bootstrapEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapEndpointInput() {
    return this._bootstrapEndpoint;
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
  private _credentials = new ClusterLinkRemoteKafkaClusterCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: ClusterLinkRemoteKafkaClusterCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }
}
export interface ClusterLinkSourceKafkaClusterCredentials {
  /**
  * The Kafka API Key for your Confluent Cloud cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link#key ClusterLink#key}
  */
  readonly key: string;
  /**
  * The Kafka API Secret for your Confluent Cloud cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link#secret ClusterLink#secret}
  */
  readonly secret: string;
}

export function clusterLinkSourceKafkaClusterCredentialsToTerraform(struct?: ClusterLinkSourceKafkaClusterCredentialsOutputReference | ClusterLinkSourceKafkaClusterCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function clusterLinkSourceKafkaClusterCredentialsToHclTerraform(struct?: ClusterLinkSourceKafkaClusterCredentialsOutputReference | ClusterLinkSourceKafkaClusterCredentials): any {
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

export class ClusterLinkSourceKafkaClusterCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterLinkSourceKafkaClusterCredentials | undefined {
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

  public set internalValue(value: ClusterLinkSourceKafkaClusterCredentials | undefined) {
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
export interface ClusterLinkSourceKafkaCluster {
  /**
  * The bootstrap endpoint used by Kafka clients to connect to the Kafka cluster. (e.g., `SASL_SSL://pkc-00000.us-central1.gcp.confluent.cloud:9092` or `pkc-00000.us-central1.gcp.confluent.cloud:9092`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link#bootstrap_endpoint ClusterLink#bootstrap_endpoint}
  */
  readonly bootstrapEndpoint?: string;
  /**
  * The unique identifier for the referred Kafka cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link#id ClusterLink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The REST endpoint of the Kafka cluster (e.g., `https://pkc-00000.us-central1.gcp.confluent.cloud:443`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link#rest_endpoint ClusterLink#rest_endpoint}
  */
  readonly restEndpoint?: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link#credentials ClusterLink#credentials}
  */
  readonly credentials?: ClusterLinkSourceKafkaClusterCredentials;
}

export function clusterLinkSourceKafkaClusterToTerraform(struct?: ClusterLinkSourceKafkaClusterOutputReference | ClusterLinkSourceKafkaCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bootstrap_endpoint: cdktf.stringToTerraform(struct!.bootstrapEndpoint),
    id: cdktf.stringToTerraform(struct!.id),
    rest_endpoint: cdktf.stringToTerraform(struct!.restEndpoint),
    credentials: clusterLinkSourceKafkaClusterCredentialsToTerraform(struct!.credentials),
  }
}


export function clusterLinkSourceKafkaClusterToHclTerraform(struct?: ClusterLinkSourceKafkaClusterOutputReference | ClusterLinkSourceKafkaCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bootstrap_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.bootstrapEndpoint),
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
    rest_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.restEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: clusterLinkSourceKafkaClusterCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterLinkSourceKafkaClusterCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterLinkSourceKafkaClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterLinkSourceKafkaCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootstrapEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapEndpoint = this._bootstrapEndpoint;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._restEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.restEndpoint = this._restEndpoint;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterLinkSourceKafkaCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootstrapEndpoint = undefined;
      this._id = undefined;
      this._restEndpoint = undefined;
      this._credentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootstrapEndpoint = value.bootstrapEndpoint;
      this._id = value.id;
      this._restEndpoint = value.restEndpoint;
      this._credentials.internalValue = value.credentials;
    }
  }

  // bootstrap_endpoint - computed: false, optional: true, required: false
  private _bootstrapEndpoint?: string; 
  public get bootstrapEndpoint() {
    return this.getStringAttribute('bootstrap_endpoint');
  }
  public set bootstrapEndpoint(value: string) {
    this._bootstrapEndpoint = value;
  }
  public resetBootstrapEndpoint() {
    this._bootstrapEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapEndpointInput() {
    return this._bootstrapEndpoint;
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
  private _credentials = new ClusterLinkSourceKafkaClusterCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: ClusterLinkSourceKafkaClusterCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link confluent_cluster_link}
*/
export class ClusterLink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluent_cluster_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterLink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterLink to import
  * @param importFromId The id of the existing ClusterLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluent_cluster_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/cluster_link confluent_cluster_link} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterLinkConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'confluent_cluster_link',
      terraformGeneratorMetadata: {
        providerName: 'confluent',
        providerVersion: '2.54.0',
        providerVersionConstraint: '2.54.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config = config.config;
    this._connectionMode = config.connectionMode;
    this._id = config.id;
    this._linkMode = config.linkMode;
    this._linkName = config.linkName;
    this._destinationKafkaCluster.internalValue = config.destinationKafkaCluster;
    this._localKafkaCluster.internalValue = config.localKafkaCluster;
    this._remoteKafkaCluster.internalValue = config.remoteKafkaCluster;
    this._sourceKafkaCluster.internalValue = config.sourceKafkaCluster;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_link_id - computed: true, optional: false, required: false
  public get clusterLinkId() {
    return this.getStringAttribute('cluster_link_id');
  }

  // config - computed: true, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // connection_mode - computed: false, optional: true, required: false
  private _connectionMode?: string; 
  public get connectionMode() {
    return this.getStringAttribute('connection_mode');
  }
  public set connectionMode(value: string) {
    this._connectionMode = value;
  }
  public resetConnectionMode() {
    this._connectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionModeInput() {
    return this._connectionMode;
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

  // link_mode - computed: false, optional: true, required: false
  private _linkMode?: string; 
  public get linkMode() {
    return this.getStringAttribute('link_mode');
  }
  public set linkMode(value: string) {
    this._linkMode = value;
  }
  public resetLinkMode() {
    this._linkMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkModeInput() {
    return this._linkMode;
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

  // destination_kafka_cluster - computed: false, optional: true, required: false
  private _destinationKafkaCluster = new ClusterLinkDestinationKafkaClusterOutputReference(this, "destination_kafka_cluster");
  public get destinationKafkaCluster() {
    return this._destinationKafkaCluster;
  }
  public putDestinationKafkaCluster(value: ClusterLinkDestinationKafkaCluster) {
    this._destinationKafkaCluster.internalValue = value;
  }
  public resetDestinationKafkaCluster() {
    this._destinationKafkaCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationKafkaClusterInput() {
    return this._destinationKafkaCluster.internalValue;
  }

  // local_kafka_cluster - computed: false, optional: true, required: false
  private _localKafkaCluster = new ClusterLinkLocalKafkaClusterOutputReference(this, "local_kafka_cluster");
  public get localKafkaCluster() {
    return this._localKafkaCluster;
  }
  public putLocalKafkaCluster(value: ClusterLinkLocalKafkaCluster) {
    this._localKafkaCluster.internalValue = value;
  }
  public resetLocalKafkaCluster() {
    this._localKafkaCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localKafkaClusterInput() {
    return this._localKafkaCluster.internalValue;
  }

  // remote_kafka_cluster - computed: false, optional: true, required: false
  private _remoteKafkaCluster = new ClusterLinkRemoteKafkaClusterOutputReference(this, "remote_kafka_cluster");
  public get remoteKafkaCluster() {
    return this._remoteKafkaCluster;
  }
  public putRemoteKafkaCluster(value: ClusterLinkRemoteKafkaCluster) {
    this._remoteKafkaCluster.internalValue = value;
  }
  public resetRemoteKafkaCluster() {
    this._remoteKafkaCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteKafkaClusterInput() {
    return this._remoteKafkaCluster.internalValue;
  }

  // source_kafka_cluster - computed: false, optional: true, required: false
  private _sourceKafkaCluster = new ClusterLinkSourceKafkaClusterOutputReference(this, "source_kafka_cluster");
  public get sourceKafkaCluster() {
    return this._sourceKafkaCluster;
  }
  public putSourceKafkaCluster(value: ClusterLinkSourceKafkaCluster) {
    this._sourceKafkaCluster.internalValue = value;
  }
  public resetSourceKafkaCluster() {
    this._sourceKafkaCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceKafkaClusterInput() {
    return this._sourceKafkaCluster.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: cdktf.hashMapper(cdktf.stringToTerraform)(this._config),
      connection_mode: cdktf.stringToTerraform(this._connectionMode),
      id: cdktf.stringToTerraform(this._id),
      link_mode: cdktf.stringToTerraform(this._linkMode),
      link_name: cdktf.stringToTerraform(this._linkName),
      destination_kafka_cluster: clusterLinkDestinationKafkaClusterToTerraform(this._destinationKafkaCluster.internalValue),
      local_kafka_cluster: clusterLinkLocalKafkaClusterToTerraform(this._localKafkaCluster.internalValue),
      remote_kafka_cluster: clusterLinkRemoteKafkaClusterToTerraform(this._remoteKafkaCluster.internalValue),
      source_kafka_cluster: clusterLinkSourceKafkaClusterToTerraform(this._sourceKafkaCluster.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._config),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      connection_mode: {
        value: cdktf.stringToHclTerraform(this._connectionMode),
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
      link_mode: {
        value: cdktf.stringToHclTerraform(this._linkMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_name: {
        value: cdktf.stringToHclTerraform(this._linkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_kafka_cluster: {
        value: clusterLinkDestinationKafkaClusterToHclTerraform(this._destinationKafkaCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterLinkDestinationKafkaClusterList",
      },
      local_kafka_cluster: {
        value: clusterLinkLocalKafkaClusterToHclTerraform(this._localKafkaCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterLinkLocalKafkaClusterList",
      },
      remote_kafka_cluster: {
        value: clusterLinkRemoteKafkaClusterToHclTerraform(this._remoteKafkaCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterLinkRemoteKafkaClusterList",
      },
      source_kafka_cluster: {
        value: clusterLinkSourceKafkaClusterToHclTerraform(this._sourceKafkaCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterLinkSourceKafkaClusterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
