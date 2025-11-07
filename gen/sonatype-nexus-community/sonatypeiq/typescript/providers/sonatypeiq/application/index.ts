// https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * User Name of the Contact for the Application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/application#contact_user_name Application#contact_user_name}
  */
  readonly contactUserName?: string;
  /**
  * Name of the Application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/application#name Application#name}
  */
  readonly name: string;
  /**
  * Internal ID of the Organization to which this Application belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/application#organization_id Application#organization_id}
  */
  readonly organizationId: string;
  /**
  * Public ID of the Application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/application#public_id Application#public_id}
  */
  readonly publicId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/application sonatypeiq_application}
*/
export class Application extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonatypeiq_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Application resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Application to import
  * @param importFromId The id of the existing Application that should be imported. Refer to the {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Application to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonatypeiq_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/application sonatypeiq_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'sonatypeiq_application',
      terraformGeneratorMetadata: {
        providerName: 'sonatypeiq',
        providerVersion: '0.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contactUserName = config.contactUserName;
    this._name = config.name;
    this._organizationId = config.organizationId;
    this._publicId = config.publicId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contact_user_name - computed: false, optional: true, required: false
  private _contactUserName?: string; 
  public get contactUserName() {
    return this.getStringAttribute('contact_user_name');
  }
  public set contactUserName(value: string) {
    this._contactUserName = value;
  }
  public resetContactUserName() {
    this._contactUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactUserNameInput() {
    return this._contactUserName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
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

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // public_id - computed: false, optional: false, required: true
  private _publicId?: string; 
  public get publicId() {
    return this.getStringAttribute('public_id');
  }
  public set publicId(value: string) {
    this._publicId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIdInput() {
    return this._publicId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contact_user_name: cdktf.stringToTerraform(this._contactUserName),
      name: cdktf.stringToTerraform(this._name),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      public_id: cdktf.stringToTerraform(this._publicId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contact_user_name: {
        value: cdktf.stringToHclTerraform(this._contactUserName),
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
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_id: {
        value: cdktf.stringToHclTerraform(this._publicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
