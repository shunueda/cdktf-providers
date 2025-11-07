// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of administrators for the domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/domain#admins Domain#admins}
  */
  readonly admins: string[];
  /**
  * To allow user creation and management in the domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/domain#allow_user_management Domain#allow_user_management}
  */
  readonly allowUserManagement?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/domain#id Domain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User meta data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/domain#meta_data Domain#meta_data}
  */
  readonly metaData?: { [key: string]: string };
  /**
  * Name of the CM domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/domain#name Domain#name}
  */
  readonly name: string;
  /**
  * ID or URI of the parent domain's CA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/domain#parent_ca_id Domain#parent_ca_id}
  */
  readonly parentCaId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/domain ciphertrust_domain}
*/
export class Domain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Domain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Domain to import
  * @param importFromId The id of the existing Domain that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Domain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/domain ciphertrust_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DomainConfig
  */
  public constructor(scope: Construct, id: string, config: DomainConfig) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_domain',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._admins = config.admins;
    this._allowUserManagement = config.allowUserManagement;
    this._id = config.id;
    this._metaData = config.metaData;
    this._name = config.name;
    this._parentCaId = config.parentCaId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admins - computed: false, optional: false, required: true
  private _admins?: string[]; 
  public get admins() {
    return this.getListAttribute('admins');
  }
  public set admins(value: string[]) {
    this._admins = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminsInput() {
    return this._admins;
  }

  // allow_user_management - computed: false, optional: true, required: false
  private _allowUserManagement?: boolean | cdktf.IResolvable; 
  public get allowUserManagement() {
    return this.getBooleanAttribute('allow_user_management');
  }
  public set allowUserManagement(value: boolean | cdktf.IResolvable) {
    this._allowUserManagement = value;
  }
  public resetAllowUserManagement() {
    this._allowUserManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUserManagementInput() {
    return this._allowUserManagement;
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

  // meta_data - computed: false, optional: true, required: false
  private _metaData?: { [key: string]: string }; 
  public get metaData() {
    return this.getStringMapAttribute('meta_data');
  }
  public set metaData(value: { [key: string]: string }) {
    this._metaData = value;
  }
  public resetMetaData() {
    this._metaData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaDataInput() {
    return this._metaData;
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

  // parent_ca_id - computed: false, optional: true, required: false
  private _parentCaId?: string; 
  public get parentCaId() {
    return this.getStringAttribute('parent_ca_id');
  }
  public set parentCaId(value: string) {
    this._parentCaId = value;
  }
  public resetParentCaId() {
    this._parentCaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentCaIdInput() {
    return this._parentCaId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admins: cdktf.listMapper(cdktf.stringToTerraform, false)(this._admins),
      allow_user_management: cdktf.booleanToTerraform(this._allowUserManagement),
      id: cdktf.stringToTerraform(this._id),
      meta_data: cdktf.hashMapper(cdktf.stringToTerraform)(this._metaData),
      name: cdktf.stringToTerraform(this._name),
      parent_ca_id: cdktf.stringToTerraform(this._parentCaId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admins: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._admins),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allow_user_management: {
        value: cdktf.booleanToHclTerraform(this._allowUserManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta_data: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metaData),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_ca_id: {
        value: cdktf.stringToHclTerraform(this._parentCaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
