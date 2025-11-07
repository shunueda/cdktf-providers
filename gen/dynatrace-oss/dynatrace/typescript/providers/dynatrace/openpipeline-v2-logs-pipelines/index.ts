// generated from terraform resource schema

import { OpenpipelineV2LogsPipelinesCostAllocation, 
openpipelineV2LogsPipelinesCostAllocationToTerraform, 
openpipelineV2LogsPipelinesCostAllocationToHclTerraform, 
OpenpipelineV2LogsPipelinesCostAllocationOutputReference, 
OpenpipelineV2LogsPipelinesDataExtraction, 
openpipelineV2LogsPipelinesDataExtractionToTerraform, 
openpipelineV2LogsPipelinesDataExtractionToHclTerraform, 
OpenpipelineV2LogsPipelinesDataExtractionOutputReference, 
OpenpipelineV2LogsPipelinesDavis, 
openpipelineV2LogsPipelinesDavisToTerraform, 
openpipelineV2LogsPipelinesDavisToHclTerraform, 
OpenpipelineV2LogsPipelinesDavisOutputReference, 
OpenpipelineV2LogsPipelinesMetricExtraction, 
openpipelineV2LogsPipelinesMetricExtractionToTerraform, 
openpipelineV2LogsPipelinesMetricExtractionToHclTerraform, 
OpenpipelineV2LogsPipelinesMetricExtractionOutputReference, 
OpenpipelineV2LogsPipelinesProcessing, 
openpipelineV2LogsPipelinesProcessingToTerraform, 
openpipelineV2LogsPipelinesProcessingToHclTerraform, 
OpenpipelineV2LogsPipelinesProcessingOutputReference, 
OpenpipelineV2LogsPipelinesProductAllocation, 
openpipelineV2LogsPipelinesProductAllocationToTerraform, 
openpipelineV2LogsPipelinesProductAllocationToHclTerraform, 
OpenpipelineV2LogsPipelinesProductAllocationOutputReference, 
OpenpipelineV2LogsPipelinesSecurityContext, 
openpipelineV2LogsPipelinesSecurityContextToTerraform, 
openpipelineV2LogsPipelinesSecurityContextToHclTerraform, 
OpenpipelineV2LogsPipelinesSecurityContextOutputReference, 
OpenpipelineV2LogsPipelinesStorage, 
openpipelineV2LogsPipelinesStorageToTerraform, 
openpipelineV2LogsPipelinesStorageToHclTerraform, 
OpenpipelineV2LogsPipelinesStorageOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpenpipelineV2LogsPipelinesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom pipeline id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_logs_pipelines#custom_id OpenpipelineV2LogsPipelines#custom_id}
  */
  readonly customId: string;
  /**
  * Display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_logs_pipelines#display_name OpenpipelineV2LogsPipelines#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_logs_pipelines#id OpenpipelineV2LogsPipelines#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * cost_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_logs_pipelines#cost_allocation OpenpipelineV2LogsPipelines#cost_allocation}
  */
  readonly costAllocation: OpenpipelineV2LogsPipelinesCostAllocation;
  /**
  * data_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_logs_pipelines#data_extraction OpenpipelineV2LogsPipelines#data_extraction}
  */
  readonly dataExtraction: OpenpipelineV2LogsPipelinesDataExtraction;
  /**
  * davis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_logs_pipelines#davis OpenpipelineV2LogsPipelines#davis}
  */
  readonly davis: OpenpipelineV2LogsPipelinesDavis;
  /**
  * metric_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_logs_pipelines#metric_extraction OpenpipelineV2LogsPipelines#metric_extraction}
  */
  readonly metricExtraction: OpenpipelineV2LogsPipelinesMetricExtraction;
  /**
  * processing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_logs_pipelines#processing OpenpipelineV2LogsPipelines#processing}
  */
  readonly processing: OpenpipelineV2LogsPipelinesProcessing;
  /**
  * product_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_logs_pipelines#product_allocation OpenpipelineV2LogsPipelines#product_allocation}
  */
  readonly productAllocation: OpenpipelineV2LogsPipelinesProductAllocation;
  /**
  * security_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_logs_pipelines#security_context OpenpipelineV2LogsPipelines#security_context}
  */
  readonly securityContext: OpenpipelineV2LogsPipelinesSecurityContext;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_logs_pipelines#storage OpenpipelineV2LogsPipelines#storage}
  */
  readonly storage: OpenpipelineV2LogsPipelinesStorage;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_logs_pipelines dynatrace_openpipeline_v2_logs_pipelines}
