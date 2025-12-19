// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/ehpc_job_templates
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudEhpcJobTemplatesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/ehpc_job_templates#id DataAlicloudEhpcJobTemplates#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/ehpc_job_templates#ids DataAlicloudEhpcJobTemplates#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/ehpc_job_templates#output_file DataAlicloudEhpcJobTemplates#output_file}
  */
  readonly outputFile?: string;
}
export interface DataAlicloudEhpcJobTemplatesTemplates {
}

export function dataAlicloudEhpcJobTemplatesTemplatesToTerraform(struct?: DataAlicloudEhpcJobTemplatesTemplates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudEhpcJobTemplatesTemplatesToHclTerraform(struct?: DataAlicloudEhpcJobTemplatesTemplates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudEhpcJobTemplatesTemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudEhpcJobTemplatesTemplates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudEhpcJobTemplatesTemplates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // array_request - computed: true, optional: false, required: false
  public get arrayRequest() {
    return this.getStringAttribute('array_request');
  }

  // clock_time - computed: true, optional: false, required: false
  public get clockTime() {
    return this.getStringAttribute('clock_time');
  }

  // command_line - computed: true, optional: false, required: false
  public get commandLine() {
    return this.getStringAttribute('command_line');
  }

  // gpu - computed: true, optional: false, required: false
  public get gpu() {
    return this.getNumberAttribute('gpu');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job_template_id - computed: true, optional: false, required: false
  public get jobTemplateId() {
    return this.getStringAttribute('job_template_id');
  }

  // job_template_name - computed: true, optional: false, required: false
  public get jobTemplateName() {
    return this.getStringAttribute('job_template_name');
  }

  // mem - computed: true, optional: false, required: false
  public get mem() {
    return this.getStringAttribute('mem');
  }

  // node - computed: true, optional: false, required: false
  public get nodeAttribute() {
    return this.getNumberAttribute('node');
  }

  // package_path - computed: true, optional: false, required: false
  public get packagePath() {
    return this.getStringAttribute('package_path');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // queue - computed: true, optional: false, required: false
  public get queue() {
    return this.getStringAttribute('queue');
  }

  // re_runable - computed: true, optional: false, required: false
  public get reRunable() {
    return this.getBooleanAttribute('re_runable');
  }

  // runas_user - computed: true, optional: false, required: false
  public get runasUser() {
    return this.getStringAttribute('runas_user');
  }

  // stderr_redirect_path - computed: true, optional: false, required: false
  public get stderrRedirectPath() {
    return this.getStringAttribute('stderr_redirect_path');
  }

  // stdout_redirect_path - computed: true, optional: false, required: false
  public get stdoutRedirectPath() {
    return this.getStringAttribute('stdout_redirect_path');
  }

  // task - computed: true, optional: false, required: false
  public get task() {
    return this.getNumberAttribute('task');
  }

  // thread - computed: true, optional: false, required: false
  public get thread() {
    return this.getNumberAttribute('thread');
  }

  // variables - computed: true, optional: false, required: false
  public get variables() {
    return this.getStringAttribute('variables');
  }
}

export class DataAlicloudEhpcJobTemplatesTemplatesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudEhpcJobTemplatesTemplatesOutputReference {
    return new DataAlicloudEhpcJobTemplatesTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/ehpc_job_templates alicloud_ehpc_job_templates}
*/
export class DataAlicloudEhpcJobTemplates extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ehpc_job_templates";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudEhpcJobTemplates resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudEhpcJobTemplates to import
  * @param importFromId The id of the existing DataAlicloudEhpcJobTemplates that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/ehpc_job_templates#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudEhpcJobTemplates to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ehpc_job_templates", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/ehpc_job_templates alicloud_ehpc_job_templates} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudEhpcJobTemplatesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudEhpcJobTemplatesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ehpc_job_templates',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
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

  // templates - computed: true, optional: false, required: false
  private _templates = new DataAlicloudEhpcJobTemplatesTemplatesList(this, "templates", false);
  public get templates() {
    return this._templates;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      output_file: cdktf.stringToTerraform(this._outputFile),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
