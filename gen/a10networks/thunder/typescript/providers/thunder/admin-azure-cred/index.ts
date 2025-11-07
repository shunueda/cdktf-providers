// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/admin_azure_cred
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdminAzureCredConfig extends cdktf.TerraformMetaArguments {
  /**
  * Delete an authorized Azure credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/admin_azure_cred#delete AdminAzureCred#delete}
  */
  readonly delete?: number;
  /**
  * File URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/admin_azure_cred#file_url AdminAzureCred#file_url}
  */
  readonly fileUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/admin_azure_cred#id AdminAzureCred#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Import an azure-credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/admin_azure_cred#import AdminAzureCred#import}
  */
  readonly import?: number;
  /**
  * Show authorized azure credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/admin_azure_cred#show AdminAzureCred#show}
  */
  readonly show?: number;
  /**
  * Use management port as source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/admin_azure_cred#use_mgmt_port AdminAzureCred#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
  /**
  * User
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/admin_azure_cred#user AdminAzureCred#user}
  */
  readonly user: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/admin_azure_cred thunder_admin_azure_cred}
*/
export class AdminAzureCred extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_admin_azure_cred";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AdminAzureCred resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AdminAzureCred to import
  * @param importFromId The id of the existing AdminAzureCred that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/admin_azure_cred#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AdminAzureCred to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_admin_azure_cred", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/admin_azure_cred thunder_admin_azure_cred} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdminAzureCredConfig
  */
  public constructor(scope: Construct, id: string, config: AdminAzureCredConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_admin_azure_cred',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._delete = config.delete;
    this._fileUrl = config.fileUrl;
    this._id = config.id;
    this._import = config.import;
    this._show = config.show;
    this._useMgmtPort = config.useMgmtPort;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete - computed: false, optional: true, required: false
  private _delete?: number; 
  public get delete() {
    return this.getNumberAttribute('delete');
  }
  public set delete(value: number) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // file_url - computed: false, optional: true, required: false
  private _fileUrl?: string; 
  public get fileUrl() {
    return this.getStringAttribute('file_url');
  }
  public set fileUrl(value: string) {
    this._fileUrl = value;
  }
  public resetFileUrl() {
    this._fileUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUrlInput() {
    return this._fileUrl;
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

  // import - computed: false, optional: true, required: false
  private _import?: number; 
  public get import() {
    return this.getNumberAttribute('import');
  }
  public set import(value: number) {
    this._import = value;
  }
  public resetImport() {
    this._import = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importInput() {
    return this._import;
  }

  // show - computed: false, optional: true, required: false
  private _show?: number; 
  public get show() {
    return this.getNumberAttribute('show');
  }
  public set show(value: number) {
    this._show = value;
  }
  public resetShow() {
    this._show = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showInput() {
    return this._show;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete: cdktf.numberToTerraform(this._delete),
      file_url: cdktf.stringToTerraform(this._fileUrl),
      id: cdktf.stringToTerraform(this._id),
      import: cdktf.numberToTerraform(this._import),
      show: cdktf.numberToTerraform(this._show),
      use_mgmt_port: cdktf.numberToTerraform(this._useMgmtPort),
      user: cdktf.stringToTerraform(this._user),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete: {
        value: cdktf.numberToHclTerraform(this._delete),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      file_url: {
        value: cdktf.stringToHclTerraform(this._fileUrl),
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
      import: {
        value: cdktf.numberToHclTerraform(this._import),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      show: {
        value: cdktf.numberToHclTerraform(this._show),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_mgmt_port: {
        value: cdktf.numberToHclTerraform(this._useMgmtPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
