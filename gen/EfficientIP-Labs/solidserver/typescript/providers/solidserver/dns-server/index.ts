// https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The IPv4 address of the DNS server to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_server#address DnsServer#address}
  */
  readonly address: string;
  /**
  * A list of network prefixes allowed to query the DNS server (named ACL(s) are not supported using this provider).  Use '!' to negate an entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_server#allow_query DnsServer#allow_query}
  */
  readonly allowQuery?: string[];
  /**
  * A list of network prefixes allowed to query the DNS server for recursion (named ACL(s) are not supported using this provider).  Use '!' to negate an entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_server#allow_recursion DnsServer#allow_recursion}
  */
  readonly allowRecursion?: string[];
  /**
  * A list of network prefixes allowed to query the DNS server for zone transfert (named ACL(s) are not supported using this provider).  Use '!' to negate an entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_server#allow_transfer DnsServer#allow_transfer}
  */
  readonly allowTransfer?: string[];
  /**
  * The class associated to the DNS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_server#class DnsServer#class}
  */
  readonly class?: string;
  /**
  * The class parameters associated to the DNS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_server#class_parameters DnsServer#class_parameters}
  */
  readonly classParameters?: { [key: string]: string };
  /**
  * Custom information about the DNS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_server#comment DnsServer#comment}
  */
  readonly comment?: string;
  /**
  * The forwarding mode of the DNS server (Supported: none, first, only; Default: none).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_server#forward DnsServer#forward}
  */
  readonly forward?: string;
  /**
  * The list of forwarders' IP address to be used by the DNS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_server#forwarders DnsServer#forwarders}
  */
  readonly forwarders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_server#id DnsServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The login to use for enrolling of the DNS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_server#login DnsServer#login}
  */
  readonly login: string;
  /**
  * The name of the DNS server to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_server#name DnsServer#name}
  */
  readonly name: string;
  /**
  * The password to use the enrolling of the DNS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_server#password DnsServer#password}
  */
  readonly password: string;
  /**
  * The recursion mode of the DNS server (Default: true).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_server#recursion DnsServer#recursion}
  */
  readonly recursion?: boolean | cdktf.IResolvable;
  /**
  * The DNS SMART the DNS server must join.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_server#smart DnsServer#smart}
  */
  readonly smart?: string;
  /**
  * The role the DNS server will play within the SMART (Supported: master, slave; Default: slave).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_server#smart_role DnsServer#smart_role}
  */
  readonly smartRole?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_server solidserver_dns_server}
