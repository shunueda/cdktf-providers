// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_kubernetes_data_center_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementKubernetesDataCenterServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Kubernetes public certificate key encoded in base64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_kubernetes_data_center_server#ca_certificate ManagementKubernetesDataCenterServer#ca_certificate}
  */
  readonly caCertificate?: string;
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_kubernetes_data_center_server#color ManagementKubernetesDataCenterServer#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_kubernetes_data_center_server#comments ManagementKubernetesDataCenterServer#comments}
  */
  readonly comments?: string;
  /**
  * IP address or hostname of the Kubernetes server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_kubernetes_data_center_server#hostname ManagementKubernetesDataCenterServer#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_kubernetes_data_center_server#id ManagementKubernetesDataCenterServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_kubernetes_data_center_server#ignore_errors ManagementKubernetesDataCenterServer#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings. By Setting this parameter to 'true' test connection failure will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_kubernetes_data_center_server#ignore_warnings ManagementKubernetesDataCenterServer#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Object name. Must be unique in the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_kubernetes_data_center_server#name ManagementKubernetesDataCenterServer#name}
  */
  readonly name: string;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_kubernetes_data_center_server#tags ManagementKubernetesDataCenterServer#tags}
  */
  readonly tags?: string[];
  /**
  * Kubernetes access token encoded in base64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_kubernetes_data_center_server#token_file ManagementKubernetesDataCenterServer#token_file}
  */
  readonly tokenFile: string;
  /**
  * When set to false, the current Data Center Server's certificate should be trusted, either by providing the certificate-fingerprint argument or by relying on a previously trusted certificate of this hostname.
  * 
  * When set to true, trust the current Data Center Server's certificate as-is.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_kubernetes_data_center_server#unsafe_auto_accept ManagementKubernetesDataCenterServer#unsafe_auto_accept}
  */
  readonly unsafeAutoAccept?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_kubernetes_data_center_server checkpoint_management_kubernetes_data_center_server}
*/
export class ManagementKubernetesDataCenterServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_kubernetes_data_center_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementKubernetesDataCenterServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementKubernetesDataCenterServer to import
  * @param importFromId The id of the existing ManagementKubernetesDataCenterServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_kubernetes_data_center_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementKubernetesDataCenterServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_kubernetes_data_center_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_kubernetes_data_center_server checkpoint_management_kubernetes_data_center_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementKubernetesDataCenterServerConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementKubernetesDataCenterServerConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_kubernetes_data_center_server',
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
    this._caCertificate = config.caCertificate;
    this._color = config.color;
    this._comments = config.comments;
    this._hostname = config.hostname;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._name = config.name;
    this._tags = config.tags;
    this._tokenFile = config.tokenFile;
    this._unsafeAutoAccept = config.unsafeAutoAccept;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_certificate - computed: false, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }

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

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // token_file - computed: false, optional: false, required: true
  private _tokenFile?: string; 
  public get tokenFile() {
    return this.getStringAttribute('token_file');
  }
  public set tokenFile(value: string) {
    this._tokenFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenFileInput() {
    return this._tokenFile;
  }

  // unsafe_auto_accept - computed: false, optional: true, required: false
  private _unsafeAutoAccept?: boolean | cdktf.IResolvable; 
  public get unsafeAutoAccept() {
    return this.getBooleanAttribute('unsafe_auto_accept');
  }
  public set unsafeAutoAccept(value: boolean | cdktf.IResolvable) {
    this._unsafeAutoAccept = value;
  }
  public resetUnsafeAutoAccept() {
    this._unsafeAutoAccept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsafeAutoAcceptInput() {
    return this._unsafeAutoAccept;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_certificate: cdktf.stringToTerraform(this._caCertificate),
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      token_file: cdktf.stringToTerraform(this._tokenFile),
      unsafe_auto_accept: cdktf.booleanToTerraform(this._unsafeAutoAccept),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_certificate: {
        value: cdktf.stringToHclTerraform(this._caCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      token_file: {
        value: cdktf.stringToHclTerraform(this._tokenFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unsafe_auto_accept: {
        value: cdktf.booleanToHclTerraform(this._unsafeAutoAccept),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
