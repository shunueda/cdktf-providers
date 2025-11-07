// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_accounts_gcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementCmeAccountsGcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Base64 encoded string that represents the content of the credentials file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_accounts_gcp#credentials_data ManagementCmeAccountsGcp#credentials_data}
  */
  readonly credentialsData?: string;
  /**
  * The credentials file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_accounts_gcp#credentials_file ManagementCmeAccountsGcp#credentials_file}
  */
  readonly credentialsFile?: string;
  /**
  * The number of CME cycles to wait when the cloud provider does not return a GW until its deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_accounts_gcp#deletion_tolerance ManagementCmeAccountsGcp#deletion_tolerance}
  */
  readonly deletionTolerance?: number;
  /**
  * The account's domain name in MDS environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_accounts_gcp#domain ManagementCmeAccountsGcp#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_accounts_gcp#id ManagementCmeAccountsGcp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The account name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_accounts_gcp#name ManagementCmeAccountsGcp#name}
  */
  readonly name: string;
  /**
  * The project id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_accounts_gcp#project_id ManagementCmeAccountsGcp#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_accounts_gcp checkpoint_management_cme_accounts_gcp}
*/
export class ManagementCmeAccountsGcp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_cme_accounts_gcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementCmeAccountsGcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementCmeAccountsGcp to import
  * @param importFromId The id of the existing ManagementCmeAccountsGcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_accounts_gcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementCmeAccountsGcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_cme_accounts_gcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_accounts_gcp checkpoint_management_cme_accounts_gcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementCmeAccountsGcpConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementCmeAccountsGcpConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_cme_accounts_gcp',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._credentialsData = config.credentialsData;
    this._credentialsFile = config.credentialsFile;
    this._deletionTolerance = config.deletionTolerance;
    this._domain = config.domain;
    this._id = config.id;
    this._name = config.name;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credentials_data - computed: false, optional: true, required: false
  private _credentialsData?: string; 
  public get credentialsData() {
    return this.getStringAttribute('credentials_data');
  }
  public set credentialsData(value: string) {
    this._credentialsData = value;
  }
  public resetCredentialsData() {
    this._credentialsData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsDataInput() {
    return this._credentialsData;
  }

  // credentials_file - computed: false, optional: true, required: false
  private _credentialsFile?: string; 
  public get credentialsFile() {
    return this.getStringAttribute('credentials_file');
  }
  public set credentialsFile(value: string) {
    this._credentialsFile = value;
  }
  public resetCredentialsFile() {
    this._credentialsFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsFileInput() {
    return this._credentialsFile;
  }

  // deletion_tolerance - computed: false, optional: true, required: false
  private _deletionTolerance?: number; 
  public get deletionTolerance() {
    return this.getNumberAttribute('deletion_tolerance');
  }
  public set deletionTolerance(value: number) {
    this._deletionTolerance = value;
  }
  public resetDeletionTolerance() {
    this._deletionTolerance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionToleranceInput() {
    return this._deletionTolerance;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // gw_configurations - computed: true, optional: false, required: false
  public get gwConfigurations() {
    return this.getListAttribute('gw_configurations');
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

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credentials_data: cdktf.stringToTerraform(this._credentialsData),
      credentials_file: cdktf.stringToTerraform(this._credentialsFile),
      deletion_tolerance: cdktf.numberToTerraform(this._deletionTolerance),
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credentials_data: {
        value: cdktf.stringToHclTerraform(this._credentialsData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials_file: {
        value: cdktf.stringToHclTerraform(this._credentialsFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_tolerance: {
        value: cdktf.numberToHclTerraform(this._deletionTolerance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
