// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/port
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortConfig extends cdktf.TerraformMetaArguments {
  /**
  * Broadcast domain properties
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/port#broadcast_domain Port#broadcast_domain}
  */
  readonly broadcastDomain?: PortBroadcastDomain;
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/port#cx_profile_name Port#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * Port enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/port#enabled Port#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * LAG (ifgrp) properties
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/port#lag Port#lag}
  */
  readonly lag?: PortLag;
  /**
  * Node properties
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/port#node Port#node}
  */
  readonly nodeAttribute: PortNode;
  /**
  * Type of physical or virtual port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/port#type Port#type}
  */
  readonly type: string;
  /**
  * VLAN properties
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/port#vlan Port#vlan}
  */
  readonly vlan?: PortVlan;
}
export interface PortBroadcastDomain {
  /**
  * Broadcast domain UUID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/port#id Port#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the broadcast domain's IPspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/port#ipspace Port#ipspace}
  */
  readonly ipspace?: string;
  /**
  * Name of the broadcast domain, scoped to its IPspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/port#name Port#name}
  */
  readonly name?: string;
}

export function portBroadcastDomainToTerraform(struct?: PortBroadcastDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    ipspace: cdktf.stringToTerraform(struct!.ipspace),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function portBroadcastDomainToHclTerraform(struct?: PortBroadcastDomain | cdktf.IResolvable): any {
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
    ipspace: {
      value: cdktf.stringToHclTerraform(struct!.ipspace),
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

export class PortBroadcastDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortBroadcastDomain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipspace !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipspace = this._ipspace;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortBroadcastDomain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._ipspace = undefined;
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
      this._ipspace = value.ipspace;
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

  // ipspace - computed: true, optional: true, required: false
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
export interface PortLag {
  /**
  * Policy for mapping flows to ports for outbound packets through a LAG (ifgrp)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/port#distribution_policy Port#distribution_policy}
  */
  readonly distributionPolicy: string;
  /**
  * Array of ports belonging to the LAG, regardless of their state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/port#member_ports Port#member_ports}
  */
  readonly memberPorts: string[];
  /**
  * Determines how the ports interact with the switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/port#mode Port#mode}
  */
  readonly mode: string;
}

export function portLagToTerraform(struct?: PortLag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribution_policy: cdktf.stringToTerraform(struct!.distributionPolicy),
    member_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.memberPorts),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function portLagToHclTerraform(struct?: PortLag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distribution_policy: {
      value: cdktf.stringToHclTerraform(struct!.distributionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.memberPorts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortLagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortLag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distributionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributionPolicy = this._distributionPolicy;
    }
    if (this._memberPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberPorts = this._memberPorts;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortLag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distributionPolicy = undefined;
      this._memberPorts = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distributionPolicy = value.distributionPolicy;
      this._memberPorts = value.memberPorts;
      this._mode = value.mode;
    }
  }

  // active_ports - computed: true, optional: false, required: false
  public get activePorts() {
    return cdktf.Fn.tolist(this.getListAttribute('active_ports'));
  }

  // distribution_policy - computed: false, optional: false, required: true
  private _distributionPolicy?: string; 
  public get distributionPolicy() {
    return this.getStringAttribute('distribution_policy');
  }
  public set distributionPolicy(value: string) {
    this._distributionPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionPolicyInput() {
    return this._distributionPolicy;
  }

  // member_ports - computed: false, optional: false, required: true
  private _memberPorts?: string[]; 
  public get memberPorts() {
    return cdktf.Fn.tolist(this.getListAttribute('member_ports'));
  }
  public set memberPorts(value: string[]) {
    this._memberPorts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberPortsInput() {
    return this._memberPorts;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface PortNode {
  /**
  * Node UUID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/port#id Port#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the node on which the port is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/port#name Port#name}
  */
  readonly name?: string;
}

export function portNodeToTerraform(struct?: PortNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function portNodeToHclTerraform(struct?: PortNode | cdktf.IResolvable): any {
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

export class PortNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortNode | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PortNode | cdktf.IResolvable | undefined) {
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
export interface PortVlan {
  /**
  * VLAN base port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/port#base_port Port#base_port}
  */
  readonly basePort: string;
  /**
  * VLAN ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/port#tag Port#tag}
  */
  readonly tag: number;
}

export function portVlanToTerraform(struct?: PortVlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_port: cdktf.stringToTerraform(struct!.basePort),
    tag: cdktf.numberToTerraform(struct!.tag),
  }
}


export function portVlanToHclTerraform(struct?: PortVlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_port: {
      value: cdktf.stringToHclTerraform(struct!.basePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.numberToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortVlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortVlan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePort = this._basePort;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortVlan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basePort = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basePort = value.basePort;
      this._tag = value.tag;
    }
  }

  // base_port - computed: false, optional: false, required: true
  private _basePort?: string; 
  public get basePort() {
    return this.getStringAttribute('base_port');
  }
  public set basePort(value: string) {
    this._basePort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get basePortInput() {
    return this._basePort;
  }

  // tag - computed: false, optional: false, required: true
  private _tag?: number; 
  public get tag() {
    return this.getNumberAttribute('tag');
  }
  public set tag(value: number) {
    this._tag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/port netapp-ontap_port}
*/
export class Port extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_port";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Port resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Port to import
  * @param importFromId The id of the existing Port that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/port#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Port to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_port", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/port netapp-ontap_port} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortConfig
  */
  public constructor(scope: Construct, id: string, config: PortConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_port',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._broadcastDomain.internalValue = config.broadcastDomain;
    this._cxProfileName = config.cxProfileName;
    this._enabled = config.enabled;
    this._lag.internalValue = config.lag;
    this._node.internalValue = config.nodeAttribute;
    this._type = config.type;
    this._vlan.internalValue = config.vlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // broadcast_domain - computed: true, optional: true, required: false
  private _broadcastDomain = new PortBroadcastDomainOutputReference(this, "broadcast_domain");
  public get broadcastDomain() {
    return this._broadcastDomain;
  }
  public putBroadcastDomain(value: PortBroadcastDomain) {
    this._broadcastDomain.internalValue = value;
  }
  public resetBroadcastDomain() {
    this._broadcastDomain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastDomainInput() {
    return this._broadcastDomain.internalValue;
  }

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

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lag - computed: false, optional: true, required: false
  private _lag = new PortLagOutputReference(this, "lag");
  public get lag() {
    return this._lag;
  }
  public putLag(value: PortLag) {
    this._lag.internalValue = value;
  }
  public resetLag() {
    this._lag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lagInput() {
    return this._lag.internalValue;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node - computed: false, optional: false, required: true
  private _node = new PortNodeOutputReference(this, "node");
  public get nodeAttribute() {
    return this._node;
  }
  public putNodeAttribute(value: PortNode) {
    this._node.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node.internalValue;
  }

  // reachability - computed: true, optional: false, required: false
  public get reachability() {
    return this.getStringAttribute('reachability');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan = new PortVlanOutputReference(this, "vlan");
  public get vlan() {
    return this._vlan;
  }
  public putVlan(value: PortVlan) {
    this._vlan.internalValue = value;
  }
  public resetVlan() {
    this._vlan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      broadcast_domain: portBroadcastDomainToTerraform(this._broadcastDomain.internalValue),
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      lag: portLagToTerraform(this._lag.internalValue),
      node: portNodeToTerraform(this._node.internalValue),
      type: cdktf.stringToTerraform(this._type),
      vlan: portVlanToTerraform(this._vlan.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      broadcast_domain: {
        value: portBroadcastDomainToHclTerraform(this._broadcastDomain.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortBroadcastDomain",
      },
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lag: {
        value: portLagToHclTerraform(this._lag.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortLag",
      },
      node: {
        value: portNodeToHclTerraform(this._node.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortNode",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan: {
        value: portVlanToHclTerraform(this._vlan.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortVlan",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
