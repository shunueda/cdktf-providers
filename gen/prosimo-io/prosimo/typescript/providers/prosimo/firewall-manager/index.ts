// https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/firewall_manager
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallManagerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Target API Key for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/firewall_manager#api_key FirewallManager#api_key}
  */
  readonly apiKey: string;
  /**
  * Type of Integration, e.g: panorama
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/firewall_manager#integration_type FirewallManager#integration_type}
  */
  readonly integrationType: string;
  /**
  * Target IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/firewall_manager#ip_address FirewallManager#ip_address}
  */
  readonly ipAddress: string;
  /**
  * license_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/firewall_manager#license_settings FirewallManager#license_settings}
  */
  readonly licenseSettings: FirewallManagerLicenseSettings[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/firewall_manager#timeouts FirewallManager#timeouts}
  */
  readonly timeouts?: FirewallManagerTimeouts;
}
export interface FirewallManagerLicenseSettings {
  /**
  * Firewall Family
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/firewall_manager#firewall_family FirewallManager#firewall_family}
  */
  readonly firewallFamily: string;
  /**
  * Instance Family
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/firewall_manager#instance_family FirewallManager#instance_family}
  */
  readonly instanceFamily: string;
  /**
  * Mode of license, e.g: Bring your own license (BYOL) Pay as you go (PAYG)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/firewall_manager#license_mode FirewallManager#license_mode}
  */
  readonly licenseMode: string;
  /**
  * License Type, e.g: Bundle1, Bundle2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/firewall_manager#license_type FirewallManager#license_type}
  */
  readonly licenseType?: string;
}

export function firewallManagerLicenseSettingsToTerraform(struct?: FirewallManagerLicenseSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    firewall_family: cdktf.stringToTerraform(struct!.firewallFamily),
    instance_family: cdktf.stringToTerraform(struct!.instanceFamily),
    license_mode: cdktf.stringToTerraform(struct!.licenseMode),
    license_type: cdktf.stringToTerraform(struct!.licenseType),
  }
}


export function firewallManagerLicenseSettingsToHclTerraform(struct?: FirewallManagerLicenseSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    firewall_family: {
      value: cdktf.stringToHclTerraform(struct!.firewallFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_family: {
      value: cdktf.stringToHclTerraform(struct!.instanceFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_mode: {
      value: cdktf.stringToHclTerraform(struct!.licenseMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_type: {
      value: cdktf.stringToHclTerraform(struct!.licenseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallManagerLicenseSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallManagerLicenseSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firewallFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallFamily = this._firewallFamily;
    }
    if (this._instanceFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceFamily = this._instanceFamily;
    }
    if (this._licenseMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseMode = this._licenseMode;
    }
    if (this._licenseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseType = this._licenseType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallManagerLicenseSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._firewallFamily = undefined;
      this._instanceFamily = undefined;
      this._licenseMode = undefined;
      this._licenseType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._firewallFamily = value.firewallFamily;
      this._instanceFamily = value.instanceFamily;
      this._licenseMode = value.licenseMode;
      this._licenseType = value.licenseType;
    }
  }

  // firewall_family - computed: false, optional: false, required: true
  private _firewallFamily?: string; 
  public get firewallFamily() {
    return this.getStringAttribute('firewall_family');
  }
  public set firewallFamily(value: string) {
    this._firewallFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallFamilyInput() {
    return this._firewallFamily;
  }

  // instance_family - computed: false, optional: false, required: true
  private _instanceFamily?: string; 
  public get instanceFamily() {
    return this.getStringAttribute('instance_family');
  }
  public set instanceFamily(value: string) {
    this._instanceFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceFamilyInput() {
    return this._instanceFamily;
  }

  // license_mode - computed: false, optional: false, required: true
  private _licenseMode?: string; 
  public get licenseMode() {
    return this.getStringAttribute('license_mode');
  }
  public set licenseMode(value: string) {
    this._licenseMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseModeInput() {
    return this._licenseMode;
  }

  // license_type - computed: false, optional: true, required: false
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
  }
}

export class FirewallManagerLicenseSettingsList extends cdktf.ComplexList {
  public internalValue? : FirewallManagerLicenseSettings[] | cdktf.IResolvable

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
  public get(index: number): FirewallManagerLicenseSettingsOutputReference {
    return new FirewallManagerLicenseSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallManagerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/firewall_manager#create FirewallManager#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/firewall_manager#delete FirewallManager#delete}
  */
  readonly delete?: string;
}

export function firewallManagerTimeoutsToTerraform(struct?: FirewallManagerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function firewallManagerTimeoutsToHclTerraform(struct?: FirewallManagerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallManagerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallManagerTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallManagerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/firewall_manager prosimo_firewall_manager}
*/
export class FirewallManager extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prosimo_firewall_manager";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallManager resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallManager to import
  * @param importFromId The id of the existing FirewallManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/firewall_manager#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallManager to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prosimo_firewall_manager", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/firewall_manager prosimo_firewall_manager} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallManagerConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallManagerConfig) {
    super(scope, id, {
      terraformResourceType: 'prosimo_firewall_manager',
      terraformGeneratorMetadata: {
        providerName: 'prosimo',
        providerVersion: '4.5.3',
        providerVersionConstraint: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiKey = config.apiKey;
    this._integrationType = config.integrationType;
    this._ipAddress = config.ipAddress;
    this._licenseSettings.internalValue = config.licenseSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_type - computed: false, optional: false, required: true
  private _integrationType?: string; 
  public get integrationType() {
    return this.getStringAttribute('integration_type');
  }
  public set integrationType(value: string) {
    this._integrationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationTypeInput() {
    return this._integrationType;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // license_settings - computed: false, optional: false, required: true
  private _licenseSettings = new FirewallManagerLicenseSettingsList(this, "license_settings", true);
  public get licenseSettings() {
    return this._licenseSettings;
  }
  public putLicenseSettings(value: FirewallManagerLicenseSettings[] | cdktf.IResolvable) {
    this._licenseSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseSettingsInput() {
    return this._licenseSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FirewallManagerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FirewallManagerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.stringToTerraform(this._apiKey),
      integration_type: cdktf.stringToTerraform(this._integrationType),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      license_settings: cdktf.listMapper(firewallManagerLicenseSettingsToTerraform, true)(this._licenseSettings.internalValue),
      timeouts: firewallManagerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration_type: {
        value: cdktf.stringToHclTerraform(this._integrationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_settings: {
        value: cdktf.listMapperHcl(firewallManagerLicenseSettingsToHclTerraform, true)(this._licenseSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallManagerLicenseSettingsList",
      },
      timeouts: {
        value: firewallManagerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FirewallManagerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
