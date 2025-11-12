// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_ftp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementResourceFtpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_ftp#color ManagementResourceFtp#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_ftp#comments ManagementResourceFtp#comments}
  */
  readonly comments?: string;
  /**
  * The UID or Name of the exception track to be used to log actions taken as a result of a match on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_ftp#exception_track ManagementResourceFtp#exception_track}
  */
  readonly exceptionTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_ftp#id ManagementResourceFtp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_ftp#ignore_errors ManagementResourceFtp#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_ftp#ignore_warnings ManagementResourceFtp#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_ftp#name ManagementResourceFtp#name}
  */
  readonly name: string;
  /**
  * GET allows Downloads from the server to the client. PUT allows Uploads from the client to the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_ftp#resource_matching_method ManagementResourceFtp#resource_matching_method}
  */
  readonly resourceMatchingMethod: string;
  /**
  * Refers to a location on the FTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_ftp#resources_path ManagementResourceFtp#resources_path}
  */
  readonly resourcesPath?: string;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_ftp#tags ManagementResourceFtp#tags}
  */
  readonly tags?: string[];
  /**
  * cvp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_ftp#cvp ManagementResourceFtp#cvp}
  */
  readonly cvp?: ManagementResourceFtpCvp;
}
export interface ManagementResourceFtpCvp {
  /**
  * Configures the CVP server to inspect but not modify content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_ftp#allowed_to_modify_content ManagementResourceFtp#allowed_to_modify_content}
  */
  readonly allowedToModifyContent?: boolean | cdktf.IResolvable;
  /**
  * Select to enable the Content Vectoring Protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_ftp#enable_cvp ManagementResourceFtp#enable_cvp}
  */
  readonly enableCvp?: boolean | cdktf.IResolvable;
  /**
  * Designates when the CVP server returns data to the Security Gateway security server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_ftp#reply_order ManagementResourceFtp#reply_order}
  */
  readonly replyOrder?: string;
  /**
  * The UID or Name of the CVP server, make sure the CVP server is already be defined as an OPSEC Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_ftp#server ManagementResourceFtp#server}
  */
  readonly server?: string;
}

