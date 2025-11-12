// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ssh
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SshConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ssh#delete_mode Ssh#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ssh#device Ssh#device}
  */
  readonly device?: string;
  /**
  * Cisco ssh server DSCP
  *   - Range: `0`-`63`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ssh#server_dscp Ssh#server_dscp}
  */
  readonly serverDscp?: number;
  /**
  * Enable ssh server logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ssh#server_logging Ssh#server_logging}
  */
  readonly serverLogging?: boolean | cdktf.IResolvable;
  /**
  * Cisco sshd rate-limit of service requests
  *   - Range: `1`-`600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ssh#server_rate_limit Ssh#server_rate_limit}
  */
  readonly serverRateLimit?: number;
  /**
  * Cisco sshd session-limit of service requests
  *   - Range: `1`-`150`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ssh#server_session_limit Ssh#server_session_limit}
  */
  readonly serverSessionLimit?: number;
  /**
  * Cisco sshd protocol version 2 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ssh#server_v2 Ssh#server_v2}
  */
  readonly serverV2?: boolean | cdktf.IResolvable;
  /**
  * Cisco sshd VRF name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ssh#server_vrfs Ssh#server_vrfs}
  */
  readonly serverVrfs?: SshServerVrfs[] | cdktf.IResolvable;
}
export interface SshServerVrfs {
  /**
  * Configure IPv4 access-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ssh#ipv4_access_list Ssh#ipv4_access_list}
  */
  readonly ipv4AccessList?: string;
  /**
  * Configure IPv6 access-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ssh#ipv6_access_list Ssh#ipv6_access_list}
  */
  readonly ipv6AccessList?: string;
  /**
  * Cisco sshd VRF name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ssh#vrf_name Ssh#vrf_name}
  */
  readonly vrfName: string;
}

export function sshServerVrfsToTerraform(struct?: SshServerVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_access_list: cdktf.stringToTerraform(struct!.ipv4AccessList),
    ipv6_access_list: cdktf.stringToTerraform(struct!.ipv6AccessList),
    vrf_name: cdktf.stringToTerraform(struct!.vrfName),
  }
}


