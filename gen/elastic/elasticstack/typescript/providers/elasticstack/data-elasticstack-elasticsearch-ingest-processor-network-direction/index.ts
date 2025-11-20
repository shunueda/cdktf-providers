// https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_network_direction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataElasticstackElasticsearchIngestProcessorNetworkDirectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the processor. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_network_direction#description DataElasticstackElasticsearchIngestProcessorNetworkDirection#description}
  */
  readonly description?: string;
  /**
  * Field containing the destination IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_network_direction#destination_ip DataElasticstackElasticsearchIngestProcessorNetworkDirection#destination_ip}
  */
  readonly destinationIp?: string;
  /**
  * Conditionally execute the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_network_direction#if DataElasticstackElasticsearchIngestProcessorNetworkDirection#if}
  */
  readonly if?: string;
  /**
  * Ignore failures for the processor. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_network_direction#ignore_failure DataElasticstackElasticsearchIngestProcessorNetworkDirection#ignore_failure}
  */
  readonly ignoreFailure?: boolean | cdktf.IResolvable;
  /**
  * If `true` and `field` does not exist or is `null`, the processor quietly exits without modifying the document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_network_direction#ignore_missing DataElasticstackElasticsearchIngestProcessorNetworkDirection#ignore_missing}
  */
  readonly ignoreMissing?: boolean | cdktf.IResolvable;
  /**
  * List of internal networks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_network_direction#internal_networks DataElasticstackElasticsearchIngestProcessorNetworkDirection#internal_networks}
  */
  readonly internalNetworks?: string[];
  /**
  * A field on the given document to read the internal_networks configuration from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_network_direction#internal_networks_field DataElasticstackElasticsearchIngestProcessorNetworkDirection#internal_networks_field}
  */
  readonly internalNetworksField?: string;
  /**
  * Handle failures for the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_network_direction#on_failure DataElasticstackElasticsearchIngestProcessorNetworkDirection#on_failure}
  */
  readonly onFailure?: string[];
  /**
  * Field containing the source IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_network_direction#source_ip DataElasticstackElasticsearchIngestProcessorNetworkDirection#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Identifier for the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_network_direction#tag DataElasticstackElasticsearchIngestProcessorNetworkDirection#tag}
  */
  readonly tag?: string;
  /**
  * Output field for the network direction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_network_direction#target_field DataElasticstackElasticsearchIngestProcessorNetworkDirection#target_field}
  */
  readonly targetField?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_network_direction elasticstack_elasticsearch_ingest_processor_network_direction}
