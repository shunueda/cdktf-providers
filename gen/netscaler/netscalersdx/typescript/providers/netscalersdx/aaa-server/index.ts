// https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/aaa_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AaaServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of external servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/aaa_server#external_servers AaaServer#external_servers}
  */
  readonly externalServers?: AaaServerExternalServers[] | cdktf.IResolvable;
  /**
  * Enable local fallback authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/aaa_server#fallback_local_authentication AaaServer#fallback_local_authentication}
  */
  readonly fallbackLocalAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/aaa_server#id AaaServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Log external group info.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/aaa_server#log_ext_group_info AaaServer#log_ext_group_info}
  */
  readonly logExtGroupInfo?: boolean | cdktf.IResolvable;
  /**
  * Name of primary server name. Minimum length =  1 Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/aaa_server#primary_server_name AaaServer#primary_server_name}
  */
  readonly primaryServerName?: string;
  /**
  * Type of primary server. Supported types 1. LOCAL 2.RADIUS 3.LDAP 4.TACACS 5.KEYSTONE. Minimum length =  1 Maximum length =  32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/aaa_server#primary_server_type AaaServer#primary_server_type}
  */
  readonly primaryServerType: string;
}
export interface AaaServerExternalServers {
  /**
  * Name of external server. Minimum length =  1 Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/aaa_server#external_server_name AaaServer#external_server_name}
  */
  readonly externalServerName: string;
  /**
  * Type of external server. Supported types 1.RADIUS 2.LDAP 3.TACACS 4.KEYSTONE. Minimum length =  1 Maximum length =  32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/aaa_server#external_server_type AaaServer#external_server_type}
  */
  readonly externalServerType: string;
  /**
  * Priority of external server. Minimum value =  2 Maximum value =  
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/aaa_server#priority AaaServer#priority}
  */
  readonly priority: number;
}

