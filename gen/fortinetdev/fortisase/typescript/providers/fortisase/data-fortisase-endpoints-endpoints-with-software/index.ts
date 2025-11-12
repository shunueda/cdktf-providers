// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_endpoints_with_software
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortisaseEndpointsEndpointsWithSoftwareConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_endpoints_with_software#clients DataFortisaseEndpointsEndpointsWithSoftware#clients}
  */
  readonly clients?: DataFortisaseEndpointsEndpointsWithSoftwareClients[] | cdktf.IResolvable;
  /**
  * The ID property of a specific software.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_endpoints_with_software#software_id DataFortisaseEndpointsEndpointsWithSoftware#software_id}
  */
  readonly softwareId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_endpoints_with_software#total DataFortisaseEndpointsEndpointsWithSoftware#total}
  */
  readonly total?: number;
}
export interface DataFortisaseEndpointsEndpointsWithSoftwareClients {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_endpoints_with_software#app_count DataFortisaseEndpointsEndpointsWithSoftware#app_count}
  */
  readonly appCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_endpoints_with_software#client_id DataFortisaseEndpointsEndpointsWithSoftware#client_id}
  */
  readonly clientId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_endpoints_with_software#client_user_id DataFortisaseEndpointsEndpointsWithSoftware#client_user_id}
  */
  readonly clientUserId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_endpoints_with_software#device_host DataFortisaseEndpointsEndpointsWithSoftware#device_host}
  */
  readonly deviceHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_endpoints_with_software#device_id DataFortisaseEndpointsEndpointsWithSoftware#device_id}
  */
  readonly deviceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_endpoints_with_software#device_ip DataFortisaseEndpointsEndpointsWithSoftware#device_ip}
  */
  readonly deviceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_endpoints_with_software#device_os DataFortisaseEndpointsEndpointsWithSoftware#device_os}
  */
  readonly deviceOs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_endpoints_with_software#last_install DataFortisaseEndpointsEndpointsWithSoftware#last_install}
  */
  readonly lastInstall?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_endpoints_with_software#user_icon DataFortisaseEndpointsEndpointsWithSoftware#user_icon}
  */
  readonly userIcon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_endpoints_with_software#user_id DataFortisaseEndpointsEndpointsWithSoftware#user_id}
  */
  readonly userId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_endpoints_with_software#user_name DataFortisaseEndpointsEndpointsWithSoftware#user_name}
  */
  readonly userName?: string;
}

