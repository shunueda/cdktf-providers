// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/rum_taw_area
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudRumTawAreaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Area id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/rum_taw_area#area_ids DataTencentcloudRumTawArea#area_ids}
  */
  readonly areaIds?: number[];
  /**
  * Area key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/rum_taw_area#area_keys DataTencentcloudRumTawArea#area_keys}
  */
  readonly areaKeys?: string[];
  /**
  * Area status `1`:valid; `2`:invalid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/rum_taw_area#area_statuses DataTencentcloudRumTawArea#area_statuses}
  */
  readonly areaStatuses?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/rum_taw_area#id DataTencentcloudRumTawArea#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/rum_taw_area#result_output_file DataTencentcloudRumTawArea#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudRumTawAreaAreaSet {
}

export function dataTencentcloudRumTawAreaAreaSetToTerraform(struct?: DataTencentcloudRumTawAreaAreaSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudRumTawAreaAreaSetToHclTerraform(struct?: DataTencentcloudRumTawAreaAreaSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudRumTawAreaAreaSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudRumTawAreaAreaSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudRumTawAreaAreaSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // area_abbr - computed: true, optional: false, required: false
  public get areaAbbr() {
    return this.getStringAttribute('area_abbr');
  }

  // area_id - computed: true, optional: false, required: false
  public get areaId() {
    return this.getNumberAttribute('area_id');
  }

  // area_key - computed: true, optional: false, required: false
  public get areaKey() {
    return this.getStringAttribute('area_key');
  }

  // area_name - computed: true, optional: false, required: false
  public get areaName() {
    return this.getStringAttribute('area_name');
  }

  // area_region_code - computed: true, optional: false, required: false
  public get areaRegionCode() {
    return this.getStringAttribute('area_region_code');
  }

  // area_region_id - computed: true, optional: false, required: false
  public get areaRegionId() {
    return this.getStringAttribute('area_region_id');
  }

  // area_status - computed: true, optional: false, required: false
  public get areaStatus() {
    return this.getNumberAttribute('area_status');
  }
}

export class DataTencentcloudRumTawAreaAreaSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudRumTawAreaAreaSetOutputReference {
    return new DataTencentcloudRumTawAreaAreaSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/rum_taw_area tencentcloud_rum_taw_area}
*/
export class DataTencentcloudRumTawArea extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_rum_taw_area";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudRumTawArea resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudRumTawArea to import
  * @param importFromId The id of the existing DataTencentcloudRumTawArea that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/rum_taw_area#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudRumTawArea to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_rum_taw_area", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/rum_taw_area tencentcloud_rum_taw_area} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudRumTawAreaConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudRumTawAreaConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_rum_taw_area',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35',
        providerVersionConstraint: '1.82.35'
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
    this._areaKeys = config.areaKeys;
    this._areaStatuses = config.areaStatuses;
    this._id = config.id;
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

  // area_keys - computed: false, optional: true, required: false
  private _areaKeys?: string[]; 
  public get areaKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('area_keys'));
  }
  public set areaKeys(value: string[]) {
    this._areaKeys = value;
  }
  public resetAreaKeys() {
    this._areaKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaKeysInput() {
    return this._areaKeys;
  }

  // area_set - computed: true, optional: false, required: false
  private _areaSet = new DataTencentcloudRumTawAreaAreaSetList(this, "area_set", false);
  public get areaSet() {
    return this._areaSet;
  }

  // area_statuses - computed: false, optional: true, required: false
  private _areaStatuses?: number[]; 
  public get areaStatuses() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('area_statuses')));
  }
  public set areaStatuses(value: number[]) {
    this._areaStatuses = value;
  }
  public resetAreaStatuses() {
    this._areaStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaStatusesInput() {
    return this._areaStatuses;
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
      area_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._areaKeys),
      area_statuses: cdktf.listMapper(cdktf.numberToTerraform, false)(this._areaStatuses),
      id: cdktf.stringToTerraform(this._id),
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
      area_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._areaKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      area_statuses: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._areaStatuses),
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
