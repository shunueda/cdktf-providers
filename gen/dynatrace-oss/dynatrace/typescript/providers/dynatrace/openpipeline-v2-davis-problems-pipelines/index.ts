// generated from terraform resource schema

import { OpenpipelineV2DavisProblemsPipelinesCostAllocation, 
openpipelineV2DavisProblemsPipelinesCostAllocationToTerraform, 
openpipelineV2DavisProblemsPipelinesCostAllocationToHclTerraform, 
OpenpipelineV2DavisProblemsPipelinesCostAllocationOutputReference, 
OpenpipelineV2DavisProblemsPipelinesDataExtraction, 
openpipelineV2DavisProblemsPipelinesDataExtractionToTerraform, 
openpipelineV2DavisProblemsPipelinesDataExtractionToHclTerraform, 
OpenpipelineV2DavisProblemsPipelinesDataExtractionOutputReference, 
OpenpipelineV2DavisProblemsPipelinesDavis, 
openpipelineV2DavisProblemsPipelinesDavisToTerraform, 
openpipelineV2DavisProblemsPipelinesDavisToHclTerraform, 
OpenpipelineV2DavisProblemsPipelinesDavisOutputReference, 
OpenpipelineV2DavisProblemsPipelinesMetadataListStruct, 
openpipelineV2DavisProblemsPipelinesMetadataListStructToTerraform, 
openpipelineV2DavisProblemsPipelinesMetadataListStructToHclTerraform, 
OpenpipelineV2DavisProblemsPipelinesMetadataListStructOutputReference, 
OpenpipelineV2DavisProblemsPipelinesMetricExtraction, 
openpipelineV2DavisProblemsPipelinesMetricExtractionToTerraform, 
openpipelineV2DavisProblemsPipelinesMetricExtractionToHclTerraform, 
OpenpipelineV2DavisProblemsPipelinesMetricExtractionOutputReference, 
OpenpipelineV2DavisProblemsPipelinesProcessing, 
openpipelineV2DavisProblemsPipelinesProcessingToTerraform, 
openpipelineV2DavisProblemsPipelinesProcessingToHclTerraform, 
OpenpipelineV2DavisProblemsPipelinesProcessingOutputReference, 
OpenpipelineV2DavisProblemsPipelinesProductAllocation, 
openpipelineV2DavisProblemsPipelinesProductAllocationToTerraform, 
openpipelineV2DavisProblemsPipelinesProductAllocationToHclTerraform, 
OpenpipelineV2DavisProblemsPipelinesProductAllocationOutputReference, 
OpenpipelineV2DavisProblemsPipelinesSecurityContext, 
openpipelineV2DavisProblemsPipelinesSecurityContextToTerraform, 
openpipelineV2DavisProblemsPipelinesSecurityContextToHclTerraform, 
OpenpipelineV2DavisProblemsPipelinesSecurityContextOutputReference, 
OpenpipelineV2DavisProblemsPipelinesSmartscapeEdgeExtraction, 
openpipelineV2DavisProblemsPipelinesSmartscapeEdgeExtractionToTerraform, 
openpipelineV2DavisProblemsPipelinesSmartscapeEdgeExtractionToHclTerraform, 
OpenpipelineV2DavisProblemsPipelinesSmartscapeEdgeExtractionOutputReference, 
OpenpipelineV2DavisProblemsPipelinesSmartscapeNodeExtraction, 
openpipelineV2DavisProblemsPipelinesSmartscapeNodeExtractionToTerraform, 
openpipelineV2DavisProblemsPipelinesSmartscapeNodeExtractionToHclTerraform, 
OpenpipelineV2DavisProblemsPipelinesSmartscapeNodeExtractionOutputReference, 
OpenpipelineV2DavisProblemsPipelinesStorage, 
openpipelineV2DavisProblemsPipelinesStorageToTerraform, 
openpipelineV2DavisProblemsPipelinesStorageToHclTerraform, 
OpenpipelineV2DavisProblemsPipelinesStorageOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpenpipelineV2DavisProblemsPipelinesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom pipeline id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_davis_problems_pipelines#custom_id OpenpipelineV2DavisProblemsPipelines#custom_id}
  */
  readonly customId: string;
  /**
  * Display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_davis_problems_pipelines#display_name OpenpipelineV2DavisProblemsPipelines#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_davis_problems_pipelines#id OpenpipelineV2DavisProblemsPipelines#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * cost_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_davis_problems_pipelines#cost_allocation OpenpipelineV2DavisProblemsPipelines#cost_allocation}
  */
  readonly costAllocation?: OpenpipelineV2DavisProblemsPipelinesCostAllocation;
  /**
  * data_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_davis_problems_pipelines#data_extraction OpenpipelineV2DavisProblemsPipelines#data_extraction}
  */
  readonly dataExtraction?: OpenpipelineV2DavisProblemsPipelinesDataExtraction;
  /**
  * davis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_davis_problems_pipelines#davis OpenpipelineV2DavisProblemsPipelines#davis}
  */
  readonly davis?: OpenpipelineV2DavisProblemsPipelinesDavis;
  /**
  * metadata_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_davis_problems_pipelines#metadata_list OpenpipelineV2DavisProblemsPipelines#metadata_list}
  */
  readonly metadataList?: OpenpipelineV2DavisProblemsPipelinesMetadataListStruct;
  /**
  * metric_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_davis_problems_pipelines#metric_extraction OpenpipelineV2DavisProblemsPipelines#metric_extraction}
  */
  readonly metricExtraction?: OpenpipelineV2DavisProblemsPipelinesMetricExtraction;
  /**
  * processing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_davis_problems_pipelines#processing OpenpipelineV2DavisProblemsPipelines#processing}
  */
  readonly processing?: OpenpipelineV2DavisProblemsPipelinesProcessing;
  /**
  * product_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_davis_problems_pipelines#product_allocation OpenpipelineV2DavisProblemsPipelines#product_allocation}
  */
  readonly productAllocation?: OpenpipelineV2DavisProblemsPipelinesProductAllocation;
  /**
  * security_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_davis_problems_pipelines#security_context OpenpipelineV2DavisProblemsPipelines#security_context}
  */
  readonly securityContext?: OpenpipelineV2DavisProblemsPipelinesSecurityContext;
  /**
  * smartscape_edge_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_davis_problems_pipelines#smartscape_edge_extraction OpenpipelineV2DavisProblemsPipelines#smartscape_edge_extraction}
  */
  readonly smartscapeEdgeExtraction?: OpenpipelineV2DavisProblemsPipelinesSmartscapeEdgeExtraction;
  /**
  * smartscape_node_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_davis_problems_pipelines#smartscape_node_extraction OpenpipelineV2DavisProblemsPipelines#smartscape_node_extraction}
  */
  readonly smartscapeNodeExtraction?: OpenpipelineV2DavisProblemsPipelinesSmartscapeNodeExtraction;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_davis_problems_pipelines#storage OpenpipelineV2DavisProblemsPipelines#storage}
  */
  readonly storage?: OpenpipelineV2DavisProblemsPipelinesStorage;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_davis_problems_pipelines dynatrace_openpipeline_v2_davis_problems_pipelines}
