// https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_onprem
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CvoOnpremConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_onprem#client_id CvoOnprem#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_onprem#cluster_address CvoOnprem#cluster_address}
  */
  readonly clusterAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_onprem#cluster_password CvoOnprem#cluster_password}
  */
  readonly clusterPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_onprem#cluster_user_name CvoOnprem#cluster_user_name}
  */
  readonly clusterUserName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_onprem#id CvoOnprem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_onprem#location CvoOnprem#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_onprem#name CvoOnprem#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_onprem#workspace_id CvoOnprem#workspace_id}
  */
  readonly workspaceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_onprem netapp-cloudmanager_cvo_onprem}
*/
export class CvoOnprem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-cloudmanager_cvo_onprem";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CvoOnprem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CvoOnprem to import
  * @param importFromId The id of the existing CvoOnprem that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_onprem#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CvoOnprem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-cloudmanager_cvo_onprem", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_onprem netapp-cloudmanager_cvo_onprem} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CvoOnpremConfig
  */
  public constructor(scope: Construct, id: string, config: CvoOnpremConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-cloudmanager_cvo_onprem',
      terraformGeneratorMetadata: {
        providerName: 'netapp-cloudmanager',
        providerVersion: '26.0.0',
        providerVersionConstraint: '26.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientId = config.clientId;
    this._clusterAddress = config.clusterAddress;
    this._clusterPassword = config.clusterPassword;
    this._clusterUserName = config.clusterUserName;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // cluster_address - computed: false, optional: false, required: true
  private _clusterAddress?: string; 
  public get clusterAddress() {
    return this.getStringAttribute('cluster_address');
  }
  public set clusterAddress(value: string) {
    this._clusterAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAddressInput() {
    return this._clusterAddress;
  }

  // cluster_password - computed: false, optional: false, required: true
  private _clusterPassword?: string; 
  public get clusterPassword() {
    return this.getStringAttribute('cluster_password');
  }
  public set clusterPassword(value: string) {
    this._clusterPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterPasswordInput() {
    return this._clusterPassword;
  }

  // cluster_user_name - computed: false, optional: false, required: true
  private _clusterUserName?: string; 
  public get clusterUserName() {
    return this.getStringAttribute('cluster_user_name');
  }
  public set clusterUserName(value: string) {
    this._clusterUserName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterUserNameInput() {
    return this._clusterUserName;
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // workspace_id - computed: false, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.stringToTerraform(this._clientId),
      cluster_address: cdktf.stringToTerraform(this._clusterAddress),
      cluster_password: cdktf.stringToTerraform(this._clusterPassword),
      cluster_user_name: cdktf.stringToTerraform(this._clusterUserName),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_address: {
        value: cdktf.stringToHclTerraform(this._clusterAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_password: {
        value: cdktf.stringToHclTerraform(this._clusterPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_user_name: {
        value: cdktf.stringToHclTerraform(this._clusterUserName),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