export function managementResourceFtpCvpToTerraform(struct?: ManagementResourceFtpCvpOutputReference | ManagementResourceFtpCvp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_to_modify_content: cdktf.booleanToTerraform(struct!.allowedToModifyContent),
    enable_cvp: cdktf.booleanToTerraform(struct!.enableCvp),
    reply_order: cdktf.stringToTerraform(struct!.replyOrder),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function managementResourceFtpCvpToHclTerraform(struct?: ManagementResourceFtpCvpOutputReference | ManagementResourceFtpCvp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_to_modify_content: {
      value: cdktf.booleanToHclTerraform(struct!.allowedToModifyContent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_cvp: {
      value: cdktf.booleanToHclTerraform(struct!.enableCvp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reply_order: {
      value: cdktf.stringToHclTerraform(struct!.replyOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementResourceFtpCvpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementResourceFtpCvp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedToModifyContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedToModifyContent = this._allowedToModifyContent;
    }
    if (this._enableCvp !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCvp = this._enableCvp;
    }
    if (this._replyOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.replyOrder = this._replyOrder;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementResourceFtpCvp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedToModifyContent = undefined;
      this._enableCvp = undefined;
      this._replyOrder = undefined;
      this._server = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedToModifyContent = value.allowedToModifyContent;
      this._enableCvp = value.enableCvp;
      this._replyOrder = value.replyOrder;
      this._server = value.server;
    }
  }

  // allowed_to_modify_content - computed: false, optional: true, required: false
  private _allowedToModifyContent?: boolean | cdktf.IResolvable; 
  public get allowedToModifyContent() {
    return this.getBooleanAttribute('allowed_to_modify_content');
  }
  public set allowedToModifyContent(value: boolean | cdktf.IResolvable) {
    this._allowedToModifyContent = value;
  }
  public resetAllowedToModifyContent() {
    this._allowedToModifyContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedToModifyContentInput() {
    return this._allowedToModifyContent;
  }

  // enable_cvp - computed: false, optional: true, required: false
  private _enableCvp?: boolean | cdktf.IResolvable; 
  public get enableCvp() {
    return this.getBooleanAttribute('enable_cvp');
  }
  public set enableCvp(value: boolean | cdktf.IResolvable) {
    this._enableCvp = value;
  }
  public resetEnableCvp() {
    this._enableCvp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCvpInput() {
    return this._enableCvp;
  }

  // reply_order - computed: false, optional: true, required: false
  private _replyOrder?: string; 
  public get replyOrder() {
    return this.getStringAttribute('reply_order');
  }
  public set replyOrder(value: string) {
    this._replyOrder = value;
  }
  public resetReplyOrder() {
    this._replyOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyOrderInput() {
    return this._replyOrder;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_ftp checkpoint_management_resource_ftp}
*/
export class ManagementResourceFtp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_resource_ftp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementResourceFtp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementResourceFtp to import
  * @param importFromId The id of the existing ManagementResourceFtp that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_ftp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementResourceFtp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_resource_ftp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_resource_ftp checkpoint_management_resource_ftp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementResourceFtpConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementResourceFtpConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_resource_ftp',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._color = config.color;
    this._comments = config.comments;
    this._exceptionTrack = config.exceptionTrack;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._name = config.name;
    this._resourceMatchingMethod = config.resourceMatchingMethod;
    this._resourcesPath = config.resourcesPath;
    this._tags = config.tags;
    this._cvp.internalValue = config.cvp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // exception_track - computed: false, optional: true, required: false
  private _exceptionTrack?: string; 
  public get exceptionTrack() {
    return this.getStringAttribute('exception_track');
  }
  public set exceptionTrack(value: string) {
    this._exceptionTrack = value;
  }
  public resetExceptionTrack() {
    this._exceptionTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionTrackInput() {
    return this._exceptionTrack;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
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

  // resource_matching_method - computed: false, optional: false, required: true
  private _resourceMatchingMethod?: string; 
  public get resourceMatchingMethod() {
    return this.getStringAttribute('resource_matching_method');
  }
  public set resourceMatchingMethod(value: string) {
    this._resourceMatchingMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceMatchingMethodInput() {
    return this._resourceMatchingMethod;
  }

  // resources_path - computed: false, optional: true, required: false
  private _resourcesPath?: string; 
  public get resourcesPath() {
    return this.getStringAttribute('resources_path');
  }
  public set resourcesPath(value: string) {
    this._resourcesPath = value;
  }
  public resetResourcesPath() {
    this._resourcesPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesPathInput() {
    return this._resourcesPath;
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

  // cvp - computed: false, optional: true, required: false
  private _cvp = new ManagementResourceFtpCvpOutputReference(this, "cvp");
  public get cvp() {
    return this._cvp;
  }
  public putCvp(value: ManagementResourceFtpCvp) {
    this._cvp.internalValue = value;
  }
  public resetCvp() {
    this._cvp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvpInput() {
    return this._cvp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      exception_track: cdktf.stringToTerraform(this._exceptionTrack),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      name: cdktf.stringToTerraform(this._name),
      resource_matching_method: cdktf.stringToTerraform(this._resourceMatchingMethod),
      resources_path: cdktf.stringToTerraform(this._resourcesPath),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      cvp: managementResourceFtpCvpToTerraform(this._cvp.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exception_track: {
        value: cdktf.stringToHclTerraform(this._exceptionTrack),
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
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_matching_method: {
        value: cdktf.stringToHclTerraform(this._resourceMatchingMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resources_path: {
        value: cdktf.stringToHclTerraform(this._resourcesPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cvp: {
        value: managementResourceFtpCvpToHclTerraform(this._cvp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementResourceFtpCvpList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
