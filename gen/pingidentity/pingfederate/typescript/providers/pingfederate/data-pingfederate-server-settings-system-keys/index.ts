// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/server_settings_system_keys
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingfederateServerSettingsSystemKeysConfig extends cdktf.TerraformMetaArguments {
}
export interface DataPingfederateServerSettingsSystemKeysCurrent {
}

export function dataPingfederateServerSettingsSystemKeysCurrentToTerraform(struct?: DataPingfederateServerSettingsSystemKeysCurrent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateServerSettingsSystemKeysCurrentToHclTerraform(struct?: DataPingfederateServerSettingsSystemKeysCurrent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateServerSettingsSystemKeysCurrentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateServerSettingsSystemKeysCurrent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateServerSettingsSystemKeysCurrent | undefined) {
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
export interface DataPingfederateServerSettingsSystemKeysPending {
}

export function dataPingfederateServerSettingsSystemKeysPendingToTerraform(struct?: DataPingfederateServerSettingsSystemKeysPending): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateServerSettingsSystemKeysPendingToHclTerraform(struct?: DataPingfederateServerSettingsSystemKeysPending): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateServerSettingsSystemKeysPendingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateServerSettingsSystemKeysPending | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateServerSettingsSystemKeysPending | undefined) {
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
export interface DataPingfederateServerSettingsSystemKeysPrevious {
}

export function dataPingfederateServerSettingsSystemKeysPreviousToTerraform(struct?: DataPingfederateServerSettingsSystemKeysPrevious): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateServerSettingsSystemKeysPreviousToHclTerraform(struct?: DataPingfederateServerSettingsSystemKeysPrevious): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateServerSettingsSystemKeysPreviousOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateServerSettingsSystemKeysPrevious | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateServerSettingsSystemKeysPrevious | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/server_settings_system_keys pingfederate_server_settings_system_keys}
*/
export class DataPingfederateServerSettingsSystemKeys extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_server_settings_system_keys";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingfederateServerSettingsSystemKeys resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingfederateServerSettingsSystemKeys to import
  * @param importFromId The id of the existing DataPingfederateServerSettingsSystemKeys that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/server_settings_system_keys#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingfederateServerSettingsSystemKeys to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_server_settings_system_keys", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/server_settings_system_keys pingfederate_server_settings_system_keys} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingfederateServerSettingsSystemKeysConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPingfederateServerSettingsSystemKeysConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_server_settings_system_keys',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2',
        providerVersionConstraint: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // current - computed: true, optional: false, required: false
  private _current = new DataPingfederateServerSettingsSystemKeysCurrentOutputReference(this, "current");
  public get current() {
    return this._current;
  }

  // pending - computed: true, optional: false, required: false
  private _pending = new DataPingfederateServerSettingsSystemKeysPendingOutputReference(this, "pending");
  public get pending() {
    return this._pending;
  }

  // previous - computed: true, optional: false, required: false
  private _previous = new DataPingfederateServerSettingsSystemKeysPreviousOutputReference(this, "previous");
  public get previous() {
    return this._previous;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
