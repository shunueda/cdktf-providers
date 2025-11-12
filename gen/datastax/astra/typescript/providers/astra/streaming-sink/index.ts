// https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_sink
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamingSinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the sink archive type to use. Defaults to the value of sink_name.  Must be formatted as a URL, e.g. 'builtin://jdbc-clickhouse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_sink#archive StreamingSink#archive}
  */
  readonly archive?: string;
  /**
  * auto ack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_sink#auto_ack StreamingSink#auto_ack}
  */
  readonly autoAck: boolean | cdktf.IResolvable;
  /**
  * Cloud provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_sink#cloud_provider StreamingSink#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * Whether or not to allow Terraform to destroy this streaming sink. Unless this field is set to false in Terraform state, a `terraform destroy` or `terraform apply` command that deletes the instance will fail. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_sink#deletion_protection StreamingSink#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_sink#id StreamingSink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Pulsar Namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_sink#namespace StreamingSink#namespace}
  */
  readonly namespace: string;
  /**
  * Parallelism for Pulsar sink
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_sink#parallelism StreamingSink#parallelism}
  */
  readonly parallelism: number;
  /**
  * "ATLEAST_ONCE""ATMOST_ONCE""EFFECTIVELY_ONCE".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_sink#processing_guarantees StreamingSink#processing_guarantees}
  */
  readonly processingGuarantees: string;
  /**
  * Name of the pulsar cluster in which to create the sink.  If left blank, the name will be inferred from thecloud provider and region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_sink#pulsar_cluster StreamingSink#pulsar_cluster}
  */
  readonly pulsarCluster?: string;
  /**
  * cloud region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_sink#region StreamingSink#region}
  */
  readonly region: string;
  /**
  * Retain ordering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_sink#retain_ordering StreamingSink#retain_ordering}
  */
  readonly retainOrdering: boolean | cdktf.IResolvable;
  /**
  * Sink Configs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_sink#sink_configs StreamingSink#sink_configs}
  */
  readonly sinkConfigs: string;
  /**
  * Name of the sink.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_sink#sink_name StreamingSink#sink_name}
  */
  readonly sinkName: string;
  /**
  * Streaming tenant name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_sink#tenant_name StreamingSink#tenant_name}
  */
  readonly tenantName: string;
  /**
  * Streaming tenant topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_sink#topic StreamingSink#topic}
  */
  readonly topic: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_sink astra_streaming_sink}
