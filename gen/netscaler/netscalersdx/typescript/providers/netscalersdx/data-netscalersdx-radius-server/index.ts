// https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/radius_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetscalersdxRadiusServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/radius_server#id DataNetscalersdxRadiusServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of radius server. Minimum length =  1 Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/radius_server#name DataNetscalersdxRadiusServer#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/radius_server netscalersdx_radius_server}
*/
export class DataNetscalersdxRadiusServer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netscalersdx_radius_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetscalersdxRadiusServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetscalersdxRadiusServer to import
  * @param importFromId The id of the existing DataNetscalersdxRadiusServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/radius_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetscalersdxRadiusServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netscalersdx_radius_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/radius_server netscalersdx_radius_server} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetscalersdxRadiusServerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNetscalersdxRadiusServerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netscalersdx_radius_server',
      terraformGeneratorMetadata: {
        providerName: 'netscalersdx',
        providerVersion: '0.7.2',
        providerVersionConstraint: '0.7.2'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accounting - computed: true, optional: false, required: false
  public get accounting() {
    return this.getBooleanAttribute('accounting');
  }

  // address_type - computed: true, optional: false, required: false
  public get addressType() {
    return this.getNumberAttribute('address_type');
  }

  // attribute_type - computed: true, optional: false, required: false
  public get attributeType() {
    return this.getNumberAttribute('attribute_type');
  }

  // auth_timeout - computed: true, optional: false, required: false
  public get authTimeout() {
    return this.getNumberAttribute('auth_timeout');
  }

  // default_authentication_group - computed: true, optional: false, required: false
  public get defaultAuthenticationGroup() {
    return this.getStringAttribute('default_authentication_group');
  }

  // enable_nas_ip - computed: true, optional: false, required: false
  public get enableNasIp() {
    return this.getBooleanAttribute('enable_nas_ip');
  }

  // group_separator - computed: true, optional: false, required: false
  public get groupSeparator() {
    return this.getStringAttribute('group_separator');
  }

  // groups_prefix - computed: true, optional: false, required: false
  public get groupsPrefix() {
    return this.getStringAttribute('groups_prefix');
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

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_attribute_type - computed: true, optional: false, required: false
  public get ipAttributeType() {
    return this.getNumberAttribute('ip_attribute_type');
  }

  // ip_vendor_id - computed: true, optional: false, required: false
  public get ipVendorId() {
    return this.getNumberAttribute('ip_vendor_id');
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

  // nas_id - computed: true, optional: false, required: false
  public get nasId() {
    return this.getStringAttribute('nas_id');
  }

  // pass_encoding - computed: true, optional: false, required: false
  public get passEncoding() {
    return this.getStringAttribute('pass_encoding');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // pwd_attribute_type - computed: true, optional: false, required: false
  public get pwdAttributeType() {
    return this.getNumberAttribute('pwd_attribute_type');
  }

  // pwd_vendor_id - computed: true, optional: false, required: false
  public get pwdVendorId() {
    return this.getNumberAttribute('pwd_vendor_id');
  }

  // radius_key - computed: true, optional: false, required: false
  public get radiusKey() {
    return this.getStringAttribute('radius_key');
  }

  // vendor_id - computed: true, optional: false, required: false
  public get vendorId() {
    return this.getNumberAttribute('vendor_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
