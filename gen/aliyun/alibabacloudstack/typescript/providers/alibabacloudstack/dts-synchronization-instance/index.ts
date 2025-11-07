// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/dts_synchronization_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DtsSynchronizationInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/dts_synchronization_instance#compute_unit DtsSynchronizationInstance#compute_unit}
  */
  readonly computeUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/dts_synchronization_instance#database_count DtsSynchronizationInstance#database_count}
  */
  readonly databaseCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/dts_synchronization_instance#destination_endpoint_engine_name DtsSynchronizationInstance#destination_endpoint_engine_name}
  */
  readonly destinationEndpointEngineName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/dts_synchronization_instance#destination_endpoint_region DtsSynchronizationInstance#destination_endpoint_region}
  */
  readonly destinationEndpointRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/dts_synchronization_instance#id DtsSynchronizationInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/dts_synchronization_instance#instance_class DtsSynchronizationInstance#instance_class}
  */
  readonly instanceClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/dts_synchronization_instance#payment_duration DtsSynchronizationInstance#payment_duration}
  */
  readonly paymentDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/dts_synchronization_instance#payment_duration_unit DtsSynchronizationInstance#payment_duration_unit}
  */
  readonly paymentDurationUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/dts_synchronization_instance#payment_type DtsSynchronizationInstance#payment_type}
  */
  readonly paymentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/dts_synchronization_instance#quantity DtsSynchronizationInstance#quantity}
  */
  readonly quantity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/dts_synchronization_instance#source_endpoint_engine_name DtsSynchronizationInstance#source_endpoint_engine_name}
  */
  readonly sourceEndpointEngineName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/dts_synchronization_instance#source_endpoint_region DtsSynchronizationInstance#source_endpoint_region}
  */
  readonly sourceEndpointRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/dts_synchronization_instance#sync_architecture DtsSynchronizationInstance#sync_architecture}
  */
  readonly syncArchitecture?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/dts_synchronization_instance alibabacloudstack_dts_synchronization_instance}
