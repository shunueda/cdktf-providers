// https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/data-sources/inventory_reachability
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNdfcInventoryReachabilityConfig extends cdktf.TerraformMetaArguments {
  /**
  * The authentication protocol to use for the devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/data-sources/inventory_reachability#auth_protocol DataNdfcInventoryReachability#auth_protocol}
  */
  readonly authProtocol: string;
  /**
  * The name of the fabric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/data-sources/inventory_reachability#fabric_name DataNdfcInventoryReachability#fabric_name}
  */
  readonly fabricName: string;
  /**
  * The maximum number of hops to use during the discovery of devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/data-sources/inventory_reachability#max_hops DataNdfcInventoryReachability#max_hops}
  */
  readonly maxHops: number;
  /**
  * The password to use for the devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/data-sources/inventory_reachability#password DataNdfcInventoryReachability#password}
  */
  readonly password: string;
  /**
  * Preserve the configuration of the devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/data-sources/inventory_reachability#preserve_config DataNdfcInventoryReachability#preserve_config}
  */
  readonly preserveConfig: boolean | cdktf.IResolvable;
  /**
  * The seed IP address to use for the discovery devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/data-sources/inventory_reachability#seed_ip DataNdfcInventoryReachability#seed_ip}
  */
  readonly seedIp: string;
  /**
  * Set and use discovery credentials for LAN devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/data-sources/inventory_reachability#set_as_individual_device_write_credential DataNdfcInventoryReachability#set_as_individual_device_write_credential}
  */
  readonly setAsIndividualDeviceWriteCredential: boolean | cdktf.IResolvable;
  /**
  * The username to use for the devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/data-sources/inventory_reachability#username DataNdfcInventoryReachability#username}
  */
  readonly username: string;
}
export interface DataNdfcInventoryReachabilityReachabilityDetails {
}

