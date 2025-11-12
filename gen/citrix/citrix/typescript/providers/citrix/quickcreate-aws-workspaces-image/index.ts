// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuickcreateAwsWorkspacesImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * GUID identifier of the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_image#account_id QuickcreateAwsWorkspacesImage#account_id}
  */
  readonly accountId: string;
  /**
  * Id of the image to be imported in AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_image#aws_image_id QuickcreateAwsWorkspacesImage#aws_image_id}
  */
  readonly awsImageId: string;
  /**
  * Description of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_image#description QuickcreateAwsWorkspacesImage#description}
  */
  readonly description: string;
  /**
  * The type of ingestion process of the image. Possible values are `BYOL_REGULAR_BYOP` and `BYOL_GRAPHICS_G4DN_BYOP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_image#ingestion_process QuickcreateAwsWorkspacesImage#ingestion_process}
  */
  readonly ingestionProcess: string;
  /**
  * Name of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_image#name QuickcreateAwsWorkspacesImage#name}
  */
  readonly name: string;
  /**
  * The type of operating system of the image. Possible values are `WINDOWS` and `LINUX`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_image#operating_system QuickcreateAwsWorkspacesImage#operating_system}
  */
  readonly operatingSystem: string;
  /**
  * The supported session type of the image. Possible values are `SingleSession` and `MultiSession`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_image#session_support QuickcreateAwsWorkspacesImage#session_support}
  */
  readonly sessionSupport: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_image citrix_quickcreate_aws_workspaces_image}
*/
export class QuickcreateAwsWorkspacesImage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_quickcreate_aws_workspaces_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QuickcreateAwsWorkspacesImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QuickcreateAwsWorkspacesImage to import
  * @param importFromId The id of the existing QuickcreateAwsWorkspacesImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QuickcreateAwsWorkspacesImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_quickcreate_aws_workspaces_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_image citrix_quickcreate_aws_workspaces_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuickcreateAwsWorkspacesImageConfig
  */
  public constructor(scope: Construct, id: string, config: QuickcreateAwsWorkspacesImageConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_quickcreate_aws_workspaces_image',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30',
        providerVersionConstraint: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._awsImageId = config.awsImageId;
    this._description = config.description;
    this._ingestionProcess = config.ingestionProcess;
    this._name = config.name;
    this._operatingSystem = config.operatingSystem;
    this._sessionSupport = config.sessionSupport;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // aws_image_id - computed: false, optional: false, required: true
  private _awsImageId?: string; 
  public get awsImageId() {
    return this.getStringAttribute('aws_image_id');
  }
  public set awsImageId(value: string) {
    this._awsImageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsImageIdInput() {
    return this._awsImageId;
  }

  // aws_imported_image_id - computed: true, optional: false, required: false
  public get awsImportedImageId() {
    return this.getStringAttribute('aws_imported_image_id');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingestion_process - computed: false, optional: false, required: true
  private _ingestionProcess?: string; 
  public get ingestionProcess() {
    return this.getStringAttribute('ingestion_process');
  }
  public set ingestionProcess(value: string) {
    this._ingestionProcess = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionProcessInput() {
    return this._ingestionProcess;
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

  // operating_system - computed: false, optional: false, required: true
  private _operatingSystem?: string; 
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
  public set operatingSystem(value: string) {
    this._operatingSystem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem;
  }

  // session_support - computed: false, optional: false, required: true
  private _sessionSupport?: string; 
  public get sessionSupport() {
    return this.getStringAttribute('session_support');
  }
  public set sessionSupport(value: string) {
    this._sessionSupport = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionSupportInput() {
    return this._sessionSupport;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tenancy - computed: true, optional: false, required: false
  public get tenancy() {
    return this.getStringAttribute('tenancy');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      aws_image_id: cdktf.stringToTerraform(this._awsImageId),
      description: cdktf.stringToTerraform(this._description),
      ingestion_process: cdktf.stringToTerraform(this._ingestionProcess),
      name: cdktf.stringToTerraform(this._name),
      operating_system: cdktf.stringToTerraform(this._operatingSystem),
      session_support: cdktf.stringToTerraform(this._sessionSupport),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_image_id: {
        value: cdktf.stringToHclTerraform(this._awsImageId),
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
      ingestion_process: {
        value: cdktf.stringToHclTerraform(this._ingestionProcess),
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
      operating_system: {
        value: cdktf.stringToHclTerraform(this._operatingSystem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_support: {
        value: cdktf.stringToHclTerraform(this._sessionSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
