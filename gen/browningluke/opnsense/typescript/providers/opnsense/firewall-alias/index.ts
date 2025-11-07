// https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_alias
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallAliasConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set of category IDs to apply. Defaults to `[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_alias#categories FirewallAlias#categories}
  */
  readonly categories?: string[];
  /**
  * The content of the alias. Enter ISO 3166-1 country codes when `type = "geoip"` (e.g. `["CA", "FR"]`). Enter `__<int>_network`, or alias when `type = "networkgroup"` (e.g. `["__wan_network", "otheralias"]`). Enter OpenVPN group when `type = "authgroup"` (e.g. `["admins"]`). Set to `[]` when `type = "external"`. Defaults to `[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_alias#content FirewallAlias#content}
  */
  readonly content?: string[];
  /**
  * Optional description here for your reference (not parsed).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_alias#description FirewallAlias#description}
  */
  readonly description?: string;
  /**
  * Enable this firewall alias. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_alias#enabled FirewallAlias#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Choose on which interface this alias applies. Only applies (and must be set) when `type = "dynipv6host"`. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_alias#interface FirewallAlias#interface}
  */
  readonly interface?: string;
  /**
  * Select the Internet Protocol version this alias applies to. Available values: `IPv4`, `IPv6`. Only applies when `type = "asn"`, `type = "geoip"`, or `type = "external"`. Defaults to `["IPv4"]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_alias#ip_protocol FirewallAlias#ip_protocol}
  */
  readonly ipProtocol?: string[];
  /**
  * The name must start with a letter or single underscore, be less than 32 characters and only consist of alphanumeric characters or underscores. Aliases can be nested using this name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_alias#name FirewallAlias#name}
  */
  readonly name: string;
  /**
  * Whether to maintain a set of counters for each table entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_alias#stats FirewallAlias#stats}
  */
  readonly stats?: boolean | cdktf.IResolvable;
  /**
  * The type of alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_alias#type FirewallAlias#type}
  */
  readonly type: string;
  /**
  * The frequency that the list will be refreshed, in days (e.g. for 30 hours, enter `1.25`). Only applies (and must be set) when `type = "urltable"`. Defaults to `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_alias#update_freq FirewallAlias#update_freq}
  */
  readonly updateFreq?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_alias opnsense_firewall_alias}
*/
export class FirewallAlias extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opnsense_firewall_alias";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallAlias resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallAlias to import
  * @param importFromId The id of the existing FirewallAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_alias#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallAlias to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opnsense_firewall_alias", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/firewall_alias opnsense_firewall_alias} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallAliasConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallAliasConfig) {
    super(scope, id, {
      terraformResourceType: 'opnsense_firewall_alias',
      terraformGeneratorMetadata: {
        providerName: 'opnsense',
        providerVersion: '0.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._categories = config.categories;
    this._content = config.content;
    this._description = config.description;
    this._enabled = config.enabled;
    this._interface = config.interface;
    this._ipProtocol = config.ipProtocol;
    this._name = config.name;
    this._stats = config.stats;
    this._type = config.type;
    this._updateFreq = config.updateFreq;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // categories - computed: true, optional: true, required: false
  private _categories?: string[]; 
  public get categories() {
    return cdktf.Fn.tolist(this.getListAttribute('categories'));
  }
  public set categories(value: string[]) {
    this._categories = value;
  }
  public resetCategories() {
    this._categories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories;
  }

  // content - computed: true, optional: true, required: false
  private _content?: string[]; 
  public get content() {
    return cdktf.Fn.tolist(this.getListAttribute('content'));
  }
  public set content(value: string[]) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface - computed: true, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ip_protocol - computed: true, optional: true, required: false
  private _ipProtocol?: string[]; 
  public get ipProtocol() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_protocol'));
  }
  public set ipProtocol(value: string[]) {
    this._ipProtocol = value;
  }
  public resetIpProtocol() {
    this._ipProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
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

  // stats - computed: true, optional: true, required: false
  private _stats?: boolean | cdktf.IResolvable; 
  public get stats() {
    return this.getBooleanAttribute('stats');
  }
  public set stats(value: boolean | cdktf.IResolvable) {
    this._stats = value;
  }
  public resetStats() {
    this._stats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats;
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

  // update_freq - computed: true, optional: true, required: false
  private _updateFreq?: number; 
  public get updateFreq() {
    return this.getNumberAttribute('update_freq');
  }
  public set updateFreq(value: number) {
    this._updateFreq = value;
  }
  public resetUpdateFreq() {
    this._updateFreq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateFreqInput() {
    return this._updateFreq;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._categories),
      content: cdktf.listMapper(cdktf.stringToTerraform, false)(this._content),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      interface: cdktf.stringToTerraform(this._interface),
      ip_protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipProtocol),
      name: cdktf.stringToTerraform(this._name),
      stats: cdktf.booleanToTerraform(this._stats),
      type: cdktf.stringToTerraform(this._type),
      update_freq: cdktf.numberToTerraform(this._updateFreq),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._categories),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      content: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._content),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_protocol: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipProtocol),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: cdktf.booleanToHclTerraform(this._stats),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_freq: {
        value: cdktf.numberToHclTerraform(this._updateFreq),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
