// https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/data-sources/authors
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBridgecrewAuthorsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Full Repo Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/data-sources/authors#fullreponame DataBridgecrewAuthors#fullreponame}
  */
  readonly fullreponame: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/data-sources/authors#id DataBridgecrewAuthors#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Repository Source Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/data-sources/authors#sourcetype DataBridgecrewAuthors#sourcetype}
  */
  readonly sourcetype: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/data-sources/authors bridgecrew_authors}
*/
export class DataBridgecrewAuthors extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bridgecrew_authors";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBridgecrewAuthors resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBridgecrewAuthors to import
  * @param importFromId The id of the existing DataBridgecrewAuthors that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/data-sources/authors#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBridgecrewAuthors to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bridgecrew_authors", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/data-sources/authors bridgecrew_authors} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBridgecrewAuthorsConfig
  */
  public constructor(scope: Construct, id: string, config: DataBridgecrewAuthorsConfig) {
    super(scope, id, {
      terraformResourceType: 'bridgecrew_authors',
      terraformGeneratorMetadata: {
        providerName: 'bridgecrew',
        providerVersion: '0.3.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fullreponame = config.fullreponame;
    this._id = config.id;
    this._sourcetype = config.sourcetype;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authors - computed: true, optional: false, required: false
  public get authors() {
    return this.getListAttribute('authors');
  }

  // fullreponame - computed: false, optional: false, required: true
  private _fullreponame?: string; 
  public get fullreponame() {
    return this.getStringAttribute('fullreponame');
  }
  public set fullreponame(value: string) {
    this._fullreponame = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fullreponameInput() {
    return this._fullreponame;
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

  // sourcetype - computed: false, optional: false, required: true
  private _sourcetype?: string; 
  public get sourcetype() {
    return this.getStringAttribute('sourcetype');
  }
  public set sourcetype(value: string) {
    this._sourcetype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcetypeInput() {
    return this._sourcetype;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fullreponame: cdktf.stringToTerraform(this._fullreponame),
      id: cdktf.stringToTerraform(this._id),
      sourcetype: cdktf.stringToTerraform(this._sourcetype),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fullreponame: {
        value: cdktf.stringToHclTerraform(this._fullreponame),
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
      sourcetype: {
        value: cdktf.stringToHclTerraform(this._sourcetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
