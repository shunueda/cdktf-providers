// https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/simple_update
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SimpleUpdateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Time in seconds that the provider waits for the server to be reset before timing out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/simple_update#reset_timeout SimpleUpdate#reset_timeout}
  */
  readonly resetTimeout?: number;
  /**
  * Reset type allows to choose the type of restart to apply when firmware upgrade is scheduled. Possible values are: "ForceRestart", "GracefulRestart" or "PowerCycle"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/simple_update#reset_type SimpleUpdate#reset_type}
  */
  readonly resetType: string;
  /**
  * Time in seconds that the provider waits for the simple update job to be completed before timing out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/simple_update#simple_update_job_timeout SimpleUpdate#simple_update_job_timeout}
  */
  readonly simpleUpdateJobTimeout?: number;
  /**
  * System ID of the system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/simple_update#system_id SimpleUpdate#system_id}
  */
  readonly systemId?: string;
  /**
  * Target firmware image used for firmware update on the redfish instance. Make sure you place your firmware packages in the same folder as the module and set it as follows: "${path.module}/BIOS_FXC54_WN64_1.15.0.EXE"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/simple_update#target_firmware_image SimpleUpdate#target_firmware_image}
  */
  readonly targetFirmwareImage: string;
  /**
  * The network protocol that the Update Service uses to retrieve the software image file located at the URI provided in ImageURI, if the URI does not contain a scheme. Accepted values: CIFS, FTP, SFTP, HTTP, HTTPS, NSF, SCP, TFTP, OEM, NFS. Currently only HTTP, HTTPS and NFS are supported with local file path or HTTP(s)/NFS link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/simple_update#transfer_protocol SimpleUpdate#transfer_protocol}
  */
  readonly transferProtocol: string;
  /**
  * redfish_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/simple_update#redfish_server SimpleUpdate#redfish_server}
  */
  readonly redfishServer?: SimpleUpdateRedfishServer[] | cdktf.IResolvable;
}
export interface SimpleUpdateRedfishServer {
  /**
  * Server BMC IP address or hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/simple_update#endpoint SimpleUpdate#endpoint}
  */
  readonly endpoint?: string;
  /**
  * User password for login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/simple_update#password SimpleUpdate#password}
  */
  readonly password?: string;
  /**
  * Alias name for server BMCs. The key in provider's `redfish_servers` map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/simple_update#redfish_alias SimpleUpdate#redfish_alias}
  */
  readonly redfishAlias?: string;
  /**
  * This field indicates whether the SSL/TLS certificate must be verified or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/simple_update#ssl_insecure SimpleUpdate#ssl_insecure}
  */
  readonly sslInsecure?: boolean | cdktf.IResolvable;
  /**
  * User name for login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/simple_update#user SimpleUpdate#user}
  */
  readonly user?: string;
}

