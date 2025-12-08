// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/db_instance_class_infos
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudDbInstanceClassInfosConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/db_instance_class_infos#commodity_code DataAlicloudDbInstanceClassInfos#commodity_code}
  */
  readonly commodityCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/db_instance_class_infos#db_instance_id DataAlicloudDbInstanceClassInfos#db_instance_id}
  */
  readonly dbInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/db_instance_class_infos#id DataAlicloudDbInstanceClassInfos#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/db_instance_class_infos#order_type DataAlicloudDbInstanceClassInfos#order_type}
  */
  readonly orderType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/db_instance_class_infos#output_file DataAlicloudDbInstanceClassInfos#output_file}
  */
  readonly outputFile?: string;
  /**
  * infos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/db_instance_class_infos#infos DataAlicloudDbInstanceClassInfos#infos}
  */
  readonly infos?: DataAlicloudDbInstanceClassInfosInfos[] | cdktf.IResolvable;
}
export interface DataAlicloudDbInstanceClassInfosInfos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/db_instance_class_infos#class_code DataAlicloudDbInstanceClassInfos#class_code}
  */
  readonly classCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/db_instance_class_infos#class_group DataAlicloudDbInstanceClassInfos#class_group}
  */
  readonly classGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/db_instance_class_infos#cpu DataAlicloudDbInstanceClassInfos#cpu}
  */
  readonly cpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/db_instance_class_infos#instruction_set_arch DataAlicloudDbInstanceClassInfos#instruction_set_arch}
  */
  readonly instructionSetArch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/db_instance_class_infos#max_connections DataAlicloudDbInstanceClassInfos#max_connections}
  */
  readonly maxConnections?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/db_instance_class_infos#max_iombps DataAlicloudDbInstanceClassInfos#max_iombps}
  */
  readonly maxIombps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/db_instance_class_infos#max_iops DataAlicloudDbInstanceClassInfos#max_iops}
  */
  readonly maxIops?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/db_instance_class_infos#memory_class DataAlicloudDbInstanceClassInfos#memory_class}
  */
  readonly memoryClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/db_instance_class_infos#reference_price DataAlicloudDbInstanceClassInfos#reference_price}
  */
  readonly referencePrice?: string;
}

export function dataAlicloudDbInstanceClassInfosInfosToTerraform(struct?: DataAlicloudDbInstanceClassInfosInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_code: cdktf.stringToTerraform(struct!.classCode),
    class_group: cdktf.stringToTerraform(struct!.classGroup),
    cpu: cdktf.stringToTerraform(struct!.cpu),
    instruction_set_arch: cdktf.stringToTerraform(struct!.instructionSetArch),
    max_connections: cdktf.stringToTerraform(struct!.maxConnections),
    max_iombps: cdktf.stringToTerraform(struct!.maxIombps),
    max_iops: cdktf.stringToTerraform(struct!.maxIops),
    memory_class: cdktf.stringToTerraform(struct!.memoryClass),
    reference_price: cdktf.stringToTerraform(struct!.referencePrice),
  }
}


