// generated from terraform resource schema

import { OpenpipelineV2SecurityEventsPipelinesCostAllocation, 
openpipelineV2SecurityEventsPipelinesCostAllocationToTerraform, 
openpipelineV2SecurityEventsPipelinesCostAllocationToHclTerraform, 
OpenpipelineV2SecurityEventsPipelinesCostAllocationOutputReference, 
OpenpipelineV2SecurityEventsPipelinesDataExtraction, 
openpipelineV2SecurityEventsPipelinesDataExtractionToTerraform, 
openpipelineV2SecurityEventsPipelinesDataExtractionToHclTerraform, 
OpenpipelineV2SecurityEventsPipelinesDataExtractionOutputReference, 
OpenpipelineV2SecurityEventsPipelinesDavis, 
openpipelineV2SecurityEventsPipelinesDavisToTerraform, 
openpipelineV2SecurityEventsPipelinesDavisToHclTerraform, 
OpenpipelineV2SecurityEventsPipelinesDavisOutputReference, 
OpenpipelineV2SecurityEventsPipelinesMetricExtraction, 
openpipelineV2SecurityEventsPipelinesMetricExtractionToTerraform, 
openpipelineV2SecurityEventsPipelinesMetricExtractionToHclTerraform, 
OpenpipelineV2SecurityEventsPipelinesMetricExtractionOutputReference, 
OpenpipelineV2SecurityEventsPipelinesProcessing, 
openpipelineV2SecurityEventsPipelinesProcessingToTerraform, 
openpipelineV2SecurityEventsPipelinesProcessingToHclTerraform, 
OpenpipelineV2SecurityEventsPipelinesProcessingOutputReference, 
OpenpipelineV2SecurityEventsPipelinesProductAllocation, 
openpipelineV2SecurityEventsPipelinesProductAllocationToTerraform, 
openpipelineV2SecurityEventsPipelinesProductAllocationToHclTerraform, 
OpenpipelineV2SecurityEventsPipelinesProductAllocationOutputReference, 
OpenpipelineV2SecurityEventsPipelinesSecurityContext, 
openpipelineV2SecurityEventsPipelinesSecurityContextToTerraform, 
openpipelineV2SecurityEventsPipelinesSecurityContextToHclTerraform, 
OpenpipelineV2SecurityEventsPipelinesSecurityContextOutputReference, 
OpenpipelineV2SecurityEventsPipelinesSmartscapeEdgeExtraction, 
openpipelineV2SecurityEventsPipelinesSmartscapeEdgeExtractionToTerraform, 
openpipelineV2SecurityEventsPipelinesSmartscapeEdgeExtractionToHclTerraform, 
OpenpipelineV2SecurityEventsPipelinesSmartscapeEdgeExtractionOutputReference, 
OpenpipelineV2SecurityEventsPipelinesSmartscapeNodeExtraction, 
openpipelineV2SecurityEventsPipelinesSmartscapeNodeExtractionToTerraform, 
openpipelineV2SecurityEventsPipelinesSmartscapeNodeExtractionToHclTerraform, 
OpenpipelineV2SecurityEventsPipelinesSmartscapeNodeExtractionOutputReference, 
OpenpipelineV2SecurityEventsPipelinesStorage, 
openpipelineV2SecurityEventsPipelinesStorageToTerraform, 
openpipelineV2SecurityEventsPipelinesStorageToHclTerraform, 
OpenpipelineV2SecurityEventsPipelinesStorageOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpenpipelineV2SecurityEventsPipelinesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom pipeline id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_security_events_pipelines#custom_id OpenpipelineV2SecurityEventsPipelines#custom_id}
  */
  readonly customId: string;
  /**
  * Display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_security_events_pipelines#display_name OpenpipelineV2SecurityEventsPipelines#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_security_events_pipelines#id OpenpipelineV2SecurityEventsPipelines#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * cost_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_security_events_pipelines#cost_allocation OpenpipelineV2SecurityEventsPipelines#cost_allocation}
  */
  readonly costAllocation?: OpenpipelineV2SecurityEventsPipelinesCostAllocation;
  /**
  * data_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_security_events_pipelines#data_extraction OpenpipelineV2SecurityEventsPipelines#data_extraction}
  */
  readonly dataExtraction?: OpenpipelineV2SecurityEventsPipelinesDataExtraction;
  /**
  * davis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_security_events_pipelines#davis OpenpipelineV2SecurityEventsPipelines#davis}
  */
  readonly davis?: OpenpipelineV2SecurityEventsPipelinesDavis;
  /**
  * metric_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_security_events_pipelines#metric_extraction OpenpipelineV2SecurityEventsPipelines#metric_extraction}
  */
  readonly metricExtraction?: OpenpipelineV2SecurityEventsPipelinesMetricExtraction;
  /**
  * processing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_security_events_pipelines#processing OpenpipelineV2SecurityEventsPipelines#processing}
  */
  readonly processing?: OpenpipelineV2SecurityEventsPipelinesProcessing;
  /**
  * product_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_security_events_pipelines#product_allocation OpenpipelineV2SecurityEventsPipelines#product_allocation}
  */
  readonly productAllocation?: OpenpipelineV2SecurityEventsPipelinesProductAllocation;
  /**
  * security_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_security_events_pipelines#security_context OpenpipelineV2SecurityEventsPipelines#security_context}
  */
  readonly securityContext?: OpenpipelineV2SecurityEventsPipelinesSecurityContext;
  /**
  * smartscape_edge_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_security_events_pipelines#smartscape_edge_extraction OpenpipelineV2SecurityEventsPipelines#smartscape_edge_extraction}
  */
  readonly smartscapeEdgeExtraction?: OpenpipelineV2SecurityEventsPipelinesSmartscapeEdgeExtraction;
  /**
  * smartscape_node_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_security_events_pipelines#smartscape_node_extraction OpenpipelineV2SecurityEventsPipelines#smartscape_node_extraction}
  */
  readonly smartscapeNodeExtraction?: OpenpipelineV2SecurityEventsPipelinesSmartscapeNodeExtraction;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_security_events_pipelines#storage OpenpipelineV2SecurityEventsPipelines#storage}
  */
  readonly storage?: OpenpipelineV2SecurityEventsPipelinesStorage;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_security_events_pipelines dynatrace_openpipeline_v2_security_events_pipelines}
