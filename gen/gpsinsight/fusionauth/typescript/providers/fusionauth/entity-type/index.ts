// https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/entity_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EntityTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * An object that can hold any information about the Entity Type that should be persisted. Must be a JSON string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/entity_type#data EntityType#data}
  */
  readonly data?: string;
  /**
  * The Id to use for the new Entity Type. If not specified a secure random UUID will be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/entity_type#entity_type_id EntityType#entity_type_id}
  */
  readonly entityTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/entity_type#id EntityType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A descriptive name for the entity type (i.e. 'Customer' or 'Email_Service').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/entity_type#name EntityType#name}
  */
  readonly name: string;
  /**
  * jwt_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/entity_type#jwt_configuration EntityType#jwt_configuration}
  */
  readonly jwtConfiguration?: EntityTypeJwtConfiguration;
}
export interface EntityTypeJwtConfiguration {
  /**
  * The unique id of the signing key used to sign the access token. Required when enabled is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/entity_type#access_token_key_id EntityType#access_token_key_id}
  */
  readonly accessTokenKeyId?: string;
  /**
  * Indicates if this application is using the JWT configuration defined here or the global JWT configuration defined by the Tenant. If this is false the signing algorithm configured in the Tenant will be used. If true the signing algorithm defined in this application will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/entity_type#enabled EntityType#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The length of time in seconds the JWT will live before it is expired and no longer valid. Required when enabled is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/entity_type#time_to_live_in_seconds EntityType#time_to_live_in_seconds}
  */
  readonly timeToLiveInSeconds?: number;
}

export function entityTypeJwtConfigurationToTerraform(struct?: EntityTypeJwtConfigurationOutputReference | EntityTypeJwtConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token_key_id: cdktf.stringToTerraform(struct!.accessTokenKeyId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    time_to_live_in_seconds: cdktf.numberToTerraform(struct!.timeToLiveInSeconds),
  }
}


export function entityTypeJwtConfigurationToHclTerraform(struct?: EntityTypeJwtConfigurationOutputReference | EntityTypeJwtConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessTokenKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_to_live_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeToLiveInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EntityTypeJwtConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EntityTypeJwtConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessTokenKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenKeyId = this._accessTokenKeyId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._timeToLiveInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToLiveInSeconds = this._timeToLiveInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EntityTypeJwtConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessTokenKeyId = undefined;
      this._enabled = undefined;
      this._timeToLiveInSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessTokenKeyId = value.accessTokenKeyId;
      this._enabled = value.enabled;
      this._timeToLiveInSeconds = value.timeToLiveInSeconds;
    }
  }

  // access_token_key_id - computed: false, optional: true, required: false
  private _accessTokenKeyId?: string; 
  public get accessTokenKeyId() {
    return this.getStringAttribute('access_token_key_id');
  }
  public set accessTokenKeyId(value: string) {
    this._accessTokenKeyId = value;
  }
  public resetAccessTokenKeyId() {
    this._accessTokenKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenKeyIdInput() {
    return this._accessTokenKeyId;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // time_to_live_in_seconds - computed: false, optional: true, required: false
  private _timeToLiveInSeconds?: number; 
  public get timeToLiveInSeconds() {
    return this.getNumberAttribute('time_to_live_in_seconds');
  }
  public set timeToLiveInSeconds(value: number) {
    this._timeToLiveInSeconds = value;
  }
  public resetTimeToLiveInSeconds() {
    this._timeToLiveInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToLiveInSecondsInput() {
    return this._timeToLiveInSeconds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/entity_type fusionauth_entity_type}
*/
export class EntityType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fusionauth_entity_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EntityType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EntityType to import
  * @param importFromId The id of the existing EntityType that should be imported. Refer to the {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/entity_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EntityType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fusionauth_entity_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/entity_type fusionauth_entity_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EntityTypeConfig
  */
  public constructor(scope: Construct, id: string, config: EntityTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'fusionauth_entity_type',
      terraformGeneratorMetadata: {
        providerName: 'fusionauth',
        providerVersion: '0.1.100'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._data = config.data;
    this._entityTypeId = config.entityTypeId;
    this._id = config.id;
    this._name = config.name;
    this._jwtConfiguration.internalValue = config.jwtConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // entity_type_id - computed: true, optional: true, required: false
  private _entityTypeId?: string; 
  public get entityTypeId() {
    return this.getStringAttribute('entity_type_id');
  }
  public set entityTypeId(value: string) {
    this._entityTypeId = value;
  }
  public resetEntityTypeId() {
    this._entityTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeIdInput() {
    return this._entityTypeId;
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

  // jwt_configuration - computed: false, optional: true, required: false
  private _jwtConfiguration = new EntityTypeJwtConfigurationOutputReference(this, "jwt_configuration");
  public get jwtConfiguration() {
    return this._jwtConfiguration;
  }
  public putJwtConfiguration(value: EntityTypeJwtConfiguration) {
    this._jwtConfiguration.internalValue = value;
  }
  public resetJwtConfiguration() {
    this._jwtConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtConfigurationInput() {
    return this._jwtConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data: cdktf.stringToTerraform(this._data),
      entity_type_id: cdktf.stringToTerraform(this._entityTypeId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      jwt_configuration: entityTypeJwtConfigurationToTerraform(this._jwtConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data: {
        value: cdktf.stringToHclTerraform(this._data),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_type_id: {
        value: cdktf.stringToHclTerraform(this._entityTypeId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwt_configuration: {
        value: entityTypeJwtConfigurationToHclTerraform(this._jwtConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EntityTypeJwtConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
