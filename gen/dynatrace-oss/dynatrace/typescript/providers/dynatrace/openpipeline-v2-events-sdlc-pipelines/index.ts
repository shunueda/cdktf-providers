// generated from terraform resource schema

import { OpenpipelineV2EventsSdlcPipelinesCostAllocation, 
openpipelineV2EventsSdlcPipelinesCostAllocationToTerraform, 
openpipelineV2EventsSdlcPipelinesCostAllocationToHclTerraform, 
OpenpipelineV2EventsSdlcPipelinesCostAllocationOutputReference, 
OpenpipelineV2EventsSdlcPipelinesDataExtraction, 
openpipelineV2EventsSdlcPipelinesDataExtractionToTerraform, 
openpipelineV2EventsSdlcPipelinesDataExtractionToHclTerraform, 
OpenpipelineV2EventsSdlcPipelinesDataExtractionOutputReference, 
OpenpipelineV2EventsSdlcPipelinesDavis, 
openpipelineV2EventsSdlcPipelinesDavisToTerraform, 
openpipelineV2EventsSdlcPipelinesDavisToHclTerraform, 
OpenpipelineV2EventsSdlcPipelinesDavisOutputReference, 
OpenpipelineV2EventsSdlcPipelinesMetricExtraction, 
openpipelineV2EventsSdlcPipelinesMetricExtractionToTerraform, 
openpipelineV2EventsSdlcPipelinesMetricExtractionToHclTerraform, 
OpenpipelineV2EventsSdlcPipelinesMetricExtractionOutputReference, 
OpenpipelineV2EventsSdlcPipelinesProcessing, 
openpipelineV2EventsSdlcPipelinesProcessingToTerraform, 
openpipelineV2EventsSdlcPipelinesProcessingToHclTerraform, 
OpenpipelineV2EventsSdlcPipelinesProcessingOutputReference, 
OpenpipelineV2EventsSdlcPipelinesProductAllocation, 
openpipelineV2EventsSdlcPipelinesProductAllocationToTerraform, 
openpipelineV2EventsSdlcPipelinesProductAllocationToHclTerraform, 
OpenpipelineV2EventsSdlcPipelinesProductAllocationOutputReference, 
OpenpipelineV2EventsSdlcPipelinesSecurityContext, 
openpipelineV2EventsSdlcPipelinesSecurityContextToTerraform, 
openpipelineV2EventsSdlcPipelinesSecurityContextToHclTerraform, 
OpenpipelineV2EventsSdlcPipelinesSecurityContextOutputReference, 
OpenpipelineV2EventsSdlcPipelinesSmartscapeEdgeExtraction, 
openpipelineV2EventsSdlcPipelinesSmartscapeEdgeExtractionToTerraform, 
openpipelineV2EventsSdlcPipelinesSmartscapeEdgeExtractionToHclTerraform, 
OpenpipelineV2EventsSdlcPipelinesSmartscapeEdgeExtractionOutputReference, 
OpenpipelineV2EventsSdlcPipelinesSmartscapeNodeExtraction, 
openpipelineV2EventsSdlcPipelinesSmartscapeNodeExtractionToTerraform, 
openpipelineV2EventsSdlcPipelinesSmartscapeNodeExtractionToHclTerraform, 
OpenpipelineV2EventsSdlcPipelinesSmartscapeNodeExtractionOutputReference, 
OpenpipelineV2EventsSdlcPipelinesStorage, 
openpipelineV2EventsSdlcPipelinesStorageToTerraform, 
openpipelineV2EventsSdlcPipelinesStorageToHclTerraform, 
OpenpipelineV2EventsSdlcPipelinesStorageOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpenpipelineV2EventsSdlcPipelinesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom pipeline id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_events_sdlc_pipelines#custom_id OpenpipelineV2EventsSdlcPipelines#custom_id}
  */
  readonly customId: string;
  /**
  * Display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_events_sdlc_pipelines#display_name OpenpipelineV2EventsSdlcPipelines#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_events_sdlc_pipelines#id OpenpipelineV2EventsSdlcPipelines#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * cost_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_events_sdlc_pipelines#cost_allocation OpenpipelineV2EventsSdlcPipelines#cost_allocation}
  */
  readonly costAllocation?: OpenpipelineV2EventsSdlcPipelinesCostAllocation;
  /**
  * data_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_events_sdlc_pipelines#data_extraction OpenpipelineV2EventsSdlcPipelines#data_extraction}
  */
  readonly dataExtraction?: OpenpipelineV2EventsSdlcPipelinesDataExtraction;
  /**
  * davis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_events_sdlc_pipelines#davis OpenpipelineV2EventsSdlcPipelines#davis}
  */
  readonly davis?: OpenpipelineV2EventsSdlcPipelinesDavis;
  /**
  * metric_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_events_sdlc_pipelines#metric_extraction OpenpipelineV2EventsSdlcPipelines#metric_extraction}
  */
  readonly metricExtraction?: OpenpipelineV2EventsSdlcPipelinesMetricExtraction;
  /**
  * processing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_events_sdlc_pipelines#processing OpenpipelineV2EventsSdlcPipelines#processing}
  */
  readonly processing?: OpenpipelineV2EventsSdlcPipelinesProcessing;
  /**
  * product_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_events_sdlc_pipelines#product_allocation OpenpipelineV2EventsSdlcPipelines#product_allocation}
  */
  readonly productAllocation?: OpenpipelineV2EventsSdlcPipelinesProductAllocation;
  /**
  * security_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_events_sdlc_pipelines#security_context OpenpipelineV2EventsSdlcPipelines#security_context}
  */
  readonly securityContext?: OpenpipelineV2EventsSdlcPipelinesSecurityContext;
  /**
  * smartscape_edge_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_events_sdlc_pipelines#smartscape_edge_extraction OpenpipelineV2EventsSdlcPipelines#smartscape_edge_extraction}
  */
  readonly smartscapeEdgeExtraction?: OpenpipelineV2EventsSdlcPipelinesSmartscapeEdgeExtraction;
  /**
  * smartscape_node_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_events_sdlc_pipelines#smartscape_node_extraction OpenpipelineV2EventsSdlcPipelines#smartscape_node_extraction}
  */
  readonly smartscapeNodeExtraction?: OpenpipelineV2EventsSdlcPipelinesSmartscapeNodeExtraction;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_events_sdlc_pipelines#storage OpenpipelineV2EventsSdlcPipelines#storage}
  */
  readonly storage?: OpenpipelineV2EventsSdlcPipelinesStorage;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_events_sdlc_pipelines dynatrace_openpipeline_v2_events_sdlc_pipelines}
