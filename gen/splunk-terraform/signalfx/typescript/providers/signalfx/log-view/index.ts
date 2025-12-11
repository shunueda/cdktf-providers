// https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/log_view
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogViewConfig extends cdktf.TerraformMetaArguments {
  /**
  * default connection that the dashboard uses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/log_view#default_connection LogView#default_connection}
  */
  readonly defaultConnection?: string;
  /**
  * Description of the chart (Optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/log_view#description LogView#description}
  */
  readonly description?: string;
  /**
  * Seconds since epoch to end the visualization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/log_view#end_time LogView#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/log_view#id LogView#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the chart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/log_view#name LogView#name}
  */
  readonly name: string;
  /**
  * Signalflow program text for the chart. More info at "https://developers.signalfx.com/docs/signalflow-overview"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/log_view#program_text LogView#program_text}
  */
  readonly programText: string;
  /**
  * Seconds since epoch to start the visualization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/log_view#start_time LogView#start_time}
  */
  readonly startTime?: number;
  /**
  * Tags associated with the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/log_view#tags LogView#tags}
  */
  readonly tags?: string[];
  /**
  * Seconds to display in the visualization. This is a rolling range from the current time. Example: 3600 = `-1h`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/log_view#time_range LogView#time_range}
  */
  readonly timeRange?: number;
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/log_view#columns LogView#columns}
  */
  readonly columns?: LogViewColumns[] | cdktf.IResolvable;
  /**
  * sort_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/log_view#sort_options LogView#sort_options}
  */
  readonly sortOptions?: LogViewSortOptions[] | cdktf.IResolvable;
}
export interface LogViewColumns {
  /**
  * Name of the column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/log_view#name LogView#name}
  */
  readonly name: string;
}

export function logViewColumnsToTerraform(struct?: LogViewColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function logViewColumnsToHclTerraform(struct?: LogViewColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogViewColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogViewColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogViewColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class LogViewColumnsList extends cdktf.ComplexList {
  public internalValue? : LogViewColumns[] | cdktf.IResolvable

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
  public get(index: number): LogViewColumnsOutputReference {
    return new LogViewColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogViewSortOptions {
  /**
  * Name of the column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/log_view#descending LogView#descending}
  */
  readonly descending: boolean | cdktf.IResolvable;
  /**
  * Name of the column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/log_view#field LogView#field}
  */
  readonly field: string;
}

export function logViewSortOptionsToTerraform(struct?: LogViewSortOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    descending: cdktf.booleanToTerraform(struct!.descending),
    field: cdktf.stringToTerraform(struct!.field),
  }
}


export function logViewSortOptionsToHclTerraform(struct?: LogViewSortOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    descending: {
      value: cdktf.booleanToHclTerraform(struct!.descending),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogViewSortOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogViewSortOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._descending !== undefined) {
      hasAnyValues = true;
      internalValueResult.descending = this._descending;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogViewSortOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._descending = undefined;
      this._field = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._descending = value.descending;
      this._field = value.field;
    }
  }

  // descending - computed: false, optional: false, required: true
  private _descending?: boolean | cdktf.IResolvable; 
  public get descending() {
    return this.getBooleanAttribute('descending');
  }
  public set descending(value: boolean | cdktf.IResolvable) {
    this._descending = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descendingInput() {
    return this._descending;
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }
}

export class LogViewSortOptionsList extends cdktf.ComplexList {
  public internalValue? : LogViewSortOptions[] | cdktf.IResolvable

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
  public get(index: number): LogViewSortOptionsOutputReference {
    return new LogViewSortOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/log_view signalfx_log_view}
*/
export class LogView extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "signalfx_log_view";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogView resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogView to import
  * @param importFromId The id of the existing LogView that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/log_view#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogView to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "signalfx_log_view", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/log_view signalfx_log_view} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogViewConfig
  */
  public constructor(scope: Construct, id: string, config: LogViewConfig) {
    super(scope, id, {
      terraformResourceType: 'signalfx_log_view',
      terraformGeneratorMetadata: {
        providerName: 'signalfx',
        providerVersion: '9.23.1',
        providerVersionConstraint: '9.23.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultConnection = config.defaultConnection;
    this._description = config.description;
    this._endTime = config.endTime;
    this._id = config.id;
    this._name = config.name;
    this._programText = config.programText;
    this._startTime = config.startTime;
    this._tags = config.tags;
    this._timeRange = config.timeRange;
    this._columns.internalValue = config.columns;
    this._sortOptions.internalValue = config.sortOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_connection - computed: false, optional: true, required: false
  private _defaultConnection?: string; 
  public get defaultConnection() {
    return this.getStringAttribute('default_connection');
  }
  public set defaultConnection(value: string) {
    this._defaultConnection = value;
  }
  public resetDefaultConnection() {
    this._defaultConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultConnectionInput() {
    return this._defaultConnection;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // program_text - computed: false, optional: false, required: true
  private _programText?: string; 
  public get programText() {
    return this.getStringAttribute('program_text');
  }
  public set programText(value: string) {
    this._programText = value;
  }
  // Temporarily expose input value. Use with caution.
  public get programTextInput() {
    return this._programText;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // time_range - computed: false, optional: true, required: false
  private _timeRange?: number; 
  public get timeRange() {
    return this.getNumberAttribute('time_range');
  }
  public set timeRange(value: number) {
    this._timeRange = value;
  }
  public resetTimeRange() {
    this._timeRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeInput() {
    return this._timeRange;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // columns - computed: false, optional: true, required: false
  private _columns = new LogViewColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: LogViewColumns[] | cdktf.IResolvable) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }

  // sort_options - computed: false, optional: true, required: false
  private _sortOptions = new LogViewSortOptionsList(this, "sort_options", false);
  public get sortOptions() {
    return this._sortOptions;
  }
  public putSortOptions(value: LogViewSortOptions[] | cdktf.IResolvable) {
    this._sortOptions.internalValue = value;
  }
  public resetSortOptions() {
    this._sortOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOptionsInput() {
    return this._sortOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_connection: cdktf.stringToTerraform(this._defaultConnection),
      description: cdktf.stringToTerraform(this._description),
      end_time: cdktf.numberToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      program_text: cdktf.stringToTerraform(this._programText),
      start_time: cdktf.numberToTerraform(this._startTime),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      time_range: cdktf.numberToTerraform(this._timeRange),
      columns: cdktf.listMapper(logViewColumnsToTerraform, true)(this._columns.internalValue),
      sort_options: cdktf.listMapper(logViewSortOptionsToTerraform, true)(this._sortOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_connection: {
        value: cdktf.stringToHclTerraform(this._defaultConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_time: {
        value: cdktf.numberToHclTerraform(this._endTime),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      program_text: {
        value: cdktf.stringToHclTerraform(this._programText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time: {
        value: cdktf.numberToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      time_range: {
        value: cdktf.numberToHclTerraform(this._timeRange),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      columns: {
        value: cdktf.listMapperHcl(logViewColumnsToHclTerraform, true)(this._columns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogViewColumnsList",
      },
      sort_options: {
        value: cdktf.listMapperHcl(logViewSortOptionsToHclTerraform, true)(this._sortOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogViewSortOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