export function sshServerVrfsToHclTerraform(struct?: SshServerVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_access_list: {
      value: cdktf.stringToHclTerraform(struct!.ipv4AccessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_access_list: {
      value: cdktf.stringToHclTerraform(struct!.ipv6AccessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class SshServerVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SshServerVrfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4AccessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AccessList = this._ipv4AccessList;
    }
    if (this._ipv6AccessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AccessList = this._ipv6AccessList;
    }
    if (this._vrfName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfName = this._vrfName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SshServerVrfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4AccessList = undefined;
      this._ipv6AccessList = undefined;
      this._vrfName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4AccessList = value.ipv4AccessList;
      this._ipv6AccessList = value.ipv6AccessList;
      this._vrfName = value.vrfName;
    }
  }

  // ipv4_access_list - computed: false, optional: true, required: false
  private _ipv4AccessList?: string; 
  public get ipv4AccessList() {
    return this.getStringAttribute('ipv4_access_list');
  }
  public set ipv4AccessList(value: string) {
    this._ipv4AccessList = value;
  }
  public resetIpv4AccessList() {
    this._ipv4AccessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AccessListInput() {
    return this._ipv4AccessList;
  }

  // ipv6_access_list - computed: false, optional: true, required: false
  private _ipv6AccessList?: string; 
  public get ipv6AccessList() {
    return this.getStringAttribute('ipv6_access_list');
  }
  public set ipv6AccessList(value: string) {
    this._ipv6AccessList = value;
  }
  public resetIpv6AccessList() {
    this._ipv6AccessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AccessListInput() {
    return this._ipv6AccessList;
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

export class SshServerVrfsList extends cdktf.ComplexList {
  public internalValue? : SshServerVrfs[] | cdktf.IResolvable

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
  public get(index: number): SshServerVrfsOutputReference {
    return new SshServerVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ssh iosxr_ssh}
*/
export class Ssh extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_ssh";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ssh resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ssh to import
  * @param importFromId The id of the existing Ssh that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ssh#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ssh to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_ssh", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ssh iosxr_ssh} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SshConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SshConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxr_ssh',
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
    this._serverDscp = config.serverDscp;
    this._serverLogging = config.serverLogging;
    this._serverRateLimit = config.serverRateLimit;
    this._serverSessionLimit = config.serverSessionLimit;
    this._serverV2 = config.serverV2;
    this._serverVrfs.internalValue = config.serverVrfs;
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

  // server_dscp - computed: false, optional: true, required: false
  private _serverDscp?: number; 
  public get serverDscp() {
    return this.getNumberAttribute('server_dscp');
  }
  public set serverDscp(value: number) {
    this._serverDscp = value;
  }
  public resetServerDscp() {
    this._serverDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverDscpInput() {
    return this._serverDscp;
  }

  // server_logging - computed: false, optional: true, required: false
  private _serverLogging?: boolean | cdktf.IResolvable; 
  public get serverLogging() {
    return this.getBooleanAttribute('server_logging');
  }
  public set serverLogging(value: boolean | cdktf.IResolvable) {
    this._serverLogging = value;
  }
  public resetServerLogging() {
    this._serverLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverLoggingInput() {
    return this._serverLogging;
  }

  // server_rate_limit - computed: false, optional: true, required: false
  private _serverRateLimit?: number; 
  public get serverRateLimit() {
    return this.getNumberAttribute('server_rate_limit');
  }
  public set serverRateLimit(value: number) {
    this._serverRateLimit = value;
  }
  public resetServerRateLimit() {
    this._serverRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRateLimitInput() {
    return this._serverRateLimit;
  }

  // server_session_limit - computed: false, optional: true, required: false
  private _serverSessionLimit?: number; 
  public get serverSessionLimit() {
    return this.getNumberAttribute('server_session_limit');
  }
  public set serverSessionLimit(value: number) {
    this._serverSessionLimit = value;
  }
  public resetServerSessionLimit() {
    this._serverSessionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSessionLimitInput() {
    return this._serverSessionLimit;
  }

  // server_v2 - computed: false, optional: true, required: false
  private _serverV2?: boolean | cdktf.IResolvable; 
  public get serverV2() {
    return this.getBooleanAttribute('server_v2');
  }
  public set serverV2(value: boolean | cdktf.IResolvable) {
    this._serverV2 = value;
  }
  public resetServerV2() {
    this._serverV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverV2Input() {
    return this._serverV2;
  }

  // server_vrfs - computed: false, optional: true, required: false
  private _serverVrfs = new SshServerVrfsList(this, "server_vrfs", false);
  public get serverVrfs() {
    return this._serverVrfs;
  }
  public putServerVrfs(value: SshServerVrfs[] | cdktf.IResolvable) {
    this._serverVrfs.internalValue = value;
  }
  public resetServerVrfs() {
    this._serverVrfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverVrfsInput() {
    return this._serverVrfs.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      server_dscp: cdktf.numberToTerraform(this._serverDscp),
      server_logging: cdktf.booleanToTerraform(this._serverLogging),
      server_rate_limit: cdktf.numberToTerraform(this._serverRateLimit),
      server_session_limit: cdktf.numberToTerraform(this._serverSessionLimit),
      server_v2: cdktf.booleanToTerraform(this._serverV2),
      server_vrfs: cdktf.listMapper(sshServerVrfsToTerraform, false)(this._serverVrfs.internalValue),
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
      server_dscp: {
        value: cdktf.numberToHclTerraform(this._serverDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_logging: {
        value: cdktf.booleanToHclTerraform(this._serverLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      server_rate_limit: {
        value: cdktf.numberToHclTerraform(this._serverRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_session_limit: {
        value: cdktf.numberToHclTerraform(this._serverSessionLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_v2: {
        value: cdktf.booleanToHclTerraform(this._serverV2),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      server_vrfs: {
        value: cdktf.listMapperHcl(sshServerVrfsToHclTerraform, false)(this._serverVrfs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SshServerVrfsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
