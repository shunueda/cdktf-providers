// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/opensearch_egress_rule_v2_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrOpensearchEgressRuleV2InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * OpenSearch cluster Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/opensearch_egress_rule_v2_instance#cluster_id DataInstaclustrOpensearchEgressRuleV2Instance#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/opensearch_egress_rule_v2_instance#id DataInstaclustrOpensearchEgressRuleV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Name of channel/desination assosciated with webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/opensearch_egress_rule_v2_instance#name DataInstaclustrOpensearchEgressRuleV2Instance#name}
  */
  readonly name?: string;
  /**
  * OpenSearch ID for alerting/notifications channel/destination for webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/opensearch_egress_rule_v2_instance#open_search_binding_id DataInstaclustrOpensearchEgressRuleV2Instance#open_search_binding_id}
  */
  readonly openSearchBindingId?: string;
  /**
  * Source OpenSearch plugin that manages the channel/destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/opensearch_egress_rule_v2_instance#source DataInstaclustrOpensearchEgressRuleV2Instance#source}
  */
  readonly source?: string;
  /**
  * Type of the channel/destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/opensearch_egress_rule_v2_instance#type DataInstaclustrOpensearchEgressRuleV2Instance#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/opensearch_egress_rule_v2_instance instaclustr_opensearch_egress_rule_v2_instance}
*/
export class DataInstaclustrOpensearchEgressRuleV2Instance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_opensearch_egress_rule_v2_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrOpensearchEgressRuleV2Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrOpensearchEgressRuleV2Instance to import
  * @param importFromId The id of the existing DataInstaclustrOpensearchEgressRuleV2Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/opensearch_egress_rule_v2_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrOpensearchEgressRuleV2Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_opensearch_egress_rule_v2_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/data-sources/opensearch_egress_rule_v2_instance instaclustr_opensearch_egress_rule_v2_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrOpensearchEgressRuleV2InstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrOpensearchEgressRuleV2InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_opensearch_egress_rule_v2_instance',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.39',
        providerVersionConstraint: '2.1.39'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._name = config.name;
    this._openSearchBindingId = config.openSearchBindingId;
    this._source = config.source;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // open_search_binding_id - computed: true, optional: true, required: false
  private _openSearchBindingId?: string; 
  public get openSearchBindingId() {
    return this.getStringAttribute('open_search_binding_id');
  }
  public set openSearchBindingId(value: string) {
    this._openSearchBindingId = value;
  }
  public resetOpenSearchBindingId() {
    this._openSearchBindingId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openSearchBindingIdInput() {
    return this._openSearchBindingId;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      open_search_binding_id: cdktf.stringToTerraform(this._openSearchBindingId),
      source: cdktf.stringToTerraform(this._source),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
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
      open_search_binding_id: {
        value: cdktf.stringToHclTerraform(this._openSearchBindingId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
