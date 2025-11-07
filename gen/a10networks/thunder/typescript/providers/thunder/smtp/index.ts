// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/smtp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SmtpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/smtp#id Smtp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configure email source address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/smtp#mailfrom Smtp#mailfrom}
  */
  readonly mailfrom?: string;
  /**
  * Configure SMTP server need authtication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/smtp#needauthentication Smtp#needauthentication}
  */
  readonly needauthentication?: number;
  /**
  * Configure SMTP Port (Configure SMTP port, default is 25)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/smtp#port Smtp#port}
  */
  readonly port?: number;
  /**
  * Configure SMTP Server (length:1-254)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/smtp#smtp_server Smtp#smtp_server}
  */
  readonly smtpServer?: string;
  /**
  * Configure SMTP Server IPV6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/smtp#smtp_server_v6 Smtp#smtp_server_v6}
  */
  readonly smtpServerV6?: string;
  /**
  * Use management port as source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/smtp#use_mgmt_port Smtp#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/smtp#uuid Smtp#uuid}
  */
  readonly uuid?: string;
  /**
  * username_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/smtp#username_cfg Smtp#username_cfg}
  */
  readonly usernameCfg?: SmtpUsernameCfg;
}
export interface SmtpUsernameCfgPassword {
  /**
  * Configure SMTP login password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/smtp#smtp_password Smtp#smtp_password}
  */
  readonly smtpPassword?: string;
}

export function smtpUsernameCfgPasswordToTerraform(struct?: SmtpUsernameCfgPasswordOutputReference | SmtpUsernameCfgPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    smtp_password: cdktf.stringToTerraform(struct!.smtpPassword),
  }
}


export function smtpUsernameCfgPasswordToHclTerraform(struct?: SmtpUsernameCfgPasswordOutputReference | SmtpUsernameCfgPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    smtp_password: {
      value: cdktf.stringToHclTerraform(struct!.smtpPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SmtpUsernameCfgPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SmtpUsernameCfgPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._smtpPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpPassword = this._smtpPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmtpUsernameCfgPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._smtpPassword = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._smtpPassword = value.smtpPassword;
    }
  }

  // smtp_password - computed: false, optional: true, required: false
  private _smtpPassword?: string; 
  public get smtpPassword() {
    return this.getStringAttribute('smtp_password');
  }
  public set smtpPassword(value: string) {
    this._smtpPassword = value;
  }
  public resetSmtpPassword() {
    this._smtpPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpPasswordInput() {
    return this._smtpPassword;
  }
}
export interface SmtpUsernameCfg {
  /**
  * Configure SMTP login username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/smtp#username Smtp#username}
  */
  readonly username?: string;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/smtp#password Smtp#password}
  */
  readonly password?: SmtpUsernameCfgPassword;
}

export function smtpUsernameCfgToTerraform(struct?: SmtpUsernameCfgOutputReference | SmtpUsernameCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    username: cdktf.stringToTerraform(struct!.username),
    password: smtpUsernameCfgPasswordToTerraform(struct!.password),
  }
}


export function smtpUsernameCfgToHclTerraform(struct?: SmtpUsernameCfgOutputReference | SmtpUsernameCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: smtpUsernameCfgPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "SmtpUsernameCfgPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SmtpUsernameCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SmtpUsernameCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmtpUsernameCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._username = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._username = value.username;
      this._password.internalValue = value.password;
    }
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

  // password - computed: false, optional: true, required: false
  private _password = new SmtpUsernameCfgPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: SmtpUsernameCfgPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/smtp thunder_smtp}
*/
export class Smtp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_smtp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Smtp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Smtp to import
  * @param importFromId The id of the existing Smtp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/smtp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Smtp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_smtp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/smtp thunder_smtp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SmtpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SmtpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_smtp',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._mailfrom = config.mailfrom;
    this._needauthentication = config.needauthentication;
    this._port = config.port;
    this._smtpServer = config.smtpServer;
    this._smtpServerV6 = config.smtpServerV6;
    this._useMgmtPort = config.useMgmtPort;
    this._uuid = config.uuid;
    this._usernameCfg.internalValue = config.usernameCfg;
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

  // mailfrom - computed: false, optional: true, required: false
  private _mailfrom?: string; 
  public get mailfrom() {
    return this.getStringAttribute('mailfrom');
  }
  public set mailfrom(value: string) {
    this._mailfrom = value;
  }
  public resetMailfrom() {
    this._mailfrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailfromInput() {
    return this._mailfrom;
  }

  // needauthentication - computed: false, optional: true, required: false
  private _needauthentication?: number; 
  public get needauthentication() {
    return this.getNumberAttribute('needauthentication');
  }
  public set needauthentication(value: number) {
    this._needauthentication = value;
  }
  public resetNeedauthentication() {
    this._needauthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get needauthenticationInput() {
    return this._needauthentication;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // smtp_server - computed: false, optional: true, required: false
  private _smtpServer?: string; 
  public get smtpServer() {
    return this.getStringAttribute('smtp_server');
  }
  public set smtpServer(value: string) {
    this._smtpServer = value;
  }
  public resetSmtpServer() {
    this._smtpServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpServerInput() {
    return this._smtpServer;
  }

  // smtp_server_v6 - computed: false, optional: true, required: false
  private _smtpServerV6?: string; 
  public get smtpServerV6() {
    return this.getStringAttribute('smtp_server_v6');
  }
  public set smtpServerV6(value: string) {
    this._smtpServerV6 = value;
  }
  public resetSmtpServerV6() {
    this._smtpServerV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpServerV6Input() {
    return this._smtpServerV6;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
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

  // username_cfg - computed: false, optional: true, required: false
  private _usernameCfg = new SmtpUsernameCfgOutputReference(this, "username_cfg");
  public get usernameCfg() {
    return this._usernameCfg;
  }
  public putUsernameCfg(value: SmtpUsernameCfg) {
    this._usernameCfg.internalValue = value;
  }
  public resetUsernameCfg() {
    this._usernameCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameCfgInput() {
    return this._usernameCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      mailfrom: cdktf.stringToTerraform(this._mailfrom),
      needauthentication: cdktf.numberToTerraform(this._needauthentication),
      port: cdktf.numberToTerraform(this._port),
      smtp_server: cdktf.stringToTerraform(this._smtpServer),
      smtp_server_v6: cdktf.stringToTerraform(this._smtpServerV6),
      use_mgmt_port: cdktf.numberToTerraform(this._useMgmtPort),
      uuid: cdktf.stringToTerraform(this._uuid),
      username_cfg: smtpUsernameCfgToTerraform(this._usernameCfg.internalValue),
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
      mailfrom: {
        value: cdktf.stringToHclTerraform(this._mailfrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      needauthentication: {
        value: cdktf.numberToHclTerraform(this._needauthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      smtp_server: {
        value: cdktf.stringToHclTerraform(this._smtpServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smtp_server_v6: {
        value: cdktf.stringToHclTerraform(this._smtpServerV6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_mgmt_port: {
        value: cdktf.numberToHclTerraform(this._useMgmtPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username_cfg: {
        value: smtpUsernameCfgToHclTerraform(this._usernameCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SmtpUsernameCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
