// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dts_migration_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DtsMigrationInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dts_migration_instance#compute_unit DtsMigrationInstance#compute_unit}
  */
  readonly computeUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dts_migration_instance#database_count DtsMigrationInstance#database_count}
  */
  readonly databaseCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dts_migration_instance#destination_endpoint_engine_name DtsMigrationInstance#destination_endpoint_engine_name}
  */
  readonly destinationEndpointEngineName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dts_migration_instance#destination_endpoint_region DtsMigrationInstance#destination_endpoint_region}
  */
  readonly destinationEndpointRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dts_migration_instance#id DtsMigrationInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dts_migration_instance#instance_class DtsMigrationInstance#instance_class}
  */
  readonly instanceClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dts_migration_instance#payment_type DtsMigrationInstance#payment_type}
  */
  readonly paymentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dts_migration_instance#source_endpoint_engine_name DtsMigrationInstance#source_endpoint_engine_name}
  */
  readonly sourceEndpointEngineName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dts_migration_instance#source_endpoint_region DtsMigrationInstance#source_endpoint_region}
  */
  readonly sourceEndpointRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dts_migration_instance#sync_architecture DtsMigrationInstance#sync_architecture}
  */
  readonly syncArchitecture?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dts_migration_instance#tags DtsMigrationInstance#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dts_migration_instance alicloud_dts_migration_instance}
*/
export class DtsMigrationInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_dts_migration_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DtsMigrationInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DtsMigrationInstance to import
  * @param importFromId The id of the existing DtsMigrationInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dts_migration_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DtsMigrationInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_dts_migration_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dts_migration_instance alicloud_dts_migration_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DtsMigrationInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DtsMigrationInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_dts_migration_instance',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
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
    this._paymentType = config.paymentType;
    this._sourceEndpointEngineName = config.sourceEndpointEngineName;
    this._sourceEndpointRegion = config.sourceEndpointRegion;
    this._syncArchitecture = config.syncArchitecture;
    this._tags = config.tags;
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

  // dts_instance_id - computed: true, optional: false, required: false
  public get dtsInstanceId() {
    return this.getStringAttribute('dts_instance_id');
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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
      payment_type: cdktf.stringToTerraform(this._paymentType),
      source_endpoint_engine_name: cdktf.stringToTerraform(this._sourceEndpointEngineName),
      source_endpoint_region: cdktf.stringToTerraform(this._sourceEndpointRegion),
      sync_architecture: cdktf.stringToTerraform(this._syncArchitecture),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
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
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
