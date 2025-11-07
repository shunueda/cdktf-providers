// https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/boot_source_override
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BootSourceOverrideConfig extends cdktf.TerraformMetaArguments {
  /**
  * Time in seconds that the provider waits for the BootSource override job to be completed before timing out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/boot_source_override#boot_source_job_timeout BootSourceOverride#boot_source_job_timeout}
  */
  readonly bootSourceJobTimeout?: number;
  /**
  * The state of the Boot Source Override feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/boot_source_override#boot_source_override_enabled BootSourceOverride#boot_source_override_enabled}
  */
  readonly bootSourceOverrideEnabled?: string;
  /**
  * The BIOS boot mode to be used when boot source is booted from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/boot_source_override#boot_source_override_mode BootSourceOverride#boot_source_override_mode}
  */
  readonly bootSourceOverrideMode?: string;
  /**
  * The boot source override target device to use during the next boot instead of the normal boot device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/boot_source_override#boot_source_override_target BootSourceOverride#boot_source_override_target}
  */
  readonly bootSourceOverrideTarget?: string;
  /**
  * Time in seconds that the provider waits for the server to be reset before timing out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/boot_source_override#reset_timeout BootSourceOverride#reset_timeout}
  */
  readonly resetTimeout?: number;
  /**
  * Reset type allows to choose the type of restart to apply when firmware upgrade is scheduled. Possible values are: "ForceRestart", "GracefulRestart" or "PowerCycle"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/boot_source_override#reset_type BootSourceOverride#reset_type}
  */
  readonly resetType: string;
  /**
  * System ID of the system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/boot_source_override#system_id BootSourceOverride#system_id}
  */
  readonly systemId?: string;
  /**
  * The UEFI device path of the device from which to boot when boot_source_override_target is UefiTarget
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/boot_source_override#uefi_target_boot_source_override BootSourceOverride#uefi_target_boot_source_override}
  */
  readonly uefiTargetBootSourceOverride?: string;
  /**
  * redfish_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/boot_source_override#redfish_server BootSourceOverride#redfish_server}
  */
  readonly redfishServer?: BootSourceOverrideRedfishServer[] | cdktf.IResolvable;
}
export interface BootSourceOverrideRedfishServer {
  /**
  * Server BMC IP address or hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/boot_source_override#endpoint BootSourceOverride#endpoint}
  */
  readonly endpoint?: string;
  /**
  * User password for login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/boot_source_override#password BootSourceOverride#password}
  */
  readonly password?: string;
  /**
  * Alias name for server BMCs. The key in provider's `redfish_servers` map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/boot_source_override#redfish_alias BootSourceOverride#redfish_alias}
  */
  readonly redfishAlias?: string;
  /**
  * This field indicates whether the SSL/TLS certificate must be verified or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/boot_source_override#ssl_insecure BootSourceOverride#ssl_insecure}
  */
  readonly sslInsecure?: boolean | cdktf.IResolvable;
  /**
  * User name for login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/boot_source_override#user BootSourceOverride#user}
  */
  readonly user?: string;
}

