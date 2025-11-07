// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/cloudvisor_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudvisorAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * The interval at which the account should be auto synced. The value could be `NONE`, `DAILY`, `WEEKLY` and `MONTHLY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/cloudvisor_account#auto_sync CloudvisorAccount#auto_sync}
  */
  readonly autoSync: string;
  /**
  * Cloud provider of the account, currently, `AWS` and `AZURE` are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/cloudvisor_account#cloud_provider CloudvisorAccount#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * Credential Id to be used for the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/cloudvisor_account#credential_id CloudvisorAccount#credential_id}
  */
  readonly credentialId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/cloudvisor_account#id CloudvisorAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/cloudvisor_account#name CloudvisorAccount#name}
  */
  readonly name: string;
  /**
  * The native cloud provider account Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/cloudvisor_account#native_id CloudvisorAccount#native_id}
  */
  readonly nativeId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/cloudvisor_account alkira_cloudvisor_account}
*/
export class CloudvisorAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_cloudvisor_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudvisorAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudvisorAccount to import
  * @param importFromId The id of the existing CloudvisorAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/cloudvisor_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudvisorAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_cloudvisor_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/cloudvisor_account alkira_cloudvisor_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudvisorAccountConfig
  */
  public constructor(scope: Construct, id: string, config: CloudvisorAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_cloudvisor_account',
      terraformGeneratorMetadata: {
        providerName: 'alkira',
        providerVersion: '1.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoSync = config.autoSync;
    this._cloudProvider = config.cloudProvider;
    this._credentialId = config.credentialId;
    this._id = config.id;
    this._name = config.name;
    this._nativeId = config.nativeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_sync - computed: false, optional: false, required: true
  private _autoSync?: string; 
  public get autoSync() {
    return this.getStringAttribute('auto_sync');
  }
  public set autoSync(value: string) {
    this._autoSync = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSyncInput() {
    return this._autoSync;
  }

  // cloud_provider - computed: false, optional: false, required: true
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // credential_id - computed: false, optional: false, required: true
  private _credentialId?: string; 
  public get credentialId() {
    return this.getStringAttribute('credential_id');
  }
  public set credentialId(value: string) {
    this._credentialId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialIdInput() {
    return this._credentialId;
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

  // native_id - computed: false, optional: true, required: false
  private _nativeId?: string; 
  public get nativeId() {
    return this.getStringAttribute('native_id');
  }
  public set nativeId(value: string) {
    this._nativeId = value;
  }
  public resetNativeId() {
    this._nativeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeIdInput() {
    return this._nativeId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_sync: cdktf.stringToTerraform(this._autoSync),
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      credential_id: cdktf.stringToTerraform(this._credentialId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      native_id: cdktf.stringToTerraform(this._nativeId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_sync: {
        value: cdktf.stringToHclTerraform(this._autoSync),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credential_id: {
        value: cdktf.stringToHclTerraform(this._credentialId),
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
      native_id: {
        value: cdktf.stringToHclTerraform(this._nativeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
