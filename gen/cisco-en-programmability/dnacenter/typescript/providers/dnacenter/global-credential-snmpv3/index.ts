// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_snmpv3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlobalCredentialSnmpv3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_snmpv3#id GlobalCredentialSnmpv3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_snmpv3#parameters GlobalCredentialSnmpv3#parameters}
  */
  readonly parameters?: GlobalCredentialSnmpv3Parameters;
}
export interface GlobalCredentialSnmpv3Item {
}

export function globalCredentialSnmpv3ItemToTerraform(struct?: GlobalCredentialSnmpv3Item): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function globalCredentialSnmpv3ItemToHclTerraform(struct?: GlobalCredentialSnmpv3Item): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GlobalCredentialSnmpv3ItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GlobalCredentialSnmpv3Item | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalCredentialSnmpv3Item | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // credential_type - computed: true, optional: false, required: false
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_tenant_id - computed: true, optional: false, required: false
  public get instanceTenantId() {
    return this.getStringAttribute('instance_tenant_id');
  }

  // instance_uuid - computed: true, optional: false, required: false
  public get instanceUuid() {
    return this.getStringAttribute('instance_uuid');
  }

  // netconf_port - computed: true, optional: false, required: false
  public get netconfPort() {
    return this.getStringAttribute('netconf_port');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // read_community - computed: true, optional: false, required: false
  public get readCommunity() {
    return this.getStringAttribute('read_community');
  }

  // secure - computed: true, optional: false, required: false
  public get secure() {
    return this.getStringAttribute('secure');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // write_community - computed: true, optional: false, required: false
  public get writeCommunity() {
    return this.getStringAttribute('write_community');
  }
}

export class GlobalCredentialSnmpv3ItemList extends cdktf.ComplexList {

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
  public get(index: number): GlobalCredentialSnmpv3ItemOutputReference {
    return new GlobalCredentialSnmpv3ItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlobalCredentialSnmpv3Parameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_snmpv3#auth_password GlobalCredentialSnmpv3#auth_password}
  */
  readonly authPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_snmpv3#auth_type GlobalCredentialSnmpv3#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_snmpv3#comments GlobalCredentialSnmpv3#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_snmpv3#credential_type GlobalCredentialSnmpv3#credential_type}
  */
  readonly credentialType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_snmpv3#description GlobalCredentialSnmpv3#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_snmpv3#id GlobalCredentialSnmpv3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_snmpv3#instance_tenant_id GlobalCredentialSnmpv3#instance_tenant_id}
  */
  readonly instanceTenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_snmpv3#instance_uuid GlobalCredentialSnmpv3#instance_uuid}
  */
  readonly instanceUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_snmpv3#privacy_password GlobalCredentialSnmpv3#privacy_password}
  */
  readonly privacyPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_snmpv3#privacy_type GlobalCredentialSnmpv3#privacy_type}
  */
  readonly privacyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_snmpv3#snmp_mode GlobalCredentialSnmpv3#snmp_mode}
  */
  readonly snmpMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_snmpv3#username GlobalCredentialSnmpv3#username}
  */
  readonly username?: string;
}

export function globalCredentialSnmpv3ParametersToTerraform(struct?: GlobalCredentialSnmpv3ParametersOutputReference | GlobalCredentialSnmpv3Parameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_password: cdktf.stringToTerraform(struct!.authPassword),
    auth_type: cdktf.stringToTerraform(struct!.authType),
    comments: cdktf.stringToTerraform(struct!.comments),
    credential_type: cdktf.stringToTerraform(struct!.credentialType),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    instance_tenant_id: cdktf.stringToTerraform(struct!.instanceTenantId),
    instance_uuid: cdktf.stringToTerraform(struct!.instanceUuid),
    privacy_password: cdktf.stringToTerraform(struct!.privacyPassword),
    privacy_type: cdktf.stringToTerraform(struct!.privacyType),
    snmp_mode: cdktf.stringToTerraform(struct!.snmpMode),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function globalCredentialSnmpv3ParametersToHclTerraform(struct?: GlobalCredentialSnmpv3ParametersOutputReference | GlobalCredentialSnmpv3Parameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_password: {
      value: cdktf.stringToHclTerraform(struct!.authPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comments: {
      value: cdktf.stringToHclTerraform(struct!.comments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_type: {
      value: cdktf.stringToHclTerraform(struct!.credentialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceTenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_uuid: {
      value: cdktf.stringToHclTerraform(struct!.instanceUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privacy_password: {
      value: cdktf.stringToHclTerraform(struct!.privacyPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privacy_type: {
      value: cdktf.stringToHclTerraform(struct!.privacyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp_mode: {
      value: cdktf.stringToHclTerraform(struct!.snmpMode),
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

export class GlobalCredentialSnmpv3ParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalCredentialSnmpv3Parameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPassword = this._authPassword;
    }
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._comments !== undefined) {
      hasAnyValues = true;
      internalValueResult.comments = this._comments;
    }
    if (this._credentialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialType = this._credentialType;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._instanceTenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceTenantId = this._instanceTenantId;
    }
    if (this._instanceUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUuid = this._instanceUuid;
    }
    if (this._privacyPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacyPassword = this._privacyPassword;
    }
    if (this._privacyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacyType = this._privacyType;
    }
    if (this._snmpMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpMode = this._snmpMode;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalCredentialSnmpv3Parameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authPassword = undefined;
      this._authType = undefined;
      this._comments = undefined;
      this._credentialType = undefined;
      this._description = undefined;
      this._id = undefined;
      this._instanceTenantId = undefined;
      this._instanceUuid = undefined;
      this._privacyPassword = undefined;
      this._privacyType = undefined;
      this._snmpMode = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authPassword = value.authPassword;
      this._authType = value.authType;
      this._comments = value.comments;
      this._credentialType = value.credentialType;
      this._description = value.description;
      this._id = value.id;
      this._instanceTenantId = value.instanceTenantId;
      this._instanceUuid = value.instanceUuid;
      this._privacyPassword = value.privacyPassword;
      this._privacyType = value.privacyType;
      this._snmpMode = value.snmpMode;
      this._username = value.username;
    }
  }

  // auth_password - computed: false, optional: true, required: false
  private _authPassword?: string; 
  public get authPassword() {
    return this.getStringAttribute('auth_password');
  }
  public set authPassword(value: string) {
    this._authPassword = value;
  }
  public resetAuthPassword() {
    this._authPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordInput() {
    return this._authPassword;
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // credential_type - computed: false, optional: true, required: false
  private _credentialType?: string; 
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }
  public set credentialType(value: string) {
    this._credentialType = value;
  }
  public resetCredentialType() {
    this._credentialType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialTypeInput() {
    return this._credentialType;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: false, optional: true, required: false
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

  // instance_tenant_id - computed: false, optional: true, required: false
  private _instanceTenantId?: string; 
  public get instanceTenantId() {
    return this.getStringAttribute('instance_tenant_id');
  }
  public set instanceTenantId(value: string) {
    this._instanceTenantId = value;
  }
  public resetInstanceTenantId() {
    this._instanceTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTenantIdInput() {
    return this._instanceTenantId;
  }

  // instance_uuid - computed: false, optional: true, required: false
  private _instanceUuid?: string; 
  public get instanceUuid() {
    return this.getStringAttribute('instance_uuid');
  }
  public set instanceUuid(value: string) {
    this._instanceUuid = value;
  }
  public resetInstanceUuid() {
    this._instanceUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUuidInput() {
    return this._instanceUuid;
  }

  // privacy_password - computed: false, optional: true, required: false
  private _privacyPassword?: string; 
  public get privacyPassword() {
    return this.getStringAttribute('privacy_password');
  }
  public set privacyPassword(value: string) {
    this._privacyPassword = value;
  }
  public resetPrivacyPassword() {
    this._privacyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyPasswordInput() {
    return this._privacyPassword;
  }

  // privacy_type - computed: false, optional: true, required: false
  private _privacyType?: string; 
  public get privacyType() {
    return this.getStringAttribute('privacy_type');
  }
  public set privacyType(value: string) {
    this._privacyType = value;
  }
  public resetPrivacyType() {
    this._privacyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyTypeInput() {
    return this._privacyType;
  }

  // snmp_mode - computed: false, optional: true, required: false
  private _snmpMode?: string; 
  public get snmpMode() {
    return this.getStringAttribute('snmp_mode');
  }
  public set snmpMode(value: string) {
    this._snmpMode = value;
  }
  public resetSnmpMode() {
    this._snmpMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpModeInput() {
    return this._snmpMode;
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
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_snmpv3 dnacenter_global_credential_snmpv3}
*/
export class GlobalCredentialSnmpv3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_global_credential_snmpv3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlobalCredentialSnmpv3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlobalCredentialSnmpv3 to import
  * @param importFromId The id of the existing GlobalCredentialSnmpv3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_snmpv3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlobalCredentialSnmpv3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_global_credential_snmpv3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_snmpv3 dnacenter_global_credential_snmpv3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlobalCredentialSnmpv3Config = {}
  */
  public constructor(scope: Construct, id: string, config: GlobalCredentialSnmpv3Config = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_global_credential_snmpv3',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21',
        providerVersionConstraint: '1.1.21'
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
    this._parameters.internalValue = config.parameters;
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

  // item - computed: true, optional: false, required: false
  private _item = new GlobalCredentialSnmpv3ItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new GlobalCredentialSnmpv3ParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: GlobalCredentialSnmpv3Parameters) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: globalCredentialSnmpv3ParametersToTerraform(this._parameters.internalValue),
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
      parameters: {
        value: globalCredentialSnmpv3ParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalCredentialSnmpv3ParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
