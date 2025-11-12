// https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/machineclient
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MachineclientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Number of seconds before an access token expires. Default and maximum is 3600 seconds (1 hour) for regular machine clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/machineclient#access_token_life_time Machineclient#access_token_life_time}
  */
  readonly accessTokenLifeTime?: number;
  /**
  * When this is enabled the client can only use the delegation grant type. This is used when an already logged in user will create a long-lived delegation access_token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/machineclient#is_delegation_client Machineclient#is_delegation_client}
  */
  readonly isDelegationClient?: boolean | cdktf.IResolvable;
  /**
  * The name of the client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/machineclient#name Machineclient#name}
  */
  readonly name: string;
  /**
  * A change in value for this field will force recreating the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/machineclient#resource_taint_version Machineclient#resource_taint_version}
  */
  readonly resourceTaintVersion?: string;
  /**
  * The scopes the client can request, note that scopes are auto approved in test and must be approved by an admin in production.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/machineclient#scopes Machineclient#scopes}
  */
  readonly scopes: string[];
  /**
  * When this is enabled it's possible to login with a test user to this client without using GUI. This is done by using grant-type password for the token endpoint. See ElvID space on confluence for details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/machineclient#test_user_login_enabled Machineclient#test_user_login_enabled}
  */
  readonly testUserLoginEnabled?: boolean | cdktf.IResolvable;
  /**
  * client_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/machineclient#client_claims Machineclient#client_claims}
  */
  readonly clientClaims?: MachineclientClientClaims[] | cdktf.IResolvable;
}
export interface MachineclientClientClaims {
  /**
  * Type of the claim, must start with 'client_'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/machineclient#type Machineclient#type}
  */
  readonly type: string;
  /**
  * List of values associated with the claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/machineclient#values Machineclient#values}
  */
  readonly values: string[];
}

export function machineclientClientClaimsToTerraform(struct?: MachineclientClientClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function machineclientClientClaimsToHclTerraform(struct?: MachineclientClientClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineclientClientClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MachineclientClientClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineclientClientClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._values = value.values;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class MachineclientClientClaimsList extends cdktf.ComplexList {
  public internalValue? : MachineclientClientClaims[] | cdktf.IResolvable

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
  public get(index: number): MachineclientClientClaimsOutputReference {
    return new MachineclientClientClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/machineclient elvid_machineclient}
*/
export class Machineclient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elvid_machineclient";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Machineclient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Machineclient to import
  * @param importFromId The id of the existing Machineclient that should be imported. Refer to the {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/machineclient#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Machineclient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elvid_machineclient", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/machineclient elvid_machineclient} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MachineclientConfig
  */
  public constructor(scope: Construct, id: string, config: MachineclientConfig) {
    super(scope, id, {
      terraformResourceType: 'elvid_machineclient',
      terraformGeneratorMetadata: {
        providerName: 'elvid',
        providerVersion: '2.1.1',
        providerVersionConstraint: '2.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessTokenLifeTime = config.accessTokenLifeTime;
    this._isDelegationClient = config.isDelegationClient;
    this._name = config.name;
    this._resourceTaintVersion = config.resourceTaintVersion;
    this._scopes = config.scopes;
    this._testUserLoginEnabled = config.testUserLoginEnabled;
    this._clientClaims.internalValue = config.clientClaims;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_life_time - computed: true, optional: true, required: false
  private _accessTokenLifeTime?: number; 
  public get accessTokenLifeTime() {
    return this.getNumberAttribute('access_token_life_time');
  }
  public set accessTokenLifeTime(value: number) {
    this._accessTokenLifeTime = value;
  }
  public resetAccessTokenLifeTime() {
    this._accessTokenLifeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenLifeTimeInput() {
    return this._accessTokenLifeTime;
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_delegation_client - computed: true, optional: true, required: false
  private _isDelegationClient?: boolean | cdktf.IResolvable; 
  public get isDelegationClient() {
    return this.getBooleanAttribute('is_delegation_client');
  }
  public set isDelegationClient(value: boolean | cdktf.IResolvable) {
    this._isDelegationClient = value;
  }
  public resetIsDelegationClient() {
    this._isDelegationClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDelegationClientInput() {
    return this._isDelegationClient;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resource_taint_version - computed: true, optional: true, required: false
  private _resourceTaintVersion?: string; 
  public get resourceTaintVersion() {
    return this.getStringAttribute('resource_taint_version');
  }
  public set resourceTaintVersion(value: string) {
    this._resourceTaintVersion = value;
  }
  public resetResourceTaintVersion() {
    this._resourceTaintVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTaintVersionInput() {
    return this._resourceTaintVersion;
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // test_user_login_enabled - computed: true, optional: true, required: false
  private _testUserLoginEnabled?: boolean | cdktf.IResolvable; 
  public get testUserLoginEnabled() {
    return this.getBooleanAttribute('test_user_login_enabled');
  }
  public set testUserLoginEnabled(value: boolean | cdktf.IResolvable) {
    this._testUserLoginEnabled = value;
  }
  public resetTestUserLoginEnabled() {
    this._testUserLoginEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testUserLoginEnabledInput() {
    return this._testUserLoginEnabled;
  }

  // token_endpoint - computed: true, optional: false, required: false
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }

  // client_claims - computed: false, optional: true, required: false
  private _clientClaims = new MachineclientClientClaimsList(this, "client_claims", true);
  public get clientClaims() {
    return this._clientClaims;
  }
  public putClientClaims(value: MachineclientClientClaims[] | cdktf.IResolvable) {
    this._clientClaims.internalValue = value;
  }
  public resetClientClaims() {
    this._clientClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientClaimsInput() {
    return this._clientClaims.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token_life_time: cdktf.numberToTerraform(this._accessTokenLifeTime),
      is_delegation_client: cdktf.booleanToTerraform(this._isDelegationClient),
      name: cdktf.stringToTerraform(this._name),
      resource_taint_version: cdktf.stringToTerraform(this._resourceTaintVersion),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      test_user_login_enabled: cdktf.booleanToTerraform(this._testUserLoginEnabled),
      client_claims: cdktf.listMapper(machineclientClientClaimsToTerraform, true)(this._clientClaims.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token_life_time: {
        value: cdktf.numberToHclTerraform(this._accessTokenLifeTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_delegation_client: {
        value: cdktf.booleanToHclTerraform(this._isDelegationClient),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_taint_version: {
        value: cdktf.stringToHclTerraform(this._resourceTaintVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      test_user_login_enabled: {
        value: cdktf.booleanToHclTerraform(this._testUserLoginEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_claims: {
        value: cdktf.listMapperHcl(machineclientClientClaimsToHclTerraform, true)(this._clientClaims.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MachineclientClientClaimsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