*/
export class DtsSynchronizationInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_dts_synchronization_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DtsSynchronizationInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DtsSynchronizationInstance to import
  * @param importFromId The id of the existing DtsSynchronizationInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/dts_synchronization_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DtsSynchronizationInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_dts_synchronization_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/dts_synchronization_instance alibabacloudstack_dts_synchronization_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DtsSynchronizationInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DtsSynchronizationInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_dts_synchronization_instance',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._computeUnit = config.computeUnit;
    this._databaseCount = config.databaseCount;
    this._destinationEndpointEngineName = config.destinationEndpointEngineName;
    this._destinationEndpointRegion = config.destinationEndpointRegion;
    this._id = config.id;
    this._instanceClass = config.instanceClass;
    this._paymentDuration = config.paymentDuration;
    this._paymentDurationUnit = config.paymentDurationUnit;
    this._paymentType = config.paymentType;
    this._quantity = config.quantity;
    this._sourceEndpointEngineName = config.sourceEndpointEngineName;
    this._sourceEndpointRegion = config.sourceEndpointRegion;
    this._syncArchitecture = config.syncArchitecture;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compute_unit - computed: false, optional: true, required: false
  private _computeUnit?: number; 
  public get computeUnit() {
    return this.getNumberAttribute('compute_unit');
  }
  public set computeUnit(value: number) {
    this._computeUnit = value;
  }
  public resetComputeUnit() {
    this._computeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeUnitInput() {
    return this._computeUnit;
  }

  // database_count - computed: false, optional: true, required: false
  private _databaseCount?: number; 
  public get databaseCount() {
    return this.getNumberAttribute('database_count');
  }
  public set databaseCount(value: number) {
    this._databaseCount = value;
  }
  public resetDatabaseCount() {
    this._databaseCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseCountInput() {
    return this._databaseCount;
  }

  // destination_endpoint_engine_name - computed: false, optional: false, required: true
  private _destinationEndpointEngineName?: string; 
  public get destinationEndpointEngineName() {
    return this.getStringAttribute('destination_endpoint_engine_name');
  }
  public set destinationEndpointEngineName(value: string) {
    this._destinationEndpointEngineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationEndpointEngineNameInput() {
    return this._destinationEndpointEngineName;
  }

  // destination_endpoint_region - computed: false, optional: false, required: true
  private _destinationEndpointRegion?: string; 
  public get destinationEndpointRegion() {
    return this.getStringAttribute('destination_endpoint_region');
  }
  public set destinationEndpointRegion(value: string) {
    this._destinationEndpointRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationEndpointRegionInput() {
    return this._destinationEndpointRegion;
  }

  // dts_job_id - computed: true, optional: false, required: false
  public get dtsJobId() {
    return this.getStringAttribute('dts_job_id');
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

  // instance_class - computed: true, optional: true, required: false
  private _instanceClass?: string; 
  public get instanceClass() {
    return this.getStringAttribute('instance_class');
  }
  public set instanceClass(value: string) {
    this._instanceClass = value;
  }
  public resetInstanceClass() {
    this._instanceClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceClassInput() {
    return this._instanceClass;
  }

  // payment_duration - computed: false, optional: true, required: false
  private _paymentDuration?: number; 
  public get paymentDuration() {
    return this.getNumberAttribute('payment_duration');
  }
  public set paymentDuration(value: number) {
    this._paymentDuration = value;
  }
  public resetPaymentDuration() {
    this._paymentDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentDurationInput() {
    return this._paymentDuration;
  }

  // payment_duration_unit - computed: false, optional: true, required: false
  private _paymentDurationUnit?: string; 
  public get paymentDurationUnit() {
    return this.getStringAttribute('payment_duration_unit');
  }
  public set paymentDurationUnit(value: string) {
    this._paymentDurationUnit = value;
  }
  public resetPaymentDurationUnit() {
    this._paymentDurationUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentDurationUnitInput() {
    return this._paymentDurationUnit;
  }

  // payment_type - computed: false, optional: false, required: true
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
  }

  // quantity - computed: false, optional: true, required: false
  private _quantity?: number; 
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }
  public set quantity(value: number) {
    this._quantity = value;
  }
  public resetQuantity() {
    this._quantity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityInput() {
    return this._quantity;
  }

  // source_endpoint_engine_name - computed: false, optional: false, required: true
  private _sourceEndpointEngineName?: string; 
  public get sourceEndpointEngineName() {
    return this.getStringAttribute('source_endpoint_engine_name');
  }
  public set sourceEndpointEngineName(value: string) {
    this._sourceEndpointEngineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointEngineNameInput() {
    return this._sourceEndpointEngineName;
  }

  // source_endpoint_region - computed: false, optional: false, required: true
  private _sourceEndpointRegion?: string; 
  public get sourceEndpointRegion() {
    return this.getStringAttribute('source_endpoint_region');
  }
  public set sourceEndpointRegion(value: string) {
    this._sourceEndpointRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointRegionInput() {
    return this._sourceEndpointRegion;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // sync_architecture - computed: false, optional: true, required: false
  private _syncArchitecture?: string; 
  public get syncArchitecture() {
    return this.getStringAttribute('sync_architecture');
  }
  public set syncArchitecture(value: string) {
    this._syncArchitecture = value;
  }
  public resetSyncArchitecture() {
    this._syncArchitecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncArchitectureInput() {
    return this._syncArchitecture;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compute_unit: cdktf.numberToTerraform(this._computeUnit),
      database_count: cdktf.numberToTerraform(this._databaseCount),
      destination_endpoint_engine_name: cdktf.stringToTerraform(this._destinationEndpointEngineName),
      destination_endpoint_region: cdktf.stringToTerraform(this._destinationEndpointRegion),
      id: cdktf.stringToTerraform(this._id),
      instance_class: cdktf.stringToTerraform(this._instanceClass),
      payment_duration: cdktf.numberToTerraform(this._paymentDuration),
      payment_duration_unit: cdktf.stringToTerraform(this._paymentDurationUnit),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      quantity: cdktf.numberToTerraform(this._quantity),
      source_endpoint_engine_name: cdktf.stringToTerraform(this._sourceEndpointEngineName),
      source_endpoint_region: cdktf.stringToTerraform(this._sourceEndpointRegion),
      sync_architecture: cdktf.stringToTerraform(this._syncArchitecture),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compute_unit: {
        value: cdktf.numberToHclTerraform(this._computeUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      database_count: {
        value: cdktf.numberToHclTerraform(this._databaseCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      destination_endpoint_engine_name: {
        value: cdktf.stringToHclTerraform(this._destinationEndpointEngineName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_endpoint_region: {
        value: cdktf.stringToHclTerraform(this._destinationEndpointRegion),
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
      instance_class: {
        value: cdktf.stringToHclTerraform(this._instanceClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payment_duration: {
        value: cdktf.numberToHclTerraform(this._paymentDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      payment_duration_unit: {
        value: cdktf.stringToHclTerraform(this._paymentDurationUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quantity: {
        value: cdktf.numberToHclTerraform(this._quantity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_endpoint_engine_name: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointEngineName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endpoint_region: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_architecture: {
        value: cdktf.stringToHclTerraform(this._syncArchitecture),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