export function bootSourceOverrideRedfishServerToTerraform(struct?: BootSourceOverrideRedfishServer | cdktf.IResolvable): any {
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


export function bootSourceOverrideRedfishServerToHclTerraform(struct?: BootSourceOverrideRedfishServer | cdktf.IResolvable): any {
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

export class BootSourceOverrideRedfishServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BootSourceOverrideRedfishServer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BootSourceOverrideRedfishServer | cdktf.IResolvable | undefined) {
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

export class BootSourceOverrideRedfishServerList extends cdktf.ComplexList {
  public internalValue? : BootSourceOverrideRedfishServer[] | cdktf.IResolvable

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
  public get(index: number): BootSourceOverrideRedfishServerOutputReference {
    return new BootSourceOverrideRedfishServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/boot_source_override redfish_boot_source_override}
*/
export class BootSourceOverride extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "redfish_boot_source_override";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BootSourceOverride resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BootSourceOverride to import
  * @param importFromId The id of the existing BootSourceOverride that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/boot_source_override#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BootSourceOverride to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "redfish_boot_source_override", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/boot_source_override redfish_boot_source_override} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BootSourceOverrideConfig
  */
  public constructor(scope: Construct, id: string, config: BootSourceOverrideConfig) {
    super(scope, id, {
      terraformResourceType: 'redfish_boot_source_override',
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
    this._bootSourceJobTimeout = config.bootSourceJobTimeout;
    this._bootSourceOverrideEnabled = config.bootSourceOverrideEnabled;
    this._bootSourceOverrideMode = config.bootSourceOverrideMode;
    this._bootSourceOverrideTarget = config.bootSourceOverrideTarget;
    this._resetTimeout = config.resetTimeout;
    this._resetType = config.resetType;
    this._systemId = config.systemId;
    this._uefiTargetBootSourceOverride = config.uefiTargetBootSourceOverride;
    this._redfishServer.internalValue = config.redfishServer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // boot_source_job_timeout - computed: true, optional: true, required: false
  private _bootSourceJobTimeout?: number; 
  public get bootSourceJobTimeout() {
    return this.getNumberAttribute('boot_source_job_timeout');
  }
  public set bootSourceJobTimeout(value: number) {
    this._bootSourceJobTimeout = value;
  }
  public resetBootSourceJobTimeout() {
    this._bootSourceJobTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootSourceJobTimeoutInput() {
    return this._bootSourceJobTimeout;
  }

  // boot_source_override_enabled - computed: false, optional: true, required: false
  private _bootSourceOverrideEnabled?: string; 
  public get bootSourceOverrideEnabled() {
    return this.getStringAttribute('boot_source_override_enabled');
  }
  public set bootSourceOverrideEnabled(value: string) {
    this._bootSourceOverrideEnabled = value;
  }
  public resetBootSourceOverrideEnabled() {
    this._bootSourceOverrideEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootSourceOverrideEnabledInput() {
    return this._bootSourceOverrideEnabled;
  }

  // boot_source_override_mode - computed: false, optional: true, required: false
  private _bootSourceOverrideMode?: string; 
  public get bootSourceOverrideMode() {
    return this.getStringAttribute('boot_source_override_mode');
  }
  public set bootSourceOverrideMode(value: string) {
    this._bootSourceOverrideMode = value;
  }
  public resetBootSourceOverrideMode() {
    this._bootSourceOverrideMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootSourceOverrideModeInput() {
    return this._bootSourceOverrideMode;
  }

  // boot_source_override_target - computed: false, optional: true, required: false
  private _bootSourceOverrideTarget?: string; 
  public get bootSourceOverrideTarget() {
    return this.getStringAttribute('boot_source_override_target');
  }
  public set bootSourceOverrideTarget(value: string) {
    this._bootSourceOverrideTarget = value;
  }
  public resetBootSourceOverrideTarget() {
    this._bootSourceOverrideTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootSourceOverrideTargetInput() {
    return this._bootSourceOverrideTarget;
  }

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

  // uefi_target_boot_source_override - computed: false, optional: true, required: false
  private _uefiTargetBootSourceOverride?: string; 
  public get uefiTargetBootSourceOverride() {
    return this.getStringAttribute('uefi_target_boot_source_override');
  }
  public set uefiTargetBootSourceOverride(value: string) {
    this._uefiTargetBootSourceOverride = value;
  }
  public resetUefiTargetBootSourceOverride() {
    this._uefiTargetBootSourceOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uefiTargetBootSourceOverrideInput() {
    return this._uefiTargetBootSourceOverride;
  }

  // redfish_server - computed: false, optional: true, required: false
  private _redfishServer = new BootSourceOverrideRedfishServerList(this, "redfish_server", false);
  public get redfishServer() {
    return this._redfishServer;
  }
  public putRedfishServer(value: BootSourceOverrideRedfishServer[] | cdktf.IResolvable) {
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
      boot_source_job_timeout: cdktf.numberToTerraform(this._bootSourceJobTimeout),
      boot_source_override_enabled: cdktf.stringToTerraform(this._bootSourceOverrideEnabled),
      boot_source_override_mode: cdktf.stringToTerraform(this._bootSourceOverrideMode),
      boot_source_override_target: cdktf.stringToTerraform(this._bootSourceOverrideTarget),
      reset_timeout: cdktf.numberToTerraform(this._resetTimeout),
      reset_type: cdktf.stringToTerraform(this._resetType),
      system_id: cdktf.stringToTerraform(this._systemId),
      uefi_target_boot_source_override: cdktf.stringToTerraform(this._uefiTargetBootSourceOverride),
      redfish_server: cdktf.listMapper(bootSourceOverrideRedfishServerToTerraform, true)(this._redfishServer.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      boot_source_job_timeout: {
        value: cdktf.numberToHclTerraform(this._bootSourceJobTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      boot_source_override_enabled: {
        value: cdktf.stringToHclTerraform(this._bootSourceOverrideEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      boot_source_override_mode: {
        value: cdktf.stringToHclTerraform(this._bootSourceOverrideMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      boot_source_override_target: {
        value: cdktf.stringToHclTerraform(this._bootSourceOverrideTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      system_id: {
        value: cdktf.stringToHclTerraform(this._systemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uefi_target_boot_source_override: {
        value: cdktf.stringToHclTerraform(this._uefiTargetBootSourceOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redfish_server: {
        value: cdktf.listMapperHcl(bootSourceOverrideRedfishServerToHclTerraform, true)(this._redfishServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BootSourceOverrideRedfishServerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
