// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/infra_ssids
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InfraSsidsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/infra_ssids#broadcast_ssid InfraSsids#broadcast_ssid}
  */
  readonly broadcastSsid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/infra_ssids#captive_portal InfraSsids#captive_portal}
  */
  readonly captivePortal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/infra_ssids#client_limit InfraSsids#client_limit}
  */
  readonly clientLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/infra_ssids#pre_shared_key InfraSsids#pre_shared_key}
  */
  readonly preSharedKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/infra_ssids#primary_key InfraSsids#primary_key}
  */
  readonly primaryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/infra_ssids#radius_server InfraSsids#radius_server}
  */
  readonly radiusServer?: InfraSsidsRadiusServer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/infra_ssids#security_groups InfraSsids#security_groups}
  */
  readonly securityGroups?: InfraSsidsSecurityGroups[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/infra_ssids#security_mode InfraSsids#security_mode}
  */
  readonly securityMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/infra_ssids#user_groups InfraSsids#user_groups}
  */
  readonly userGroups?: InfraSsidsUserGroups[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/infra_ssids#wifi_ssid InfraSsids#wifi_ssid}
  */
  readonly wifiSsid?: string;
}
export interface InfraSsidsRadiusServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/infra_ssids#datasource InfraSsids#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/infra_ssids#primary_key InfraSsids#primary_key}
  */
  readonly primaryKey?: string;
}

export function infraSsidsRadiusServerToTerraform(struct?: InfraSsidsRadiusServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function infraSsidsRadiusServerToHclTerraform(struct?: InfraSsidsRadiusServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InfraSsidsRadiusServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InfraSsidsRadiusServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfraSsidsRadiusServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}
export interface InfraSsidsSecurityGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/infra_ssids#datasource InfraSsids#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/infra_ssids#primary_key InfraSsids#primary_key}
  */
  readonly primaryKey?: string;
}

export function infraSsidsSecurityGroupsToTerraform(struct?: InfraSsidsSecurityGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function infraSsidsSecurityGroupsToHclTerraform(struct?: InfraSsidsSecurityGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InfraSsidsSecurityGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InfraSsidsSecurityGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfraSsidsSecurityGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}

export class InfraSsidsSecurityGroupsList extends cdktf.ComplexList {
  public internalValue? : InfraSsidsSecurityGroups[] | cdktf.IResolvable

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
  public get(index: number): InfraSsidsSecurityGroupsOutputReference {
    return new InfraSsidsSecurityGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InfraSsidsUserGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/infra_ssids#datasource InfraSsids#datasource}
  */
  readonly datasource?: string;
}

export function infraSsidsUserGroupsToTerraform(struct?: InfraSsidsUserGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
  }
}


export function infraSsidsUserGroupsToHclTerraform(struct?: InfraSsidsUserGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InfraSsidsUserGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InfraSsidsUserGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfraSsidsUserGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }
}

