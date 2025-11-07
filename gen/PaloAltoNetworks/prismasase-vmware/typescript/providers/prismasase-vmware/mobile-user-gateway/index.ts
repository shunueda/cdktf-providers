// https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/mobile_user_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MobileUserGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/mobile_user_gateway#cluster MobileUserGateway#cluster}
  */
  readonly cluster?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/mobile_user_gateway#config_hash MobileUserGateway#config_hash}
  */
  readonly configHash: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/mobile_user_gateway#content_library_name MobileUserGateway#content_library_name}
  */
  readonly contentLibraryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/mobile_user_gateway#datacenter MobileUserGateway#datacenter}
  */
  readonly datacenter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/mobile_user_gateway#dataplane_inside_network MobileUserGateway#dataplane_inside_network}
  */
  readonly dataplaneInsideNetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/mobile_user_gateway#dataplane_outside_network MobileUserGateway#dataplane_outside_network}
  */
  readonly dataplaneOutsideNetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/mobile_user_gateway#datastore MobileUserGateway#datastore}
  */
  readonly datastore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/mobile_user_gateway#deployment_folder MobileUserGateway#deployment_folder}
  */
  readonly deploymentFolder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/mobile_user_gateway#id MobileUserGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/mobile_user_gateway#last_updated MobileUserGateway#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/mobile_user_gateway#management_network MobileUserGateway#management_network}
  */
  readonly managementNetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/mobile_user_gateway#name MobileUserGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/mobile_user_gateway#resource_pool MobileUserGateway#resource_pool}
  */
  readonly resourcePool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/mobile_user_gateway#vm_id MobileUserGateway#vm_id}
  */
  readonly vmId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/mobile_user_gateway prismasase-vmware_mobile_user_gateway}
