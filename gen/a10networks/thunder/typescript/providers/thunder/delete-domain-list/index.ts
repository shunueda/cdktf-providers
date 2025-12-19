// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/delete_domain_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeleteDomainListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify file to be deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/delete_domain_list#domain_list_name DeleteDomainList#domain_list_name}
  */
  readonly domainListName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/delete_domain_list#id DeleteDomainList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/delete_domain_list thunder_delete_domain_list}
*/
export class DeleteDomainList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_delete_domain_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeleteDomainList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeleteDomainList to import
  * @param importFromId The id of the existing DeleteDomainList that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/delete_domain_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeleteDomainList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_delete_domain_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/delete_domain_list thunder_delete_domain_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeleteDomainListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DeleteDomainListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_delete_domain_list',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domainListName = config.domainListName;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_list_name - computed: false, optional: true, required: false
  private _domainListName?: string; 
  public get domainListName() {
    return this.getStringAttribute('domain_list_name');
  }
  public set domainListName(value: string) {
    this._domainListName = value;
  }
  public resetDomainListName() {
    this._domainListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainListNameInput() {
    return this._domainListName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_list_name: cdktf.stringToTerraform(this._domainListName),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_list_name: {
        value: cdktf.stringToHclTerraform(this._domainListName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
