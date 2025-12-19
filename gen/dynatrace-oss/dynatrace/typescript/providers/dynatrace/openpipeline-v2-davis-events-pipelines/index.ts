// generated from terraform resource schema

import { OpenpipelineV2DavisEventsPipelinesCostAllocation, 
openpipelineV2DavisEventsPipelinesCostAllocationToTerraform, 
openpipelineV2DavisEventsPipelinesCostAllocationToHclTerraform, 
OpenpipelineV2DavisEventsPipelinesCostAllocationOutputReference, 
OpenpipelineV2DavisEventsPipelinesDataExtraction, 
openpipelineV2DavisEventsPipelinesDataExtractionToTerraform, 
openpipelineV2DavisEventsPipelinesDataExtractionToHclTerraform, 
OpenpipelineV2DavisEventsPipelinesDataExtractionOutputReference, 
OpenpipelineV2DavisEventsPipelinesDavis, 
openpipelineV2DavisEventsPipelinesDavisToTerraform, 
openpipelineV2DavisEventsPipelinesDavisToHclTerraform, 
OpenpipelineV2DavisEventsPipelinesDavisOutputReference, 
OpenpipelineV2DavisEventsPipelinesMetadataListStruct, 
openpipelineV2DavisEventsPipelinesMetadataListStructToTerraform, 
openpipelineV2DavisEventsPipelinesMetadataListStructToHclTerraform, 
OpenpipelineV2DavisEventsPipelinesMetadataListStructOutputReference, 
OpenpipelineV2DavisEventsPipelinesMetricExtraction, 
openpipelineV2DavisEventsPipelinesMetricExtractionToTerraform, 
openpipelineV2DavisEventsPipelinesMetricExtractionToHclTerraform, 
OpenpipelineV2DavisEventsPipelinesMetricExtractionOutputReference, 
OpenpipelineV2DavisEventsPipelinesProcessing, 
openpipelineV2DavisEventsPipelinesProcessingToTerraform, 
openpipelineV2DavisEventsPipelinesProcessingToHclTerraform, 
OpenpipelineV2DavisEventsPipelinesProcessingOutputReference, 
OpenpipelineV2DavisEventsPipelinesProductAllocation, 
openpipelineV2DavisEventsPipelinesProductAllocationToTerraform, 
openpipelineV2DavisEventsPipelinesProductAllocationToHclTerraform, 
OpenpipelineV2DavisEventsPipelinesProductAllocationOutputReference, 
OpenpipelineV2DavisEventsPipelinesSecurityContext, 
openpipelineV2DavisEventsPipelinesSecurityContextToTerraform, 
openpipelineV2DavisEventsPipelinesSecurityContextToHclTerraform, 
OpenpipelineV2DavisEventsPipelinesSecurityContextOutputReference, 
OpenpipelineV2DavisEventsPipelinesSmartscapeEdgeExtraction, 
openpipelineV2DavisEventsPipelinesSmartscapeEdgeExtractionToTerraform, 
openpipelineV2DavisEventsPipelinesSmartscapeEdgeExtractionToHclTerraform, 
OpenpipelineV2DavisEventsPipelinesSmartscapeEdgeExtractionOutputReference, 
OpenpipelineV2DavisEventsPipelinesSmartscapeNodeExtraction, 
openpipelineV2DavisEventsPipelinesSmartscapeNodeExtractionToTerraform, 
openpipelineV2DavisEventsPipelinesSmartscapeNodeExtractionToHclTerraform, 
OpenpipelineV2DavisEventsPipelinesSmartscapeNodeExtractionOutputReference, 
OpenpipelineV2DavisEventsPipelinesStorage, 
openpipelineV2DavisEventsPipelinesStorageToTerraform, 
openpipelineV2DavisEventsPipelinesStorageToHclTerraform, 
OpenpipelineV2DavisEventsPipelinesStorageOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpenpipelineV2DavisEventsPipelinesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom pipeline id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_davis_events_pipelines#custom_id OpenpipelineV2DavisEventsPipelines#custom_id}
  */
  readonly customId: string;
  /**
  * Display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_davis_events_pipelines#display_name OpenpipelineV2DavisEventsPipelines#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_davis_events_pipelines#id OpenpipelineV2DavisEventsPipelines#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * cost_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_davis_events_pipelines#cost_allocation OpenpipelineV2DavisEventsPipelines#cost_allocation}
  */
  readonly costAllocation?: OpenpipelineV2DavisEventsPipelinesCostAllocation;
  /**
  * data_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_davis_events_pipelines#data_extraction OpenpipelineV2DavisEventsPipelines#data_extraction}
  */
  readonly dataExtraction?: OpenpipelineV2DavisEventsPipelinesDataExtraction;
  /**
  * davis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_davis_events_pipelines#davis OpenpipelineV2DavisEventsPipelines#davis}
  */
  readonly davis?: OpenpipelineV2DavisEventsPipelinesDavis;
  /**
  * metadata_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_davis_events_pipelines#metadata_list OpenpipelineV2DavisEventsPipelines#metadata_list}
  */
  readonly metadataList?: OpenpipelineV2DavisEventsPipelinesMetadataListStruct;
  /**
  * metric_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_davis_events_pipelines#metric_extraction OpenpipelineV2DavisEventsPipelines#metric_extraction}
  */
  readonly metricExtraction?: OpenpipelineV2DavisEventsPipelinesMetricExtraction;
  /**
  * processing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_davis_events_pipelines#processing OpenpipelineV2DavisEventsPipelines#processing}
  */
  readonly processing?: OpenpipelineV2DavisEventsPipelinesProcessing;
  /**
  * product_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_davis_events_pipelines#product_allocation OpenpipelineV2DavisEventsPipelines#product_allocation}
  */
  readonly productAllocation?: OpenpipelineV2DavisEventsPipelinesProductAllocation;
  /**
  * security_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_davis_events_pipelines#security_context OpenpipelineV2DavisEventsPipelines#security_context}
  */
  readonly securityContext?: OpenpipelineV2DavisEventsPipelinesSecurityContext;
  /**
  * smartscape_edge_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_davis_events_pipelines#smartscape_edge_extraction OpenpipelineV2DavisEventsPipelines#smartscape_edge_extraction}
  */
  readonly smartscapeEdgeExtraction?: OpenpipelineV2DavisEventsPipelinesSmartscapeEdgeExtraction;
  /**
  * smartscape_node_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_davis_events_pipelines#smartscape_node_extraction OpenpipelineV2DavisEventsPipelines#smartscape_node_extraction}
  */
  readonly smartscapeNodeExtraction?: OpenpipelineV2DavisEventsPipelinesSmartscapeNodeExtraction;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_davis_events_pipelines#storage OpenpipelineV2DavisEventsPipelines#storage}
  */
  readonly storage?: OpenpipelineV2DavisEventsPipelinesStorage;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_davis_events_pipelines dynatrace_openpipeline_v2_davis_events_pipelines}