export function dataFortisaseEndpointsEndpointsWithSoftwareClientsToTerraform(struct?: DataFortisaseEndpointsEndpointsWithSoftwareClients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_count: cdktf.numberToTerraform(struct!.appCount),
    client_id: cdktf.numberToTerraform(struct!.clientId),
    client_user_id: cdktf.numberToTerraform(struct!.clientUserId),
    device_host: cdktf.stringToTerraform(struct!.deviceHost),
    device_id: cdktf.numberToTerraform(struct!.deviceId),
    device_ip: cdktf.stringToTerraform(struct!.deviceIp),
    device_os: cdktf.stringToTerraform(struct!.deviceOs),
    last_install: cdktf.stringToTerraform(struct!.lastInstall),
    user_icon: cdktf.stringToTerraform(struct!.userIcon),
    user_id: cdktf.numberToTerraform(struct!.userId),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function dataFortisaseEndpointsEndpointsWithSoftwareClientsToHclTerraform(struct?: DataFortisaseEndpointsEndpointsWithSoftwareClients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_count: {
      value: cdktf.numberToHclTerraform(struct!.appCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_id: {
      value: cdktf.numberToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_user_id: {
      value: cdktf.numberToHclTerraform(struct!.clientUserId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    device_host: {
      value: cdktf.stringToHclTerraform(struct!.deviceHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_id: {
      value: cdktf.numberToHclTerraform(struct!.deviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    device_ip: {
      value: cdktf.stringToHclTerraform(struct!.deviceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_os: {
      value: cdktf.stringToHclTerraform(struct!.deviceOs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_install: {
      value: cdktf.stringToHclTerraform(struct!.lastInstall),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_icon: {
      value: cdktf.stringToHclTerraform(struct!.userIcon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktf.numberToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseEndpointsEndpointsWithSoftwareClientsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisaseEndpointsEndpointsWithSoftwareClients | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.appCount = this._appCount;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientUserId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientUserId = this._clientUserId;
    }
    if (this._deviceHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceHost = this._deviceHost;
    }
    if (this._deviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceId = this._deviceId;
    }
    if (this._deviceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceIp = this._deviceIp;
    }
    if (this._deviceOs !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceOs = this._deviceOs;
    }
    if (this._lastInstall !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastInstall = this._lastInstall;
    }
    if (this._userIcon !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIcon = this._userIcon;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointsEndpointsWithSoftwareClients | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appCount = undefined;
      this._clientId = undefined;
      this._clientUserId = undefined;
      this._deviceHost = undefined;
      this._deviceId = undefined;
      this._deviceIp = undefined;
      this._deviceOs = undefined;
      this._lastInstall = undefined;
      this._userIcon = undefined;
      this._userId = undefined;
      this._userName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appCount = value.appCount;
      this._clientId = value.clientId;
      this._clientUserId = value.clientUserId;
      this._deviceHost = value.deviceHost;
      this._deviceId = value.deviceId;
      this._deviceIp = value.deviceIp;
      this._deviceOs = value.deviceOs;
      this._lastInstall = value.lastInstall;
      this._userIcon = value.userIcon;
      this._userId = value.userId;
      this._userName = value.userName;
    }
  }

  // app_count - computed: true, optional: true, required: false
  private _appCount?: number; 
  public get appCount() {
    return this.getNumberAttribute('app_count');
  }
  public set appCount(value: number) {
    this._appCount = value;
  }
  public resetAppCount() {
    this._appCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appCountInput() {
    return this._appCount;
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: number; 
  public get clientId() {
    return this.getNumberAttribute('client_id');
  }
  public set clientId(value: number) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_user_id - computed: true, optional: true, required: false
  private _clientUserId?: number; 
  public get clientUserId() {
    return this.getNumberAttribute('client_user_id');
  }
  public set clientUserId(value: number) {
    this._clientUserId = value;
  }
  public resetClientUserId() {
    this._clientUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientUserIdInput() {
    return this._clientUserId;
  }

  // device_host - computed: true, optional: true, required: false
  private _deviceHost?: string; 
  public get deviceHost() {
    return this.getStringAttribute('device_host');
  }
  public set deviceHost(value: string) {
    this._deviceHost = value;
  }
  public resetDeviceHost() {
    this._deviceHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceHostInput() {
    return this._deviceHost;
  }

  // device_id - computed: true, optional: true, required: false
  private _deviceId?: number; 
  public get deviceId() {
    return this.getNumberAttribute('device_id');
  }
  public set deviceId(value: number) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // device_ip - computed: true, optional: true, required: false
  private _deviceIp?: string; 
  public get deviceIp() {
    return this.getStringAttribute('device_ip');
  }
  public set deviceIp(value: string) {
    this._deviceIp = value;
  }
  public resetDeviceIp() {
    this._deviceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIpInput() {
    return this._deviceIp;
  }

  // device_os - computed: true, optional: true, required: false
  private _deviceOs?: string; 
  public get deviceOs() {
    return this.getStringAttribute('device_os');
  }
  public set deviceOs(value: string) {
    this._deviceOs = value;
  }
  public resetDeviceOs() {
    this._deviceOs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceOsInput() {
    return this._deviceOs;
  }

  // last_install - computed: true, optional: true, required: false
  private _lastInstall?: string; 
  public get lastInstall() {
    return this.getStringAttribute('last_install');
  }
  public set lastInstall(value: string) {
    this._lastInstall = value;
  }
  public resetLastInstall() {
    this._lastInstall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastInstallInput() {
    return this._lastInstall;
  }

  // user_icon - computed: true, optional: true, required: false
  private _userIcon?: string; 
  public get userIcon() {
    return this.getStringAttribute('user_icon');
  }
  public set userIcon(value: string) {
    this._userIcon = value;
  }
  public resetUserIcon() {
    this._userIcon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIconInput() {
    return this._userIcon;
  }

  // user_id - computed: true, optional: true, required: false
  private _userId?: number; 
  public get userId() {
    return this.getNumberAttribute('user_id');
  }
  public set userId(value: number) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // user_name - computed: true, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}

export class DataFortisaseEndpointsEndpointsWithSoftwareClientsList extends cdktf.ComplexList {
  public internalValue? : DataFortisaseEndpointsEndpointsWithSoftwareClients[] | cdktf.IResolvable

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
  public get(index: number): DataFortisaseEndpointsEndpointsWithSoftwareClientsOutputReference {
    return new DataFortisaseEndpointsEndpointsWithSoftwareClientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_endpoints_with_software fortisase_endpoints_endpoints_with_software}
*/
export class DataFortisaseEndpointsEndpointsWithSoftware extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_endpoints_endpoints_with_software";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortisaseEndpointsEndpointsWithSoftware resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortisaseEndpointsEndpointsWithSoftware to import
  * @param importFromId The id of the existing DataFortisaseEndpointsEndpointsWithSoftware that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_endpoints_with_software#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortisaseEndpointsEndpointsWithSoftware to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_endpoints_endpoints_with_software", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_endpoints_with_software fortisase_endpoints_endpoints_with_software} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortisaseEndpointsEndpointsWithSoftwareConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortisaseEndpointsEndpointsWithSoftwareConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_endpoints_endpoints_with_software',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clients.internalValue = config.clients;
    this._softwareId = config.softwareId;
    this._total = config.total;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clients - computed: true, optional: true, required: false
  private _clients = new DataFortisaseEndpointsEndpointsWithSoftwareClientsList(this, "clients", false);
  public get clients() {
    return this._clients;
  }
  public putClients(value: DataFortisaseEndpointsEndpointsWithSoftwareClients[] | cdktf.IResolvable) {
    this._clients.internalValue = value;
  }
  public resetClients() {
    this._clients.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsInput() {
    return this._clients.internalValue;
  }

  // software_id - computed: false, optional: false, required: true
  private _softwareId?: number; 
  public get softwareId() {
    return this.getNumberAttribute('software_id');
  }
  public set softwareId(value: number) {
    this._softwareId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareIdInput() {
    return this._softwareId;
  }

  // total - computed: true, optional: true, required: false
  private _total?: number; 
  public get total() {
    return this.getNumberAttribute('total');
  }
  public set total(value: number) {
    this._total = value;
  }
  public resetTotal() {
    this._total = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInput() {
    return this._total;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clients: cdktf.listMapper(dataFortisaseEndpointsEndpointsWithSoftwareClientsToTerraform, false)(this._clients.internalValue),
      software_id: cdktf.numberToTerraform(this._softwareId),
      total: cdktf.numberToTerraform(this._total),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clients: {
        value: cdktf.listMapperHcl(dataFortisaseEndpointsEndpointsWithSoftwareClientsToHclTerraform, false)(this._clients.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFortisaseEndpointsEndpointsWithSoftwareClientsList",
      },
      software_id: {
        value: cdktf.numberToHclTerraform(this._softwareId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total: {
        value: cdktf.numberToHclTerraform(this._total),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
