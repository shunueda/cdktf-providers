// generated from terraform resource schema

import { OpenpipelineV2EventsSecurityPipelinesCostAllocation, 
openpipelineV2EventsSecurityPipelinesCostAllocationToTerraform, 
openpipelineV2EventsSecurityPipelinesCostAllocationToHclTerraform, 
OpenpipelineV2EventsSecurityPipelinesCostAllocationOutputReference, 
OpenpipelineV2EventsSecurityPipelinesDataExtraction, 
openpipelineV2EventsSecurityPipelinesDataExtractionToTerraform, 
openpipelineV2EventsSecurityPipelinesDataExtractionToHclTerraform, 
OpenpipelineV2EventsSecurityPipelinesDataExtractionOutputReference, 
OpenpipelineV2EventsSecurityPipelinesDavis, 
openpipelineV2EventsSecurityPipelinesDavisToTerraform, 
openpipelineV2EventsSecurityPipelinesDavisToHclTerraform, 
OpenpipelineV2EventsSecurityPipelinesDavisOutputReference, 
OpenpipelineV2EventsSecurityPipelinesMetricExtraction, 
openpipelineV2EventsSecurityPipelinesMetricExtractionToTerraform, 
openpipelineV2EventsSecurityPipelinesMetricExtractionToHclTerraform, 
OpenpipelineV2EventsSecurityPipelinesMetricExtractionOutputReference, 
OpenpipelineV2EventsSecurityPipelinesProcessing, 
openpipelineV2EventsSecurityPipelinesProcessingToTerraform, 
openpipelineV2EventsSecurityPipelinesProcessingToHclTerraform, 
OpenpipelineV2EventsSecurityPipelinesProcessingOutputReference, 
OpenpipelineV2EventsSecurityPipelinesProductAllocation, 
openpipelineV2EventsSecurityPipelinesProductAllocationToTerraform, 
openpipelineV2EventsSecurityPipelinesProductAllocationToHclTerraform, 
OpenpipelineV2EventsSecurityPipelinesProductAllocationOutputReference, 
OpenpipelineV2EventsSecurityPipelinesSecurityContext, 
openpipelineV2EventsSecurityPipelinesSecurityContextToTerraform, 
openpipelineV2EventsSecurityPipelinesSecurityContextToHclTerraform, 
OpenpipelineV2EventsSecurityPipelinesSecurityContextOutputReference, 
OpenpipelineV2EventsSecurityPipelinesStorage, 
openpipelineV2EventsSecurityPipelinesStorageToTerraform, 
openpipelineV2EventsSecurityPipelinesStorageToHclTerraform, 
OpenpipelineV2EventsSecurityPipelinesStorageOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpenpipelineV2EventsSecurityPipelinesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom pipeline id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_events_security_pipelines#custom_id OpenpipelineV2EventsSecurityPipelines#custom_id}
  */
  readonly customId: string;
  /**
  * Display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_events_security_pipelines#display_name OpenpipelineV2EventsSecurityPipelines#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_events_security_pipelines#id OpenpipelineV2EventsSecurityPipelines#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * cost_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_events_security_pipelines#cost_allocation OpenpipelineV2EventsSecurityPipelines#cost_allocation}
  */
  readonly costAllocation: OpenpipelineV2EventsSecurityPipelinesCostAllocation;
  /**
  * data_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_events_security_pipelines#data_extraction OpenpipelineV2EventsSecurityPipelines#data_extraction}
  */
  readonly dataExtraction: OpenpipelineV2EventsSecurityPipelinesDataExtraction;
  /**
  * davis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_events_security_pipelines#davis OpenpipelineV2EventsSecurityPipelines#davis}
  */
  readonly davis: OpenpipelineV2EventsSecurityPipelinesDavis;
  /**
  * metric_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_events_security_pipelines#metric_extraction OpenpipelineV2EventsSecurityPipelines#metric_extraction}
  */
  readonly metricExtraction: OpenpipelineV2EventsSecurityPipelinesMetricExtraction;
  /**
  * processing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_events_security_pipelines#processing OpenpipelineV2EventsSecurityPipelines#processing}
  */
  readonly processing: OpenpipelineV2EventsSecurityPipelinesProcessing;
  /**
  * product_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_events_security_pipelines#product_allocation OpenpipelineV2EventsSecurityPipelines#product_allocation}
  */
  readonly productAllocation: OpenpipelineV2EventsSecurityPipelinesProductAllocation;
  /**
  * security_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_events_security_pipelines#security_context OpenpipelineV2EventsSecurityPipelines#security_context}
  */
  readonly securityContext: OpenpipelineV2EventsSecurityPipelinesSecurityContext;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_events_security_pipelines#storage OpenpipelineV2EventsSecurityPipelines#storage}
  */
  readonly storage: OpenpipelineV2EventsSecurityPipelinesStorage;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_events_security_pipelines dynatrace_openpipeline_v2_events_security_pipelines}
