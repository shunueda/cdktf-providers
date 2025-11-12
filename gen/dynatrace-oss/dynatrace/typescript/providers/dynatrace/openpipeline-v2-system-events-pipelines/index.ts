// generated from terraform resource schema

import { OpenpipelineV2SystemEventsPipelinesCostAllocation, 
openpipelineV2SystemEventsPipelinesCostAllocationToTerraform, 
openpipelineV2SystemEventsPipelinesCostAllocationToHclTerraform, 
OpenpipelineV2SystemEventsPipelinesCostAllocationOutputReference, 
OpenpipelineV2SystemEventsPipelinesDataExtraction, 
openpipelineV2SystemEventsPipelinesDataExtractionToTerraform, 
openpipelineV2SystemEventsPipelinesDataExtractionToHclTerraform, 
OpenpipelineV2SystemEventsPipelinesDataExtractionOutputReference, 
OpenpipelineV2SystemEventsPipelinesDavis, 
openpipelineV2SystemEventsPipelinesDavisToTerraform, 
openpipelineV2SystemEventsPipelinesDavisToHclTerraform, 
OpenpipelineV2SystemEventsPipelinesDavisOutputReference, 
OpenpipelineV2SystemEventsPipelinesMetricExtraction, 
openpipelineV2SystemEventsPipelinesMetricExtractionToTerraform, 
openpipelineV2SystemEventsPipelinesMetricExtractionToHclTerraform, 
OpenpipelineV2SystemEventsPipelinesMetricExtractionOutputReference, 
OpenpipelineV2SystemEventsPipelinesProcessing, 
openpipelineV2SystemEventsPipelinesProcessingToTerraform, 
openpipelineV2SystemEventsPipelinesProcessingToHclTerraform, 
OpenpipelineV2SystemEventsPipelinesProcessingOutputReference, 
OpenpipelineV2SystemEventsPipelinesProductAllocation, 
openpipelineV2SystemEventsPipelinesProductAllocationToTerraform, 
openpipelineV2SystemEventsPipelinesProductAllocationToHclTerraform, 
OpenpipelineV2SystemEventsPipelinesProductAllocationOutputReference, 
OpenpipelineV2SystemEventsPipelinesSecurityContext, 
openpipelineV2SystemEventsPipelinesSecurityContextToTerraform, 
openpipelineV2SystemEventsPipelinesSecurityContextToHclTerraform, 
OpenpipelineV2SystemEventsPipelinesSecurityContextOutputReference, 
OpenpipelineV2SystemEventsPipelinesStorage, 
openpipelineV2SystemEventsPipelinesStorageToTerraform, 
openpipelineV2SystemEventsPipelinesStorageToHclTerraform, 
OpenpipelineV2SystemEventsPipelinesStorageOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpenpipelineV2SystemEventsPipelinesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom pipeline id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_system_events_pipelines#custom_id OpenpipelineV2SystemEventsPipelines#custom_id}
  */
  readonly customId: string;
  /**
  * Display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_system_events_pipelines#display_name OpenpipelineV2SystemEventsPipelines#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_system_events_pipelines#id OpenpipelineV2SystemEventsPipelines#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * cost_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_system_events_pipelines#cost_allocation OpenpipelineV2SystemEventsPipelines#cost_allocation}
  */
  readonly costAllocation: OpenpipelineV2SystemEventsPipelinesCostAllocation;
  /**
  * data_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_system_events_pipelines#data_extraction OpenpipelineV2SystemEventsPipelines#data_extraction}
  */
  readonly dataExtraction: OpenpipelineV2SystemEventsPipelinesDataExtraction;
  /**
  * davis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_system_events_pipelines#davis OpenpipelineV2SystemEventsPipelines#davis}
  */
  readonly davis: OpenpipelineV2SystemEventsPipelinesDavis;
  /**
  * metric_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_system_events_pipelines#metric_extraction OpenpipelineV2SystemEventsPipelines#metric_extraction}
  */
  readonly metricExtraction: OpenpipelineV2SystemEventsPipelinesMetricExtraction;
  /**
  * processing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_system_events_pipelines#processing OpenpipelineV2SystemEventsPipelines#processing}
  */
  readonly processing: OpenpipelineV2SystemEventsPipelinesProcessing;
  /**
  * product_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_system_events_pipelines#product_allocation OpenpipelineV2SystemEventsPipelines#product_allocation}
  */
  readonly productAllocation: OpenpipelineV2SystemEventsPipelinesProductAllocation;
  /**
  * security_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_system_events_pipelines#security_context OpenpipelineV2SystemEventsPipelines#security_context}
  */
  readonly securityContext: OpenpipelineV2SystemEventsPipelinesSecurityContext;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_system_events_pipelines#storage OpenpipelineV2SystemEventsPipelines#storage}
  */
  readonly storage: OpenpipelineV2SystemEventsPipelinesStorage;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_system_events_pipelines dynatrace_openpipeline_v2_system_events_pipelines}