export class InfraSsidsUserGroupsList extends cdktf.ComplexList {
  public internalValue? : InfraSsidsUserGroups[] | cdktf.IResolvable

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
  public get(index: number): InfraSsidsUserGroupsOutputReference {
    return new InfraSsidsUserGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/infra_ssids fortisase_infra_ssids}
*/
export class InfraSsids extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_infra_ssids";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InfraSsids resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InfraSsids to import
  * @param importFromId The id of the existing InfraSsids that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/infra_ssids#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InfraSsids to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_infra_ssids", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/infra_ssids fortisase_infra_ssids} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InfraSsidsConfig
  */
  public constructor(scope: Construct, id: string, config: InfraSsidsConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_infra_ssids',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._broadcastSsid = config.broadcastSsid;
    this._captivePortal = config.captivePortal;
    this._clientLimit = config.clientLimit;
    this._preSharedKey = config.preSharedKey;
    this._primaryKey = config.primaryKey;
    this._radiusServer.internalValue = config.radiusServer;
    this._securityGroups.internalValue = config.securityGroups;
    this._securityMode = config.securityMode;
    this._userGroups.internalValue = config.userGroups;
    this._wifiSsid = config.wifiSsid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // broadcast_ssid - computed: true, optional: true, required: false
  private _broadcastSsid?: string; 
  public get broadcastSsid() {
    return this.getStringAttribute('broadcast_ssid');
  }
  public set broadcastSsid(value: string) {
    this._broadcastSsid = value;
  }
  public resetBroadcastSsid() {
    this._broadcastSsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastSsidInput() {
    return this._broadcastSsid;
  }

  // captive_portal - computed: true, optional: true, required: false
  private _captivePortal?: boolean | cdktf.IResolvable; 
  public get captivePortal() {
    return this.getBooleanAttribute('captive_portal');
  }
  public set captivePortal(value: boolean | cdktf.IResolvable) {
    this._captivePortal = value;
  }
  public resetCaptivePortal() {
    this._captivePortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captivePortalInput() {
    return this._captivePortal;
  }

  // client_limit - computed: true, optional: true, required: false
  private _clientLimit?: number; 
  public get clientLimit() {
    return this.getNumberAttribute('client_limit');
  }
  public set clientLimit(value: number) {
    this._clientLimit = value;
  }
  public resetClientLimit() {
    this._clientLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientLimitInput() {
    return this._clientLimit;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pre_shared_key - computed: true, optional: true, required: false
  private _preSharedKey?: string; 
  public get preSharedKey() {
    return this.getStringAttribute('pre_shared_key');
  }
  public set preSharedKey(value: string) {
    this._preSharedKey = value;
  }
  public resetPreSharedKey() {
    this._preSharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preSharedKeyInput() {
    return this._preSharedKey;
  }

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // radius_server - computed: true, optional: true, required: false
  private _radiusServer = new InfraSsidsRadiusServerOutputReference(this, "radius_server");
  public get radiusServer() {
    return this._radiusServer;
  }
  public putRadiusServer(value: InfraSsidsRadiusServer) {
    this._radiusServer.internalValue = value;
  }
  public resetRadiusServer() {
    this._radiusServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusServerInput() {
    return this._radiusServer.internalValue;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups = new InfraSsidsSecurityGroupsList(this, "security_groups", false);
  public get securityGroups() {
    return this._securityGroups;
  }
  public putSecurityGroups(value: InfraSsidsSecurityGroups[] | cdktf.IResolvable) {
    this._securityGroups.internalValue = value;
  }
  public resetSecurityGroups() {
    this._securityGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups.internalValue;
  }

  // security_mode - computed: true, optional: true, required: false
  private _securityMode?: string; 
  public get securityMode() {
    return this.getStringAttribute('security_mode');
  }
  public set securityMode(value: string) {
    this._securityMode = value;
  }
  public resetSecurityMode() {
    this._securityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityModeInput() {
    return this._securityMode;
  }

  // user_groups - computed: true, optional: true, required: false
  private _userGroups = new InfraSsidsUserGroupsList(this, "user_groups", false);
  public get userGroups() {
    return this._userGroups;
  }
  public putUserGroups(value: InfraSsidsUserGroups[] | cdktf.IResolvable) {
    this._userGroups.internalValue = value;
  }
  public resetUserGroups() {
    this._userGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupsInput() {
    return this._userGroups.internalValue;
  }

  // wifi_ssid - computed: true, optional: true, required: false
  private _wifiSsid?: string; 
  public get wifiSsid() {
    return this.getStringAttribute('wifi_ssid');
  }
  public set wifiSsid(value: string) {
    this._wifiSsid = value;
  }
  public resetWifiSsid() {
    this._wifiSsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiSsidInput() {
    return this._wifiSsid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      broadcast_ssid: cdktf.stringToTerraform(this._broadcastSsid),
      captive_portal: cdktf.booleanToTerraform(this._captivePortal),
      client_limit: cdktf.numberToTerraform(this._clientLimit),
      pre_shared_key: cdktf.stringToTerraform(this._preSharedKey),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
      radius_server: infraSsidsRadiusServerToTerraform(this._radiusServer.internalValue),
      security_groups: cdktf.listMapper(infraSsidsSecurityGroupsToTerraform, false)(this._securityGroups.internalValue),
      security_mode: cdktf.stringToTerraform(this._securityMode),
      user_groups: cdktf.listMapper(infraSsidsUserGroupsToTerraform, false)(this._userGroups.internalValue),
      wifi_ssid: cdktf.stringToTerraform(this._wifiSsid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      broadcast_ssid: {
        value: cdktf.stringToHclTerraform(this._broadcastSsid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      captive_portal: {
        value: cdktf.booleanToHclTerraform(this._captivePortal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_limit: {
        value: cdktf.numberToHclTerraform(this._clientLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pre_shared_key: {
        value: cdktf.stringToHclTerraform(this._preSharedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_server: {
        value: infraSsidsRadiusServerToHclTerraform(this._radiusServer.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "InfraSsidsRadiusServer",
      },
      security_groups: {
        value: cdktf.listMapperHcl(infraSsidsSecurityGroupsToHclTerraform, false)(this._securityGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InfraSsidsSecurityGroupsList",
      },
      security_mode: {
        value: cdktf.stringToHclTerraform(this._securityMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_groups: {
        value: cdktf.listMapperHcl(infraSsidsUserGroupsToHclTerraform, false)(this._userGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InfraSsidsUserGroupsList",
      },
      wifi_ssid: {
        value: cdktf.stringToHclTerraform(this._wifiSsid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
