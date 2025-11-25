// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/instance_types
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZenlayercloudInstanceTypesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The available zone that the instance locates at.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/instance_types#availability_zone DataZenlayercloudInstanceTypes#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * The number of CPU cores of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/instance_types#cpu_count DataZenlayercloudInstanceTypes#cpu_count}
  */
  readonly cpuCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/instance_types#id DataZenlayercloudInstanceTypes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The charge type of instance. Valid values are `POSTPAID`, `PREPAID`. The default is `POSTPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/instance_types#instance_charge_type DataZenlayercloudInstanceTypes#instance_charge_type}
  */
  readonly instanceChargeType?: string;
  /**
  * The instance type of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/instance_types#instance_type DataZenlayercloudInstanceTypes#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Instance memory capacity, unit in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/instance_types#memory DataZenlayercloudInstanceTypes#memory}
  */
  readonly memory?: number;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/instance_types#result_output_file DataZenlayercloudInstanceTypes#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataZenlayercloudInstanceTypesInstanceTypeQuotas {
}

export function dataZenlayercloudInstanceTypesInstanceTypeQuotasToTerraform(struct?: DataZenlayercloudInstanceTypesInstanceTypeQuotas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZenlayercloudInstanceTypesInstanceTypeQuotasToHclTerraform(struct?: DataZenlayercloudInstanceTypesInstanceTypeQuotas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZenlayercloudInstanceTypesInstanceTypeQuotasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataZenlayercloudInstanceTypesInstanceTypeQuotas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZenlayercloudInstanceTypesInstanceTypeQuotas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // cpu_count - computed: true, optional: false, required: false
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // internet_charge_type - computed: true, optional: false, required: false
  public get internetChargeType() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_charge_type'));
  }

  // maximum_bandwidth_out - computed: true, optional: false, required: false
  public get maximumBandwidthOut() {
    return this.getNumberAttribute('maximum_bandwidth_out');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }
}

export class DataZenlayercloudInstanceTypesInstanceTypeQuotasList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataZenlayercloudInstanceTypesInstanceTypeQuotasOutputReference {
    return new DataZenlayercloudInstanceTypesInstanceTypeQuotasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/instance_types zenlayercloud_instance_types}
*/
export class DataZenlayercloudInstanceTypes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_instance_types";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZenlayercloudInstanceTypes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZenlayercloudInstanceTypes to import
  * @param importFromId The id of the existing DataZenlayercloudInstanceTypes that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/instance_types#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZenlayercloudInstanceTypes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_instance_types", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/data-sources/instance_types zenlayercloud_instance_types} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZenlayercloudInstanceTypesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZenlayercloudInstanceTypesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_instance_types',
      terraformGeneratorMetadata: {
        providerName: 'zenlayercloud',
        providerVersion: '0.2.10',
        providerVersionConstraint: '0.2.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZone = config.availabilityZone;
    this._cpuCount = config.cpuCount;
    this._id = config.id;
    this._instanceChargeType = config.instanceChargeType;
    this._instanceType = config.instanceType;
    this._memory = config.memory;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // cpu_count - computed: false, optional: true, required: false
  private _cpuCount?: number; 
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }
  public set cpuCount(value: number) {
    this._cpuCount = value;
  }
  public resetCpuCount() {
    this._cpuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCountInput() {
    return this._cpuCount;
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

  // instance_charge_type - computed: false, optional: true, required: false
  private _instanceChargeType?: string; 
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }
  public set instanceChargeType(value: string) {
    this._instanceChargeType = value;
  }
  public resetInstanceChargeType() {
    this._instanceChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypeInput() {
    return this._instanceChargeType;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // instance_type_quotas - computed: true, optional: false, required: false
  private _instanceTypeQuotas = new DataZenlayercloudInstanceTypesInstanceTypeQuotasList(this, "instance_type_quotas", false);
  public get instanceTypeQuotas() {
    return this._instanceTypeQuotas;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      cpu_count: cdktf.numberToTerraform(this._cpuCount),
      id: cdktf.stringToTerraform(this._id),
      instance_charge_type: cdktf.stringToTerraform(this._instanceChargeType),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      memory: cdktf.numberToTerraform(this._memory),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_count: {
        value: cdktf.numberToHclTerraform(this._cpuCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_charge_type: {
        value: cdktf.stringToHclTerraform(this._instanceChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory: {
        value: cdktf.numberToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
