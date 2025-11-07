// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings_system_keys_rotate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerSettingsSystemKeysRotateConfig extends cdktf.TerraformMetaArguments {
  /**
  * A meta-argument map of values that, if any values are changed, will force rotation of the system keys. Adding values to and removing values from the map will not trigger a key rotation. This parameter can be used to control time-based rotation using Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings_system_keys_rotate#rotation_trigger_values ServerSettingsSystemKeysRotate#rotation_trigger_values}
  */
  readonly rotationTriggerValues?: { [key: string]: string };
}
export interface ServerSettingsSystemKeysRotateCurrent {
}

export function serverSettingsSystemKeysRotateCurrentToTerraform(struct?: ServerSettingsSystemKeysRotateCurrent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function serverSettingsSystemKeysRotateCurrentToHclTerraform(struct?: ServerSettingsSystemKeysRotateCurrent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ServerSettingsSystemKeysRotateCurrentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerSettingsSystemKeysRotateCurrent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerSettingsSystemKeysRotateCurrent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // encrypted_key_data - computed: true, optional: false, required: false
  public get encryptedKeyData() {
    return this.getStringAttribute('encrypted_key_data');
  }
}
export interface ServerSettingsSystemKeysRotatePending {
}

export function serverSettingsSystemKeysRotatePendingToTerraform(struct?: ServerSettingsSystemKeysRotatePending): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function serverSettingsSystemKeysRotatePendingToHclTerraform(struct?: ServerSettingsSystemKeysRotatePending): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ServerSettingsSystemKeysRotatePendingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerSettingsSystemKeysRotatePending | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerSettingsSystemKeysRotatePending | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // encrypted_key_data - computed: true, optional: false, required: false
  public get encryptedKeyData() {
    return this.getStringAttribute('encrypted_key_data');
  }
}
export interface ServerSettingsSystemKeysRotatePrevious {
}

export function serverSettingsSystemKeysRotatePreviousToTerraform(struct?: ServerSettingsSystemKeysRotatePrevious): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function serverSettingsSystemKeysRotatePreviousToHclTerraform(struct?: ServerSettingsSystemKeysRotatePrevious): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ServerSettingsSystemKeysRotatePreviousOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerSettingsSystemKeysRotatePrevious | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerSettingsSystemKeysRotatePrevious | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // encrypted_key_data - computed: true, optional: false, required: false
  public get encryptedKeyData() {
    return this.getStringAttribute('encrypted_key_data');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings_system_keys_rotate pingfederate_server_settings_system_keys_rotate}
*/
export class ServerSettingsSystemKeysRotate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_server_settings_system_keys_rotate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServerSettingsSystemKeysRotate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServerSettingsSystemKeysRotate to import
  * @param importFromId The id of the existing ServerSettingsSystemKeysRotate that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings_system_keys_rotate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServerSettingsSystemKeysRotate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_server_settings_system_keys_rotate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings_system_keys_rotate pingfederate_server_settings_system_keys_rotate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerSettingsSystemKeysRotateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ServerSettingsSystemKeysRotateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_server_settings_system_keys_rotate',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._rotationTriggerValues = config.rotationTriggerValues;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // current - computed: true, optional: false, required: false
  private _current = new ServerSettingsSystemKeysRotateCurrentOutputReference(this, "current");
  public get current() {
    return this._current;
  }

  // pending - computed: true, optional: false, required: false
  private _pending = new ServerSettingsSystemKeysRotatePendingOutputReference(this, "pending");
  public get pending() {
    return this._pending;
  }

  // previous - computed: true, optional: false, required: false
  private _previous = new ServerSettingsSystemKeysRotatePreviousOutputReference(this, "previous");
  public get previous() {
    return this._previous;
  }

  // rotation_trigger_values - computed: false, optional: true, required: false
  private _rotationTriggerValues?: { [key: string]: string }; 
  public get rotationTriggerValues() {
    return this.getStringMapAttribute('rotation_trigger_values');
  }
  public set rotationTriggerValues(value: { [key: string]: string }) {
    this._rotationTriggerValues = value;
  }
  public resetRotationTriggerValues() {
    this._rotationTriggerValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationTriggerValuesInput() {
    return this._rotationTriggerValues;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      rotation_trigger_values: cdktf.hashMapper(cdktf.stringToTerraform)(this._rotationTriggerValues),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      rotation_trigger_values: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._rotationTriggerValues),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
