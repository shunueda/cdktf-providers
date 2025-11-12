// https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateStoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Can be either ClientMachine or the Keyfactor Command GUID of the orchestrator to use for managing the certificate store. The agent must support the certificate store type and be approved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate_store#agent_identifier CertificateStore#agent_identifier}
  */
  readonly agentIdentifier: string;
  /**
  * Client machine name; value depends on certificate store type. See API reference guide and/or store type documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate_store#client_machine CertificateStore#client_machine}
  */
  readonly clientMachine: string;
  /**
  * Name of the container you want to associate the certificate store with. NOTE: The container must already exist and be of the same certificate store type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate_store#container_name CertificateStore#container_name}
  */
  readonly containerName?: string;
  /**
  * Determines whether the store create job will be scheduled. WARNING: If set to TRUE, each apply will trigger a store create job, if the store type support Create. This may cause issues if the store already exists but will depend on the store type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate_store#create_if_missing CertificateStore#create_if_missing}
  */
  readonly createIfMissing?: boolean | cdktf.IResolvable;
  /**
  * String indicating the schedule for inventory updates. Valid formats are:
  * 					"immediate" - schedules and immediate job
  * 					"1d" - schedules a daily job
  * 					"12h" - schedules a job every 12 hours
  * 					"30m" - schedules a job every 30 minutes
  * 				
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate_store#inventory_schedule CertificateStore#inventory_schedule}
  */
  readonly inventorySchedule?: string;
  /**
  * Certificate properties specific to certificate store type configured as key-value pairs. NOTE: Special properties 'ServerUsername' and 'ServerPassword' are required for some store types and should not be declared in this attribute and have their own dedicated values. See store type documentation for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate_store#properties CertificateStore#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * The password to access the host of the certificate store. In Keyfactor Command this is the 'ServerUsername' field found in the store type 'Properties'. Whether this is required and what format will vary based on store type definitions, please review the store type documentation for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate_store#server_password CertificateStore#server_password}
  */
  readonly serverPassword?: string;
  /**
  * Indicates whether the certificate store host requires SSL. In Keyfactor Command this is the 'ServerUseSsl' field found in the store type 'Properties'. Whether this is required and what format will vary based on store type definitions, please review the store type documentation for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate_store#server_use_ssl CertificateStore#server_use_ssl}
  */
  readonly serverUseSsl?: boolean | cdktf.IResolvable;
  /**
  * The username to access the host of the certificate store. In Keyfactor Command this is the 'ServerUsername' field found in the store type 'Properties'. Whether this is required and what format will vary based on store type definitions, please review the store type documentation for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate_store#server_username CertificateStore#server_username}
  */
  readonly serverUsername?: string;
  /**
  * The password to access the contents of the certificate store. In Keyfactor Command this is the 'StorePassword' field. field found in the store type 'Properties'. Whether this is required and what format will vary based on store type definitions, please review the store type documentation for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate_store#store_password CertificateStore#store_password}
  */
  readonly storePassword?: string;
  /**
  * Path to the new certificate store on a target. Format varies depending on store type see the store type documentation for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate_store#store_path CertificateStore#store_path}
  */
  readonly storePath: string;
  /**
  * Short name of certificate store type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate_store#store_type CertificateStore#store_type}
  */
  readonly storeType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate_store keyfactor_certificate_store}
