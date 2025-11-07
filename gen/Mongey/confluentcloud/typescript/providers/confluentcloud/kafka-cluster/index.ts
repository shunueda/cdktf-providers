// https://registry.terraform.io/providers/mongey/confluentcloud/0.0.15/docs/resources/kafka_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KafkaClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * LOW(single-zone) or HIGH(multi-zone)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/confluentcloud/0.0.15/docs/resources/kafka_cluster#availability KafkaCluster#availability}
  */
  readonly availability: string;
  /**
  * cku
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/confluentcloud/0.0.15/docs/resources/kafka_cluster#cku KafkaCluster#cku}
  */
  readonly cku?: number;
  /**
  * Deployment settings. Currently only `sku` is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/confluentcloud/0.0.15/docs/resources/kafka_cluster#deployment KafkaCluster#deployment}
  */
  readonly deployment?: { [key: string]: string };
  /**
  * Environment ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/confluentcloud/0.0.15/docs/resources/kafka_cluster#environment_id KafkaCluster#environment_id}
  */
  readonly environmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/confluentcloud/0.0.15/docs/resources/kafka_cluster#id KafkaCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/confluentcloud/0.0.15/docs/resources/kafka_cluster#name KafkaCluster#name}
  */
  readonly name: string;
  /**
  * Network egress limit(MBps)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/confluentcloud/0.0.15/docs/resources/kafka_cluster#network_egress KafkaCluster#network_egress}
  */
  readonly networkEgress?: number;
  /**
  * Network ingress limit(MBps)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/confluentcloud/0.0.15/docs/resources/kafka_cluster#network_ingress KafkaCluster#network_ingress}
  */
  readonly networkIngress?: number;
  /**
  * where
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/confluentcloud/0.0.15/docs/resources/kafka_cluster#region KafkaCluster#region}
  */
  readonly region: string;
  /**
  * AWS / GCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/confluentcloud/0.0.15/docs/resources/kafka_cluster#service_provider KafkaCluster#service_provider}
  */
  readonly serviceProvider: string;
  /**
  * Storage limit(GB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/confluentcloud/0.0.15/docs/resources/kafka_cluster#storage KafkaCluster#storage}
  */
  readonly storage?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/confluentcloud/0.0.15/docs/resources/kafka_cluster#timeouts KafkaCluster#timeouts}
  */
  readonly timeouts?: KafkaClusterTimeouts;
}
export interface KafkaClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/confluentcloud/0.0.15/docs/resources/kafka_cluster#create KafkaCluster#create}
  */
  readonly create?: string;
}

export function kafkaClusterTimeoutsToTerraform(struct?: KafkaClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function kafkaClusterTimeoutsToHclTerraform(struct?: KafkaClusterTimeouts | cdktf.IResolvable): any {
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

export class KafkaClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KafkaClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KafkaClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/mongey/confluentcloud/0.0.15/docs/resources/kafka_cluster confluentcloud_kafka_cluster}
*/
export class KafkaCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluentcloud_kafka_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KafkaCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KafkaCluster to import
  * @param importFromId The id of the existing KafkaCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongey/confluentcloud/0.0.15/docs/resources/kafka_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KafkaCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluentcloud_kafka_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongey/confluentcloud/0.0.15/docs/resources/kafka_cluster confluentcloud_kafka_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KafkaClusterConfig
  */
  public constructor(scope: Construct, id: string, config: KafkaClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'confluentcloud_kafka_cluster',
      terraformGeneratorMetadata: {
        providerName: 'confluentcloud',
        providerVersion: '0.0.15'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availability = config.availability;
    this._cku = config.cku;
    this._deployment = config.deployment;
    this._environmentId = config.environmentId;
    this._id = config.id;
    this._name = config.name;
    this._networkEgress = config.networkEgress;
    this._networkIngress = config.networkIngress;
    this._region = config.region;
    this._serviceProvider = config.serviceProvider;
    this._storage = config.storage;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability - computed: false, optional: false, required: true
  private _availability?: string; 
  public get availability() {
    return this.getStringAttribute('availability');
  }
  public set availability(value: string) {
    this._availability = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability;
  }

  // bootstrap_servers - computed: true, optional: false, required: false
  public get bootstrapServers() {
    return this.getStringAttribute('bootstrap_servers');
  }

  // cku - computed: false, optional: true, required: false
  private _cku?: number; 
  public get cku() {
    return this.getNumberAttribute('cku');
  }
  public set cku(value: number) {
    this._cku = value;
  }
  public resetCku() {
    this._cku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ckuInput() {
    return this._cku;
  }

  // deployment - computed: false, optional: true, required: false
  private _deployment?: { [key: string]: string }; 
  public get deployment() {
    return this.getStringMapAttribute('deployment');
  }
  public set deployment(value: { [key: string]: string }) {
    this._deployment = value;
  }
  public resetDeployment() {
    this._deployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
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

  // network_egress - computed: false, optional: true, required: false
  private _networkEgress?: number; 
  public get networkEgress() {
    return this.getNumberAttribute('network_egress');
  }
  public set networkEgress(value: number) {
    this._networkEgress = value;
  }
  public resetNetworkEgress() {
    this._networkEgress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkEgressInput() {
    return this._networkEgress;
  }

  // network_ingress - computed: false, optional: true, required: false
  private _networkIngress?: number; 
  public get networkIngress() {
    return this.getNumberAttribute('network_ingress');
  }
  public set networkIngress(value: number) {
    this._networkIngress = value;
  }
  public resetNetworkIngress() {
    this._networkIngress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIngressInput() {
    return this._networkIngress;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // service_provider - computed: false, optional: false, required: true
  private _serviceProvider?: string; 
  public get serviceProvider() {
    return this.getStringAttribute('service_provider');
  }
  public set serviceProvider(value: string) {
    this._serviceProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProviderInput() {
    return this._serviceProvider;
  }

  // storage - computed: false, optional: true, required: false
  private _storage?: number; 
  public get storage() {
    return this.getNumberAttribute('storage');
  }
  public set storage(value: number) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KafkaClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KafkaClusterTimeouts) {
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
      availability: cdktf.stringToTerraform(this._availability),
      cku: cdktf.numberToTerraform(this._cku),
      deployment: cdktf.hashMapper(cdktf.stringToTerraform)(this._deployment),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network_egress: cdktf.numberToTerraform(this._networkEgress),
      network_ingress: cdktf.numberToTerraform(this._networkIngress),
      region: cdktf.stringToTerraform(this._region),
      service_provider: cdktf.stringToTerraform(this._serviceProvider),
      storage: cdktf.numberToTerraform(this._storage),
      timeouts: kafkaClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability: {
        value: cdktf.stringToHclTerraform(this._availability),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cku: {
        value: cdktf.numberToHclTerraform(this._cku),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deployment: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._deployment),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_egress: {
        value: cdktf.numberToHclTerraform(this._networkEgress),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      network_ingress: {
        value: cdktf.numberToHclTerraform(this._networkIngress),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_provider: {
        value: cdktf.stringToHclTerraform(this._serviceProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage: {
        value: cdktf.numberToHclTerraform(this._storage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: kafkaClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KafkaClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
