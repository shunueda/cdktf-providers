// https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection_scim_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectionScimConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the connection for this SCIM configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection_scim_configuration#connection_id ConnectionScimConfiguration#connection_id}
  */
  readonly connectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection_scim_configuration#id ConnectionScimConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User ID attribute for generation unique of user ids. If `user_id_attribute` is set, `mapping` must be set as well. Defaults to `userName` for SAML connections and `externalId` for OIDC connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection_scim_configuration#user_id_attribute ConnectionScimConfiguration#user_id_attribute}
  */
  readonly userIdAttribute?: string;
  /**
  * mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection_scim_configuration#mapping ConnectionScimConfiguration#mapping}
  */
  readonly mapping?: ConnectionScimConfigurationMapping[] | cdktf.IResolvable;
}
export interface ConnectionScimConfigurationMapping {
  /**
  * The field location in the Auth0 schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection_scim_configuration#auth0 ConnectionScimConfiguration#auth0}
  */
  readonly auth0: string;
  /**
  * The field location in the SCIM schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection_scim_configuration#scim ConnectionScimConfiguration#scim}
  */
  readonly scim: string;
}

export function connectionScimConfigurationMappingToTerraform(struct?: ConnectionScimConfigurationMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth0: cdktf.stringToTerraform(struct!.auth0),
    scim: cdktf.stringToTerraform(struct!.scim),
  }
}


export function connectionScimConfigurationMappingToHclTerraform(struct?: ConnectionScimConfigurationMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth0: {
      value: cdktf.stringToHclTerraform(struct!.auth0),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scim: {
      value: cdktf.stringToHclTerraform(struct!.scim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionScimConfigurationMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionScimConfigurationMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth0 !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth0 = this._auth0;
    }
    if (this._scim !== undefined) {
      hasAnyValues = true;
      internalValueResult.scim = this._scim;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionScimConfigurationMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth0 = undefined;
      this._scim = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth0 = value.auth0;
      this._scim = value.scim;
    }
  }

  // auth0 - computed: false, optional: false, required: true
  private _auth0?: string; 
  public get auth0() {
    return this.getStringAttribute('auth0');
  }
  public set auth0(value: string) {
    this._auth0 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get auth0Input() {
    return this._auth0;
  }

  // scim - computed: false, optional: false, required: true
  private _scim?: string; 
  public get scim() {
    return this.getStringAttribute('scim');
  }
  public set scim(value: string) {
    this._scim = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scimInput() {
    return this._scim;
  }
}

export class ConnectionScimConfigurationMappingList extends cdktf.ComplexList {
  public internalValue? : ConnectionScimConfigurationMapping[] | cdktf.IResolvable

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
  public get(index: number): ConnectionScimConfigurationMappingOutputReference {
    return new ConnectionScimConfigurationMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection_scim_configuration auth0_connection_scim_configuration}
*/
export class ConnectionScimConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_connection_scim_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectionScimConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectionScimConfiguration to import
  * @param importFromId The id of the existing ConnectionScimConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection_scim_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectionScimConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_connection_scim_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/connection_scim_configuration auth0_connection_scim_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectionScimConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectionScimConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'auth0_connection_scim_configuration',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.36.0',
        providerVersionConstraint: '1.36.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionId = config.connectionId;
    this._id = config.id;
    this._userIdAttribute = config.userIdAttribute;
    this._mapping.internalValue = config.mapping;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // connection_name - computed: true, optional: false, required: false
  public get connectionName() {
    return this.getStringAttribute('connection_name');
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

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }

  // tenant_name - computed: true, optional: false, required: false
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }

  // user_id_attribute - computed: true, optional: true, required: false
  private _userIdAttribute?: string; 
  public get userIdAttribute() {
    return this.getStringAttribute('user_id_attribute');
  }
  public set userIdAttribute(value: string) {
    this._userIdAttribute = value;
  }
  public resetUserIdAttribute() {
    this._userIdAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdAttributeInput() {
    return this._userIdAttribute;
  }

  // mapping - computed: false, optional: true, required: false
  private _mapping = new ConnectionScimConfigurationMappingList(this, "mapping", true);
  public get mapping() {
    return this._mapping;
  }
  public putMapping(value: ConnectionScimConfigurationMapping[] | cdktf.IResolvable) {
    this._mapping.internalValue = value;
  }
  public resetMapping() {
    this._mapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_id: cdktf.stringToTerraform(this._connectionId),
      id: cdktf.stringToTerraform(this._id),
      user_id_attribute: cdktf.stringToTerraform(this._userIdAttribute),
      mapping: cdktf.listMapper(connectionScimConfigurationMappingToTerraform, true)(this._mapping.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_id: {
        value: cdktf.stringToHclTerraform(this._connectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id_attribute: {
        value: cdktf.stringToHclTerraform(this._userIdAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mapping: {
        value: cdktf.listMapperHcl(connectionScimConfigurationMappingToHclTerraform, true)(this._mapping.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectionScimConfigurationMappingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
