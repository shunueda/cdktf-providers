// https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/radius
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RadiusConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/radius#___path___ Radius#___path___}
  */
  readonly path?: string;
  /**
  * An option whether the configuration is for the backup RADIUS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/radius#accounting_backup Radius#accounting_backup}
  */
  readonly accountingBackup?: boolean | cdktf.IResolvable;
  /**
  * RADIUS server port used for accounting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/radius#accounting_port Radius#accounting_port}
  */
  readonly accountingPort?: number;
  /**
  * IPv4 or IPv6 address of RADIUS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/radius#address Radius#address}
  */
  readonly address: string;
  /**
  * RADIUS server port used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/radius#authentication_port Radius#authentication_port}
  */
  readonly authenticationPort?: number;
  /**
  * RADIUS calling station identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/radius#called_id Radius#called_id}
  */
  readonly calledId?: string;
  /**
  * Certificate to use for communication with RADIUS Server with RadSec enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/radius#certificate Radius#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/radius#comment Radius#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/radius#disabled Radius#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Microsoft Windows domain of client passed to RADIUS servers that require domain validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/radius#domain Radius#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/radius#id Radius#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An option specifies the protocol to use when communicating with the RADIUS Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/radius#protocol Radius#protocol}
  */
  readonly protocol?: string;
  /**
  * Timeout after which the request should be resent over RadSec protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/radius#radsec_timeout Radius#radsec_timeout}
  */
  readonly radsecTimeout?: string;
  /**
  * Explicitly stated realm (user domain), so the users do not have to provide proper ISP domain name in the user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/radius#realm Radius#realm}
  */
  readonly realm?: string;
  /**
  * An option whether to require `Message-Authenticator` in received Access-Accept/Challenge/Reject messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/radius#require_message_auth Radius#require_message_auth}
  */
  readonly requireMessageAuth?: string;
  /**
  * The shared secret to access the RADIUS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/radius#secret Radius#secret}
  */
  readonly secret?: string;
  /**
  * A set of router services that will use the RADIUS server. Possible values: `hotspot`, `login`, `ppp`, `wireless`, `dhcp`, `ipsec`, `dot1x`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/radius#service Radius#service}
  */
  readonly service?: string[];
  /**
  * Source IPv4/IPv6 address of the packets sent to the RADIUS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/radius#src_address Radius#src_address}
  */
  readonly srcAddress?: string;
  /**
  * A timeout, after which the request should be resent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/radius#timeout Radius#timeout}
  */
  readonly timeout?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/radius routeros_radius}
