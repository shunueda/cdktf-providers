// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetserviceextension_disableentry_ip6range
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallInternetserviceextensionDisableentryIp6RangeAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetserviceextension_disableentry_ip6range#adom ObjectFirewallInternetserviceextensionDisableentryIp6RangeA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetserviceextension_disableentry_ip6range#disable_entry ObjectFirewallInternetserviceextensionDisableentryIp6RangeA#disable_entry}
  */
  readonly disableEntry: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetserviceextension_disableentry_ip6range#end_ip6 ObjectFirewallInternetserviceextensionDisableentryIp6RangeA#end_ip6}
  */
  readonly endIp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetserviceextension_disableentry_ip6range#fosid ObjectFirewallInternetserviceextensionDisableentryIp6RangeA#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetserviceextension_disableentry_ip6range#id ObjectFirewallInternetserviceextensionDisableentryIp6RangeA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetserviceextension_disableentry_ip6range#internet_service_extension ObjectFirewallInternetserviceextensionDisableentryIp6RangeA#internet_service_extension}
  */
  readonly internetServiceExtension: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetserviceextension_disableentry_ip6range#scopetype ObjectFirewallInternetserviceextensionDisableentryIp6RangeA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetserviceextension_disableentry_ip6range#start_ip6 ObjectFirewallInternetserviceextensionDisableentryIp6RangeA#start_ip6}
  */
  readonly startIp6?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetserviceextension_disableentry_ip6range fortimanager_object_firewall_internetserviceextension_disableentry_ip6range}
*/
export class ObjectFirewallInternetserviceextensionDisableentryIp6RangeA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_internetserviceextension_disableentry_ip6range";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallInternetserviceextensionDisableentryIp6RangeA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallInternetserviceextensionDisableentryIp6RangeA to import
  * @param importFromId The id of the existing ObjectFirewallInternetserviceextensionDisableentryIp6RangeA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetserviceextension_disableentry_ip6range#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallInternetserviceextensionDisableentryIp6RangeA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_internetserviceextension_disableentry_ip6range", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_internetserviceextension_disableentry_ip6range fortimanager_object_firewall_internetserviceextension_disableentry_ip6range} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallInternetserviceextensionDisableentryIp6RangeAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallInternetserviceextensionDisableentryIp6RangeAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_internetserviceextension_disableentry_ip6range',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
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
    this._disableEntry = config.disableEntry;
    this._endIp6 = config.endIp6;
    this._fosid = config.fosid;
    this._id = config.id;
    this._internetServiceExtension = config.internetServiceExtension;
    this._scopetype = config.scopetype;
    this._startIp6 = config.startIp6;
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

  // disable_entry - computed: false, optional: false, required: true
  private _disableEntry?: string; 
  public get disableEntry() {
    return this.getStringAttribute('disable_entry');
  }
  public set disableEntry(value: string) {
    this._disableEntry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disableEntryInput() {
    return this._disableEntry;
  }

  // end_ip6 - computed: true, optional: true, required: false
  private _endIp6?: string; 
  public get endIp6() {
    return this.getStringAttribute('end_ip6');
  }
  public set endIp6(value: string) {
    this._endIp6 = value;
  }
  public resetEndIp6() {
    this._endIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIp6Input() {
    return this._endIp6;
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

  // internet_service_extension - computed: false, optional: false, required: true
  private _internetServiceExtension?: string; 
  public get internetServiceExtension() {
    return this.getStringAttribute('internet_service_extension');
  }
  public set internetServiceExtension(value: string) {
    this._internetServiceExtension = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceExtensionInput() {
    return this._internetServiceExtension;
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

  // start_ip6 - computed: true, optional: true, required: false
  private _startIp6?: string; 
  public get startIp6() {
    return this.getStringAttribute('start_ip6');
  }
  public set startIp6(value: string) {
    this._startIp6 = value;
  }
  public resetStartIp6() {
    this._startIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIp6Input() {
    return this._startIp6;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      disable_entry: cdktf.stringToTerraform(this._disableEntry),
      end_ip6: cdktf.stringToTerraform(this._endIp6),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      internet_service_extension: cdktf.stringToTerraform(this._internetServiceExtension),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      start_ip6: cdktf.stringToTerraform(this._startIp6),
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
      disable_entry: {
        value: cdktf.stringToHclTerraform(this._disableEntry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_ip6: {
        value: cdktf.stringToHclTerraform(this._endIp6),
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
      internet_service_extension: {
        value: cdktf.stringToHclTerraform(this._internetServiceExtension),
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
      start_ip6: {
        value: cdktf.stringToHclTerraform(this._startIp6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
