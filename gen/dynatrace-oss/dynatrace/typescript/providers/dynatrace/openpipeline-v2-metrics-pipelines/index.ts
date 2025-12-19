// generated from terraform resource schema

import { OpenpipelineV2MetricsPipelinesCostAllocation, 
openpipelineV2MetricsPipelinesCostAllocationToTerraform, 
openpipelineV2MetricsPipelinesCostAllocationToHclTerraform, 
OpenpipelineV2MetricsPipelinesCostAllocationOutputReference, 
OpenpipelineV2MetricsPipelinesDataExtraction, 
openpipelineV2MetricsPipelinesDataExtractionToTerraform, 
openpipelineV2MetricsPipelinesDataExtractionToHclTerraform, 
OpenpipelineV2MetricsPipelinesDataExtractionOutputReference, 
OpenpipelineV2MetricsPipelinesDavis, 
openpipelineV2MetricsPipelinesDavisToTerraform, 
openpipelineV2MetricsPipelinesDavisToHclTerraform, 
OpenpipelineV2MetricsPipelinesDavisOutputReference, 
OpenpipelineV2MetricsPipelinesMetadataListStruct, 
openpipelineV2MetricsPipelinesMetadataListStructToTerraform, 
openpipelineV2MetricsPipelinesMetadataListStructToHclTerraform, 
OpenpipelineV2MetricsPipelinesMetadataListStructOutputReference, 
OpenpipelineV2MetricsPipelinesMetricExtraction, 
openpipelineV2MetricsPipelinesMetricExtractionToTerraform, 
openpipelineV2MetricsPipelinesMetricExtractionToHclTerraform, 
OpenpipelineV2MetricsPipelinesMetricExtractionOutputReference, 
OpenpipelineV2MetricsPipelinesProcessing, 
openpipelineV2MetricsPipelinesProcessingToTerraform, 
openpipelineV2MetricsPipelinesProcessingToHclTerraform, 
OpenpipelineV2MetricsPipelinesProcessingOutputReference, 
OpenpipelineV2MetricsPipelinesProductAllocation, 
openpipelineV2MetricsPipelinesProductAllocationToTerraform, 
openpipelineV2MetricsPipelinesProductAllocationToHclTerraform, 
OpenpipelineV2MetricsPipelinesProductAllocationOutputReference, 
OpenpipelineV2MetricsPipelinesSecurityContext, 
openpipelineV2MetricsPipelinesSecurityContextToTerraform, 
openpipelineV2MetricsPipelinesSecurityContextToHclTerraform, 
OpenpipelineV2MetricsPipelinesSecurityContextOutputReference, 
OpenpipelineV2MetricsPipelinesSmartscapeEdgeExtraction, 
openpipelineV2MetricsPipelinesSmartscapeEdgeExtractionToTerraform, 
openpipelineV2MetricsPipelinesSmartscapeEdgeExtractionToHclTerraform, 
OpenpipelineV2MetricsPipelinesSmartscapeEdgeExtractionOutputReference, 
OpenpipelineV2MetricsPipelinesSmartscapeNodeExtraction, 
openpipelineV2MetricsPipelinesSmartscapeNodeExtractionToTerraform, 
openpipelineV2MetricsPipelinesSmartscapeNodeExtractionToHclTerraform, 
OpenpipelineV2MetricsPipelinesSmartscapeNodeExtractionOutputReference, 
OpenpipelineV2MetricsPipelinesStorage, 
openpipelineV2MetricsPipelinesStorageToTerraform, 
openpipelineV2MetricsPipelinesStorageToHclTerraform, 
OpenpipelineV2MetricsPipelinesStorageOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpenpipelineV2MetricsPipelinesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom pipeline id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_metrics_pipelines#custom_id OpenpipelineV2MetricsPipelines#custom_id}
  */
  readonly customId: string;
  /**
  * Display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_metrics_pipelines#display_name OpenpipelineV2MetricsPipelines#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_metrics_pipelines#id OpenpipelineV2MetricsPipelines#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * cost_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_metrics_pipelines#cost_allocation OpenpipelineV2MetricsPipelines#cost_allocation}
  */
  readonly costAllocation?: OpenpipelineV2MetricsPipelinesCostAllocation;
  /**
  * data_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_metrics_pipelines#data_extraction OpenpipelineV2MetricsPipelines#data_extraction}
  */
  readonly dataExtraction?: OpenpipelineV2MetricsPipelinesDataExtraction;
  /**
  * davis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_metrics_pipelines#davis OpenpipelineV2MetricsPipelines#davis}
  */
  readonly davis?: OpenpipelineV2MetricsPipelinesDavis;
  /**
  * metadata_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_metrics_pipelines#metadata_list OpenpipelineV2MetricsPipelines#metadata_list}
  */
  readonly metadataList?: OpenpipelineV2MetricsPipelinesMetadataListStruct;
  /**
  * metric_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_metrics_pipelines#metric_extraction OpenpipelineV2MetricsPipelines#metric_extraction}
  */
  readonly metricExtraction?: OpenpipelineV2MetricsPipelinesMetricExtraction;
  /**
  * processing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_metrics_pipelines#processing OpenpipelineV2MetricsPipelines#processing}
  */
  readonly processing?: OpenpipelineV2MetricsPipelinesProcessing;
  /**
  * product_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_metrics_pipelines#product_allocation OpenpipelineV2MetricsPipelines#product_allocation}
  */
  readonly productAllocation?: OpenpipelineV2MetricsPipelinesProductAllocation;
  /**
  * security_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_metrics_pipelines#security_context OpenpipelineV2MetricsPipelines#security_context}
  */
  readonly securityContext?: OpenpipelineV2MetricsPipelinesSecurityContext;
  /**
  * smartscape_edge_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_metrics_pipelines#smartscape_edge_extraction OpenpipelineV2MetricsPipelines#smartscape_edge_extraction}
  */
  readonly smartscapeEdgeExtraction?: OpenpipelineV2MetricsPipelinesSmartscapeEdgeExtraction;
  /**
  * smartscape_node_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_metrics_pipelines#smartscape_node_extraction OpenpipelineV2MetricsPipelines#smartscape_node_extraction}
  */
  readonly smartscapeNodeExtraction?: OpenpipelineV2MetricsPipelinesSmartscapeNodeExtraction;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_metrics_pipelines#storage OpenpipelineV2MetricsPipelines#storage}
  */
  readonly storage?: OpenpipelineV2MetricsPipelinesStorage;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_metrics_pipelines dynatrace_openpipeline_v2_metrics_pipelines}
