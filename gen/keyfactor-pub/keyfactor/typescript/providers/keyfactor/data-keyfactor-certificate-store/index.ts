// https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/certificate_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKeyfactorCertificateStoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Bool indicating if there is an orchestrator assigned to the new certificate store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/certificate_store#agent_assigned DataKeyfactorCertificateStore#agent_assigned}
  */
  readonly agentAssigned?: boolean | cdktf.IResolvable;
  /**
  * Bool that indicates the approval status of store created. Default is true, omit if unsure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/certificate_store#approved DataKeyfactorCertificateStore#approved}
  */
  readonly approved?: boolean | cdktf.IResolvable;
  /**
  * Client machine name; value depends on certificate store type. See API reference guide
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/certificate_store#client_machine DataKeyfactorCertificateStore#client_machine}
  */
  readonly clientMachine: string;
  /**
  * Name of certificate store's associated container, if applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/certificate_store#container_name DataKeyfactorCertificateStore#container_name}
  */
  readonly containerName?: string;
  /**
  * Bool that indicates if the store should be created with information provided. Valid only for JKS type, omit if unsure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/certificate_store#create_if_missing DataKeyfactorCertificateStore#create_if_missing}
  */
  readonly createIfMissing?: boolean | cdktf.IResolvable;
  /**
  * Inventory schedule for new certificate store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/certificate_store#inventory_schedule DataKeyfactorCertificateStore#inventory_schedule}
  */
  readonly inventorySchedule?: string;
  /**
  * Properties specific to certificate store type configured as key-value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/certificate_store#properties DataKeyfactorCertificateStore#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Indicates whether the store password can be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/certificate_store#set_new_password_allowed DataKeyfactorCertificateStore#set_new_password_allowed}
  */
  readonly setNewPasswordAllowed?: boolean | cdktf.IResolvable;
  /**
  * Path to the new certificate store on a target. Format varies depending on type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/certificate_store#store_path DataKeyfactorCertificateStore#store_path}
  */
  readonly storePath: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/certificate_store keyfactor_certificate_store}
