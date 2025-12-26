// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/reserved_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudReservedInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The available zone that the reserved instance locates at.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/reserved_instances#availability_zone DataTencentcloudReservedInstances#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/reserved_instances#id DataTencentcloudReservedInstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The type of reserved instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/reserved_instances#instance_type DataTencentcloudReservedInstances#instance_type}
  */
  readonly instanceType?: string;
  /**
  * ID of the reserved instance to be query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/reserved_instances#reserved_instance_id DataTencentcloudReservedInstances#reserved_instance_id}
  */
  readonly reservedInstanceId?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/reserved_instances#result_output_file DataTencentcloudReservedInstances#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudReservedInstancesReservedInstanceListStruct {
}

export function dataTencentcloudReservedInstancesReservedInstanceListStructToTerraform(struct?: DataTencentcloudReservedInstancesReservedInstanceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudReservedInstancesReservedInstanceListStructToHclTerraform(struct?: DataTencentcloudReservedInstancesReservedInstanceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudReservedInstancesReservedInstanceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudReservedInstancesReservedInstanceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudReservedInstancesReservedInstanceListStruct | undefined) {
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

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // instance_count - computed: true, optional: false, required: false
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // reserved_instance_id - computed: true, optional: false, required: false
  public get reservedInstanceId() {
    return this.getStringAttribute('reserved_instance_id');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataTencentcloudReservedInstancesReservedInstanceListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudReservedInstancesReservedInstanceListStructOutputReference {
    return new DataTencentcloudReservedInstancesReservedInstanceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/reserved_instances tencentcloud_reserved_instances}
*/
export class DataTencentcloudReservedInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_reserved_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudReservedInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudReservedInstances to import
  * @param importFromId The id of the existing DataTencentcloudReservedInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/reserved_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudReservedInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_reserved_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/reserved_instances tencentcloud_reserved_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudReservedInstancesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudReservedInstancesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_reserved_instances',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
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
    this._id = config.id;
    this._instanceType = config.instanceType;
    this._reservedInstanceId = config.reservedInstanceId;
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

  // reserved_instance_id - computed: false, optional: true, required: false
  private _reservedInstanceId?: string; 
  public get reservedInstanceId() {
    return this.getStringAttribute('reserved_instance_id');
  }
  public set reservedInstanceId(value: string) {
    this._reservedInstanceId = value;
  }
  public resetReservedInstanceId() {
    this._reservedInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedInstanceIdInput() {
    return this._reservedInstanceId;
  }

  // reserved_instance_list - computed: true, optional: false, required: false
  private _reservedInstanceList = new DataTencentcloudReservedInstancesReservedInstanceListStructList(this, "reserved_instance_list", false);
  public get reservedInstanceList() {
    return this._reservedInstanceList;
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
      id: cdktf.stringToTerraform(this._id),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      reserved_instance_id: cdktf.stringToTerraform(this._reservedInstanceId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      reserved_instance_id: {
        value: cdktf.stringToHclTerraform(this._reservedInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
