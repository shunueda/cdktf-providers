// https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/host#description Host#description}
  */
  readonly description?: string;
  /**
  * Connectivity type for hosts and host groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/host#host_connectivity Host#host_connectivity}
  */
  readonly hostConnectivity?: string;
  /**
  * Parameters for creating or adding initiators to host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/host#initiators Host#initiators}
  */
  readonly initiators: HostInitiators[] | cdktf.IResolvable;
  /**
  * Name of the host. This should be unique across all hosts in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/host#name Host#name}
  */
  readonly name: string;
  /**
  * Operating system of the host. This cannot be updated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/host#os_type Host#os_type}
  */
  readonly osType: string;
}
export interface HostInitiators {
  /**
  * Password for CHAP authentication. This value must be 12 to 64 UTF-8 characters. This password cannot be queried. CHAP password is required when the cluster CHAP mode is mutual authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/host#chap_mutual_password Host#chap_mutual_password}
  */
  readonly chapMutualPassword?: string;
  /**
  * Username for CHAP authentication. This value must be 1 to 64 UTF-8 characters. CHAP username is required when the cluster CHAP mode is mutual authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/host#chap_mutual_username Host#chap_mutual_username}
  */
  readonly chapMutualUsername?: string;
  /**
  * Password for CHAP authentication. This value must be 12 to 64 UTF-8 characters. This password cannot be queried. CHAP password is required when the cluster CHAP mode is single authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/host#chap_single_password Host#chap_single_password}
  */
  readonly chapSinglePassword?: string;
  /**
  * Username for CHAP authentication. This value must be 1 to 64 UTF-8 characters. CHAP username is required when the cluster CHAP mode is single authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/host#chap_single_username Host#chap_single_username}
  */
  readonly chapSingleUsername?: string;
  /**
  * IQN name aka address or NQN name for NVMEoF port types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/host#port_name Host#port_name}
  */
  readonly portName: string;
}

export function hostInitiatorsToTerraform(struct?: HostInitiators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chap_mutual_password: cdktf.stringToTerraform(struct!.chapMutualPassword),
    chap_mutual_username: cdktf.stringToTerraform(struct!.chapMutualUsername),
    chap_single_password: cdktf.stringToTerraform(struct!.chapSinglePassword),
    chap_single_username: cdktf.stringToTerraform(struct!.chapSingleUsername),
    port_name: cdktf.stringToTerraform(struct!.portName),
  }
}


