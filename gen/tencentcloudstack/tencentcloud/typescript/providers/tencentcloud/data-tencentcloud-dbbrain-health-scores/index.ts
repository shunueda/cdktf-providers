// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dbbrain_health_scores
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudDbbrainHealthScoresConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dbbrain_health_scores#id DataTencentcloudDbbrainHealthScores#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the instance whose health score needs to be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dbbrain_health_scores#instance_id DataTencentcloudDbbrainHealthScores#instance_id}
  */
  readonly instanceId: string;
  /**
  * Service product type, supported values include: mysql - cloud database MySQL, cynosdb - cloud database TDSQL-C for MySQL, the default is mysql.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dbbrain_health_scores#product DataTencentcloudDbbrainHealthScores#product}
  */
  readonly product: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dbbrain_health_scores#result_output_file DataTencentcloudDbbrainHealthScores#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * The time to obtain the health score, the time format is as follows: 2019-09-10 12:13:14.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dbbrain_health_scores#time DataTencentcloudDbbrainHealthScores#time}
  */
  readonly time: string;
}
export interface DataTencentcloudDbbrainHealthScoresDataIssueTypesEvents {
}

export function dataTencentcloudDbbrainHealthScoresDataIssueTypesEventsToTerraform(struct?: DataTencentcloudDbbrainHealthScoresDataIssueTypesEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDbbrainHealthScoresDataIssueTypesEventsToHclTerraform(struct?: DataTencentcloudDbbrainHealthScoresDataIssueTypesEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDbbrainHealthScoresDataIssueTypesEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDbbrainHealthScoresDataIssueTypesEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDbbrainHealthScoresDataIssueTypesEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // diag_type - computed: true, optional: false, required: false
  public get diagType() {
    return this.getStringAttribute('diag_type');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // event_id - computed: true, optional: false, required: false
  public get eventId() {
    return this.getNumberAttribute('event_id');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getStringAttribute('metric');
  }

  // outline - computed: true, optional: false, required: false
  public get outline() {
    return this.getStringAttribute('outline');
  }

  // score_lost - computed: true, optional: false, required: false
  public get scoreLost() {
    return this.getNumberAttribute('score_lost');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getNumberAttribute('severity');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}

export class DataTencentcloudDbbrainHealthScoresDataIssueTypesEventsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDbbrainHealthScoresDataIssueTypesEventsOutputReference {
    return new DataTencentcloudDbbrainHealthScoresDataIssueTypesEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDbbrainHealthScoresDataIssueTypes {
}

export function dataTencentcloudDbbrainHealthScoresDataIssueTypesToTerraform(struct?: DataTencentcloudDbbrainHealthScoresDataIssueTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDbbrainHealthScoresDataIssueTypesToHclTerraform(struct?: DataTencentcloudDbbrainHealthScoresDataIssueTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDbbrainHealthScoresDataIssueTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDbbrainHealthScoresDataIssueTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDbbrainHealthScoresDataIssueTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // events - computed: true, optional: false, required: false
  private _events = new DataTencentcloudDbbrainHealthScoresDataIssueTypesEventsList(this, "events", false);
  public get events() {
    return this._events;
  }

  // issue_type - computed: true, optional: false, required: false
  public get issueType() {
    return this.getStringAttribute('issue_type');
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }
}

export class DataTencentcloudDbbrainHealthScoresDataIssueTypesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDbbrainHealthScoresDataIssueTypesOutputReference {
    return new DataTencentcloudDbbrainHealthScoresDataIssueTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDbbrainHealthScoresData {
}

export function dataTencentcloudDbbrainHealthScoresDataToTerraform(struct?: DataTencentcloudDbbrainHealthScoresData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDbbrainHealthScoresDataToHclTerraform(struct?: DataTencentcloudDbbrainHealthScoresData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDbbrainHealthScoresDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDbbrainHealthScoresData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDbbrainHealthScoresData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // events_total_count - computed: true, optional: false, required: false
  public get eventsTotalCount() {
    return this.getNumberAttribute('events_total_count');
  }

  // health_level - computed: true, optional: false, required: false
  public get healthLevel() {
    return this.getStringAttribute('health_level');
  }

  // health_score - computed: true, optional: false, required: false
  public get healthScore() {
    return this.getNumberAttribute('health_score');
  }

  // issue_types - computed: true, optional: false, required: false
  private _issueTypes = new DataTencentcloudDbbrainHealthScoresDataIssueTypesList(this, "issue_types", false);
  public get issueTypes() {
    return this._issueTypes;
  }
}

export class DataTencentcloudDbbrainHealthScoresDataList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDbbrainHealthScoresDataOutputReference {
    return new DataTencentcloudDbbrainHealthScoresDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dbbrain_health_scores tencentcloud_dbbrain_health_scores}
*/
export class DataTencentcloudDbbrainHealthScores extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dbbrain_health_scores";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudDbbrainHealthScores resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudDbbrainHealthScores to import
  * @param importFromId The id of the existing DataTencentcloudDbbrainHealthScores that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dbbrain_health_scores#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudDbbrainHealthScores to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dbbrain_health_scores", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dbbrain_health_scores tencentcloud_dbbrain_health_scores} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudDbbrainHealthScoresConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudDbbrainHealthScoresConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dbbrain_health_scores',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
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
    this._instanceId = config.instanceId;
    this._product = config.product;
    this._resultOutputFile = config.resultOutputFile;
    this._time = config.time;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataTencentcloudDbbrainHealthScoresDataList(this, "data", false);
  public get data() {
    return this._data;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // product - computed: false, optional: false, required: true
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
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

  // time - computed: false, optional: false, required: true
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      product: cdktf.stringToTerraform(this._product),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      time: cdktf.stringToTerraform(this._time),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product: {
        value: cdktf.stringToHclTerraform(this._product),
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
      time: {
        value: cdktf.stringToHclTerraform(this._time),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
