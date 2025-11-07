// https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether this resource should tell the controller to adopt the device on create. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/device#allow_adoption Device#allow_adoption}
  */
  readonly allowAdoption?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether this resource should tell the controller to forget the device on destroy. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/device#forget_on_destroy Device#forget_on_destroy}
  */
  readonly forgetOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * The MAC address of the device. This can be specified so that the provider can take control of a device (since devices are created through adoption).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/device#mac Device#mac}
  */
  readonly mac?: string;
  /**
  * The name of the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/device#name Device#name}
  */
  readonly name?: string;
  /**
  * The name of the site to associate the device with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/device#site Device#site}
  */
  readonly site?: string;
  /**
  * port_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/device#port_override Device#port_override}
  */
  readonly portOverride?: DevicePortOverride[] | cdktf.IResolvable;
}
export interface DevicePortOverride {
  /**
  * Number of ports in the aggregate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/device#aggregate_num_ports Device#aggregate_num_ports}
  */
  readonly aggregateNumPorts?: number;
  /**
  * Human-readable name of the port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/device#name Device#name}
  */
  readonly name?: string;
  /**
  * Switch port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/device#number Device#number}
  */
  readonly number: number;
  /**
  * Operating mode of the port, valid values are `switch`, `mirror`, and `aggregate`. Defaults to `switch`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/device#op_mode Device#op_mode}
  */
  readonly opMode?: string;
  /**
  * ID of the Port Profile used on this port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/device#port_profile_id Device#port_profile_id}
  */
  readonly portProfileId?: string;
}

export function devicePortOverrideToTerraform(struct?: DevicePortOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregate_num_ports: cdktf.numberToTerraform(struct!.aggregateNumPorts),
    name: cdktf.stringToTerraform(struct!.name),
    number: cdktf.numberToTerraform(struct!.number),
    op_mode: cdktf.stringToTerraform(struct!.opMode),
    port_profile_id: cdktf.stringToTerraform(struct!.portProfileId),
  }
}


export function devicePortOverrideToHclTerraform(struct?: DevicePortOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregate_num_ports: {
      value: cdktf.numberToHclTerraform(struct!.aggregateNumPorts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    op_mode: {
      value: cdktf.stringToHclTerraform(struct!.opMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.portProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevicePortOverrideOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DevicePortOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregateNumPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregateNumPorts = this._aggregateNumPorts;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._opMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.opMode = this._opMode;
    }
    if (this._portProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.portProfileId = this._portProfileId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevicePortOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregateNumPorts = undefined;
      this._name = undefined;
      this._number = undefined;
      this._opMode = undefined;
      this._portProfileId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregateNumPorts = value.aggregateNumPorts;
      this._name = value.name;
      this._number = value.number;
      this._opMode = value.opMode;
      this._portProfileId = value.portProfileId;
    }
  }

  // aggregate_num_ports - computed: false, optional: true, required: false
  private _aggregateNumPorts?: number; 
  public get aggregateNumPorts() {
    return this.getNumberAttribute('aggregate_num_ports');
  }
  public set aggregateNumPorts(value: number) {
    this._aggregateNumPorts = value;
  }
  public resetAggregateNumPorts() {
    this._aggregateNumPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateNumPortsInput() {
    return this._aggregateNumPorts;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // number - computed: false, optional: false, required: true
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // op_mode - computed: false, optional: true, required: false
  private _opMode?: string; 
  public get opMode() {
    return this.getStringAttribute('op_mode');
  }
  public set opMode(value: string) {
    this._opMode = value;
  }
  public resetOpMode() {
    this._opMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opModeInput() {
    return this._opMode;
  }

  // port_profile_id - computed: false, optional: true, required: false
  private _portProfileId?: string; 
  public get portProfileId() {
    return this.getStringAttribute('port_profile_id');
  }
  public set portProfileId(value: string) {
    this._portProfileId = value;
  }
  public resetPortProfileId() {
    this._portProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portProfileIdInput() {
    return this._portProfileId;
  }
}

export class DevicePortOverrideList extends cdktf.ComplexList {
  public internalValue? : DevicePortOverride[] | cdktf.IResolvable

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
  public get(index: number): DevicePortOverrideOutputReference {
    return new DevicePortOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/device unifi_device}
*/
export class Device extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "unifi_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Device resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Device to import
  * @param importFromId The id of the existing Device that should be imported. Refer to the {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Device to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "unifi_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/device unifi_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeviceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DeviceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'unifi_device',
      terraformGeneratorMetadata: {
        providerName: 'unifi',
        providerVersion: '0.41.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowAdoption = config.allowAdoption;
    this._forgetOnDestroy = config.forgetOnDestroy;
    this._mac = config.mac;
    this._name = config.name;
    this._site = config.site;
    this._portOverride.internalValue = config.portOverride;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_adoption - computed: false, optional: true, required: false
  private _allowAdoption?: boolean | cdktf.IResolvable; 
  public get allowAdoption() {
    return this.getBooleanAttribute('allow_adoption');
  }
  public set allowAdoption(value: boolean | cdktf.IResolvable) {
    this._allowAdoption = value;
  }
  public resetAllowAdoption() {
    this._allowAdoption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAdoptionInput() {
    return this._allowAdoption;
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // forget_on_destroy - computed: false, optional: true, required: false
  private _forgetOnDestroy?: boolean | cdktf.IResolvable; 
  public get forgetOnDestroy() {
    return this.getBooleanAttribute('forget_on_destroy');
  }
  public set forgetOnDestroy(value: boolean | cdktf.IResolvable) {
    this._forgetOnDestroy = value;
  }
  public resetForgetOnDestroy() {
    this._forgetOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forgetOnDestroyInput() {
    return this._forgetOnDestroy;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mac - computed: true, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // site - computed: true, optional: true, required: false
  private _site?: string; 
  public get site() {
    return this.getStringAttribute('site');
  }
  public set site(value: string) {
    this._site = value;
  }
  public resetSite() {
    this._site = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
  }

  // port_override - computed: false, optional: true, required: false
  private _portOverride = new DevicePortOverrideList(this, "port_override", true);
  public get portOverride() {
    return this._portOverride;
  }
  public putPortOverride(value: DevicePortOverride[] | cdktf.IResolvable) {
    this._portOverride.internalValue = value;
  }
  public resetPortOverride() {
    this._portOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portOverrideInput() {
    return this._portOverride.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_adoption: cdktf.booleanToTerraform(this._allowAdoption),
      forget_on_destroy: cdktf.booleanToTerraform(this._forgetOnDestroy),
      mac: cdktf.stringToTerraform(this._mac),
      name: cdktf.stringToTerraform(this._name),
      site: cdktf.stringToTerraform(this._site),
      port_override: cdktf.listMapper(devicePortOverrideToTerraform, true)(this._portOverride.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_adoption: {
        value: cdktf.booleanToHclTerraform(this._allowAdoption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      forget_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._forgetOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mac: {
        value: cdktf.stringToHclTerraform(this._mac),
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
      site: {
        value: cdktf.stringToHclTerraform(this._site),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_override: {
        value: cdktf.listMapperHcl(devicePortOverrideToHclTerraform, true)(this._portOverride.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DevicePortOverrideList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
