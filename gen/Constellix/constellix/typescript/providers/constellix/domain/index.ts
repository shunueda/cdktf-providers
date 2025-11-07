// https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/domain#disabled Domain#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/domain#has_geoip Domain#has_geoip}
  */
  readonly hasGeoip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/domain#has_gtd_regions Domain#has_gtd_regions}
  */
  readonly hasGtdRegions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/domain#id Domain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/domain#name Domain#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/domain#nameserver_group Domain#nameserver_group}
  */
  readonly nameserverGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/domain#note Domain#note}
  */
  readonly note?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/domain#soa Domain#soa}
  */
  readonly soa?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/domain#tags Domain#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/domain#template Domain#template}
  */
  readonly template?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/domain#vanity_nameserver Domain#vanity_nameserver}
  */
  readonly vanityNameserver?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/domain constellix_domain}
*/
export class Domain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "constellix_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Domain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Domain to import
  * @param importFromId The id of the existing Domain that should be imported. Refer to the {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Domain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "constellix_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/domain constellix_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DomainConfig
  */
  public constructor(scope: Construct, id: string, config: DomainConfig) {
    super(scope, id, {
      terraformResourceType: 'constellix_domain',
      terraformGeneratorMetadata: {
        providerName: 'constellix',
        providerVersion: '0.4.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disabled = config.disabled;
    this._hasGeoip = config.hasGeoip;
    this._hasGtdRegions = config.hasGtdRegions;
    this._id = config.id;
    this._name = config.name;
    this._nameserverGroup = config.nameserverGroup;
    this._note = config.note;
    this._soa = config.soa;
    this._tags = config.tags;
    this._template = config.template;
    this._vanityNameserver = config.vanityNameserver;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disabled - computed: true, optional: true, required: false
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

  // has_geoip - computed: true, optional: true, required: false
  private _hasGeoip?: boolean | cdktf.IResolvable; 
  public get hasGeoip() {
    return this.getBooleanAttribute('has_geoip');
  }
  public set hasGeoip(value: boolean | cdktf.IResolvable) {
    this._hasGeoip = value;
  }
  public resetHasGeoip() {
    this._hasGeoip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasGeoipInput() {
    return this._hasGeoip;
  }

  // has_gtd_regions - computed: true, optional: true, required: false
  private _hasGtdRegions?: boolean | cdktf.IResolvable; 
  public get hasGtdRegions() {
    return this.getBooleanAttribute('has_gtd_regions');
  }
  public set hasGtdRegions(value: boolean | cdktf.IResolvable) {
    this._hasGtdRegions = value;
  }
  public resetHasGtdRegions() {
    this._hasGtdRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasGtdRegionsInput() {
    return this._hasGtdRegions;
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

  // nameserver_group - computed: true, optional: true, required: false
  private _nameserverGroup?: string; 
  public get nameserverGroup() {
    return this.getStringAttribute('nameserver_group');
  }
  public set nameserverGroup(value: string) {
    this._nameserverGroup = value;
  }
  public resetNameserverGroup() {
    this._nameserverGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserverGroupInput() {
    return this._nameserverGroup;
  }

  // note - computed: true, optional: true, required: false
  private _note?: string; 
  public get note() {
    return this.getStringAttribute('note');
  }
  public set note(value: string) {
    this._note = value;
  }
  public resetNote() {
    this._note = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteInput() {
    return this._note;
  }

  // soa - computed: true, optional: true, required: false
  private _soa?: { [key: string]: string }; 
  public get soa() {
    return this.getStringMapAttribute('soa');
  }
  public set soa(value: { [key: string]: string }) {
    this._soa = value;
  }
  public resetSoa() {
    this._soa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soaInput() {
    return this._soa;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // template - computed: false, optional: true, required: false
  private _template?: number; 
  public get template() {
    return this.getNumberAttribute('template');
  }
  public set template(value: number) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // vanity_nameserver - computed: false, optional: true, required: false
  private _vanityNameserver?: string; 
  public get vanityNameserver() {
    return this.getStringAttribute('vanity_nameserver');
  }
  public set vanityNameserver(value: string) {
    this._vanityNameserver = value;
  }
  public resetVanityNameserver() {
    this._vanityNameserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vanityNameserverInput() {
    return this._vanityNameserver;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disabled: cdktf.booleanToTerraform(this._disabled),
      has_geoip: cdktf.booleanToTerraform(this._hasGeoip),
      has_gtd_regions: cdktf.booleanToTerraform(this._hasGtdRegions),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      nameserver_group: cdktf.stringToTerraform(this._nameserverGroup),
      note: cdktf.stringToTerraform(this._note),
      soa: cdktf.hashMapper(cdktf.stringToTerraform)(this._soa),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      template: cdktf.numberToTerraform(this._template),
      vanity_nameserver: cdktf.stringToTerraform(this._vanityNameserver),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      has_geoip: {
        value: cdktf.booleanToHclTerraform(this._hasGeoip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      has_gtd_regions: {
        value: cdktf.booleanToHclTerraform(this._hasGtdRegions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      nameserver_group: {
        value: cdktf.stringToHclTerraform(this._nameserverGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      note: {
        value: cdktf.stringToHclTerraform(this._note),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      soa: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._soa),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      template: {
        value: cdktf.numberToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vanity_nameserver: {
        value: cdktf.stringToHclTerraform(this._vanityNameserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
