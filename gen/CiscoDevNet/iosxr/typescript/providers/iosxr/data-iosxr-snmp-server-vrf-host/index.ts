// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/snmp_server_vrf_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrSnmpServerVrfHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify hosts to receive SNMP notifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/snmp_server_vrf_host#address DataIosxrSnmpServerVrfHost#address}
  */
  readonly address: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/snmp_server_vrf_host#device DataIosxrSnmpServerVrfHost#device}
  */
  readonly device?: string;
  /**
  * VRF name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/snmp_server_vrf_host#vrf_name DataIosxrSnmpServerVrfHost#vrf_name}
  */
  readonly vrfName: string;
}
export interface DataIosxrSnmpServerVrfHostUnencryptedStrings {
}

export function dataIosxrSnmpServerVrfHostUnencryptedStringsToTerraform(struct?: DataIosxrSnmpServerVrfHostUnencryptedStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrSnmpServerVrfHostUnencryptedStringsToHclTerraform(struct?: DataIosxrSnmpServerVrfHostUnencryptedStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrSnmpServerVrfHostUnencryptedStringsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIosxrSnmpServerVrfHostUnencryptedStrings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrSnmpServerVrfHostUnencryptedStrings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // community_string - computed: true, optional: false, required: false
  public get communityString() {
    return this.getStringAttribute('community_string');
  }

  // udp_port - computed: true, optional: false, required: false
  public get udpPort() {
    return this.getStringAttribute('udp_port');
  }

  // version_v3_security_level - computed: true, optional: false, required: false
  public get versionV3SecurityLevel() {
    return this.getStringAttribute('version_v3_security_level');
  }
}

export class DataIosxrSnmpServerVrfHostUnencryptedStringsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrSnmpServerVrfHostUnencryptedStringsOutputReference {
    return new DataIosxrSnmpServerVrfHostUnencryptedStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/snmp_server_vrf_host iosxr_snmp_server_vrf_host}
*/
export class DataIosxrSnmpServerVrfHost extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_snmp_server_vrf_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrSnmpServerVrfHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrSnmpServerVrfHost to import
  * @param importFromId The id of the existing DataIosxrSnmpServerVrfHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/snmp_server_vrf_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrSnmpServerVrfHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_snmp_server_vrf_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/snmp_server_vrf_host iosxr_snmp_server_vrf_host} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrSnmpServerVrfHostConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxrSnmpServerVrfHostConfig) {
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
    this._device = config.device;
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

  // unencrypted_strings - computed: true, optional: false, required: false
  private _unencryptedStrings = new DataIosxrSnmpServerVrfHostUnencryptedStringsList(this, "unencrypted_strings", false);
  public get unencryptedStrings() {
    return this._unencryptedStrings;
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
      device: cdktf.stringToTerraform(this._device),
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
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