*/
export class DataElasticstackElasticsearchIngestProcessorNetworkDirection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_elasticsearch_ingest_processor_network_direction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataElasticstackElasticsearchIngestProcessorNetworkDirection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataElasticstackElasticsearchIngestProcessorNetworkDirection to import
  * @param importFromId The id of the existing DataElasticstackElasticsearchIngestProcessorNetworkDirection that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_network_direction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataElasticstackElasticsearchIngestProcessorNetworkDirection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_elasticsearch_ingest_processor_network_direction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_network_direction elasticstack_elasticsearch_ingest_processor_network_direction} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataElasticstackElasticsearchIngestProcessorNetworkDirectionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataElasticstackElasticsearchIngestProcessorNetworkDirectionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_elasticsearch_ingest_processor_network_direction',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.12.2',
        providerVersionConstraint: '0.12.2'
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
    this._destinationIp = config.destinationIp;
    this._if = config.if;
    this._ignoreFailure = config.ignoreFailure;
    this._ignoreMissing = config.ignoreMissing;
    this._internalNetworks = config.internalNetworks;
    this._internalNetworksField = config.internalNetworksField;
    this._onFailure = config.onFailure;
    this._sourceIp = config.sourceIp;
    this._tag = config.tag;
    this._targetField = config.targetField;
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

  // destination_ip - computed: false, optional: true, required: false
  private _destinationIp?: string; 
  public get destinationIp() {
    return this.getStringAttribute('destination_ip');
  }
  public set destinationIp(value: string) {
    this._destinationIp = value;
  }
  public resetDestinationIp() {
    this._destinationIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpInput() {
    return this._destinationIp;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // if - computed: false, optional: true, required: false
  private _if?: string; 
  public get if() {
    return this.getStringAttribute('if');
  }
  public set if(value: string) {
    this._if = value;
  }
  public resetIf() {
    this._if = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifInput() {
    return this._if;
  }

  // ignore_failure - computed: false, optional: true, required: false
  private _ignoreFailure?: boolean | cdktf.IResolvable; 
  public get ignoreFailure() {
    return this.getBooleanAttribute('ignore_failure');
  }
  public set ignoreFailure(value: boolean | cdktf.IResolvable) {
    this._ignoreFailure = value;
  }
  public resetIgnoreFailure() {
    this._ignoreFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreFailureInput() {
    return this._ignoreFailure;
  }

  // ignore_missing - computed: false, optional: true, required: false
  private _ignoreMissing?: boolean | cdktf.IResolvable; 
  public get ignoreMissing() {
    return this.getBooleanAttribute('ignore_missing');
  }
  public set ignoreMissing(value: boolean | cdktf.IResolvable) {
    this._ignoreMissing = value;
  }
  public resetIgnoreMissing() {
    this._ignoreMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMissingInput() {
    return this._ignoreMissing;
  }

  // internal_networks - computed: false, optional: true, required: false
  private _internalNetworks?: string[]; 
  public get internalNetworks() {
    return cdktf.Fn.tolist(this.getListAttribute('internal_networks'));
  }
  public set internalNetworks(value: string[]) {
    this._internalNetworks = value;
  }
  public resetInternalNetworks() {
    this._internalNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalNetworksInput() {
    return this._internalNetworks;
  }

  // internal_networks_field - computed: false, optional: true, required: false
  private _internalNetworksField?: string; 
  public get internalNetworksField() {
    return this.getStringAttribute('internal_networks_field');
  }
  public set internalNetworksField(value: string) {
    this._internalNetworksField = value;
  }
  public resetInternalNetworksField() {
    this._internalNetworksField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalNetworksFieldInput() {
    return this._internalNetworksField;
  }

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
  }

  // on_failure - computed: false, optional: true, required: false
  private _onFailure?: string[]; 
  public get onFailure() {
    return this.getListAttribute('on_failure');
  }
  public set onFailure(value: string[]) {
    this._onFailure = value;
  }
  public resetOnFailure() {
    this._onFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailureInput() {
    return this._onFailure;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // target_field - computed: false, optional: true, required: false
  private _targetField?: string; 
  public get targetField() {
    return this.getStringAttribute('target_field');
  }
  public set targetField(value: string) {
    this._targetField = value;
  }
  public resetTargetField() {
    this._targetField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFieldInput() {
    return this._targetField;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      destination_ip: cdktf.stringToTerraform(this._destinationIp),
      if: cdktf.stringToTerraform(this._if),
      ignore_failure: cdktf.booleanToTerraform(this._ignoreFailure),
      ignore_missing: cdktf.booleanToTerraform(this._ignoreMissing),
      internal_networks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internalNetworks),
      internal_networks_field: cdktf.stringToTerraform(this._internalNetworksField),
      on_failure: cdktf.listMapper(cdktf.stringToTerraform, false)(this._onFailure),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      tag: cdktf.stringToTerraform(this._tag),
      target_field: cdktf.stringToTerraform(this._targetField),
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
      destination_ip: {
        value: cdktf.stringToHclTerraform(this._destinationIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      if: {
        value: cdktf.stringToHclTerraform(this._if),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_failure: {
        value: cdktf.booleanToHclTerraform(this._ignoreFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_missing: {
        value: cdktf.booleanToHclTerraform(this._ignoreMissing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      internal_networks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internalNetworks),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internal_networks_field: {
        value: cdktf.stringToHclTerraform(this._internalNetworksField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_failure: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._onFailure),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag: {
        value: cdktf.stringToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_field: {
        value: cdktf.stringToHclTerraform(this._targetField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
