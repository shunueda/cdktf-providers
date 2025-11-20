// https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_community_id
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataElasticstackElasticsearchIngestProcessorCommunityIdConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the processor. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_community_id#description DataElasticstackElasticsearchIngestProcessorCommunityId#description}
  */
  readonly description?: string;
  /**
  * Field containing the destination IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_community_id#destination_ip DataElasticstackElasticsearchIngestProcessorCommunityId#destination_ip}
  */
  readonly destinationIp?: string;
  /**
  * Field containing the destination port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_community_id#destination_port DataElasticstackElasticsearchIngestProcessorCommunityId#destination_port}
  */
  readonly destinationPort?: number;
  /**
  * Field containing the IANA number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_community_id#iana_number DataElasticstackElasticsearchIngestProcessorCommunityId#iana_number}
  */
  readonly ianaNumber?: number;
  /**
  * Field containing the ICMP code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_community_id#icmp_code DataElasticstackElasticsearchIngestProcessorCommunityId#icmp_code}
  */
  readonly icmpCode?: number;
  /**
  * Field containing the ICMP type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_community_id#icmp_type DataElasticstackElasticsearchIngestProcessorCommunityId#icmp_type}
  */
  readonly icmpType?: number;
  /**
  * Conditionally execute the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_community_id#if DataElasticstackElasticsearchIngestProcessorCommunityId#if}
  */
  readonly if?: string;
  /**
  * Ignore failures for the processor. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_community_id#ignore_failure DataElasticstackElasticsearchIngestProcessorCommunityId#ignore_failure}
  */
  readonly ignoreFailure?: boolean | cdktf.IResolvable;
  /**
  * If `true` and `field` does not exist or is `null`, the processor quietly exits without modifying the document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_community_id#ignore_missing DataElasticstackElasticsearchIngestProcessorCommunityId#ignore_missing}
  */
  readonly ignoreMissing?: boolean | cdktf.IResolvable;
  /**
  * Handle failures for the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_community_id#on_failure DataElasticstackElasticsearchIngestProcessorCommunityId#on_failure}
  */
  readonly onFailure?: string[];
  /**
  * Seed for the community ID hash. Must be between 0 and 65535 (inclusive). The seed can prevent hash collisions between network domains, such as a staging and production network that use the same addressing scheme.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_community_id#seed DataElasticstackElasticsearchIngestProcessorCommunityId#seed}
  */
  readonly seed?: number;
  /**
  * Field containing the source IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_community_id#source_ip DataElasticstackElasticsearchIngestProcessorCommunityId#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Field containing the source port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_community_id#source_port DataElasticstackElasticsearchIngestProcessorCommunityId#source_port}
  */
  readonly sourcePort?: number;
  /**
  * Identifier for the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_community_id#tag DataElasticstackElasticsearchIngestProcessorCommunityId#tag}
  */
  readonly tag?: string;
  /**
  * Output field for the community ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_community_id#target_field DataElasticstackElasticsearchIngestProcessorCommunityId#target_field}
  */
  readonly targetField?: string;
  /**
  * Field containing the transport protocol. Used only when the `iana_number` field is not present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_community_id#transport DataElasticstackElasticsearchIngestProcessorCommunityId#transport}
  */
  readonly transport?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_community_id elasticstack_elasticsearch_ingest_processor_community_id}
