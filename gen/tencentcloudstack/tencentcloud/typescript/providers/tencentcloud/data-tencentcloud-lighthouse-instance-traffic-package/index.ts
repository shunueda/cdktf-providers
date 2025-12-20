// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/lighthouse_instance_traffic_package
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudLighthouseInstanceTrafficPackageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/lighthouse_instance_traffic_package#id DataTencentcloudLighthouseInstanceTrafficPackage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/lighthouse_instance_traffic_package#instance_ids DataTencentcloudLighthouseInstanceTrafficPackage#instance_ids}
  */
  readonly instanceIds?: string[];
  /**
  * Number of returned results. Default value is 20. Maximum value is 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/lighthouse_instance_traffic_package#limit DataTencentcloudLighthouseInstanceTrafficPackage#limit}
  */
  readonly limit?: number;
  /**
  * Offset. Default value is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/lighthouse_instance_traffic_package#offset DataTencentcloudLighthouseInstanceTrafficPackage#offset}
  */
  readonly offset?: number;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/lighthouse_instance_traffic_package#result_output_file DataTencentcloudLighthouseInstanceTrafficPackage#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudLighthouseInstanceTrafficPackageInstanceTrafficPackageSetTrafficPackageSet {
}

export function dataTencentcloudLighthouseInstanceTrafficPackageInstanceTrafficPackageSetTrafficPackageSetToTerraform(struct?: DataTencentcloudLighthouseInstanceTrafficPackageInstanceTrafficPackageSetTrafficPackageSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudLighthouseInstanceTrafficPackageInstanceTrafficPackageSetTrafficPackageSetToHclTerraform(struct?: DataTencentcloudLighthouseInstanceTrafficPackageInstanceTrafficPackageSetTrafficPackageSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudLighthouseInstanceTrafficPackageInstanceTrafficPackageSetTrafficPackageSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudLighthouseInstanceTrafficPackageInstanceTrafficPackageSetTrafficPackageSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudLighthouseInstanceTrafficPackageInstanceTrafficPackageSetTrafficPackageSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deadline - computed: true, optional: false, required: false
  public get deadline() {
    return this.getStringAttribute('deadline');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // traffic_overflow - computed: true, optional: false, required: false
  public get trafficOverflow() {
    return this.getNumberAttribute('traffic_overflow');
  }

  // traffic_package_id - computed: true, optional: false, required: false
  public get trafficPackageId() {
    return this.getStringAttribute('traffic_package_id');
  }

  // traffic_package_remaining - computed: true, optional: false, required: false
  public get trafficPackageRemaining() {
    return this.getNumberAttribute('traffic_package_remaining');
  }

  // traffic_package_total - computed: true, optional: false, required: false
  public get trafficPackageTotal() {
    return this.getNumberAttribute('traffic_package_total');
  }

  // traffic_used - computed: true, optional: false, required: false
  public get trafficUsed() {
    return this.getNumberAttribute('traffic_used');
  }
}

export class DataTencentcloudLighthouseInstanceTrafficPackageInstanceTrafficPackageSetTrafficPackageSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudLighthouseInstanceTrafficPackageInstanceTrafficPackageSetTrafficPackageSetOutputReference {
    return new DataTencentcloudLighthouseInstanceTrafficPackageInstanceTrafficPackageSetTrafficPackageSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudLighthouseInstanceTrafficPackageInstanceTrafficPackageSet {
}

export function dataTencentcloudLighthouseInstanceTrafficPackageInstanceTrafficPackageSetToTerraform(struct?: DataTencentcloudLighthouseInstanceTrafficPackageInstanceTrafficPackageSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudLighthouseInstanceTrafficPackageInstanceTrafficPackageSetToHclTerraform(struct?: DataTencentcloudLighthouseInstanceTrafficPackageInstanceTrafficPackageSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudLighthouseInstanceTrafficPackageInstanceTrafficPackageSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudLighthouseInstanceTrafficPackageInstanceTrafficPackageSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudLighthouseInstanceTrafficPackageInstanceTrafficPackageSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // traffic_package_set - computed: true, optional: false, required: false
  private _trafficPackageSet = new DataTencentcloudLighthouseInstanceTrafficPackageInstanceTrafficPackageSetTrafficPackageSetList(this, "traffic_package_set", false);
  public get trafficPackageSet() {
    return this._trafficPackageSet;
  }
}

export class DataTencentcloudLighthouseInstanceTrafficPackageInstanceTrafficPackageSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudLighthouseInstanceTrafficPackageInstanceTrafficPackageSetOutputReference {
    return new DataTencentcloudLighthouseInstanceTrafficPackageInstanceTrafficPackageSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/lighthouse_instance_traffic_package tencentcloud_lighthouse_instance_traffic_package}
*/
export class DataTencentcloudLighthouseInstanceTrafficPackage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_lighthouse_instance_traffic_package";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudLighthouseInstanceTrafficPackage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudLighthouseInstanceTrafficPackage to import
  * @param importFromId The id of the existing DataTencentcloudLighthouseInstanceTrafficPackage that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/lighthouse_instance_traffic_package#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudLighthouseInstanceTrafficPackage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_lighthouse_instance_traffic_package", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/lighthouse_instance_traffic_package tencentcloud_lighthouse_instance_traffic_package} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudLighthouseInstanceTrafficPackageConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudLighthouseInstanceTrafficPackageConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_lighthouse_instance_traffic_package',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
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
    this._instanceIds = config.instanceIds;
    this._limit = config.limit;
    this._offset = config.offset;
    this._resultOutputFile = config.resultOutputFile;
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

  // instance_traffic_package_set - computed: true, optional: false, required: false
  private _instanceTrafficPackageSet = new DataTencentcloudLighthouseInstanceTrafficPackageInstanceTrafficPackageSetList(this, "instance_traffic_package_set", false);
  public get instanceTrafficPackageSet() {
    return this._instanceTrafficPackageSet;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
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
      id: cdktf.stringToTerraform(this._id),
      instance_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceIds),
      limit: cdktf.numberToTerraform(this._limit),
      offset: cdktf.numberToTerraform(this._offset),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
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
      instance_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
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
