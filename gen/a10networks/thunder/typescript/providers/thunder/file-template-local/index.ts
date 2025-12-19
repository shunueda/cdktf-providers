// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_template_local
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FileTemplateLocalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify ACT package type (i.e. slug/destination name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_template_local#act_type FileTemplateLocal#act_type}
  */
  readonly actType?: string;
  /**
  * 'create': create; 'import': import; 'export': export; 'copy': copy; 'rename': rename; 'check': check; 'replace': replace; 'delete': delete;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_template_local#action FileTemplateLocal#action}
  */
  readonly action?: string;
  /**
  * destination file name for copy and rename action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_template_local#dst_file FileTemplateLocal#dst_file}
  */
  readonly dstFile?: string;
  /**
  * aflex local file name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_template_local#file FileTemplateLocal#file}
  */
  readonly file?: string;
  /**
  * full path of the uploaded file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_template_local#file_handle FileTemplateLocal#file_handle}
  */
  readonly fileHandle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_template_local#id FileTemplateLocal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_template_local#uuid FileTemplateLocal#uuid}
  */
  readonly uuid?: string;
  /**
  * app block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_template_local#app FileTemplateLocal#app}
  */
  readonly app?: FileTemplateLocalApp;
}
export interface FileTemplateLocalApp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_template_local#act_name FileTemplateLocal#act_name}
  */
  readonly actName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_template_local#action FileTemplateLocal#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_template_local#version FileTemplateLocal#version}
  */
  readonly version?: string;
}

export function fileTemplateLocalAppToTerraform(struct?: FileTemplateLocalAppOutputReference | FileTemplateLocalApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    act_name: cdktf.stringToTerraform(struct!.actName),
    action: cdktf.stringToTerraform(struct!.action),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function fileTemplateLocalAppToHclTerraform(struct?: FileTemplateLocalAppOutputReference | FileTemplateLocalApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    act_name: {
      value: cdktf.stringToHclTerraform(struct!.actName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FileTemplateLocalAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FileTemplateLocalApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actName !== undefined) {
      hasAnyValues = true;
      internalValueResult.actName = this._actName;
    }
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FileTemplateLocalApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actName = undefined;
      this._action = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actName = value.actName;
      this._action = value.action;
      this._version = value.version;
    }
  }

  // act_name - computed: false, optional: true, required: false
  private _actName?: string; 
  public get actName() {
    return this.getStringAttribute('act_name');
  }
  public set actName(value: string) {
    this._actName = value;
  }
  public resetActName() {
    this._actName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actNameInput() {
    return this._actName;
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_template_local thunder_file_template_local}
*/
export class FileTemplateLocal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_file_template_local";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FileTemplateLocal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FileTemplateLocal to import
  * @param importFromId The id of the existing FileTemplateLocal that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_template_local#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FileTemplateLocal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_file_template_local", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_template_local thunder_file_template_local} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FileTemplateLocalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FileTemplateLocalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_file_template_local',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actType = config.actType;
    this._action = config.action;
    this._dstFile = config.dstFile;
    this._file = config.file;
    this._fileHandle = config.fileHandle;
    this._id = config.id;
    this._uuid = config.uuid;
    this._app.internalValue = config.app;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // act_type - computed: false, optional: true, required: false
  private _actType?: string; 
  public get actType() {
    return this.getStringAttribute('act_type');
  }
  public set actType(value: string) {
    this._actType = value;
  }
  public resetActType() {
    this._actType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actTypeInput() {
    return this._actType;
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // dst_file - computed: false, optional: true, required: false
  private _dstFile?: string; 
  public get dstFile() {
    return this.getStringAttribute('dst_file');
  }
  public set dstFile(value: string) {
    this._dstFile = value;
  }
  public resetDstFile() {
    this._dstFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstFileInput() {
    return this._dstFile;
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // file_handle - computed: false, optional: true, required: false
  private _fileHandle?: string; 
  public get fileHandle() {
    return this.getStringAttribute('file_handle');
  }
  public set fileHandle(value: string) {
    this._fileHandle = value;
  }
  public resetFileHandle() {
    this._fileHandle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileHandleInput() {
    return this._fileHandle;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // app - computed: false, optional: true, required: false
  private _app = new FileTemplateLocalAppOutputReference(this, "app");
  public get app() {
    return this._app;
  }
  public putApp(value: FileTemplateLocalApp) {
    this._app.internalValue = value;
  }
  public resetApp() {
    this._app.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appInput() {
    return this._app.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      act_type: cdktf.stringToTerraform(this._actType),
      action: cdktf.stringToTerraform(this._action),
      dst_file: cdktf.stringToTerraform(this._dstFile),
      file: cdktf.stringToTerraform(this._file),
      file_handle: cdktf.stringToTerraform(this._fileHandle),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      app: fileTemplateLocalAppToTerraform(this._app.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      act_type: {
        value: cdktf.stringToHclTerraform(this._actType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_file: {
        value: cdktf.stringToHclTerraform(this._dstFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file: {
        value: cdktf.stringToHclTerraform(this._file),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_handle: {
        value: cdktf.stringToHclTerraform(this._fileHandle),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app: {
        value: fileTemplateLocalAppToHclTerraform(this._app.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FileTemplateLocalAppList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
