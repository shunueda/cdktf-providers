// generated from terraform resource schema

import { OpenpipelineV2UserEventsPipelinesCostAllocation, 
openpipelineV2UserEventsPipelinesCostAllocationToTerraform, 
openpipelineV2UserEventsPipelinesCostAllocationToHclTerraform, 
OpenpipelineV2UserEventsPipelinesCostAllocationOutputReference, 
OpenpipelineV2UserEventsPipelinesDataExtraction, 
openpipelineV2UserEventsPipelinesDataExtractionToTerraform, 
openpipelineV2UserEventsPipelinesDataExtractionToHclTerraform, 
OpenpipelineV2UserEventsPipelinesDataExtractionOutputReference, 
OpenpipelineV2UserEventsPipelinesDavis, 
openpipelineV2UserEventsPipelinesDavisToTerraform, 
openpipelineV2UserEventsPipelinesDavisToHclTerraform, 
OpenpipelineV2UserEventsPipelinesDavisOutputReference, 
OpenpipelineV2UserEventsPipelinesMetricExtraction, 
openpipelineV2UserEventsPipelinesMetricExtractionToTerraform, 
openpipelineV2UserEventsPipelinesMetricExtractionToHclTerraform, 
OpenpipelineV2UserEventsPipelinesMetricExtractionOutputReference, 
OpenpipelineV2UserEventsPipelinesProcessing, 
openpipelineV2UserEventsPipelinesProcessingToTerraform, 
openpipelineV2UserEventsPipelinesProcessingToHclTerraform, 
OpenpipelineV2UserEventsPipelinesProcessingOutputReference, 
OpenpipelineV2UserEventsPipelinesProductAllocation, 
openpipelineV2UserEventsPipelinesProductAllocationToTerraform, 
openpipelineV2UserEventsPipelinesProductAllocationToHclTerraform, 
OpenpipelineV2UserEventsPipelinesProductAllocationOutputReference, 
OpenpipelineV2UserEventsPipelinesSecurityContext, 
openpipelineV2UserEventsPipelinesSecurityContextToTerraform, 
openpipelineV2UserEventsPipelinesSecurityContextToHclTerraform, 
OpenpipelineV2UserEventsPipelinesSecurityContextOutputReference, 
OpenpipelineV2UserEventsPipelinesStorage, 
openpipelineV2UserEventsPipelinesStorageToTerraform, 
openpipelineV2UserEventsPipelinesStorageToHclTerraform, 
OpenpipelineV2UserEventsPipelinesStorageOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpenpipelineV2UserEventsPipelinesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom pipeline id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_user_events_pipelines#custom_id OpenpipelineV2UserEventsPipelines#custom_id}
  */
  readonly customId: string;
  /**
  * Display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_user_events_pipelines#display_name OpenpipelineV2UserEventsPipelines#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_user_events_pipelines#id OpenpipelineV2UserEventsPipelines#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * cost_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_user_events_pipelines#cost_allocation OpenpipelineV2UserEventsPipelines#cost_allocation}
  */
  readonly costAllocation: OpenpipelineV2UserEventsPipelinesCostAllocation;
  /**
  * data_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_user_events_pipelines#data_extraction OpenpipelineV2UserEventsPipelines#data_extraction}
  */
  readonly dataExtraction: OpenpipelineV2UserEventsPipelinesDataExtraction;
  /**
  * davis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_user_events_pipelines#davis OpenpipelineV2UserEventsPipelines#davis}
  */
  readonly davis: OpenpipelineV2UserEventsPipelinesDavis;
  /**
  * metric_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_user_events_pipelines#metric_extraction OpenpipelineV2UserEventsPipelines#metric_extraction}
  */
  readonly metricExtraction: OpenpipelineV2UserEventsPipelinesMetricExtraction;
  /**
  * processing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_user_events_pipelines#processing OpenpipelineV2UserEventsPipelines#processing}
  */
  readonly processing: OpenpipelineV2UserEventsPipelinesProcessing;
  /**
  * product_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_user_events_pipelines#product_allocation OpenpipelineV2UserEventsPipelines#product_allocation}
  */
  readonly productAllocation: OpenpipelineV2UserEventsPipelinesProductAllocation;
  /**
  * security_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_user_events_pipelines#security_context OpenpipelineV2UserEventsPipelines#security_context}
  */
  readonly securityContext: OpenpipelineV2UserEventsPipelinesSecurityContext;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_user_events_pipelines#storage OpenpipelineV2UserEventsPipelines#storage}
  */
  readonly storage: OpenpipelineV2UserEventsPipelinesStorage;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_user_events_pipelines dynatrace_openpipeline_v2_user_events_pipelines}
