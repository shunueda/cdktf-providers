// https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/kafka_client_quota
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KafkaClientQuotaConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the Kafka Client Quota.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/kafka_client_quota#description KafkaClientQuota#description}
  */
  readonly description?: string;
  /**
  * The name of the Kafka Client Quota.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/kafka_client_quota#display_name KafkaClientQuota#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/kafka_client_quota#id KafkaClientQuota#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of service accounts and identity pools. Special name "default" can be used to represent the default quota for all users and service accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/kafka_client_quota#principals KafkaClientQuota#principals}
  */
  readonly principals: string[];
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/kafka_client_quota#environment KafkaClientQuota#environment}
  */
  readonly environment: KafkaClientQuotaEnvironment;
  /**
  * kafka_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/kafka_client_quota#kafka_cluster KafkaClientQuota#kafka_cluster}
  */
  readonly kafkaCluster: KafkaClientQuotaKafkaCluster;
  /**
  * throughput block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/kafka_client_quota#throughput KafkaClientQuota#throughput}
  */
  readonly throughput: KafkaClientQuotaThroughput;
}
export interface KafkaClientQuotaEnvironment {
  /**
  * The unique identifier for the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/kafka_client_quota#id KafkaClientQuota#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function kafkaClientQuotaEnvironmentToTerraform(struct?: KafkaClientQuotaEnvironmentOutputReference | KafkaClientQuotaEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function kafkaClientQuotaEnvironmentToHclTerraform(struct?: KafkaClientQuotaEnvironmentOutputReference | KafkaClientQuotaEnvironment): any {
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

export class KafkaClientQuotaEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaClientQuotaEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClientQuotaEnvironment | undefined) {
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
export interface KafkaClientQuotaKafkaCluster {
  /**
  * The Kafka cluster ID (e.g., `lkc-12345`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/kafka_client_quota#id KafkaClientQuota#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function kafkaClientQuotaKafkaClusterToTerraform(struct?: KafkaClientQuotaKafkaClusterOutputReference | KafkaClientQuotaKafkaCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function kafkaClientQuotaKafkaClusterToHclTerraform(struct?: KafkaClientQuotaKafkaClusterOutputReference | KafkaClientQuotaKafkaCluster): any {
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

export class KafkaClientQuotaKafkaClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaClientQuotaKafkaCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClientQuotaKafkaCluster | undefined) {
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
export interface KafkaClientQuotaThroughput {
  /**
  * The egress throughput limit in bytes per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/kafka_client_quota#egress_byte_rate KafkaClientQuota#egress_byte_rate}
  */
  readonly egressByteRate: string;
  /**
  * The ingress throughput limit in bytes per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/kafka_client_quota#ingress_byte_rate KafkaClientQuota#ingress_byte_rate}
  */
  readonly ingressByteRate: string;
}

export function kafkaClientQuotaThroughputToTerraform(struct?: KafkaClientQuotaThroughputOutputReference | KafkaClientQuotaThroughput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_byte_rate: cdktf.stringToTerraform(struct!.egressByteRate),
    ingress_byte_rate: cdktf.stringToTerraform(struct!.ingressByteRate),
  }
}


export function kafkaClientQuotaThroughputToHclTerraform(struct?: KafkaClientQuotaThroughputOutputReference | KafkaClientQuotaThroughput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress_byte_rate: {
      value: cdktf.stringToHclTerraform(struct!.egressByteRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_byte_rate: {
      value: cdktf.stringToHclTerraform(struct!.ingressByteRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaClientQuotaThroughputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaClientQuotaThroughput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egressByteRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressByteRate = this._egressByteRate;
    }
    if (this._ingressByteRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressByteRate = this._ingressByteRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClientQuotaThroughput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._egressByteRate = undefined;
      this._ingressByteRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._egressByteRate = value.egressByteRate;
      this._ingressByteRate = value.ingressByteRate;
    }
  }

  // egress_byte_rate - computed: false, optional: false, required: true
  private _egressByteRate?: string; 
  public get egressByteRate() {
    return this.getStringAttribute('egress_byte_rate');
  }
  public set egressByteRate(value: string) {
    this._egressByteRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get egressByteRateInput() {
    return this._egressByteRate;
  }

  // ingress_byte_rate - computed: false, optional: false, required: true
  private _ingressByteRate?: string; 
  public get ingressByteRate() {
    return this.getStringAttribute('ingress_byte_rate');
  }
  public set ingressByteRate(value: string) {
    this._ingressByteRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressByteRateInput() {
    return this._ingressByteRate;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/kafka_client_quota confluent_kafka_client_quota}
*/
export class KafkaClientQuota extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluent_kafka_client_quota";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KafkaClientQuota resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KafkaClientQuota to import
  * @param importFromId The id of the existing KafkaClientQuota that should be imported. Refer to the {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/kafka_client_quota#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KafkaClientQuota to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluent_kafka_client_quota", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/kafka_client_quota confluent_kafka_client_quota} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KafkaClientQuotaConfig
  */
  public constructor(scope: Construct, id: string, config: KafkaClientQuotaConfig) {
    super(scope, id, {
      terraformResourceType: 'confluent_kafka_client_quota',
      terraformGeneratorMetadata: {
        providerName: 'confluent',
        providerVersion: '2.56.0',
        providerVersionConstraint: '2.56.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._principals = config.principals;
    this._environment.internalValue = config.environment;
    this._kafkaCluster.internalValue = config.kafkaCluster;
    this._throughput.internalValue = config.throughput;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // principals - computed: false, optional: false, required: true
  private _principals?: string[]; 
  public get principals() {
    return cdktf.Fn.tolist(this.getListAttribute('principals'));
  }
  public set principals(value: string[]) {
    this._principals = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals;
  }

  // environment - computed: false, optional: false, required: true
  private _environment = new KafkaClientQuotaEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: KafkaClientQuotaEnvironment) {
    this._environment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // kafka_cluster - computed: false, optional: false, required: true
  private _kafkaCluster = new KafkaClientQuotaKafkaClusterOutputReference(this, "kafka_cluster");
  public get kafkaCluster() {
    return this._kafkaCluster;
  }
  public putKafkaCluster(value: KafkaClientQuotaKafkaCluster) {
    this._kafkaCluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaClusterInput() {
    return this._kafkaCluster.internalValue;
  }

  // throughput - computed: false, optional: false, required: true
  private _throughput = new KafkaClientQuotaThroughputOutputReference(this, "throughput");
  public get throughput() {
    return this._throughput;
  }
  public putThroughput(value: KafkaClientQuotaThroughput) {
    this._throughput.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      principals: cdktf.listMapper(cdktf.stringToTerraform, false)(this._principals),
      environment: kafkaClientQuotaEnvironmentToTerraform(this._environment.internalValue),
      kafka_cluster: kafkaClientQuotaKafkaClusterToTerraform(this._kafkaCluster.internalValue),
      throughput: kafkaClientQuotaThroughputToTerraform(this._throughput.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      principals: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._principals),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      environment: {
        value: kafkaClientQuotaEnvironmentToHclTerraform(this._environment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaClientQuotaEnvironmentList",
      },
      kafka_cluster: {
        value: kafkaClientQuotaKafkaClusterToHclTerraform(this._kafkaCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaClientQuotaKafkaClusterList",
      },
      throughput: {
        value: kafkaClientQuotaThroughputToHclTerraform(this._throughput.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaClientQuotaThroughputList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