*/
export class OpenpipelineV2EventsSdlcPipelines extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_openpipeline_v2_events_sdlc_pipelines";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpenpipelineV2EventsSdlcPipelines resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenpipelineV2EventsSdlcPipelines to import
  * @param importFromId The id of the existing OpenpipelineV2EventsSdlcPipelines that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_events_sdlc_pipelines#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenpipelineV2EventsSdlcPipelines to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_openpipeline_v2_events_sdlc_pipelines", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_events_sdlc_pipelines dynatrace_openpipeline_v2_events_sdlc_pipelines} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenpipelineV2EventsSdlcPipelinesConfig
  */
  public constructor(scope: Construct, id: string, config: OpenpipelineV2EventsSdlcPipelinesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_openpipeline_v2_events_sdlc_pipelines',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
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
  private _costAllocation = new OpenpipelineV2EventsSdlcPipelinesCostAllocationOutputReference(this, "cost_allocation");
  public get costAllocation() {
    return this._costAllocation;
  }
  public putCostAllocation(value: OpenpipelineV2EventsSdlcPipelinesCostAllocation) {
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
  private _dataExtraction = new OpenpipelineV2EventsSdlcPipelinesDataExtractionOutputReference(this, "data_extraction");
  public get dataExtraction() {
    return this._dataExtraction;
  }
  public putDataExtraction(value: OpenpipelineV2EventsSdlcPipelinesDataExtraction) {
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
  private _davis = new OpenpipelineV2EventsSdlcPipelinesDavisOutputReference(this, "davis");
  public get davis() {
    return this._davis;
  }
  public putDavis(value: OpenpipelineV2EventsSdlcPipelinesDavis) {
    this._davis.internalValue = value;
  }
  public resetDavis() {
    this._davis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get davisInput() {
    return this._davis.internalValue;
  }

  // metric_extraction - computed: false, optional: true, required: false
  private _metricExtraction = new OpenpipelineV2EventsSdlcPipelinesMetricExtractionOutputReference(this, "metric_extraction");
  public get metricExtraction() {
    return this._metricExtraction;
  }
  public putMetricExtraction(value: OpenpipelineV2EventsSdlcPipelinesMetricExtraction) {
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
  private _processing = new OpenpipelineV2EventsSdlcPipelinesProcessingOutputReference(this, "processing");
  public get processing() {
    return this._processing;
  }
  public putProcessing(value: OpenpipelineV2EventsSdlcPipelinesProcessing) {
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
  private _productAllocation = new OpenpipelineV2EventsSdlcPipelinesProductAllocationOutputReference(this, "product_allocation");
  public get productAllocation() {
    return this._productAllocation;
  }
  public putProductAllocation(value: OpenpipelineV2EventsSdlcPipelinesProductAllocation) {
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
  private _securityContext = new OpenpipelineV2EventsSdlcPipelinesSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: OpenpipelineV2EventsSdlcPipelinesSecurityContext) {
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
  private _smartscapeEdgeExtraction = new OpenpipelineV2EventsSdlcPipelinesSmartscapeEdgeExtractionOutputReference(this, "smartscape_edge_extraction");
  public get smartscapeEdgeExtraction() {
    return this._smartscapeEdgeExtraction;
  }
  public putSmartscapeEdgeExtraction(value: OpenpipelineV2EventsSdlcPipelinesSmartscapeEdgeExtraction) {
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
  private _smartscapeNodeExtraction = new OpenpipelineV2EventsSdlcPipelinesSmartscapeNodeExtractionOutputReference(this, "smartscape_node_extraction");
  public get smartscapeNodeExtraction() {
    return this._smartscapeNodeExtraction;
  }
  public putSmartscapeNodeExtraction(value: OpenpipelineV2EventsSdlcPipelinesSmartscapeNodeExtraction) {
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
  private _storage = new OpenpipelineV2EventsSdlcPipelinesStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: OpenpipelineV2EventsSdlcPipelinesStorage) {
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
      cost_allocation: openpipelineV2EventsSdlcPipelinesCostAllocationToTerraform(this._costAllocation.internalValue),
      data_extraction: openpipelineV2EventsSdlcPipelinesDataExtractionToTerraform(this._dataExtraction.internalValue),
      davis: openpipelineV2EventsSdlcPipelinesDavisToTerraform(this._davis.internalValue),
      metric_extraction: openpipelineV2EventsSdlcPipelinesMetricExtractionToTerraform(this._metricExtraction.internalValue),
      processing: openpipelineV2EventsSdlcPipelinesProcessingToTerraform(this._processing.internalValue),
      product_allocation: openpipelineV2EventsSdlcPipelinesProductAllocationToTerraform(this._productAllocation.internalValue),
      security_context: openpipelineV2EventsSdlcPipelinesSecurityContextToTerraform(this._securityContext.internalValue),
      smartscape_edge_extraction: openpipelineV2EventsSdlcPipelinesSmartscapeEdgeExtractionToTerraform(this._smartscapeEdgeExtraction.internalValue),
      smartscape_node_extraction: openpipelineV2EventsSdlcPipelinesSmartscapeNodeExtractionToTerraform(this._smartscapeNodeExtraction.internalValue),
      storage: openpipelineV2EventsSdlcPipelinesStorageToTerraform(this._storage.internalValue),
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
        value: openpipelineV2EventsSdlcPipelinesCostAllocationToHclTerraform(this._costAllocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2EventsSdlcPipelinesCostAllocationList",
      },
      data_extraction: {
        value: openpipelineV2EventsSdlcPipelinesDataExtractionToHclTerraform(this._dataExtraction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2EventsSdlcPipelinesDataExtractionList",
      },
      davis: {
        value: openpipelineV2EventsSdlcPipelinesDavisToHclTerraform(this._davis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2EventsSdlcPipelinesDavisList",
      },
      metric_extraction: {
        value: openpipelineV2EventsSdlcPipelinesMetricExtractionToHclTerraform(this._metricExtraction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2EventsSdlcPipelinesMetricExtractionList",
      },
      processing: {
        value: openpipelineV2EventsSdlcPipelinesProcessingToHclTerraform(this._processing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2EventsSdlcPipelinesProcessingList",
      },
      product_allocation: {
        value: openpipelineV2EventsSdlcPipelinesProductAllocationToHclTerraform(this._productAllocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2EventsSdlcPipelinesProductAllocationList",
      },
      security_context: {
        value: openpipelineV2EventsSdlcPipelinesSecurityContextToHclTerraform(this._securityContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2EventsSdlcPipelinesSecurityContextList",
      },
      smartscape_edge_extraction: {
        value: openpipelineV2EventsSdlcPipelinesSmartscapeEdgeExtractionToHclTerraform(this._smartscapeEdgeExtraction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2EventsSdlcPipelinesSmartscapeEdgeExtractionList",
      },
      smartscape_node_extraction: {
        value: openpipelineV2EventsSdlcPipelinesSmartscapeNodeExtractionToHclTerraform(this._smartscapeNodeExtraction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2EventsSdlcPipelinesSmartscapeNodeExtractionList",
      },
      storage: {
        value: openpipelineV2EventsSdlcPipelinesStorageToHclTerraform(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
