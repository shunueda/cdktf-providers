// https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/pa_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PaAgentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/pa_agent#id PaAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * pa_agents block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/pa_agent#pa_agents PaAgent#pa_agents}
  */
  readonly paAgents: PaAgentPaAgents[] | cdktf.IResolvable;
}
export interface PaAgentPaAgents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/pa_agent#default_gateway PaAgent#default_gateway}
  */
  readonly defaultGateway: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/pa_agent#disk PaAgent#disk}
  */
  readonly disk: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/pa_agent#force_recreate PaAgent#force_recreate}
  */
  readonly forceRecreate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/pa_agent#ip_address PaAgent#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/pa_agent#ip_address_allocation PaAgent#ip_address_allocation}
  */
  readonly ipAddressAllocation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/pa_agent#memory PaAgent#memory}
  */
  readonly memory: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/pa_agent#name PaAgent#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/pa_agent#vsphere_cluster PaAgent#vsphere_cluster}
  */
  readonly vsphereCluster: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/pa_agent#vsphere_datacenter PaAgent#vsphere_datacenter}
  */
  readonly vsphereDatacenter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/pa_agent#vsphere_datastore PaAgent#vsphere_datastore}
  */
  readonly vsphereDatastore: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/pa_agent#vsphere_folder PaAgent#vsphere_folder}
  */
  readonly vsphereFolder: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/pa_agent#vsphere_network_name PaAgent#vsphere_network_name}
  */
  readonly vsphereNetworkName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/pa_agent#vsphere_resource_pool PaAgent#vsphere_resource_pool}
  */
  readonly vsphereResourcePool: string;
}

export function paAgentPaAgentsToTerraform(struct?: PaAgentPaAgents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gateway: cdktf.stringToTerraform(struct!.defaultGateway),
    disk: cdktf.numberToTerraform(struct!.disk),
    force_recreate: cdktf.booleanToTerraform(struct!.forceRecreate),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_address_allocation: cdktf.stringToTerraform(struct!.ipAddressAllocation),
    memory: cdktf.numberToTerraform(struct!.memory),
    name: cdktf.stringToTerraform(struct!.name),
    vsphere_cluster: cdktf.stringToTerraform(struct!.vsphereCluster),
    vsphere_datacenter: cdktf.stringToTerraform(struct!.vsphereDatacenter),
    vsphere_datastore: cdktf.stringToTerraform(struct!.vsphereDatastore),
    vsphere_folder: cdktf.stringToTerraform(struct!.vsphereFolder),
    vsphere_network_name: cdktf.stringToTerraform(struct!.vsphereNetworkName),
    vsphere_resource_pool: cdktf.stringToTerraform(struct!.vsphereResourcePool),
  }
}