*/
export class StreamingSink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "astra_streaming_sink";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StreamingSink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StreamingSink to import
  * @param importFromId The id of the existing StreamingSink that should be imported. Refer to the {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_sink#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StreamingSink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "astra_streaming_sink", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/resources/streaming_sink astra_streaming_sink} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamingSinkConfig
  */
  public constructor(scope: Construct, id: string, config: StreamingSinkConfig) {
    super(scope, id, {
      terraformResourceType: 'astra_streaming_sink',
      terraformGeneratorMetadata: {
        providerName: 'astra',
        providerVersion: '2.3.18',
        providerVersionConstraint: '2.3.18'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._archive = config.archive;
    this._autoAck = config.autoAck;
    this._cloudProvider = config.cloudProvider;
    this._deletionProtection = config.deletionProtection;
    this._id = config.id;
    this._namespace = config.namespace;
    this._parallelism = config.parallelism;
    this._processingGuarantees = config.processingGuarantees;
    this._pulsarCluster = config.pulsarCluster;
    this._region = config.region;
    this._retainOrdering = config.retainOrdering;
    this._sinkConfigs = config.sinkConfigs;
    this._sinkName = config.sinkName;
    this._tenantName = config.tenantName;
    this._topic = config.topic;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archive - computed: false, optional: true, required: false
  private _archive?: string; 
  public get archive() {
    return this.getStringAttribute('archive');
  }
  public set archive(value: string) {
    this._archive = value;
  }
  public resetArchive() {
    this._archive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveInput() {
    return this._archive;
  }

  // auto_ack - computed: false, optional: false, required: true
  private _autoAck?: boolean | cdktf.IResolvable; 
  public get autoAck() {
    return this.getBooleanAttribute('auto_ack');
  }
  public set autoAck(value: boolean | cdktf.IResolvable) {
    this._autoAck = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAckInput() {
    return this._autoAck;
  }

  // cloud_provider - computed: false, optional: false, required: true
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // parallelism - computed: false, optional: false, required: true
  private _parallelism?: number; 
  public get parallelism() {
    return this.getNumberAttribute('parallelism');
  }
  public set parallelism(value: number) {
    this._parallelism = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelismInput() {
    return this._parallelism;
  }

  // processing_guarantees - computed: false, optional: false, required: true
  private _processingGuarantees?: string; 
  public get processingGuarantees() {
    return this.getStringAttribute('processing_guarantees');
  }
  public set processingGuarantees(value: string) {
    this._processingGuarantees = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processingGuaranteesInput() {
    return this._processingGuarantees;
  }

  // pulsar_cluster - computed: false, optional: true, required: false
  private _pulsarCluster?: string; 
  public get pulsarCluster() {
    return this.getStringAttribute('pulsar_cluster');
  }
  public set pulsarCluster(value: string) {
    this._pulsarCluster = value;
  }
  public resetPulsarCluster() {
    this._pulsarCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pulsarClusterInput() {
    return this._pulsarCluster;
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

  // retain_ordering - computed: false, optional: false, required: true
  private _retainOrdering?: boolean | cdktf.IResolvable; 
  public get retainOrdering() {
    return this.getBooleanAttribute('retain_ordering');
  }
  public set retainOrdering(value: boolean | cdktf.IResolvable) {
    this._retainOrdering = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retainOrderingInput() {
    return this._retainOrdering;
  }

  // sink_configs - computed: false, optional: false, required: true
  private _sinkConfigs?: string; 
  public get sinkConfigs() {
    return this.getStringAttribute('sink_configs');
  }
  public set sinkConfigs(value: string) {
    this._sinkConfigs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sinkConfigsInput() {
    return this._sinkConfigs;
  }

  // sink_name - computed: false, optional: false, required: true
  private _sinkName?: string; 
  public get sinkName() {
    return this.getStringAttribute('sink_name');
  }
  public set sinkName(value: string) {
    this._sinkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sinkNameInput() {
    return this._sinkName;
  }

  // tenant_name - computed: false, optional: false, required: true
  private _tenantName?: string; 
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }
  public set tenantName(value: string) {
    this._tenantName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantNameInput() {
    return this._tenantName;
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      archive: cdktf.stringToTerraform(this._archive),
      auto_ack: cdktf.booleanToTerraform(this._autoAck),
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      parallelism: cdktf.numberToTerraform(this._parallelism),
      processing_guarantees: cdktf.stringToTerraform(this._processingGuarantees),
      pulsar_cluster: cdktf.stringToTerraform(this._pulsarCluster),
      region: cdktf.stringToTerraform(this._region),
      retain_ordering: cdktf.booleanToTerraform(this._retainOrdering),
      sink_configs: cdktf.stringToTerraform(this._sinkConfigs),
      sink_name: cdktf.stringToTerraform(this._sinkName),
      tenant_name: cdktf.stringToTerraform(this._tenantName),
      topic: cdktf.stringToTerraform(this._topic),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      archive: {
        value: cdktf.stringToHclTerraform(this._archive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_ack: {
        value: cdktf.booleanToHclTerraform(this._autoAck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parallelism: {
        value: cdktf.numberToHclTerraform(this._parallelism),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      processing_guarantees: {
        value: cdktf.stringToHclTerraform(this._processingGuarantees),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pulsar_cluster: {
        value: cdktf.stringToHclTerraform(this._pulsarCluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retain_ordering: {
        value: cdktf.booleanToHclTerraform(this._retainOrdering),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sink_configs: {
        value: cdktf.stringToHclTerraform(this._sinkConfigs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sink_name: {
        value: cdktf.stringToHclTerraform(this._sinkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_name: {
        value: cdktf.stringToHclTerraform(this._tenantName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topic: {
        value: cdktf.stringToHclTerraform(this._topic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
