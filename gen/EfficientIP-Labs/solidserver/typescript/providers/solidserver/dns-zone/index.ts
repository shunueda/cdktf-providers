// https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/dns_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of IP addresses (Format <IP>:<Port>) that will receive zone change notifications in addition to the NS listed in the SOA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/dns_zone#also_notify DnsZone#also_notify}
  */
  readonly alsoNotify?: string[];
  /**
  * The class associated to the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/dns_zone#class DnsZone#class}
  */
  readonly class?: string;
  /**
  * The class parameters associated to the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/dns_zone#class_parameters DnsZone#class_parameters}
  */
  readonly classParameters?: { [key: string]: string };
  /**
  * Automaticaly create PTR records for the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/dns_zone#createptr DnsZone#createptr}
  */
  readonly createptr?: boolean | cdktf.IResolvable;
  /**
  * The name of DNS server or DNS SMART hosting the DNS zone to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/dns_zone#dnsserver DnsZone#dnsserver}
  */
  readonly dnsserver: string;
  /**
  * The name of DNS view hosting the DNS zone to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/dns_zone#dnsview DnsZone#dnsview}
  */
  readonly dnsview?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/dns_zone#id DnsZone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Domain Name to be hosted by the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/dns_zone#name DnsZone#name}
  */
  readonly name: string;
  /**
  * The expected notify behavior (Supported: empty (Inherited), Yes, No, Explicit; Default: empty (Inherited).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/dns_zone#notify DnsZone#notify}
  */
  readonly notify?: string;
  /**
  * The name of a space associated to the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/dns_zone#space DnsZone#space}
  */
  readonly space?: string;
  /**
  * The type of the zone to create (Supported: Master).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/dns_zone#type DnsZone#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/dns_zone solidserver_dns_zone}
*/
export class DnsZone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solidserver_dns_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsZone to import
  * @param importFromId The id of the existing DnsZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/dns_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solidserver_dns_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/resources/dns_zone solidserver_dns_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsZoneConfig
  */
  public constructor(scope: Construct, id: string, config: DnsZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'solidserver_dns_zone',
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
    this._alsoNotify = config.alsoNotify;
    this._class = config.class;
    this._classParameters = config.classParameters;
    this._createptr = config.createptr;
    this._dnsserver = config.dnsserver;
    this._dnsview = config.dnsview;
    this._id = config.id;
    this._name = config.name;
    this._notify = config.notify;
    this._space = config.space;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // also_notify - computed: false, optional: true, required: false
  private _alsoNotify?: string[]; 
  public get alsoNotify() {
    return this.getListAttribute('also_notify');
  }
  public set alsoNotify(value: string[]) {
    this._alsoNotify = value;
  }
  public resetAlsoNotify() {
    this._alsoNotify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alsoNotifyInput() {
    return this._alsoNotify;
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

  // createptr - computed: false, optional: true, required: false
  private _createptr?: boolean | cdktf.IResolvable; 
  public get createptr() {
    return this.getBooleanAttribute('createptr');
  }
  public set createptr(value: boolean | cdktf.IResolvable) {
    this._createptr = value;
  }
  public resetCreateptr() {
    this._createptr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createptrInput() {
    return this._createptr;
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

  // notify - computed: false, optional: true, required: false
  private _notify?: string; 
  public get notify() {
    return this.getStringAttribute('notify');
  }
  public set notify(value: string) {
    this._notify = value;
  }
  public resetNotify() {
    this._notify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyInput() {
    return this._notify;
  }

  // space - computed: false, optional: true, required: false
  private _space?: string; 
  public get space() {
    return this.getStringAttribute('space');
  }
  public set space(value: string) {
    this._space = value;
  }
  public resetSpace() {
    this._space = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceInput() {
    return this._space;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
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
      also_notify: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alsoNotify),
      class: cdktf.stringToTerraform(this._class),
      class_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._classParameters),
      createptr: cdktf.booleanToTerraform(this._createptr),
      dnsserver: cdktf.stringToTerraform(this._dnsserver),
      dnsview: cdktf.stringToTerraform(this._dnsview),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      notify: cdktf.stringToTerraform(this._notify),
      space: cdktf.stringToTerraform(this._space),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      also_notify: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alsoNotify),
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
      createptr: {
        value: cdktf.booleanToHclTerraform(this._createptr),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      notify: {
        value: cdktf.stringToHclTerraform(this._notify),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space: {
        value: cdktf.stringToHclTerraform(this._space),
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
