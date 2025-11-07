// https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPhpipamAddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/address#address_id DataPhpipamAddress#address_id}
  */
  readonly addressId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/address#custom_field_filter DataPhpipamAddress#custom_field_filter}
  */
  readonly customFieldFilter?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/address#description DataPhpipamAddress#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/address#hostname DataPhpipamAddress#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/address#id DataPhpipamAddress#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/address#ip_address DataPhpipamAddress#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/address#subnet_id DataPhpipamAddress#subnet_id}
  */
  readonly subnetId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/address phpipam_address}
*/
export class DataPhpipamAddress extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "phpipam_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPhpipamAddress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPhpipamAddress to import
  * @param importFromId The id of the existing DataPhpipamAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPhpipamAddress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "phpipam_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/address phpipam_address} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPhpipamAddressConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPhpipamAddressConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'phpipam_address',
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
    this._addressId = config.addressId;
    this._customFieldFilter = config.customFieldFilter;
    this._description = config.description;
    this._hostname = config.hostname;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._subnetId = config.subnetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_id - computed: true, optional: true, required: false
  private _addressId?: number; 
  public get addressId() {
    return this.getNumberAttribute('address_id');
  }
  public set addressId(value: number) {
    this._addressId = value;
  }
  public resetAddressId() {
    this._addressId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressIdInput() {
    return this._addressId;
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

  // device_id - computed: true, optional: false, required: false
  public get deviceId() {
    return this.getNumberAttribute('device_id');
  }

  // edit_date - computed: true, optional: false, required: false
  public get editDate() {
    return this.getStringAttribute('edit_date');
  }

  // exclude_ping - computed: true, optional: false, required: false
  public get excludePing() {
    return this.getBooleanAttribute('exclude_ping');
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // is_gateway - computed: true, optional: false, required: false
  public get isGateway() {
    return this.getBooleanAttribute('is_gateway');
  }

  // last_seen - computed: true, optional: false, required: false
  public get lastSeen() {
    return this.getStringAttribute('last_seen');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // note - computed: true, optional: false, required: false
  public get note() {
    return this.getStringAttribute('note');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // ptr_record_id - computed: true, optional: false, required: false
  public get ptrRecordId() {
    return this.getNumberAttribute('ptr_record_id');
  }

  // skip_ptr_record - computed: true, optional: false, required: false
  public get skipPtrRecord() {
    return this.getBooleanAttribute('skip_ptr_record');
  }

  // state_tag_id - computed: true, optional: false, required: false
  public get stateTagId() {
    return this.getNumberAttribute('state_tag_id');
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

  // switch_port_label - computed: true, optional: false, required: false
  public get switchPortLabel() {
    return this.getStringAttribute('switch_port_label');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_id: cdktf.numberToTerraform(this._addressId),
      custom_field_filter: cdktf.hashMapper(cdktf.stringToTerraform)(this._customFieldFilter),
      description: cdktf.stringToTerraform(this._description),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      subnet_id: cdktf.numberToTerraform(this._subnetId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_id: {
        value: cdktf.numberToHclTerraform(this._addressId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