*/
export class DnsServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solidserver_dns_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsServer to import
  * @param importFromId The id of the existing DnsServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solidserver_dns_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_server solidserver_dns_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsServerConfig
  */
  public constructor(scope: Construct, id: string, config: DnsServerConfig) {
    super(scope, id, {
      terraformResourceType: 'solidserver_dns_server',
      terraformGeneratorMetadata: {
        providerName: 'solidserver',
        providerVersion: '1.1.25',
        providerVersionConstraint: '1.1.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._allowQuery = config.allowQuery;
    this._allowRecursion = config.allowRecursion;
    this._allowTransfer = config.allowTransfer;
    this._class = config.class;
    this._classParameters = config.classParameters;
    this._comment = config.comment;
    this._forward = config.forward;
    this._forwarders = config.forwarders;
    this._id = config.id;
    this._login = config.login;
    this._name = config.name;
    this._password = config.password;
    this._recursion = config.recursion;
    this._smart = config.smart;
    this._smartRole = config.smartRole;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // allow_query - computed: false, optional: true, required: false
  private _allowQuery?: string[]; 
  public get allowQuery() {
    return this.getListAttribute('allow_query');
  }
  public set allowQuery(value: string[]) {
    this._allowQuery = value;
  }
  public resetAllowQuery() {
    this._allowQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowQueryInput() {
    return this._allowQuery;
  }

  // allow_recursion - computed: false, optional: true, required: false
  private _allowRecursion?: string[]; 
  public get allowRecursion() {
    return this.getListAttribute('allow_recursion');
  }
  public set allowRecursion(value: string[]) {
    this._allowRecursion = value;
  }
  public resetAllowRecursion() {
    this._allowRecursion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRecursionInput() {
    return this._allowRecursion;
  }

  // allow_transfer - computed: false, optional: true, required: false
  private _allowTransfer?: string[]; 
  public get allowTransfer() {
    return this.getListAttribute('allow_transfer');
  }
  public set allowTransfer(value: string[]) {
    this._allowTransfer = value;
  }
  public resetAllowTransfer() {
    this._allowTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowTransferInput() {
    return this._allowTransfer;
  }

  // class - computed: false, optional: true, required: false
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  public resetClass() {
    this._class = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // class_parameters - computed: false, optional: true, required: false
  private _classParameters?: { [key: string]: string }; 
  public get classParameters() {
    return this.getStringMapAttribute('class_parameters');
  }
  public set classParameters(value: { [key: string]: string }) {
    this._classParameters = value;
  }
  public resetClassParameters() {
    this._classParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classParametersInput() {
    return this._classParameters;
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

  // forward - computed: false, optional: true, required: false
  private _forward?: string; 
  public get forward() {
    return this.getStringAttribute('forward');
  }
  public set forward(value: string) {
    this._forward = value;
  }
  public resetForward() {
    this._forward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward;
  }

  // forwarders - computed: false, optional: true, required: false
  private _forwarders?: string[]; 
  public get forwarders() {
    return this.getListAttribute('forwarders');
  }
  public set forwarders(value: string[]) {
    this._forwarders = value;
  }
  public resetForwarders() {
    this._forwarders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardersInput() {
    return this._forwarders;
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

  // login - computed: false, optional: false, required: true
  private _login?: string; 
  public get login() {
    return this.getStringAttribute('login');
  }
  public set login(value: string) {
    this._login = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // recursion - computed: false, optional: true, required: false
  private _recursion?: boolean | cdktf.IResolvable; 
  public get recursion() {
    return this.getBooleanAttribute('recursion');
  }
  public set recursion(value: boolean | cdktf.IResolvable) {
    this._recursion = value;
  }
  public resetRecursion() {
    this._recursion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursionInput() {
    return this._recursion;
  }

  // smart - computed: false, optional: true, required: false
  private _smart?: string; 
  public get smart() {
    return this.getStringAttribute('smart');
  }
  public set smart(value: string) {
    this._smart = value;
  }
  public resetSmart() {
    this._smart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartInput() {
    return this._smart;
  }

  // smart_role - computed: false, optional: true, required: false
  private _smartRole?: string; 
  public get smartRole() {
    return this.getStringAttribute('smart_role');
  }
  public set smartRole(value: string) {
    this._smartRole = value;
  }
  public resetSmartRole() {
    this._smartRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartRoleInput() {
    return this._smartRole;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      allow_query: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowQuery),
      allow_recursion: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowRecursion),
      allow_transfer: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowTransfer),
      class: cdktf.stringToTerraform(this._class),
      class_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._classParameters),
      comment: cdktf.stringToTerraform(this._comment),
      forward: cdktf.stringToTerraform(this._forward),
      forwarders: cdktf.listMapper(cdktf.stringToTerraform, false)(this._forwarders),
      id: cdktf.stringToTerraform(this._id),
      login: cdktf.stringToTerraform(this._login),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      recursion: cdktf.booleanToTerraform(this._recursion),
      smart: cdktf.stringToTerraform(this._smart),
      smart_role: cdktf.stringToTerraform(this._smartRole),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_query: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowQuery),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allow_recursion: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowRecursion),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allow_transfer: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowTransfer),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      class: {
        value: cdktf.stringToHclTerraform(this._class),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      class_parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._classParameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward: {
        value: cdktf.stringToHclTerraform(this._forward),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forwarders: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._forwarders),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login: {
        value: cdktf.stringToHclTerraform(this._login),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recursion: {
        value: cdktf.booleanToHclTerraform(this._recursion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      smart: {
        value: cdktf.stringToHclTerraform(this._smart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smart_role: {
        value: cdktf.stringToHclTerraform(this._smartRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
