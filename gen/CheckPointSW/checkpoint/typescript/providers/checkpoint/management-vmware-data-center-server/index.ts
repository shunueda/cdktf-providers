// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vmware_data_center_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementVmwareDataCenterServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify the SHA-1 or SHA-256 fingerprint of the Data Center Server's certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vmware_data_center_server#certificate_fingerprint ManagementVmwareDataCenterServer#certificate_fingerprint}
  */
  readonly certificateFingerprint?: string;
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vmware_data_center_server#color ManagementVmwareDataCenterServer#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vmware_data_center_server#comments ManagementVmwareDataCenterServer#comments}
  */
  readonly comments?: string;
  /**
  * IP Address or hostname of the vCenter server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vmware_data_center_server#hostname ManagementVmwareDataCenterServer#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vmware_data_center_server#id ManagementVmwareDataCenterServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vmware_data_center_server#ignore_errors ManagementVmwareDataCenterServer#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings. By Setting this parameter to 'true' test connection failure will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vmware_data_center_server#ignore_warnings ManagementVmwareDataCenterServer#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * For nsxt type only. When set to true, the Data Center Server will import Virtual Machines as well.
  * This feature will create additional API requests toward NSX-T manager
  * 
  * Note: importing Virtual Machines can only be enabled while using Policy Mode APIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vmware_data_center_server#import_vms ManagementVmwareDataCenterServer#import_vms}
  */
  readonly importVms?: boolean | cdktf.IResolvable;
  /**
  * Object name. Must be unique in the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vmware_data_center_server#name ManagementVmwareDataCenterServer#name}
  */
  readonly name: string;
  /**
  * Password of the vCenter server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vmware_data_center_server#password ManagementVmwareDataCenterServer#password}
  */
  readonly password?: string;
  /**
  * Password of the vCenter server encoded in Base64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vmware_data_center_server#password_base64 ManagementVmwareDataCenterServer#password_base64}
  */
  readonly passwordBase64?: string;
  /**
  * For nsxt type only.
  * When set to false, the Data Center Server will use Manager Mode APIs.
  * 
  * When set to true, the Data Center Server will use Policy Mode APIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vmware_data_center_server#policy_mode ManagementVmwareDataCenterServer#policy_mode}
  */
  readonly policyMode?: boolean | cdktf.IResolvable;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vmware_data_center_server#tags ManagementVmwareDataCenterServer#tags}
  */
  readonly tags?: string[];
  /**
  * VMWare object type. nsx or nsxt or globalnsxt or vcenter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vmware_data_center_server#type ManagementVmwareDataCenterServer#type}
  */
  readonly type: string;
  /**
  * When set to false, the current Data Center Server's certificate should be trusted, either by providing the certificate-fingerprint argument or by relying on a previously trusted certificate of this hostname.
  * 
  * When set to true, trust the current Data Center Server's certificate as-is.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vmware_data_center_server#unsafe_auto_accept ManagementVmwareDataCenterServer#unsafe_auto_accept}
  */
  readonly unsafeAutoAccept?: boolean | cdktf.IResolvable;
  /**
  * Username of the vCenter server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vmware_data_center_server#username ManagementVmwareDataCenterServer#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vmware_data_center_server checkpoint_management_vmware_data_center_server}
*/
export class ManagementVmwareDataCenterServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_vmware_data_center_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementVmwareDataCenterServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementVmwareDataCenterServer to import
  * @param importFromId The id of the existing ManagementVmwareDataCenterServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vmware_data_center_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementVmwareDataCenterServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_vmware_data_center_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vmware_data_center_server checkpoint_management_vmware_data_center_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementVmwareDataCenterServerConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementVmwareDataCenterServerConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_vmware_data_center_server',
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
    this._certificateFingerprint = config.certificateFingerprint;
    this._color = config.color;
    this._comments = config.comments;
    this._hostname = config.hostname;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._importVms = config.importVms;
    this._name = config.name;
    this._password = config.password;
    this._passwordBase64 = config.passwordBase64;
    this._policyMode = config.policyMode;
    this._tags = config.tags;
    this._type = config.type;
    this._unsafeAutoAccept = config.unsafeAutoAccept;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_fingerprint - computed: false, optional: true, required: false
  private _certificateFingerprint?: string; 
  public get certificateFingerprint() {
    return this.getStringAttribute('certificate_fingerprint');
  }
  public set certificateFingerprint(value: string) {
    this._certificateFingerprint = value;
  }
  public resetCertificateFingerprint() {
    this._certificateFingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateFingerprintInput() {
    return this._certificateFingerprint;
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

  // import_vms - computed: false, optional: true, required: false
  private _importVms?: boolean | cdktf.IResolvable; 
  public get importVms() {
    return this.getBooleanAttribute('import_vms');
  }
  public set importVms(value: boolean | cdktf.IResolvable) {
    this._importVms = value;
  }
  public resetImportVms() {
    this._importVms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importVmsInput() {
    return this._importVms;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_base64 - computed: false, optional: true, required: false
  private _passwordBase64?: string; 
  public get passwordBase64() {
    return this.getStringAttribute('password_base64');
  }
  public set passwordBase64(value: string) {
    this._passwordBase64 = value;
  }
  public resetPasswordBase64() {
    this._passwordBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordBase64Input() {
    return this._passwordBase64;
  }

  // policy_mode - computed: false, optional: true, required: false
  private _policyMode?: boolean | cdktf.IResolvable; 
  public get policyMode() {
    return this.getBooleanAttribute('policy_mode');
  }
  public set policyMode(value: boolean | cdktf.IResolvable) {
    this._policyMode = value;
  }
  public resetPolicyMode() {
    this._policyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyModeInput() {
    return this._policyMode;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_fingerprint: cdktf.stringToTerraform(this._certificateFingerprint),
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      import_vms: cdktf.booleanToTerraform(this._importVms),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      password_base64: cdktf.stringToTerraform(this._passwordBase64),
      policy_mode: cdktf.booleanToTerraform(this._policyMode),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      unsafe_auto_accept: cdktf.booleanToTerraform(this._unsafeAutoAccept),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_fingerprint: {
        value: cdktf.stringToHclTerraform(this._certificateFingerprint),
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
      import_vms: {
        value: cdktf.booleanToHclTerraform(this._importVms),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_base64: {
        value: cdktf.stringToHclTerraform(this._passwordBase64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_mode: {
        value: cdktf.booleanToHclTerraform(this._policyMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
