// https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/dns_forward_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsForwardZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * The class associated to the forward zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/dns_forward_zone#class DnsForwardZone#class}
  */
  readonly class?: string;
  /**
  * The class parameters associated to the forward zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/dns_forward_zone#class_parameters DnsForwardZone#class_parameters}
  */
  readonly classParameters?: { [key: string]: string };
  /**
  * The managed SMART DNS server name, or DNS server name hosting the forward zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/dns_forward_zone#dnsserver DnsForwardZone#dnsserver}
  */
  readonly dnsserver: string;
  /**
  * The DNS view name hosting the forward zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/dns_forward_zone#dnsview DnsForwardZone#dnsview}
  */
  readonly dnsview?: string;
  /**
  * The forwarding mode of the forward zone (Supported: only, first; Default: only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/dns_forward_zone#forward DnsForwardZone#forward}
  */
  readonly forward?: string;
  /**
  * The IP address list of the forwarder(s) to use for the forward zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/dns_forward_zone#forwarders DnsForwardZone#forwarders}
  */
  readonly forwarders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/dns_forward_zone#id DnsForwardZone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Domain Name served by the forward zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/dns_forward_zone#name DnsForwardZone#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/dns_forward_zone solidserver_dns_forward_zone}
*/
export class DnsForwardZone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solidserver_dns_forward_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsForwardZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsForwardZone to import
  * @param importFromId The id of the existing DnsForwardZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/dns_forward_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsForwardZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solidserver_dns_forward_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/dns_forward_zone solidserver_dns_forward_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsForwardZoneConfig
  */
  public constructor(scope: Construct, id: string, config: DnsForwardZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'solidserver_dns_forward_zone',
      terraformGeneratorMetadata: {
        providerName: 'solidserver',
        providerVersion: '1.1.26',
        providerVersionConstraint: '1.1.26'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._class = config.class;
    this._classParameters = config.classParameters;
    this._dnsserver = config.dnsserver;
    this._dnsview = config.dnsview;
    this._forward = config.forward;
    this._forwarders = config.forwarders;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // dnsview - computed: false, optional: true, required: false
  private _dnsview?: string; 
  public get dnsview() {
    return this.getStringAttribute('dnsview');
  }
  public set dnsview(value: string) {
    this._dnsview = value;
  }
  public resetDnsview() {
    this._dnsview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsviewInput() {
    return this._dnsview;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      class: cdktf.stringToTerraform(this._class),
      class_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._classParameters),
      dnsserver: cdktf.stringToTerraform(this._dnsserver),
      dnsview: cdktf.stringToTerraform(this._dnsview),
      forward: cdktf.stringToTerraform(this._forward),
      forwarders: cdktf.listMapper(cdktf.stringToTerraform, false)(this._forwarders),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      dnsview: {
        value: cdktf.stringToHclTerraform(this._dnsview),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