export function simpleUpdateRedfishServerToTerraform(struct?: SimpleUpdateRedfishServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    password: cdktf.stringToTerraform(struct!.password),
    redfish_alias: cdktf.stringToTerraform(struct!.redfishAlias),
    ssl_insecure: cdktf.booleanToTerraform(struct!.sslInsecure),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function simpleUpdateRedfishServerToHclTerraform(struct?: SimpleUpdateRedfishServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redfish_alias: {
      value: cdktf.stringToHclTerraform(struct!.redfishAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_insecure: {
      value: cdktf.booleanToHclTerraform(struct!.sslInsecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SimpleUpdateRedfishServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SimpleUpdateRedfishServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._redfishAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.redfishAlias = this._redfishAlias;
    }
    if (this._sslInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslInsecure = this._sslInsecure;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SimpleUpdateRedfishServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._password = undefined;
      this._redfishAlias = undefined;
      this._sslInsecure = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._password = value.password;
      this._redfishAlias = value.redfishAlias;
      this._sslInsecure = value.sslInsecure;
      this._user = value.user;
    }
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // redfish_alias - computed: false, optional: true, required: false
  private _redfishAlias?: string; 
  public get redfishAlias() {
    return this.getStringAttribute('redfish_alias');
  }
  public set redfishAlias(value: string) {
    this._redfishAlias = value;
  }
  public resetRedfishAlias() {
    this._redfishAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redfishAliasInput() {
    return this._redfishAlias;
  }

  // ssl_insecure - computed: false, optional: true, required: false
  private _sslInsecure?: boolean | cdktf.IResolvable; 
  public get sslInsecure() {
    return this.getBooleanAttribute('ssl_insecure');
  }
  public set sslInsecure(value: boolean | cdktf.IResolvable) {
    this._sslInsecure = value;
  }
  public resetSslInsecure() {
    this._sslInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInsecureInput() {
    return this._sslInsecure;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

export class SimpleUpdateRedfishServerList extends cdktf.ComplexList {
  public internalValue? : SimpleUpdateRedfishServer[] | cdktf.IResolvable

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
  public get(index: number): SimpleUpdateRedfishServerOutputReference {
    return new SimpleUpdateRedfishServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/simple_update redfish_simple_update}
*/
export class SimpleUpdate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "redfish_simple_update";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SimpleUpdate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SimpleUpdate to import
  * @param importFromId The id of the existing SimpleUpdate that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/simple_update#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SimpleUpdate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "redfish_simple_update", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/simple_update redfish_simple_update} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SimpleUpdateConfig
  */
  public constructor(scope: Construct, id: string, config: SimpleUpdateConfig) {
    super(scope, id, {
      terraformResourceType: 'redfish_simple_update',
      terraformGeneratorMetadata: {
        providerName: 'redfish',
        providerVersion: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._resetTimeout = config.resetTimeout;
    this._resetType = config.resetType;
    this._simpleUpdateJobTimeout = config.simpleUpdateJobTimeout;
    this._systemId = config.systemId;
    this._targetFirmwareImage = config.targetFirmwareImage;
    this._transferProtocol = config.transferProtocol;
    this._redfishServer.internalValue = config.redfishServer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // reset_timeout - computed: true, optional: true, required: false
  private _resetTimeout?: number; 
  public get resetTimeout() {
    return this.getNumberAttribute('reset_timeout');
  }
  public set resetTimeout(value: number) {
    this._resetTimeout = value;
  }
  public resetResetTimeout() {
    this._resetTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetTimeoutInput() {
    return this._resetTimeout;
  }

  // reset_type - computed: false, optional: false, required: true
  private _resetType?: string; 
  public get resetType() {
    return this.getStringAttribute('reset_type');
  }
  public set resetType(value: string) {
    this._resetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resetTypeInput() {
    return this._resetType;
  }

  // simple_update_job_timeout - computed: true, optional: true, required: false
  private _simpleUpdateJobTimeout?: number; 
  public get simpleUpdateJobTimeout() {
    return this.getNumberAttribute('simple_update_job_timeout');
  }
  public set simpleUpdateJobTimeout(value: number) {
    this._simpleUpdateJobTimeout = value;
  }
  public resetSimpleUpdateJobTimeout() {
    this._simpleUpdateJobTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleUpdateJobTimeoutInput() {
    return this._simpleUpdateJobTimeout;
  }

  // software_id - computed: true, optional: false, required: false
  public get softwareId() {
    return this.getStringAttribute('software_id');
  }

  // system_id - computed: true, optional: true, required: false
  private _systemId?: string; 
  public get systemId() {
    return this.getStringAttribute('system_id');
  }
  public set systemId(value: string) {
    this._systemId = value;
  }
  public resetSystemId() {
    this._systemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdInput() {
    return this._systemId;
  }

  // target_firmware_image - computed: false, optional: false, required: true
  private _targetFirmwareImage?: string; 
  public get targetFirmwareImage() {
    return this.getStringAttribute('target_firmware_image');
  }
  public set targetFirmwareImage(value: string) {
    this._targetFirmwareImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFirmwareImageInput() {
    return this._targetFirmwareImage;
  }

  // transfer_protocol - computed: false, optional: false, required: true
  private _transferProtocol?: string; 
  public get transferProtocol() {
    return this.getStringAttribute('transfer_protocol');
  }
  public set transferProtocol(value: string) {
    this._transferProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transferProtocolInput() {
    return this._transferProtocol;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // redfish_server - computed: false, optional: true, required: false
  private _redfishServer = new SimpleUpdateRedfishServerList(this, "redfish_server", false);
  public get redfishServer() {
    return this._redfishServer;
  }
  public putRedfishServer(value: SimpleUpdateRedfishServer[] | cdktf.IResolvable) {
    this._redfishServer.internalValue = value;
  }
  public resetRedfishServer() {
    this._redfishServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redfishServerInput() {
    return this._redfishServer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      reset_timeout: cdktf.numberToTerraform(this._resetTimeout),
      reset_type: cdktf.stringToTerraform(this._resetType),
      simple_update_job_timeout: cdktf.numberToTerraform(this._simpleUpdateJobTimeout),
      system_id: cdktf.stringToTerraform(this._systemId),
      target_firmware_image: cdktf.stringToTerraform(this._targetFirmwareImage),
      transfer_protocol: cdktf.stringToTerraform(this._transferProtocol),
      redfish_server: cdktf.listMapper(simpleUpdateRedfishServerToTerraform, true)(this._redfishServer.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      reset_timeout: {
        value: cdktf.numberToHclTerraform(this._resetTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reset_type: {
        value: cdktf.stringToHclTerraform(this._resetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      simple_update_job_timeout: {
        value: cdktf.numberToHclTerraform(this._simpleUpdateJobTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      system_id: {
        value: cdktf.stringToHclTerraform(this._systemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_firmware_image: {
        value: cdktf.stringToHclTerraform(this._targetFirmwareImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transfer_protocol: {
        value: cdktf.stringToHclTerraform(this._transferProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redfish_server: {
        value: cdktf.listMapperHcl(simpleUpdateRedfishServerToHclTerraform, true)(this._redfishServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SimpleUpdateRedfishServerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