*/
export class DataElasticstackElasticsearchIngestProcessorCommunityId extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_elasticsearch_ingest_processor_community_id";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataElasticstackElasticsearchIngestProcessorCommunityId resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataElasticstackElasticsearchIngestProcessorCommunityId to import
  * @param importFromId The id of the existing DataElasticstackElasticsearchIngestProcessorCommunityId that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_community_id#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataElasticstackElasticsearchIngestProcessorCommunityId to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_elasticsearch_ingest_processor_community_id", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_community_id elasticstack_elasticsearch_ingest_processor_community_id} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataElasticstackElasticsearchIngestProcessorCommunityIdConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataElasticstackElasticsearchIngestProcessorCommunityIdConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_elasticsearch_ingest_processor_community_id',
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
    this._destinationPort = config.destinationPort;
    this._ianaNumber = config.ianaNumber;
    this._icmpCode = config.icmpCode;
    this._icmpType = config.icmpType;
    this._if = config.if;
    this._ignoreFailure = config.ignoreFailure;
    this._ignoreMissing = config.ignoreMissing;
    this._onFailure = config.onFailure;
    this._seed = config.seed;
    this._sourceIp = config.sourceIp;
    this._sourcePort = config.sourcePort;
    this._tag = config.tag;
    this._targetField = config.targetField;
    this._transport = config.transport;
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

  // destination_port - computed: false, optional: true, required: false
  private _destinationPort?: number; 
  public get destinationPort() {
    return this.getNumberAttribute('destination_port');
  }
  public set destinationPort(value: number) {
    this._destinationPort = value;
  }
  public resetDestinationPort() {
    this._destinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
  }

  // iana_number - computed: false, optional: true, required: false
  private _ianaNumber?: number; 
  public get ianaNumber() {
    return this.getNumberAttribute('iana_number');
  }
  public set ianaNumber(value: number) {
    this._ianaNumber = value;
  }
  public resetIanaNumber() {
    this._ianaNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ianaNumberInput() {
    return this._ianaNumber;
  }

  // icmp_code - computed: false, optional: true, required: false
  private _icmpCode?: number; 
  public get icmpCode() {
    return this.getNumberAttribute('icmp_code');
  }
  public set icmpCode(value: number) {
    this._icmpCode = value;
  }
  public resetIcmpCode() {
    this._icmpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpCodeInput() {
    return this._icmpCode;
  }

  // icmp_type - computed: false, optional: true, required: false
  private _icmpType?: number; 
  public get icmpType() {
    return this.getNumberAttribute('icmp_type');
  }
  public set icmpType(value: number) {
    this._icmpType = value;
  }
  public resetIcmpType() {
    this._icmpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeInput() {
    return this._icmpType;
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

  // seed - computed: false, optional: true, required: false
  private _seed?: number; 
  public get seed() {
    return this.getNumberAttribute('seed');
  }
  public set seed(value: number) {
    this._seed = value;
  }
  public resetSeed() {
    this._seed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seedInput() {
    return this._seed;
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

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: number; 
  public get sourcePort() {
    return this.getNumberAttribute('source_port');
  }
  public set sourcePort(value: number) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
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

  // transport - computed: false, optional: true, required: false
  private _transport?: string; 
  public get transport() {
    return this.getStringAttribute('transport');
  }
  public set transport(value: string) {
    this._transport = value;
  }
  public resetTransport() {
    this._transport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      destination_ip: cdktf.stringToTerraform(this._destinationIp),
      destination_port: cdktf.numberToTerraform(this._destinationPort),
      iana_number: cdktf.numberToTerraform(this._ianaNumber),
      icmp_code: cdktf.numberToTerraform(this._icmpCode),
      icmp_type: cdktf.numberToTerraform(this._icmpType),
      if: cdktf.stringToTerraform(this._if),
      ignore_failure: cdktf.booleanToTerraform(this._ignoreFailure),
      ignore_missing: cdktf.booleanToTerraform(this._ignoreMissing),
      on_failure: cdktf.listMapper(cdktf.stringToTerraform, false)(this._onFailure),
      seed: cdktf.numberToTerraform(this._seed),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      source_port: cdktf.numberToTerraform(this._sourcePort),
      tag: cdktf.stringToTerraform(this._tag),
      target_field: cdktf.stringToTerraform(this._targetField),
      transport: cdktf.stringToTerraform(this._transport),
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
      destination_port: {
        value: cdktf.numberToHclTerraform(this._destinationPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      iana_number: {
        value: cdktf.numberToHclTerraform(this._ianaNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmp_code: {
        value: cdktf.numberToHclTerraform(this._icmpCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmp_type: {
        value: cdktf.numberToHclTerraform(this._icmpType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      on_failure: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._onFailure),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      seed: {
        value: cdktf.numberToHclTerraform(this._seed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_port: {
        value: cdktf.numberToHclTerraform(this._sourcePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      transport: {
        value: cdktf.stringToHclTerraform(this._transport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