*/
export class OpenpipelineV2DavisEventsPipelines extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_openpipeline_v2_davis_events_pipelines";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpenpipelineV2DavisEventsPipelines resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenpipelineV2DavisEventsPipelines to import
  * @param importFromId The id of the existing OpenpipelineV2DavisEventsPipelines that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_davis_events_pipelines#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenpipelineV2DavisEventsPipelines to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_openpipeline_v2_davis_events_pipelines", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_davis_events_pipelines dynatrace_openpipeline_v2_davis_events_pipelines} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenpipelineV2DavisEventsPipelinesConfig
  */
  public constructor(scope: Construct, id: string, config: OpenpipelineV2DavisEventsPipelinesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_openpipeline_v2_davis_events_pipelines',
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
  private _costAllocation = new OpenpipelineV2DavisEventsPipelinesCostAllocationOutputReference(this, "cost_allocation");
  public get costAllocation() {
    return this._costAllocation;
  }
  public putCostAllocation(value: OpenpipelineV2DavisEventsPipelinesCostAllocation) {
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
  private _dataExtraction = new OpenpipelineV2DavisEventsPipelinesDataExtractionOutputReference(this, "data_extraction");
  public get dataExtraction() {
    return this._dataExtraction;
  }
  public putDataExtraction(value: OpenpipelineV2DavisEventsPipelinesDataExtraction) {
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
  private _davis = new OpenpipelineV2DavisEventsPipelinesDavisOutputReference(this, "davis");
  public get davis() {
    return this._davis;
  }
  public putDavis(value: OpenpipelineV2DavisEventsPipelinesDavis) {
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
  private _metadataList = new OpenpipelineV2DavisEventsPipelinesMetadataListStructOutputReference(this, "metadata_list");
  public get metadataList() {
    return this._metadataList;
  }
  public putMetadataList(value: OpenpipelineV2DavisEventsPipelinesMetadataListStruct) {
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
  private _metricExtraction = new OpenpipelineV2DavisEventsPipelinesMetricExtractionOutputReference(this, "metric_extraction");
  public get metricExtraction() {
    return this._metricExtraction;
  }
  public putMetricExtraction(value: OpenpipelineV2DavisEventsPipelinesMetricExtraction) {
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
  private _processing = new OpenpipelineV2DavisEventsPipelinesProcessingOutputReference(this, "processing");
  public get processing() {
    return this._processing;
  }
  public putProcessing(value: OpenpipelineV2DavisEventsPipelinesProcessing) {
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
  private _productAllocation = new OpenpipelineV2DavisEventsPipelinesProductAllocationOutputReference(this, "product_allocation");
  public get productAllocation() {
    return this._productAllocation;
  }
  public putProductAllocation(value: OpenpipelineV2DavisEventsPipelinesProductAllocation) {
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
  private _securityContext = new OpenpipelineV2DavisEventsPipelinesSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: OpenpipelineV2DavisEventsPipelinesSecurityContext) {
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
  private _smartscapeEdgeExtraction = new OpenpipelineV2DavisEventsPipelinesSmartscapeEdgeExtractionOutputReference(this, "smartscape_edge_extraction");
  public get smartscapeEdgeExtraction() {
    return this._smartscapeEdgeExtraction;
  }
  public putSmartscapeEdgeExtraction(value: OpenpipelineV2DavisEventsPipelinesSmartscapeEdgeExtraction) {
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
  private _smartscapeNodeExtraction = new OpenpipelineV2DavisEventsPipelinesSmartscapeNodeExtractionOutputReference(this, "smartscape_node_extraction");
  public get smartscapeNodeExtraction() {
    return this._smartscapeNodeExtraction;
  }
  public putSmartscapeNodeExtraction(value: OpenpipelineV2DavisEventsPipelinesSmartscapeNodeExtraction) {
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
  private _storage = new OpenpipelineV2DavisEventsPipelinesStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: OpenpipelineV2DavisEventsPipelinesStorage) {
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
      cost_allocation: openpipelineV2DavisEventsPipelinesCostAllocationToTerraform(this._costAllocation.internalValue),
      data_extraction: openpipelineV2DavisEventsPipelinesDataExtractionToTerraform(this._dataExtraction.internalValue),
      davis: openpipelineV2DavisEventsPipelinesDavisToTerraform(this._davis.internalValue),
      metadata_list: openpipelineV2DavisEventsPipelinesMetadataListStructToTerraform(this._metadataList.internalValue),
      metric_extraction: openpipelineV2DavisEventsPipelinesMetricExtractionToTerraform(this._metricExtraction.internalValue),
      processing: openpipelineV2DavisEventsPipelinesProcessingToTerraform(this._processing.internalValue),
      product_allocation: openpipelineV2DavisEventsPipelinesProductAllocationToTerraform(this._productAllocation.internalValue),
      security_context: openpipelineV2DavisEventsPipelinesSecurityContextToTerraform(this._securityContext.internalValue),
      smartscape_edge_extraction: openpipelineV2DavisEventsPipelinesSmartscapeEdgeExtractionToTerraform(this._smartscapeEdgeExtraction.internalValue),
      smartscape_node_extraction: openpipelineV2DavisEventsPipelinesSmartscapeNodeExtractionToTerraform(this._smartscapeNodeExtraction.internalValue),
      storage: openpipelineV2DavisEventsPipelinesStorageToTerraform(this._storage.internalValue),
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
        value: openpipelineV2DavisEventsPipelinesCostAllocationToHclTerraform(this._costAllocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationList",
      },
      data_extraction: {
        value: openpipelineV2DavisEventsPipelinesDataExtractionToHclTerraform(this._dataExtraction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionList",
      },
      davis: {
        value: openpipelineV2DavisEventsPipelinesDavisToHclTerraform(this._davis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2DavisEventsPipelinesDavisList",
      },
      metadata_list: {
        value: openpipelineV2DavisEventsPipelinesMetadataListStructToHclTerraform(this._metadataList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2DavisEventsPipelinesMetadataListStructList",
      },
      metric_extraction: {
        value: openpipelineV2DavisEventsPipelinesMetricExtractionToHclTerraform(this._metricExtraction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2DavisEventsPipelinesMetricExtractionList",
      },
      processing: {
        value: openpipelineV2DavisEventsPipelinesProcessingToHclTerraform(this._processing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2DavisEventsPipelinesProcessingList",
      },
      product_allocation: {
        value: openpipelineV2DavisEventsPipelinesProductAllocationToHclTerraform(this._productAllocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2DavisEventsPipelinesProductAllocationList",
      },
      security_context: {
        value: openpipelineV2DavisEventsPipelinesSecurityContextToHclTerraform(this._securityContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2DavisEventsPipelinesSecurityContextList",
      },
      smartscape_edge_extraction: {
        value: openpipelineV2DavisEventsPipelinesSmartscapeEdgeExtractionToHclTerraform(this._smartscapeEdgeExtraction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2DavisEventsPipelinesSmartscapeEdgeExtractionList",
      },
      smartscape_node_extraction: {
        value: openpipelineV2DavisEventsPipelinesSmartscapeNodeExtractionToHclTerraform(this._smartscapeNodeExtraction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2DavisEventsPipelinesSmartscapeNodeExtractionList",
      },
      storage: {
        value: openpipelineV2DavisEventsPipelinesStorageToHclTerraform(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2DavisEventsPipelinesStorageList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