export function paAgentPaAgentsToHclTerraform(struct?: PaAgentPaAgents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gateway: {
      value: cdktf.stringToHclTerraform(struct!.defaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk: {
      value: cdktf.numberToHclTerraform(struct!.disk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    force_recreate: {
      value: cdktf.booleanToHclTerraform(struct!.forceRecreate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address_allocation: {
      value: cdktf.stringToHclTerraform(struct!.ipAddressAllocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.numberToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vsphere_cluster: {
      value: cdktf.stringToHclTerraform(struct!.vsphereCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vsphere_datacenter: {
      value: cdktf.stringToHclTerraform(struct!.vsphereDatacenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vsphere_datastore: {
      value: cdktf.stringToHclTerraform(struct!.vsphereDatastore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vsphere_folder: {
      value: cdktf.stringToHclTerraform(struct!.vsphereFolder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vsphere_network_name: {
      value: cdktf.stringToHclTerraform(struct!.vsphereNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vsphere_resource_pool: {
      value: cdktf.stringToHclTerraform(struct!.vsphereResourcePool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PaAgentPaAgentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PaAgentPaAgents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._disk !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk;
    }
    if (this._forceRecreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceRecreate = this._forceRecreate;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipAddressAllocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressAllocation = this._ipAddressAllocation;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vsphereCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsphereCluster = this._vsphereCluster;
    }
    if (this._vsphereDatacenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsphereDatacenter = this._vsphereDatacenter;
    }
    if (this._vsphereDatastore !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsphereDatastore = this._vsphereDatastore;
    }
    if (this._vsphereFolder !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsphereFolder = this._vsphereFolder;
    }
    if (this._vsphereNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsphereNetworkName = this._vsphereNetworkName;
    }
    if (this._vsphereResourcePool !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsphereResourcePool = this._vsphereResourcePool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PaAgentPaAgents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultGateway = undefined;
      this._disk = undefined;
      this._forceRecreate = undefined;
      this._ipAddress = undefined;
      this._ipAddressAllocation = undefined;
      this._memory = undefined;
      this._name = undefined;
      this._vsphereCluster = undefined;
      this._vsphereDatacenter = undefined;
      this._vsphereDatastore = undefined;
      this._vsphereFolder = undefined;
      this._vsphereNetworkName = undefined;
      this._vsphereResourcePool = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultGateway = value.defaultGateway;
      this._disk = value.disk;
      this._forceRecreate = value.forceRecreate;
      this._ipAddress = value.ipAddress;
      this._ipAddressAllocation = value.ipAddressAllocation;
      this._memory = value.memory;
      this._name = value.name;
      this._vsphereCluster = value.vsphereCluster;
      this._vsphereDatacenter = value.vsphereDatacenter;
      this._vsphereDatastore = value.vsphereDatastore;
      this._vsphereFolder = value.vsphereFolder;
      this._vsphereNetworkName = value.vsphereNetworkName;
      this._vsphereResourcePool = value.vsphereResourcePool;
    }
  }

  // default_gateway - computed: false, optional: false, required: true
  private _defaultGateway?: string; 
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
  }
  public set defaultGateway(value: string) {
    this._defaultGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // disk - computed: false, optional: false, required: true
  private _disk?: number; 
  public get disk() {
    return this.getNumberAttribute('disk');
  }
  public set disk(value: number) {
    this._disk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk;
  }

  // force_recreate - computed: false, optional: true, required: false
  private _forceRecreate?: boolean | cdktf.IResolvable; 
  public get forceRecreate() {
    return this.getBooleanAttribute('force_recreate');
  }
  public set forceRecreate(value: boolean | cdktf.IResolvable) {
    this._forceRecreate = value;
  }
  public resetForceRecreate() {
    this._forceRecreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRecreateInput() {
    return this._forceRecreate;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_address_allocation - computed: false, optional: false, required: true
  private _ipAddressAllocation?: string; 
  public get ipAddressAllocation() {
    return this.getStringAttribute('ip_address_allocation');
  }
  public set ipAddressAllocation(value: string) {
    this._ipAddressAllocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressAllocationInput() {
    return this._ipAddressAllocation;
  }

  // memory - computed: false, optional: false, required: true
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
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

  // vsphere_cluster - computed: false, optional: false, required: true
  private _vsphereCluster?: string; 
  public get vsphereCluster() {
    return this.getStringAttribute('vsphere_cluster');
  }
  public set vsphereCluster(value: string) {
    this._vsphereCluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereClusterInput() {
    return this._vsphereCluster;
  }

  // vsphere_datacenter - computed: false, optional: false, required: true
  private _vsphereDatacenter?: string; 
  public get vsphereDatacenter() {
    return this.getStringAttribute('vsphere_datacenter');
  }
  public set vsphereDatacenter(value: string) {
    this._vsphereDatacenter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereDatacenterInput() {
    return this._vsphereDatacenter;
  }

  // vsphere_datastore - computed: false, optional: false, required: true
  private _vsphereDatastore?: string; 
  public get vsphereDatastore() {
    return this.getStringAttribute('vsphere_datastore');
  }
  public set vsphereDatastore(value: string) {
    this._vsphereDatastore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereDatastoreInput() {
    return this._vsphereDatastore;
  }

  // vsphere_folder - computed: false, optional: false, required: true
  private _vsphereFolder?: string; 
  public get vsphereFolder() {
    return this.getStringAttribute('vsphere_folder');
  }
  public set vsphereFolder(value: string) {
    this._vsphereFolder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereFolderInput() {
    return this._vsphereFolder;
  }

  // vsphere_network_name - computed: false, optional: false, required: true
  private _vsphereNetworkName?: string; 
  public get vsphereNetworkName() {
    return this.getStringAttribute('vsphere_network_name');
  }
  public set vsphereNetworkName(value: string) {
    this._vsphereNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereNetworkNameInput() {
    return this._vsphereNetworkName;
  }

  // vsphere_resource_pool - computed: false, optional: false, required: true
  private _vsphereResourcePool?: string; 
  public get vsphereResourcePool() {
    return this.getStringAttribute('vsphere_resource_pool');
  }
  public set vsphereResourcePool(value: string) {
    this._vsphereResourcePool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereResourcePoolInput() {
    return this._vsphereResourcePool;
  }
}

export class PaAgentPaAgentsList extends cdktf.ComplexList {
  public internalValue? : PaAgentPaAgents[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PaAgentPaAgentsOutputReference {
    return new PaAgentPaAgentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/pa_agent prismasase-vmware_pa_agent}
*/
export class PaAgent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismasase-vmware_pa_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PaAgent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PaAgent to import
  * @param importFromId The id of the existing PaAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/pa_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PaAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismasase-vmware_pa_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismasase-vmware/1.0.7/docs/resources/pa_agent prismasase-vmware_pa_agent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PaAgentConfig
  */
  public constructor(scope: Construct, id: string, config: PaAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'prismasase-vmware_pa_agent',
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
    this._id = config.id;
    this._paAgents.internalValue = config.paAgents;
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

  // pa_agents - computed: false, optional: false, required: true
  private _paAgents = new PaAgentPaAgentsList(this, "pa_agents", false);
  public get paAgents() {
    return this._paAgents;
  }
  public putPaAgents(value: PaAgentPaAgents[] | cdktf.IResolvable) {
    this._paAgents.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paAgentsInput() {
    return this._paAgents.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      pa_agents: cdktf.listMapper(paAgentPaAgentsToTerraform, true)(this._paAgents.internalValue),
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
      pa_agents: {
        value: cdktf.listMapperHcl(paAgentPaAgentsToHclTerraform, true)(this._paAgents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PaAgentPaAgentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
