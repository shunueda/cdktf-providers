// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkeylessTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/target#id DataAkeylessTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/target#name DataAkeylessTarget#name}
  */
  readonly name: string;
  /**
  * Include all target versions in reply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/target#show_versions DataAkeylessTarget#show_versions}
  */
  readonly showVersions?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/target akeyless_target}
*/
export class DataAkeylessTarget extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkeylessTarget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkeylessTarget to import
  * @param importFromId The id of the existing DataAkeylessTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkeylessTarget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/target akeyless_target} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkeylessTargetConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkeylessTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_target',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1',
        providerVersionConstraint: '1.11.1'
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
    this._showVersions = config.showVersions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_permissions - computed: true, optional: false, required: false
  public get clientPermissions() {
    return cdktf.Fn.tolist(this.getListAttribute('client_permissions'));
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // last_version - computed: true, optional: false, required: false
  public get lastVersion() {
    return this.getNumberAttribute('last_version');
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

  // protection_key_name - computed: true, optional: false, required: false
  public get protectionKeyName() {
    return this.getStringAttribute('protection_key_name');
  }

  // show_versions - computed: false, optional: true, required: false
  private _showVersions?: boolean | cdktf.IResolvable; 
  public get showVersions() {
    return this.getBooleanAttribute('show_versions');
  }
  public set showVersions(value: boolean | cdktf.IResolvable) {
    this._showVersions = value;
  }
  public resetShowVersions() {
    this._showVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showVersionsInput() {
    return this._showVersions;
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getNumberAttribute('target_id');
  }

  // target_items_assoc - computed: true, optional: false, required: false
  public get targetItemsAssoc() {
    return this.getStringAttribute('target_items_assoc');
  }

  // target_name - computed: true, optional: false, required: false
  public get targetName() {
    return this.getStringAttribute('target_name');
  }

  // target_type - computed: true, optional: false, required: false
  public get targetType() {
    return this.getStringAttribute('target_type');
  }

  // target_versions - computed: true, optional: false, required: false
  public get targetVersions() {
    return this.getStringAttribute('target_versions');
  }

  // with_customer_fragment - computed: true, optional: false, required: false
  public get withCustomerFragment() {
    return this.getBooleanAttribute('with_customer_fragment');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      show_versions: cdktf.booleanToTerraform(this._showVersions),
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
      show_versions: {
        value: cdktf.booleanToHclTerraform(this._showVersions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
