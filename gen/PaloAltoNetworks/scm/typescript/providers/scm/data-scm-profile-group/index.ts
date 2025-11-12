// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/profile_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmProfileGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID of the profile group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/profile_group#id DataScmProfileGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The name of the profile group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/profile_group#name DataScmProfileGroup#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/profile_group scm_profile_group}
*/
export class DataScmProfileGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_profile_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmProfileGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmProfileGroup to import
  * @param importFromId The id of the existing DataScmProfileGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/profile_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmProfileGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_profile_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/profile_group scm_profile_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmProfileGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataScmProfileGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_profile_group',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.4',
        providerVersionConstraint: '1.0.4'
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

  // ai_security - computed: true, optional: false, required: false
  public get aiSecurity() {
    return this.getListAttribute('ai_security');
  }

  // data_filtering - computed: true, optional: false, required: false
  public get dataFiltering() {
    return this.getListAttribute('data_filtering');
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // dns_security - computed: true, optional: false, required: false
  public get dnsSecurity() {
    return this.getListAttribute('dns_security');
  }

  // file_blocking - computed: true, optional: false, required: false
  public get fileBlocking() {
    return this.getListAttribute('file_blocking');
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // saas_security - computed: true, optional: false, required: false
  public get saasSecurity() {
    return this.getListAttribute('saas_security');
  }

  // snippet - computed: true, optional: false, required: false
  public get snippet() {
    return this.getStringAttribute('snippet');
  }

  // spyware - computed: true, optional: false, required: false
  public get spyware() {
    return this.getListAttribute('spyware');
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // url_filtering - computed: true, optional: false, required: false
  public get urlFiltering() {
    return this.getListAttribute('url_filtering');
  }

  // virus_and_wildfire_analysis - computed: true, optional: false, required: false
  public get virusAndWildfireAnalysis() {
    return this.getListAttribute('virus_and_wildfire_analysis');
  }

  // vulnerability - computed: true, optional: false, required: false
  public get vulnerability() {
    return this.getListAttribute('vulnerability');
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
