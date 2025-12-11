// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/cts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeCtsConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/cts#device DataIosxeCts#device}
  */
  readonly device?: string;
}
export interface DataIosxeCtsSxpConnectionPeersIpv4 {
}

export function dataIosxeCtsSxpConnectionPeersIpv4ToTerraform(struct?: DataIosxeCtsSxpConnectionPeersIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeCtsSxpConnectionPeersIpv4ToHclTerraform(struct?: DataIosxeCtsSxpConnectionPeersIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeCtsSxpConnectionPeersIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeCtsSxpConnectionPeersIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeCtsSxpConnectionPeersIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_mode - computed: true, optional: false, required: false
  public get connectionMode() {
    return this.getStringAttribute('connection_mode');
  }

  // hold_time - computed: true, optional: false, required: false
  public get holdTime() {
    return this.getNumberAttribute('hold_time');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // max_time - computed: true, optional: false, required: false
  public get maxTime() {
    return this.getNumberAttribute('max_time');
  }

  // option - computed: true, optional: false, required: false
  public get option() {
    return this.getStringAttribute('option');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // source_ip - computed: true, optional: false, required: false
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
}

export class DataIosxeCtsSxpConnectionPeersIpv4List extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeCtsSxpConnectionPeersIpv4OutputReference {
    return new DataIosxeCtsSxpConnectionPeersIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeCtsSxpConnectionPeersIpv4Vrf {
}

export function dataIosxeCtsSxpConnectionPeersIpv4VrfToTerraform(struct?: DataIosxeCtsSxpConnectionPeersIpv4Vrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeCtsSxpConnectionPeersIpv4VrfToHclTerraform(struct?: DataIosxeCtsSxpConnectionPeersIpv4Vrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeCtsSxpConnectionPeersIpv4VrfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeCtsSxpConnectionPeersIpv4Vrf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeCtsSxpConnectionPeersIpv4Vrf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_mode - computed: true, optional: false, required: false
  public get connectionMode() {
    return this.getStringAttribute('connection_mode');
  }

  // hold_time - computed: true, optional: false, required: false
  public get holdTime() {
    return this.getNumberAttribute('hold_time');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // max_time - computed: true, optional: false, required: false
  public get maxTime() {
    return this.getNumberAttribute('max_time');
  }

  // option - computed: true, optional: false, required: false
  public get option() {
    return this.getStringAttribute('option');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // source_ip - computed: true, optional: false, required: false
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }

  // vrf - computed: true, optional: false, required: false
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
}

export class DataIosxeCtsSxpConnectionPeersIpv4VrfList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeCtsSxpConnectionPeersIpv4VrfOutputReference {
    return new DataIosxeCtsSxpConnectionPeersIpv4VrfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/cts iosxe_cts}
*/
export class DataIosxeCts extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_cts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeCts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeCts to import
  * @param importFromId The id of the existing DataIosxeCts that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/cts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeCts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_cts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/cts iosxe_cts} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeCtsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxeCtsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_cts',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_list - computed: true, optional: false, required: false
  public get authorizationList() {
    return this.getStringAttribute('authorization_list');
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

  // role_based_enforcement - computed: true, optional: false, required: false
  public get roleBasedEnforcement() {
    return this.getBooleanAttribute('role_based_enforcement');
  }

  // role_based_enforcement_logging_interval - computed: true, optional: false, required: false
  public get roleBasedEnforcementLoggingInterval() {
    return this.getNumberAttribute('role_based_enforcement_logging_interval');
  }

  // role_based_enforcement_vlan_lists - computed: true, optional: false, required: false
  public get roleBasedEnforcementVlanLists() {
    return this.getNumberListAttribute('role_based_enforcement_vlan_lists');
  }

  // role_based_permissions_default_acl_name - computed: true, optional: false, required: false
  public get roleBasedPermissionsDefaultAclName() {
    return this.getListAttribute('role_based_permissions_default_acl_name');
  }

  // sgt - computed: true, optional: false, required: false
  public get sgt() {
    return this.getNumberAttribute('sgt');
  }

  // sxp_connection_peers_ipv4 - computed: true, optional: false, required: false
  private _sxpConnectionPeersIpv4 = new DataIosxeCtsSxpConnectionPeersIpv4List(this, "sxp_connection_peers_ipv4", false);
  public get sxpConnectionPeersIpv4() {
    return this._sxpConnectionPeersIpv4;
  }

  // sxp_connection_peers_ipv4_vrf - computed: true, optional: false, required: false
  private _sxpConnectionPeersIpv4Vrf = new DataIosxeCtsSxpConnectionPeersIpv4VrfList(this, "sxp_connection_peers_ipv4_vrf", false);
  public get sxpConnectionPeersIpv4Vrf() {
    return this._sxpConnectionPeersIpv4Vrf;
  }

  // sxp_default_password - computed: true, optional: false, required: false
  public get sxpDefaultPassword() {
    return this.getStringAttribute('sxp_default_password');
  }

  // sxp_default_password_type - computed: true, optional: false, required: false
  public get sxpDefaultPasswordType() {
    return this.getStringAttribute('sxp_default_password_type');
  }

  // sxp_enable - computed: true, optional: false, required: false
  public get sxpEnable() {
    return this.getBooleanAttribute('sxp_enable');
  }

  // sxp_listener_hold_max_time - computed: true, optional: false, required: false
  public get sxpListenerHoldMaxTime() {
    return this.getNumberAttribute('sxp_listener_hold_max_time');
  }

  // sxp_listener_hold_min_time - computed: true, optional: false, required: false
  public get sxpListenerHoldMinTime() {
    return this.getNumberAttribute('sxp_listener_hold_min_time');
  }

  // sxp_retry_period - computed: true, optional: false, required: false
  public get sxpRetryPeriod() {
    return this.getNumberAttribute('sxp_retry_period');
  }

  // sxp_speaker_hold_time - computed: true, optional: false, required: false
  public get sxpSpeakerHoldTime() {
    return this.getNumberAttribute('sxp_speaker_hold_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