*/
export class MobileUserGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismasase-vmware_mobile_user_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MobileUserGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MobileUserGateway to import
  * @param importFromId The id of the existing MobileUserGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/mobile_user_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MobileUserGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismasase-vmware_mobile_user_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/mobile_user_gateway prismasase-vmware_mobile_user_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MobileUserGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: MobileUserGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'prismasase-vmware_mobile_user_gateway',
      terraformGeneratorMetadata: {
        providerName: 'prismasase-vmware',
        providerVersion: '1.0.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cluster = config.cluster;
    this._configHash = config.configHash;
    this._contentLibraryName = config.contentLibraryName;
    this._datacenter = config.datacenter;
    this._dataplaneInsideNetwork = config.dataplaneInsideNetwork;
    this._dataplaneOutsideNetwork = config.dataplaneOutsideNetwork;
    this._datastore = config.datastore;
    this._deploymentFolder = config.deploymentFolder;
    this._id = config.id;
    this._lastUpdated = config.lastUpdated;
    this._managementNetwork = config.managementNetwork;
    this._name = config.name;
    this._resourcePool = config.resourcePool;
    this._vmId = config.vmId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster - computed: true, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // config_hash - computed: false, optional: false, required: true
  private _configHash?: string; 
  public get configHash() {
    return this.getStringAttribute('config_hash');
  }
  public set configHash(value: string) {
    this._configHash = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configHashInput() {
    return this._configHash;
  }

  // content_library_name - computed: true, optional: true, required: false
  private _contentLibraryName?: string; 
  public get contentLibraryName() {
    return this.getStringAttribute('content_library_name');
  }
  public set contentLibraryName(value: string) {
    this._contentLibraryName = value;
  }
  public resetContentLibraryName() {
    this._contentLibraryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentLibraryNameInput() {
    return this._contentLibraryName;
  }

  // datacenter - computed: true, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // dataplane_inside_network - computed: true, optional: true, required: false
  private _dataplaneInsideNetwork?: string; 
  public get dataplaneInsideNetwork() {
    return this.getStringAttribute('dataplane_inside_network');
  }
  public set dataplaneInsideNetwork(value: string) {
    this._dataplaneInsideNetwork = value;
  }
  public resetDataplaneInsideNetwork() {
    this._dataplaneInsideNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataplaneInsideNetworkInput() {
    return this._dataplaneInsideNetwork;
  }

  // dataplane_outside_network - computed: true, optional: true, required: false
  private _dataplaneOutsideNetwork?: string; 
  public get dataplaneOutsideNetwork() {
    return this.getStringAttribute('dataplane_outside_network');
  }
  public set dataplaneOutsideNetwork(value: string) {
    this._dataplaneOutsideNetwork = value;
  }
  public resetDataplaneOutsideNetwork() {
    this._dataplaneOutsideNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataplaneOutsideNetworkInput() {
    return this._dataplaneOutsideNetwork;
  }

  // datastore - computed: true, optional: true, required: false
  private _datastore?: string; 
  public get datastore() {
    return this.getStringAttribute('datastore');
  }
  public set datastore(value: string) {
    this._datastore = value;
  }
  public resetDatastore() {
    this._datastore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreInput() {
    return this._datastore;
  }

  // deployment_folder - computed: true, optional: true, required: false
  private _deploymentFolder?: string; 
  public get deploymentFolder() {
    return this.getStringAttribute('deployment_folder');
  }
  public set deploymentFolder(value: string) {
    this._deploymentFolder = value;
  }
  public resetDeploymentFolder() {
    this._deploymentFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentFolderInput() {
    return this._deploymentFolder;
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

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // management_network - computed: true, optional: true, required: false
  private _managementNetwork?: string; 
  public get managementNetwork() {
    return this.getStringAttribute('management_network');
  }
  public set managementNetwork(value: string) {
    this._managementNetwork = value;
  }
  public resetManagementNetwork() {
    this._managementNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementNetworkInput() {
    return this._managementNetwork;
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

  // resource_pool - computed: true, optional: true, required: false
  private _resourcePool?: string; 
  public get resourcePool() {
    return this.getStringAttribute('resource_pool');
  }
  public set resourcePool(value: string) {
    this._resourcePool = value;
  }
  public resetResourcePool() {
    this._resourcePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoolInput() {
    return this._resourcePool;
  }

  // vm_id - computed: true, optional: true, required: false
  private _vmId?: string; 
  public get vmId() {
    return this.getStringAttribute('vm_id');
  }
  public set vmId(value: string) {
    this._vmId = value;
  }
  public resetVmId() {
    this._vmId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmIdInput() {
    return this._vmId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster: cdktf.stringToTerraform(this._cluster),
      config_hash: cdktf.stringToTerraform(this._configHash),
      content_library_name: cdktf.stringToTerraform(this._contentLibraryName),
      datacenter: cdktf.stringToTerraform(this._datacenter),
      dataplane_inside_network: cdktf.stringToTerraform(this._dataplaneInsideNetwork),
      dataplane_outside_network: cdktf.stringToTerraform(this._dataplaneOutsideNetwork),
      datastore: cdktf.stringToTerraform(this._datastore),
      deployment_folder: cdktf.stringToTerraform(this._deploymentFolder),
      id: cdktf.stringToTerraform(this._id),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      management_network: cdktf.stringToTerraform(this._managementNetwork),
      name: cdktf.stringToTerraform(this._name),
      resource_pool: cdktf.stringToTerraform(this._resourcePool),
      vm_id: cdktf.stringToTerraform(this._vmId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster: {
        value: cdktf.stringToHclTerraform(this._cluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_hash: {
        value: cdktf.stringToHclTerraform(this._configHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_library_name: {
        value: cdktf.stringToHclTerraform(this._contentLibraryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datacenter: {
        value: cdktf.stringToHclTerraform(this._datacenter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dataplane_inside_network: {
        value: cdktf.stringToHclTerraform(this._dataplaneInsideNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dataplane_outside_network: {
        value: cdktf.stringToHclTerraform(this._dataplaneOutsideNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datastore: {
        value: cdktf.stringToHclTerraform(this._datastore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_folder: {
        value: cdktf.stringToHclTerraform(this._deploymentFolder),
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
      last_updated: {
        value: cdktf.stringToHclTerraform(this._lastUpdated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_network: {
        value: cdktf.stringToHclTerraform(this._managementNetwork),
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
      resource_pool: {
        value: cdktf.stringToHclTerraform(this._resourcePool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_id: {
        value: cdktf.stringToHclTerraform(this._vmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