*/
export class OpenpipelineV2UserEventsPipelines extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_openpipeline_v2_user_events_pipelines";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpenpipelineV2UserEventsPipelines resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenpipelineV2UserEventsPipelines to import
  * @param importFromId The id of the existing OpenpipelineV2UserEventsPipelines that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_user_events_pipelines#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenpipelineV2UserEventsPipelines to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_openpipeline_v2_user_events_pipelines", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_user_events_pipelines dynatrace_openpipeline_v2_user_events_pipelines} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenpipelineV2UserEventsPipelinesConfig
  */
  public constructor(scope: Construct, id: string, config: OpenpipelineV2UserEventsPipelinesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_openpipeline_v2_user_events_pipelines',
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
  private _costAllocation = new OpenpipelineV2UserEventsPipelinesCostAllocationOutputReference(this, "cost_allocation");
  public get costAllocation() {
    return this._costAllocation;
  }
  public putCostAllocation(value: OpenpipelineV2UserEventsPipelinesCostAllocation) {
    this._costAllocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get costAllocationInput() {
    return this._costAllocation.internalValue;
  }

  // data_extraction - computed: false, optional: false, required: true
  private _dataExtraction = new OpenpipelineV2UserEventsPipelinesDataExtractionOutputReference(this, "data_extraction");
  public get dataExtraction() {
    return this._dataExtraction;
  }
  public putDataExtraction(value: OpenpipelineV2UserEventsPipelinesDataExtraction) {
    this._dataExtraction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataExtractionInput() {
    return this._dataExtraction.internalValue;
  }

  // davis - computed: false, optional: false, required: true
  private _davis = new OpenpipelineV2UserEventsPipelinesDavisOutputReference(this, "davis");
  public get davis() {
    return this._davis;
  }
  public putDavis(value: OpenpipelineV2UserEventsPipelinesDavis) {
    this._davis.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get davisInput() {
    return this._davis.internalValue;
  }

  // metric_extraction - computed: false, optional: false, required: true
  private _metricExtraction = new OpenpipelineV2UserEventsPipelinesMetricExtractionOutputReference(this, "metric_extraction");
  public get metricExtraction() {
    return this._metricExtraction;
  }
  public putMetricExtraction(value: OpenpipelineV2UserEventsPipelinesMetricExtraction) {
    this._metricExtraction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricExtractionInput() {
    return this._metricExtraction.internalValue;
  }

  // processing - computed: false, optional: false, required: true
  private _processing = new OpenpipelineV2UserEventsPipelinesProcessingOutputReference(this, "processing");
  public get processing() {
    return this._processing;
  }
  public putProcessing(value: OpenpipelineV2UserEventsPipelinesProcessing) {
    this._processing.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processingInput() {
    return this._processing.internalValue;
  }

  // product_allocation - computed: false, optional: false, required: true
  private _productAllocation = new OpenpipelineV2UserEventsPipelinesProductAllocationOutputReference(this, "product_allocation");
  public get productAllocation() {
    return this._productAllocation;
  }
  public putProductAllocation(value: OpenpipelineV2UserEventsPipelinesProductAllocation) {
    this._productAllocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productAllocationInput() {
    return this._productAllocation.internalValue;
  }

  // security_context - computed: false, optional: false, required: true
  private _securityContext = new OpenpipelineV2UserEventsPipelinesSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: OpenpipelineV2UserEventsPipelinesSecurityContext) {
    this._securityContext.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // storage - computed: false, optional: false, required: true
  private _storage = new OpenpipelineV2UserEventsPipelinesStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: OpenpipelineV2UserEventsPipelinesStorage) {
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
      cost_allocation: openpipelineV2UserEventsPipelinesCostAllocationToTerraform(this._costAllocation.internalValue),
      data_extraction: openpipelineV2UserEventsPipelinesDataExtractionToTerraform(this._dataExtraction.internalValue),
      davis: openpipelineV2UserEventsPipelinesDavisToTerraform(this._davis.internalValue),
      metric_extraction: openpipelineV2UserEventsPipelinesMetricExtractionToTerraform(this._metricExtraction.internalValue),
      processing: openpipelineV2UserEventsPipelinesProcessingToTerraform(this._processing.internalValue),
      product_allocation: openpipelineV2UserEventsPipelinesProductAllocationToTerraform(this._productAllocation.internalValue),
      security_context: openpipelineV2UserEventsPipelinesSecurityContextToTerraform(this._securityContext.internalValue),
      storage: openpipelineV2UserEventsPipelinesStorageToTerraform(this._storage.internalValue),
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
        value: openpipelineV2UserEventsPipelinesCostAllocationToHclTerraform(this._costAllocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2UserEventsPipelinesCostAllocationList",
      },
      data_extraction: {
        value: openpipelineV2UserEventsPipelinesDataExtractionToHclTerraform(this._dataExtraction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2UserEventsPipelinesDataExtractionList",
      },
      davis: {
        value: openpipelineV2UserEventsPipelinesDavisToHclTerraform(this._davis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2UserEventsPipelinesDavisList",
      },
      metric_extraction: {
        value: openpipelineV2UserEventsPipelinesMetricExtractionToHclTerraform(this._metricExtraction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2UserEventsPipelinesMetricExtractionList",
      },
      processing: {
        value: openpipelineV2UserEventsPipelinesProcessingToHclTerraform(this._processing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingList",
      },
      product_allocation: {
        value: openpipelineV2UserEventsPipelinesProductAllocationToHclTerraform(this._productAllocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationList",
      },
      security_context: {
        value: openpipelineV2UserEventsPipelinesSecurityContextToHclTerraform(this._securityContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2UserEventsPipelinesSecurityContextList",
      },
      storage: {
        value: openpipelineV2UserEventsPipelinesStorageToHclTerraform(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2UserEventsPipelinesStorageList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
