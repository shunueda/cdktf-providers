// https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * If `true`, creates local (unix or windows) user accounts on enrolled Project servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/project#create_server_users Project#create_server_users}
  */
  readonly createServerUsers?: boolean | cdktf.IResolvable;
  /**
  * If `true`, all traffic in the Project is forwarded through selected Gateways.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/project#forward_traffic Project#forward_traffic}
  */
  readonly forwardTraffic?: boolean | cdktf.IResolvable;
  /**
  * Assigns Gateways with labels matching all selectors. At least one selector is required to forward traffic through a Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/project#gateway_selector Project#gateway_selector}
  */
  readonly gatewaySelector?: string;
  /**
  * The human-readable name of the resource. Values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/project#name Project#name}
  */
  readonly name: string;
  /**
  * The GID to use when creating a new Server User. Default value starts at 63001.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/project#next_unix_gid Project#next_unix_gid}
  */
  readonly nextUnixGid?: number;
  /**
  * The UID to use when creating a new Server User. Default value starts at 60001.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/project#next_unix_uid Project#next_unix_uid}
  */
  readonly nextUnixUid?: number;
  /**
  * If `true`, enables remote desktop protocol (RDP) recording on all servers in the Project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/project#rdp_session_recording Project#rdp_session_recording}
  */
  readonly rdpSessionRecording?: boolean | cdktf.IResolvable;
  /**
  * If `true`, requires preauthorization before a User can retrieve credentials to sign in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/project#require_preauth_for_creds Project#require_preauth_for_creds}
  */
  readonly requirePreauthForCreds?: boolean | cdktf.IResolvable;
  /**
  * The SSH certificate type used by access requests. Options include: [`CERT_TYPE_ED25519_01`, `CERT_TYPE_ECDSA_521_01`, `CERT_TYPE_ECDSA_384_01`, `CERT_TYPE_ECDSA_256_01`, `CERT_TYPE_RSA_01`]. 'CERT_TYPE_RSA_01' is a deprecated key algorithm type. This option should only be used to connect to legacy systems that cannot use newer SSH versions. If you do need to use 'CERT_TYPE_RSA_01', it is recommended to connect via a gateway with traffic forwarding. Otherwise, please use a more current key algorithm. If left unspecified, 'CERT_TYPE_ED25519_01' is used by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/project#ssh_certificate_type Project#ssh_certificate_type}
  */
  readonly sshCertificateType?: string;
  /**
  * If `true`, enables ssh recording on server access requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/project#ssh_session_recording Project#ssh_session_recording}
  */
  readonly sshSessionRecording?: boolean | cdktf.IResolvable;
  /**
  * If defined, set time period in seconds that an on-demand user account exists on the server following an access request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/project#user_on_demand_period Project#user_on_demand_period}
  */
  readonly userOnDemandPeriod?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/project oktapam_project}
