// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/bridge_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BridgeDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * <1..16000>;;bridge-domain ID
  *   - Range: `1`-`16000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/bridge_domain#bridge_domain_id BridgeDomain#bridge_domain_id}
  */
  readonly bridgeDomainId: number;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/bridge_domain#delete_mode BridgeDomain#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/bridge_domain#device BridgeDomain#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/bridge_domain#member_interfaces BridgeDomain#member_interfaces}
  */
  readonly memberInterfaces?: BridgeDomainMemberInterfaces[] | cdktf.IResolvable;
  /**
  * 
  *   - Range: `4096`-`16777215`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/bridge_domain#member_vni BridgeDomain#member_vni}
  */
  readonly memberVni?: number;
}
export interface BridgeDomainMemberInterfacesServiceInstances {
  /**
  * 
  *   - Range: `1`-`8000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/bridge_domain#instance_id BridgeDomain#instance_id}
  */
  readonly instanceId: number;
}

export function bridgeDomainMemberInterfacesServiceInstancesToTerraform(struct?: BridgeDomainMemberInterfacesServiceInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
  }
}


export function bridgeDomainMemberInterfacesServiceInstancesToHclTerraform(struct?: BridgeDomainMemberInterfacesServiceInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainMemberInterfacesServiceInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BridgeDomainMemberInterfacesServiceInstances | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainMemberInterfacesServiceInstances | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceId = value.instanceId;
    }
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }
}

export class BridgeDomainMemberInterfacesServiceInstancesList extends cdktf.ComplexList {
  public internalValue? : BridgeDomainMemberInterfacesServiceInstances[] | cdktf.IResolvable

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
  public get(index: number): BridgeDomainMemberInterfacesServiceInstancesOutputReference {
    return new BridgeDomainMemberInterfacesServiceInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BridgeDomainMemberInterfaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/bridge_domain#interface BridgeDomain#interface}
  */
  readonly interface: string;
  /**
  * ethernet service instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/bridge_domain#service_instances BridgeDomain#service_instances}
  */
  readonly serviceInstances?: BridgeDomainMemberInterfacesServiceInstances[] | cdktf.IResolvable;
}

export function bridgeDomainMemberInterfacesToTerraform(struct?: BridgeDomainMemberInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.stringToTerraform(struct!.interface),
    service_instances: cdktf.listMapper(bridgeDomainMemberInterfacesServiceInstancesToTerraform, false)(struct!.serviceInstances),
  }
}


export function bridgeDomainMemberInterfacesToHclTerraform(struct?: BridgeDomainMemberInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_instances: {
      value: cdktf.listMapperHcl(bridgeDomainMemberInterfacesServiceInstancesToHclTerraform, false)(struct!.serviceInstances),
      isBlock: true,
      type: "list",
      storageClassType: "BridgeDomainMemberInterfacesServiceInstancesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainMemberInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BridgeDomainMemberInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._serviceInstances?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceInstances = this._serviceInstances?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainMemberInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interface = undefined;
      this._serviceInstances.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interface = value.interface;
      this._serviceInstances.internalValue = value.serviceInstances;
    }
  }

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // service_instances - computed: false, optional: true, required: false
  private _serviceInstances = new BridgeDomainMemberInterfacesServiceInstancesList(this, "service_instances", false);
  public get serviceInstances() {
    return this._serviceInstances;
  }
  public putServiceInstances(value: BridgeDomainMemberInterfacesServiceInstances[] | cdktf.IResolvable) {
    this._serviceInstances.internalValue = value;
  }
  public resetServiceInstances() {
    this._serviceInstances.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInstancesInput() {
    return this._serviceInstances.internalValue;
  }
}

export class BridgeDomainMemberInterfacesList extends cdktf.ComplexList {
  public internalValue? : BridgeDomainMemberInterfaces[] | cdktf.IResolvable

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
  public get(index: number): BridgeDomainMemberInterfacesOutputReference {
    return new BridgeDomainMemberInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/bridge_domain iosxe_bridge_domain}
*/
export class BridgeDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_bridge_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BridgeDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BridgeDomain to import
  * @param importFromId The id of the existing BridgeDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/bridge_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BridgeDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_bridge_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/bridge_domain iosxe_bridge_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BridgeDomainConfig
  */
  public constructor(scope: Construct, id: string, config: BridgeDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_bridge_domain',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.14.6',
        providerVersionConstraint: '0.14.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bridgeDomainId = config.bridgeDomainId;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._memberInterfaces.internalValue = config.memberInterfaces;
    this._memberVni = config.memberVni;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bridge_domain_id - computed: false, optional: false, required: true
  private _bridgeDomainId?: number; 
  public get bridgeDomainId() {
    return this.getNumberAttribute('bridge_domain_id');
  }
  public set bridgeDomainId(value: number) {
    this._bridgeDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeDomainIdInput() {
    return this._bridgeDomainId;
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member_interfaces - computed: false, optional: true, required: false
  private _memberInterfaces = new BridgeDomainMemberInterfacesList(this, "member_interfaces", false);
  public get memberInterfaces() {
    return this._memberInterfaces;
  }
  public putMemberInterfaces(value: BridgeDomainMemberInterfaces[] | cdktf.IResolvable) {
    this._memberInterfaces.internalValue = value;
  }
  public resetMemberInterfaces() {
    this._memberInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInterfacesInput() {
    return this._memberInterfaces.internalValue;
  }

  // member_vni - computed: false, optional: true, required: false
  private _memberVni?: number; 
  public get memberVni() {
    return this.getNumberAttribute('member_vni');
  }
  public set memberVni(value: number) {
    this._memberVni = value;
  }
  public resetMemberVni() {
    this._memberVni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberVniInput() {
    return this._memberVni;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bridge_domain_id: cdktf.numberToTerraform(this._bridgeDomainId),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      member_interfaces: cdktf.listMapper(bridgeDomainMemberInterfacesToTerraform, false)(this._memberInterfaces.internalValue),
      member_vni: cdktf.numberToTerraform(this._memberVni),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bridge_domain_id: {
        value: cdktf.numberToHclTerraform(this._bridgeDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_interfaces: {
        value: cdktf.listMapperHcl(bridgeDomainMemberInterfacesToHclTerraform, false)(this._memberInterfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BridgeDomainMemberInterfacesList",
      },
      member_vni: {
        value: cdktf.numberToHclTerraform(this._memberVni),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
