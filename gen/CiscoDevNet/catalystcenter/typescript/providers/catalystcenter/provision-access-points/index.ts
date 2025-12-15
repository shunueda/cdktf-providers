// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/provision_access_points
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProvisionAccessPointsConfig extends cdktf.TerraformMetaArguments {
  /**
  * AP Zone Name. A custom AP Zone should be passed if no rfProfileName is provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/provision_access_points#ap_zone_name ProvisionAccessPoints#ap_zone_name}
  */
  readonly apZoneName?: string;
  /**
  * List of access points to be provisioned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/provision_access_points#network_devices ProvisionAccessPoints#network_devices}
  */
  readonly networkDevices: ProvisionAccessPointsNetworkDevices[] | cdktf.IResolvable;
  /**
  * RF Profile Name. RF Profile is not allowed for custom AP Zones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/provision_access_points#rf_profile_name ProvisionAccessPoints#rf_profile_name}
  */
  readonly rfProfileName: string;
  /**
  * ID of the site this network device needs to be provisioned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/provision_access_points#site_id ProvisionAccessPoints#site_id}
  */
  readonly siteId: string;
}
export interface ProvisionAccessPointsNetworkDevices {
  /**
  * ID of the Access Point to be provisioned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/provision_access_points#device_id ProvisionAccessPoints#device_id}
  */
  readonly deviceId: string;
  /**
  * ID of the provisioned AP device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/provision_access_points#id ProvisionAccessPoints#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Mesh Role (Applicable only when AP is in Bridge Mode)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/provision_access_points#mesh_role ProvisionAccessPoints#mesh_role}
  */
  readonly meshRole?: string;
  /**
  * Flag to indicate whether the device should be reprovisioned. If set to `true`, reprovisioning will be triggered on every Terraform apply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/provision_access_points#reprovision ProvisionAccessPoints#reprovision}
  */
  readonly reprovision?: boolean | cdktf.IResolvable;
}

export function provisionAccessPointsNetworkDevicesToTerraform(struct?: ProvisionAccessPointsNetworkDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_id: cdktf.stringToTerraform(struct!.deviceId),
    id: cdktf.stringToTerraform(struct!.id),
    mesh_role: cdktf.stringToTerraform(struct!.meshRole),
    reprovision: cdktf.booleanToTerraform(struct!.reprovision),
  }
}


export function provisionAccessPointsNetworkDevicesToHclTerraform(struct?: ProvisionAccessPointsNetworkDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_id: {
      value: cdktf.stringToHclTerraform(struct!.deviceId),
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
    mesh_role: {
      value: cdktf.stringToHclTerraform(struct!.meshRole),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProvisionAccessPointsNetworkDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProvisionAccessPointsNetworkDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceId = this._deviceId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._meshRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.meshRole = this._meshRole;
    }
    if (this._reprovision !== undefined) {
      hasAnyValues = true;
      internalValueResult.reprovision = this._reprovision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProvisionAccessPointsNetworkDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceId = undefined;
      this._id = undefined;
      this._meshRole = undefined;
      this._reprovision = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceId = value.deviceId;
      this._id = value.id;
      this._meshRole = value.meshRole;
      this._reprovision = value.reprovision;
    }
  }

  // device_id - computed: false, optional: false, required: true
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
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

  // mesh_role - computed: false, optional: true, required: false
  private _meshRole?: string; 
  public get meshRole() {
    return this.getStringAttribute('mesh_role');
  }
  public set meshRole(value: string) {
    this._meshRole = value;
  }
  public resetMeshRole() {
    this._meshRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshRoleInput() {
    return this._meshRole;
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
}

export class ProvisionAccessPointsNetworkDevicesList extends cdktf.ComplexList {
  public internalValue? : ProvisionAccessPointsNetworkDevices[] | cdktf.IResolvable

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
  public get(index: number): ProvisionAccessPointsNetworkDevicesOutputReference {
    return new ProvisionAccessPointsNetworkDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/provision_access_points catalystcenter_provision_access_points}
*/
export class ProvisionAccessPoints extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_provision_access_points";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProvisionAccessPoints resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProvisionAccessPoints to import
  * @param importFromId The id of the existing ProvisionAccessPoints that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/provision_access_points#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProvisionAccessPoints to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_provision_access_points", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/provision_access_points catalystcenter_provision_access_points} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProvisionAccessPointsConfig
  */
  public constructor(scope: Construct, id: string, config: ProvisionAccessPointsConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_provision_access_points',
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
    this._apZoneName = config.apZoneName;
    this._networkDevices.internalValue = config.networkDevices;
    this._rfProfileName = config.rfProfileName;
    this._siteId = config.siteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ap_zone_name - computed: false, optional: true, required: false
  private _apZoneName?: string; 
  public get apZoneName() {
    return this.getStringAttribute('ap_zone_name');
  }
  public set apZoneName(value: string) {
    this._apZoneName = value;
  }
  public resetApZoneName() {
    this._apZoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apZoneNameInput() {
    return this._apZoneName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_devices - computed: false, optional: false, required: true
  private _networkDevices = new ProvisionAccessPointsNetworkDevicesList(this, "network_devices", true);
  public get networkDevices() {
    return this._networkDevices;
  }
  public putNetworkDevices(value: ProvisionAccessPointsNetworkDevices[] | cdktf.IResolvable) {
    this._networkDevices.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDevicesInput() {
    return this._networkDevices.internalValue;
  }

  // rf_profile_name - computed: false, optional: false, required: true
  private _rfProfileName?: string; 
  public get rfProfileName() {
    return this.getStringAttribute('rf_profile_name');
  }
  public set rfProfileName(value: string) {
    this._rfProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rfProfileNameInput() {
    return this._rfProfileName;
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
      ap_zone_name: cdktf.stringToTerraform(this._apZoneName),
      network_devices: cdktf.listMapper(provisionAccessPointsNetworkDevicesToTerraform, false)(this._networkDevices.internalValue),
      rf_profile_name: cdktf.stringToTerraform(this._rfProfileName),
      site_id: cdktf.stringToTerraform(this._siteId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ap_zone_name: {
        value: cdktf.stringToHclTerraform(this._apZoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_devices: {
        value: cdktf.listMapperHcl(provisionAccessPointsNetworkDevicesToHclTerraform, false)(this._networkDevices.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProvisionAccessPointsNetworkDevicesList",
      },
      rf_profile_name: {
        value: cdktf.stringToHclTerraform(this._rfProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
