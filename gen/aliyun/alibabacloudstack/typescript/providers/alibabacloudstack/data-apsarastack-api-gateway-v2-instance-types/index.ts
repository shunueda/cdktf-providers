// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_api_gateway_v2_instance_types
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApsarastackApiGatewayV2InstanceTypesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_api_gateway_v2_instance_types#cpu DataApsarastackApiGatewayV2InstanceTypes#cpu}
  */
  readonly cpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_api_gateway_v2_instance_types#id DataApsarastackApiGatewayV2InstanceTypes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_api_gateway_v2_instance_types#ids DataApsarastackApiGatewayV2InstanceTypes#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_api_gateway_v2_instance_types#memory DataApsarastackApiGatewayV2InstanceTypes#memory}
  */
  readonly memory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_api_gateway_v2_instance_types#sorted_by DataApsarastackApiGatewayV2InstanceTypes#sorted_by}
  */
  readonly sortedBy?: string;
}
export interface DataApsarastackApiGatewayV2InstanceTypesInstanceTypes {
}

export function dataApsarastackApiGatewayV2InstanceTypesInstanceTypesToTerraform(struct?: DataApsarastackApiGatewayV2InstanceTypesInstanceTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApsarastackApiGatewayV2InstanceTypesInstanceTypesToHclTerraform(struct?: DataApsarastackApiGatewayV2InstanceTypesInstanceTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApsarastackApiGatewayV2InstanceTypesInstanceTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApsarastackApiGatewayV2InstanceTypesInstanceTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApsarastackApiGatewayV2InstanceTypesInstanceTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_class - computed: true, optional: false, required: false
  public get instanceClass() {
    return this.getStringAttribute('instance_class');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // product - computed: true, optional: false, required: false
  public get product() {
    return this.getStringAttribute('product');
  }

  // spec_from - computed: true, optional: false, required: false
  public get specFrom() {
    return this.getStringAttribute('spec_from');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // uni_key - computed: true, optional: false, required: false
  public get uniKey() {
    return this.getStringAttribute('uni_key');
  }
}

export class DataApsarastackApiGatewayV2InstanceTypesInstanceTypesList extends cdktf.ComplexList {

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
  public get(index: number): DataApsarastackApiGatewayV2InstanceTypesInstanceTypesOutputReference {
    return new DataApsarastackApiGatewayV2InstanceTypesInstanceTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_api_gateway_v2_instance_types apsarastack_api_gateway_v2_instance_types}
*/
export class DataApsarastackApiGatewayV2InstanceTypes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_api_gateway_v2_instance_types";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApsarastackApiGatewayV2InstanceTypes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApsarastackApiGatewayV2InstanceTypes to import
  * @param importFromId The id of the existing DataApsarastackApiGatewayV2InstanceTypes that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_api_gateway_v2_instance_types#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApsarastackApiGatewayV2InstanceTypes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_api_gateway_v2_instance_types", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_api_gateway_v2_instance_types apsarastack_api_gateway_v2_instance_types} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApsarastackApiGatewayV2InstanceTypesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataApsarastackApiGatewayV2InstanceTypesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_api_gateway_v2_instance_types',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cpu = config.cpu;
    this._id = config.id;
    this._ids = config.ids;
    this._memory = config.memory;
    this._sortedBy = config.sortedBy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // instance_types - computed: true, optional: false, required: false
  private _instanceTypes = new DataApsarastackApiGatewayV2InstanceTypesInstanceTypesList(this, "instance_types", false);
  public get instanceTypes() {
    return this._instanceTypes;
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

  // sorted_by - computed: false, optional: true, required: false
  private _sortedBy?: string; 
  public get sortedBy() {
    return this.getStringAttribute('sorted_by');
  }
  public set sortedBy(value: string) {
    this._sortedBy = value;
  }
  public resetSortedBy() {
    this._sortedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortedByInput() {
    return this._sortedBy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cpu: cdktf.numberToTerraform(this._cpu),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      memory: cdktf.numberToTerraform(this._memory),
      sorted_by: cdktf.stringToTerraform(this._sortedBy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cpu: {
        value: cdktf.numberToHclTerraform(this._cpu),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      memory: {
        value: cdktf.numberToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sorted_by: {
        value: cdktf.stringToHclTerraform(this._sortedBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
