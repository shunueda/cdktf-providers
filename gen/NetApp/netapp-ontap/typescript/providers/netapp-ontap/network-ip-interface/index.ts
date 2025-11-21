// https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/network_ip_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkIpInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/network_ip_interface#cx_profile_name NetworkIpInterface#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/network_ip_interface#ip NetworkIpInterface#ip}
  */
  readonly ip: NetworkIpInterfaceIp;
  /**
  * IPInterface ipspace name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/network_ip_interface#ipspace NetworkIpInterface#ipspace}
  */
  readonly ipspace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/network_ip_interface#location NetworkIpInterface#location}
  */
  readonly location: NetworkIpInterfaceLocation;
  /**
  * IPInterface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/network_ip_interface#name NetworkIpInterface#name}
  */
  readonly name: string;
  /**
  * IPInterface service policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/network_ip_interface#service_policy NetworkIpInterface#service_policy}
  */
  readonly servicePolicy?: string;
  /**
  * IPInterface svm name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/network_ip_interface#svm_name NetworkIpInterface#svm_name}
  */
  readonly svmName?: string;
}
export interface NetworkIpInterfaceIp {
  /**
  * IPInterface IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/network_ip_interface#address NetworkIpInterface#address}
  */
  readonly address: string;
  /**
  * IPInterface IP netmask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/network_ip_interface#netmask NetworkIpInterface#netmask}
  */
  readonly netmask: number;
}

export function networkIpInterfaceIpToTerraform(struct?: NetworkIpInterfaceIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    netmask: cdktf.numberToTerraform(struct!.netmask),
  }
}


