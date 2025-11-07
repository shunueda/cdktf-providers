// https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/section
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPhpipamSectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/section#id DataPhpipamSection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/section#name DataPhpipamSection#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/section#section_id DataPhpipamSection#section_id}
  */
  readonly sectionId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/section phpipam_section}
*/
export class DataPhpipamSection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "phpipam_section";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPhpipamSection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPhpipamSection to import
  * @param importFromId The id of the existing DataPhpipamSection that should be imported. Refer to the {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/section#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPhpipamSection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "phpipam_section", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/section phpipam_section} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPhpipamSectionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPhpipamSectionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'phpipam_section',
      terraformGeneratorMetadata: {
        providerName: 'phpipam',
        providerVersion: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._sectionId = config.sectionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_order - computed: true, optional: false, required: false
  public get displayOrder() {
    return this.getNumberAttribute('display_order');
  }

  // dns_resolver_id - computed: true, optional: false, required: false
  public get dnsResolverId() {
    return this.getNumberAttribute('dns_resolver_id');
  }

  // edit_date - computed: true, optional: false, required: false
  public get editDate() {
    return this.getStringAttribute('edit_date');
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

  // master_section_id - computed: true, optional: false, required: false
  public get masterSectionId() {
    return this.getNumberAttribute('master_section_id');
  }

  // name - computed: true, optional: true, required: false
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

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getStringAttribute('permissions');
  }

  // section_id - computed: true, optional: true, required: false
  private _sectionId?: number; 
  public get sectionId() {
    return this.getNumberAttribute('section_id');
  }
  public set sectionId(value: number) {
    this._sectionId = value;
  }
  public resetSectionId() {
    this._sectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionIdInput() {
    return this._sectionId;
  }

  // show_supernet_only - computed: true, optional: false, required: false
  public get showSupernetOnly() {
    return this.getBooleanAttribute('show_supernet_only');
  }

  // show_vlan_in_subnet_listing - computed: true, optional: false, required: false
  public get showVlanInSubnetListing() {
    return this.getBooleanAttribute('show_vlan_in_subnet_listing');
  }

  // show_vrf_in_subnet_listing - computed: true, optional: false, required: false
  public get showVrfInSubnetListing() {
    return this.getBooleanAttribute('show_vrf_in_subnet_listing');
  }

  // strict_mode - computed: true, optional: false, required: false
  public get strictMode() {
    return this.getBooleanAttribute('strict_mode');
  }

  // subnet_ordering - computed: true, optional: false, required: false
  public get subnetOrdering() {
    return this.getStringAttribute('subnet_ordering');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      section_id: cdktf.numberToTerraform(this._sectionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      section_id: {
        value: cdktf.numberToHclTerraform(this._sectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