*/
export class OpenpipelineV2EventsSecurityPipelines extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_openpipeline_v2_events_security_pipelines";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpenpipelineV2EventsSecurityPipelines resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenpipelineV2EventsSecurityPipelines to import
  * @param importFromId The id of the existing OpenpipelineV2EventsSecurityPipelines that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_events_security_pipelines#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenpipelineV2EventsSecurityPipelines to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_openpipeline_v2_events_security_pipelines", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_events_security_pipelines dynatrace_openpipeline_v2_events_security_pipelines} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenpipelineV2EventsSecurityPipelinesConfig
  */
  public constructor(scope: Construct, id: string, config: OpenpipelineV2EventsSecurityPipelinesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_openpipeline_v2_events_security_pipelines',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
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

  // cost_allocation - computed: false, optional: false, required: true
  private _costAllocation = new OpenpipelineV2EventsSecurityPipelinesCostAllocationOutputReference(this, "cost_allocation");
  public get costAllocation() {
    return this._costAllocation;
  }
  public putCostAllocation(value: OpenpipelineV2EventsSecurityPipelinesCostAllocation) {
    this._costAllocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get costAllocationInput() {
    return this._costAllocation.internalValue;
  }

  // data_extraction - computed: false, optional: false, required: true
  private _dataExtraction = new OpenpipelineV2EventsSecurityPipelinesDataExtractionOutputReference(this, "data_extraction");
  public get dataExtraction() {
    return this._dataExtraction;
  }
  public putDataExtraction(value: OpenpipelineV2EventsSecurityPipelinesDataExtraction) {
    this._dataExtraction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataExtractionInput() {
    return this._dataExtraction.internalValue;
  }

  // davis - computed: false, optional: false, required: true
  private _davis = new OpenpipelineV2EventsSecurityPipelinesDavisOutputReference(this, "davis");
  public get davis() {
    return this._davis;
  }
  public putDavis(value: OpenpipelineV2EventsSecurityPipelinesDavis) {
    this._davis.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get davisInput() {
    return this._davis.internalValue;
  }

  // metric_extraction - computed: false, optional: false, required: true
  private _metricExtraction = new OpenpipelineV2EventsSecurityPipelinesMetricExtractionOutputReference(this, "metric_extraction");
  public get metricExtraction() {
    return this._metricExtraction;
  }
  public putMetricExtraction(value: OpenpipelineV2EventsSecurityPipelinesMetricExtraction) {
    this._metricExtraction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricExtractionInput() {
    return this._metricExtraction.internalValue;
  }

  // processing - computed: false, optional: false, required: true
  private _processing = new OpenpipelineV2EventsSecurityPipelinesProcessingOutputReference(this, "processing");
  public get processing() {
    return this._processing;
  }
  public putProcessing(value: OpenpipelineV2EventsSecurityPipelinesProcessing) {
    this._processing.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processingInput() {
    return this._processing.internalValue;
  }

  // product_allocation - computed: false, optional: false, required: true
  private _productAllocation = new OpenpipelineV2EventsSecurityPipelinesProductAllocationOutputReference(this, "product_allocation");
  public get productAllocation() {
    return this._productAllocation;
  }
  public putProductAllocation(value: OpenpipelineV2EventsSecurityPipelinesProductAllocation) {
    this._productAllocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productAllocationInput() {
    return this._productAllocation.internalValue;
  }

  // security_context - computed: false, optional: false, required: true
  private _securityContext = new OpenpipelineV2EventsSecurityPipelinesSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: OpenpipelineV2EventsSecurityPipelinesSecurityContext) {
    this._securityContext.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // storage - computed: false, optional: false, required: true
  private _storage = new OpenpipelineV2EventsSecurityPipelinesStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: OpenpipelineV2EventsSecurityPipelinesStorage) {
    this._storage.internalValue = value;
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
      cost_allocation: openpipelineV2EventsSecurityPipelinesCostAllocationToTerraform(this._costAllocation.internalValue),
      data_extraction: openpipelineV2EventsSecurityPipelinesDataExtractionToTerraform(this._dataExtraction.internalValue),
      davis: openpipelineV2EventsSecurityPipelinesDavisToTerraform(this._davis.internalValue),
      metric_extraction: openpipelineV2EventsSecurityPipelinesMetricExtractionToTerraform(this._metricExtraction.internalValue),
      processing: openpipelineV2EventsSecurityPipelinesProcessingToTerraform(this._processing.internalValue),
      product_allocation: openpipelineV2EventsSecurityPipelinesProductAllocationToTerraform(this._productAllocation.internalValue),
      security_context: openpipelineV2EventsSecurityPipelinesSecurityContextToTerraform(this._securityContext.internalValue),
      storage: openpipelineV2EventsSecurityPipelinesStorageToTerraform(this._storage.internalValue),
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
        value: openpipelineV2EventsSecurityPipelinesCostAllocationToHclTerraform(this._costAllocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2EventsSecurityPipelinesCostAllocationList",
      },
      data_extraction: {
        value: openpipelineV2EventsSecurityPipelinesDataExtractionToHclTerraform(this._dataExtraction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2EventsSecurityPipelinesDataExtractionList",
      },
      davis: {
        value: openpipelineV2EventsSecurityPipelinesDavisToHclTerraform(this._davis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2EventsSecurityPipelinesDavisList",
      },
      metric_extraction: {
        value: openpipelineV2EventsSecurityPipelinesMetricExtractionToHclTerraform(this._metricExtraction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2EventsSecurityPipelinesMetricExtractionList",
      },
      processing: {
        value: openpipelineV2EventsSecurityPipelinesProcessingToHclTerraform(this._processing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2EventsSecurityPipelinesProcessingList",
      },
      product_allocation: {
        value: openpipelineV2EventsSecurityPipelinesProductAllocationToHclTerraform(this._productAllocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2EventsSecurityPipelinesProductAllocationList",
      },
      security_context: {
        value: openpipelineV2EventsSecurityPipelinesSecurityContextToHclTerraform(this._securityContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2EventsSecurityPipelinesSecurityContextList",
      },
      storage: {
        value: openpipelineV2EventsSecurityPipelinesStorageToHclTerraform(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2EventsSecurityPipelinesStorageList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
