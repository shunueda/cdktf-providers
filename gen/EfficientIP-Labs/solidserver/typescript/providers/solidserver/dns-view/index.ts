// https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_view
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsViewConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of network prefixes allowed to query the view (named ACL(s) are not supported using this provider).  Use '!' to negate an entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_view#allow_query DnsView#allow_query}
  */
  readonly allowQuery?: string[];
  /**
  * A list of network prefixes allowed to query the view for recursion (named ACL(s) are not supported using this provider).  Use '!' to negate an entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_view#allow_recursion DnsView#allow_recursion}
  */
  readonly allowRecursion?: string[];
  /**
  * A list of network prefixes allowed to query the view for zone transfert (named ACL(s) are not supported using this provider).  Use '!' to negate an entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_view#allow_transfer DnsView#allow_transfer}
  */
  readonly allowTransfer?: string[];
  /**
  * The class associated to the DNS view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_view#class DnsView#class}
  */
  readonly class?: string;
  /**
  * The class parameters associated to the view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_view#class_parameters DnsView#class_parameters}
  */
  readonly classParameters?: { [key: string]: string };
  /**
  * The name of DNS server or DNS SMART hosting the DNS view to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_view#dnsserver DnsView#dnsserver}
  */
  readonly dnsserver: string;
  /**
  * The forwarding mode of the DNS SMART (Supported: none, first, only; Default: none).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_view#forward DnsView#forward}
  */
  readonly forward?: string;
  /**
  * The IP address list of the forwarder(s) configured to configure on the DNS SMART.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_view#forwarders DnsView#forwarders}
  */
  readonly forwarders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_view#id DnsView#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of network prefixes used to match the clients of the view (named ACL(s) are not supported using this provider).  Use '!' to negate an entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_view#match_clients DnsView#match_clients}
  */
  readonly matchClients?: string[];
  /**
  * A list of network prefixes used to match the traffic to the view (named ACL(s) are not supported using this provider).  Use '!' to negate an entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_view#match_to DnsView#match_to}
  */
  readonly matchTo?: string[];
  /**
  * The name of the DNS view to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_view#name DnsView#name}
  */
  readonly name: string;
  /**
  * The recursion mode of the DNS view (Default: true).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_view#recursion DnsView#recursion}
  */
  readonly recursion?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_view solidserver_dns_view}
*/
export class DnsView extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solidserver_dns_view";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsView resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsView to import
  * @param importFromId The id of the existing DnsView that should be imported. Refer to the {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_view#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsView to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solidserver_dns_view", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_view solidserver_dns_view} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsViewConfig
  */
  public constructor(scope: Construct, id: string, config: DnsViewConfig) {
    super(scope, id, {
      terraformResourceType: 'solidserver_dns_view',
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
    this._allowQuery = config.allowQuery;
    this._allowRecursion = config.allowRecursion;
    this._allowTransfer = config.allowTransfer;
    this._class = config.class;
    this._classParameters = config.classParameters;
    this._dnsserver = config.dnsserver;
    this._forward = config.forward;
    this._forwarders = config.forwarders;
    this._id = config.id;
    this._matchClients = config.matchClients;
    this._matchTo = config.matchTo;
    this._name = config.name;
    this._recursion = config.recursion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // dnsserver - computed: false, optional: false, required: true
  private _dnsserver?: string; 
  public get dnsserver() {
    return this.getStringAttribute('dnsserver');
  }
  public set dnsserver(value: string) {
    this._dnsserver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsserverInput() {
    return this._dnsserver;
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

  // match_clients - computed: false, optional: true, required: false
  private _matchClients?: string[]; 
  public get matchClients() {
    return this.getListAttribute('match_clients');
  }
  public set matchClients(value: string[]) {
    this._matchClients = value;
  }
  public resetMatchClients() {
    this._matchClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchClientsInput() {
    return this._matchClients;
  }

  // match_to - computed: false, optional: true, required: false
  private _matchTo?: string[]; 
  public get matchTo() {
    return this.getListAttribute('match_to');
  }
  public set matchTo(value: string[]) {
    this._matchTo = value;
  }
  public resetMatchTo() {
    this._matchTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchToInput() {
    return this._matchTo;
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

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getNumberAttribute('order');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_query: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowQuery),
      allow_recursion: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowRecursion),
      allow_transfer: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowTransfer),
      class: cdktf.stringToTerraform(this._class),
      class_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._classParameters),
      dnsserver: cdktf.stringToTerraform(this._dnsserver),
      forward: cdktf.stringToTerraform(this._forward),
      forwarders: cdktf.listMapper(cdktf.stringToTerraform, false)(this._forwarders),
      id: cdktf.stringToTerraform(this._id),
      match_clients: cdktf.listMapper(cdktf.stringToTerraform, false)(this._matchClients),
      match_to: cdktf.listMapper(cdktf.stringToTerraform, false)(this._matchTo),
      name: cdktf.stringToTerraform(this._name),
      recursion: cdktf.booleanToTerraform(this._recursion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      dnsserver: {
        value: cdktf.stringToHclTerraform(this._dnsserver),
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
      match_clients: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._matchClients),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      match_to: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._matchTo),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
