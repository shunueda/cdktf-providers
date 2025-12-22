// https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/kafka_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KafkaClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The location of your Kafka Cluster. Supported locations: de/fra, de/fra/2, de/txl, fr/par, es/vit, gb/lhr, gb/bhx, us/las, us/mci, us/ewr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/kafka_cluster#location KafkaCluster#location}
  */
  readonly location?: string;
  /**
  * The name of your Kafka Cluster. Must be 63 characters or less and must begin and end with an alphanumeric character (`[a-z0-9A-Z]`) with dashes (`-`), underscores (`_`), dots (`.`), and alphanumerics between.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/kafka_cluster#name KafkaCluster#name}
  */
  readonly name: string;
  /**
  * The size of your Kafka Cluster. The size of the Kafka Cluster is given in T-shirt sizes. Valid values are: XS, S
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/kafka_cluster#size KafkaCluster#size}
  */
  readonly size: string;
  /**
  * The desired Kafka Version. Supported versions: 3.8.0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/kafka_cluster#version KafkaCluster#version}
  */
  readonly version: string;
  /**
  * connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/kafka_cluster#connections KafkaCluster#connections}
  */
  readonly connections: KafkaClusterConnections;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/kafka_cluster#timeouts KafkaCluster#timeouts}
  */
  readonly timeouts?: KafkaClusterTimeouts;
}
export interface KafkaClusterConnections {
  /**
  * The broker addresses of the Kafka Cluster. Can be empty, but must be present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/kafka_cluster#broker_addresses KafkaCluster#broker_addresses}
  */
  readonly brokerAddresses: string[];
  /**
  * The datacenter to connect your Kafka Cluster to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/kafka_cluster#datacenter_id KafkaCluster#datacenter_id}
  */
  readonly datacenterId: string;
  /**
  * The numeric LAN ID to connect your Kafka Cluster to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/kafka_cluster#lan_id KafkaCluster#lan_id}
  */
  readonly lanId: string;
}

export function kafkaClusterConnectionsToTerraform(struct?: KafkaClusterConnectionsOutputReference | KafkaClusterConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broker_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.brokerAddresses),
    datacenter_id: cdktf.stringToTerraform(struct!.datacenterId),
    lan_id: cdktf.stringToTerraform(struct!.lanId),
  }
}


export function kafkaClusterConnectionsToHclTerraform(struct?: KafkaClusterConnectionsOutputReference | KafkaClusterConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broker_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.brokerAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    datacenter_id: {
      value: cdktf.stringToHclTerraform(struct!.datacenterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lan_id: {
      value: cdktf.stringToHclTerraform(struct!.lanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaClusterConnectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaClusterConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._brokerAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokerAddresses = this._brokerAddresses;
    }
    if (this._datacenterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenterId = this._datacenterId;
    }
    if (this._lanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.lanId = this._lanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterConnections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._brokerAddresses = undefined;
      this._datacenterId = undefined;
      this._lanId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._brokerAddresses = value.brokerAddresses;
      this._datacenterId = value.datacenterId;
      this._lanId = value.lanId;
    }
  }

  // broker_addresses - computed: false, optional: false, required: true
  private _brokerAddresses?: string[]; 
  public get brokerAddresses() {
    return this.getListAttribute('broker_addresses');
  }
  public set brokerAddresses(value: string[]) {
    this._brokerAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerAddressesInput() {
    return this._brokerAddresses;
  }

  // datacenter_id - computed: false, optional: false, required: true
  private _datacenterId?: string; 
  public get datacenterId() {
    return this.getStringAttribute('datacenter_id');
  }
  public set datacenterId(value: string) {
    this._datacenterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterIdInput() {
    return this._datacenterId;
  }

  // lan_id - computed: false, optional: false, required: true
  private _lanId?: string; 
  public get lanId() {
    return this.getStringAttribute('lan_id');
  }
  public set lanId(value: string) {
    this._lanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lanIdInput() {
    return this._lanId;
  }
}
export interface KafkaClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/kafka_cluster#create KafkaCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/kafka_cluster#default KafkaCluster#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/kafka_cluster#delete KafkaCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/kafka_cluster#update KafkaCluster#update}
  */
  readonly update?: string;
}

export function kafkaClusterTimeoutsToTerraform(struct?: KafkaClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
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
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._default = value.default;
      this._delete = value.delete;
      this._update = value.update;
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

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/kafka_cluster ionoscloud_kafka_cluster}
*/
export class KafkaCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ionoscloud_kafka_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KafkaCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KafkaCluster to import
  * @param importFromId The id of the existing KafkaCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/kafka_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KafkaCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ionoscloud_kafka_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/kafka_cluster ionoscloud_kafka_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KafkaClusterConfig
  */
  public constructor(scope: Construct, id: string, config: KafkaClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'ionoscloud_kafka_cluster',
      terraformGeneratorMetadata: {
        providerName: 'ionoscloud',
        providerVersion: '6.7.21',
        providerVersionConstraint: '6.7.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._location = config.location;
    this._name = config.name;
    this._size = config.size;
    this._version = config.version;
    this._connections.internalValue = config.connections;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // broker_addresses - computed: true, optional: false, required: false
  public get brokerAddresses() {
    return this.getListAttribute('broker_addresses');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // connections - computed: false, optional: false, required: true
  private _connections = new KafkaClusterConnectionsOutputReference(this, "connections");
  public get connections() {
    return this._connections;
  }
  public putConnections(value: KafkaClusterConnections) {
    this._connections.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsInput() {
    return this._connections.internalValue;
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
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      size: cdktf.stringToTerraform(this._size),
      version: cdktf.stringToTerraform(this._version),
      connections: kafkaClusterConnectionsToTerraform(this._connections.internalValue),
      timeouts: kafkaClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      size: {
        value: cdktf.stringToHclTerraform(this._size),
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
      connections: {
        value: kafkaClusterConnectionsToHclTerraform(this._connections.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaClusterConnectionsList",
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