export function networkIpInterfaceIpToHclTerraform(struct?: NetworkIpInterfaceIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netmask: {
      value: cdktf.numberToHclTerraform(struct!.netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkIpInterfaceIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkIpInterfaceIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkIpInterfaceIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._netmask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._netmask = value.netmask;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // netmask - computed: false, optional: false, required: true
  private _netmask?: number; 
  public get netmask() {
    return this.getNumberAttribute('netmask');
  }
  public set netmask(value: number) {
    this._netmask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }
}
export interface NetworkIpInterfaceLocationBroadcastDomain {
  /**
  * Broadcast domain UUID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/network_ip_interface#id NetworkIpInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the broadcast domain, scoped to its IPspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/network_ip_interface#name NetworkIpInterface#name}
  */
  readonly name?: string;
}

export function networkIpInterfaceLocationBroadcastDomainToTerraform(struct?: NetworkIpInterfaceLocationBroadcastDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function networkIpInterfaceLocationBroadcastDomainToHclTerraform(struct?: NetworkIpInterfaceLocationBroadcastDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class NetworkIpInterfaceLocationBroadcastDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkIpInterfaceLocationBroadcastDomain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkIpInterfaceLocationBroadcastDomain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
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
}
export interface NetworkIpInterfaceLocation {
  /**
  * Broadcast domain UUID along with a readable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/network_ip_interface#broadcast_domain NetworkIpInterface#broadcast_domain}
  */
  readonly broadcastDomain?: NetworkIpInterfaceLocationBroadcastDomain;
  /**
  * IPInterface home node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/network_ip_interface#home_node NetworkIpInterface#home_node}
  */
  readonly homeNode?: string;
  /**
  * IPInterface home port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/network_ip_interface#home_port NetworkIpInterface#home_port}
  */
  readonly homePort?: string;
}

export function networkIpInterfaceLocationToTerraform(struct?: NetworkIpInterfaceLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broadcast_domain: networkIpInterfaceLocationBroadcastDomainToTerraform(struct!.broadcastDomain),
    home_node: cdktf.stringToTerraform(struct!.homeNode),
    home_port: cdktf.stringToTerraform(struct!.homePort),
  }
}


export function networkIpInterfaceLocationToHclTerraform(struct?: NetworkIpInterfaceLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broadcast_domain: {
      value: networkIpInterfaceLocationBroadcastDomainToHclTerraform(struct!.broadcastDomain),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkIpInterfaceLocationBroadcastDomain",
    },
    home_node: {
      value: cdktf.stringToHclTerraform(struct!.homeNode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    home_port: {
      value: cdktf.stringToHclTerraform(struct!.homePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkIpInterfaceLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkIpInterfaceLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._broadcastDomain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.broadcastDomain = this._broadcastDomain?.internalValue;
    }
    if (this._homeNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.homeNode = this._homeNode;
    }
    if (this._homePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.homePort = this._homePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkIpInterfaceLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._broadcastDomain.internalValue = undefined;
      this._homeNode = undefined;
      this._homePort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._broadcastDomain.internalValue = value.broadcastDomain;
      this._homeNode = value.homeNode;
      this._homePort = value.homePort;
    }
  }

  // broadcast_domain - computed: true, optional: true, required: false
  private _broadcastDomain = new NetworkIpInterfaceLocationBroadcastDomainOutputReference(this, "broadcast_domain");
  public get broadcastDomain() {
    return this._broadcastDomain;
  }
  public putBroadcastDomain(value: NetworkIpInterfaceLocationBroadcastDomain) {
    this._broadcastDomain.internalValue = value;
  }
  public resetBroadcastDomain() {
    this._broadcastDomain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastDomainInput() {
    return this._broadcastDomain.internalValue;
  }

  // home_node - computed: true, optional: true, required: false
  private _homeNode?: string; 
  public get homeNode() {
    return this.getStringAttribute('home_node');
  }
  public set homeNode(value: string) {
    this._homeNode = value;
  }
  public resetHomeNode() {
    this._homeNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeNodeInput() {
    return this._homeNode;
  }

  // home_port - computed: true, optional: true, required: false
  private _homePort?: string; 
  public get homePort() {
    return this.getStringAttribute('home_port');
  }
  public set homePort(value: string) {
    this._homePort = value;
  }
  public resetHomePort() {
    this._homePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homePortInput() {
    return this._homePort;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/network_ip_interface netapp-ontap_network_ip_interface}
*/
export class NetworkIpInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_network_ip_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkIpInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkIpInterface to import
  * @param importFromId The id of the existing NetworkIpInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/network_ip_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkIpInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_network_ip_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/network_ip_interface netapp-ontap_network_ip_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkIpInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkIpInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_network_ip_interface',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.4.0',
        providerVersionConstraint: '2.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cxProfileName = config.cxProfileName;
    this._ip.internalValue = config.ip;
    this._ipspace = config.ipspace;
    this._location.internalValue = config.location;
    this._name = config.name;
    this._servicePolicy = config.servicePolicy;
    this._svmName = config.svmName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip - computed: false, optional: false, required: true
  private _ip = new NetworkIpInterfaceIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: NetworkIpInterfaceIp) {
    this._ip.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // ipspace - computed: false, optional: true, required: false
  private _ipspace?: string; 
  public get ipspace() {
    return this.getStringAttribute('ipspace');
  }
  public set ipspace(value: string) {
    this._ipspace = value;
  }
  public resetIpspace() {
    this._ipspace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipspaceInput() {
    return this._ipspace;
  }

  // location - computed: false, optional: false, required: true
  private _location = new NetworkIpInterfaceLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: NetworkIpInterfaceLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
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

  // service_policy - computed: true, optional: true, required: false
  private _servicePolicy?: string; 
  public get servicePolicy() {
    return this.getStringAttribute('service_policy');
  }
  public set servicePolicy(value: string) {
    this._servicePolicy = value;
  }
  public resetServicePolicy() {
    this._servicePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePolicyInput() {
    return this._servicePolicy;
  }

  // svm_name - computed: false, optional: true, required: false
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  public resetSvmName() {
    this._svmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      ip: networkIpInterfaceIpToTerraform(this._ip.internalValue),
      ipspace: cdktf.stringToTerraform(this._ipspace),
      location: networkIpInterfaceLocationToTerraform(this._location.internalValue),
      name: cdktf.stringToTerraform(this._name),
      service_policy: cdktf.stringToTerraform(this._servicePolicy),
      svm_name: cdktf.stringToTerraform(this._svmName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip: {
        value: networkIpInterfaceIpToHclTerraform(this._ip.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkIpInterfaceIp",
      },
      ipspace: {
        value: cdktf.stringToHclTerraform(this._ipspace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: networkIpInterfaceLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkIpInterfaceLocation",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_policy: {
        value: cdktf.stringToHclTerraform(this._servicePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      svm_name: {
        value: cdktf.stringToHclTerraform(this._svmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
