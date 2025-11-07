// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/emr_instance_types
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudEmrInstanceTypesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/emr_instance_types#cluster_type DataAlicloudEmrInstanceTypes#cluster_type}
  */
  readonly clusterType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/emr_instance_types#destination_resource DataAlicloudEmrInstanceTypes#destination_resource}
  */
  readonly destinationResource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/emr_instance_types#id DataAlicloudEmrInstanceTypes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/emr_instance_types#instance_charge_type DataAlicloudEmrInstanceTypes#instance_charge_type}
  */
  readonly instanceChargeType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/emr_instance_types#instance_type DataAlicloudEmrInstanceTypes#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/emr_instance_types#output_file DataAlicloudEmrInstanceTypes#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/emr_instance_types#support_local_storage DataAlicloudEmrInstanceTypes#support_local_storage}
  */
  readonly supportLocalStorage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/emr_instance_types#support_node_type DataAlicloudEmrInstanceTypes#support_node_type}
  */
  readonly supportNodeType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/emr_instance_types#zone_id DataAlicloudEmrInstanceTypes#zone_id}
  */
  readonly zoneId?: string;
}
export interface DataAlicloudEmrInstanceTypesTypes {
}

export function dataAlicloudEmrInstanceTypesTypesToTerraform(struct?: DataAlicloudEmrInstanceTypesTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudEmrInstanceTypesTypesToHclTerraform(struct?: DataAlicloudEmrInstanceTypesTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudEmrInstanceTypesTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudEmrInstanceTypesTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudEmrInstanceTypesTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // local_storage_capacity - computed: true, optional: false, required: false
  public get localStorageCapacity() {
    return this.getNumberAttribute('local_storage_capacity');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
}

export class DataAlicloudEmrInstanceTypesTypesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudEmrInstanceTypesTypesOutputReference {
    return new DataAlicloudEmrInstanceTypesTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/emr_instance_types alicloud_emr_instance_types}
*/
export class DataAlicloudEmrInstanceTypes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_emr_instance_types";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudEmrInstanceTypes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudEmrInstanceTypes to import
  * @param importFromId The id of the existing DataAlicloudEmrInstanceTypes that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/emr_instance_types#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudEmrInstanceTypes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_emr_instance_types", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/emr_instance_types alicloud_emr_instance_types} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudEmrInstanceTypesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudEmrInstanceTypesConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_emr_instance_types',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterType = config.clusterType;
    this._destinationResource = config.destinationResource;
    this._id = config.id;
    this._instanceChargeType = config.instanceChargeType;
    this._instanceType = config.instanceType;
    this._outputFile = config.outputFile;
    this._supportLocalStorage = config.supportLocalStorage;
    this._supportNodeType = config.supportNodeType;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_type - computed: false, optional: false, required: true
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // destination_resource - computed: false, optional: false, required: true
  private _destinationResource?: string; 
  public get destinationResource() {
    return this.getStringAttribute('destination_resource');
  }
  public set destinationResource(value: string) {
    this._destinationResource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationResourceInput() {
    return this._destinationResource;
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

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // instance_charge_type - computed: false, optional: false, required: true
  private _instanceChargeType?: string; 
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }
  public set instanceChargeType(value: string) {
    this._instanceChargeType = value;
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

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // support_local_storage - computed: false, optional: true, required: false
  private _supportLocalStorage?: boolean | cdktf.IResolvable; 
  public get supportLocalStorage() {
    return this.getBooleanAttribute('support_local_storage');
  }
  public set supportLocalStorage(value: boolean | cdktf.IResolvable) {
    this._supportLocalStorage = value;
  }
  public resetSupportLocalStorage() {
    this._supportLocalStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportLocalStorageInput() {
    return this._supportLocalStorage;
  }

  // support_node_type - computed: false, optional: true, required: false
  private _supportNodeType?: string[]; 
  public get supportNodeType() {
    return this.getListAttribute('support_node_type');
  }
  public set supportNodeType(value: string[]) {
    this._supportNodeType = value;
  }
  public resetSupportNodeType() {
    this._supportNodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportNodeTypeInput() {
    return this._supportNodeType;
  }

  // types - computed: true, optional: false, required: false
  private _types = new DataAlicloudEmrInstanceTypesTypesList(this, "types", false);
  public get types() {
    return this._types;
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_type: cdktf.stringToTerraform(this._clusterType),
      destination_resource: cdktf.stringToTerraform(this._destinationResource),
      id: cdktf.stringToTerraform(this._id),
      instance_charge_type: cdktf.stringToTerraform(this._instanceChargeType),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      output_file: cdktf.stringToTerraform(this._outputFile),
      support_local_storage: cdktf.booleanToTerraform(this._supportLocalStorage),
      support_node_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._supportNodeType),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_type: {
        value: cdktf.stringToHclTerraform(this._clusterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_resource: {
        value: cdktf.stringToHclTerraform(this._destinationResource),
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
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      support_local_storage: {
        value: cdktf.booleanToHclTerraform(this._supportLocalStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      support_node_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._supportNodeType),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