*/
export class Radius extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_radius";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Radius resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Radius to import
  * @param importFromId The id of the existing Radius that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/radius#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Radius to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_radius", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/radius routeros_radius} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RadiusConfig
  */
  public constructor(scope: Construct, id: string, config: RadiusConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_radius',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.95.0',
        providerVersionConstraint: '1.95.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._accountingBackup = config.accountingBackup;
    this._accountingPort = config.accountingPort;
    this._address = config.address;
    this._authenticationPort = config.authenticationPort;
    this._calledId = config.calledId;
    this._certificate = config.certificate;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._domain = config.domain;
    this._id = config.id;
    this._protocol = config.protocol;
    this._radsecTimeout = config.radsecTimeout;
    this._realm = config.realm;
    this._requireMessageAuth = config.requireMessageAuth;
    this._secret = config.secret;
    this._service = config.service;
    this._srcAddress = config.srcAddress;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // accounting_backup - computed: false, optional: true, required: false
  private _accountingBackup?: boolean | cdktf.IResolvable; 
  public get accountingBackup() {
    return this.getBooleanAttribute('accounting_backup');
  }
  public set accountingBackup(value: boolean | cdktf.IResolvable) {
    this._accountingBackup = value;
  }
  public resetAccountingBackup() {
    this._accountingBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingBackupInput() {
    return this._accountingBackup;
  }

  // accounting_port - computed: false, optional: true, required: false
  private _accountingPort?: number; 
  public get accountingPort() {
    return this.getNumberAttribute('accounting_port');
  }
  public set accountingPort(value: number) {
    this._accountingPort = value;
  }
  public resetAccountingPort() {
    this._accountingPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingPortInput() {
    return this._accountingPort;
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // authentication_port - computed: false, optional: true, required: false
  private _authenticationPort?: number; 
  public get authenticationPort() {
    return this.getNumberAttribute('authentication_port');
  }
  public set authenticationPort(value: number) {
    this._authenticationPort = value;
  }
  public resetAuthenticationPort() {
    this._authenticationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPortInput() {
    return this._authenticationPort;
  }

  // called_id - computed: false, optional: true, required: false
  private _calledId?: string; 
  public get calledId() {
    return this.getStringAttribute('called_id');
  }
  public set calledId(value: string) {
    this._calledId = value;
  }
  public resetCalledId() {
    this._calledId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calledIdInput() {
    return this._calledId;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // radsec_timeout - computed: false, optional: true, required: false
  private _radsecTimeout?: string; 
  public get radsecTimeout() {
    return this.getStringAttribute('radsec_timeout');
  }
  public set radsecTimeout(value: string) {
    this._radsecTimeout = value;
  }
  public resetRadsecTimeout() {
    this._radsecTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radsecTimeoutInput() {
    return this._radsecTimeout;
  }

  // realm - computed: false, optional: true, required: false
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // require_message_auth - computed: false, optional: true, required: false
  private _requireMessageAuth?: string; 
  public get requireMessageAuth() {
    return this.getStringAttribute('require_message_auth');
  }
  public set requireMessageAuth(value: string) {
    this._requireMessageAuth = value;
  }
  public resetRequireMessageAuth() {
    this._requireMessageAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireMessageAuthInput() {
    return this._requireMessageAuth;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string[]; 
  public get service() {
    return cdktf.Fn.tolist(this.getListAttribute('service'));
  }
  public set service(value: string[]) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // src_address - computed: false, optional: true, required: false
  private _srcAddress?: string; 
  public get srcAddress() {
    return this.getStringAttribute('src_address');
  }
  public set srcAddress(value: string) {
    this._srcAddress = value;
  }
  public resetSrcAddress() {
    this._srcAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddressInput() {
    return this._srcAddress;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      accounting_backup: cdktf.booleanToTerraform(this._accountingBackup),
      accounting_port: cdktf.numberToTerraform(this._accountingPort),
      address: cdktf.stringToTerraform(this._address),
      authentication_port: cdktf.numberToTerraform(this._authenticationPort),
      called_id: cdktf.stringToTerraform(this._calledId),
      certificate: cdktf.stringToTerraform(this._certificate),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      protocol: cdktf.stringToTerraform(this._protocol),
      radsec_timeout: cdktf.stringToTerraform(this._radsecTimeout),
      realm: cdktf.stringToTerraform(this._realm),
      require_message_auth: cdktf.stringToTerraform(this._requireMessageAuth),
      secret: cdktf.stringToTerraform(this._secret),
      service: cdktf.listMapper(cdktf.stringToTerraform, false)(this._service),
      src_address: cdktf.stringToTerraform(this._srcAddress),
      timeout: cdktf.stringToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accounting_backup: {
        value: cdktf.booleanToHclTerraform(this._accountingBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      accounting_port: {
        value: cdktf.numberToHclTerraform(this._accountingPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_port: {
        value: cdktf.numberToHclTerraform(this._authenticationPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      called_id: {
        value: cdktf.stringToHclTerraform(this._calledId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radsec_timeout: {
        value: cdktf.stringToHclTerraform(this._radsecTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realm: {
        value: cdktf.stringToHclTerraform(this._realm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      require_message_auth: {
        value: cdktf.stringToHclTerraform(this._requireMessageAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret: {
        value: cdktf.stringToHclTerraform(this._secret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._service),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      src_address: {
        value: cdktf.stringToHclTerraform(this._srcAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.stringToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
