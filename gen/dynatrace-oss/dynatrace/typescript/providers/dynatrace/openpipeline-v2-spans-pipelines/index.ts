// generated from terraform resource schema

import { OpenpipelineV2SpansPipelinesCostAllocation, 
openpipelineV2SpansPipelinesCostAllocationToTerraform, 
openpipelineV2SpansPipelinesCostAllocationToHclTerraform, 
OpenpipelineV2SpansPipelinesCostAllocationOutputReference, 
OpenpipelineV2SpansPipelinesDataExtraction, 
openpipelineV2SpansPipelinesDataExtractionToTerraform, 
openpipelineV2SpansPipelinesDataExtractionToHclTerraform, 
OpenpipelineV2SpansPipelinesDataExtractionOutputReference, 
OpenpipelineV2SpansPipelinesDavis, 
openpipelineV2SpansPipelinesDavisToTerraform, 
openpipelineV2SpansPipelinesDavisToHclTerraform, 
OpenpipelineV2SpansPipelinesDavisOutputReference, 
OpenpipelineV2SpansPipelinesMetricExtraction, 
openpipelineV2SpansPipelinesMetricExtractionToTerraform, 
openpipelineV2SpansPipelinesMetricExtractionToHclTerraform, 
OpenpipelineV2SpansPipelinesMetricExtractionOutputReference, 
OpenpipelineV2SpansPipelinesProcessing, 
openpipelineV2SpansPipelinesProcessingToTerraform, 
openpipelineV2SpansPipelinesProcessingToHclTerraform, 
OpenpipelineV2SpansPipelinesProcessingOutputReference, 
OpenpipelineV2SpansPipelinesProductAllocation, 
openpipelineV2SpansPipelinesProductAllocationToTerraform, 
openpipelineV2SpansPipelinesProductAllocationToHclTerraform, 
OpenpipelineV2SpansPipelinesProductAllocationOutputReference, 
OpenpipelineV2SpansPipelinesSecurityContext, 
openpipelineV2SpansPipelinesSecurityContextToTerraform, 
openpipelineV2SpansPipelinesSecurityContextToHclTerraform, 
OpenpipelineV2SpansPipelinesSecurityContextOutputReference, 
OpenpipelineV2SpansPipelinesStorage, 
openpipelineV2SpansPipelinesStorageToTerraform, 
openpipelineV2SpansPipelinesStorageToHclTerraform, 
OpenpipelineV2SpansPipelinesStorageOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpenpipelineV2SpansPipelinesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom pipeline id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_spans_pipelines#custom_id OpenpipelineV2SpansPipelines#custom_id}
  */
  readonly customId: string;
  /**
  * Display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_spans_pipelines#display_name OpenpipelineV2SpansPipelines#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_spans_pipelines#id OpenpipelineV2SpansPipelines#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * cost_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_spans_pipelines#cost_allocation OpenpipelineV2SpansPipelines#cost_allocation}
  */
  readonly costAllocation: OpenpipelineV2SpansPipelinesCostAllocation;
  /**
  * data_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_spans_pipelines#data_extraction OpenpipelineV2SpansPipelines#data_extraction}
  */
  readonly dataExtraction: OpenpipelineV2SpansPipelinesDataExtraction;
  /**
  * davis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_spans_pipelines#davis OpenpipelineV2SpansPipelines#davis}
  */
  readonly davis: OpenpipelineV2SpansPipelinesDavis;
  /**
  * metric_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_spans_pipelines#metric_extraction OpenpipelineV2SpansPipelines#metric_extraction}
  */
  readonly metricExtraction: OpenpipelineV2SpansPipelinesMetricExtraction;
  /**
  * processing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_spans_pipelines#processing OpenpipelineV2SpansPipelines#processing}
  */
  readonly processing: OpenpipelineV2SpansPipelinesProcessing;
  /**
  * product_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_spans_pipelines#product_allocation OpenpipelineV2SpansPipelines#product_allocation}
  */
  readonly productAllocation: OpenpipelineV2SpansPipelinesProductAllocation;
  /**
  * security_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_spans_pipelines#security_context OpenpipelineV2SpansPipelines#security_context}
  */
  readonly securityContext: OpenpipelineV2SpansPipelinesSecurityContext;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_spans_pipelines#storage OpenpipelineV2SpansPipelines#storage}
  */
  readonly storage: OpenpipelineV2SpansPipelinesStorage;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_spans_pipelines dynatrace_openpipeline_v2_spans_pipelines}
