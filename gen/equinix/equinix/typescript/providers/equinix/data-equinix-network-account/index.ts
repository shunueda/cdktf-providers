// https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/network_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEquinixNetworkAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/network_account#id DataEquinixNetworkAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Account location metro cod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/network_account#metro_code DataEquinixNetworkAccount#metro_code}
  */
  readonly metroCode: string;
  /**
  * Account name for filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/network_account#name DataEquinixNetworkAccount#name}
  */
  readonly name?: string;
  /**
  * The unique identifier of Project Resource to which billing account is scoped to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/network_account#project_id DataEquinixNetworkAccount#project_id}
  */
  readonly projectId?: string;
  /**
  * Account status for filtering. Possible values are Active, Processing, Submitted, Staged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/network_account#status DataEquinixNetworkAccount#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/network_account equinix_network_account}
*/
export class DataEquinixNetworkAccount extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_network_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEquinixNetworkAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEquinixNetworkAccount to import
  * @param importFromId The id of the existing DataEquinixNetworkAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/network_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEquinixNetworkAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_network_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/network_account equinix_network_account} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEquinixNetworkAccountConfig
  */
  public constructor(scope: Construct, id: string, config: DataEquinixNetworkAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_network_account',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.11.1',
        providerVersionConstraint: '4.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._metroCode = config.metroCode;
    this._name = config.name;
    this._projectId = config.projectId;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // metro_code - computed: false, optional: false, required: true
  private _metroCode?: string; 
  public get metroCode() {
    return this.getStringAttribute('metro_code');
  }
  public set metroCode(value: string) {
    this._metroCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metroCodeInput() {
    return this._metroCode;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getStringAttribute('number');
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // ucm_id - computed: true, optional: false, required: false
  public get ucmId() {
    return this.getStringAttribute('ucm_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      metro_code: cdktf.stringToTerraform(this._metroCode),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metro_code: {
        value: cdktf.stringToHclTerraform(this._metroCode),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