*/
export class OpenpipelineV2MetricsPipelines extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_openpipeline_v2_metrics_pipelines";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpenpipelineV2MetricsPipelines resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenpipelineV2MetricsPipelines to import
  * @param importFromId The id of the existing OpenpipelineV2MetricsPipelines that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_metrics_pipelines#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenpipelineV2MetricsPipelines to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_openpipeline_v2_metrics_pipelines", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_metrics_pipelines dynatrace_openpipeline_v2_metrics_pipelines} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenpipelineV2MetricsPipelinesConfig
  */
  public constructor(scope: Construct, id: string, config: OpenpipelineV2MetricsPipelinesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_openpipeline_v2_metrics_pipelines',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customId = config.customId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._costAllocation.internalValue = config.costAllocation;
    this._dataExtraction.internalValue = config.dataExtraction;
    this._davis.internalValue = config.davis;
    this._metadataList.internalValue = config.metadataList;
    this._metricExtraction.internalValue = config.metricExtraction;
    this._processing.internalValue = config.processing;
    this._productAllocation.internalValue = config.productAllocation;
    this._securityContext.internalValue = config.securityContext;
    this._smartscapeEdgeExtraction.internalValue = config.smartscapeEdgeExtraction;
    this._smartscapeNodeExtraction.internalValue = config.smartscapeNodeExtraction;
    this._storage.internalValue = config.storage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_id - computed: false, optional: false, required: true
  private _customId?: string; 
  public get customId() {
    return this.getStringAttribute('custom_id');
  }
  public set customId(value: string) {
    this._customId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customIdInput() {
    return this._customId;
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

  // cost_allocation - computed: false, optional: true, required: false
  private _costAllocation = new OpenpipelineV2MetricsPipelinesCostAllocationOutputReference(this, "cost_allocation");
  public get costAllocation() {
    return this._costAllocation;
  }
  public putCostAllocation(value: OpenpipelineV2MetricsPipelinesCostAllocation) {
    this._costAllocation.internalValue = value;
  }
  public resetCostAllocation() {
    this._costAllocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costAllocationInput() {
    return this._costAllocation.internalValue;
  }

  // data_extraction - computed: false, optional: true, required: false
  private _dataExtraction = new OpenpipelineV2MetricsPipelinesDataExtractionOutputReference(this, "data_extraction");
  public get dataExtraction() {
    return this._dataExtraction;
  }
  public putDataExtraction(value: OpenpipelineV2MetricsPipelinesDataExtraction) {
    this._dataExtraction.internalValue = value;
  }
  public resetDataExtraction() {
    this._dataExtraction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataExtractionInput() {
    return this._dataExtraction.internalValue;
  }

  // davis - computed: false, optional: true, required: false
  private _davis = new OpenpipelineV2MetricsPipelinesDavisOutputReference(this, "davis");
  public get davis() {
    return this._davis;
  }
  public putDavis(value: OpenpipelineV2MetricsPipelinesDavis) {
    this._davis.internalValue = value;
  }
  public resetDavis() {
    this._davis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get davisInput() {
    return this._davis.internalValue;
  }

  // metadata_list - computed: false, optional: true, required: false
  private _metadataList = new OpenpipelineV2MetricsPipelinesMetadataListStructOutputReference(this, "metadata_list");
  public get metadataList() {
    return this._metadataList;
  }
  public putMetadataList(value: OpenpipelineV2MetricsPipelinesMetadataListStruct) {
    this._metadataList.internalValue = value;
  }
  public resetMetadataList() {
    this._metadataList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataListInput() {
    return this._metadataList.internalValue;
  }

  // metric_extraction - computed: false, optional: true, required: false
  private _metricExtraction = new OpenpipelineV2MetricsPipelinesMetricExtractionOutputReference(this, "metric_extraction");
  public get metricExtraction() {
    return this._metricExtraction;
  }
  public putMetricExtraction(value: OpenpipelineV2MetricsPipelinesMetricExtraction) {
    this._metricExtraction.internalValue = value;
  }
  public resetMetricExtraction() {
    this._metricExtraction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricExtractionInput() {
    return this._metricExtraction.internalValue;
  }

  // processing - computed: false, optional: true, required: false
  private _processing = new OpenpipelineV2MetricsPipelinesProcessingOutputReference(this, "processing");
  public get processing() {
    return this._processing;
  }
  public putProcessing(value: OpenpipelineV2MetricsPipelinesProcessing) {
    this._processing.internalValue = value;
  }
  public resetProcessing() {
    this._processing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingInput() {
    return this._processing.internalValue;
  }

  // product_allocation - computed: false, optional: true, required: false
  private _productAllocation = new OpenpipelineV2MetricsPipelinesProductAllocationOutputReference(this, "product_allocation");
  public get productAllocation() {
    return this._productAllocation;
  }
  public putProductAllocation(value: OpenpipelineV2MetricsPipelinesProductAllocation) {
    this._productAllocation.internalValue = value;
  }
  public resetProductAllocation() {
    this._productAllocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productAllocationInput() {
    return this._productAllocation.internalValue;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new OpenpipelineV2MetricsPipelinesSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: OpenpipelineV2MetricsPipelinesSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // smartscape_edge_extraction - computed: false, optional: true, required: false
  private _smartscapeEdgeExtraction = new OpenpipelineV2MetricsPipelinesSmartscapeEdgeExtractionOutputReference(this, "smartscape_edge_extraction");
  public get smartscapeEdgeExtraction() {
    return this._smartscapeEdgeExtraction;
  }
  public putSmartscapeEdgeExtraction(value: OpenpipelineV2MetricsPipelinesSmartscapeEdgeExtraction) {
    this._smartscapeEdgeExtraction.internalValue = value;
  }
  public resetSmartscapeEdgeExtraction() {
    this._smartscapeEdgeExtraction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartscapeEdgeExtractionInput() {
    return this._smartscapeEdgeExtraction.internalValue;
  }

  // smartscape_node_extraction - computed: false, optional: true, required: false
  private _smartscapeNodeExtraction = new OpenpipelineV2MetricsPipelinesSmartscapeNodeExtractionOutputReference(this, "smartscape_node_extraction");
  public get smartscapeNodeExtraction() {
    return this._smartscapeNodeExtraction;
  }
  public putSmartscapeNodeExtraction(value: OpenpipelineV2MetricsPipelinesSmartscapeNodeExtraction) {
    this._smartscapeNodeExtraction.internalValue = value;
  }
  public resetSmartscapeNodeExtraction() {
    this._smartscapeNodeExtraction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartscapeNodeExtractionInput() {
    return this._smartscapeNodeExtraction.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new OpenpipelineV2MetricsPipelinesStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: OpenpipelineV2MetricsPipelinesStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_id: cdktf.stringToTerraform(this._customId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      cost_allocation: openpipelineV2MetricsPipelinesCostAllocationToTerraform(this._costAllocation.internalValue),
      data_extraction: openpipelineV2MetricsPipelinesDataExtractionToTerraform(this._dataExtraction.internalValue),
      davis: openpipelineV2MetricsPipelinesDavisToTerraform(this._davis.internalValue),
      metadata_list: openpipelineV2MetricsPipelinesMetadataListStructToTerraform(this._metadataList.internalValue),
      metric_extraction: openpipelineV2MetricsPipelinesMetricExtractionToTerraform(this._metricExtraction.internalValue),
      processing: openpipelineV2MetricsPipelinesProcessingToTerraform(this._processing.internalValue),
      product_allocation: openpipelineV2MetricsPipelinesProductAllocationToTerraform(this._productAllocation.internalValue),
      security_context: openpipelineV2MetricsPipelinesSecurityContextToTerraform(this._securityContext.internalValue),
      smartscape_edge_extraction: openpipelineV2MetricsPipelinesSmartscapeEdgeExtractionToTerraform(this._smartscapeEdgeExtraction.internalValue),
      smartscape_node_extraction: openpipelineV2MetricsPipelinesSmartscapeNodeExtractionToTerraform(this._smartscapeNodeExtraction.internalValue),
      storage: openpipelineV2MetricsPipelinesStorageToTerraform(this._storage.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_id: {
        value: cdktf.stringToHclTerraform(this._customId),
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
      cost_allocation: {
        value: openpipelineV2MetricsPipelinesCostAllocationToHclTerraform(this._costAllocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2MetricsPipelinesCostAllocationList",
      },
      data_extraction: {
        value: openpipelineV2MetricsPipelinesDataExtractionToHclTerraform(this._dataExtraction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2MetricsPipelinesDataExtractionList",
      },
      davis: {
        value: openpipelineV2MetricsPipelinesDavisToHclTerraform(this._davis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2MetricsPipelinesDavisList",
      },
      metadata_list: {
        value: openpipelineV2MetricsPipelinesMetadataListStructToHclTerraform(this._metadataList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2MetricsPipelinesMetadataListStructList",
      },
      metric_extraction: {
        value: openpipelineV2MetricsPipelinesMetricExtractionToHclTerraform(this._metricExtraction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2MetricsPipelinesMetricExtractionList",
      },
      processing: {
        value: openpipelineV2MetricsPipelinesProcessingToHclTerraform(this._processing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2MetricsPipelinesProcessingList",
      },
      product_allocation: {
        value: openpipelineV2MetricsPipelinesProductAllocationToHclTerraform(this._productAllocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2MetricsPipelinesProductAllocationList",
      },
      security_context: {
        value: openpipelineV2MetricsPipelinesSecurityContextToHclTerraform(this._securityContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2MetricsPipelinesSecurityContextList",
      },
      smartscape_edge_extraction: {
        value: openpipelineV2MetricsPipelinesSmartscapeEdgeExtractionToHclTerraform(this._smartscapeEdgeExtraction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2MetricsPipelinesSmartscapeEdgeExtractionList",
      },
      smartscape_node_extraction: {
        value: openpipelineV2MetricsPipelinesSmartscapeNodeExtractionToHclTerraform(this._smartscapeNodeExtraction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2MetricsPipelinesSmartscapeNodeExtractionList",
      },
      storage: {
        value: openpipelineV2MetricsPipelinesStorageToHclTerraform(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2MetricsPipelinesStorageList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
