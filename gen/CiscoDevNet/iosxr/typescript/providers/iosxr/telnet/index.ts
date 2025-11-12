// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/telnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TelnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/telnet#delete_mode Telnet#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/telnet#device Telnet#device}
  */
  readonly device?: string;
  /**
  * Source interface for telnet sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/telnet#ipv4_client_source_interface Telnet#ipv4_client_source_interface}
  */
  readonly ipv4ClientSourceInterface?: string;
  /**
  * Source interface for telnet sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/telnet#ipv6_client_source_interface Telnet#ipv6_client_source_interface}
  */
  readonly ipv6ClientSourceInterface?: string;
  /**
  * Name of VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/telnet#vrfs Telnet#vrfs}
  */
  readonly vrfs?: TelnetVrfs[] | cdktf.IResolvable;
  /**
  * Name of VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/telnet#vrfs_dscp Telnet#vrfs_dscp}
  */
  readonly vrfsDscp?: TelnetVrfsDscp[] | cdktf.IResolvable;
}
export interface TelnetVrfs {
  /**
  * Access list for telnet server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/telnet#ipv4_server_access_list Telnet#ipv4_server_access_list}
  */
  readonly ipv4ServerAccessList?: string;
  /**
  * Set number of allowable telnet sessions
  *   - Range: `1`-`100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/telnet#ipv4_server_max_servers Telnet#ipv4_server_max_servers}
  */
  readonly ipv4ServerMaxServers?: number;
  /**
  * Access list for telnet server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/telnet#ipv6_server_access_list Telnet#ipv6_server_access_list}
  */
  readonly ipv6ServerAccessList?: string;
  /**
  * Set number of allowable telnet sessions
  *   - Range: `1`-`100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/telnet#ipv6_server_max_servers Telnet#ipv6_server_max_servers}
  */
  readonly ipv6ServerMaxServers?: number;
  /**
  * Name of VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/telnet#vrf_name Telnet#vrf_name}
  */
  readonly vrfName: string;
}

export function telnetVrfsToTerraform(struct?: TelnetVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_server_access_list: cdktf.stringToTerraform(struct!.ipv4ServerAccessList),
    ipv4_server_max_servers: cdktf.numberToTerraform(struct!.ipv4ServerMaxServers),
    ipv6_server_access_list: cdktf.stringToTerraform(struct!.ipv6ServerAccessList),
    ipv6_server_max_servers: cdktf.numberToTerraform(struct!.ipv6ServerMaxServers),
    vrf_name: cdktf.stringToTerraform(struct!.vrfName),
  }
}


