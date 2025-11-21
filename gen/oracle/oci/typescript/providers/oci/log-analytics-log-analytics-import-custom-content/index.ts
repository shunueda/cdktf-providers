// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_log_analytics_import_custom_content
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogAnalyticsLogAnalyticsImportCustomContentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_log_analytics_import_custom_content#expect LogAnalyticsLogAnalyticsImportCustomContent#expect}
  */
  readonly expect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_log_analytics_import_custom_content#id LogAnalyticsLogAnalyticsImportCustomContent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_log_analytics_import_custom_content#import_custom_content_file LogAnalyticsLogAnalyticsImportCustomContent#import_custom_content_file}
  */
  readonly importCustomContentFile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_log_analytics_import_custom_content#is_overwrite LogAnalyticsLogAnalyticsImportCustomContent#is_overwrite}
  */
  readonly isOverwrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_log_analytics_import_custom_content#namespace LogAnalyticsLogAnalyticsImportCustomContent#namespace}
  */
  readonly namespace: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_log_analytics_import_custom_content#timeouts LogAnalyticsLogAnalyticsImportCustomContent#timeouts}
  */
  readonly timeouts?: LogAnalyticsLogAnalyticsImportCustomContentTimeouts;
}
export interface LogAnalyticsLogAnalyticsImportCustomContentChangeListStruct {
}

