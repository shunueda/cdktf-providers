// https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/dns_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/dns_record#___path___ DnsRecord#___path___}
  */
  readonly path?: string;
  /**
  * The A record to be returend from the DNS hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/dns_record#address DnsRecord#address}
  */
  readonly address?: string;
  /**
  * Name of the Firewall address list to which address must be dynamically added when some request matches the entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/dns_record#address_list DnsRecord#address_list}
  */
  readonly addressList?: string;
  /**
  * Alias name for a domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/dns_record#cname DnsRecord#cname}
  */
  readonly cname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/dns_record#comment DnsRecord#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/dns_record#disabled DnsRecord#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The IP address of a domain name server to which a particular DNS request must be forwarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/dns_record#forward_to DnsRecord#forward_to}
  */
  readonly forwardTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/dns_record#id DnsRecord#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether the record will match requests for subdomains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/dns_record#match_subdomain DnsRecord#match_subdomain}
  */
  readonly matchSubdomain?: boolean | cdktf.IResolvable;
  /**
  * The domain name of the MX server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/dns_record#mx_exchange DnsRecord#mx_exchange}
  */
  readonly mxExchange?: string;
  /**
  * Preference of the particular MX record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/dns_record#mx_preference DnsRecord#mx_preference}
  */
  readonly mxPreference?: number;
  /**
  * The name of the DNS hostname to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/dns_record#name DnsRecord#name}
  */
  readonly name?: string;
  /**
  * Name of the authoritative domain name server for the particular record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/dns_record#ns DnsRecord#ns}
  */
  readonly ns?: string;
  /**
  * DNS regexp. Regexp entries are case sensitive, but since DNS requests are not case sensitive, RouterOS converts DNS names to lowercase, you should write regex only with lowercase letters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/dns_record#regexp DnsRecord#regexp}
  */
  readonly regexp?: string;
  /**
  * The TCP or UDP port on which the service is to be found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/dns_record#srv_port DnsRecord#srv_port}
  */
  readonly srvPort?: number;
  /**
  * Priority of the particular SRV record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/dns_record#srv_priority DnsRecord#srv_priority}
  */
  readonly srvPriority?: number;
  /**
  * The canonical hostname of the machine providing the service ends in a dot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/dns_record#srv_target DnsRecord#srv_target}
  */
  readonly srvTarget?: string;
  /**
  * Weight of the particular SRC record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/dns_record#srv_weight DnsRecord#srv_weight}
  */
  readonly srvWeight?: string;
  /**
  * Textual information about the domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/dns_record#text DnsRecord#text}
  */
  readonly text?: string;
  /**
  * The ttl of the DNS record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/dns_record#ttl DnsRecord#ttl}
  */
  readonly ttl?: string;
  /**
  * Type of the DNS record. Available values are: A, AAAA, CNAME, FWD, MX, NS, NXDOMAIN, SRV, TXT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/dns_record#type DnsRecord#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/dns_record routeros_dns_record}
*/
export class DnsRecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_dns_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsRecord to import
  * @param importFromId The id of the existing DnsRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/dns_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_dns_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/dns_record routeros_dns_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsRecordConfig
  */
  public constructor(scope: Construct, id: string, config: DnsRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_dns_record',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.93.0',
        providerVersionConstraint: '1.93.0'
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
    this._address = config.address;
    this._addressList = config.addressList;
    this._cname = config.cname;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._forwardTo = config.forwardTo;
    this._id = config.id;
    this._matchSubdomain = config.matchSubdomain;
    this._mxExchange = config.mxExchange;
    this._mxPreference = config.mxPreference;
    this._name = config.name;
    this._ns = config.ns;
    this._regexp = config.regexp;
    this._srvPort = config.srvPort;
    this._srvPriority = config.srvPriority;
    this._srvTarget = config.srvTarget;
    this._srvWeight = config.srvWeight;
    this._text = config.text;
    this._ttl = config.ttl;
    this._type = config.type;
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

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // address_list - computed: false, optional: true, required: false
  private _addressList?: string; 
  public get addressList() {
    return this.getStringAttribute('address_list');
  }
  public set addressList(value: string) {
    this._addressList = value;
  }
  public resetAddressList() {
    this._addressList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressListInput() {
    return this._addressList;
  }

  // cname - computed: false, optional: true, required: false
  private _cname?: string; 
  public get cname() {
    return this.getStringAttribute('cname');
  }
  public set cname(value: string) {
    this._cname = value;
  }
  public resetCname() {
    this._cname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameInput() {
    return this._cname;
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

  // dynamic - computed: true, optional: false, required: false
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
  }

  // forward_to - computed: false, optional: true, required: false
  private _forwardTo?: string; 
  public get forwardTo() {
    return this.getStringAttribute('forward_to');
  }
  public set forwardTo(value: string) {
    this._forwardTo = value;
  }
  public resetForwardTo() {
    this._forwardTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardToInput() {
    return this._forwardTo;
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

  // match_subdomain - computed: false, optional: true, required: false
  private _matchSubdomain?: boolean | cdktf.IResolvable; 
  public get matchSubdomain() {
    return this.getBooleanAttribute('match_subdomain');
  }
  public set matchSubdomain(value: boolean | cdktf.IResolvable) {
    this._matchSubdomain = value;
  }
  public resetMatchSubdomain() {
    this._matchSubdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchSubdomainInput() {
    return this._matchSubdomain;
  }

  // mx_exchange - computed: false, optional: true, required: false
  private _mxExchange?: string; 
  public get mxExchange() {
    return this.getStringAttribute('mx_exchange');
  }
  public set mxExchange(value: string) {
    this._mxExchange = value;
  }
  public resetMxExchange() {
    this._mxExchange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mxExchangeInput() {
    return this._mxExchange;
  }

  // mx_preference - computed: true, optional: true, required: false
  private _mxPreference?: number; 
  public get mxPreference() {
    return this.getNumberAttribute('mx_preference');
  }
  public set mxPreference(value: number) {
    this._mxPreference = value;
  }
  public resetMxPreference() {
    this._mxPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mxPreferenceInput() {
    return this._mxPreference;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // ns - computed: false, optional: true, required: false
  private _ns?: string; 
  public get ns() {
    return this.getStringAttribute('ns');
  }
  public set ns(value: string) {
    this._ns = value;
  }
  public resetNs() {
    this._ns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsInput() {
    return this._ns;
  }

  // regexp - computed: false, optional: true, required: false
  private _regexp?: string; 
  public get regexp() {
    return this.getStringAttribute('regexp');
  }
  public set regexp(value: string) {
    this._regexp = value;
  }
  public resetRegexp() {
    this._regexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpInput() {
    return this._regexp;
  }

  // srv_port - computed: true, optional: true, required: false
  private _srvPort?: number; 
  public get srvPort() {
    return this.getNumberAttribute('srv_port');
  }
  public set srvPort(value: number) {
    this._srvPort = value;
  }
  public resetSrvPort() {
    this._srvPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srvPortInput() {
    return this._srvPort;
  }

  // srv_priority - computed: true, optional: true, required: false
  private _srvPriority?: number; 
  public get srvPriority() {
    return this.getNumberAttribute('srv_priority');
  }
  public set srvPriority(value: number) {
    this._srvPriority = value;
  }
  public resetSrvPriority() {
    this._srvPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srvPriorityInput() {
    return this._srvPriority;
  }

  // srv_target - computed: false, optional: true, required: false
  private _srvTarget?: string; 
  public get srvTarget() {
    return this.getStringAttribute('srv_target');
  }
  public set srvTarget(value: string) {
    this._srvTarget = value;
  }
  public resetSrvTarget() {
    this._srvTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srvTargetInput() {
    return this._srvTarget;
  }

  // srv_weight - computed: true, optional: true, required: false
  private _srvWeight?: string; 
  public get srvWeight() {
    return this.getStringAttribute('srv_weight');
  }
  public set srvWeight(value: string) {
    this._srvWeight = value;
  }
  public resetSrvWeight() {
    this._srvWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srvWeightInput() {
    return this._srvWeight;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      address: cdktf.stringToTerraform(this._address),
      address_list: cdktf.stringToTerraform(this._addressList),
      cname: cdktf.stringToTerraform(this._cname),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      forward_to: cdktf.stringToTerraform(this._forwardTo),
      id: cdktf.stringToTerraform(this._id),
      match_subdomain: cdktf.booleanToTerraform(this._matchSubdomain),
      mx_exchange: cdktf.stringToTerraform(this._mxExchange),
      mx_preference: cdktf.numberToTerraform(this._mxPreference),
      name: cdktf.stringToTerraform(this._name),
      ns: cdktf.stringToTerraform(this._ns),
      regexp: cdktf.stringToTerraform(this._regexp),
      srv_port: cdktf.numberToTerraform(this._srvPort),
      srv_priority: cdktf.numberToTerraform(this._srvPriority),
      srv_target: cdktf.stringToTerraform(this._srvTarget),
      srv_weight: cdktf.stringToTerraform(this._srvWeight),
      text: cdktf.stringToTerraform(this._text),
      ttl: cdktf.stringToTerraform(this._ttl),
      type: cdktf.stringToTerraform(this._type),
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
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_list: {
        value: cdktf.stringToHclTerraform(this._addressList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cname: {
        value: cdktf.stringToHclTerraform(this._cname),
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
      forward_to: {
        value: cdktf.stringToHclTerraform(this._forwardTo),
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
      match_subdomain: {
        value: cdktf.booleanToHclTerraform(this._matchSubdomain),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mx_exchange: {
        value: cdktf.stringToHclTerraform(this._mxExchange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mx_preference: {
        value: cdktf.numberToHclTerraform(this._mxPreference),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ns: {
        value: cdktf.stringToHclTerraform(this._ns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regexp: {
        value: cdktf.stringToHclTerraform(this._regexp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srv_port: {
        value: cdktf.numberToHclTerraform(this._srvPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      srv_priority: {
        value: cdktf.numberToHclTerraform(this._srvPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      srv_target: {
        value: cdktf.stringToHclTerraform(this._srvTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srv_weight: {
        value: cdktf.stringToHclTerraform(this._srvWeight),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      text: {
        value: cdktf.stringToHclTerraform(this._text),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.stringToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