export function dataNdfcInventoryReachabilityReachabilityDetailsToTerraform(struct?: DataNdfcInventoryReachabilityReachabilityDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNdfcInventoryReachabilityReachabilityDetailsToHclTerraform(struct?: DataNdfcInventoryReachabilityReachabilityDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNdfcInventoryReachabilityReachabilityDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNdfcInventoryReachabilityReachabilityDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNdfcInventoryReachabilityReachabilityDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authenticated - computed: true, optional: false, required: false
  public get authenticated() {
    return this.getBooleanAttribute('authenticated');
  }

  // device_index - computed: true, optional: false, required: false
  public get deviceIndex() {
    return this.getStringAttribute('device_index');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // known - computed: true, optional: false, required: false
  public get known() {
    return this.getBooleanAttribute('known');
  }

  // last_changed - computed: true, optional: false, required: false
  public get lastChanged() {
    return this.getStringAttribute('last_changed');
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // reachable - computed: true, optional: false, required: false
  public get reachable() {
    return this.getBooleanAttribute('reachable');
  }

  // selectable - computed: true, optional: false, required: false
  public get selectable() {
    return this.getBooleanAttribute('selectable');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // valid - computed: true, optional: false, required: false
  public get valid() {
    return this.getBooleanAttribute('valid');
  }

  // vdc_id - computed: true, optional: false, required: false
  public get vdcId() {
    return this.getStringAttribute('vdc_id');
  }

  // vdc_mac - computed: true, optional: false, required: false
  public get vdcMac() {
    return this.getStringAttribute('vdc_mac');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataNdfcInventoryReachabilityReachabilityDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataNdfcInventoryReachabilityReachabilityDetailsOutputReference {
    return new DataNdfcInventoryReachabilityReachabilityDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/data-sources/inventory_reachability ndfc_inventory_reachability}
*/
export class DataNdfcInventoryReachability extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ndfc_inventory_reachability";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNdfcInventoryReachability resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNdfcInventoryReachability to import
  * @param importFromId The id of the existing DataNdfcInventoryReachability that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/data-sources/inventory_reachability#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNdfcInventoryReachability to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ndfc_inventory_reachability", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/data-sources/inventory_reachability ndfc_inventory_reachability} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNdfcInventoryReachabilityConfig
  */
  public constructor(scope: Construct, id: string, config: DataNdfcInventoryReachabilityConfig) {
    super(scope, id, {
      terraformResourceType: 'ndfc_inventory_reachability',
      terraformGeneratorMetadata: {
        providerName: 'ndfc',
        providerVersion: '0.2.0',
        providerVersionConstraint: '0.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authProtocol = config.authProtocol;
    this._fabricName = config.fabricName;
    this._maxHops = config.maxHops;
    this._password = config.password;
    this._preserveConfig = config.preserveConfig;
    this._seedIp = config.seedIp;
    this._setAsIndividualDeviceWriteCredential = config.setAsIndividualDeviceWriteCredential;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_protocol - computed: false, optional: false, required: true
  private _authProtocol?: string; 
  public get authProtocol() {
    return this.getStringAttribute('auth_protocol');
  }
  public set authProtocol(value: string) {
    this._authProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authProtocolInput() {
    return this._authProtocol;
  }

  // fabric_name - computed: false, optional: false, required: true
  private _fabricName?: string; 
  public get fabricName() {
    return this.getStringAttribute('fabric_name');
  }
  public set fabricName(value: string) {
    this._fabricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricNameInput() {
    return this._fabricName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_hops - computed: false, optional: false, required: true
  private _maxHops?: number; 
  public get maxHops() {
    return this.getNumberAttribute('max_hops');
  }
  public set maxHops(value: number) {
    this._maxHops = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHopsInput() {
    return this._maxHops;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // preserve_config - computed: false, optional: false, required: true
  private _preserveConfig?: boolean | cdktf.IResolvable; 
  public get preserveConfig() {
    return this.getBooleanAttribute('preserve_config');
  }
  public set preserveConfig(value: boolean | cdktf.IResolvable) {
    this._preserveConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveConfigInput() {
    return this._preserveConfig;
  }

  // reachability_details - computed: true, optional: false, required: false
  private _reachabilityDetails = new DataNdfcInventoryReachabilityReachabilityDetailsList(this, "reachability_details", true);
  public get reachabilityDetails() {
    return this._reachabilityDetails;
  }

  // seed_ip - computed: false, optional: false, required: true
  private _seedIp?: string; 
  public get seedIp() {
    return this.getStringAttribute('seed_ip');
  }
  public set seedIp(value: string) {
    this._seedIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seedIpInput() {
    return this._seedIp;
  }

  // set_as_individual_device_write_credential - computed: false, optional: false, required: true
  private _setAsIndividualDeviceWriteCredential?: boolean | cdktf.IResolvable; 
  public get setAsIndividualDeviceWriteCredential() {
    return this.getBooleanAttribute('set_as_individual_device_write_credential');
  }
  public set setAsIndividualDeviceWriteCredential(value: boolean | cdktf.IResolvable) {
    this._setAsIndividualDeviceWriteCredential = value;
  }
  // Temporarily expose input value. Use with caution.
  public get setAsIndividualDeviceWriteCredentialInput() {
    return this._setAsIndividualDeviceWriteCredential;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_protocol: cdktf.stringToTerraform(this._authProtocol),
      fabric_name: cdktf.stringToTerraform(this._fabricName),
      max_hops: cdktf.numberToTerraform(this._maxHops),
      password: cdktf.stringToTerraform(this._password),
      preserve_config: cdktf.booleanToTerraform(this._preserveConfig),
      seed_ip: cdktf.stringToTerraform(this._seedIp),
      set_as_individual_device_write_credential: cdktf.booleanToTerraform(this._setAsIndividualDeviceWriteCredential),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_protocol: {
        value: cdktf.stringToHclTerraform(this._authProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_name: {
        value: cdktf.stringToHclTerraform(this._fabricName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_hops: {
        value: cdktf.numberToHclTerraform(this._maxHops),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preserve_config: {
        value: cdktf.booleanToHclTerraform(this._preserveConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      seed_ip: {
        value: cdktf.stringToHclTerraform(this._seedIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_as_individual_device_write_credential: {
        value: cdktf.booleanToHclTerraform(this._setAsIndividualDeviceWriteCredential),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
