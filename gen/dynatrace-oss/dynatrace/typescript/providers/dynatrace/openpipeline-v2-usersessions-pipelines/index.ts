// generated from terraform resource schema

import { OpenpipelineV2UsersessionsPipelinesCostAllocation, 
openpipelineV2UsersessionsPipelinesCostAllocationToTerraform, 
openpipelineV2UsersessionsPipelinesCostAllocationToHclTerraform, 
OpenpipelineV2UsersessionsPipelinesCostAllocationOutputReference, 
OpenpipelineV2UsersessionsPipelinesDataExtraction, 
openpipelineV2UsersessionsPipelinesDataExtractionToTerraform, 
openpipelineV2UsersessionsPipelinesDataExtractionToHclTerraform, 
OpenpipelineV2UsersessionsPipelinesDataExtractionOutputReference, 
OpenpipelineV2UsersessionsPipelinesDavis, 
openpipelineV2UsersessionsPipelinesDavisToTerraform, 
openpipelineV2UsersessionsPipelinesDavisToHclTerraform, 
OpenpipelineV2UsersessionsPipelinesDavisOutputReference, 
OpenpipelineV2UsersessionsPipelinesMetricExtraction, 
openpipelineV2UsersessionsPipelinesMetricExtractionToTerraform, 
openpipelineV2UsersessionsPipelinesMetricExtractionToHclTerraform, 
OpenpipelineV2UsersessionsPipelinesMetricExtractionOutputReference, 
OpenpipelineV2UsersessionsPipelinesProcessing, 
openpipelineV2UsersessionsPipelinesProcessingToTerraform, 
openpipelineV2UsersessionsPipelinesProcessingToHclTerraform, 
OpenpipelineV2UsersessionsPipelinesProcessingOutputReference, 
OpenpipelineV2UsersessionsPipelinesProductAllocation, 
openpipelineV2UsersessionsPipelinesProductAllocationToTerraform, 
openpipelineV2UsersessionsPipelinesProductAllocationToHclTerraform, 
OpenpipelineV2UsersessionsPipelinesProductAllocationOutputReference, 
OpenpipelineV2UsersessionsPipelinesSecurityContext, 
openpipelineV2UsersessionsPipelinesSecurityContextToTerraform, 
openpipelineV2UsersessionsPipelinesSecurityContextToHclTerraform, 
OpenpipelineV2UsersessionsPipelinesSecurityContextOutputReference, 
OpenpipelineV2UsersessionsPipelinesStorage, 
openpipelineV2UsersessionsPipelinesStorageToTerraform, 
openpipelineV2UsersessionsPipelinesStorageToHclTerraform, 
OpenpipelineV2UsersessionsPipelinesStorageOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpenpipelineV2UsersessionsPipelinesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom pipeline id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_usersessions_pipelines#custom_id OpenpipelineV2UsersessionsPipelines#custom_id}
  */
  readonly customId: string;
  /**
  * Display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_usersessions_pipelines#display_name OpenpipelineV2UsersessionsPipelines#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_usersessions_pipelines#id OpenpipelineV2UsersessionsPipelines#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * cost_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_usersessions_pipelines#cost_allocation OpenpipelineV2UsersessionsPipelines#cost_allocation}
  */
  readonly costAllocation: OpenpipelineV2UsersessionsPipelinesCostAllocation;
  /**
  * data_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_usersessions_pipelines#data_extraction OpenpipelineV2UsersessionsPipelines#data_extraction}
  */
  readonly dataExtraction: OpenpipelineV2UsersessionsPipelinesDataExtraction;
  /**
  * davis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_usersessions_pipelines#davis OpenpipelineV2UsersessionsPipelines#davis}
  */
  readonly davis: OpenpipelineV2UsersessionsPipelinesDavis;
  /**
  * metric_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_usersessions_pipelines#metric_extraction OpenpipelineV2UsersessionsPipelines#metric_extraction}
  */
  readonly metricExtraction: OpenpipelineV2UsersessionsPipelinesMetricExtraction;
  /**
  * processing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_usersessions_pipelines#processing OpenpipelineV2UsersessionsPipelines#processing}
  */
  readonly processing: OpenpipelineV2UsersessionsPipelinesProcessing;
  /**
  * product_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_usersessions_pipelines#product_allocation OpenpipelineV2UsersessionsPipelines#product_allocation}
  */
  readonly productAllocation: OpenpipelineV2UsersessionsPipelinesProductAllocation;
  /**
  * security_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_usersessions_pipelines#security_context OpenpipelineV2UsersessionsPipelines#security_context}
  */
  readonly securityContext: OpenpipelineV2UsersessionsPipelinesSecurityContext;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_usersessions_pipelines#storage OpenpipelineV2UsersessionsPipelines#storage}
  */
  readonly storage: OpenpipelineV2UsersessionsPipelinesStorage;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_usersessions_pipelines dynatrace_openpipeline_v2_usersessions_pipelines}
