// https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_global_resiliency
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CmGlobalResiliencyConfig extends cdktf.TerraformMetaArguments {
  /**
  * DNS Listener Name. The DNS listener name must start with lowercase letters (a-z) and consist only of lowercase letters (a-z) and digits (0-9).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_global_resiliency#dns_listener_name CmGlobalResiliency#dns_listener_name}
  */
  readonly dnsListenerName: string;
  /**
  * DNS Listener Port. Port number must be greater than or equal to 1. Port number must not exceed 65535. Port cannot be updated once created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_global_resiliency#dns_listener_port CmGlobalResiliency#dns_listener_port}
  */
  readonly dnsListenerPort: number;
  /**
  * List of Instances
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_global_resiliency#instances CmGlobalResiliency#instances}
  */
  readonly instances: CmGlobalResiliencyInstances[] | cdktf.IResolvable;
  /**
  * Global Resiliency Group Name. The group name must start with lowercase letters (a-z) and consist only of lowercase letters (a-z) and digits (0-9).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_global_resiliency#name CmGlobalResiliency#name}
  */
  readonly name: string;
  /**
  * Protocols to be added to the Global Resiliency Group. Protocols cannot be updated once created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_global_resiliency#protocols CmGlobalResiliency#protocols}
  */
  readonly protocols: string[];
}
export interface CmGlobalResiliencyInstances {
  /**
  * Address of the Bip-IP Next. A valid IP Address is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_global_resiliency#address CmGlobalResiliency#address}
  */
  readonly address: string;
  /**
  * DNS Listener Address. A valid IP Address is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_global_resiliency#dns_listener_address CmGlobalResiliency#dns_listener_address}
  */
  readonly dnsListenerAddress: string;
  /**
  * GR Group Sunc IP. A valid IP Address with mask is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_global_resiliency#group_sync_address CmGlobalResiliency#group_sync_address}
  */
  readonly groupSyncAddress: string;
  /**
  * Hostname of the Instance to be added
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_global_resiliency#hostname CmGlobalResiliency#hostname}
  */
  readonly hostname: string;
}

export function cmGlobalResiliencyInstancesToTerraform(struct?: CmGlobalResiliencyInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    dns_listener_address: cdktf.stringToTerraform(struct!.dnsListenerAddress),
    group_sync_address: cdktf.stringToTerraform(struct!.groupSyncAddress),
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}


export function cmGlobalResiliencyInstancesToHclTerraform(struct?: CmGlobalResiliencyInstances | cdktf.IResolvable): any {
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
    dns_listener_address: {
      value: cdktf.stringToHclTerraform(struct!.dnsListenerAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_sync_address: {
      value: cdktf.stringToHclTerraform(struct!.groupSyncAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmGlobalResiliencyInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CmGlobalResiliencyInstances | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._dnsListenerAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsListenerAddress = this._dnsListenerAddress;
    }
    if (this._groupSyncAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupSyncAddress = this._groupSyncAddress;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmGlobalResiliencyInstances | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._dnsListenerAddress = undefined;
      this._groupSyncAddress = undefined;
      this._hostname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._dnsListenerAddress = value.dnsListenerAddress;
      this._groupSyncAddress = value.groupSyncAddress;
      this._hostname = value.hostname;
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

  // dns_listener_address - computed: false, optional: false, required: true
  private _dnsListenerAddress?: string; 
  public get dnsListenerAddress() {
    return this.getStringAttribute('dns_listener_address');
  }
  public set dnsListenerAddress(value: string) {
    this._dnsListenerAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsListenerAddressInput() {
    return this._dnsListenerAddress;
  }

  // group_sync_address - computed: false, optional: false, required: true
  private _groupSyncAddress?: string; 
  public get groupSyncAddress() {
    return this.getStringAttribute('group_sync_address');
  }
  public set groupSyncAddress(value: string) {
    this._groupSyncAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSyncAddressInput() {
    return this._groupSyncAddress;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }
}

export class CmGlobalResiliencyInstancesList extends cdktf.ComplexList {
  public internalValue? : CmGlobalResiliencyInstances[] | cdktf.IResolvable

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
  public get(index: number): CmGlobalResiliencyInstancesOutputReference {
    return new CmGlobalResiliencyInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_global_resiliency bigipnext_cm_global_resiliency}
*/
export class CmGlobalResiliency extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigipnext_cm_global_resiliency";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CmGlobalResiliency resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CmGlobalResiliency to import
  * @param importFromId The id of the existing CmGlobalResiliency that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_global_resiliency#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CmGlobalResiliency to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigipnext_cm_global_resiliency", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_global_resiliency bigipnext_cm_global_resiliency} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CmGlobalResiliencyConfig
  */
  public constructor(scope: Construct, id: string, config: CmGlobalResiliencyConfig) {
    super(scope, id, {
      terraformResourceType: 'bigipnext_cm_global_resiliency',
      terraformGeneratorMetadata: {
        providerName: 'bigipnext',
        providerVersion: '1.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dnsListenerName = config.dnsListenerName;
    this._dnsListenerPort = config.dnsListenerPort;
    this._instances.internalValue = config.instances;
    this._name = config.name;
    this._protocols = config.protocols;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_listener_name - computed: false, optional: false, required: true
  private _dnsListenerName?: string; 
  public get dnsListenerName() {
    return this.getStringAttribute('dns_listener_name');
  }
  public set dnsListenerName(value: string) {
    this._dnsListenerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsListenerNameInput() {
    return this._dnsListenerName;
  }

  // dns_listener_port - computed: false, optional: false, required: true
  private _dnsListenerPort?: number; 
  public get dnsListenerPort() {
    return this.getNumberAttribute('dns_listener_port');
  }
  public set dnsListenerPort(value: number) {
    this._dnsListenerPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsListenerPortInput() {
    return this._dnsListenerPort;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instances - computed: false, optional: false, required: true
  private _instances = new CmGlobalResiliencyInstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
  }
  public putInstances(value: CmGlobalResiliencyInstances[] | cdktf.IResolvable) {
    this._instances.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances.internalValue;
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

  // protocols - computed: false, optional: false, required: true
  private _protocols?: string[]; 
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_listener_name: cdktf.stringToTerraform(this._dnsListenerName),
      dns_listener_port: cdktf.numberToTerraform(this._dnsListenerPort),
      instances: cdktf.listMapper(cmGlobalResiliencyInstancesToTerraform, false)(this._instances.internalValue),
      name: cdktf.stringToTerraform(this._name),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_listener_name: {
        value: cdktf.stringToHclTerraform(this._dnsListenerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_listener_port: {
        value: cdktf.numberToHclTerraform(this._dnsListenerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instances: {
        value: cdktf.listMapperHcl(cmGlobalResiliencyInstancesToHclTerraform, false)(this._instances.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CmGlobalResiliencyInstancesList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