export function aaaServerExternalServersToTerraform(struct?: AaaServerExternalServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_server_name: cdktf.stringToTerraform(struct!.externalServerName),
    external_server_type: cdktf.stringToTerraform(struct!.externalServerType),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function aaaServerExternalServersToHclTerraform(struct?: AaaServerExternalServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_server_name: {
      value: cdktf.stringToHclTerraform(struct!.externalServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_server_type: {
      value: cdktf.stringToHclTerraform(struct!.externalServerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AaaServerExternalServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AaaServerExternalServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalServerName = this._externalServerName;
    }
    if (this._externalServerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalServerType = this._externalServerType;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AaaServerExternalServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalServerName = undefined;
      this._externalServerType = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalServerName = value.externalServerName;
      this._externalServerType = value.externalServerType;
      this._priority = value.priority;
    }
  }

  // external_server_name - computed: false, optional: false, required: true
  private _externalServerName?: string; 
  public get externalServerName() {
    return this.getStringAttribute('external_server_name');
  }
  public set externalServerName(value: string) {
    this._externalServerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalServerNameInput() {
    return this._externalServerName;
  }

  // external_server_type - computed: false, optional: false, required: true
  private _externalServerType?: string; 
  public get externalServerType() {
    return this.getStringAttribute('external_server_type');
  }
  public set externalServerType(value: string) {
    this._externalServerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalServerTypeInput() {
    return this._externalServerType;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class AaaServerExternalServersList extends cdktf.ComplexList {
  public internalValue? : AaaServerExternalServers[] | cdktf.IResolvable

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
  public get(index: number): AaaServerExternalServersOutputReference {
    return new AaaServerExternalServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/aaa_server netscalersdx_aaa_server}
*/
export class AaaServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netscalersdx_aaa_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AaaServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AaaServer to import
  * @param importFromId The id of the existing AaaServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/aaa_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AaaServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netscalersdx_aaa_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/aaa_server netscalersdx_aaa_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AaaServerConfig
  */
  public constructor(scope: Construct, id: string, config: AaaServerConfig) {
    super(scope, id, {
      terraformResourceType: 'netscalersdx_aaa_server',
      terraformGeneratorMetadata: {
        providerName: 'netscalersdx',
        providerVersion: '0.7.2',
        providerVersionConstraint: '0.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._externalServers.internalValue = config.externalServers;
    this._fallbackLocalAuthentication = config.fallbackLocalAuthentication;
    this._id = config.id;
    this._logExtGroupInfo = config.logExtGroupInfo;
    this._primaryServerName = config.primaryServerName;
    this._primaryServerType = config.primaryServerType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // external_servers - computed: false, optional: true, required: false
  private _externalServers = new AaaServerExternalServersList(this, "external_servers", false);
  public get externalServers() {
    return this._externalServers;
  }
  public putExternalServers(value: AaaServerExternalServers[] | cdktf.IResolvable) {
    this._externalServers.internalValue = value;
  }
  public resetExternalServers() {
    this._externalServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalServersInput() {
    return this._externalServers.internalValue;
  }

  // fallback_local_authentication - computed: true, optional: true, required: false
  private _fallbackLocalAuthentication?: boolean | cdktf.IResolvable; 
  public get fallbackLocalAuthentication() {
    return this.getBooleanAttribute('fallback_local_authentication');
  }
  public set fallbackLocalAuthentication(value: boolean | cdktf.IResolvable) {
    this._fallbackLocalAuthentication = value;
  }
  public resetFallbackLocalAuthentication() {
    this._fallbackLocalAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackLocalAuthenticationInput() {
    return this._fallbackLocalAuthentication;
  }

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

  // log_ext_group_info - computed: true, optional: true, required: false
  private _logExtGroupInfo?: boolean | cdktf.IResolvable; 
  public get logExtGroupInfo() {
    return this.getBooleanAttribute('log_ext_group_info');
  }
  public set logExtGroupInfo(value: boolean | cdktf.IResolvable) {
    this._logExtGroupInfo = value;
  }
  public resetLogExtGroupInfo() {
    this._logExtGroupInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logExtGroupInfoInput() {
    return this._logExtGroupInfo;
  }

  // primary_server_name - computed: true, optional: true, required: false
  private _primaryServerName?: string; 
  public get primaryServerName() {
    return this.getStringAttribute('primary_server_name');
  }
  public set primaryServerName(value: string) {
    this._primaryServerName = value;
  }
  public resetPrimaryServerName() {
    this._primaryServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryServerNameInput() {
    return this._primaryServerName;
  }

  // primary_server_type - computed: false, optional: false, required: true
  private _primaryServerType?: string; 
  public get primaryServerType() {
    return this.getStringAttribute('primary_server_type');
  }
  public set primaryServerType(value: string) {
    this._primaryServerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryServerTypeInput() {
    return this._primaryServerType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      external_servers: cdktf.listMapper(aaaServerExternalServersToTerraform, false)(this._externalServers.internalValue),
      fallback_local_authentication: cdktf.booleanToTerraform(this._fallbackLocalAuthentication),
      id: cdktf.stringToTerraform(this._id),
      log_ext_group_info: cdktf.booleanToTerraform(this._logExtGroupInfo),
      primary_server_name: cdktf.stringToTerraform(this._primaryServerName),
      primary_server_type: cdktf.stringToTerraform(this._primaryServerType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_servers: {
        value: cdktf.listMapperHcl(aaaServerExternalServersToHclTerraform, false)(this._externalServers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AaaServerExternalServersList",
      },
      fallback_local_authentication: {
        value: cdktf.booleanToHclTerraform(this._fallbackLocalAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_ext_group_info: {
        value: cdktf.booleanToHclTerraform(this._logExtGroupInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      primary_server_name: {
        value: cdktf.stringToHclTerraform(this._primaryServerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_server_type: {
        value: cdktf.stringToHclTerraform(this._primaryServerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
