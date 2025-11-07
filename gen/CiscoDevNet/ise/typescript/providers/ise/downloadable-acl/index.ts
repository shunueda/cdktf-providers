// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/downloadable_acl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DownloadableAclConfig extends cdktf.TerraformMetaArguments {
  /**
  * The DACL content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/downloadable_acl#dacl DownloadableAcl#dacl}
  */
  readonly dacl: string;
  /**
  * The type of ACL
  *   - Choices: `IPV4`, `IPV6`, `IP_AGNOSTIC`
  *   - Default value: `IPV4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/downloadable_acl#dacl_type DownloadableAcl#dacl_type}
  */
  readonly daclType?: string;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/downloadable_acl#description DownloadableAcl#description}
  */
  readonly description?: string;
  /**
  * The name of the downloadable ACL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/downloadable_acl#name DownloadableAcl#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/downloadable_acl ise_downloadable_acl}
*/
export class DownloadableAcl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_downloadable_acl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DownloadableAcl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DownloadableAcl to import
  * @param importFromId The id of the existing DownloadableAcl that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/downloadable_acl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DownloadableAcl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_downloadable_acl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/downloadable_acl ise_downloadable_acl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DownloadableAclConfig
  */
  public constructor(scope: Construct, id: string, config: DownloadableAclConfig) {
    super(scope, id, {
      terraformResourceType: 'ise_downloadable_acl',
      terraformGeneratorMetadata: {
        providerName: 'ise',
        providerVersion: '0.2.12'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dacl = config.dacl;
    this._daclType = config.daclType;
    this._description = config.description;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dacl - computed: false, optional: false, required: true
  private _dacl?: string; 
  public get dacl() {
    return this.getStringAttribute('dacl');
  }
  public set dacl(value: string) {
    this._dacl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daclInput() {
    return this._dacl;
  }

  // dacl_type - computed: true, optional: true, required: false
  private _daclType?: string; 
  public get daclType() {
    return this.getStringAttribute('dacl_type');
  }
  public set daclType(value: string) {
    this._daclType = value;
  }
  public resetDaclType() {
    this._daclType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daclTypeInput() {
    return this._daclType;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dacl: cdktf.stringToTerraform(this._dacl),
      dacl_type: cdktf.stringToTerraform(this._daclType),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dacl: {
        value: cdktf.stringToHclTerraform(this._dacl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dacl_type: {
        value: cdktf.stringToHclTerraform(this._daclType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
