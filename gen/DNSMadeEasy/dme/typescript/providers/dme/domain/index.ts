// https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/domain#created Domain#created}
  */
  readonly created?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/domain#folder_id Domain#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/domain#gtd_enabled Domain#gtd_enabled}
  */
  readonly gtdEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/domain#id Domain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/domain#name Domain#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/domain#soa_id Domain#soa_id}
  */
  readonly soaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/domain#template_id Domain#template_id}
  */
  readonly templateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/domain#transfer_acl_id Domain#transfer_acl_id}
  */
  readonly transferAclId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/domain#updated Domain#updated}
  */
  readonly updated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/domain#vanity_id Domain#vanity_id}
  */
  readonly vanityId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/domain dme_domain}
*/
export class Domain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dme_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Domain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Domain to import
  * @param importFromId The id of the existing Domain that should be imported. Refer to the {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Domain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dme_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/domain dme_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DomainConfig
  */
  public constructor(scope: Construct, id: string, config: DomainConfig) {
    super(scope, id, {
      terraformResourceType: 'dme_domain',
      terraformGeneratorMetadata: {
        providerName: 'dme',
        providerVersion: '1.0.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._created = config.created;
    this._folderId = config.folderId;
    this._gtdEnabled = config.gtdEnabled;
    this._id = config.id;
    this._name = config.name;
    this._soaId = config.soaId;
    this._templateId = config.templateId;
    this._transferAclId = config.transferAclId;
    this._updated = config.updated;
    this._vanityId = config.vanityId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
  }

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // gtd_enabled - computed: false, optional: true, required: false
  private _gtdEnabled?: string; 
  public get gtdEnabled() {
    return this.getStringAttribute('gtd_enabled');
  }
  public set gtdEnabled(value: string) {
    this._gtdEnabled = value;
  }
  public resetGtdEnabled() {
    this._gtdEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtdEnabledInput() {
    return this._gtdEnabled;
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

  // soa_id - computed: false, optional: true, required: false
  private _soaId?: string; 
  public get soaId() {
    return this.getStringAttribute('soa_id');
  }
  public set soaId(value: string) {
    this._soaId = value;
  }
  public resetSoaId() {
    this._soaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soaIdInput() {
    return this._soaId;
  }

  // template_id - computed: false, optional: true, required: false
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // transfer_acl_id - computed: false, optional: true, required: false
  private _transferAclId?: string; 
  public get transferAclId() {
    return this.getStringAttribute('transfer_acl_id');
  }
  public set transferAclId(value: string) {
    this._transferAclId = value;
  }
  public resetTransferAclId() {
    this._transferAclId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferAclIdInput() {
    return this._transferAclId;
  }

  // updated - computed: true, optional: true, required: false
  private _updated?: string; 
  public get updated() {
    return this.getStringAttribute('updated');
  }
  public set updated(value: string) {
    this._updated = value;
  }
  public resetUpdated() {
    this._updated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedInput() {
    return this._updated;
  }

  // vanity_id - computed: false, optional: true, required: false
  private _vanityId?: string; 
  public get vanityId() {
    return this.getStringAttribute('vanity_id');
  }
  public set vanityId(value: string) {
    this._vanityId = value;
  }
  public resetVanityId() {
    this._vanityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vanityIdInput() {
    return this._vanityId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created: cdktf.stringToTerraform(this._created),
      folder_id: cdktf.stringToTerraform(this._folderId),
      gtd_enabled: cdktf.stringToTerraform(this._gtdEnabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      soa_id: cdktf.stringToTerraform(this._soaId),
      template_id: cdktf.stringToTerraform(this._templateId),
      transfer_acl_id: cdktf.stringToTerraform(this._transferAclId),
      updated: cdktf.stringToTerraform(this._updated),
      vanity_id: cdktf.stringToTerraform(this._vanityId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      created: {
        value: cdktf.stringToHclTerraform(this._created),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gtd_enabled: {
        value: cdktf.stringToHclTerraform(this._gtdEnabled),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      soa_id: {
        value: cdktf.stringToHclTerraform(this._soaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transfer_acl_id: {
        value: cdktf.stringToHclTerraform(this._transferAclId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      updated: {
        value: cdktf.stringToHclTerraform(this._updated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vanity_id: {
        value: cdktf.stringToHclTerraform(this._vanityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