*/
export class OpenpipelineV2UsersessionsPipelines extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_openpipeline_v2_usersessions_pipelines";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpenpipelineV2UsersessionsPipelines resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenpipelineV2UsersessionsPipelines to import
  * @param importFromId The id of the existing OpenpipelineV2UsersessionsPipelines that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_usersessions_pipelines#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenpipelineV2UsersessionsPipelines to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_openpipeline_v2_usersessions_pipelines", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_usersessions_pipelines dynatrace_openpipeline_v2_usersessions_pipelines} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenpipelineV2UsersessionsPipelinesConfig
  */
  public constructor(scope: Construct, id: string, config: OpenpipelineV2UsersessionsPipelinesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_openpipeline_v2_usersessions_pipelines',
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
  private _costAllocation = new OpenpipelineV2UsersessionsPipelinesCostAllocationOutputReference(this, "cost_allocation");
  public get costAllocation() {
    return this._costAllocation;
  }
  public putCostAllocation(value: OpenpipelineV2UsersessionsPipelinesCostAllocation) {
    this._costAllocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get costAllocationInput() {
    return this._costAllocation.internalValue;
  }

  // data_extraction - computed: false, optional: false, required: true
  private _dataExtraction = new OpenpipelineV2UsersessionsPipelinesDataExtractionOutputReference(this, "data_extraction");
  public get dataExtraction() {
    return this._dataExtraction;
  }
  public putDataExtraction(value: OpenpipelineV2UsersessionsPipelinesDataExtraction) {
    this._dataExtraction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataExtractionInput() {
    return this._dataExtraction.internalValue;
  }

  // davis - computed: false, optional: false, required: true
  private _davis = new OpenpipelineV2UsersessionsPipelinesDavisOutputReference(this, "davis");
  public get davis() {
    return this._davis;
  }
  public putDavis(value: OpenpipelineV2UsersessionsPipelinesDavis) {
    this._davis.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get davisInput() {
    return this._davis.internalValue;
  }

  // metric_extraction - computed: false, optional: false, required: true
  private _metricExtraction = new OpenpipelineV2UsersessionsPipelinesMetricExtractionOutputReference(this, "metric_extraction");
  public get metricExtraction() {
    return this._metricExtraction;
  }
  public putMetricExtraction(value: OpenpipelineV2UsersessionsPipelinesMetricExtraction) {
    this._metricExtraction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricExtractionInput() {
    return this._metricExtraction.internalValue;
  }

  // processing - computed: false, optional: false, required: true
  private _processing = new OpenpipelineV2UsersessionsPipelinesProcessingOutputReference(this, "processing");
  public get processing() {
    return this._processing;
  }
  public putProcessing(value: OpenpipelineV2UsersessionsPipelinesProcessing) {
    this._processing.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processingInput() {
    return this._processing.internalValue;
  }

  // product_allocation - computed: false, optional: false, required: true
  private _productAllocation = new OpenpipelineV2UsersessionsPipelinesProductAllocationOutputReference(this, "product_allocation");
  public get productAllocation() {
    return this._productAllocation;
  }
  public putProductAllocation(value: OpenpipelineV2UsersessionsPipelinesProductAllocation) {
    this._productAllocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productAllocationInput() {
    return this._productAllocation.internalValue;
  }

  // security_context - computed: false, optional: false, required: true
  private _securityContext = new OpenpipelineV2UsersessionsPipelinesSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: OpenpipelineV2UsersessionsPipelinesSecurityContext) {
    this._securityContext.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // storage - computed: false, optional: false, required: true
  private _storage = new OpenpipelineV2UsersessionsPipelinesStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: OpenpipelineV2UsersessionsPipelinesStorage) {
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
      cost_allocation: openpipelineV2UsersessionsPipelinesCostAllocationToTerraform(this._costAllocation.internalValue),
      data_extraction: openpipelineV2UsersessionsPipelinesDataExtractionToTerraform(this._dataExtraction.internalValue),
      davis: openpipelineV2UsersessionsPipelinesDavisToTerraform(this._davis.internalValue),
      metric_extraction: openpipelineV2UsersessionsPipelinesMetricExtractionToTerraform(this._metricExtraction.internalValue),
      processing: openpipelineV2UsersessionsPipelinesProcessingToTerraform(this._processing.internalValue),
      product_allocation: openpipelineV2UsersessionsPipelinesProductAllocationToTerraform(this._productAllocation.internalValue),
      security_context: openpipelineV2UsersessionsPipelinesSecurityContextToTerraform(this._securityContext.internalValue),
      storage: openpipelineV2UsersessionsPipelinesStorageToTerraform(this._storage.internalValue),
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
        value: openpipelineV2UsersessionsPipelinesCostAllocationToHclTerraform(this._costAllocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2UsersessionsPipelinesCostAllocationList",
      },
      data_extraction: {
        value: openpipelineV2UsersessionsPipelinesDataExtractionToHclTerraform(this._dataExtraction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2UsersessionsPipelinesDataExtractionList",
      },
      davis: {
        value: openpipelineV2UsersessionsPipelinesDavisToHclTerraform(this._davis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2UsersessionsPipelinesDavisList",
      },
      metric_extraction: {
        value: openpipelineV2UsersessionsPipelinesMetricExtractionToHclTerraform(this._metricExtraction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2UsersessionsPipelinesMetricExtractionList",
      },
      processing: {
        value: openpipelineV2UsersessionsPipelinesProcessingToHclTerraform(this._processing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2UsersessionsPipelinesProcessingList",
      },
      product_allocation: {
        value: openpipelineV2UsersessionsPipelinesProductAllocationToHclTerraform(this._productAllocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2UsersessionsPipelinesProductAllocationList",
      },
      security_context: {
        value: openpipelineV2UsersessionsPipelinesSecurityContextToHclTerraform(this._securityContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2UsersessionsPipelinesSecurityContextList",
      },
      storage: {
        value: openpipelineV2UsersessionsPipelinesStorageToHclTerraform(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2UsersessionsPipelinesStorageList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
