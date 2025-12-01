// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ecs_elasticity_assurances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudEcsElasticityAssurancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ecs_elasticity_assurances#id DataAlicloudEcsElasticityAssurances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ecs_elasticity_assurances#ids DataAlicloudEcsElasticityAssurances#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ecs_elasticity_assurances#output_file DataAlicloudEcsElasticityAssurances#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ecs_elasticity_assurances#private_pool_options_ids DataAlicloudEcsElasticityAssurances#private_pool_options_ids}
  */
  readonly privatePoolOptionsIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ecs_elasticity_assurances#resource_group_id DataAlicloudEcsElasticityAssurances#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ecs_elasticity_assurances#status DataAlicloudEcsElasticityAssurances#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ecs_elasticity_assurances#tags DataAlicloudEcsElasticityAssurances#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface DataAlicloudEcsElasticityAssurancesAssurancesAllocatedResources {
}

export function dataAlicloudEcsElasticityAssurancesAssurancesAllocatedResourcesToTerraform(struct?: DataAlicloudEcsElasticityAssurancesAssurancesAllocatedResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudEcsElasticityAssurancesAssurancesAllocatedResourcesToHclTerraform(struct?: DataAlicloudEcsElasticityAssurancesAssurancesAllocatedResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudEcsElasticityAssurancesAssurancesAllocatedResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudEcsElasticityAssurancesAssurancesAllocatedResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudEcsElasticityAssurancesAssurancesAllocatedResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // total_amount - computed: true, optional: false, required: false
  public get totalAmount() {
    return this.getNumberAttribute('total_amount');
  }

  // used_amount - computed: true, optional: false, required: false
  public get usedAmount() {
    return this.getNumberAttribute('used_amount');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
}

export class DataAlicloudEcsElasticityAssurancesAssurancesAllocatedResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudEcsElasticityAssurancesAssurancesAllocatedResourcesOutputReference {
    return new DataAlicloudEcsElasticityAssurancesAssurancesAllocatedResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudEcsElasticityAssurancesAssurances {
}

export function dataAlicloudEcsElasticityAssurancesAssurancesToTerraform(struct?: DataAlicloudEcsElasticityAssurancesAssurances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudEcsElasticityAssurancesAssurancesToHclTerraform(struct?: DataAlicloudEcsElasticityAssurancesAssurances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudEcsElasticityAssurancesAssurancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudEcsElasticityAssurancesAssurances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudEcsElasticityAssurancesAssurances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocated_resources - computed: true, optional: false, required: false
  private _allocatedResources = new DataAlicloudEcsElasticityAssurancesAssurancesAllocatedResourcesList(this, "allocated_resources", false);
  public get allocatedResources() {
    return this._allocatedResources;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // elasticity_assurance_id - computed: true, optional: false, required: false
  public get elasticityAssuranceId() {
    return this.getStringAttribute('elasticity_assurance_id');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_charge_type - computed: true, optional: false, required: false
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }

  // private_pool_options_id - computed: true, optional: false, required: false
  public get privatePoolOptionsId() {
    return this.getStringAttribute('private_pool_options_id');
  }

  // private_pool_options_match_criteria - computed: true, optional: false, required: false
  public get privatePoolOptionsMatchCriteria() {
    return this.getStringAttribute('private_pool_options_match_criteria');
  }

  // private_pool_options_name - computed: true, optional: false, required: false
  public get privatePoolOptionsName() {
    return this.getStringAttribute('private_pool_options_name');
  }

  // resource_group_id - computed: true, optional: false, required: false
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // start_time_type - computed: true, optional: false, required: false
  public get startTimeType() {
    return this.getStringAttribute('start_time_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // total_assurance_times - computed: true, optional: false, required: false
  public get totalAssuranceTimes() {
    return this.getStringAttribute('total_assurance_times');
  }

  // used_assurance_times - computed: true, optional: false, required: false
  public get usedAssuranceTimes() {
    return this.getNumberAttribute('used_assurance_times');
  }
}

export class DataAlicloudEcsElasticityAssurancesAssurancesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudEcsElasticityAssurancesAssurancesOutputReference {
    return new DataAlicloudEcsElasticityAssurancesAssurancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ecs_elasticity_assurances alicloud_ecs_elasticity_assurances}
*/
export class DataAlicloudEcsElasticityAssurances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ecs_elasticity_assurances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudEcsElasticityAssurances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudEcsElasticityAssurances to import
  * @param importFromId The id of the existing DataAlicloudEcsElasticityAssurances that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ecs_elasticity_assurances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudEcsElasticityAssurances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ecs_elasticity_assurances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ecs_elasticity_assurances alicloud_ecs_elasticity_assurances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudEcsElasticityAssurancesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudEcsElasticityAssurancesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ecs_elasticity_assurances',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
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
    this._ids = config.ids;
    this._outputFile = config.outputFile;
    this._privatePoolOptionsIds = config.privatePoolOptionsIds;
    this._resourceGroupId = config.resourceGroupId;
    this._status = config.status;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assurances - computed: true, optional: false, required: false
  private _assurances = new DataAlicloudEcsElasticityAssurancesAssurancesList(this, "assurances", false);
  public get assurances() {
    return this._assurances;
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

  // private_pool_options_ids - computed: false, optional: true, required: false
  private _privatePoolOptionsIds?: string[]; 
  public get privatePoolOptionsIds() {
    return this.getListAttribute('private_pool_options_ids');
  }
  public set privatePoolOptionsIds(value: string[]) {
    this._privatePoolOptionsIds = value;
  }
  public resetPrivatePoolOptionsIds() {
    this._privatePoolOptionsIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privatePoolOptionsIdsInput() {
    return this._privatePoolOptionsIds;
  }

  // resource_group_id - computed: false, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      output_file: cdktf.stringToTerraform(this._outputFile),
      private_pool_options_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._privatePoolOptionsIds),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_pool_options_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._privatePoolOptionsIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