export function logAnalyticsLogAnalyticsImportCustomContentChangeListStructToTerraform(struct?: LogAnalyticsLogAnalyticsImportCustomContentChangeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logAnalyticsLogAnalyticsImportCustomContentChangeListStructToHclTerraform(struct?: LogAnalyticsLogAnalyticsImportCustomContentChangeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogAnalyticsLogAnalyticsImportCustomContentChangeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAnalyticsLogAnalyticsImportCustomContentChangeListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conflict_field_display_names - computed: true, optional: false, required: false
  public get conflictFieldDisplayNames() {
    return this.getListAttribute('conflict_field_display_names');
  }

  // conflict_parser_names - computed: true, optional: false, required: false
  public get conflictParserNames() {
    return this.getListAttribute('conflict_parser_names');
  }

  // conflict_source_names - computed: true, optional: false, required: false
  public get conflictSourceNames() {
    return this.getListAttribute('conflict_source_names');
  }

  // created_field_display_names - computed: true, optional: false, required: false
  public get createdFieldDisplayNames() {
    return this.getListAttribute('created_field_display_names');
  }

  // created_parser_names - computed: true, optional: false, required: false
  public get createdParserNames() {
    return this.getListAttribute('created_parser_names');
  }

  // created_source_names - computed: true, optional: false, required: false
  public get createdSourceNames() {
    return this.getListAttribute('created_source_names');
  }

  // updated_field_display_names - computed: true, optional: false, required: false
  public get updatedFieldDisplayNames() {
    return this.getListAttribute('updated_field_display_names');
  }

  // updated_parser_names - computed: true, optional: false, required: false
  public get updatedParserNames() {
    return this.getListAttribute('updated_parser_names');
  }

  // updated_source_names - computed: true, optional: false, required: false
  public get updatedSourceNames() {
    return this.getListAttribute('updated_source_names');
  }
}

export class LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList extends cdktf.ComplexList {

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
  public get(index: number): LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference {
    return new LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogAnalyticsLogAnalyticsImportCustomContentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_log_analytics_import_custom_content#create LogAnalyticsLogAnalyticsImportCustomContent#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_log_analytics_import_custom_content#delete LogAnalyticsLogAnalyticsImportCustomContent#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_log_analytics_import_custom_content#update LogAnalyticsLogAnalyticsImportCustomContent#update}
  */
  readonly update?: string;
}

export function logAnalyticsLogAnalyticsImportCustomContentTimeoutsToTerraform(struct?: LogAnalyticsLogAnalyticsImportCustomContentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function logAnalyticsLogAnalyticsImportCustomContentTimeoutsToHclTerraform(struct?: LogAnalyticsLogAnalyticsImportCustomContentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogAnalyticsLogAnalyticsImportCustomContentTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAnalyticsLogAnalyticsImportCustomContentTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_log_analytics_import_custom_content oci_log_analytics_log_analytics_import_custom_content}
*/
export class LogAnalyticsLogAnalyticsImportCustomContent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_log_analytics_log_analytics_import_custom_content";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogAnalyticsLogAnalyticsImportCustomContent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogAnalyticsLogAnalyticsImportCustomContent to import
  * @param importFromId The id of the existing LogAnalyticsLogAnalyticsImportCustomContent that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_log_analytics_import_custom_content#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogAnalyticsLogAnalyticsImportCustomContent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_log_analytics_log_analytics_import_custom_content", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_log_analytics_import_custom_content oci_log_analytics_log_analytics_import_custom_content} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogAnalyticsLogAnalyticsImportCustomContentConfig
  */
  public constructor(scope: Construct, id: string, config: LogAnalyticsLogAnalyticsImportCustomContentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_log_analytics_log_analytics_import_custom_content',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._expect = config.expect;
    this._id = config.id;
    this._importCustomContentFile = config.importCustomContentFile;
    this._isOverwrite = config.isOverwrite;
    this._namespace = config.namespace;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // change_list - computed: true, optional: false, required: false
  private _changeList = new LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList(this, "change_list", false);
  public get changeList() {
    return this._changeList;
  }

  // content_name - computed: true, optional: false, required: false
  public get contentName() {
    return this.getStringAttribute('content_name');
  }

  // expect - computed: true, optional: true, required: false
  private _expect?: string; 
  public get expect() {
    return this.getStringAttribute('expect');
  }
  public set expect(value: string) {
    this._expect = value;
  }
  public resetExpect() {
    this._expect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectInput() {
    return this._expect;
  }

  // field_names - computed: true, optional: false, required: false
  public get fieldNames() {
    return this.getListAttribute('field_names');
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

  // import_custom_content_file - computed: false, optional: false, required: true
  private _importCustomContentFile?: string; 
  public get importCustomContentFile() {
    return this.getStringAttribute('import_custom_content_file');
  }
  public set importCustomContentFile(value: string) {
    this._importCustomContentFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get importCustomContentFileInput() {
    return this._importCustomContentFile;
  }

  // is_overwrite - computed: true, optional: true, required: false
  private _isOverwrite?: boolean | cdktf.IResolvable; 
  public get isOverwrite() {
    return this.getBooleanAttribute('is_overwrite');
  }
  public set isOverwrite(value: boolean | cdktf.IResolvable) {
    this._isOverwrite = value;
  }
  public resetIsOverwrite() {
    this._isOverwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOverwriteInput() {
    return this._isOverwrite;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // parser_names - computed: true, optional: false, required: false
  public get parserNames() {
    return this.getListAttribute('parser_names');
  }

  // source_names - computed: true, optional: false, required: false
  public get sourceNames() {
    return this.getListAttribute('source_names');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LogAnalyticsLogAnalyticsImportCustomContentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      expect: cdktf.stringToTerraform(this._expect),
      id: cdktf.stringToTerraform(this._id),
      import_custom_content_file: cdktf.stringToTerraform(this._importCustomContentFile),
      is_overwrite: cdktf.booleanToTerraform(this._isOverwrite),
      namespace: cdktf.stringToTerraform(this._namespace),
      timeouts: logAnalyticsLogAnalyticsImportCustomContentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      expect: {
        value: cdktf.stringToHclTerraform(this._expect),
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
      import_custom_content_file: {
        value: cdktf.stringToHclTerraform(this._importCustomContentFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_overwrite: {
        value: cdktf.booleanToHclTerraform(this._isOverwrite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: logAnalyticsLogAnalyticsImportCustomContentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LogAnalyticsLogAnalyticsImportCustomContentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