*/
export class OpenpipelineV2DavisProblemsPipelines extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_openpipeline_v2_davis_problems_pipelines";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpenpipelineV2DavisProblemsPipelines resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenpipelineV2DavisProblemsPipelines to import
  * @param importFromId The id of the existing OpenpipelineV2DavisProblemsPipelines that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_davis_problems_pipelines#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenpipelineV2DavisProblemsPipelines to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_openpipeline_v2_davis_problems_pipelines", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_davis_problems_pipelines dynatrace_openpipeline_v2_davis_problems_pipelines} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenpipelineV2DavisProblemsPipelinesConfig
  */
  public constructor(scope: Construct, id: string, config: OpenpipelineV2DavisProblemsPipelinesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_openpipeline_v2_davis_problems_pipelines',
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
  private _costAllocation = new OpenpipelineV2DavisProblemsPipelinesCostAllocationOutputReference(this, "cost_allocation");
  public get costAllocation() {
    return this._costAllocation;
  }
  public putCostAllocation(value: OpenpipelineV2DavisProblemsPipelinesCostAllocation) {
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
  private _dataExtraction = new OpenpipelineV2DavisProblemsPipelinesDataExtractionOutputReference(this, "data_extraction");
  public get dataExtraction() {
    return this._dataExtraction;
  }
  public putDataExtraction(value: OpenpipelineV2DavisProblemsPipelinesDataExtraction) {
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
  private _davis = new OpenpipelineV2DavisProblemsPipelinesDavisOutputReference(this, "davis");
  public get davis() {
    return this._davis;
  }
  public putDavis(value: OpenpipelineV2DavisProblemsPipelinesDavis) {
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
  private _metadataList = new OpenpipelineV2DavisProblemsPipelinesMetadataListStructOutputReference(this, "metadata_list");
  public get metadataList() {
    return this._metadataList;
  }
  public putMetadataList(value: OpenpipelineV2DavisProblemsPipelinesMetadataListStruct) {
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
  private _metricExtraction = new OpenpipelineV2DavisProblemsPipelinesMetricExtractionOutputReference(this, "metric_extraction");
  public get metricExtraction() {
    return this._metricExtraction;
  }
  public putMetricExtraction(value: OpenpipelineV2DavisProblemsPipelinesMetricExtraction) {
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
  private _processing = new OpenpipelineV2DavisProblemsPipelinesProcessingOutputReference(this, "processing");
  public get processing() {
    return this._processing;
  }
  public putProcessing(value: OpenpipelineV2DavisProblemsPipelinesProcessing) {
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
  private _productAllocation = new OpenpipelineV2DavisProblemsPipelinesProductAllocationOutputReference(this, "product_allocation");
  public get productAllocation() {
    return this._productAllocation;
  }
  public putProductAllocation(value: OpenpipelineV2DavisProblemsPipelinesProductAllocation) {
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
  private _securityContext = new OpenpipelineV2DavisProblemsPipelinesSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: OpenpipelineV2DavisProblemsPipelinesSecurityContext) {
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
  private _smartscapeEdgeExtraction = new OpenpipelineV2DavisProblemsPipelinesSmartscapeEdgeExtractionOutputReference(this, "smartscape_edge_extraction");
  public get smartscapeEdgeExtraction() {
    return this._smartscapeEdgeExtraction;
  }
  public putSmartscapeEdgeExtraction(value: OpenpipelineV2DavisProblemsPipelinesSmartscapeEdgeExtraction) {
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
  private _smartscapeNodeExtraction = new OpenpipelineV2DavisProblemsPipelinesSmartscapeNodeExtractionOutputReference(this, "smartscape_node_extraction");
  public get smartscapeNodeExtraction() {
    return this._smartscapeNodeExtraction;
  }
  public putSmartscapeNodeExtraction(value: OpenpipelineV2DavisProblemsPipelinesSmartscapeNodeExtraction) {
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
  private _storage = new OpenpipelineV2DavisProblemsPipelinesStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: OpenpipelineV2DavisProblemsPipelinesStorage) {
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
      cost_allocation: openpipelineV2DavisProblemsPipelinesCostAllocationToTerraform(this._costAllocation.internalValue),
      data_extraction: openpipelineV2DavisProblemsPipelinesDataExtractionToTerraform(this._dataExtraction.internalValue),
      davis: openpipelineV2DavisProblemsPipelinesDavisToTerraform(this._davis.internalValue),
      metadata_list: openpipelineV2DavisProblemsPipelinesMetadataListStructToTerraform(this._metadataList.internalValue),
      metric_extraction: openpipelineV2DavisProblemsPipelinesMetricExtractionToTerraform(this._metricExtraction.internalValue),
      processing: openpipelineV2DavisProblemsPipelinesProcessingToTerraform(this._processing.internalValue),
      product_allocation: openpipelineV2DavisProblemsPipelinesProductAllocationToTerraform(this._productAllocation.internalValue),
      security_context: openpipelineV2DavisProblemsPipelinesSecurityContextToTerraform(this._securityContext.internalValue),
      smartscape_edge_extraction: openpipelineV2DavisProblemsPipelinesSmartscapeEdgeExtractionToTerraform(this._smartscapeEdgeExtraction.internalValue),
      smartscape_node_extraction: openpipelineV2DavisProblemsPipelinesSmartscapeNodeExtractionToTerraform(this._smartscapeNodeExtraction.internalValue),
      storage: openpipelineV2DavisProblemsPipelinesStorageToTerraform(this._storage.internalValue),
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
        value: openpipelineV2DavisProblemsPipelinesCostAllocationToHclTerraform(this._costAllocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2DavisProblemsPipelinesCostAllocationList",
      },
      data_extraction: {
        value: openpipelineV2DavisProblemsPipelinesDataExtractionToHclTerraform(this._dataExtraction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2DavisProblemsPipelinesDataExtractionList",
      },
      davis: {
        value: openpipelineV2DavisProblemsPipelinesDavisToHclTerraform(this._davis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2DavisProblemsPipelinesDavisList",
      },
      metadata_list: {
        value: openpipelineV2DavisProblemsPipelinesMetadataListStructToHclTerraform(this._metadataList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2DavisProblemsPipelinesMetadataListStructList",
      },
      metric_extraction: {
        value: openpipelineV2DavisProblemsPipelinesMetricExtractionToHclTerraform(this._metricExtraction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2DavisProblemsPipelinesMetricExtractionList",
      },
      processing: {
        value: openpipelineV2DavisProblemsPipelinesProcessingToHclTerraform(this._processing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2DavisProblemsPipelinesProcessingList",
      },
      product_allocation: {
        value: openpipelineV2DavisProblemsPipelinesProductAllocationToHclTerraform(this._productAllocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2DavisProblemsPipelinesProductAllocationList",
      },
      security_context: {
        value: openpipelineV2DavisProblemsPipelinesSecurityContextToHclTerraform(this._securityContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2DavisProblemsPipelinesSecurityContextList",
      },
      smartscape_edge_extraction: {
        value: openpipelineV2DavisProblemsPipelinesSmartscapeEdgeExtractionToHclTerraform(this._smartscapeEdgeExtraction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2DavisProblemsPipelinesSmartscapeEdgeExtractionList",
      },
      smartscape_node_extraction: {
        value: openpipelineV2DavisProblemsPipelinesSmartscapeNodeExtractionToHclTerraform(this._smartscapeNodeExtraction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2DavisProblemsPipelinesSmartscapeNodeExtractionList",
      },
      storage: {
        value: openpipelineV2DavisProblemsPipelinesStorageToHclTerraform(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2DavisProblemsPipelinesStorageList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
