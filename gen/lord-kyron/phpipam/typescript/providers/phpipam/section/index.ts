// https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/section
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/section#description Section#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/section#display_order Section#display_order}
  */
  readonly displayOrder?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/section#dns_resolver_id Section#dns_resolver_id}
  */
  readonly dnsResolverId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/section#id Section#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/section#master_section_id Section#master_section_id}
  */
  readonly masterSectionId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/section#name Section#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/section#show_supernet_only Section#show_supernet_only}
  */
  readonly showSupernetOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/section#show_vlan_in_subnet_listing Section#show_vlan_in_subnet_listing}
  */
  readonly showVlanInSubnetListing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/section#show_vrf_in_subnet_listing Section#show_vrf_in_subnet_listing}
  */
  readonly showVrfInSubnetListing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/section#strict_mode Section#strict_mode}
  */
  readonly strictMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/section#subnet_ordering Section#subnet_ordering}
  */
  readonly subnetOrdering?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/section phpipam_section}
*/
export class Section extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "phpipam_section";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Section resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Section to import
  * @param importFromId The id of the existing Section that should be imported. Refer to the {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/section#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Section to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "phpipam_section", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/section phpipam_section} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SectionConfig
  */
  public constructor(scope: Construct, id: string, config: SectionConfig) {
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
    this._description = config.description;
    this._displayOrder = config.displayOrder;
    this._dnsResolverId = config.dnsResolverId;
    this._id = config.id;
    this._masterSectionId = config.masterSectionId;
    this._name = config.name;
    this._showSupernetOnly = config.showSupernetOnly;
    this._showVlanInSubnetListing = config.showVlanInSubnetListing;
    this._showVrfInSubnetListing = config.showVrfInSubnetListing;
    this._strictMode = config.strictMode;
    this._subnetOrdering = config.subnetOrdering;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // display_order - computed: true, optional: true, required: false
  private _displayOrder?: number; 
  public get displayOrder() {
    return this.getNumberAttribute('display_order');
  }
  public set displayOrder(value: number) {
    this._displayOrder = value;
  }
  public resetDisplayOrder() {
    this._displayOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayOrderInput() {
    return this._displayOrder;
  }

  // dns_resolver_id - computed: true, optional: true, required: false
  private _dnsResolverId?: number; 
  public get dnsResolverId() {
    return this.getNumberAttribute('dns_resolver_id');
  }
  public set dnsResolverId(value: number) {
    this._dnsResolverId = value;
  }
  public resetDnsResolverId() {
    this._dnsResolverId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResolverIdInput() {
    return this._dnsResolverId;
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

  // master_section_id - computed: true, optional: true, required: false
  private _masterSectionId?: number; 
  public get masterSectionId() {
    return this.getNumberAttribute('master_section_id');
  }
  public set masterSectionId(value: number) {
    this._masterSectionId = value;
  }
  public resetMasterSectionId() {
    this._masterSectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterSectionIdInput() {
    return this._masterSectionId;
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

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getStringAttribute('permissions');
  }

  // section_id - computed: true, optional: false, required: false
  public get sectionId() {
    return this.getNumberAttribute('section_id');
  }

  // show_supernet_only - computed: true, optional: true, required: false
  private _showSupernetOnly?: boolean | cdktf.IResolvable; 
  public get showSupernetOnly() {
    return this.getBooleanAttribute('show_supernet_only');
  }
  public set showSupernetOnly(value: boolean | cdktf.IResolvable) {
    this._showSupernetOnly = value;
  }
  public resetShowSupernetOnly() {
    this._showSupernetOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showSupernetOnlyInput() {
    return this._showSupernetOnly;
  }

  // show_vlan_in_subnet_listing - computed: true, optional: true, required: false
  private _showVlanInSubnetListing?: boolean | cdktf.IResolvable; 
  public get showVlanInSubnetListing() {
    return this.getBooleanAttribute('show_vlan_in_subnet_listing');
  }
  public set showVlanInSubnetListing(value: boolean | cdktf.IResolvable) {
    this._showVlanInSubnetListing = value;
  }
  public resetShowVlanInSubnetListing() {
    this._showVlanInSubnetListing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showVlanInSubnetListingInput() {
    return this._showVlanInSubnetListing;
  }

  // show_vrf_in_subnet_listing - computed: true, optional: true, required: false
  private _showVrfInSubnetListing?: boolean | cdktf.IResolvable; 
  public get showVrfInSubnetListing() {
    return this.getBooleanAttribute('show_vrf_in_subnet_listing');
  }
  public set showVrfInSubnetListing(value: boolean | cdktf.IResolvable) {
    this._showVrfInSubnetListing = value;
  }
  public resetShowVrfInSubnetListing() {
    this._showVrfInSubnetListing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showVrfInSubnetListingInput() {
    return this._showVrfInSubnetListing;
  }

  // strict_mode - computed: true, optional: true, required: false
  private _strictMode?: boolean | cdktf.IResolvable; 
  public get strictMode() {
    return this.getBooleanAttribute('strict_mode');
  }
  public set strictMode(value: boolean | cdktf.IResolvable) {
    this._strictMode = value;
  }
  public resetStrictMode() {
    this._strictMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictModeInput() {
    return this._strictMode;
  }

  // subnet_ordering - computed: true, optional: true, required: false
  private _subnetOrdering?: string; 
  public get subnetOrdering() {
    return this.getStringAttribute('subnet_ordering');
  }
  public set subnetOrdering(value: string) {
    this._subnetOrdering = value;
  }
  public resetSubnetOrdering() {
    this._subnetOrdering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetOrderingInput() {
    return this._subnetOrdering;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_order: cdktf.numberToTerraform(this._displayOrder),
      dns_resolver_id: cdktf.numberToTerraform(this._dnsResolverId),
      id: cdktf.stringToTerraform(this._id),
      master_section_id: cdktf.numberToTerraform(this._masterSectionId),
      name: cdktf.stringToTerraform(this._name),
      show_supernet_only: cdktf.booleanToTerraform(this._showSupernetOnly),
      show_vlan_in_subnet_listing: cdktf.booleanToTerraform(this._showVlanInSubnetListing),
      show_vrf_in_subnet_listing: cdktf.booleanToTerraform(this._showVrfInSubnetListing),
      strict_mode: cdktf.booleanToTerraform(this._strictMode),
      subnet_ordering: cdktf.stringToTerraform(this._subnetOrdering),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_order: {
        value: cdktf.numberToHclTerraform(this._displayOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_resolver_id: {
        value: cdktf.numberToHclTerraform(this._dnsResolverId),
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
      master_section_id: {
        value: cdktf.numberToHclTerraform(this._masterSectionId),
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
      show_supernet_only: {
        value: cdktf.booleanToHclTerraform(this._showSupernetOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      show_vlan_in_subnet_listing: {
        value: cdktf.booleanToHclTerraform(this._showVlanInSubnetListing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      show_vrf_in_subnet_listing: {
        value: cdktf.booleanToHclTerraform(this._showVrfInSubnetListing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      strict_mode: {
        value: cdktf.booleanToHclTerraform(this._strictMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subnet_ordering: {
        value: cdktf.stringToHclTerraform(this._subnetOrdering),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
