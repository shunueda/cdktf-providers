// https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/compute_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/compute_profile#cluster ComputeProfile#cluster}
  */
  readonly cluster: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/compute_profile#datacenter ComputeProfile#datacenter}
  */
  readonly datacenter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/compute_profile#datastore ComputeProfile#datastore}
  */
  readonly datastore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/compute_profile#dvs ComputeProfile#dvs}
  */
  readonly dvs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/compute_profile#id ComputeProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/compute_profile#management_network ComputeProfile#management_network}
  */
  readonly managementNetwork: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/compute_profile#name ComputeProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/compute_profile#replication_network ComputeProfile#replication_network}
  */
  readonly replicationNetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/compute_profile#uplink_network ComputeProfile#uplink_network}
  */
  readonly uplinkNetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/compute_profile#vmotion_network ComputeProfile#vmotion_network}
  */
  readonly vmotionNetwork?: string;
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/compute_profile#service ComputeProfile#service}
  */
  readonly service: ComputeProfileService[] | cdktf.IResolvable;
}
export interface ComputeProfileService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/compute_profile#name ComputeProfile#name}
  */
  readonly name: string;
}

export function computeProfileServiceToTerraform(struct?: ComputeProfileService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function computeProfileServiceToHclTerraform(struct?: ComputeProfileService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeProfileServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeProfileService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeProfileService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class ComputeProfileServiceList extends cdktf.ComplexList {
  public internalValue? : ComputeProfileService[] | cdktf.IResolvable

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
  public get(index: number): ComputeProfileServiceOutputReference {
    return new ComputeProfileServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/compute_profile hcx_compute_profile}
*/
export class ComputeProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcx_compute_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeProfile to import
  * @param importFromId The id of the existing ComputeProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/compute_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcx_compute_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/compute_profile hcx_compute_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeProfileConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'hcx_compute_profile',
      terraformGeneratorMetadata: {
        providerName: 'hcx',
        providerVersion: '0.5.1',
        providerVersionConstraint: '0.5.1'
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
    this._datacenter = config.datacenter;
    this._datastore = config.datastore;
    this._dvs = config.dvs;
    this._id = config.id;
    this._managementNetwork = config.managementNetwork;
    this._name = config.name;
    this._replicationNetwork = config.replicationNetwork;
    this._uplinkNetwork = config.uplinkNetwork;
    this._vmotionNetwork = config.vmotionNetwork;
    this._service.internalValue = config.service;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // datacenter - computed: false, optional: false, required: true
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // datastore - computed: false, optional: true, required: false
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

  // dvs - computed: false, optional: false, required: true
  private _dvs?: string; 
  public get dvs() {
    return this.getStringAttribute('dvs');
  }
  public set dvs(value: string) {
    this._dvs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dvsInput() {
    return this._dvs;
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

  // management_network - computed: false, optional: false, required: true
  private _managementNetwork?: string; 
  public get managementNetwork() {
    return this.getStringAttribute('management_network');
  }
  public set managementNetwork(value: string) {
    this._managementNetwork = value;
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

  // replication_network - computed: false, optional: true, required: false
  private _replicationNetwork?: string; 
  public get replicationNetwork() {
    return this.getStringAttribute('replication_network');
  }
  public set replicationNetwork(value: string) {
    this._replicationNetwork = value;
  }
  public resetReplicationNetwork() {
    this._replicationNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationNetworkInput() {
    return this._replicationNetwork;
  }

  // uplink_network - computed: false, optional: true, required: false
  private _uplinkNetwork?: string; 
  public get uplinkNetwork() {
    return this.getStringAttribute('uplink_network');
  }
  public set uplinkNetwork(value: string) {
    this._uplinkNetwork = value;
  }
  public resetUplinkNetwork() {
    this._uplinkNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkNetworkInput() {
    return this._uplinkNetwork;
  }

  // vmotion_network - computed: false, optional: true, required: false
  private _vmotionNetwork?: string; 
  public get vmotionNetwork() {
    return this.getStringAttribute('vmotion_network');
  }
  public set vmotionNetwork(value: string) {
    this._vmotionNetwork = value;
  }
  public resetVmotionNetwork() {
    this._vmotionNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmotionNetworkInput() {
    return this._vmotionNetwork;
  }

  // service - computed: false, optional: false, required: true
  private _service = new ComputeProfileServiceList(this, "service", false);
  public get service() {
    return this._service;
  }
  public putService(value: ComputeProfileService[] | cdktf.IResolvable) {
    this._service.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster: cdktf.stringToTerraform(this._cluster),
      datacenter: cdktf.stringToTerraform(this._datacenter),
      datastore: cdktf.stringToTerraform(this._datastore),
      dvs: cdktf.stringToTerraform(this._dvs),
      id: cdktf.stringToTerraform(this._id),
      management_network: cdktf.stringToTerraform(this._managementNetwork),
      name: cdktf.stringToTerraform(this._name),
      replication_network: cdktf.stringToTerraform(this._replicationNetwork),
      uplink_network: cdktf.stringToTerraform(this._uplinkNetwork),
      vmotion_network: cdktf.stringToTerraform(this._vmotionNetwork),
      service: cdktf.listMapper(computeProfileServiceToTerraform, true)(this._service.internalValue),
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
      datacenter: {
        value: cdktf.stringToHclTerraform(this._datacenter),
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
      dvs: {
        value: cdktf.stringToHclTerraform(this._dvs),
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
      replication_network: {
        value: cdktf.stringToHclTerraform(this._replicationNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uplink_network: {
        value: cdktf.stringToHclTerraform(this._uplinkNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vmotion_network: {
        value: cdktf.stringToHclTerraform(this._vmotionNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: cdktf.listMapperHcl(computeProfileServiceToHclTerraform, true)(this._service.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeProfileServiceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
