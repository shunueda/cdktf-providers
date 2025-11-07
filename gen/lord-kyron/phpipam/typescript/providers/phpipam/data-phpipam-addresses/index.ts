// https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/addresses
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPhpipamAddressesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/addresses#custom_field_filter DataPhpipamAddresses#custom_field_filter}
  */
  readonly customFieldFilter?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/addresses#description DataPhpipamAddresses#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/addresses#hostname DataPhpipamAddresses#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/addresses#id DataPhpipamAddresses#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/addresses#subnet_id DataPhpipamAddresses#subnet_id}
  */
  readonly subnetId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/addresses phpipam_addresses}
*/
export class DataPhpipamAddresses extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "phpipam_addresses";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPhpipamAddresses resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPhpipamAddresses to import
  * @param importFromId The id of the existing DataPhpipamAddresses that should be imported. Refer to the {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/addresses#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPhpipamAddresses to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "phpipam_addresses", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/addresses phpipam_addresses} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPhpipamAddressesConfig
  */
  public constructor(scope: Construct, id: string, config: DataPhpipamAddressesConfig) {
    super(scope, id, {
      terraformResourceType: 'phpipam_addresses',
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
    this._hostname = config.hostname;
    this._id = config.id;
    this._subnetId = config.subnetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_ids - computed: true, optional: false, required: false
  public get addressIds() {
    return this.getNumberListAttribute('address_ids');
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

  // hostname - computed: false, optional: true, required: false
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

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: number; 
  public get subnetId() {
    return this.getNumberAttribute('subnet_id');
  }
  public set subnetId(value: number) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_field_filter: cdktf.hashMapper(cdktf.stringToTerraform)(this._customFieldFilter),
      description: cdktf.stringToTerraform(this._description),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      subnet_id: cdktf.numberToTerraform(this._subnetId),
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
