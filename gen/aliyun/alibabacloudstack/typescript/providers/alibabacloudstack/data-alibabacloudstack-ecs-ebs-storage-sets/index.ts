// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/data-sources/ecs_ebs_storage_sets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlibabacloudstackEcsEbsStorageSetsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/data-sources/ecs_ebs_storage_sets#id DataAlibabacloudstackEcsEbsStorageSets#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/data-sources/ecs_ebs_storage_sets#maxpartition_number DataAlibabacloudstackEcsEbsStorageSets#maxpartition_number}
  */
  readonly maxpartitionNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/data-sources/ecs_ebs_storage_sets#storage_set_id DataAlibabacloudstackEcsEbsStorageSets#storage_set_id}
  */
  readonly storageSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/data-sources/ecs_ebs_storage_sets#storage_set_name DataAlibabacloudstackEcsEbsStorageSets#storage_set_name}
  */
  readonly storageSetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/data-sources/ecs_ebs_storage_sets#zone_id DataAlibabacloudstackEcsEbsStorageSets#zone_id}
  */
  readonly zoneId?: string;
}
export interface DataAlibabacloudstackEcsEbsStorageSetsStorages {
}

export function dataAlibabacloudstackEcsEbsStorageSetsStoragesToTerraform(struct?: DataAlibabacloudstackEcsEbsStorageSetsStorages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackEcsEbsStorageSetsStoragesToHclTerraform(struct?: DataAlibabacloudstackEcsEbsStorageSetsStorages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackEcsEbsStorageSetsStoragesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackEcsEbsStorageSetsStorages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackEcsEbsStorageSetsStorages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // storage_set_id - computed: true, optional: false, required: false
  public get storageSetId() {
    return this.getStringAttribute('storage_set_id');
  }

  // storage_set_name - computed: true, optional: false, required: false
  public get storageSetName() {
    return this.getStringAttribute('storage_set_name');
  }

  // storage_set_partition_number - computed: true, optional: false, required: false
  public get storageSetPartitionNumber() {
    return this.getNumberAttribute('storage_set_partition_number');
  }
}

export class DataAlibabacloudstackEcsEbsStorageSetsStoragesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackEcsEbsStorageSetsStoragesOutputReference {
    return new DataAlibabacloudstackEcsEbsStorageSetsStoragesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/data-sources/ecs_ebs_storage_sets alibabacloudstack_ecs_ebs_storage_sets}
*/
export class DataAlibabacloudstackEcsEbsStorageSets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_ecs_ebs_storage_sets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlibabacloudstackEcsEbsStorageSets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlibabacloudstackEcsEbsStorageSets to import
  * @param importFromId The id of the existing DataAlibabacloudstackEcsEbsStorageSets that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/data-sources/ecs_ebs_storage_sets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlibabacloudstackEcsEbsStorageSets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_ecs_ebs_storage_sets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/data-sources/ecs_ebs_storage_sets alibabacloudstack_ecs_ebs_storage_sets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlibabacloudstackEcsEbsStorageSetsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlibabacloudstackEcsEbsStorageSetsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_ecs_ebs_storage_sets',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.16.21',
        providerVersionConstraint: '3.16.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._maxpartitionNumber = config.maxpartitionNumber;
    this._storageSetId = config.storageSetId;
    this._storageSetName = config.storageSetName;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // maxpartition_number - computed: false, optional: true, required: false
  private _maxpartitionNumber?: string; 
  public get maxpartitionNumber() {
    return this.getStringAttribute('maxpartition_number');
  }
  public set maxpartitionNumber(value: string) {
    this._maxpartitionNumber = value;
  }
  public resetMaxpartitionNumber() {
    this._maxpartitionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxpartitionNumberInput() {
    return this._maxpartitionNumber;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // storage_set_id - computed: false, optional: true, required: false
  private _storageSetId?: string; 
  public get storageSetId() {
    return this.getStringAttribute('storage_set_id');
  }
  public set storageSetId(value: string) {
    this._storageSetId = value;
  }
  public resetStorageSetId() {
    this._storageSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSetIdInput() {
    return this._storageSetId;
  }

  // storage_set_name - computed: false, optional: true, required: false
  private _storageSetName?: string; 
  public get storageSetName() {
    return this.getStringAttribute('storage_set_name');
  }
  public set storageSetName(value: string) {
    this._storageSetName = value;
  }
  public resetStorageSetName() {
    this._storageSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSetNameInput() {
    return this._storageSetName;
  }

  // storages - computed: true, optional: false, required: false
  private _storages = new DataAlibabacloudstackEcsEbsStorageSetsStoragesList(this, "storages", false);
  public get storages() {
    return this._storages;
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
      id: cdktf.stringToTerraform(this._id),
      maxpartition_number: cdktf.stringToTerraform(this._maxpartitionNumber),
      storage_set_id: cdktf.stringToTerraform(this._storageSetId),
      storage_set_name: cdktf.stringToTerraform(this._storageSetName),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maxpartition_number: {
        value: cdktf.stringToHclTerraform(this._maxpartitionNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_set_id: {
        value: cdktf.stringToHclTerraform(this._storageSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_set_name: {
        value: cdktf.stringToHclTerraform(this._storageSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