export function hostInitiatorsToHclTerraform(struct?: HostInitiators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chap_mutual_password: {
      value: cdktf.stringToHclTerraform(struct!.chapMutualPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chap_mutual_username: {
      value: cdktf.stringToHclTerraform(struct!.chapMutualUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chap_single_password: {
      value: cdktf.stringToHclTerraform(struct!.chapSinglePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chap_single_username: {
      value: cdktf.stringToHclTerraform(struct!.chapSingleUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_name: {
      value: cdktf.stringToHclTerraform(struct!.portName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostInitiatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HostInitiators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chapMutualPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.chapMutualPassword = this._chapMutualPassword;
    }
    if (this._chapMutualUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.chapMutualUsername = this._chapMutualUsername;
    }
    if (this._chapSinglePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.chapSinglePassword = this._chapSinglePassword;
    }
    if (this._chapSingleUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.chapSingleUsername = this._chapSingleUsername;
    }
    if (this._portName !== undefined) {
      hasAnyValues = true;
      internalValueResult.portName = this._portName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostInitiators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chapMutualPassword = undefined;
      this._chapMutualUsername = undefined;
      this._chapSinglePassword = undefined;
      this._chapSingleUsername = undefined;
      this._portName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chapMutualPassword = value.chapMutualPassword;
      this._chapMutualUsername = value.chapMutualUsername;
      this._chapSinglePassword = value.chapSinglePassword;
      this._chapSingleUsername = value.chapSingleUsername;
      this._portName = value.portName;
    }
  }

  // chap_mutual_password - computed: false, optional: true, required: false
  private _chapMutualPassword?: string; 
  public get chapMutualPassword() {
    return this.getStringAttribute('chap_mutual_password');
  }
  public set chapMutualPassword(value: string) {
    this._chapMutualPassword = value;
  }
  public resetChapMutualPassword() {
    this._chapMutualPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chapMutualPasswordInput() {
    return this._chapMutualPassword;
  }

  // chap_mutual_username - computed: false, optional: true, required: false
  private _chapMutualUsername?: string; 
  public get chapMutualUsername() {
    return this.getStringAttribute('chap_mutual_username');
  }
  public set chapMutualUsername(value: string) {
    this._chapMutualUsername = value;
  }
  public resetChapMutualUsername() {
    this._chapMutualUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chapMutualUsernameInput() {
    return this._chapMutualUsername;
  }

  // chap_single_password - computed: false, optional: true, required: false
  private _chapSinglePassword?: string; 
  public get chapSinglePassword() {
    return this.getStringAttribute('chap_single_password');
  }
  public set chapSinglePassword(value: string) {
    this._chapSinglePassword = value;
  }
  public resetChapSinglePassword() {
    this._chapSinglePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chapSinglePasswordInput() {
    return this._chapSinglePassword;
  }

  // chap_single_username - computed: false, optional: true, required: false
  private _chapSingleUsername?: string; 
  public get chapSingleUsername() {
    return this.getStringAttribute('chap_single_username');
  }
  public set chapSingleUsername(value: string) {
    this._chapSingleUsername = value;
  }
  public resetChapSingleUsername() {
    this._chapSingleUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chapSingleUsernameInput() {
    return this._chapSingleUsername;
  }

  // port_name - computed: false, optional: false, required: true
  private _portName?: string; 
  public get portName() {
    return this.getStringAttribute('port_name');
  }
  public set portName(value: string) {
    this._portName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNameInput() {
    return this._portName;
  }

  // port_type - computed: true, optional: false, required: false
  public get portType() {
    return this.getStringAttribute('port_type');
  }
}

export class HostInitiatorsList extends cdktf.ComplexList {
  public internalValue? : HostInitiators[] | cdktf.IResolvable

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
  public get(index: number): HostInitiatorsOutputReference {
    return new HostInitiatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/host powerstore_host}
*/
export class Host extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerstore_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Host resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Host to import
  * @param importFromId The id of the existing Host that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Host to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerstore_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/host powerstore_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HostConfig
  */
  public constructor(scope: Construct, id: string, config: HostConfig) {
    super(scope, id, {
      terraformResourceType: 'powerstore_host',
      terraformGeneratorMetadata: {
        providerName: 'powerstore',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._hostConnectivity = config.hostConnectivity;
    this._initiators.internalValue = config.initiators;
    this._name = config.name;
    this._osType = config.osType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // host_connectivity - computed: true, optional: true, required: false
  private _hostConnectivity?: string; 
  public get hostConnectivity() {
    return this.getStringAttribute('host_connectivity');
  }
  public set hostConnectivity(value: string) {
    this._hostConnectivity = value;
  }
  public resetHostConnectivity() {
    this._hostConnectivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostConnectivityInput() {
    return this._hostConnectivity;
  }

  // host_group_id - computed: true, optional: false, required: false
  public get hostGroupId() {
    return this.getStringAttribute('host_group_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // initiators - computed: false, optional: false, required: true
  private _initiators = new HostInitiatorsList(this, "initiators", true);
  public get initiators() {
    return this._initiators;
  }
  public putInitiators(value: HostInitiators[] | cdktf.IResolvable) {
    this._initiators.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initiatorsInput() {
    return this._initiators.internalValue;
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

  // os_type - computed: false, optional: false, required: true
  private _osType?: string; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      host_connectivity: cdktf.stringToTerraform(this._hostConnectivity),
      initiators: cdktf.listMapper(hostInitiatorsToTerraform, false)(this._initiators.internalValue),
      name: cdktf.stringToTerraform(this._name),
      os_type: cdktf.stringToTerraform(this._osType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_connectivity: {
        value: cdktf.stringToHclTerraform(this._hostConnectivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initiators: {
        value: cdktf.listMapperHcl(hostInitiatorsToHclTerraform, false)(this._initiators.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HostInitiatorsList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_type: {
        value: cdktf.stringToHclTerraform(this._osType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