*/
export class DataKeyfactorCertificateStore extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keyfactor_certificate_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKeyfactorCertificateStore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKeyfactorCertificateStore to import
  * @param importFromId The id of the existing DataKeyfactorCertificateStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/certificate_store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKeyfactorCertificateStore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keyfactor_certificate_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/certificate_store keyfactor_certificate_store} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKeyfactorCertificateStoreConfig
  */
  public constructor(scope: Construct, id: string, config: DataKeyfactorCertificateStoreConfig) {
    super(scope, id, {
      terraformResourceType: 'keyfactor_certificate_store',
      terraformGeneratorMetadata: {
        providerName: 'keyfactor',
        providerVersion: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentAssigned = config.agentAssigned;
    this._approved = config.approved;
    this._clientMachine = config.clientMachine;
    this._containerName = config.containerName;
    this._createIfMissing = config.createIfMissing;
    this._inventorySchedule = config.inventorySchedule;
    this._properties = config.properties;
    this._setNewPasswordAllowed = config.setNewPasswordAllowed;
    this._storePath = config.storePath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_assigned - computed: false, optional: true, required: false
  private _agentAssigned?: boolean | cdktf.IResolvable; 
  public get agentAssigned() {
    return this.getBooleanAttribute('agent_assigned');
  }
  public set agentAssigned(value: boolean | cdktf.IResolvable) {
    this._agentAssigned = value;
  }
  public resetAgentAssigned() {
    this._agentAssigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentAssignedInput() {
    return this._agentAssigned;
  }

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // agent_identifier - computed: true, optional: false, required: false
  public get agentIdentifier() {
    return this.getStringAttribute('agent_identifier');
  }

  // approved - computed: false, optional: true, required: false
  private _approved?: boolean | cdktf.IResolvable; 
  public get approved() {
    return this.getBooleanAttribute('approved');
  }
  public set approved(value: boolean | cdktf.IResolvable) {
    this._approved = value;
  }
  public resetApproved() {
    this._approved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvedInput() {
    return this._approved;
  }

  // client_machine - computed: false, optional: false, required: true
  private _clientMachine?: string; 
  public get clientMachine() {
    return this.getStringAttribute('client_machine');
  }
  public set clientMachine(value: string) {
    this._clientMachine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMachineInput() {
    return this._clientMachine;
  }

  // container_id - computed: true, optional: false, required: false
  public get containerId() {
    return this.getNumberAttribute('container_id');
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // create_if_missing - computed: false, optional: true, required: false
  private _createIfMissing?: boolean | cdktf.IResolvable; 
  public get createIfMissing() {
    return this.getBooleanAttribute('create_if_missing');
  }
  public set createIfMissing(value: boolean | cdktf.IResolvable) {
    this._createIfMissing = value;
  }
  public resetCreateIfMissing() {
    this._createIfMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createIfMissingInput() {
    return this._createIfMissing;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inventory_schedule - computed: false, optional: true, required: false
  private _inventorySchedule?: string; 
  public get inventorySchedule() {
    return this.getStringAttribute('inventory_schedule');
  }
  public set inventorySchedule(value: string) {
    this._inventorySchedule = value;
  }
  public resetInventorySchedule() {
    this._inventorySchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryScheduleInput() {
    return this._inventorySchedule;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // server_password - computed: true, optional: false, required: false
  public get serverPassword() {
    return this.getStringAttribute('server_password');
  }

  // server_use_ssl - computed: true, optional: false, required: false
  public get serverUseSsl() {
    return this.getBooleanAttribute('server_use_ssl');
  }

  // server_username - computed: true, optional: false, required: false
  public get serverUsername() {
    return this.getStringAttribute('server_username');
  }

  // set_new_password_allowed - computed: false, optional: true, required: false
  private _setNewPasswordAllowed?: boolean | cdktf.IResolvable; 
  public get setNewPasswordAllowed() {
    return this.getBooleanAttribute('set_new_password_allowed');
  }
  public set setNewPasswordAllowed(value: boolean | cdktf.IResolvable) {
    this._setNewPasswordAllowed = value;
  }
  public resetSetNewPasswordAllowed() {
    this._setNewPasswordAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setNewPasswordAllowedInput() {
    return this._setNewPasswordAllowed;
  }

  // store_password - computed: true, optional: false, required: false
  public get storePassword() {
    return this.getStringAttribute('store_password');
  }

  // store_path - computed: false, optional: false, required: true
  private _storePath?: string; 
  public get storePath() {
    return this.getStringAttribute('store_path');
  }
  public set storePath(value: string) {
    this._storePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storePathInput() {
    return this._storePath;
  }

  // store_type - computed: true, optional: false, required: false
  public get storeType() {
    return this.getStringAttribute('store_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_assigned: cdktf.booleanToTerraform(this._agentAssigned),
      approved: cdktf.booleanToTerraform(this._approved),
      client_machine: cdktf.stringToTerraform(this._clientMachine),
      container_name: cdktf.stringToTerraform(this._containerName),
      create_if_missing: cdktf.booleanToTerraform(this._createIfMissing),
      inventory_schedule: cdktf.stringToTerraform(this._inventorySchedule),
      properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._properties),
      set_new_password_allowed: cdktf.booleanToTerraform(this._setNewPasswordAllowed),
      store_path: cdktf.stringToTerraform(this._storePath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_assigned: {
        value: cdktf.booleanToHclTerraform(this._agentAssigned),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      approved: {
        value: cdktf.booleanToHclTerraform(this._approved),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_machine: {
        value: cdktf.stringToHclTerraform(this._clientMachine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_name: {
        value: cdktf.stringToHclTerraform(this._containerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_if_missing: {
        value: cdktf.booleanToHclTerraform(this._createIfMissing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      inventory_schedule: {
        value: cdktf.stringToHclTerraform(this._inventorySchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      properties: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._properties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      set_new_password_allowed: {
        value: cdktf.booleanToHclTerraform(this._setNewPasswordAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      store_path: {
        value: cdktf.stringToHclTerraform(this._storePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