*/
export class OpenpipelineV2LogsPipelines extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_openpipeline_v2_logs_pipelines";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpenpipelineV2LogsPipelines resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenpipelineV2LogsPipelines to import
  * @param importFromId The id of the existing OpenpipelineV2LogsPipelines that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_logs_pipelines#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenpipelineV2LogsPipelines to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_openpipeline_v2_logs_pipelines", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_logs_pipelines dynatrace_openpipeline_v2_logs_pipelines} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenpipelineV2LogsPipelinesConfig
  */
  public constructor(scope: Construct, id: string, config: OpenpipelineV2LogsPipelinesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_openpipeline_v2_logs_pipelines',
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
  private _costAllocation = new OpenpipelineV2LogsPipelinesCostAllocationOutputReference(this, "cost_allocation");
  public get costAllocation() {
    return this._costAllocation;
  }
  public putCostAllocation(value: OpenpipelineV2LogsPipelinesCostAllocation) {
    this._costAllocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get costAllocationInput() {
    return this._costAllocation.internalValue;
  }

  // data_extraction - computed: false, optional: false, required: true
  private _dataExtraction = new OpenpipelineV2LogsPipelinesDataExtractionOutputReference(this, "data_extraction");
  public get dataExtraction() {
    return this._dataExtraction;
  }
  public putDataExtraction(value: OpenpipelineV2LogsPipelinesDataExtraction) {
    this._dataExtraction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataExtractionInput() {
    return this._dataExtraction.internalValue;
  }

  // davis - computed: false, optional: false, required: true
  private _davis = new OpenpipelineV2LogsPipelinesDavisOutputReference(this, "davis");
  public get davis() {
    return this._davis;
  }
  public putDavis(value: OpenpipelineV2LogsPipelinesDavis) {
    this._davis.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get davisInput() {
    return this._davis.internalValue;
  }

  // metric_extraction - computed: false, optional: false, required: true
  private _metricExtraction = new OpenpipelineV2LogsPipelinesMetricExtractionOutputReference(this, "metric_extraction");
  public get metricExtraction() {
    return this._metricExtraction;
  }
  public putMetricExtraction(value: OpenpipelineV2LogsPipelinesMetricExtraction) {
    this._metricExtraction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricExtractionInput() {
    return this._metricExtraction.internalValue;
  }

  // processing - computed: false, optional: false, required: true
  private _processing = new OpenpipelineV2LogsPipelinesProcessingOutputReference(this, "processing");
  public get processing() {
    return this._processing;
  }
  public putProcessing(value: OpenpipelineV2LogsPipelinesProcessing) {
    this._processing.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processingInput() {
    return this._processing.internalValue;
  }

  // product_allocation - computed: false, optional: false, required: true
  private _productAllocation = new OpenpipelineV2LogsPipelinesProductAllocationOutputReference(this, "product_allocation");
  public get productAllocation() {
    return this._productAllocation;
  }
  public putProductAllocation(value: OpenpipelineV2LogsPipelinesProductAllocation) {
    this._productAllocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productAllocationInput() {
    return this._productAllocation.internalValue;
  }

  // security_context - computed: false, optional: false, required: true
  private _securityContext = new OpenpipelineV2LogsPipelinesSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: OpenpipelineV2LogsPipelinesSecurityContext) {
    this._securityContext.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // storage - computed: false, optional: false, required: true
  private _storage = new OpenpipelineV2LogsPipelinesStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: OpenpipelineV2LogsPipelinesStorage) {
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
      cost_allocation: openpipelineV2LogsPipelinesCostAllocationToTerraform(this._costAllocation.internalValue),
      data_extraction: openpipelineV2LogsPipelinesDataExtractionToTerraform(this._dataExtraction.internalValue),
      davis: openpipelineV2LogsPipelinesDavisToTerraform(this._davis.internalValue),
      metric_extraction: openpipelineV2LogsPipelinesMetricExtractionToTerraform(this._metricExtraction.internalValue),
      processing: openpipelineV2LogsPipelinesProcessingToTerraform(this._processing.internalValue),
      product_allocation: openpipelineV2LogsPipelinesProductAllocationToTerraform(this._productAllocation.internalValue),
      security_context: openpipelineV2LogsPipelinesSecurityContextToTerraform(this._securityContext.internalValue),
      storage: openpipelineV2LogsPipelinesStorageToTerraform(this._storage.internalValue),
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
        value: openpipelineV2LogsPipelinesCostAllocationToHclTerraform(this._costAllocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2LogsPipelinesCostAllocationList",
      },
      data_extraction: {
        value: openpipelineV2LogsPipelinesDataExtractionToHclTerraform(this._dataExtraction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2LogsPipelinesDataExtractionList",
      },
      davis: {
        value: openpipelineV2LogsPipelinesDavisToHclTerraform(this._davis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2LogsPipelinesDavisList",
      },
      metric_extraction: {
        value: openpipelineV2LogsPipelinesMetricExtractionToHclTerraform(this._metricExtraction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2LogsPipelinesMetricExtractionList",
      },
      processing: {
        value: openpipelineV2LogsPipelinesProcessingToHclTerraform(this._processing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2LogsPipelinesProcessingList",
      },
      product_allocation: {
        value: openpipelineV2LogsPipelinesProductAllocationToHclTerraform(this._productAllocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2LogsPipelinesProductAllocationList",
      },
      security_context: {
        value: openpipelineV2LogsPipelinesSecurityContextToHclTerraform(this._securityContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2LogsPipelinesSecurityContextList",
      },
      storage: {
        value: openpipelineV2LogsPipelinesStorageToHclTerraform(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2LogsPipelinesStorageList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