*/
export class Project extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oktapam_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Project to import
  * @param importFromId The id of the existing Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Project to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oktapam_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/project oktapam_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'oktapam_project',
      terraformGeneratorMetadata: {
        providerName: 'oktapam',
        providerVersion: '0.6.2',
        providerVersionConstraint: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createServerUsers = config.createServerUsers;
    this._forwardTraffic = config.forwardTraffic;
    this._gatewaySelector = config.gatewaySelector;
    this._name = config.name;
    this._nextUnixGid = config.nextUnixGid;
    this._nextUnixUid = config.nextUnixUid;
    this._rdpSessionRecording = config.rdpSessionRecording;
    this._requirePreauthForCreds = config.requirePreauthForCreds;
    this._sshCertificateType = config.sshCertificateType;
    this._sshSessionRecording = config.sshSessionRecording;
    this._userOnDemandPeriod = config.userOnDemandPeriod;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_server_users - computed: false, optional: true, required: false
  private _createServerUsers?: boolean | cdktf.IResolvable; 
  public get createServerUsers() {
    return this.getBooleanAttribute('create_server_users');
  }
  public set createServerUsers(value: boolean | cdktf.IResolvable) {
    this._createServerUsers = value;
  }
  public resetCreateServerUsers() {
    this._createServerUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createServerUsersInput() {
    return this._createServerUsers;
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // forward_traffic - computed: false, optional: true, required: false
  private _forwardTraffic?: boolean | cdktf.IResolvable; 
  public get forwardTraffic() {
    return this.getBooleanAttribute('forward_traffic');
  }
  public set forwardTraffic(value: boolean | cdktf.IResolvable) {
    this._forwardTraffic = value;
  }
  public resetForwardTraffic() {
    this._forwardTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardTrafficInput() {
    return this._forwardTraffic;
  }

  // gateway_selector - computed: false, optional: true, required: false
  private _gatewaySelector?: string; 
  public get gatewaySelector() {
    return this.getStringAttribute('gateway_selector');
  }
  public set gatewaySelector(value: string) {
    this._gatewaySelector = value;
  }
  public resetGatewaySelector() {
    this._gatewaySelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaySelectorInput() {
    return this._gatewaySelector;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // next_unix_gid - computed: false, optional: true, required: false
  private _nextUnixGid?: number; 
  public get nextUnixGid() {
    return this.getNumberAttribute('next_unix_gid');
  }
  public set nextUnixGid(value: number) {
    this._nextUnixGid = value;
  }
  public resetNextUnixGid() {
    this._nextUnixGid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextUnixGidInput() {
    return this._nextUnixGid;
  }

  // next_unix_uid - computed: false, optional: true, required: false
  private _nextUnixUid?: number; 
  public get nextUnixUid() {
    return this.getNumberAttribute('next_unix_uid');
  }
  public set nextUnixUid(value: number) {
    this._nextUnixUid = value;
  }
  public resetNextUnixUid() {
    this._nextUnixUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextUnixUidInput() {
    return this._nextUnixUid;
  }

  // rdp_session_recording - computed: false, optional: true, required: false
  private _rdpSessionRecording?: boolean | cdktf.IResolvable; 
  public get rdpSessionRecording() {
    return this.getBooleanAttribute('rdp_session_recording');
  }
  public set rdpSessionRecording(value: boolean | cdktf.IResolvable) {
    this._rdpSessionRecording = value;
  }
  public resetRdpSessionRecording() {
    this._rdpSessionRecording = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdpSessionRecordingInput() {
    return this._rdpSessionRecording;
  }

  // require_preauth_for_creds - computed: false, optional: true, required: false
  private _requirePreauthForCreds?: boolean | cdktf.IResolvable; 
  public get requirePreauthForCreds() {
    return this.getBooleanAttribute('require_preauth_for_creds');
  }
  public set requirePreauthForCreds(value: boolean | cdktf.IResolvable) {
    this._requirePreauthForCreds = value;
  }
  public resetRequirePreauthForCreds() {
    this._requirePreauthForCreds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirePreauthForCredsInput() {
    return this._requirePreauthForCreds;
  }

  // ssh_certificate_type - computed: false, optional: true, required: false
  private _sshCertificateType?: string; 
  public get sshCertificateType() {
    return this.getStringAttribute('ssh_certificate_type');
  }
  public set sshCertificateType(value: string) {
    this._sshCertificateType = value;
  }
  public resetSshCertificateType() {
    this._sshCertificateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshCertificateTypeInput() {
    return this._sshCertificateType;
  }

  // ssh_session_recording - computed: false, optional: true, required: false
  private _sshSessionRecording?: boolean | cdktf.IResolvable; 
  public get sshSessionRecording() {
    return this.getBooleanAttribute('ssh_session_recording');
  }
  public set sshSessionRecording(value: boolean | cdktf.IResolvable) {
    this._sshSessionRecording = value;
  }
  public resetSshSessionRecording() {
    this._sshSessionRecording = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshSessionRecordingInput() {
    return this._sshSessionRecording;
  }

  // team - computed: true, optional: false, required: false
  public get team() {
    return this.getStringAttribute('team');
  }

  // user_on_demand_period - computed: false, optional: true, required: false
  private _userOnDemandPeriod?: number; 
  public get userOnDemandPeriod() {
    return this.getNumberAttribute('user_on_demand_period');
  }
  public set userOnDemandPeriod(value: number) {
    this._userOnDemandPeriod = value;
  }
  public resetUserOnDemandPeriod() {
    this._userOnDemandPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userOnDemandPeriodInput() {
    return this._userOnDemandPeriod;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_server_users: cdktf.booleanToTerraform(this._createServerUsers),
      forward_traffic: cdktf.booleanToTerraform(this._forwardTraffic),
      gateway_selector: cdktf.stringToTerraform(this._gatewaySelector),
      name: cdktf.stringToTerraform(this._name),
      next_unix_gid: cdktf.numberToTerraform(this._nextUnixGid),
      next_unix_uid: cdktf.numberToTerraform(this._nextUnixUid),
      rdp_session_recording: cdktf.booleanToTerraform(this._rdpSessionRecording),
      require_preauth_for_creds: cdktf.booleanToTerraform(this._requirePreauthForCreds),
      ssh_certificate_type: cdktf.stringToTerraform(this._sshCertificateType),
      ssh_session_recording: cdktf.booleanToTerraform(this._sshSessionRecording),
      user_on_demand_period: cdktf.numberToTerraform(this._userOnDemandPeriod),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_server_users: {
        value: cdktf.booleanToHclTerraform(this._createServerUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      forward_traffic: {
        value: cdktf.booleanToHclTerraform(this._forwardTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gateway_selector: {
        value: cdktf.stringToHclTerraform(this._gatewaySelector),
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
      next_unix_gid: {
        value: cdktf.numberToHclTerraform(this._nextUnixGid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      next_unix_uid: {
        value: cdktf.numberToHclTerraform(this._nextUnixUid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rdp_session_recording: {
        value: cdktf.booleanToHclTerraform(this._rdpSessionRecording),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_preauth_for_creds: {
        value: cdktf.booleanToHclTerraform(this._requirePreauthForCreds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssh_certificate_type: {
        value: cdktf.stringToHclTerraform(this._sshCertificateType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_session_recording: {
        value: cdktf.booleanToHclTerraform(this._sshSessionRecording),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_on_demand_period: {
        value: cdktf.numberToHclTerraform(this._userOnDemandPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