*/
export class CertificateStore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keyfactor_certificate_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertificateStore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertificateStore to import
  * @param importFromId The id of the existing CertificateStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate_store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertificateStore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keyfactor_certificate_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/certificate_store keyfactor_certificate_store} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateStoreConfig
  */
  public constructor(scope: Construct, id: string, config: CertificateStoreConfig) {
    super(scope, id, {
      terraformResourceType: 'keyfactor_certificate_store',
      terraformGeneratorMetadata: {
        providerName: 'keyfactor',
        providerVersion: '2.7.0',
        providerVersionConstraint: '2.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentIdentifier = config.agentIdentifier;
    this._clientMachine = config.clientMachine;
    this._containerName = config.containerName;
    this._createIfMissing = config.createIfMissing;
    this._inventorySchedule = config.inventorySchedule;
    this._properties = config.properties;
    this._serverPassword = config.serverPassword;
    this._serverUseSsl = config.serverUseSsl;
    this._serverUsername = config.serverUsername;
    this._storePassword = config.storePassword;
    this._storePath = config.storePath;
    this._storeType = config.storeType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_assigned - computed: true, optional: false, required: false
  public get agentAssigned() {
    return this.getBooleanAttribute('agent_assigned');
  }

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // agent_identifier - computed: false, optional: false, required: true
  private _agentIdentifier?: string; 
  public get agentIdentifier() {
    return this.getStringAttribute('agent_identifier');
  }
  public set agentIdentifier(value: string) {
    this._agentIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdentifierInput() {
    return this._agentIdentifier;
  }

  // approved - computed: true, optional: false, required: false
  public get approved() {
    return this.getBooleanAttribute('approved');
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

  // server_password - computed: false, optional: true, required: false
  private _serverPassword?: string; 
  public get serverPassword() {
    return this.getStringAttribute('server_password');
  }
  public set serverPassword(value: string) {
    this._serverPassword = value;
  }
  public resetServerPassword() {
    this._serverPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPasswordInput() {
    return this._serverPassword;
  }

  // server_use_ssl - computed: false, optional: true, required: false
  private _serverUseSsl?: boolean | cdktf.IResolvable; 
  public get serverUseSsl() {
    return this.getBooleanAttribute('server_use_ssl');
  }
  public set serverUseSsl(value: boolean | cdktf.IResolvable) {
    this._serverUseSsl = value;
  }
  public resetServerUseSsl() {
    this._serverUseSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUseSslInput() {
    return this._serverUseSsl;
  }

  // server_username - computed: false, optional: true, required: false
  private _serverUsername?: string; 
  public get serverUsername() {
    return this.getStringAttribute('server_username');
  }
  public set serverUsername(value: string) {
    this._serverUsername = value;
  }
  public resetServerUsername() {
    this._serverUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUsernameInput() {
    return this._serverUsername;
  }

  // set_new_password_allowed - computed: true, optional: false, required: false
  public get setNewPasswordAllowed() {
    return this.getBooleanAttribute('set_new_password_allowed');
  }

  // store_password - computed: false, optional: true, required: false
  private _storePassword?: string; 
  public get storePassword() {
    return this.getStringAttribute('store_password');
  }
  public set storePassword(value: string) {
    this._storePassword = value;
  }
  public resetStorePassword() {
    this._storePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storePasswordInput() {
    return this._storePassword;
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

  // store_type - computed: false, optional: false, required: true
  private _storeType?: string; 
  public get storeType() {
    return this.getStringAttribute('store_type');
  }
  public set storeType(value: string) {
    this._storeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storeTypeInput() {
    return this._storeType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_identifier: cdktf.stringToTerraform(this._agentIdentifier),
      client_machine: cdktf.stringToTerraform(this._clientMachine),
      container_name: cdktf.stringToTerraform(this._containerName),
      create_if_missing: cdktf.booleanToTerraform(this._createIfMissing),
      inventory_schedule: cdktf.stringToTerraform(this._inventorySchedule),
      properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._properties),
      server_password: cdktf.stringToTerraform(this._serverPassword),
      server_use_ssl: cdktf.booleanToTerraform(this._serverUseSsl),
      server_username: cdktf.stringToTerraform(this._serverUsername),
      store_password: cdktf.stringToTerraform(this._storePassword),
      store_path: cdktf.stringToTerraform(this._storePath),
      store_type: cdktf.stringToTerraform(this._storeType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_identifier: {
        value: cdktf.stringToHclTerraform(this._agentIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      server_password: {
        value: cdktf.stringToHclTerraform(this._serverPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_use_ssl: {
        value: cdktf.booleanToHclTerraform(this._serverUseSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      server_username: {
        value: cdktf.stringToHclTerraform(this._serverUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      store_password: {
        value: cdktf.stringToHclTerraform(this._storePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      store_path: {
        value: cdktf.stringToHclTerraform(this._storePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      store_type: {
        value: cdktf.stringToHclTerraform(this._storeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