*/
export class OpenpipelineV2SpansPipelines extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_openpipeline_v2_spans_pipelines";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpenpipelineV2SpansPipelines resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenpipelineV2SpansPipelines to import
  * @param importFromId The id of the existing OpenpipelineV2SpansPipelines that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_spans_pipelines#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenpipelineV2SpansPipelines to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_openpipeline_v2_spans_pipelines", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_spans_pipelines dynatrace_openpipeline_v2_spans_pipelines} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenpipelineV2SpansPipelinesConfig
  */
  public constructor(scope: Construct, id: string, config: OpenpipelineV2SpansPipelinesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_openpipeline_v2_spans_pipelines',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
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
  private _costAllocation = new OpenpipelineV2SpansPipelinesCostAllocationOutputReference(this, "cost_allocation");
  public get costAllocation() {
    return this._costAllocation;
  }
  public putCostAllocation(value: OpenpipelineV2SpansPipelinesCostAllocation) {
    this._costAllocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get costAllocationInput() {
    return this._costAllocation.internalValue;
  }

  // data_extraction - computed: false, optional: false, required: true
  private _dataExtraction = new OpenpipelineV2SpansPipelinesDataExtractionOutputReference(this, "data_extraction");
  public get dataExtraction() {
    return this._dataExtraction;
  }
  public putDataExtraction(value: OpenpipelineV2SpansPipelinesDataExtraction) {
    this._dataExtraction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataExtractionInput() {
    return this._dataExtraction.internalValue;
  }

  // davis - computed: false, optional: false, required: true
  private _davis = new OpenpipelineV2SpansPipelinesDavisOutputReference(this, "davis");
  public get davis() {
    return this._davis;
  }
  public putDavis(value: OpenpipelineV2SpansPipelinesDavis) {
    this._davis.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get davisInput() {
    return this._davis.internalValue;
  }

  // metric_extraction - computed: false, optional: false, required: true
  private _metricExtraction = new OpenpipelineV2SpansPipelinesMetricExtractionOutputReference(this, "metric_extraction");
  public get metricExtraction() {
    return this._metricExtraction;
  }
  public putMetricExtraction(value: OpenpipelineV2SpansPipelinesMetricExtraction) {
    this._metricExtraction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricExtractionInput() {
    return this._metricExtraction.internalValue;
  }

  // processing - computed: false, optional: false, required: true
  private _processing = new OpenpipelineV2SpansPipelinesProcessingOutputReference(this, "processing");
  public get processing() {
    return this._processing;
  }
  public putProcessing(value: OpenpipelineV2SpansPipelinesProcessing) {
    this._processing.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processingInput() {
    return this._processing.internalValue;
  }

  // product_allocation - computed: false, optional: false, required: true
  private _productAllocation = new OpenpipelineV2SpansPipelinesProductAllocationOutputReference(this, "product_allocation");
  public get productAllocation() {
    return this._productAllocation;
  }
  public putProductAllocation(value: OpenpipelineV2SpansPipelinesProductAllocation) {
    this._productAllocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productAllocationInput() {
    return this._productAllocation.internalValue;
  }

  // security_context - computed: false, optional: false, required: true
  private _securityContext = new OpenpipelineV2SpansPipelinesSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: OpenpipelineV2SpansPipelinesSecurityContext) {
    this._securityContext.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // storage - computed: false, optional: false, required: true
  private _storage = new OpenpipelineV2SpansPipelinesStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: OpenpipelineV2SpansPipelinesStorage) {
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
      cost_allocation: openpipelineV2SpansPipelinesCostAllocationToTerraform(this._costAllocation.internalValue),
      data_extraction: openpipelineV2SpansPipelinesDataExtractionToTerraform(this._dataExtraction.internalValue),
      davis: openpipelineV2SpansPipelinesDavisToTerraform(this._davis.internalValue),
      metric_extraction: openpipelineV2SpansPipelinesMetricExtractionToTerraform(this._metricExtraction.internalValue),
      processing: openpipelineV2SpansPipelinesProcessingToTerraform(this._processing.internalValue),
      product_allocation: openpipelineV2SpansPipelinesProductAllocationToTerraform(this._productAllocation.internalValue),
      security_context: openpipelineV2SpansPipelinesSecurityContextToTerraform(this._securityContext.internalValue),
      storage: openpipelineV2SpansPipelinesStorageToTerraform(this._storage.internalValue),
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
        value: openpipelineV2SpansPipelinesCostAllocationToHclTerraform(this._costAllocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2SpansPipelinesCostAllocationList",
      },
      data_extraction: {
        value: openpipelineV2SpansPipelinesDataExtractionToHclTerraform(this._dataExtraction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2SpansPipelinesDataExtractionList",
      },
      davis: {
        value: openpipelineV2SpansPipelinesDavisToHclTerraform(this._davis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2SpansPipelinesDavisList",
      },
      metric_extraction: {
        value: openpipelineV2SpansPipelinesMetricExtractionToHclTerraform(this._metricExtraction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2SpansPipelinesMetricExtractionList",
      },
      processing: {
        value: openpipelineV2SpansPipelinesProcessingToHclTerraform(this._processing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2SpansPipelinesProcessingList",
      },
      product_allocation: {
        value: openpipelineV2SpansPipelinesProductAllocationToHclTerraform(this._productAllocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2SpansPipelinesProductAllocationList",
      },
      security_context: {
        value: openpipelineV2SpansPipelinesSecurityContextToHclTerraform(this._securityContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2SpansPipelinesSecurityContextList",
      },
      storage: {
        value: openpipelineV2SpansPipelinesStorageToHclTerraform(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2SpansPipelinesStorageList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
