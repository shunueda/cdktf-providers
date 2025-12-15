// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/provision_devices
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProvisionDevicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of devices to be provisioned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/provision_devices#provision_devices ProvisionDevices#provision_devices}
  */
  readonly provisionDevices: ProvisionDevicesProvisionDevices[] | cdktf.IResolvable;
  /**
  * Site Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/provision_devices#site_id ProvisionDevices#site_id}
  */
  readonly siteId: string;
}
export interface ProvisionDevicesProvisionDevices {
  /**
  * ID of network device to be provisioned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/provision_devices#network_device_id ProvisionDevices#network_device_id}
  */
  readonly networkDeviceId: string;
  /**
  * Flag to indicate whether the device should be reprovisioned. If set to `true`, reprovisioning will be triggered on every Terraform apply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/provision_devices#reprovision ProvisionDevices#reprovision}
  */
  readonly reprovision?: boolean | cdktf.IResolvable;
  /**
  * ID of the site this network device needs to be provisioned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/provision_devices#site_id ProvisionDevices#site_id}
  */
  readonly siteId: string;
}

export function provisionDevicesProvisionDevicesToTerraform(struct?: ProvisionDevicesProvisionDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_device_id: cdktf.stringToTerraform(struct!.networkDeviceId),
    reprovision: cdktf.booleanToTerraform(struct!.reprovision),
    site_id: cdktf.stringToTerraform(struct!.siteId),
  }
}


export function provisionDevicesProvisionDevicesToHclTerraform(struct?: ProvisionDevicesProvisionDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_device_id: {
      value: cdktf.stringToHclTerraform(struct!.networkDeviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reprovision: {
      value: cdktf.booleanToHclTerraform(struct!.reprovision),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    site_id: {
      value: cdktf.stringToHclTerraform(struct!.siteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProvisionDevicesProvisionDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProvisionDevicesProvisionDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkDeviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDeviceId = this._networkDeviceId;
    }
    if (this._reprovision !== undefined) {
      hasAnyValues = true;
      internalValueResult.reprovision = this._reprovision;
    }
    if (this._siteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteId = this._siteId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProvisionDevicesProvisionDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkDeviceId = undefined;
      this._reprovision = undefined;
      this._siteId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkDeviceId = value.networkDeviceId;
      this._reprovision = value.reprovision;
      this._siteId = value.siteId;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_device_id - computed: false, optional: false, required: true
  private _networkDeviceId?: string; 
  public get networkDeviceId() {
    return this.getStringAttribute('network_device_id');
  }
  public set networkDeviceId(value: string) {
    this._networkDeviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDeviceIdInput() {
    return this._networkDeviceId;
  }

  // reprovision - computed: false, optional: true, required: false
  private _reprovision?: boolean | cdktf.IResolvable; 
  public get reprovision() {
    return this.getBooleanAttribute('reprovision');
  }
  public set reprovision(value: boolean | cdktf.IResolvable) {
    this._reprovision = value;
  }
  public resetReprovision() {
    this._reprovision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reprovisionInput() {
    return this._reprovision;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }
}

export class ProvisionDevicesProvisionDevicesList extends cdktf.ComplexList {
  public internalValue? : ProvisionDevicesProvisionDevices[] | cdktf.IResolvable

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
  public get(index: number): ProvisionDevicesProvisionDevicesOutputReference {
    return new ProvisionDevicesProvisionDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/provision_devices catalystcenter_provision_devices}
*/
export class ProvisionDevices extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_provision_devices";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProvisionDevices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProvisionDevices to import
  * @param importFromId The id of the existing ProvisionDevices that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/provision_devices#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProvisionDevices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_provision_devices", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/provision_devices catalystcenter_provision_devices} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProvisionDevicesConfig
  */
  public constructor(scope: Construct, id: string, config: ProvisionDevicesConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_provision_devices',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.6',
        providerVersionConstraint: '0.4.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._provisionDevices.internalValue = config.provisionDevices;
    this._siteId = config.siteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // provision_devices - computed: false, optional: false, required: true
  private _provisionDevices = new ProvisionDevicesProvisionDevicesList(this, "provision_devices", true);
  public get provisionDevices() {
    return this._provisionDevices;
  }
  public putProvisionDevices(value: ProvisionDevicesProvisionDevices[] | cdktf.IResolvable) {
    this._provisionDevices.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionDevicesInput() {
    return this._provisionDevices.internalValue;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      provision_devices: cdktf.listMapper(provisionDevicesProvisionDevicesToTerraform, false)(this._provisionDevices.internalValue),
      site_id: cdktf.stringToTerraform(this._siteId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      provision_devices: {
        value: cdktf.listMapperHcl(provisionDevicesProvisionDevicesToHclTerraform, false)(this._provisionDevices.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProvisionDevicesProvisionDevicesList",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
