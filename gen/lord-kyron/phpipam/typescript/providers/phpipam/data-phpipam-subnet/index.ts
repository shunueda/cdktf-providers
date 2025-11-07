// https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/subnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPhpipamSubnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/subnet#custom_field_filter DataPhpipamSubnet#custom_field_filter}
  */
  readonly customFieldFilter?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/subnet#description DataPhpipamSubnet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/subnet#description_match DataPhpipamSubnet#description_match}
  */
  readonly descriptionMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/subnet#id DataPhpipamSubnet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/subnet#section_id DataPhpipamSubnet#section_id}
  */
  readonly sectionId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/subnet#subnet_address DataPhpipamSubnet#subnet_address}
  */
  readonly subnetAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/subnet#subnet_id DataPhpipamSubnet#subnet_id}
  */
  readonly subnetId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/subnet#subnet_mask DataPhpipamSubnet#subnet_mask}
  */
  readonly subnetMask?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/subnet phpipam_subnet}
*/
export class DataPhpipamSubnet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "phpipam_subnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPhpipamSubnet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPhpipamSubnet to import
  * @param importFromId The id of the existing DataPhpipamSubnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/subnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPhpipamSubnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "phpipam_subnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/subnet phpipam_subnet} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPhpipamSubnetConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPhpipamSubnetConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'phpipam_subnet',
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
    this._customFieldFilter = config.customFieldFilter;
    this._description = config.description;
    this._descriptionMatch = config.descriptionMatch;
    this._id = config.id;
    this._sectionId = config.sectionId;
    this._subnetAddress = config.subnetAddress;
    this._subnetId = config.subnetId;
    this._subnetMask = config.subnetMask;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_ip_requests - computed: true, optional: false, required: false
  public get allowIpRequests() {
    return this.getBooleanAttribute('allow_ip_requests');
  }

  // create_ptr_records - computed: true, optional: false, required: false
  public get createPtrRecords() {
    return this.getBooleanAttribute('create_ptr_records');
  }

  // custom_field_filter - computed: false, optional: true, required: false
  private _customFieldFilter?: { [key: string]: string }; 
  public get customFieldFilter() {
    return this.getStringMapAttribute('custom_field_filter');
  }
  public set customFieldFilter(value: { [key: string]: string }) {
    this._customFieldFilter = value;
  }
  public resetCustomFieldFilter() {
    this._customFieldFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldFilterInput() {
    return this._customFieldFilter;
  }

  // custom_fields - computed: true, optional: false, required: false
  private _customFields = new cdktf.StringMap(this, "custom_fields");
  public get customFields() {
    return this._customFields;
  }

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

  // description_match - computed: false, optional: true, required: false
  private _descriptionMatch?: string; 
  public get descriptionMatch() {
    return this.getStringAttribute('description_match');
  }
  public set descriptionMatch(value: string) {
    this._descriptionMatch = value;
  }
  public resetDescriptionMatch() {
    this._descriptionMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionMatchInput() {
    return this._descriptionMatch;
  }

  // display_hostnames - computed: true, optional: false, required: false
  public get displayHostnames() {
    return this.getBooleanAttribute('display_hostnames');
  }

  // edit_date - computed: true, optional: false, required: false
  public get editDate() {
    return this.getStringAttribute('edit_date');
  }

  // gateway - computed: true, optional: false, required: false
  private _gateway = new cdktf.StringMap(this, "gateway");
  public get gateway() {
    return this._gateway;
  }

  // gateway_id - computed: true, optional: false, required: false
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }

  // host_discovery_enabled - computed: true, optional: false, required: false
  public get hostDiscoveryEnabled() {
    return this.getBooleanAttribute('host_discovery_enabled');
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

  // include_in_ping - computed: true, optional: false, required: false
  public get includeInPing() {
    return this.getBooleanAttribute('include_in_ping');
  }

  // is_folder - computed: true, optional: false, required: false
  public get isFolder() {
    return this.getBooleanAttribute('is_folder');
  }

  // is_full - computed: true, optional: false, required: false
  public get isFull() {
    return this.getBooleanAttribute('is_full');
  }

  // linked_subnet_id - computed: true, optional: false, required: false
  public get linkedSubnetId() {
    return this.getNumberAttribute('linked_subnet_id');
  }

  // location_id - computed: true, optional: false, required: false
  public get locationId() {
    return this.getNumberAttribute('location_id');
  }

  // master_subnet_id - computed: true, optional: false, required: false
  public get masterSubnetId() {
    return this.getNumberAttribute('master_subnet_id');
  }

  // nameserver_id - computed: true, optional: false, required: false
  public get nameserverId() {
    return this.getNumberAttribute('nameserver_id');
  }

  // nameservers - computed: true, optional: false, required: false
  private _nameservers = new cdktf.StringMap(this, "nameservers");
  public get nameservers() {
    return this._nameservers;
  }

  // parent_subnet_id - computed: true, optional: false, required: false
  public get parentSubnetId() {
    return this.getNumberAttribute('parent_subnet_id');
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getStringAttribute('permissions');
  }

  // resolve_dns - computed: true, optional: false, required: false
  public get resolveDns() {
    return this.getBooleanAttribute('resolve_dns');
  }

  // scan_agent_id - computed: true, optional: false, required: false
  public get scanAgentId() {
    return this.getNumberAttribute('scan_agent_id');
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

  // show_name - computed: true, optional: false, required: false
  public get showName() {
    return this.getBooleanAttribute('show_name');
  }

  // subnet_address - computed: true, optional: true, required: false
  private _subnetAddress?: string; 
  public get subnetAddress() {
    return this.getStringAttribute('subnet_address');
  }
  public set subnetAddress(value: string) {
    this._subnetAddress = value;
  }
  public resetSubnetAddress() {
    this._subnetAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetAddressInput() {
    return this._subnetAddress;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: number; 
  public get subnetId() {
    return this.getNumberAttribute('subnet_id');
  }
  public set subnetId(value: number) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // subnet_mask - computed: true, optional: true, required: false
  private _subnetMask?: number; 
  public get subnetMask() {
    return this.getNumberAttribute('subnet_mask');
  }
  public set subnetMask(value: number) {
    this._subnetMask = value;
  }
  public resetSubnetMask() {
    this._subnetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskInput() {
    return this._subnetMask;
  }

  // utilization_threshold - computed: true, optional: false, required: false
  public get utilizationThreshold() {
    return this.getNumberAttribute('utilization_threshold');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }

  // vrf_id - computed: true, optional: false, required: false
  public get vrfId() {
    return this.getNumberAttribute('vrf_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_field_filter: cdktf.hashMapper(cdktf.stringToTerraform)(this._customFieldFilter),
      description: cdktf.stringToTerraform(this._description),
      description_match: cdktf.stringToTerraform(this._descriptionMatch),
      id: cdktf.stringToTerraform(this._id),
      section_id: cdktf.numberToTerraform(this._sectionId),
      subnet_address: cdktf.stringToTerraform(this._subnetAddress),
      subnet_id: cdktf.numberToTerraform(this._subnetId),
      subnet_mask: cdktf.numberToTerraform(this._subnetMask),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_field_filter: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customFieldFilter),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description_match: {
        value: cdktf.stringToHclTerraform(this._descriptionMatch),
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
      section_id: {
        value: cdktf.numberToHclTerraform(this._sectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subnet_address: {
        value: cdktf.stringToHclTerraform(this._subnetAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.numberToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subnet_mask: {
        value: cdktf.numberToHclTerraform(this._subnetMask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