*/
export class OpenpipelineV2SecurityEventsPipelines extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_openpipeline_v2_security_events_pipelines";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpenpipelineV2SecurityEventsPipelines resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenpipelineV2SecurityEventsPipelines to import
  * @param importFromId The id of the existing OpenpipelineV2SecurityEventsPipelines that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_security_events_pipelines#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenpipelineV2SecurityEventsPipelines to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_openpipeline_v2_security_events_pipelines", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_security_events_pipelines dynatrace_openpipeline_v2_security_events_pipelines} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenpipelineV2SecurityEventsPipelinesConfig
  */
  public constructor(scope: Construct, id: string, config: OpenpipelineV2SecurityEventsPipelinesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_openpipeline_v2_security_events_pipelines',
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
  private _costAllocation = new OpenpipelineV2SecurityEventsPipelinesCostAllocationOutputReference(this, "cost_allocation");
  public get costAllocation() {
    return this._costAllocation;
  }
  public putCostAllocation(value: OpenpipelineV2SecurityEventsPipelinesCostAllocation) {
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
  private _dataExtraction = new OpenpipelineV2SecurityEventsPipelinesDataExtractionOutputReference(this, "data_extraction");
  public get dataExtraction() {
    return this._dataExtraction;
  }
  public putDataExtraction(value: OpenpipelineV2SecurityEventsPipelinesDataExtraction) {
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
  private _davis = new OpenpipelineV2SecurityEventsPipelinesDavisOutputReference(this, "davis");
  public get davis() {
    return this._davis;
  }
  public putDavis(value: OpenpipelineV2SecurityEventsPipelinesDavis) {
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
  private _metricExtraction = new OpenpipelineV2SecurityEventsPipelinesMetricExtractionOutputReference(this, "metric_extraction");
  public get metricExtraction() {
    return this._metricExtraction;
  }
  public putMetricExtraction(value: OpenpipelineV2SecurityEventsPipelinesMetricExtraction) {
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
  private _processing = new OpenpipelineV2SecurityEventsPipelinesProcessingOutputReference(this, "processing");
  public get processing() {
    return this._processing;
  }
  public putProcessing(value: OpenpipelineV2SecurityEventsPipelinesProcessing) {
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
  private _productAllocation = new OpenpipelineV2SecurityEventsPipelinesProductAllocationOutputReference(this, "product_allocation");
  public get productAllocation() {
    return this._productAllocation;
  }
  public putProductAllocation(value: OpenpipelineV2SecurityEventsPipelinesProductAllocation) {
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
  private _securityContext = new OpenpipelineV2SecurityEventsPipelinesSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: OpenpipelineV2SecurityEventsPipelinesSecurityContext) {
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
  private _smartscapeEdgeExtraction = new OpenpipelineV2SecurityEventsPipelinesSmartscapeEdgeExtractionOutputReference(this, "smartscape_edge_extraction");
  public get smartscapeEdgeExtraction() {
    return this._smartscapeEdgeExtraction;
  }
  public putSmartscapeEdgeExtraction(value: OpenpipelineV2SecurityEventsPipelinesSmartscapeEdgeExtraction) {
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
  private _smartscapeNodeExtraction = new OpenpipelineV2SecurityEventsPipelinesSmartscapeNodeExtractionOutputReference(this, "smartscape_node_extraction");
  public get smartscapeNodeExtraction() {
    return this._smartscapeNodeExtraction;
  }
  public putSmartscapeNodeExtraction(value: OpenpipelineV2SecurityEventsPipelinesSmartscapeNodeExtraction) {
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
  private _storage = new OpenpipelineV2SecurityEventsPipelinesStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: OpenpipelineV2SecurityEventsPipelinesStorage) {
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
      cost_allocation: openpipelineV2SecurityEventsPipelinesCostAllocationToTerraform(this._costAllocation.internalValue),
      data_extraction: openpipelineV2SecurityEventsPipelinesDataExtractionToTerraform(this._dataExtraction.internalValue),
      davis: openpipelineV2SecurityEventsPipelinesDavisToTerraform(this._davis.internalValue),
      metric_extraction: openpipelineV2SecurityEventsPipelinesMetricExtractionToTerraform(this._metricExtraction.internalValue),
      processing: openpipelineV2SecurityEventsPipelinesProcessingToTerraform(this._processing.internalValue),
      product_allocation: openpipelineV2SecurityEventsPipelinesProductAllocationToTerraform(this._productAllocation.internalValue),
      security_context: openpipelineV2SecurityEventsPipelinesSecurityContextToTerraform(this._securityContext.internalValue),
      smartscape_edge_extraction: openpipelineV2SecurityEventsPipelinesSmartscapeEdgeExtractionToTerraform(this._smartscapeEdgeExtraction.internalValue),
      smartscape_node_extraction: openpipelineV2SecurityEventsPipelinesSmartscapeNodeExtractionToTerraform(this._smartscapeNodeExtraction.internalValue),
      storage: openpipelineV2SecurityEventsPipelinesStorageToTerraform(this._storage.internalValue),
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
        value: openpipelineV2SecurityEventsPipelinesCostAllocationToHclTerraform(this._costAllocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2SecurityEventsPipelinesCostAllocationList",
      },
      data_extraction: {
        value: openpipelineV2SecurityEventsPipelinesDataExtractionToHclTerraform(this._dataExtraction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2SecurityEventsPipelinesDataExtractionList",
      },
      davis: {
        value: openpipelineV2SecurityEventsPipelinesDavisToHclTerraform(this._davis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2SecurityEventsPipelinesDavisList",
      },
      metric_extraction: {
        value: openpipelineV2SecurityEventsPipelinesMetricExtractionToHclTerraform(this._metricExtraction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2SecurityEventsPipelinesMetricExtractionList",
      },
      processing: {
        value: openpipelineV2SecurityEventsPipelinesProcessingToHclTerraform(this._processing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2SecurityEventsPipelinesProcessingList",
      },
      product_allocation: {
        value: openpipelineV2SecurityEventsPipelinesProductAllocationToHclTerraform(this._productAllocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2SecurityEventsPipelinesProductAllocationList",
      },
      security_context: {
        value: openpipelineV2SecurityEventsPipelinesSecurityContextToHclTerraform(this._securityContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2SecurityEventsPipelinesSecurityContextList",
      },
      smartscape_edge_extraction: {
        value: openpipelineV2SecurityEventsPipelinesSmartscapeEdgeExtractionToHclTerraform(this._smartscapeEdgeExtraction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2SecurityEventsPipelinesSmartscapeEdgeExtractionList",
      },
      smartscape_node_extraction: {
        value: openpipelineV2SecurityEventsPipelinesSmartscapeNodeExtractionToHclTerraform(this._smartscapeNodeExtraction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2SecurityEventsPipelinesSmartscapeNodeExtractionList",
      },
      storage: {
        value: openpipelineV2SecurityEventsPipelinesStorageToHclTerraform(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2SecurityEventsPipelinesStorageList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