export function telnetVrfsToHclTerraform(struct?: TelnetVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_server_access_list: {
      value: cdktf.stringToHclTerraform(struct!.ipv4ServerAccessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_server_max_servers: {
      value: cdktf.numberToHclTerraform(struct!.ipv4ServerMaxServers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_server_access_list: {
      value: cdktf.stringToHclTerraform(struct!.ipv6ServerAccessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_server_max_servers: {
      value: cdktf.numberToHclTerraform(struct!.ipv6ServerMaxServers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrf_name: {
      value: cdktf.stringToHclTerraform(struct!.vrfName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TelnetVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TelnetVrfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4ServerAccessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4ServerAccessList = this._ipv4ServerAccessList;
    }
    if (this._ipv4ServerMaxServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4ServerMaxServers = this._ipv4ServerMaxServers;
    }
    if (this._ipv6ServerAccessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6ServerAccessList = this._ipv6ServerAccessList;
    }
    if (this._ipv6ServerMaxServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6ServerMaxServers = this._ipv6ServerMaxServers;
    }
    if (this._vrfName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfName = this._vrfName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TelnetVrfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4ServerAccessList = undefined;
      this._ipv4ServerMaxServers = undefined;
      this._ipv6ServerAccessList = undefined;
      this._ipv6ServerMaxServers = undefined;
      this._vrfName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4ServerAccessList = value.ipv4ServerAccessList;
      this._ipv4ServerMaxServers = value.ipv4ServerMaxServers;
      this._ipv6ServerAccessList = value.ipv6ServerAccessList;
      this._ipv6ServerMaxServers = value.ipv6ServerMaxServers;
      this._vrfName = value.vrfName;
    }
  }

  // ipv4_server_access_list - computed: false, optional: true, required: false
  private _ipv4ServerAccessList?: string; 
  public get ipv4ServerAccessList() {
    return this.getStringAttribute('ipv4_server_access_list');
  }
  public set ipv4ServerAccessList(value: string) {
    this._ipv4ServerAccessList = value;
  }
  public resetIpv4ServerAccessList() {
    this._ipv4ServerAccessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ServerAccessListInput() {
    return this._ipv4ServerAccessList;
  }

  // ipv4_server_max_servers - computed: false, optional: true, required: false
  private _ipv4ServerMaxServers?: number; 
  public get ipv4ServerMaxServers() {
    return this.getNumberAttribute('ipv4_server_max_servers');
  }
  public set ipv4ServerMaxServers(value: number) {
    this._ipv4ServerMaxServers = value;
  }
  public resetIpv4ServerMaxServers() {
    this._ipv4ServerMaxServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ServerMaxServersInput() {
    return this._ipv4ServerMaxServers;
  }

  // ipv6_server_access_list - computed: false, optional: true, required: false
  private _ipv6ServerAccessList?: string; 
  public get ipv6ServerAccessList() {
    return this.getStringAttribute('ipv6_server_access_list');
  }
  public set ipv6ServerAccessList(value: string) {
    this._ipv6ServerAccessList = value;
  }
  public resetIpv6ServerAccessList() {
    this._ipv6ServerAccessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ServerAccessListInput() {
    return this._ipv6ServerAccessList;
  }

  // ipv6_server_max_servers - computed: false, optional: true, required: false
  private _ipv6ServerMaxServers?: number; 
  public get ipv6ServerMaxServers() {
    return this.getNumberAttribute('ipv6_server_max_servers');
  }
  public set ipv6ServerMaxServers(value: number) {
    this._ipv6ServerMaxServers = value;
  }
  public resetIpv6ServerMaxServers() {
    this._ipv6ServerMaxServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ServerMaxServersInput() {
    return this._ipv6ServerMaxServers;
  }

  // vrf_name - computed: false, optional: false, required: true
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }
}

export class TelnetVrfsList extends cdktf.ComplexList {
  public internalValue? : TelnetVrfs[] | cdktf.IResolvable

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
  public get(index: number): TelnetVrfsOutputReference {
    return new TelnetVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TelnetVrfsDscp {
  /**
  * dscp
  *   - Range: `0`-`63`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/telnet#ipv4_dscp Telnet#ipv4_dscp}
  */
  readonly ipv4Dscp: number;
  /**
  * Name of VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/telnet#vrf_name Telnet#vrf_name}
  */
  readonly vrfName: string;
}

export function telnetVrfsDscpToTerraform(struct?: TelnetVrfsDscp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_dscp: cdktf.numberToTerraform(struct!.ipv4Dscp),
    vrf_name: cdktf.stringToTerraform(struct!.vrfName),
  }
}


export function telnetVrfsDscpToHclTerraform(struct?: TelnetVrfsDscp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_dscp: {
      value: cdktf.numberToHclTerraform(struct!.ipv4Dscp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrf_name: {
      value: cdktf.stringToHclTerraform(struct!.vrfName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TelnetVrfsDscpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TelnetVrfsDscp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Dscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Dscp = this._ipv4Dscp;
    }
    if (this._vrfName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfName = this._vrfName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TelnetVrfsDscp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Dscp = undefined;
      this._vrfName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Dscp = value.ipv4Dscp;
      this._vrfName = value.vrfName;
    }
  }

  // ipv4_dscp - computed: false, optional: false, required: true
  private _ipv4Dscp?: number; 
  public get ipv4Dscp() {
    return this.getNumberAttribute('ipv4_dscp');
  }
  public set ipv4Dscp(value: number) {
    this._ipv4Dscp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DscpInput() {
    return this._ipv4Dscp;
  }

  // vrf_name - computed: false, optional: false, required: true
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }
}

export class TelnetVrfsDscpList extends cdktf.ComplexList {
  public internalValue? : TelnetVrfsDscp[] | cdktf.IResolvable

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
  public get(index: number): TelnetVrfsDscpOutputReference {
    return new TelnetVrfsDscpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/telnet iosxr_telnet}
*/
export class Telnet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_telnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Telnet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Telnet to import
  * @param importFromId The id of the existing Telnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/telnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Telnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_telnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/telnet iosxr_telnet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TelnetConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TelnetConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxr_telnet',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._ipv4ClientSourceInterface = config.ipv4ClientSourceInterface;
    this._ipv6ClientSourceInterface = config.ipv6ClientSourceInterface;
    this._vrfs.internalValue = config.vrfs;
    this._vrfsDscp.internalValue = config.vrfsDscp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ipv4_client_source_interface - computed: false, optional: true, required: false
  private _ipv4ClientSourceInterface?: string; 
  public get ipv4ClientSourceInterface() {
    return this.getStringAttribute('ipv4_client_source_interface');
  }
  public set ipv4ClientSourceInterface(value: string) {
    this._ipv4ClientSourceInterface = value;
  }
  public resetIpv4ClientSourceInterface() {
    this._ipv4ClientSourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ClientSourceInterfaceInput() {
    return this._ipv4ClientSourceInterface;
  }

  // ipv6_client_source_interface - computed: false, optional: true, required: false
  private _ipv6ClientSourceInterface?: string; 
  public get ipv6ClientSourceInterface() {
    return this.getStringAttribute('ipv6_client_source_interface');
  }
  public set ipv6ClientSourceInterface(value: string) {
    this._ipv6ClientSourceInterface = value;
  }
  public resetIpv6ClientSourceInterface() {
    this._ipv6ClientSourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ClientSourceInterfaceInput() {
    return this._ipv6ClientSourceInterface;
  }

  // vrfs - computed: false, optional: true, required: false
  private _vrfs = new TelnetVrfsList(this, "vrfs", false);
  public get vrfs() {
    return this._vrfs;
  }
  public putVrfs(value: TelnetVrfs[] | cdktf.IResolvable) {
    this._vrfs.internalValue = value;
  }
  public resetVrfs() {
    this._vrfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfsInput() {
    return this._vrfs.internalValue;
  }

  // vrfs_dscp - computed: false, optional: true, required: false
  private _vrfsDscp = new TelnetVrfsDscpList(this, "vrfs_dscp", false);
  public get vrfsDscp() {
    return this._vrfsDscp;
  }
  public putVrfsDscp(value: TelnetVrfsDscp[] | cdktf.IResolvable) {
    this._vrfsDscp.internalValue = value;
  }
  public resetVrfsDscp() {
    this._vrfsDscp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfsDscpInput() {
    return this._vrfsDscp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      ipv4_client_source_interface: cdktf.stringToTerraform(this._ipv4ClientSourceInterface),
      ipv6_client_source_interface: cdktf.stringToTerraform(this._ipv6ClientSourceInterface),
      vrfs: cdktf.listMapper(telnetVrfsToTerraform, false)(this._vrfs.internalValue),
      vrfs_dscp: cdktf.listMapper(telnetVrfsDscpToTerraform, false)(this._vrfsDscp.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      ipv4_client_source_interface: {
        value: cdktf.stringToHclTerraform(this._ipv4ClientSourceInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_client_source_interface: {
        value: cdktf.stringToHclTerraform(this._ipv6ClientSourceInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrfs: {
        value: cdktf.listMapperHcl(telnetVrfsToHclTerraform, false)(this._vrfs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TelnetVrfsList",
      },
      vrfs_dscp: {
        value: cdktf.listMapperHcl(telnetVrfsDscpToHclTerraform, false)(this._vrfsDscp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TelnetVrfsDscpList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
