// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_internetserviceaddition_entry_portrange
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallInternetserviceadditionEntryPortrangeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_internetserviceaddition_entry_portrange#adom ObjectFirewallInternetserviceadditionEntryPortrange#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_internetserviceaddition_entry_portrange#end_port ObjectFirewallInternetserviceadditionEntryPortrange#end_port}
  */
  readonly endPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_internetserviceaddition_entry_portrange#entry ObjectFirewallInternetserviceadditionEntryPortrange#entry}
  */
  readonly entry: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_internetserviceaddition_entry_portrange#fosid ObjectFirewallInternetserviceadditionEntryPortrange#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_internetserviceaddition_entry_portrange#id ObjectFirewallInternetserviceadditionEntryPortrange#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_internetserviceaddition_entry_portrange#internet_service_addition ObjectFirewallInternetserviceadditionEntryPortrange#internet_service_addition}
  */
  readonly internetServiceAddition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_internetserviceaddition_entry_portrange#scopetype ObjectFirewallInternetserviceadditionEntryPortrange#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_internetserviceaddition_entry_portrange#start_port ObjectFirewallInternetserviceadditionEntryPortrange#start_port}
  */
  readonly startPort?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_internetserviceaddition_entry_portrange fortimanager_object_firewall_internetserviceaddition_entry_portrange}
*/
export class ObjectFirewallInternetserviceadditionEntryPortrange extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_internetserviceaddition_entry_portrange";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallInternetserviceadditionEntryPortrange resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallInternetserviceadditionEntryPortrange to import
  * @param importFromId The id of the existing ObjectFirewallInternetserviceadditionEntryPortrange that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_internetserviceaddition_entry_portrange#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallInternetserviceadditionEntryPortrange to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_internetserviceaddition_entry_portrange", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_internetserviceaddition_entry_portrange fortimanager_object_firewall_internetserviceaddition_entry_portrange} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallInternetserviceadditionEntryPortrangeConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallInternetserviceadditionEntryPortrangeConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_internetserviceaddition_entry_portrange',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._endPort = config.endPort;
    this._entry = config.entry;
    this._fosid = config.fosid;
    this._id = config.id;
    this._internetServiceAddition = config.internetServiceAddition;
    this._scopetype = config.scopetype;
    this._startPort = config.startPort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // end_port - computed: true, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // entry - computed: false, optional: false, required: true
  private _entry?: string; 
  public get entry() {
    return this.getStringAttribute('entry');
  }
  public set entry(value: string) {
    this._entry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // internet_service_addition - computed: false, optional: false, required: true
  private _internetServiceAddition?: string; 
  public get internetServiceAddition() {
    return this.getStringAttribute('internet_service_addition');
  }
  public set internetServiceAddition(value: string) {
    this._internetServiceAddition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceAdditionInput() {
    return this._internetServiceAddition;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // start_port - computed: true, optional: true, required: false
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  public resetStartPort() {
    this._startPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      end_port: cdktf.numberToTerraform(this._endPort),
      entry: cdktf.stringToTerraform(this._entry),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      internet_service_addition: cdktf.stringToTerraform(this._internetServiceAddition),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      start_port: cdktf.numberToTerraform(this._startPort),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_port: {
        value: cdktf.numberToHclTerraform(this._endPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      entry: {
        value: cdktf.stringToHclTerraform(this._entry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service_addition: {
        value: cdktf.stringToHclTerraform(this._internetServiceAddition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_port: {
        value: cdktf.numberToHclTerraform(this._startPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
