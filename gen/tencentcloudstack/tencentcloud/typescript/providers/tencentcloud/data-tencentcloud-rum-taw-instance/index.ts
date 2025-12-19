// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/rum_taw_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudRumTawInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Region ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/rum_taw_instance#area_ids DataTencentcloudRumTawInstance#area_ids}
  */
  readonly areaIds?: number[];
  /**
  * Billing status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/rum_taw_instance#charge_statuses DataTencentcloudRumTawInstance#charge_statuses}
  */
  readonly chargeStatuses?: number[];
  /**
  * Billing type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/rum_taw_instance#charge_types DataTencentcloudRumTawInstance#charge_types}
  */
  readonly chargeTypes?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/rum_taw_instance#id DataTencentcloudRumTawInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/rum_taw_instance#instance_ids DataTencentcloudRumTawInstance#instance_ids}
  */
  readonly instanceIds?: string[];
  /**
  * Instance status (`1`: creating; `2`: running; `3`: exceptional; `4`: restarting; `5`: stopping; `6`: stopped; `7`: terminating; `8`: terminated).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/rum_taw_instance#instance_statuses DataTencentcloudRumTawInstance#instance_statuses}
  */
  readonly instanceStatuses?: number[];
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/rum_taw_instance#result_output_file DataTencentcloudRumTawInstance#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudRumTawInstanceInstanceSetTags {
}

export function dataTencentcloudRumTawInstanceInstanceSetTagsToTerraform(struct?: DataTencentcloudRumTawInstanceInstanceSetTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudRumTawInstanceInstanceSetTagsToHclTerraform(struct?: DataTencentcloudRumTawInstanceInstanceSetTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudRumTawInstanceInstanceSetTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudRumTawInstanceInstanceSetTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudRumTawInstanceInstanceSetTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataTencentcloudRumTawInstanceInstanceSetTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudRumTawInstanceInstanceSetTagsOutputReference {
    return new DataTencentcloudRumTawInstanceInstanceSetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudRumTawInstanceInstanceSet {
}

export function dataTencentcloudRumTawInstanceInstanceSetToTerraform(struct?: DataTencentcloudRumTawInstanceInstanceSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudRumTawInstanceInstanceSetToHclTerraform(struct?: DataTencentcloudRumTawInstanceInstanceSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudRumTawInstanceInstanceSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudRumTawInstanceInstanceSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudRumTawInstanceInstanceSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // area_id - computed: true, optional: false, required: false
  public get areaId() {
    return this.getNumberAttribute('area_id');
  }

  // charge_status - computed: true, optional: false, required: false
  public get chargeStatus() {
    return this.getNumberAttribute('charge_status');
  }

  // charge_type - computed: true, optional: false, required: false
  public get chargeType() {
    return this.getNumberAttribute('charge_type');
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getNumberAttribute('cluster_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // data_retention_days - computed: true, optional: false, required: false
  public get dataRetentionDays() {
    return this.getNumberAttribute('data_retention_days');
  }

  // instance_desc - computed: true, optional: false, required: false
  public get instanceDesc() {
    return this.getStringAttribute('instance_desc');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // instance_status - computed: true, optional: false, required: false
  public get instanceStatus() {
    return this.getNumberAttribute('instance_status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataTencentcloudRumTawInstanceInstanceSetTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataTencentcloudRumTawInstanceInstanceSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudRumTawInstanceInstanceSetOutputReference {
    return new DataTencentcloudRumTawInstanceInstanceSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/rum_taw_instance tencentcloud_rum_taw_instance}
*/
export class DataTencentcloudRumTawInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_rum_taw_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudRumTawInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudRumTawInstance to import
  * @param importFromId The id of the existing DataTencentcloudRumTawInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/rum_taw_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudRumTawInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_rum_taw_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/rum_taw_instance tencentcloud_rum_taw_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudRumTawInstanceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudRumTawInstanceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_rum_taw_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._areaIds = config.areaIds;
    this._chargeStatuses = config.chargeStatuses;
    this._chargeTypes = config.chargeTypes;
    this._id = config.id;
    this._instanceIds = config.instanceIds;
    this._instanceStatuses = config.instanceStatuses;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // area_ids - computed: false, optional: true, required: false
  private _areaIds?: number[]; 
  public get areaIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('area_ids')));
  }
  public set areaIds(value: number[]) {
    this._areaIds = value;
  }
  public resetAreaIds() {
    this._areaIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaIdsInput() {
    return this._areaIds;
  }

  // charge_statuses - computed: false, optional: true, required: false
  private _chargeStatuses?: number[]; 
  public get chargeStatuses() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('charge_statuses')));
  }
  public set chargeStatuses(value: number[]) {
    this._chargeStatuses = value;
  }
  public resetChargeStatuses() {
    this._chargeStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chargeStatusesInput() {
    return this._chargeStatuses;
  }

  // charge_types - computed: false, optional: true, required: false
  private _chargeTypes?: number[]; 
  public get chargeTypes() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('charge_types')));
  }
  public set chargeTypes(value: number[]) {
    this._chargeTypes = value;
  }
  public resetChargeTypes() {
    this._chargeTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chargeTypesInput() {
    return this._chargeTypes;
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

  // instance_ids - computed: false, optional: true, required: false
  private _instanceIds?: string[]; 
  public get instanceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('instance_ids'));
  }
  public set instanceIds(value: string[]) {
    this._instanceIds = value;
  }
  public resetInstanceIds() {
    this._instanceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdsInput() {
    return this._instanceIds;
  }

  // instance_set - computed: true, optional: false, required: false
  private _instanceSet = new DataTencentcloudRumTawInstanceInstanceSetList(this, "instance_set", false);
  public get instanceSet() {
    return this._instanceSet;
  }

  // instance_statuses - computed: false, optional: true, required: false
  private _instanceStatuses?: number[]; 
  public get instanceStatuses() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('instance_statuses')));
  }
  public set instanceStatuses(value: number[]) {
    this._instanceStatuses = value;
  }
  public resetInstanceStatuses() {
    this._instanceStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceStatusesInput() {
    return this._instanceStatuses;
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
      area_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._areaIds),
      charge_statuses: cdktf.listMapper(cdktf.numberToTerraform, false)(this._chargeStatuses),
      charge_types: cdktf.listMapper(cdktf.numberToTerraform, false)(this._chargeTypes),
      id: cdktf.stringToTerraform(this._id),
      instance_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceIds),
      instance_statuses: cdktf.listMapper(cdktf.numberToTerraform, false)(this._instanceStatuses),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      area_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._areaIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      charge_statuses: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._chargeStatuses),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      charge_types: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._chargeTypes),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      instance_statuses: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._instanceStatuses),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
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
