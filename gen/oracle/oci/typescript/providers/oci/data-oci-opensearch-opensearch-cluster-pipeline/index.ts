// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opensearch_opensearch_cluster_pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOpensearchOpensearchClusterPipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opensearch_opensearch_cluster_pipeline#opensearch_cluster_pipeline_id DataOciOpensearchOpensearchClusterPipeline#opensearch_cluster_pipeline_id}
  */
  readonly opensearchClusterPipelineId: string;
}
export interface DataOciOpensearchOpensearchClusterPipelineReverseConnectionEndpoints {
}

export function dataOciOpensearchOpensearchClusterPipelineReverseConnectionEndpointsToTerraform(struct?: DataOciOpensearchOpensearchClusterPipelineReverseConnectionEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpensearchOpensearchClusterPipelineReverseConnectionEndpointsToHclTerraform(struct?: DataOciOpensearchOpensearchClusterPipelineReverseConnectionEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpensearchOpensearchClusterPipelineReverseConnectionEndpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciOpensearchOpensearchClusterPipelineReverseConnectionEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpensearchOpensearchClusterPipelineReverseConnectionEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // customer_fqdn - computed: true, optional: false, required: false
  public get customerFqdn() {
    return this.getStringAttribute('customer_fqdn');
  }

  // customer_ip - computed: true, optional: false, required: false
  public get customerIp() {
    return this.getStringAttribute('customer_ip');
  }
}

export class DataOciOpensearchOpensearchClusterPipelineReverseConnectionEndpointsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciOpensearchOpensearchClusterPipelineReverseConnectionEndpointsOutputReference {
    return new DataOciOpensearchOpensearchClusterPipelineReverseConnectionEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opensearch_opensearch_cluster_pipeline oci_opensearch_opensearch_cluster_pipeline}
*/
export class DataOciOpensearchOpensearchClusterPipeline extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_opensearch_opensearch_cluster_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOpensearchOpensearchClusterPipeline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOpensearchOpensearchClusterPipeline to import
  * @param importFromId The id of the existing DataOciOpensearchOpensearchClusterPipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opensearch_opensearch_cluster_pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOpensearchOpensearchClusterPipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_opensearch_opensearch_cluster_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opensearch_opensearch_cluster_pipeline oci_opensearch_opensearch_cluster_pipeline} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOpensearchOpensearchClusterPipelineConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOpensearchOpensearchClusterPipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_opensearch_opensearch_cluster_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._opensearchClusterPipelineId = config.opensearchClusterPipelineId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // data_prepper_configuration_body - computed: true, optional: false, required: false
  public get dataPrepperConfigurationBody() {
    return this.getStringAttribute('data_prepper_configuration_body');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // memory_gb - computed: true, optional: false, required: false
  public get memoryGb() {
    return this.getNumberAttribute('memory_gb');
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // node_shape - computed: true, optional: false, required: false
  public get nodeShape() {
    return this.getStringAttribute('node_shape');
  }

  // nsg_id - computed: true, optional: false, required: false
  public get nsgId() {
    return this.getStringAttribute('nsg_id');
  }

  // ocpu_count - computed: true, optional: false, required: false
  public get ocpuCount() {
    return this.getNumberAttribute('ocpu_count');
  }

  // opc_dry_run - computed: true, optional: false, required: false
  public get opcDryRun() {
    return this.getBooleanAttribute('opc_dry_run');
  }

  // opensearch_cluster_pipeline_id - computed: false, optional: false, required: true
  private _opensearchClusterPipelineId?: string; 
  public get opensearchClusterPipelineId() {
    return this.getStringAttribute('opensearch_cluster_pipeline_id');
  }
  public set opensearchClusterPipelineId(value: string) {
    this._opensearchClusterPipelineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchClusterPipelineIdInput() {
    return this._opensearchClusterPipelineId;
  }

  // opensearch_pipeline_fqdn - computed: true, optional: false, required: false
  public get opensearchPipelineFqdn() {
    return this.getStringAttribute('opensearch_pipeline_fqdn');
  }

  // opensearch_pipeline_private_ip - computed: true, optional: false, required: false
  public get opensearchPipelinePrivateIp() {
    return this.getStringAttribute('opensearch_pipeline_private_ip');
  }

  // pipeline_configuration_body - computed: true, optional: false, required: false
  public get pipelineConfigurationBody() {
    return this.getStringAttribute('pipeline_configuration_body');
  }

  // pipeline_mode - computed: true, optional: false, required: false
  public get pipelineMode() {
    return this.getStringAttribute('pipeline_mode');
  }

  // reverse_connection_endpoints - computed: true, optional: false, required: false
  private _reverseConnectionEndpoints = new DataOciOpensearchOpensearchClusterPipelineReverseConnectionEndpointsList(this, "reverse_connection_endpoints", false);
  public get reverseConnectionEndpoints() {
    return this._reverseConnectionEndpoints;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_compartment_id - computed: true, optional: false, required: false
  public get subnetCompartmentId() {
    return this.getStringAttribute('subnet_compartment_id');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // vcn_compartment_id - computed: true, optional: false, required: false
  public get vcnCompartmentId() {
    return this.getStringAttribute('vcn_compartment_id');
  }

  // vcn_id - computed: true, optional: false, required: false
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      opensearch_cluster_pipeline_id: cdktf.stringToTerraform(this._opensearchClusterPipelineId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      opensearch_cluster_pipeline_id: {
        value: cdktf.stringToHclTerraform(this._opensearchClusterPipelineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
