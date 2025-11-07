// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server_vrf_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpServerVrfHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify hosts to receive SNMP notifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server_vrf_host#address SnmpServerVrfHost#address}
  */
  readonly address: string;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server_vrf_host#delete_mode SnmpServerVrfHost#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server_vrf_host#device SnmpServerVrfHost#device}
  */
  readonly device?: string;
  /**
  * The UNENCRYPTED (cleartext) community string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server_vrf_host#unencrypted_strings SnmpServerVrfHost#unencrypted_strings}
  */
  readonly unencryptedStrings?: SnmpServerVrfHostUnencryptedStrings[] | cdktf.IResolvable;
  /**
  * VRF name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server_vrf_host#vrf_name SnmpServerVrfHost#vrf_name}
  */
  readonly vrfName: string;
}
export interface SnmpServerVrfHostUnencryptedStrings {
  /**
  * The UNENCRYPTED (cleartext) community string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server_vrf_host#community_string SnmpServerVrfHost#community_string}
  */
  readonly communityString: string;
  /**
  * udp port to which notifications should be sent
  *   - Default value: `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server_vrf_host#udp_port SnmpServerVrfHost#udp_port}
  */
  readonly udpPort?: string;
  /**
  * Security level
  *   - Choices: `auth`, `noauth`, `priv`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server_vrf_host#version_v3_security_level SnmpServerVrfHost#version_v3_security_level}
  */
  readonly versionV3SecurityLevel: string;
}

export function snmpServerVrfHostUnencryptedStringsToTerraform(struct?: SnmpServerVrfHostUnencryptedStrings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    community_string: cdktf.stringToTerraform(struct!.communityString),
    udp_port: cdktf.stringToTerraform(struct!.udpPort),
    version_v3_security_level: cdktf.stringToTerraform(struct!.versionV3SecurityLevel),
  }
}


export function snmpServerVrfHostUnencryptedStringsToHclTerraform(struct?: SnmpServerVrfHostUnencryptedStrings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    community_string: {
      value: cdktf.stringToHclTerraform(struct!.communityString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp_port: {
      value: cdktf.stringToHclTerraform(struct!.udpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_v3_security_level: {
      value: cdktf.stringToHclTerraform(struct!.versionV3SecurityLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerVrfHostUnencryptedStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SnmpServerVrfHostUnencryptedStrings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._communityString !== undefined) {
      hasAnyValues = true;
      internalValueResult.communityString = this._communityString;
    }
    if (this._udpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPort = this._udpPort;
    }
    if (this._versionV3SecurityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionV3SecurityLevel = this._versionV3SecurityLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerVrfHostUnencryptedStrings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._communityString = undefined;
      this._udpPort = undefined;
      this._versionV3SecurityLevel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._communityString = value.communityString;
      this._udpPort = value.udpPort;
      this._versionV3SecurityLevel = value.versionV3SecurityLevel;
    }
  }

  // community_string - computed: false, optional: false, required: true
  private _communityString?: string; 
  public get communityString() {
    return this.getStringAttribute('community_string');
  }
  public set communityString(value: string) {
    this._communityString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get communityStringInput() {
    return this._communityString;
  }

  // udp_port - computed: true, optional: true, required: false
  private _udpPort?: string; 
  public get udpPort() {
    return this.getStringAttribute('udp_port');
  }
  public set udpPort(value: string) {
    this._udpPort = value;
  }
  public resetUdpPort() {
    this._udpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortInput() {
    return this._udpPort;
  }

  // version_v3_security_level - computed: false, optional: false, required: true
  private _versionV3SecurityLevel?: string; 
  public get versionV3SecurityLevel() {
    return this.getStringAttribute('version_v3_security_level');
  }
  public set versionV3SecurityLevel(value: string) {
    this._versionV3SecurityLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionV3SecurityLevelInput() {
    return this._versionV3SecurityLevel;
  }
}

export class SnmpServerVrfHostUnencryptedStringsList extends cdktf.ComplexList {
  public internalValue? : SnmpServerVrfHostUnencryptedStrings[] | cdktf.IResolvable

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
  public get(index: number): SnmpServerVrfHostUnencryptedStringsOutputReference {
    return new SnmpServerVrfHostUnencryptedStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server_vrf_host iosxr_snmp_server_vrf_host}
*/
export class SnmpServerVrfHost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_snmp_server_vrf_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmpServerVrfHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmpServerVrfHost to import
  * @param importFromId The id of the existing SnmpServerVrfHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server_vrf_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmpServerVrfHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_snmp_server_vrf_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server_vrf_host iosxr_snmp_server_vrf_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpServerVrfHostConfig
  */
  public constructor(scope: Construct, id: string, config: SnmpServerVrfHostConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_snmp_server_vrf_host',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._unencryptedStrings.internalValue = config.unencryptedStrings;
    this._vrfName = config.vrfName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // unencrypted_strings - computed: false, optional: true, required: false
  private _unencryptedStrings = new SnmpServerVrfHostUnencryptedStringsList(this, "unencrypted_strings", false);
  public get unencryptedStrings() {
    return this._unencryptedStrings;
  }
  public putUnencryptedStrings(value: SnmpServerVrfHostUnencryptedStrings[] | cdktf.IResolvable) {
    this._unencryptedStrings.internalValue = value;
  }
  public resetUnencryptedStrings() {
    this._unencryptedStrings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unencryptedStringsInput() {
    return this._unencryptedStrings.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      unencrypted_strings: cdktf.listMapper(snmpServerVrfHostUnencryptedStringsToTerraform, false)(this._unencryptedStrings.internalValue),
      vrf_name: cdktf.stringToTerraform(this._vrfName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      unencrypted_strings: {
        value: cdktf.listMapperHcl(snmpServerVrfHostUnencryptedStringsToHclTerraform, false)(this._unencryptedStrings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SnmpServerVrfHostUnencryptedStringsList",
      },
      vrf_name: {
        value: cdktf.stringToHclTerraform(this._vrfName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
