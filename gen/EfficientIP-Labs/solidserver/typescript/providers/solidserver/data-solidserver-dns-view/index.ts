// https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/data-sources/dns_view
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolidserverDnsViewConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of DNS server or DNS SMART hosting the DNS view to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/data-sources/dns_view#dnsserver DataSolidserverDnsView#dnsserver}
  */
  readonly dnsserver: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/data-sources/dns_view#id DataSolidserverDnsView#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the DNS view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/data-sources/dns_view#name DataSolidserverDnsView#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/data-sources/dns_view solidserver_dns_view}
*/
export class DataSolidserverDnsView extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solidserver_dns_view";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolidserverDnsView resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolidserverDnsView to import
  * @param importFromId The id of the existing DataSolidserverDnsView that should be imported. Refer to the {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/data-sources/dns_view#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolidserverDnsView to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solidserver_dns_view", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.26/docs/data-sources/dns_view solidserver_dns_view} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolidserverDnsViewConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolidserverDnsViewConfig) {
    super(scope, id, {
      terraformResourceType: 'solidserver_dns_view',
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
    this._dnsserver = config.dnsserver;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_query - computed: true, optional: false, required: false
  public get allowQuery() {
    return this.getListAttribute('allow_query');
  }

  // allow_recursion - computed: true, optional: false, required: false
  public get allowRecursion() {
    return this.getListAttribute('allow_recursion');
  }

  // allow_transfer - computed: true, optional: false, required: false
  public get allowTransfer() {
    return this.getListAttribute('allow_transfer');
  }

  // class - computed: true, optional: false, required: false
  public get class() {
    return this.getStringAttribute('class');
  }

  // class_parameters - computed: true, optional: false, required: false
  private _classParameters = new cdktf.StringMap(this, "class_parameters");
  public get classParameters() {
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

  // forward - computed: true, optional: false, required: false
  public get forward() {
    return this.getStringAttribute('forward');
  }

  // forwarders - computed: true, optional: false, required: false
  public get forwarders() {
    return this.getListAttribute('forwarders');
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

  // match_clients - computed: true, optional: false, required: false
  public get matchClients() {
    return this.getListAttribute('match_clients');
  }

  // match_to - computed: true, optional: false, required: false
  public get matchTo() {
    return this.getListAttribute('match_to');
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
    return this.getStringAttribute('order');
  }

  // recursion - computed: true, optional: false, required: false
  public get recursion() {
    return this.getBooleanAttribute('recursion');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dnsserver: cdktf.stringToTerraform(this._dnsserver),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dnsserver: {
        value: cdktf.stringToHclTerraform(this._dnsserver),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