*/
export class OpenpipelineV2SystemEventsPipelines extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_openpipeline_v2_system_events_pipelines";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpenpipelineV2SystemEventsPipelines resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenpipelineV2SystemEventsPipelines to import
  * @param importFromId The id of the existing OpenpipelineV2SystemEventsPipelines that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_system_events_pipelines#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenpipelineV2SystemEventsPipelines to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_openpipeline_v2_system_events_pipelines", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_system_events_pipelines dynatrace_openpipeline_v2_system_events_pipelines} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenpipelineV2SystemEventsPipelinesConfig
  */
  public constructor(scope: Construct, id: string, config: OpenpipelineV2SystemEventsPipelinesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_openpipeline_v2_system_events_pipelines',
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
  private _costAllocation = new OpenpipelineV2SystemEventsPipelinesCostAllocationOutputReference(this, "cost_allocation");
  public get costAllocation() {
    return this._costAllocation;
  }
  public putCostAllocation(value: OpenpipelineV2SystemEventsPipelinesCostAllocation) {
    this._costAllocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get costAllocationInput() {
    return this._costAllocation.internalValue;
  }

  // data_extraction - computed: false, optional: false, required: true
  private _dataExtraction = new OpenpipelineV2SystemEventsPipelinesDataExtractionOutputReference(this, "data_extraction");
  public get dataExtraction() {
    return this._dataExtraction;
  }
  public putDataExtraction(value: OpenpipelineV2SystemEventsPipelinesDataExtraction) {
    this._dataExtraction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataExtractionInput() {
    return this._dataExtraction.internalValue;
  }

  // davis - computed: false, optional: false, required: true
  private _davis = new OpenpipelineV2SystemEventsPipelinesDavisOutputReference(this, "davis");
  public get davis() {
    return this._davis;
  }
  public putDavis(value: OpenpipelineV2SystemEventsPipelinesDavis) {
    this._davis.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get davisInput() {
    return this._davis.internalValue;
  }

  // metric_extraction - computed: false, optional: false, required: true
  private _metricExtraction = new OpenpipelineV2SystemEventsPipelinesMetricExtractionOutputReference(this, "metric_extraction");
  public get metricExtraction() {
    return this._metricExtraction;
  }
  public putMetricExtraction(value: OpenpipelineV2SystemEventsPipelinesMetricExtraction) {
    this._metricExtraction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricExtractionInput() {
    return this._metricExtraction.internalValue;
  }

  // processing - computed: false, optional: false, required: true
  private _processing = new OpenpipelineV2SystemEventsPipelinesProcessingOutputReference(this, "processing");
  public get processing() {
    return this._processing;
  }
  public putProcessing(value: OpenpipelineV2SystemEventsPipelinesProcessing) {
    this._processing.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processingInput() {
    return this._processing.internalValue;
  }

  // product_allocation - computed: false, optional: false, required: true
  private _productAllocation = new OpenpipelineV2SystemEventsPipelinesProductAllocationOutputReference(this, "product_allocation");
  public get productAllocation() {
    return this._productAllocation;
  }
  public putProductAllocation(value: OpenpipelineV2SystemEventsPipelinesProductAllocation) {
    this._productAllocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productAllocationInput() {
    return this._productAllocation.internalValue;
  }

  // security_context - computed: false, optional: false, required: true
  private _securityContext = new OpenpipelineV2SystemEventsPipelinesSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: OpenpipelineV2SystemEventsPipelinesSecurityContext) {
    this._securityContext.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // storage - computed: false, optional: false, required: true
  private _storage = new OpenpipelineV2SystemEventsPipelinesStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: OpenpipelineV2SystemEventsPipelinesStorage) {
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
      cost_allocation: openpipelineV2SystemEventsPipelinesCostAllocationToTerraform(this._costAllocation.internalValue),
      data_extraction: openpipelineV2SystemEventsPipelinesDataExtractionToTerraform(this._dataExtraction.internalValue),
      davis: openpipelineV2SystemEventsPipelinesDavisToTerraform(this._davis.internalValue),
      metric_extraction: openpipelineV2SystemEventsPipelinesMetricExtractionToTerraform(this._metricExtraction.internalValue),
      processing: openpipelineV2SystemEventsPipelinesProcessingToTerraform(this._processing.internalValue),
      product_allocation: openpipelineV2SystemEventsPipelinesProductAllocationToTerraform(this._productAllocation.internalValue),
      security_context: openpipelineV2SystemEventsPipelinesSecurityContextToTerraform(this._securityContext.internalValue),
      storage: openpipelineV2SystemEventsPipelinesStorageToTerraform(this._storage.internalValue),
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
        value: openpipelineV2SystemEventsPipelinesCostAllocationToHclTerraform(this._costAllocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2SystemEventsPipelinesCostAllocationList",
      },
      data_extraction: {
        value: openpipelineV2SystemEventsPipelinesDataExtractionToHclTerraform(this._dataExtraction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2SystemEventsPipelinesDataExtractionList",
      },
      davis: {
        value: openpipelineV2SystemEventsPipelinesDavisToHclTerraform(this._davis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2SystemEventsPipelinesDavisList",
      },
      metric_extraction: {
        value: openpipelineV2SystemEventsPipelinesMetricExtractionToHclTerraform(this._metricExtraction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2SystemEventsPipelinesMetricExtractionList",
      },
      processing: {
        value: openpipelineV2SystemEventsPipelinesProcessingToHclTerraform(this._processing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2SystemEventsPipelinesProcessingList",
      },
      product_allocation: {
        value: openpipelineV2SystemEventsPipelinesProductAllocationToHclTerraform(this._productAllocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2SystemEventsPipelinesProductAllocationList",
      },
      security_context: {
        value: openpipelineV2SystemEventsPipelinesSecurityContextToHclTerraform(this._securityContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2SystemEventsPipelinesSecurityContextList",
      },
      storage: {
        value: openpipelineV2SystemEventsPipelinesStorageToHclTerraform(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2SystemEventsPipelinesStorageList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
