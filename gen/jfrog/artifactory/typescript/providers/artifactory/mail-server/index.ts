// https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/mail_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MailServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Artifactory URL to to link to in all outgoing messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/mail_server#artifactory_url MailServer#artifactory_url}
  */
  readonly artifactoryUrl?: string;
  /**
  * When set, mail notifications are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/mail_server#enabled MailServer#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The 'from' address header to use in all outgoing messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/mail_server#from MailServer#from}
  */
  readonly from?: string;
  /**
  * The mail server IP address / DNS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/mail_server#host MailServer#host}
  */
  readonly host: string;
  /**
  * The password for authentication with the mail server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/mail_server#password MailServer#password}
  */
  readonly password?: string;
  /**
  * The port number of the mail server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/mail_server#port MailServer#port}
  */
  readonly port: number;
  /**
  * A prefix to use for the subject of all outgoing mails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/mail_server#subject_prefix MailServer#subject_prefix}
  */
  readonly subjectPrefix?: string;
  /**
  * When set to 'true', uses a secure connection to the mail server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/mail_server#use_ssl MailServer#use_ssl}
  */
  readonly useSsl?: boolean | cdktf.IResolvable;
  /**
  * When set to 'true', uses Transport Layer Security when connecting to the mail server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/mail_server#use_tls MailServer#use_tls}
  */
  readonly useTls?: boolean | cdktf.IResolvable;
  /**
  * The username for authentication with the mail server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/mail_server#username MailServer#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/mail_server artifactory_mail_server}
*/
export class MailServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_mail_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MailServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MailServer to import
  * @param importFromId The id of the existing MailServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/mail_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MailServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_mail_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/mail_server artifactory_mail_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MailServerConfig
  */
  public constructor(scope: Construct, id: string, config: MailServerConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_mail_server',
      terraformGeneratorMetadata: {
        providerName: 'artifactory',
        providerVersion: '12.11.0',
        providerVersionConstraint: '12.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._artifactoryUrl = config.artifactoryUrl;
    this._enabled = config.enabled;
    this._from = config.from;
    this._host = config.host;
    this._password = config.password;
    this._port = config.port;
    this._subjectPrefix = config.subjectPrefix;
    this._useSsl = config.useSsl;
    this._useTls = config.useTls;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // artifactory_url - computed: false, optional: true, required: false
  private _artifactoryUrl?: string; 
  public get artifactoryUrl() {
    return this.getStringAttribute('artifactory_url');
  }
  public set artifactoryUrl(value: string) {
    this._artifactoryUrl = value;
  }
  public resetArtifactoryUrl() {
    this._artifactoryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactoryUrlInput() {
    return this._artifactoryUrl;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // subject_prefix - computed: false, optional: true, required: false
  private _subjectPrefix?: string; 
  public get subjectPrefix() {
    return this.getStringAttribute('subject_prefix');
  }
  public set subjectPrefix(value: string) {
    this._subjectPrefix = value;
  }
  public resetSubjectPrefix() {
    this._subjectPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectPrefixInput() {
    return this._subjectPrefix;
  }

  // use_ssl - computed: true, optional: true, required: false
  private _useSsl?: boolean | cdktf.IResolvable; 
  public get useSsl() {
    return this.getBooleanAttribute('use_ssl');
  }
  public set useSsl(value: boolean | cdktf.IResolvable) {
    this._useSsl = value;
  }
  public resetUseSsl() {
    this._useSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSslInput() {
    return this._useSsl;
  }

  // use_tls - computed: true, optional: true, required: false
  private _useTls?: boolean | cdktf.IResolvable; 
  public get useTls() {
    return this.getBooleanAttribute('use_tls');
  }
  public set useTls(value: boolean | cdktf.IResolvable) {
    this._useTls = value;
  }
  public resetUseTls() {
    this._useTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTlsInput() {
    return this._useTls;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
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
      artifactory_url: cdktf.stringToTerraform(this._artifactoryUrl),
      enabled: cdktf.booleanToTerraform(this._enabled),
      from: cdktf.stringToTerraform(this._from),
      host: cdktf.stringToTerraform(this._host),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      subject_prefix: cdktf.stringToTerraform(this._subjectPrefix),
      use_ssl: cdktf.booleanToTerraform(this._useSsl),
      use_tls: cdktf.booleanToTerraform(this._useTls),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      artifactory_url: {
        value: cdktf.stringToHclTerraform(this._artifactoryUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      from: {
        value: cdktf.stringToHclTerraform(this._from),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subject_prefix: {
        value: cdktf.stringToHclTerraform(this._subjectPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_ssl: {
        value: cdktf.booleanToHclTerraform(this._useSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_tls: {
        value: cdktf.booleanToHclTerraform(this._useTls),
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
