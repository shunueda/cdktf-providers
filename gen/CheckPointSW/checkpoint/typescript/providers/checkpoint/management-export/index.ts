// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_export
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementExportConfig extends cdktf.TerraformMetaArguments {
  /**
  * N/A
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_export#exclude_classes ManagementExport#exclude_classes}
  */
  readonly excludeClasses?: string[];
  /**
  * N/A
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_export#exclude_topics ManagementExport#exclude_topics}
  */
  readonly excludeTopics?: string[];
  /**
  * N/A
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_export#export_files_by_class ManagementExport#export_files_by_class}
  */
  readonly exportFilesByClass?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_export#id ManagementExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * N/A
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_export#include_classes ManagementExport#include_classes}
  */
  readonly includeClasses?: string[];
  /**
  * N/A
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_export#include_topics ManagementExport#include_topics}
  */
  readonly includeTopics?: string[];
  /**
  * N/A
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_export#query_limit ManagementExport#query_limit}
  */
  readonly queryLimit?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_export checkpoint_management_export}
*/
export class ManagementExport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_export";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementExport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementExport to import
  * @param importFromId The id of the existing ManagementExport that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_export#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementExport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_export", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_export checkpoint_management_export} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementExportConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ManagementExportConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_export',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._excludeClasses = config.excludeClasses;
    this._excludeTopics = config.excludeTopics;
    this._exportFilesByClass = config.exportFilesByClass;
    this._id = config.id;
    this._includeClasses = config.includeClasses;
    this._includeTopics = config.includeTopics;
    this._queryLimit = config.queryLimit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // exclude_classes - computed: false, optional: true, required: false
  private _excludeClasses?: string[]; 
  public get excludeClasses() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_classes'));
  }
  public set excludeClasses(value: string[]) {
    this._excludeClasses = value;
  }
  public resetExcludeClasses() {
    this._excludeClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeClassesInput() {
    return this._excludeClasses;
  }

  // exclude_topics - computed: false, optional: true, required: false
  private _excludeTopics?: string[]; 
  public get excludeTopics() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_topics'));
  }
  public set excludeTopics(value: string[]) {
    this._excludeTopics = value;
  }
  public resetExcludeTopics() {
    this._excludeTopics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeTopicsInput() {
    return this._excludeTopics;
  }

  // export_files_by_class - computed: false, optional: true, required: false
  private _exportFilesByClass?: boolean | cdktf.IResolvable; 
  public get exportFilesByClass() {
    return this.getBooleanAttribute('export_files_by_class');
  }
  public set exportFilesByClass(value: boolean | cdktf.IResolvable) {
    this._exportFilesByClass = value;
  }
  public resetExportFilesByClass() {
    this._exportFilesByClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportFilesByClassInput() {
    return this._exportFilesByClass;
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

  // include_classes - computed: false, optional: true, required: false
  private _includeClasses?: string[]; 
  public get includeClasses() {
    return cdktf.Fn.tolist(this.getListAttribute('include_classes'));
  }
  public set includeClasses(value: string[]) {
    this._includeClasses = value;
  }
  public resetIncludeClasses() {
    this._includeClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeClassesInput() {
    return this._includeClasses;
  }

  // include_topics - computed: false, optional: true, required: false
  private _includeTopics?: string[]; 
  public get includeTopics() {
    return cdktf.Fn.tolist(this.getListAttribute('include_topics'));
  }
  public set includeTopics(value: string[]) {
    this._includeTopics = value;
  }
  public resetIncludeTopics() {
    this._includeTopics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTopicsInput() {
    return this._includeTopics;
  }

  // query_limit - computed: false, optional: true, required: false
  private _queryLimit?: number; 
  public get queryLimit() {
    return this.getNumberAttribute('query_limit');
  }
  public set queryLimit(value: number) {
    this._queryLimit = value;
  }
  public resetQueryLimit() {
    this._queryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryLimitInput() {
    return this._queryLimit;
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      exclude_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludeClasses),
      exclude_topics: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludeTopics),
      export_files_by_class: cdktf.booleanToTerraform(this._exportFilesByClass),
      id: cdktf.stringToTerraform(this._id),
      include_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includeClasses),
      include_topics: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includeTopics),
      query_limit: cdktf.numberToTerraform(this._queryLimit),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      exclude_classes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludeClasses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      exclude_topics: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludeTopics),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      export_files_by_class: {
        value: cdktf.booleanToHclTerraform(this._exportFilesByClass),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_classes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includeClasses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      include_topics: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includeTopics),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      query_limit: {
        value: cdktf.numberToHclTerraform(this._queryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
