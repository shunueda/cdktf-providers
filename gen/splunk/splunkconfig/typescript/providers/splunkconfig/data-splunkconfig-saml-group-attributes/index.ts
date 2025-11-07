// https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/saml_group_attributes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSplunkconfigSamlGroupAttributesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/saml_group_attributes#id DataSplunkconfigSamlGroupAttributes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the SAML group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/saml_group_attributes#saml_group_name DataSplunkconfigSamlGroupAttributes#saml_group_name}
  */
  readonly samlGroupName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/saml_group_attributes splunkconfig_saml_group_attributes}
*/
export class DataSplunkconfigSamlGroupAttributes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "splunkconfig_saml_group_attributes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSplunkconfigSamlGroupAttributes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSplunkconfigSamlGroupAttributes to import
  * @param importFromId The id of the existing DataSplunkconfigSamlGroupAttributes that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/saml_group_attributes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSplunkconfigSamlGroupAttributes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "splunkconfig_saml_group_attributes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/saml_group_attributes splunkconfig_saml_group_attributes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSplunkconfigSamlGroupAttributesConfig
  */
  public constructor(scope: Construct, id: string, config: DataSplunkconfigSamlGroupAttributesConfig) {
    super(scope, id, {
      terraformResourceType: 'splunkconfig_saml_group_attributes',
      terraformGeneratorMetadata: {
        providerName: 'splunkconfig',
        providerVersion: '1.7.4'
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
    this._samlGroupName = config.samlGroupName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return this.getListAttribute('roles');
  }

  // saml_group_name - computed: false, optional: false, required: true
  private _samlGroupName?: string; 
  public get samlGroupName() {
    return this.getStringAttribute('saml_group_name');
  }
  public set samlGroupName(value: string) {
    this._samlGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samlGroupNameInput() {
    return this._samlGroupName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      saml_group_name: cdktf.stringToTerraform(this._samlGroupName),
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
      saml_group_name: {
        value: cdktf.stringToHclTerraform(this._samlGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
