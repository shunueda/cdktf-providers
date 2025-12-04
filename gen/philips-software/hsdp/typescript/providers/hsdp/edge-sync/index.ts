// https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/edge_sync
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdgeSyncConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/edge_sync#id EdgeSync#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/edge_sync#serial_number EdgeSync#serial_number}
  */
  readonly serialNumber: string;
  /**
  * A map of arbitrary strings that, when changed, will force the 'hsdp_edge_sync' resource to be replaced, re-sync conifg with the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/edge_sync#triggers EdgeSync#triggers}
  */
  readonly triggers: { [key: string]: string };
  /**
  * principal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/edge_sync#principal EdgeSync#principal}
  */
  readonly principal?: EdgeSyncPrincipal;
}
export interface EdgeSyncPrincipal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/edge_sync#endpoint EdgeSync#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/edge_sync#environment EdgeSync#environment}
  */
  readonly environment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/edge_sync#oauth2_client_id EdgeSync#oauth2_client_id}
  */
  readonly oauth2ClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/edge_sync#oauth2_password EdgeSync#oauth2_password}
  */
  readonly oauth2Password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/edge_sync#password EdgeSync#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/edge_sync#region EdgeSync#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/edge_sync#service_id EdgeSync#service_id}
  */
  readonly serviceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/edge_sync#service_private_key EdgeSync#service_private_key}
  */
  readonly servicePrivateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/edge_sync#uaa_password EdgeSync#uaa_password}
  */
  readonly uaaPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/edge_sync#uaa_username EdgeSync#uaa_username}
  */
  readonly uaaUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/edge_sync#username EdgeSync#username}
  */
  readonly username?: string;
}