export function dataAlicloudDbInstanceClassInfosInfosToHclTerraform(struct?: DataAlicloudDbInstanceClassInfosInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_code: {
      value: cdktf.stringToHclTerraform(struct!.classCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_group: {
      value: cdktf.stringToHclTerraform(struct!.classGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instruction_set_arch: {
      value: cdktf.stringToHclTerraform(struct!.instructionSetArch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_connections: {
      value: cdktf.stringToHclTerraform(struct!.maxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_iombps: {
      value: cdktf.stringToHclTerraform(struct!.maxIombps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_iops: {
      value: cdktf.stringToHclTerraform(struct!.maxIops),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_class: {
      value: cdktf.stringToHclTerraform(struct!.memoryClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference_price: {
      value: cdktf.stringToHclTerraform(struct!.referencePrice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAlicloudDbInstanceClassInfosInfosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAlicloudDbInstanceClassInfosInfos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.classCode = this._classCode;
    }
    if (this._classGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.classGroup = this._classGroup;
    }
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._instructionSetArch !== undefined) {
      hasAnyValues = true;
      internalValueResult.instructionSetArch = this._instructionSetArch;
    }
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    if (this._maxIombps !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIombps = this._maxIombps;
    }
    if (this._maxIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIops = this._maxIops;
    }
    if (this._memoryClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryClass = this._memoryClass;
    }
    if (this._referencePrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.referencePrice = this._referencePrice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudDbInstanceClassInfosInfos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classCode = undefined;
      this._classGroup = undefined;
      this._cpu = undefined;
      this._instructionSetArch = undefined;
      this._maxConnections = undefined;
      this._maxIombps = undefined;
      this._maxIops = undefined;
      this._memoryClass = undefined;
      this._referencePrice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classCode = value.classCode;
      this._classGroup = value.classGroup;
      this._cpu = value.cpu;
      this._instructionSetArch = value.instructionSetArch;
      this._maxConnections = value.maxConnections;
      this._maxIombps = value.maxIombps;
      this._maxIops = value.maxIops;
      this._memoryClass = value.memoryClass;
      this._referencePrice = value.referencePrice;
    }
  }

  // class_code - computed: false, optional: true, required: false
  private _classCode?: string; 
  public get classCode() {
    return this.getStringAttribute('class_code');
  }
  public set classCode(value: string) {
    this._classCode = value;
  }
  public resetClassCode() {
    this._classCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classCodeInput() {
    return this._classCode;
  }

  // class_group - computed: false, optional: true, required: false
  private _classGroup?: string; 
  public get classGroup() {
    return this.getStringAttribute('class_group');
  }
  public set classGroup(value: string) {
    this._classGroup = value;
  }
  public resetClassGroup() {
    this._classGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classGroupInput() {
    return this._classGroup;
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // instruction_set_arch - computed: false, optional: true, required: false
  private _instructionSetArch?: string; 
  public get instructionSetArch() {
    return this.getStringAttribute('instruction_set_arch');
  }
  public set instructionSetArch(value: string) {
    this._instructionSetArch = value;
  }
  public resetInstructionSetArch() {
    this._instructionSetArch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionSetArchInput() {
    return this._instructionSetArch;
  }

  // max_connections - computed: false, optional: true, required: false
  private _maxConnections?: string; 
  public get maxConnections() {
    return this.getStringAttribute('max_connections');
  }
  public set maxConnections(value: string) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // max_iombps - computed: false, optional: true, required: false
  private _maxIombps?: string; 
  public get maxIombps() {
    return this.getStringAttribute('max_iombps');
  }
  public set maxIombps(value: string) {
    this._maxIombps = value;
  }
  public resetMaxIombps() {
    this._maxIombps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIombpsInput() {
    return this._maxIombps;
  }

  // max_iops - computed: false, optional: true, required: false
  private _maxIops?: string; 
  public get maxIops() {
    return this.getStringAttribute('max_iops');
  }
  public set maxIops(value: string) {
    this._maxIops = value;
  }
  public resetMaxIops() {
    this._maxIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIopsInput() {
    return this._maxIops;
  }

  // memory_class - computed: false, optional: true, required: false
  private _memoryClass?: string; 
  public get memoryClass() {
    return this.getStringAttribute('memory_class');
  }
  public set memoryClass(value: string) {
    this._memoryClass = value;
  }
  public resetMemoryClass() {
    this._memoryClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryClassInput() {
    return this._memoryClass;
  }

  // reference_price - computed: false, optional: true, required: false
  private _referencePrice?: string; 
  public get referencePrice() {
    return this.getStringAttribute('reference_price');
  }
  public set referencePrice(value: string) {
    this._referencePrice = value;
  }
  public resetReferencePrice() {
    this._referencePrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referencePriceInput() {
    return this._referencePrice;
  }
}

export class DataAlicloudDbInstanceClassInfosInfosList extends cdktf.ComplexList {
  public internalValue? : DataAlicloudDbInstanceClassInfosInfos[] | cdktf.IResolvable

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
  public get(index: number): DataAlicloudDbInstanceClassInfosInfosOutputReference {
    return new DataAlicloudDbInstanceClassInfosInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/db_instance_class_infos alicloud_db_instance_class_infos}
*/
export class DataAlicloudDbInstanceClassInfos extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_db_instance_class_infos";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudDbInstanceClassInfos resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudDbInstanceClassInfos to import
  * @param importFromId The id of the existing DataAlicloudDbInstanceClassInfos that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/db_instance_class_infos#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudDbInstanceClassInfos to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_db_instance_class_infos", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/db_instance_class_infos alicloud_db_instance_class_infos} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudDbInstanceClassInfosConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudDbInstanceClassInfosConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_db_instance_class_infos',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._commodityCode = config.commodityCode;
    this._dbInstanceId = config.dbInstanceId;
    this._id = config.id;
    this._orderType = config.orderType;
    this._outputFile = config.outputFile;
    this._infos.internalValue = config.infos;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // commodity_code - computed: false, optional: false, required: true
  private _commodityCode?: string; 
  public get commodityCode() {
    return this.getStringAttribute('commodity_code');
  }
  public set commodityCode(value: string) {
    this._commodityCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commodityCodeInput() {
    return this._commodityCode;
  }

  // db_instance_id - computed: false, optional: true, required: false
  private _dbInstanceId?: string; 
  public get dbInstanceId() {
    return this.getStringAttribute('db_instance_id');
  }
  public set dbInstanceId(value: string) {
    this._dbInstanceId = value;
  }
  public resetDbInstanceId() {
    this._dbInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdInput() {
    return this._dbInstanceId;
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

  // order_type - computed: false, optional: false, required: true
  private _orderType?: string; 
  public get orderType() {
    return this.getStringAttribute('order_type');
  }
  public set orderType(value: string) {
    this._orderType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderTypeInput() {
    return this._orderType;
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

  // infos - computed: false, optional: true, required: false
  private _infos = new DataAlicloudDbInstanceClassInfosInfosList(this, "infos", false);
  public get infos() {
    return this._infos;
  }
  public putInfos(value: DataAlicloudDbInstanceClassInfosInfos[] | cdktf.IResolvable) {
    this._infos.internalValue = value;
  }
  public resetInfos() {
    this._infos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infosInput() {
    return this._infos.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      commodity_code: cdktf.stringToTerraform(this._commodityCode),
      db_instance_id: cdktf.stringToTerraform(this._dbInstanceId),
      id: cdktf.stringToTerraform(this._id),
      order_type: cdktf.stringToTerraform(this._orderType),
      output_file: cdktf.stringToTerraform(this._outputFile),
      infos: cdktf.listMapper(dataAlicloudDbInstanceClassInfosInfosToTerraform, true)(this._infos.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      commodity_code: {
        value: cdktf.stringToHclTerraform(this._commodityCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_id: {
        value: cdktf.stringToHclTerraform(this._dbInstanceId),
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
      order_type: {
        value: cdktf.stringToHclTerraform(this._orderType),
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
      infos: {
        value: cdktf.listMapperHcl(dataAlicloudDbInstanceClassInfosInfosToHclTerraform, true)(this._infos.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAlicloudDbInstanceClassInfosInfosList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
