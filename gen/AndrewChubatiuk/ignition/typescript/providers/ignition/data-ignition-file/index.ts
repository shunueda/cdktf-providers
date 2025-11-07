// https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIgnitionFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/file#gid DataIgnitionFile#gid}
  */
  readonly gid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/file#id DataIgnitionFile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/file#mode DataIgnitionFile#mode}
  */
  readonly mode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/file#overwrite DataIgnitionFile#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/file#path DataIgnitionFile#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/file#uid DataIgnitionFile#uid}
  */
  readonly uid?: number;
  /**
  * content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/file#content DataIgnitionFile#content}
  */
  readonly content?: DataIgnitionFileContent;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/file#source DataIgnitionFile#source}
  */
  readonly source?: DataIgnitionFileSource;
}
export interface DataIgnitionFileContent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/file#content DataIgnitionFile#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/file#mime DataIgnitionFile#mime}
  */
  readonly mime?: string;
}

export function dataIgnitionFileContentToTerraform(struct?: DataIgnitionFileContentOutputReference | DataIgnitionFileContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    mime: cdktf.stringToTerraform(struct!.mime),
  }
}


export function dataIgnitionFileContentToHclTerraform(struct?: DataIgnitionFileContentOutputReference | DataIgnitionFileContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mime: {
      value: cdktf.stringToHclTerraform(struct!.mime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIgnitionFileContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIgnitionFileContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._mime !== undefined) {
      hasAnyValues = true;
      internalValueResult.mime = this._mime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIgnitionFileContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._mime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._mime = value.mime;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // mime - computed: false, optional: true, required: false
  private _mime?: string; 
  public get mime() {
    return this.getStringAttribute('mime');
  }
  public set mime(value: string) {
    this._mime = value;
  }
  public resetMime() {
    this._mime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mimeInput() {
    return this._mime;
  }
}
export interface DataIgnitionFileSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/file#compression DataIgnitionFile#compression}
  */
  readonly compression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/file#source DataIgnitionFile#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/file#verification DataIgnitionFile#verification}
  */
  readonly verification?: string;
}

export function dataIgnitionFileSourceToTerraform(struct?: DataIgnitionFileSourceOutputReference | DataIgnitionFileSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression: cdktf.stringToTerraform(struct!.compression),
    source: cdktf.stringToTerraform(struct!.source),
    verification: cdktf.stringToTerraform(struct!.verification),
  }
}


export function dataIgnitionFileSourceToHclTerraform(struct?: DataIgnitionFileSourceOutputReference | DataIgnitionFileSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression: {
      value: cdktf.stringToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verification: {
      value: cdktf.stringToHclTerraform(struct!.verification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIgnitionFileSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIgnitionFileSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._verification !== undefined) {
      hasAnyValues = true;
      internalValueResult.verification = this._verification;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIgnitionFileSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compression = undefined;
      this._source = undefined;
      this._verification = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compression = value.compression;
      this._source = value.source;
      this._verification = value.verification;
    }
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // verification - computed: false, optional: true, required: false
  private _verification?: string; 
  public get verification() {
    return this.getStringAttribute('verification');
  }
  public set verification(value: string) {
    this._verification = value;
  }
  public resetVerification() {
    this._verification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationInput() {
    return this._verification;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/file ignition_file}
*/
export class DataIgnitionFile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ignition_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIgnitionFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIgnitionFile to import
  * @param importFromId The id of the existing DataIgnitionFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIgnitionFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ignition_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/file ignition_file} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIgnitionFileConfig
  */
  public constructor(scope: Construct, id: string, config: DataIgnitionFileConfig) {
    super(scope, id, {
      terraformResourceType: 'ignition_file',
      terraformGeneratorMetadata: {
        providerName: 'ignition',
        providerVersion: '0.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gid = config.gid;
    this._id = config.id;
    this._mode = config.mode;
    this._overwrite = config.overwrite;
    this._path = config.path;
    this._uid = config.uid;
    this._content.internalValue = config.content;
    this._source.internalValue = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gid - computed: false, optional: true, required: false
  private _gid?: number; 
  public get gid() {
    return this.getNumberAttribute('gid');
  }
  public set gid(value: number) {
    this._gid = value;
  }
  public resetGid() {
    this._gid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: boolean | cdktf.IResolvable; 
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }
  public set overwrite(value: boolean | cdktf.IResolvable) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // rendered - computed: true, optional: false, required: false
  public get rendered() {
    return this.getStringAttribute('rendered');
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: number; 
  public get uid() {
    return this.getNumberAttribute('uid');
  }
  public set uid(value: number) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // content - computed: false, optional: true, required: false
  private _content = new DataIgnitionFileContentOutputReference(this, "content");
  public get content() {
    return this._content;
  }
  public putContent(value: DataIgnitionFileContent) {
    this._content.internalValue = value;
  }
  public resetContent() {
    this._content.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new DataIgnitionFileSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataIgnitionFileSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gid: cdktf.numberToTerraform(this._gid),
      id: cdktf.stringToTerraform(this._id),
      mode: cdktf.numberToTerraform(this._mode),
      overwrite: cdktf.booleanToTerraform(this._overwrite),
      path: cdktf.stringToTerraform(this._path),
      uid: cdktf.numberToTerraform(this._uid),
      content: dataIgnitionFileContentToTerraform(this._content.internalValue),
      source: dataIgnitionFileSourceToTerraform(this._source.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gid: {
        value: cdktf.numberToHclTerraform(this._gid),
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
      mode: {
        value: cdktf.numberToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      overwrite: {
        value: cdktf.booleanToHclTerraform(this._overwrite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uid: {
        value: cdktf.numberToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      content: {
        value: dataIgnitionFileContentToHclTerraform(this._content.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIgnitionFileContentList",
      },
      source: {
        value: dataIgnitionFileSourceToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIgnitionFileSourceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