export function edgeSyncPrincipalToTerraform(struct?: EdgeSyncPrincipalOutputReference | EdgeSyncPrincipal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    environment: cdktf.stringToTerraform(struct!.environment),
    oauth2_client_id: cdktf.stringToTerraform(struct!.oauth2ClientId),
    oauth2_password: cdktf.stringToTerraform(struct!.oauth2Password),
    password: cdktf.stringToTerraform(struct!.password),
    region: cdktf.stringToTerraform(struct!.region),
    service_id: cdktf.stringToTerraform(struct!.serviceId),
    service_private_key: cdktf.stringToTerraform(struct!.servicePrivateKey),
    uaa_password: cdktf.stringToTerraform(struct!.uaaPassword),
    uaa_username: cdktf.stringToTerraform(struct!.uaaUsername),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function edgeSyncPrincipalToHclTerraform(struct?: EdgeSyncPrincipalOutputReference | EdgeSyncPrincipal): any {
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
    environment: {
      value: cdktf.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth2_client_id: {
      value: cdktf.stringToHclTerraform(struct!.oauth2ClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth2_password: {
      value: cdktf.stringToHclTerraform(struct!.oauth2Password),
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
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_private_key: {
      value: cdktf.stringToHclTerraform(struct!.servicePrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uaa_password: {
      value: cdktf.stringToHclTerraform(struct!.uaaPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uaa_username: {
      value: cdktf.stringToHclTerraform(struct!.uaaUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeSyncPrincipalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgeSyncPrincipal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._oauth2ClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2ClientId = this._oauth2ClientId;
    }
    if (this._oauth2Password !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2Password = this._oauth2Password;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._serviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceId = this._serviceId;
    }
    if (this._servicePrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePrivateKey = this._servicePrivateKey;
    }
    if (this._uaaPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.uaaPassword = this._uaaPassword;
    }
    if (this._uaaUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.uaaUsername = this._uaaUsername;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeSyncPrincipal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
      this._environment = undefined;
      this._oauth2ClientId = undefined;
      this._oauth2Password = undefined;
      this._password = undefined;
      this._region = undefined;
      this._serviceId = undefined;
      this._servicePrivateKey = undefined;
      this._uaaPassword = undefined;
      this._uaaUsername = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
      this._environment = value.environment;
      this._oauth2ClientId = value.oauth2ClientId;
      this._oauth2Password = value.oauth2Password;
      this._password = value.password;
      this._region = value.region;
      this._serviceId = value.serviceId;
      this._servicePrivateKey = value.servicePrivateKey;
      this._uaaPassword = value.uaaPassword;
      this._uaaUsername = value.uaaUsername;
      this._username = value.username;
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

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // oauth2_client_id - computed: false, optional: true, required: false
  private _oauth2ClientId?: string; 
  public get oauth2ClientId() {
    return this.getStringAttribute('oauth2_client_id');
  }
  public set oauth2ClientId(value: string) {
    this._oauth2ClientId = value;
  }
  public resetOauth2ClientId() {
    this._oauth2ClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientIdInput() {
    return this._oauth2ClientId;
  }

  // oauth2_password - computed: false, optional: true, required: false
  private _oauth2Password?: string; 
  public get oauth2Password() {
    return this.getStringAttribute('oauth2_password');
  }
  public set oauth2Password(value: string) {
    this._oauth2Password = value;
  }
  public resetOauth2Password() {
    this._oauth2Password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2PasswordInput() {
    return this._oauth2Password;
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // service_id - computed: false, optional: true, required: false
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // service_private_key - computed: false, optional: true, required: false
  private _servicePrivateKey?: string; 
  public get servicePrivateKey() {
    return this.getStringAttribute('service_private_key');
  }
  public set servicePrivateKey(value: string) {
    this._servicePrivateKey = value;
  }
  public resetServicePrivateKey() {
    this._servicePrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrivateKeyInput() {
    return this._servicePrivateKey;
  }

  // uaa_password - computed: false, optional: true, required: false
  private _uaaPassword?: string; 
  public get uaaPassword() {
    return this.getStringAttribute('uaa_password');
  }
  public set uaaPassword(value: string) {
    this._uaaPassword = value;
  }
  public resetUaaPassword() {
    this._uaaPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uaaPasswordInput() {
    return this._uaaPassword;
  }

  // uaa_username - computed: false, optional: true, required: false
  private _uaaUsername?: string; 
  public get uaaUsername() {
    return this.getStringAttribute('uaa_username');
  }
  public set uaaUsername(value: string) {
    this._uaaUsername = value;
  }
  public resetUaaUsername() {
    this._uaaUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uaaUsernameInput() {
    return this._uaaUsername;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/edge_sync hsdp_edge_sync}
*/
export class EdgeSync extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_edge_sync";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EdgeSync resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdgeSync to import
  * @param importFromId The id of the existing EdgeSync that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/edge_sync#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdgeSync to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_edge_sync", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/edge_sync hsdp_edge_sync} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdgeSyncConfig
  */
  public constructor(scope: Construct, id: string, config: EdgeSyncConfig) {
    super(scope, id, {
      terraformResourceType: 'hsdp_edge_sync',
      terraformGeneratorMetadata: {
        providerName: 'hsdp',
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
    this._id = config.id;
    this._serialNumber = config.serialNumber;
    this._triggers = config.triggers;
    this._principal.internalValue = config.principal;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // serial_number - computed: false, optional: false, required: true
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // triggers - computed: false, optional: false, required: true
  private _triggers?: { [key: string]: string }; 
  public get triggers() {
    return this.getStringMapAttribute('triggers');
  }
  public set triggers(value: { [key: string]: string }) {
    this._triggers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers;
  }

  // principal - computed: false, optional: true, required: false
  private _principal = new EdgeSyncPrincipalOutputReference(this, "principal");
  public get principal() {
    return this._principal;
  }
  public putPrincipal(value: EdgeSyncPrincipal) {
    this._principal.internalValue = value;
  }
  public resetPrincipal() {
    this._principal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      serial_number: cdktf.stringToTerraform(this._serialNumber),
      triggers: cdktf.hashMapper(cdktf.stringToTerraform)(this._triggers),
      principal: edgeSyncPrincipalToTerraform(this._principal.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial_number: {
        value: cdktf.stringToHclTerraform(this._serialNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      triggers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._triggers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      principal: {
        value: edgeSyncPrincipalToHclTerraform(this._principal.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EdgeSyncPrincipalList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
